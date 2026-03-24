import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaTelegram,
  FaApple,
  FaGooglePlay,
  FaStar,
  FaEnvelope,
} from 'react-icons/fa6';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] pt-12 pb-6 px-6 relative">
      <div className="max-w-[1200px] mx-auto">

        {/* Bottom Section */}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[FaLinkedinIn, FaXTwitter, FaInstagram, FaEnvelope, FaTelegram,].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333333] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#262626] transition-colors"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <div className="text-right text-[11px] text-gray-500 font-medium leading-relaxed">
            <p>© 2026 Bion. All rights reserved</p>
          </div>
        </div>

        {/* Bottom Pill Marker */}
        <div className="w-8 h-1 bg-[#333333] rounded-full mx-auto mt-6" />

      </div>
    </footer>
  );
};

export default Footer;
