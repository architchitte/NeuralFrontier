import React from 'react';

export default function VolatilityHeatmap({ assets }) {
  const assetOrder = ["BTC", "ETH", "SOL", "ADA"];

  return (
    <section className="col-span-12">
      <h3 className="text-sm font-label uppercase tracking-widest text-outline mb-6">Volatility Heatmap & Asset Regime</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assetOrder.map(ticker => {
          const data = assets[ticker];
          if (!data) return null;
          
          const isHighVol = data.regime.includes("High");
          const regimeBgClass = isHighVol ? "bg-error-container/50 border-error/10 text-on-error-container" : "bg-[#edf5f0] border-tertiary/10 text-on-tertiary-container";
          const regimeString = isHighVol ? "HIGH VOL" : "LOW VOL";
          const changeColor = data.daily_change_pct >= 0 ? "text-tertiary" : "text-error";

          return (
            <div key={ticker} className="bg-surface-container-low p-6 rounded-xl flex flex-col hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xl font-label font-bold">{ticker}</span>
                <span className={`text-[10px] font-label font-bold px-3 py-1 rounded-full border ${regimeBgClass}`}>
                  {regimeString}
                </span>
              </div>
              <span className="text-3xl font-label font-medium tracking-tight">₹{Number(data.price_inr).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
              <div className="mt-4 flex items-center gap-2">
                <span className={`text-xs font-label ${changeColor}`}>
                  {data.daily_change_pct >= 0 ? "+" : ""}{data.daily_change_pct.toFixed(2)}%
                </span>
                <div className="flex-grow h-px bg-outline-variant/30"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
