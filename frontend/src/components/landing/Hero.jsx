import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 min-h-[614px]">
      <div className="lg:w-1/2 flex flex-col gap-8">
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight text-on-surface">Institutional-Grade Volatility Forecasting</h1>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">Advanced machine learning infrastructure designed to identify market regimes before they materialize.</p>
        <div className="flex gap-4 mt-4">
          <Link to="/predictions" className="bg-gradient-to-br from-[#5d5e61] to-[#c6c6c9] text-on-primary px-8 py-4 rounded-full font-label text-sm tracking-widest hover:opacity-90 transition-opacity shadow-[0_8px_32px_rgba(22,29,26,0.06)] block">
              REQUEST ACCESS
          </Link>
          <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-label text-sm tracking-widest hover:bg-surface-dim transition-colors">
              READ WHITEPAPER
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative flex justify-center items-center h-full min-h-[400px]">
        {/* Refined Hero Graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.98, 1, 0.98] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
            className="w-[450px] h-[450px] rounded-full border-[0.5px] border-tertiary-fixed-dim absolute"
          />
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.98, 1.02, 0.98] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
            className="w-[350px] h-[350px] rounded-full border-[0.5px] border-tertiary-fixed-dim absolute"
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1.05, 0.98] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="w-[250px] h-[250px] rounded-full border-[0.5px] border-tertiary-fixed-dim absolute"
          />
          <motion.div 
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.98, 1.1, 0.98] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} 
            className="w-[150px] h-[150px] rounded-full border-[0.5px] border-tertiary-fixed-dim absolute"
          />
          <div className="w-[1px] h-[550px] bg-tertiary-fixed-dim/40 absolute"></div>
        </div>
      </div>
    </section>
  );
}
