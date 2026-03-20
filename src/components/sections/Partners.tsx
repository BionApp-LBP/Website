'use client';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'TON',
    logo: (
      <div className="flex items-center gap-3">
        <svg width="36" height="36" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="28" fill="#0098EA"/>
          <path d="M28 14L14 22v12l14 8 14-8V22L28 14zm0 3.5l10.5 6L28 29.5 17.5 23.5 28 17.5zm-11.5 8l10.25 5.9V41l-10.25-5.9V25.5zm23 0v9.6L29.25 41v-9.6l10.25-5.9z" fill="white"/>
        </svg>
        <span className="text-white font-extrabold text-3xl tracking-tight">TON</span>
      </div>
    ),
  },
  {
    name: 'base',
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-sm flex-shrink-0"/>
        <span className="text-white font-extrabold text-3xl tracking-tight">base</span>
      </div>
    ),
  },
  {
    name: 'Copperx',
    logo: (
      <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="#6B7FD4" strokeWidth="2.5" fill="none"/>
          <path d="M10 16a6 6 0 0 1 6-6" stroke="#6B7FD4" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="text-white font-bold text-2xl">Copperx</span>
      </div>
    ),
  },
  {
    name: 'STON.fi',
    logo: (
      <div className="flex items-center gap-3">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="#3A6FE8"/>
          <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="#5B8BF5"/>
          <polygon points="18,14 24,17 24,22 18,25 12,22 12,17" fill="white"/>
        </svg>
        <span className="text-white font-extrabold text-2xl">STON.fi</span>
      </div>
    ),
  },
  {
    name: 'router',
    logo: (
      <div className="flex items-center gap-3">
        <svg width="32" height="36" viewBox="0 0 32 40" fill="none">
          <path d="M16 2L4 10v10l12 8 12-8V10L16 2z" fill="#E83A6F"/>
          <path d="M16 20l-12 8v10l12-8 12 8V28L16 20z" fill="#C8205A"/>
        </svg>
        <span className="text-[#E83A6F] font-extrabold text-3xl tracking-tighter">router</span>
      </div>
    ),
  },
  {
    name: 'Brevo',
    logo: (
      <span className="text-[#0A9A72] font-extrabold text-4xl tracking-tight">Brevo</span>
    ),
  },
  {
    name: 'Sentra',
    logo: (
      <div className="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="8" cy="8" r="4" fill="#6BA3F5"/>
          <circle cx="20" cy="8" r="4" fill="#A07BF0"/>
          <circle cx="8" cy="20" r="4" fill="#A07BF0"/>
          <circle cx="20" cy="20" r="4" fill="#6BA3F5"/>
        </svg>
        <span className="text-white font-bold text-2xl">Sentra</span>
      </div>
    ),
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Partners() {
  return (
    <section className="bg-[#0f0c2e] w-full py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-white text-center text-[clamp(1.6rem,3vw,2.4rem)] font-bold mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Grants, Accelerators and Partners
        </motion.h2>

        {/* Logo Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {p.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
