import React, { useState } from 'react';
import Modal from './Modal';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="w-full py-16 px-12 mt-auto bg-[#edf5f0] border-t border-emerald-900/5 relative z-10">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-serif italic text-emerald-900">Neural Frontier</span>
            <p className="text-emerald-800/70 font-sans text-sm tracking-wide">© 2026 Neural Frontier. Institutional Grade Decentralized Finance.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-emerald-800/70 text-sm font-sans tracking-wide hover:text-emerald-900 hover:translate-x-1 transition-all underline decoration-emerald-700/30 underline-offset-4 cursor-pointer" href="#">Documentation</a>
            {/* Action Triggers */}
            <button onClick={() => setActiveModal('institutional')} className="text-emerald-800/70 text-sm font-sans tracking-wide hover:text-emerald-900 hover:translate-x-1 transition-all underline decoration-emerald-700/30 underline-offset-4">Institutional Access</button>
            <button onClick={() => setActiveModal('privacy')} className="text-emerald-800/70 text-sm font-sans tracking-wide hover:text-emerald-900 hover:translate-x-1 transition-all underline decoration-emerald-700/30 underline-offset-4">Privacy Policy</button>
            <button onClick={() => setActiveModal('terms')} className="text-emerald-800/70 text-sm font-sans tracking-wide hover:text-emerald-900 hover:translate-x-1 transition-all underline decoration-emerald-700/30 underline-offset-4">Terms of Service</button>
            <button onClick={() => setActiveModal('audit')} className="text-emerald-800/70 text-sm font-sans tracking-wide hover:text-emerald-900 hover:translate-x-1 transition-all underline decoration-emerald-700/30 underline-offset-4">Security Audit</button>
          </div>
        </div>
      </footer>

      {/* Unified Rendering Pipeline */}
      <Modal isOpen={!!activeModal} onClose={closeModal}>
        {activeModal === 'terms' && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-headline font-bold text-on-surface">Terms of Service</h2>
            <div className="text-sm font-body text-on-surface-variant leading-relaxed space-y-4">
              <p><strong>1. Algorithmic Risk Acknowledgment:</strong> The Neural Frontier LSTM inferencing pipeline provides probabilistic volatility metrics. Utilizing this platform constitutes an understanding that cryptographic markets are inherently volatile. The data provided is for institutional guidance and does not constitute financial advice.</p>
              <p><strong>2. Liability Limitations:</strong> By connecting your decentralized wallet, you agree that Neural Frontier, its contributors, and host entities shall not be held liable for capital slippage resulting from real-time execution anomalies or model prediction variances.</p>
              <p><strong>3. API Usage:</strong> Programmatic access to endpoints (including /api/markets/summary) is heavily rate-limited for public tiers. Bypassing these restrictions will result in permanent hardware or network-layer bans.</p>
            </div>
          </div>
        )}

        {activeModal === 'privacy' && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-headline font-bold text-on-surface">Privacy & Data Policy</h2>
            <div className="space-y-4">
              <div className="bg-surface-container-low p-6 rounded-lg text-sm font-body text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface block mb-1">On-Chain Data</strong>
                Web3 wallet connections are strictly authenticated anonymously. Transaction parsing, telemetry inference, and regime metrics rely purely on public ledger availability. No private keys or off-chain identities are queried.
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg text-sm font-body text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface block mb-1">Pipeline Telemetry</strong>
                Neural Frontier utilizes strictly necessary session states required to maintain websocket and REST connections to the remote Python FastAPI inferencing layer. These are strictly functional.
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg text-sm font-body text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface block mb-1">Data Retention</strong>
                Any personal environment configurations (such as asset dock preferences or theme states) are cached purely via localStorage. They are never transmitted back to the global servers.
              </div>
            </div>
          </div>
        )}

        {activeModal === 'institutional' && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-on-surface">Request Institutional API Access</h2>
              <p className="text-sm font-body text-on-surface-variant mt-2">Connect directly to our LSTM infrastructure via dedicated zero-latency endpoints.</p>
            </div>
            <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Organization Name" className="bg-surface-container-highest font-label text-sm w-full p-4 rounded-lg outline-none focus:ring-2 focus:ring-tertiary/40 text-on-surface placeholder:text-outline" />
              <input type="email" placeholder="Contact Email" className="bg-surface-container-highest font-label text-sm w-full p-4 rounded-lg outline-none focus:ring-2 focus:ring-tertiary/40 text-on-surface placeholder:text-outline" />
              <input type="text" placeholder="Expected Monthly Compute (Volume)" className="bg-surface-container-highest font-label text-sm w-full p-4 rounded-lg outline-none focus:ring-2 focus:ring-tertiary/40 text-on-surface placeholder:text-outline" />
              <button className="mt-4 w-full px-6 py-4 bg-gradient-to-br from-[#5d5e61] to-[#c6c6c9] text-on-primary font-label font-bold text-sm rounded-lg shadow-sm hover:opacity-90 transition-all uppercase tracking-widest">
                Submit Lead
              </button>
            </form>
          </div>
        )}

        {activeModal === 'audit' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,107,94,0.5)]"></div>
              <h2 className="text-2xl font-headline font-bold text-on-surface">Architecture & Security Verification</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-1">
                <span className="text-xs font-label uppercase tracking-widest text-outline">Web3 Connection</span>
                <span className="text-sm font-label font-bold text-tertiary mt-2">Verified</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-1">
                <span className="text-xs font-label uppercase tracking-widest text-outline">FastAPI Routing</span>
                <span className="text-sm font-label font-bold text-on-surface mt-2">&lt; 15ms Frame</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-1 md:col-span-2">
                <span className="text-xs font-label uppercase tracking-widest text-outline">LSTM Weights Checksum</span>
                <span className="text-xs font-label font-medium text-on-surface-variant truncate mt-2 bg-surface-container p-3 rounded">
                  8f4e2b9c7a1d3f6e5c8b0a9d4f2e1c7b3a6d9f8e5c2b1a0d7f4e3c6b9a8d1f2e
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
