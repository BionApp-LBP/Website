'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { name: 'Push', image: '/backed-by/apo83EVEzvsArTfe10Wsa3YUo.png' },
  { name: 't-hub', image: '/backed-by/g3hNvfWXuQf7qGkedwOszCc0K6U (1).png' },
  { name: 'TON', image: '/backed-by/kJ5lJswgqq82mbP6dTuDeRI5g.png' },
  { name: 'Stellar', image: '/backed-by/kkcrfUdzeqlQcatWEbLv1wqklA.png' },
  { name: 'Blockchain Founders Group', image: '/backed-by/pc4au2fdXmFvKCD719NbJ7CqzPY.png' },
  { name: 'TON VENTURES', image: '/backed-by/vfzdxJBn5vHaA777kKm2VAei4.png' },
  { name: 'Router', image: '/partners/P4jrbPT2X6LRLChQ0gnSsIZ9Wk.png' },
  { name: 'STON.fi', image: '/partners/Zpd5fZvggUAWUfWzYh0LgyHUxo.png' },
  { name: 'Copperx', image: '/partners/aCXJr6QuUX28rDrnfExLbSuys.png' },
  { name: 'Base', image: '/partners/pmNY5BQd2FP2UWLKEt5jO6CH1k (1).png' },
  { name: 'Sentra', image: '/partners/rmrfPWJfWb9ycWZnXyANUc3yU.png' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BackersAndPartners() {
  return (
    <section className="bg-navy w-full py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-white text-center text-[clamp(2rem,4vw,3.2rem)] font-bold mb-20 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Backers and Partners
        </motion.h2>

        {/* Logo Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-20 max-w-[1100px] mx-auto place-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {logos.map((logo, index) => {
            // Desktop: first 8 span 3 cols (4 per row), last 3 span 4 cols (3 per row)
            const isThirdRow = index >= 8;
            const desktopColSpan = isThirdRow ? "md:col-span-4" : "md:col-span-3";

            return (
              <motion.div
                key={index}
                variants={item}
                className={`relative w-full flex justify-center col-span-1 ${desktopColSpan} opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105`}
              >
                <div className="relative w-32 h-16 md:w-56 md:h-20">
                  <Image 
                    src={logo.image} 
                    alt={logo.name} 
                    fill 
                    className="object-contain" 
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
