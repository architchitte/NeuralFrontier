import React from 'react';

export default function GlobalRegimeHero({ entropy }) {
  // Determine dial rotation dynamically based on entropy (0 to 1) mapped to roughly 0 to 180 degrees.
  const rotation = Math.max(0, Math.min(180, entropy * 180));
  
  return (
    <>
    <section className="col-span-12 lg:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-tertiary">analytics</span>
          <h2 className="text-2xl font-headline font-semibold text-on-surface">Aggregate Market Entropy</h2>
        </div>
        <p className="text-on-surface-variant leading-relaxed max-w-md">
            Real-time cross-chain volatility distribution. The current market regime indicates a period of <span className="text-tertiary font-bold">Structural Accumulation</span> with decreasing entropy levels in tier-1 assets.
        </p>
        <div className="mt-8 flex gap-4">
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col">
            <span className="text-xs font-label uppercase tracking-widest text-outline">System Mean</span>
            <span className="text-2xl font-label font-bold text-on-surface">{(1.0 - entropy).toFixed(3)}</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col">
            <span className="text-xs font-label uppercase tracking-widest text-outline">Entropy Delta</span>
            <span className="text-2xl font-label font-bold text-tertiary">-{entropy.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-sm flex items-center justify-center relative py-12">
        {/* Market Pulse Gauge */}
        <div className="w-64 h-64 rounded-full border-[12px] border-surface-container-high relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[12px] border-tertiary border-l-transparent border-b-transparent rotate-[30deg]"></div>
          <div className="text-center">
            <span className="block text-5xl font-label font-bold">{entropy.toFixed(3)}</span>
            <span className="text-xs font-label text-outline uppercase tracking-tighter mt-1 block">Market Pulse</span>
          </div>
          {/* Needle anchored mapped to mathematical entropy */}
          <div 
             className="absolute bottom-1/2 left-1/2 w-1 h-32 bg-primary origin-bottom -translate-x-1/2 rounded-full transition-transform duration-1000 delay-500"
             style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-tertiary-fixed-dim/30 rounded-full"></div>
      <div className="absolute -right-10 -bottom-10 w-48 h-48 border border-tertiary-fixed-dim/20 rounded-full"></div>
    </section>

    {/* Integrated Momentum Text Block mapped originally linearly top-right */}
    <section className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between overflow-hidden relative">
        <div className="z-10">
          <span className="text-xs font-label uppercase tracking-[0.2em] opacity-60">System Motto</span>
          <h2 className="text-3xl font-headline font-bold leading-tight mt-4 italic">Unclouded Strategic Foresight</h2>
        </div>
        <div className="mt-8 z-10">
          <img alt="abstract architectural grid" className="w-full h-40 object-cover rounded-lg mix-blend-soft-light opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABK5gCVhFizvKyk_b8OgR2UR_aFQmg56o-e1u7MX5_td-XvoW21g4S0zUzsaD_UUmx3zujPW2VZ9n34HtODwJ872SzQl2V5rHj0rzc3fsUCi-o-ujbwF0R1ydik62NDu2qdYp7hI4uuEHcMCnywIT4kInM6-pPZtywgN_TOU6CPDFt70tfVM3x-QYoIwnMs4boWc6errt_c6I8IGnQKAHaxdotl2ocRwxjzXIzvuR1NxDizOpaLNT9rYYDRT28XJGBtXaGursOCYw"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-surface-tint opacity-40"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 border-[0.5px] border-on-primary/10 rounded-full"></div>
    </section>
    </>
  );
}
