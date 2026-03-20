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
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">

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
            {/* Abstract Graphic */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-periwinkle/20 to-transparent pointer-events-none"></div>
            <div className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] rounded-full border-[1px] border-periwinkle/30 opacity-50"></div>
            <div className="absolute right-[5%] bottom-[10%] w-[200px] h-[200px] rounded-full border-[1px] border-periwinkle/20 opacity-50"></div>

            <div className="flex justify-between items-start w-full relative z-10 mb-auto">
              <div className="w-12 h-12 bg-moon-light/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <div className="bg-moon-light/10 text-moon-light text-xs font-bold px-4 py-1.5 rounded-full tracking-wider backdrop-blur-md border border-moon-light/10">
                COMING SOON
              </div>
            </div>

            <div className="relative z-10 mt-auto max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Instant Credit</h3>
              <p className="text-[1.05rem] opacity-80 leading-relaxed font-medium">Avail short-term collateral-free credit in stablecoin. Pay only for what you use with absolutely no hidden charges.</p>
            </div>
          </motion.div>

          {/* Card 2: VISA Cards (Tall - 1 column, 2 rows) */}
          <motion.div className="md:col-span-1 md:row-span-2 bg-malibu text-navy rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm min-h-[400px] md:min-h-0" variants={fadeUpVariant}>
            {/* Abstract Graphic - Floating Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[80%] h-48 bg-moon-light/40 rounded-3xl -rotate-12 backdrop-blur-sm shadow-xl border border-moon-light/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[80%] h-48 bg-navy rounded-3xl -rotate-6 shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-navy to-navy/80 relative">
                <div className="absolute top-4 left-4 w-10 h-6 bg-periwinkle/40 rounded-md"></div>
                <div className="absolute bottom-4 right-4 text-moon-light/40 font-mono text-sm">**** 4242</div>
              </div>
            </div>

            <div className="flex justify-end w-full relative z-10 mb-auto">
              <div className="bg-navy/10 text-navy text-xs font-bold px-4 py-1.5 rounded-full tracking-wider backdrop-blur-md">
                COMING SOON
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">VISA Cards</h3>
              <p className="text-[1.05rem] opacity-80 leading-relaxed font-medium">Global merchant acceptance. Navigate FX volatility with the best rates and earn cashback & rewards for every spend.</p>
            </div>
          </motion.div>

          {/* Card 3: Scan-to-Pay (Square) */}
          <motion.div className="md:col-span-1 md:row-span-1 bg-squash text-navy rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm min-h-[340px]" variants={fadeUpVariant}>
            {/* Abstract Graphic */}
            <div className="absolute -right-6 -top-6 opacity-10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h6v6H3z" /><path d="M15 3h6v6h-6z" /><path d="M3 15h6v6H3z" /><path d="M21 15v6" /><path d="M15 21v-6h6" /></svg>
            </div>

            <div className="flex justify-between items-start w-full relative z-10 mb-auto">
              <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="6" height="6" x="3" y="3" rx="1" /><rect width="6" height="6" x="15" y="3" rx="1" /><rect width="6" height="6" x="3" y="15" rx="1" /><path d="M15 15h2v2h-2z" /><path d="M19 19h2v2h-2z" /><path d="M19 15h2v2h-2z" /><path d="M15 19h2v2h-2z" /></svg>
              </div>
              <div className="bg-pistachio text-navy text-xs font-bold px-4 py-1.5 rounded-full tracking-wider shadow-sm">
                LIVE
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Scan-to-Pay</h3>
              <p className="text-[0.95rem] opacity-90 leading-relaxed font-medium">Use your credit for global spend. Fiat settlement with merchants across offline and online acceptance.</p>
            </div>
          </motion.div>

          {/* Card 4: Prepaid Instruments (Square) */}
          <motion.div className="md:col-span-1 md:row-span-1 bg-tomato text-moon-light rounded-[2.5rem] flex flex-col p-10 relative overflow-hidden shadow-sm min-h-[340px]" variants={fadeUpVariant}>
            {/* Abstract Graphic */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60"></div>

            <div className="flex justify-between items-start w-full relative z-10 mb-auto">
              <div className="w-12 h-12 bg-moon-light/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>
              </div>
              <div className="bg-pistachio text-navy text-xs font-bold px-4 py-1.5 rounded-full tracking-wider shadow-sm">
                LIVE
              </div>
            </div>

            <div className="relative z-10 mt-auto">
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
