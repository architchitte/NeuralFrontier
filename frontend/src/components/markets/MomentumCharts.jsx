import React from 'react';

export default function MomentumCharts() {
  return (
    <section className="col-span-12 lg:col-span-5 flex flex-col gap-6">
      <div className="bg-surface-container-low p-8 rounded-xl flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-headline font-semibold">RSI vs Volatility</span>
          <span className="font-label text-[10px] text-tertiary bg-tertiary-container px-2 py-1 rounded">LIVE FEED</span>
        </div>
        
        <div className="space-y-6 flex-grow flex flex-col justify-around">
          {/* Conceptual Static Representation pending full graph injection */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] font-label text-outline uppercase tracking-wider">
              <span>Global Alpha (7d)</span>
              <span>Momentum Rank: 02</span>
            </div>
            <div className="h-16 w-full relative flex items-end gap-1">
              <div className="w-full h-8 bg-surface-container rounded-t-sm"></div>
              <div className="w-full h-10 bg-surface-container rounded-t-sm"></div>
              <div className="w-full h-14 bg-tertiary/40 rounded-t-sm animate-pulse"></div>
              <div className="w-full h-12 bg-surface-container rounded-t-sm"></div>
              <div className="w-full h-6 bg-surface-container rounded-t-sm"></div>
              <div className="w-full h-10 bg-surface-container rounded-t-sm"></div>
              <div className="w-full h-16 bg-surface-container rounded-t-sm"></div>
              <div className="w-full h-12 bg-surface-container rounded-t-sm"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] font-label text-outline uppercase tracking-wider">
              <span>Entropy Distribution</span>
              <span>Skew: +0.44</span>
            </div>
            <div className="h-16 w-full relative overflow-hidden bg-surface-container-high rounded-lg">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M0 40 Q 50 10, 100 50 T 200 30 T 300 60 T 400 20" fill="none" stroke="#006b5e" strokeWidth="2"></path>
                <path d="M0 60 Q 80 40, 150 60 T 300 40 T 400 60" fill="none" stroke="#5d5e61" strokeDasharray="4" strokeWidth="1"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
