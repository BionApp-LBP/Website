'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroParallax: React.FC = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh] bg-periwinkle">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Text Layer */}
        <motion.div
          className="text-center z-10 text-moon-light w-[90%] max-w-[1000px] -mt-[10vh]"
          style={{ y: yText, opacity }}
        >
          <h1 className="text-[clamp(4rem,8vw,6.5rem)] font-bold leading-none tracking-tight mb-8">
            The future of credit is borderless
          </h1>
          <p className="text-xl font-medium leading-[1.4] mb-10 max-w-[600px] mx-auto">
            Get early access to fair, transparent credit. Available globally, settled instantly in Web3 stablecoins.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg">
            Join the waitlist
          </button>
        </motion.div>

        {/* Floating Card with VISA Card Image */}
        <motion.div
          className="absolute top-[75vh] left-1/2 w-[90%] max-w-[550px] h-[65vh] min-h-[500px] rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.45)] z-20 overflow-hidden"
          style={{ x: "-50%", y: yImage }}
        >
          <Image
            src="/hero-card.png"
            alt="BION VISA Card"
            fill
            className="object-cover object-center"
            style={{ filter: 'brightness(1.05) contrast(1.05)' }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroParallax;
