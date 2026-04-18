import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NotificationPanel from './NotificationPanel';
import SettingsPanel from './SettingsPanel';

export default function TopNavBar() {
  const location = useLocation();
  const isMarkets = location.pathname === '/markets';
  const isPredictions = location.pathname === '/predictions';
  
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  // Helper bindings to enforce exclusive active panels
  const openNotifications = () => { setIsSettingsOpen(false); setIsNotificationsOpen(true); };
  const openSettings = () => { setIsNotificationsOpen(false); setIsSettingsOpen(true); };

  return (
    <>
    <nav className="bg-[#f3fbf6]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex-1 flex justify-start">
          <Link to="/" className="text-2xl font-headline font-bold text-[#161d1a] tracking-tight">Neural Frontier</Link>
        </div>
        
        <div className="flex-1 hidden md:flex justify-center items-center gap-8">
            <Link to="/markets" className={`font-body transition-colors duration-300 ${isMarkets ? 'text-[#006b5e] border-b-2 border-[#006b5e] pb-1 font-semibold leading-none' : 'text-[#5d5e61] hover:text-[#006b5e] font-medium leading-none'}`}>Markets</Link>
            <Link to="/predictions" className={`font-body transition-colors duration-300 ${isPredictions ? 'text-[#006b5e] border-b-2 border-[#006b5e] pb-1 font-semibold leading-none' : 'text-[#5d5e61] hover:text-[#006b5e] font-medium leading-none'}`}>Predictions</Link>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden lg:flex items-center gap-3">
            <span onClick={openNotifications} className="material-symbols-outlined text-xl text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">notifications</span>
            <span onClick={openSettings} className="material-symbols-outlined text-xl text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">settings</span>
          </div>
          <button onClick={() => setIsWalletModalOpen(true)} className="px-5 py-2 bg-gradient-to-br from-[#5d5e61] to-[#c6c6c9] text-on-primary font-label text-sm font-bold rounded-md shadow-sm hover:opacity-90 transition-all uppercase tracking-wider">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </nav>
    
    {/* Floating Slide-Out Panels */}
    <NotificationPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
    <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    
    {/* Inline Wallet Modal mounted safely outside nav flex */}
    {isWalletModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[#f3fbf6]/80 backdrop-blur-[16px] cursor-pointer transition-opacity" onClick={() => setIsWalletModalOpen(false)}></div>
        <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl p-8 relative z-10 shadow-[0_0_40px_rgba(0,107,94,0.1)]">
          <button onClick={() => setIsWalletModalOpen(false)} className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">Wallet Integration</h2>
          <p className="text-sm font-body text-on-surface-variant leading-relaxed">This feature is under development and coming soon.</p>
        </div>
      </div>
    )}
    </>
  );
}
