import React from 'react';

export default function PredictionHero({ data, isLoading }) {
  if (isLoading) {
    return (
      <div className="col-span-12 lg:col-span-4 glass-card bg-surface-container-lowest p-8 rounded-xl shadow-sm relative overflow-hidden animate-pulse">
        <div className="space-y-12 h-full flex flex-col justify-between">
          <div>
            <div className="w-24 h-6 bg-surface-variant rounded-full mb-4"></div>
            <div className="w-4/5 h-10 bg-surface-variant rounded-md mb-2"></div>
            <div className="w-2/3 h-10 bg-surface-variant rounded-md"></div>
          </div>
          <div className="pt-6 border-t border-surface-container-high">
            <div className="w-full h-1 bg-surface-variant rounded-full mb-4"></div>
            <div className="w-1/2 h-4 bg-surface-variant rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  const regime = data?.prediction || "ANALYZING REGIME";
  const rawConfidence = data?.confidence || 0;
  const isHigh = regime.toUpperCase().includes("HIGH");

  return (
    <div className="col-span-12 lg:col-span-4 glass-card bg-surface-container-lowest p-8 rounded-xl shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6">
        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Live Inference</span>
      </div>
      <div className="space-y-12">
        <div>
          {isHigh ? (
            <span className="inline-block px-3 py-1 bg-error-container text-on-error-container text-[10px] font-label font-bold rounded-full mb-4">CRITICAL ALERT</span>
          ) : (
            <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-label font-bold rounded-full mb-4">STABLE REGIME</span>
          )}
          <h1 className={`font-headline text-3xl leading-tight uppercase ${isHigh ? 'text-error' : 'text-on-surface'}`}>{regime}</h1>
          <p className="text-on-surface-variant text-sm mt-2 max-w-xs">
            {isHigh ? "Neural engines detect an impending shift in market entropy, signaling aggressive price discovery phases." : "Model confidently projects sustained liquidity and predictable mean-reverting price motion."}
          </p>
        </div>
        <div className="flex flex-col">
          <span className="font-label text-6xl font-bold text-on-surface tracking-tighter">{rawConfidence}%</span>
          <span className="font-label text-sm text-tertiary font-medium">Confidence Interval</span>
        </div>
        <div className="pt-6 border-t border-surface-container-high">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-label">Signal Intensity</span>
            <span className={`text-xs font-label ${isHigh ? 'text-error' : 'text-tertiary'}`}>
              {isHigh ? 'Extreme' : 'Nominal'}
            </span>
          </div>
          <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${isHigh ? 'bg-error' : 'bg-tertiary'}`} 
              style={{ width: `${Math.max(10, rawConfidence)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
