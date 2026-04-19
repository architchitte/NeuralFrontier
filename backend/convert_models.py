"""
Run this script ONCE locally to convert .h5 models to the portable .keras format.
Usage: python convert_models.py
"""
import tensorflow as tf
import os

TICKERS = ["btc", "eth", "sol", "ada"]
MODELS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "models")

print(f"Using TensorFlow version: {tf.__version__}")
print(f"Using Keras version: {tf.keras.__version__}")

for ticker in TICKERS:
    h5_path = os.path.join(MODELS_DIR, f"{ticker}_inr_volatility_model.h5")
    keras_path = os.path.join(MODELS_DIR, f"{ticker}_inr_volatility_model.keras")

    if not os.path.exists(h5_path):
        print(f"  [SKIP] {h5_path} not found.")
        continue

    print(f"  [CONVERTING] {ticker.upper()} ...")
    model = tf.keras.models.load_model(h5_path)
    model.save(keras_path)
    print(f"  [DONE] Saved to {keras_path}")

print("\nAll models converted. Now update ml_engine.py to load .keras files.")
