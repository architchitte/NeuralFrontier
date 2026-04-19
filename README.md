# Neural Frontier // Institutional Volatility Forecasting

Neural Frontier is an institutional-grade predictive analytics platform engineered for decentralized volatility regime isolation. By combining high-frequency market telemetry with a multi-asset LSTM (Long Short-Term Memory) mesh, the platform provides probabilistic strategic maps for Tier-1 cryptographic assets.

---

## 🏗 Architecture & Core Components

The system is built on a high-concurrency "Algorithmic Atelier" design system, prioritizing clinical data transparency over generic aesthetic artifacts.

### 1. Market Ecology API
A unified FastAPI backend concurrently fetching 90-day trajectories across BTC, ETH, SOL, and ADA. 
*   **Feature Engineering**: Standard 14-day RSI, 30-day Rolling Volatility, and a Pearson Correlation Matrix.
*   **Global Entropy**: A weighted arithmetic mean of all active model probabilities, representing the "Market Pulse."

### 2. Strategic Map (Macro Dashboard)
The high-level ecosystem viewer providing:
*   **Aggregate Entropy Gauge**: Real-time visual tracking of structural accumulation.
*   **Volatility Heatmap**: Asset-specific regime classification (High vs. Low Volatility).
*   **Alpha Decay Matrix**: 4x4 cross-protocol correlation tracking.

### 3. Predictive Dashboard (Micro Dashboard)
Deep-dive inference for specific assets:
*   **Longitudinal Regime Charts**: 24-hour hourly history with dynamic background regime bands.
*   **Forensic Analytics**: Confidence-weighted model probability distribution.

---

## 🚀 Tech Stack

- **Quant Stack**: Python 3.10+, TensorFlow (LSTM Inference Engine), Pandas, NumPy, yfinance.
- **Backend Architecture**: FastAPI (Asynchronous Concurrency), Uvicorn.
- **Frontend Architecture**: React (Vite Ecosystem), Tailwind CSS, Framer Motion, Recharts.
- **Design System**: "Algorithmic Atelier" (Mint/Dark-Green palette, No-Line rule, Glassmorphism).

---

## 🛠 Setup & Installation

### Backend Integration
```bash
# Navigate to backend
cd backend

# Initialize venv
python -m venv venv
source venv/bin/activate # or .\venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn main:app --reload --port 8000
```

### Frontend Deployment
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start production-grade dev server
npm run dev
```

---

## ⚖️ Institutional Disclaimer

**Neural Frontier is a probabilistic forecasting engine.** Cryptographic markets are inherently volatile. The volatility regime classifications provided are strictly for institutional guidance and algorithmic benchmarking. Utilizing this platform constitutes an acknowledgment of systemic market risks.

---

© 2026 Neural Frontier. Unclouded Strategic Foresight.
