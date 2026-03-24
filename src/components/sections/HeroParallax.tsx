'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroParallax: React.FC = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[800px] overflow-hidden bg-blue-50">

      {/* Sky Background Layer (Z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/sky-bg.png"
          alt="Sky Background"
          fill
          className="object-cover object-bottom opacity-80"
          priority
        />
      </div>

      {/* Text Layer (Z-30) - In front of the model */}
      <div className="relative z-30 flex items-center justify-start h-full w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-[8vh]">
        <div className="flex flex-col items-start w-full md:w-[80%] lg:w-[80%] xl:w-[80%]">
          <motion.h1
            className="text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[1.05] tracking-tight mb-6 text-[#141b2d]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            The future of credit is borderless
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl font-[600] leading-[1.5] mb-10 max-w-[600px] text-[#2c3954]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Get early access to fair, transparent credit.
            <br />
            - 30 days Tenure
            <br />
            - Unsecured Credit
            <br />
            - Upto $1000 Credit Limit
          </motion.p>
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Blue glow effect behind button */}
            <div className="absolute inset-0 bg-blue-400 opacity-40 blur-2xl scale-125 z-0 rounded-full"></div>
            <button
              className="relative z-10 bg-black text-white px-10 py-4 md:px-12 md:py-4 rounded-full font-semibold hover:bg-gray-800 transition-transform hover:scale-105 shadow-xl text-lg md:text-xl"
            >
              Check Eligibility
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Person Layer (Z-20) - In front of text */}
      <div className="absolute bottom-0 right-[-2%] lg:right-[2%] z-20 w-[90%] max-w-[800px] h-[75%] md:h-[85%] pointer-events-none hidden lg:flex items-end justify-center drop-shadow-2xl">
        <div className="relative w-full h-full">
          <Image
            src="/hero-model-3.png"
            alt="Hero Person"
            fill
            className="object-contain object-bottom object-right"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default HeroParallax;
