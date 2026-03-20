'use client';
import { motion } from 'framer-motion';

const backers = [
  {
    name: 'TON VENTURES',
    logo: (
      <div className="flex items-center gap-2 border-2 border-white/80 rounded-xl px-5 py-3">
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <path d="M28 14L14 22v12l14 8 14-8V22L28 14zm0 3.5l10.5 6L28 29.5 17.5 23.5 28 17.5zm-11.5 8l10.25 5.9V41l-10.25-5.9V25.5zm23 0v9.6L29.25 41v-9.6l10.25-5.9z" fill="white"/>
        </svg>
        <span className="text-white font-bold text-lg tracking-wide">TON VENTURES</span>
      </div>
    ),
  },
  {
    name: 'Blockchain Founders Group',
    logo: (
      <div className="flex flex-col items-center">
        <div className="bg-blue-500 px-3 py-1 text-white font-extrabold text-[13px] leading-tight">
          Blockchain<br/>Founders<br/>Group
        </div>
      </div>
    ),
  },
  {
    name: 'TON',
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#0098EA] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
            <path d="M28 14L14 22v12l14 8 14-8V22L28 14zm0 3.5l10.5 6L28 29.5 17.5 23.5 28 17.5zm-11.5 8l10.25 5.9V41l-10.25-5.9V25.5zm23 0v9.6L29.25 41v-9.6l10.25-5.9z" fill="white"/>
          </svg>
        </div>
        <span className="text-white font-extrabold text-3xl tracking-tight">TON</span>
      </div>
    ),
  },
  {
    name: 'Stellar',
    logo: (
      <div className="flex items-center gap-3">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="14" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M5 10 Q15 5 25 15 Q15 25 5 20 Q10 15 5 10Z" fill="white" opacity="0.9"/>
        </svg>
        <span className="text-white font-bold text-2xl italic tracking-wide">Stellar</span>
      </div>
    ),
  },
  {
    name: 'Push',
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-b from-purple-400 to-pink-500 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8 2 5 5 5 9c0 3.5 2 6.5 5 8v2h4v-2c3-1.5 5-4.5 5-8 0-4-3-7-7-7zm0 2a5 5 0 0 1 5 5c0 2.8-1.8 5.2-4 6.4V17H11v-1.6C8.8 14.2 7 11.8 7 9a5 5 0 0 1 5-5z"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-extrabold text-xl leading-tight">Push</div>
          <div className="text-white/50 text-[10px] uppercase tracking-widest font-medium">previously epns</div>
        </div>
      </div>
    ),
  },
  {
    name: 't-hub',
    logo: (
      <div className="flex items-center gap-2 border border-orange-400/70 rounded-full px-4 py-2">
        <span className="text-orange-400 font-bold text-xl">t</span>
        <span className="text-white/80 font-bold text-xl">-hub</span>
      </div>
    ),
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BackedBy() {
  return (
    <section className="bg-[#160e3f] w-full py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-white text-center text-[clamp(1.8rem,3vw,2.6rem)] font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          Backed by
        </motion.h2>

        {/* Logo Grid — 3 cols */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {backers.map((b) => (
            <motion.div
              key={b.name}
              variants={item}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {b.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
