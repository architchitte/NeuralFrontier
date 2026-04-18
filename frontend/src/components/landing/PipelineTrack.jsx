import React from 'react';
import { motion } from 'framer-motion';

export default function PipelineTrack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="flex flex-col gap-12 items-center bg-surface-container-low rounded-xl p-12 lg:p-24 relative overflow-hidden">
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-headline text-3xl md:text-4xl text-on-surface text-center"
      >
        Pipeline Architecture
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl relative"
      >
        {/* Refined Clinical Hairline Connector */}
        <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[0.5px] bg-tertiary-fixed-dim/30 z-0"></div>

        {/* Step 1 */}
        <motion.div variants={childVariants} className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(22,29,26,0.04)]">
            <span className="material-symbols-outlined text-tertiary font-light">cloud_download</span>
          </div>
          <h4 className="font-label text-xs tracking-widest text-on-surface uppercase">Data Ingestion</h4>
        </motion.div>

        {/* Step 2 */}
        <motion.div variants={childVariants} className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(22,29,26,0.04)]">
            <span className="material-symbols-outlined text-tertiary font-light">manufacturing</span>
          </div>
          <h4 className="font-label text-xs tracking-widest text-on-surface uppercase">Feature Engineering</h4>
        </motion.div>

        {/* Step 3 */}
        <motion.div variants={childVariants} className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(22,29,26,0.04)]">
            <span className="material-symbols-outlined text-tertiary font-light">model_training</span>
          </div>
          <h4 className="font-label text-xs tracking-widest text-on-surface uppercase">Regime Prediction</h4>
        </motion.div>

        {/* Step 4 */}
        <motion.div variants={childVariants} className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(22,29,26,0.04)] relative">
            <span className="material-symbols-outlined text-tertiary font-light">rocket_launch</span>
            <span className="material-symbols-outlined text-[10px] text-tertiary absolute -right-1 -top-1">emergency</span>
          </div>
          <h4 className="font-label text-xs tracking-widest text-on-surface uppercase">Live Deployment</h4>
        </motion.div>
      </motion.div>
    </section>
  );
}
