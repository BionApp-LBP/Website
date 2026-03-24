import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export default function CommunityBanner() {
  return (
    <section className="w-full bg-[#111111] py-8 md:py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-10">
          {/* Left Side: Content */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Join Our Community
            </h2>
            <p className="text-[#a1a1aa] text-lg mb-8 leading-relaxed max-w-[480px]">
              Join us to keep up with the updates.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-3 bg-[#262c31] text-white px-6 py-3 rounded-full hover:bg-[#2d353b] transition-colors"
              >
                <FaTelegramPlane className="text-[#3b82f6] text-xl" />
                <span className="font-medium text-sm">Join Our Telegram</span>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 bg-[#262c31] text-white px-6 py-3 rounded-full hover:bg-[#2d353b] transition-colors"
              >
                <FaTwitter className="text-[#3b82f6] text-xl" />
                <span className="font-medium text-sm">Follow Twitter</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 bg-[#262c31] text-white px-6 py-3 rounded-full hover:bg-[#2d353b] transition-colors"
              >
                <FaLinkedin className="text-[#3b82f6] text-xl" />
                <span className="font-medium text-sm">Follow Linkedin</span>
              </a>
            </div>
          </div>

          {/* Right Side: 3D Community Logo */}
          <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center flex-shrink-0">
            <Image
              src="/community-logo.png"
              alt="BION Community"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Footer Row in Banner */}
        <div className="w-full border-t border-[#262626] pt-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/bion-logo.png" alt="BION Logo" width={120} height={60} className="w-auto h-8 md:h-10 object-contain" priority />
          </div>

          {/* Links / Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-[#333333] hover:bg-[#262626] text-white transition-all text-sm font-semibold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-[#333333] hover:bg-[#262626] text-white transition-all text-sm font-semibold">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
