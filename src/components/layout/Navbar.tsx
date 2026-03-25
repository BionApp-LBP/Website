'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-2 left-0 right-0 mx-auto w-[95%] max-w-[1300px] rounded-full px-8 py-3 z-50 flex justify-between items-center bg-transparent"
    >

      {/* Logo */}
      <div className="flex items-center">
        <Image src="/bion_logo_1.png" alt="BION Logo" width={100} height={50} className="w-auto h-8 md:h-10 object-contain drop-shadow-sm" priority />
      </div>

      {/* Center Links & Right Button */}
      <div className="flex items-center gap-10">
        <div className="hidden md:flex gap-8 items-center font-medium text-[1.05rem] text-navy">
          <span className="cursor-pointer hover:text-tomato transition-colors">Home</span>
          {/* <span className="cursor-pointer hover:text-tomato transition-colors">Blog</span> */}
        </div>

        <a href="https://app.bionapp.com" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 bg-white text-moon-light px-6 py-2.5 rounded-[18px] font-medium border-2 border-peachy hover:bg-peachy transition-all">
            <span className="text-navy font-bold">Get Credit</span>
            <svg className="text-navy" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M12 17V10"></path>
              <path d="M9 13l3-3 3 3"></path>
            </svg>
          </button>
        </a>
      </div>

    </motion.nav>
  );
};

export default Navbar;
