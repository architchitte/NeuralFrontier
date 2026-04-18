import React from 'react';

export default function NotificationPanel({ isOpen, onClose }) {
  return (
    <>
      {/* Invisible Overlay to close on outside click */}
      <div 
         className={`fixed inset-0 z-[100] transition-opacity duration-300 left-0 top-0 w-full h-full ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
         onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-surface/90 backdrop-blur-xl z-[101] shadow-[-10px_0_30px_rgba(0,107,94,0.05)] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[102%]'} flex flex-col border-none`}>
        <div className="flex justify-between items-center p-8 pb-4">
          <h2 className="text-2xl font-headline font-bold text-on-surface">Telemetry Alerts</h2>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 p-8 overflow-y-auto no-scrollbar">
          {/* Critical Alert Mock */}
          <div className="bg-error-container/50 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-xs font-label uppercase tracking-widest text-error font-bold">CRITICAL</span>
            <p className="text-sm font-body text-on-surface">Solana network RPC latency spike detected (&gt; 400ms).</p>
          </div>
          {/* System Alert Mock */}
          <div className="bg-[#edf5f0] p-4 rounded-xl flex flex-col gap-1">
            <span className="text-xs font-label uppercase tracking-widest text-tertiary font-bold">SYSTEM</span>
            <p className="text-sm font-body text-on-surface">Model weights synced successfully. New SHA-256 registered.</p>
          </div>
        </div>
      </div>
    </>
  );
}
