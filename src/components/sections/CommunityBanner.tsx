'use client';
import { motion } from 'framer-motion';

export default function CommunityBanner() {
  return (
    <section className="w-full bg-moon-light py-12 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          className="relative rounded-[2rem] overflow-hidden px-10 py-10 md:py-12 flex flex-col md:flex-row items-center gap-8 justify-between"
          style={{
            background: 'linear-gradient(135deg, #7b6fdb 0%, #5b7fe8 55%, #6b9ef5 100%)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Heading */}
          <h2 className="text-white text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-snug max-w-[320px] text-center md:text-left">
            Join Our Community<br />To Stay Updated
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-[#5b7fe8] font-semibold text-base px-7 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Twitter
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 text-white border border-white/40 font-semibold text-base px-7 py-3 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Telegram
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682a.737.737 0 0 0 1.285.225l2.537-2.883 4.76 3.585a2.042 2.042 0 0 0 3.178-1.285l2.998-16.733a2.048 2.048 0 0 0-.508-1.581zM9.93 15.417l-1.04 3.439-1.315-4.35 8.14-5.448-5.785 6.359z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
