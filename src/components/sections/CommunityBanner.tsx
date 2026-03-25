import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export default function CommunityBanner() {
  return (
    <section className="w-full bg-navy py-12 md:py-16 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center relative">
        {/* Main Content */}
        <div className="max-w-[700px] z-10">
          <div className="flex items-center justify-center mb-4">
            <Image src="/logo_bion.png" alt="BION Logo" width={120} height={60} className="w-auto h-8 md:h-10 object-contain" priority />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            Join Our Community
          </h2>
          <p className="text-[#a1a1aa] text-base mb-6 leading-relaxed mx-auto">
            Join us to keep up with the updates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://t.me/bionofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#262c31] text-white px-6 py-2.5 rounded-full hover:bg-[#2d353b] transition-all duration-300"
            >
              <FaTelegramPlane className="text-[#3b82f6] text-xl" />
              <span className="font-medium">Join Our Telegram</span>
            </a>

            <a
              href="https://x.com/bion_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#262c31] text-white px-6 py-2.5 rounded-full hover:bg-[#2d353b] transition-all duration-300"
            >
              <FaTwitter className="text-[#3b82f6] text-xl" />
              <span className="font-medium">Follow Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/company/bion-app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#262c31] text-white px-6 py-2.5 rounded-full hover:bg-[#2d353b] transition-all duration-300"
            >
              <FaLinkedin className="text-[#3b82f6] text-xl" />
              <span className="font-medium">Follow Linkedin</span>
            </a>
          </div>
        </div>

        {/* Privacy Policy - Plain text at bottom right on large, flows below on smaller devices */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 py-2 w-full lg:w-auto text-center lg:text-right">
          <Link href="/privacy" className="text-[#555555] hover:text-[#a1a1aa] transition-colors text-[10px] tracking-widest uppercase font-bold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
