'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="bg-navy w-full py-12 md:py-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.h2 
          className="text-[clamp(3rem,5vw,4.5rem)] font-semibold text-moon-light mb-10 md:mb-12 tracking-tight md:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built by the best
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-start"
        >
          {/* Portrait Column */}
          <div className="flex flex-col w-full max-w-[460px] mx-auto md:mx-0">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#3d8bd1] flex-shrink-0 shadow-lg">
              <Image
                src="/nilesh.png"
                alt="Nilesh Lalwani"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-center h-full pt-4 md:pt-12">
            
            <div className="mb-12">
              <h3 className="text-3xl md:text-5xl font-bold text-moon-light tracking-tight mb-3">Nilesh Lalwani</h3>
              <p className="text-malibu font-semibold tracking-widest uppercase text-sm md:text-base">Founder & CEO</p>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-moon-light mb-8 leading-relaxed">
              Track Record
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-squash flex-shrink-0" />
                <span className="text-xl md:text-2xl text-moon-medium leading-relaxed font-medium">
                  Serial entrepreneur with 15 years in venture building
                </span>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-squash flex-shrink-0" />
                <span className="text-xl md:text-2xl text-moon-medium leading-relaxed font-medium">
                  Extensive experience in lending
                </span>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-squash flex-shrink-0" />
                <span className="text-xl md:text-2xl text-moon-medium leading-relaxed font-medium">
                  Previously <span className="font-bold text-[#fe6f4d]">built CASH+, a micro-credit lending venture</span> and scaled to 1M+ downloads and $5M+ in disbursement
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
