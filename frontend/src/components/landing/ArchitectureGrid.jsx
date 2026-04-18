import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureGrid() {
  return (
    <section className="flex flex-col gap-12 bg-surface-container-low p-8 lg:p-12 rounded-xl">
      <motion.h2 
        initial={{ y: 30, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true, margin: "-100px" }}
        className="font-headline text-3xl md:text-4xl text-on-surface text-center mb-8"
      >
        Architectural Advantages
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 lg:p-12 transition-all duration-500 hover:shadow-[0_32px_32px_rgba(22,29,26,0.06)] flex flex-col md:flex-row gap-8 items-center group"
        >
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-headline text-2xl text-on-surface">Multi-Asset Intelligence</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Scalable architecture supporting simultaneous forecasting across BTC, ETH, SOL, and ADA in INR.</p>
          </div>
          <div className="w-32 h-32 flex-shrink-0 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
            <div className="w-24 h-24 rounded-full border-[0.5px] border-tertiary absolute"></div>
            <div className="w-24 h-24 rounded-full border-[0.5px] border-tertiary absolute left-4"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true, margin: "-50px" }}
          className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_32px_32px_rgba(22,29,26,0.06)] flex flex-col gap-6 group"
        >
          <div className="h-16 w-16 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity mb-4">
            <span className="material-symbols-outlined text-4xl text-tertiary">hub</span>
          </div>
          <h3 className="font-headline text-xl text-on-surface">Deep Learning Core</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">Proprietary LSTM models trained on multi-year chain-state sequences to identify impending shifts in market entropy.</p>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          viewport={{ once: true, margin: "-50px" }}
          className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 border border-outline-variant/15 transition-all duration-500 hover:shadow-[0_32px_32px_rgba(22,29,26,0.06)] flex flex-col gap-6 group"
        >
          <div className="h-16 w-16 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity mb-4">
            <span className="material-symbols-outlined text-4xl text-tertiary">architecture</span>
          </div>
          <h3 className="font-headline text-xl text-on-surface">Objective Classification</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">Mathematically defining and isolating "High" and "Low" environments for unclouded strategic foresight.</p>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 lg:p-12 transition-all duration-500 hover:shadow-[0_32px_32px_rgba(22,29,26,0.06)] flex flex-col md:flex-row gap-8 items-center group"
        >
          <div className="w-32 h-32 flex-shrink-0 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity order-last md:order-first">
            <span className="material-symbols-outlined text-5xl text-tertiary">database</span>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-headline text-2xl text-on-surface">Institutional API Integration</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Built on a robust Python backend leveraging industry-standard real-time data feeds for up-to-the-second realities.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
