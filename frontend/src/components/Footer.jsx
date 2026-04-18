import React from 'react';

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-surface-container-high col-span-12">
      <div className="space-y-4">
        <p className="text-xs font-label uppercase tracking-tighter text-on-surface-variant">Neural Engine V2.4</p>
        <p className="text-sm text-on-surface-variant leading-relaxed">Processing 14.2M data points per second across global liquidity pools to generate actionable volatility signatures.</p>
      </div>
      <div className="md:col-span-2 flex justify-end items-end gap-6 pb-2">
        <div className="text-right">
          <p className="text-[10px] font-label uppercase text-on-surface-variant mb-1">Status</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></div>
            <span className="text-xs font-label font-medium uppercase">Operational</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-label uppercase text-on-surface-variant mb-1">Network Latency</p>
          <span className="text-xs font-label font-bold">14ms</span>
        </div>
      </div>
    </footer>
  );
}
