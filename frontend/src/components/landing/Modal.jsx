import React, { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#f3fbf6]/80 backdrop-blur-[16px] cursor-pointer"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="bg-surface-container-lowest max-w-2xl w-full rounded-xl p-8 relative z-10 max-h-[90vh] overflow-y-auto shadow-2xl shadow-emerald-900/5">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>
  );
}
