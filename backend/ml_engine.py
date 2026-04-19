import os
import asyncio
import yfinance as yf
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf

# Robust Keras 3 compatibility wrappers to strip unrecognized metadata
class SafeDense(tf.keras.layers.Dense):
    @classmethod
    def from_config(cls, config):
        config.pop('quantization_config', None)
        return super().from_config(config)

class SafeInputLayer(tf.keras.layers.InputLayer):
    @classmethod
    def from_config(cls, config):
        config.pop('optional', None)
        return super().from_config(config)

class VolatilityPredictor:
    def __init__(self):
        self.models = {}
        target_tickers = ["BTC", "ETH", "SOL", "ADA"]
        # Intercept deserialization with custom objects to handle version mismatch
        custom_hooks = {'Dense': SafeDense, 'InputLayer': SafeInputLayer}
        base_dir = os.path.dirname(os.path.abspath(__file__))
        
        for ticker in target_tickers:
            model_path = os.path.join(base_dir, "models", f"{ticker.lower()}_inr_volatility_model.keras")
            # Using compile=False as weight loading is priority over training config
            self.models[ticker] = tf.keras.models.load_model(
                model_path, 
                custom_objects=custom_hooks,
                compile=False
            )

    def predict(self, ticker: str):
        ticker = ticker.upper()
        if ticker not in self.models:
            raise ValueError(f"Ticker {ticker} not supported.")
        
        yf_ticker = f"{ticker}-INR"
        
        # Download 90 days of daily data
        tkr = yf.Ticker(yf_ticker)
        data = tkr.history(period="90d", interval="1d")
        
        # Calculate daily returns
        data['Returns'] = data['Close'].pct_change()
        
        # Calculate 30-day rolling custom standard deviation (Volatility_30d)
        data['Volatility_30d'] = data['Returns'].rolling(window=30).std()
        
        # Drop NaN values resulting from the rolling window and pct_change
        data = data.dropna()
        
        # Isolate the last 60 days
        if len(data) < 60:
            raise ValueError("Not enough data to create 60-day sequence after rolling window and dropna.")
            
        sequence_data = data.tail(60)[['Close', 'Volume', 'Volatility_30d']]
        current_price = float(sequence_data['Close'].iloc[-1])
        
        # Apply MinMaxScaler
        scaler = MinMaxScaler(feature_range=(0, 1))
        scaled_data = scaler.fit_transform(sequence_data) # scaling based on inference window
        
        # Reshape to (1, 60, 3) --> (samples, time_steps, features)
        reshaped_data = scaled_data.reshape((1, 60, 3))
        
        # Inference
        model = self.models[ticker]
        prediction_val = float(model.predict(reshaped_data)[0][0])
        
        if prediction_val > 0.5:
            regime = "High Volatility Regime"
        else:
            regime = "Low Volatility Regime"
            
        confidence = prediction_val if prediction_val > 0.5 else 1.0 - prediction_val
        confidence_percentage = round(confidence * 100, 2)
        
        # Fetch 24 hours of 1h interval data for the UI chart
        history_1h = tkr.history(period="2d", interval="1h")
        last_24h = history_1h.tail(24)
        chart_data = []
        for idx, row in last_24h.iterrows():
            chart_data.append({
                "time": idx.strftime("%H:%M"),
                "val": round(float(row['Close']), 2)
            })
        
        return {
            "ticker": ticker,
            "prediction": regime,
            "confidence": confidence_percentage,
            "current_price_inr": current_price,
            "chart_data": chart_data
        }

    def predict_hourly_history(self, ticker: str):
        ticker = ticker.upper()
        if ticker not in self.models:
            raise ValueError(f"Ticker {ticker} not supported.")
            
        yf_ticker = f"{ticker}-INR"
        tkr = yf.Ticker(yf_ticker)
        data = tkr.history(period="7d", interval="1h")
        
        data['Returns'] = data['Close'].pct_change()
        data['Volatility_30d'] = data['Returns'].rolling(window=30).std()
        data = data.dropna()
        
        if len(data) < 84:
            raise ValueError("Not enough data to create 24 hours of sequence history.")
            
        results = []
        end_idx = len(data)
        start_idx = end_idx - 24
        
        for i in range(start_idx, end_idx):
            sequence_data = data.iloc[i-60 : i][['Close', 'Volume', 'Volatility_30d']]
            current_price = float(data['Close'].iloc[i])
            
            scaler = MinMaxScaler(feature_range=(0, 1))
            scaled_data = scaler.fit_transform(sequence_data) # scaling based on inference window
            reshaped_data = scaled_data.reshape((1, 60, 3))
            
            model = self.models[ticker]
            prediction_val = float(model.predict(reshaped_data, verbose=0)[0][0])
            
            regime = "high" if prediction_val > 0.5 else "low"
            
            results.append({
                "time": data.index[i].strftime("%H:%M"),
                "price": current_price,
                "regime": regime
            })
            
        return results

    @staticmethod
    def _calculate_rsi(series: pd.Series, window: int = 14) -> float:
        delta = series.diff()
        up = delta.clip(lower=0)
        down = -1 * delta.clip(upper=0)
        ema_up = up.ewm(com=window - 1, adjust=False).mean()
        ema_down = down.ewm(com=window - 1, adjust=False).mean()
        rs = ema_up / ema_down
        rsi = 100 - (100 / (1 + rs))
        return float(rsi.iloc[-1])

    async def get_markets_summary(self):
        tickers = ["BTC", "ETH", "SOL", "ADA"]
        
        def fetch_ticker(t):
            tkr = yf.Ticker(f"{t}-INR")
            return t, tkr.history(period="90d", interval="1d")

        tasks = [asyncio.to_thread(fetch_ticker, t) for t in tickers]
        results = await asyncio.gather(*tasks)
        
        assets_data = {}
        volatility_series = {}
        global_probabilities = []
        
        for ticker, data in results:
            if len(data) < 2:
                continue
                
            data['Returns'] = data['Close'].pct_change()
            data['Volatility_30d'] = data['Returns'].rolling(window=30).std()
            
            vol_clean = data['Volatility_30d'].dropna()
            volatility_series[ticker] = vol_clean
            
            clean_data = data.dropna()
            if len(clean_data) < 60:
                continue
                
            rsi_val = self._calculate_rsi(data['Close'], 14)
            
            sequence_data = clean_data.tail(60)[['Close', 'Volume', 'Volatility_30d']]
            current_price = float(sequence_data['Close'].iloc[-1])
            prev_price = float(data['Close'].iloc[-2])
            daily_change_pct = ((current_price - prev_price) / prev_price) * 100
            
            scaler = MinMaxScaler(feature_range=(0, 1))
            scaled_data = scaler.fit_transform(sequence_data)
            reshaped_data = scaled_data.reshape((1, 60, 3))
            
            model = self.models[ticker]
            prediction_val = float(model.predict(reshaped_data, verbose=0)[0][0])
            
            global_probabilities.append(prediction_val)
            
            if prediction_val > 0.5:
                regime = "High Volatility"
            else:
                regime = "Low Volatility"
                
            confidence = prediction_val if prediction_val > 0.5 else 1.0 - prediction_val
            
            assets_data[ticker] = {
                "price_inr": current_price,
                "regime": regime,
                "confidence": round(confidence * 100, 2),
                "rsi": round(rsi_val, 2),
                "daily_change_pct": round(daily_change_pct, 2)
            }
            
        global_entropy = float(np.mean(global_probabilities)) if global_probabilities else 0.0
        
        df_vol = pd.DataFrame(volatility_series).dropna()
        corr_matrix = df_vol.corr().to_dict() if not df_vol.empty else {}
        
        return {
            "global_entropy": global_entropy,
            "assets": assets_data,
            "correlation_matrix": corr_matrix
        }
