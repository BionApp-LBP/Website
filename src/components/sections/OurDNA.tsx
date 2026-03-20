'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurDNA: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="py-32 bg-moon-medium">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-[clamp(3rem,5vw,4.5rem)] font-semibold text-navy mb-16 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          Our DNA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[450px]">
          
          {/* --- ROW 1: INNOVATION --- */}
          {/* Card 1: Wide Image/Graphic */}
          <motion.div 
            className="md:col-span-2 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end relative overflow-hidden bg-navy text-moon-light shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* Abstract Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full opacity-40 mix-blend-screen overflow-hidden">
               <div className="absolute -right-[10%] -top-[20%] w-[70%] h-[140%] rounded-full border-[1px] border-periwinkle/30 blur-[2px]"></div>
               <div className="absolute -right-[5%] -top-[10%] w-[60%] h-[120%] rounded-full border-[2px] border-periwinkle/20 blur-[1px]"></div>
            </div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Redefining the architecture of global credit</h3>
              <p className="text-lg opacity-80 mb-4">Building borderless infrastructure from the ground up to solve the hardest problems in cross-border finance.</p>
              <a href="#" className="font-semibold underline decoration-2 underline-offset-4 hover:text-periwinkle transition-colors">Learn about our technology.</a>
            </div>
          </motion.div>

          {/* Card 2: Narrow Text */}
          <motion.div 
            className="md:col-span-1 bg-moon-light rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Innovation</h3>
            <p className="text-lg opacity-80 font-medium leading-relaxed">
              We constantly push the boundaries of what is possible. By discarding legacy banking rails, we deliver credit solutions that are exponentially faster, universally accessible, and infinitely smarter.
            </p>
          </motion.div>


          {/* --- ROW 2: TRANSPARENCY --- */}
          {/* Card 3: Narrow Text */}
          <motion.div 
            className="md:col-span-1 bg-moon-light rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Transparency</h3>
            <p className="text-lg opacity-80 font-medium leading-relaxed">
              Radical clarity is our default. No hidden markup, no surprise fees, and no convoluted terms. You see exactly what you pay in real-time, every time.
            </p>
          </motion.div>

          {/* Card 4: Wide Graphic */}
          <motion.div 
            className="md:col-span-2 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end relative overflow-hidden bg-squash text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* Abstract Graphic representing clarity/vision */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
              <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">What you see is exactly what you pay</h3>
              <p className="text-lg opacity-80 mb-4">We've stripped away the complexity of international lending to give you absolute control and visibility over your funds.</p>
              <a href="#" className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">View our fee structure.</a>
            </div>
          </motion.div>


          {/* --- ROW 3: CONVENIENCE --- */}
          {/* Card 5: Wide Graphic */}
          <motion.div 
            className="md:col-span-2 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end relative overflow-hidden bg-malibu text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* Abstract graphic representing global reach/convenience */}
            <div className="absolute top-[-20%] right-[-10%] opacity-20 w-[600px] h-[600px] bg-moon-light rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Your credit, natively mobile and worldwide</h3>
              <p className="text-lg opacity-80 mb-4">A unified interface connecting decentralized liquidity with everyday fiat spending, ready in your pocket.</p>
              <a href="#" className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Explore the app.</a>
            </div>
          </motion.div>

          {/* Card 6: Narrow Text */}
          <motion.div 
            className="md:col-span-1 bg-moon-light rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Convenience</h3>
            <p className="text-lg opacity-80 font-medium leading-relaxed">
              We've engineered friction out of the equation. Seamlessly open lines, issue virtual cards, and manage multi-currency balances with just a tapped finger.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurDNA;
