import React from 'react';

export default function ForensicRegime() {
  return (
    <div className="col-span-12 lg:col-span-8 glass-card bg-surface-container-high p-8 rounded-xl flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden group">
      {/* Hairline geometric accent */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] border-[0.5px] border-tertiary rounded-full group-hover:scale-105 transition-transform duration-1000"></div>
      </div>
      
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-20 h-20 bg-surface-container-lowest rounded-2xl shadow-sm">
        <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
      </div>
      <div className="relative z-10 flex-grow text-center lg:text-left">
        <h3 className="font-headline text-2xl mb-2">Forensic Regime Isolation</h3>
        <p className="text-on-surface font-body italic text-lg leading-relaxed max-w-xl">
          "Mathematically defining and isolating 'High' and 'Low' environments for unclouded strategic foresight"
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-3 gap-8 pt-4 lg:pt-0 lg:pl-8 lg:border-l border-surface-container-highest">
        <div className="text-center">
          <p className="text-[10px] font-label uppercase text-on-surface-variant">Regime Drift</p>
          <p className="font-label font-bold text-lg">0.0024</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-label uppercase text-on-surface-variant">Alpha Decay</p>
          <p className="font-label font-bold text-lg">Negligible</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-label uppercase text-on-surface-variant">Entropy</p>
          <p className="font-label font-bold text-lg">0.42</p>
        </div>
      </div>
    </div>
  );
}
