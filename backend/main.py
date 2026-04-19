import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ml_engine import VolatilityPredictor
import logging
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Neural Frontier API")

# Configure CORS for production
frontend_url = os.getenv("FRONTEND_URL", "*")
origins = [frontend_url, "http://localhost:5173", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if frontend_url != "*" else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ml_engine = None

@app.on_event("startup")
def startup_event():
    global ml_engine
    logging.info("Initializing ML Engine and preloading TensorFlow models...")
    # This will load .h5 models into memory synchronously before startup completes
    ml_engine = VolatilityPredictor()

@app.get("/")
def read_root():
    return {"message": "Crypto Volatility Prediction System Active"}

@app.get("/predict/{ticker}")
def predict_volatility(ticker: str):
    return ml_engine.predict(ticker)

@app.get("/api/history/{ticker}")
def get_history(ticker: str):
    return ml_engine.predict_hourly_history(ticker)

@app.get("/api/markets/summary")
async def get_markets_summary():
    return await ml_engine.get_markets_summary()
