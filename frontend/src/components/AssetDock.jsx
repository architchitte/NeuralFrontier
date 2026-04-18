import React from 'react';

const assets = [
  { symbol: "BTC", tempPrice: "₹5,952,420.60" },
  { symbol: "ETH", tempPrice: "₹316,891.09" },
  { symbol: "SOL", tempPrice: "₹13,512.19" },
  { symbol: "ADA", tempPrice: "₹41.67" }
];

export default function AssetDock({ selectedTicker, onSelectTicker, isLoading }) {
  return (
    <section className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {assets.map((asset) => {
        const isSelected = selectedTicker === asset.symbol;
        return (
          <button
            key={asset.symbol}
            onClick={() => onSelectTicker(asset.symbol)}
            disabled={isLoading && isSelected}
            className={`flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-full transition-all cursor-pointer ${
              isSelected 
                ? 'bg-surface-container-lowest border-2 border-tertiary shadow-[0_8px_20px_rgba(0,107,94,0.1)]' 
                : 'bg-surface-container-low border-2 border-transparent hover:bg-surface-container-high'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-on-surface text-surface' : 'bg-surface-variant text-on-surface'}`}>
              {asset.symbol[0]}
            </div>
            <div className="text-left">
              <p className="font-label text-sm font-bold">{asset.symbol}</p>
              <p className="font-label text-xs text-on-surface-variant">{asset.tempPrice}</p>
            </div>
            <div className={`w-16 h-8 opacity-${isSelected ? '60' : '30'}`}>
              {isSelected ? (
                <svg className="w-full h-full stroke-tertiary fill-none stroke-2" viewBox="0 0 100 40">
                  <path d="M0,30 Q10,10 20,25 T40,15 T60,35 T80,5 T100,20"></path>
                </svg>
              ) : (
                <svg className="w-full h-full stroke-on-surface fill-none stroke-1" viewBox="0 0 100 40">
                  <path d="M0,20 Q20,35 40,20 T80,10 T100,25"></path>
                </svg>
              )}
            </div>
          </button>
        );
      })}
    </section>
  );
}
