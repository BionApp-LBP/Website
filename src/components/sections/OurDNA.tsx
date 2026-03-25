'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurDNA: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="py-32 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-[clamp(3rem,5vw,4.5rem)] font-semibold text-navy mb-16 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          Our DNA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[450px]">

          {/* --- ROW 1: INNOVATION --- */}
          {/* Card 1: Wide Image/Graphic */}
          <motion.div
            className="md:col-span-3 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end relative overflow-hidden bg-navy text-moon-light shadow-sm"
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
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Smart credit underwriting</h3>
              <p className="text-lg opacity-80 mb-4">An AI powered new-age credit underwriting using on-chain and off-chain signals</p>

            </div>
          </motion.div>

          {/* Card 2: Innovation Image Card */}
          <motion.div
            className="md:col-span-1 bg-transparent rounded-[2.5rem] p-10 md:p-14 hidden md:flex flex-col justify-end text-moon-light shadow-sm relative overflow-hidden min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="/innovation-bion.png" alt="Innovation" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight relative z-10 drop-shadow-md">Innovation</h3> */}
          </motion.div>


          {/* --- ROW 2: TRANSPARENCY --- */}
          {/* Card 3: Transparency Image Card */}
          <motion.div
            className="md:col-span-1 bg-transparent rounded-[2.5rem] p-10 md:p-14 hidden md:flex flex-col justify-end text-moon-light shadow-sm relative overflow-hidden min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="/transparency-bion.png" alt="Transparency" className="w-full h-full object-cover" />
            </div> */}
            {/* <h3 className="text-3xl font-bold tracking-tight relative z-10 drop-shadow-md">Transparency</h3> */}
          </motion.div>

          {/* Card 4: Wide Graphic */}
          <motion.div
            className="md:col-span-3 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end relative overflow-hidden bg-squash text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* Abstract Graphic representing clarity/vision */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden ">
              <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Instant and transparent</h3>
              <p className="text-lg opacity-80 mb-4">Near instant credit in stablecoin. Total transparency, and no hidden charges</p>
            </div>
          </motion.div>


          {/* --- ROW 3: CONVENIENCE --- */}
          {/* Card 5: Wide Graphic */}
          <motion.div
            className="md:col-span-3 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end relative overflow-hidden bg-[#79b7dd] text-navy shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* Abstract UI/Experience Graphic */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
              <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="45" height="70" rx="6" stroke="white" strokeWidth="0.5" />
                <rect x="35" y="25" width="45" height="70" rx="6" stroke="white" strokeWidth="0.5" fill="white" fillOpacity="0.05" />
                <rect x="60" y="40" width="45" height="70" rx="6" stroke="white" strokeWidth="0.5" fill="white" fillOpacity="0.1" />
                {/* Simulated UI elements inside the top pane */}
                <rect x="65" y="45" width="15" height="2" rx="1" fill="white" fillOpacity="0.2" />
                <rect x="65" y="52" width="35" height="4" rx="2" fill="white" fillOpacity="0.1" />
                <rect x="65" y="60" width="25" height="4" rx="2" fill="white" fillOpacity="0.1" />
              </svg>
            </div>

            <div className="relative z-10 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Best-in class user experience</h3>
              <p className="text-lg opacity-80 mb-4">Complete end-to-end in-app experience from credit till payments & spend. Minimal document, minimal hassle</p>

            </div>
          </motion.div>

          {/* Card 6: Convenience Image Card */}
          <motion.div
            className="md:col-span-1 bg-transparent rounded-[2.5rem] p-10 md:p-14 hidden md:flex flex-col justify-end text-moon-light shadow-sm relative overflow-hidden min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="/convenience-bion.png" alt="Convenience" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight relative z-10 drop-shadow-md">Convenience</h3> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurDNA;
