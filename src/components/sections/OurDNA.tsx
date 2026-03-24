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
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Smart credit underwriting</h3>
              <p className="text-lg opacity-80 mb-4">An AI powered new-age credit underwriting using on-chain and off-chain signals</p>
              <a href="#" className="font-semibold underline decoration-2 underline-offset-4 hover:text-periwinkle transition-colors">Learn about our technology.</a>
            </div>
          </motion.div>

          {/* Card 2: Innovation Image Card */}
          <motion.div
            className="md:col-span-1 bg-[#fde3e5] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end text-moon-light shadow-sm relative overflow-hidden min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="/innovation-bion.png" alt="Innovation" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight relative z-10 drop-shadow-md">Innovation</h3>
          </motion.div>


          {/* --- ROW 2: TRANSPARENCY --- */}
          {/* Card 3: Transparency Image Card */}
          <motion.div
            className="md:col-span-1 bg-[#fef9eb] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end text-moon-light shadow-sm relative overflow-hidden min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="/transparency-bion.png" alt="Transparency" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight relative z-10 drop-shadow-md">Transparency</h3>
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
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Instant and transparent</h3>
              <p className="text-lg opacity-80 mb-4">Near instant credit in stablecoin. Total transparency, and no hidden charges</p>
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
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">Best-in class user experience</h3>
              <p className="text-lg opacity-80 mb-4">Complete end-to-end in-app experience from credit till payments & spend. Minimal document, minimal hassle</p>
              <a href="#" className="font-semibold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Explore the app.</a>
            </div>
          </motion.div>

          {/* Card 6: Convenience Image Card */}
          <motion.div
            className="md:col-span-1 bg-[#bed967] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-end text-moon-light shadow-sm relative overflow-hidden min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="/convenience-bion.png" alt="Convenience" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight relative z-10 drop-shadow-md">Convenience</h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurDNA;
