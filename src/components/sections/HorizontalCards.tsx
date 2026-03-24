'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HorizontalCards: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-32 bg-moon-light relative">
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div className="text-navy/70 text-lg uppercase tracking-wider font-semibold mb-3">BION Product Suite</div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-navy leading-tight tracking-tight">
            Get to know BION
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full md:auto-rows-[380px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Credit (Wide - 2 columns, 1 row) */}
          <motion.div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm bg-navy text-moon-light" variants={fadeUpVariant}>
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/instant-credit-bg.jpg"
                alt="Instant Credit Background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1628]/95 via-[#0e1628]/60 to-transparent md:w-[70%]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628]/80 via-transparent to-transparent md:hidden"></div>
            </div>

            <div className="flex justify-between items-start w-full relative z-10 mb-auto">
              {/* <div className="w-12 h-12 bg-moon-light/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-moon-light/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div> */}
              <div className="bg-moon-light/20 text-moon-light text-xs font-bold px-4 py-1.5 rounded-[12px] tracking-wider backdrop-blur-md border border-moon-light/20">
                COMING SOON
              </div>
            </div>

            <div className="relative z-10 mt-auto max-w-lg drop-shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Instant Credit</h3>
              <p className="text-[1.05rem] opacity-90 leading-relaxed font-medium">Avail short-term collateral-free credit in stablecoin. Pay only for what you use with absolutely no hidden charges.</p>
            </div>
          </motion.div>

          {/* Card 2: VISA Cards (Tall - 1 column, 2 rows) */}
          <motion.div className="md:col-span-1 md:row-span-2 bg-navy text-moon-light rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm min-h-[400px] md:min-h-0" variants={fadeUpVariant}>
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/visa-bg.jpg"
                alt="VISA Card Background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628]/90 via-[#0e1628]/40 to-black/10"></div>
            </div>

            <div className="flex justify-start w-full relative z-10 mb-auto">
              <div className="bg-moon-light/20 text-moon-light text-xs font-bold px-4 py-1.5 rounded-[12px] tracking-wider backdrop-blur-md border border-moon-light/20 shadow-sm">
                COMING SOON
              </div>
            </div>

            <div className="relative z-10 mt-auto drop-shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">VISA Cards</h3>
              <p className="text-[1.05rem] opacity-90 leading-relaxed font-medium">Global merchant acceptance. Navigate FX volatility with the best rates and earn cashback & rewards for every spend.</p>
            </div>
          </motion.div>

          {/* Card 3: Scan-to-Pay (Square) */}
          <motion.div className="md:col-span-1 md:row-span-1 bg-navy text-moon-light rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm min-h-[340px]" variants={fadeUpVariant}>
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/scan-to-pay-bg.jpg"
                alt="Scan to Pay Background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628]/90 via-[#0e1628]/40 to-black/10"></div>
            </div>

            <div className="flex justify-between items-start w-full relative z-10 mb-auto">
              <div className="w-12 h-12 bg-moon-light/10 text-moon-light rounded-2xl flex items-center justify-center backdrop-blur-md border border-moon-light/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="6" height="6" x="3" y="3" rx="1" /><rect width="6" height="6" x="15" y="3" rx="1" /><rect width="6" height="6" x="3" y="15" rx="1" /><path d="M15 15h2v2h-2z" /><path d="M19 19h2v2h-2z" /><path d="M19 15h2v2h-2z" /><path d="M15 19h2v2h-2z" /></svg>
              </div>
              <div className="bg-[#12ff3d] text-navy text-xs font-bold px-4 py-1.5 rounded-[12px] tracking-wider shadow-sm">
                LIVE
              </div>
            </div>

            <div className="relative z-10 mt-auto drop-shadow-md">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Scan-to-Pay</h3>
              <p className="text-[0.95rem] opacity-90 leading-relaxed font-medium">Use your credit for global spend. Fiat settlement with merchants across offline and online acceptance.</p>
            </div>
          </motion.div>

          {/* Card 4: Prepaid Instruments (Square) */}
          <motion.div className="md:col-span-1 md:row-span-1 bg-[#fdcba2] text-moon-light rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm min-h-[340px]" variants={fadeUpVariant}>
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/prepaid-bg.png"
                alt="Prepaid Instruments Background"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#592c0c]/90 via-[#592c0c]/40 to-black/10"></div>
            </div>

            <div className="flex justify-end items-start w-full relative z-10 mb-auto">
              {/* <div className="w-12 h-12 bg-moon-light/10 text-moon-light rounded-2xl flex items-center justify-center backdrop-blur-md border border-moon-light/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>
              </div> */}
              <div className="bg-[#12ff3d] text-navy text-xs font-bold px-4 py-1.5 rounded-[12px] tracking-wider shadow-sm">
                LIVE
              </div>
            </div>

            <div className="relative z-10 mt-auto drop-shadow-md">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Prepaid Instruments</h3>
              <p className="text-[0.95rem] opacity-90 leading-relaxed font-medium">Purchase vouchers, pay in stablecoin and use for everyday needs globally across 4000+ brands in 40+ countries.</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default HorizontalCards;
