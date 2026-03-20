'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="py-24 bg-moon-light">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          
          {/* Left Tall (Col 1, Row 1-3) */}
          <motion.div 
            variants={fadeUpVariant}
            className="md:col-start-1 md:row-span-3 bg-navy rounded-3xl p-8 flex flex-col justify-between text-moon-light min-h-[400px] md:min-h-0 relative overflow-hidden group"
          >
            {/* Abstract Graphic */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
              <div className="w-[80%] h-[60%] border border-moon-light/20 rounded-full flex items-center justify-center">
                 <div className="w-[70%] h-[70%] border border-moon-light/40 rounded-full flex items-center justify-center">
                    <div className="w-[60%] h-[60%] border-2 border-squash rounded-full"></div>
                 </div>
              </div>
            </div>
            
            <div className="z-10 mt-auto">
              <p className="text-sm font-medium opacity-80 mb-1">Ecosystem</p>
              <h3 className="text-2xl font-semibold">App in use</h3>
            </div>
          </motion.div>

          {/* Top Wide (Col 2-3, Row 1) */}
          <motion.div 
            variants={fadeUpVariant}
            className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-1 bg-squash rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[240px]"
          >
            <div className="text-navy text-7xl md:text-9xl tracking-tight font-light lowercase">
              bion
            </div>
            <div className="absolute bottom-6 left-8 text-navy">
              <p className="text-sm font-medium">Icon + wordmark</p>
            </div>
          </motion.div>

          {/* Middle Tags (Col 2, Row 2) */}
          <motion.div 
            variants={fadeUpVariant}
            className="md:col-start-2 md:row-start-2 md:row-span-1 bg-moon-medium rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden min-h-[240px]"
          >
            {/* Pattern Simulation */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, #0A1128 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="z-10">
              <p className="text-sm font-medium text-navy">Physical cards</p>
            </div>
          </motion.div>

          {/* Right Tall (Col 3, Row 2-3) */}
          <motion.div 
            variants={fadeUpVariant}
            className="md:col-start-3 md:row-start-2 md:row-span-2 bg-navy rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[400px] md:min-h-0 text-squash"
          >
            {/* Giant Graphic (Flower Motif matched from reference) */}
            <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="scale-150 relative z-10">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12a14.5 14.5 0 0 0 20 0"></path>
            </svg>
            <div className="absolute bottom-6 left-8 text-moon-light z-20">
              <p className="text-sm font-medium">Icon close up</p>
            </div>
          </motion.div>

          {/* Middle Motifs (Col 2, Row 3) */}
          <motion.div 
            variants={fadeUpVariant}
            className="md:col-start-2 md:row-start-3 md:row-span-1 bg-peachy-light rounded-3xl p-8 flex flex-col justify-between relative min-h-[240px] text-navy"
          >
            <div className="flex justify-between w-full px-4 pt-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </div>
            <div className="flex justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            
            <div className="absolute bottom-6 left-8">
              <p className="text-sm font-medium">Brand motifs</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
