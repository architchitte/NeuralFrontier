import React from 'react';

export default function SettingsPanel({ isOpen, onClose }) {
  // Reusable mini-component for settings pills
  const SettingSelector = ({ label, options, activeIndex }) => (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-label uppercase tracking-widest text-outline">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => (
          <button key={opt} className={`px-3 py-1.5 text-xs font-label rounded-md transition-colors border-none ${i === activeIndex ? 'bg-tertiary-container text-on-tertiary-container font-bold' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 left-0 top-0 w-full h-full ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      ></div>
      <div className={`fixed top-0 right-0 h-full w-96 bg-surface/90 backdrop-blur-xl z-[101] shadow-[-10px_0_30px_rgba(0,107,94,0.05)] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[102%]'} flex flex-col border-none`}>
        <div className="flex justify-between items-center p-8 pb-4">
          <h2 className="text-2xl font-headline font-bold text-on-surface">System Configurations</h2>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-8 p-8 overflow-y-auto no-scrollbar">
          <SettingSelector label="Display Currency" options={['INR (Native)', 'USD', 'EUR', 'GBP', 'JPY']} activeIndex={0} />
          <SettingSelector label="Telemetry Refresh Rate" options={['Real-time', '30s', '1m', '5m']} activeIndex={0} />
          <SettingSelector label="Alert Threshold" options={['Conservative (80%)', 'Standard (90%)', 'Aggressive (95%)']} activeIndex={1} />
          <SettingSelector label="Interface Mode" options={['Algorithmic Atelier (Light)', 'Dark Pool (Dark)']} activeIndex={0} />
        </div>
      </div>
    </>
  );
}
