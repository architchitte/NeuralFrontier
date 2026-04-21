import os

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from ml_engine import VolatilityPredictor
import logging
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Neural Frontier API")

# CORS Configuration - Development Mode
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from fastapi import HTTPException

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    logging.error(f"Global Exception: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"error": "Internal Server Error", "detail": str(exc)},
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
