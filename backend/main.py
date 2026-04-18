from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import numpy as np
import tensorflow as tf

app = FastAPI(title="Crypto Volatility Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Crypto Volatility Prediction System Active"}

@app.get("/predict/{symbol}")
def predict_volatility(symbol: str):
    # Dummy implementation for prediction
    # Normally we would load a model from the models/ directory
    # model = tf.keras.models.load_model(f"models/{symbol}.h5")
    
    return {
        "symbol": symbol,
        "prediction": {"volatility_score": np.random.uniform(0.1, 0.9)},
        "status": "success"
    }
