'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Founder · Wanderlust Commerce',
    company: 'WC',
    companyColor: 'bg-malibu',
    quote:
      '"BION gave my small business instant credit access — no collateral, no hassle. Within 24 hours I had working capital that let me fulfil my biggest order yet."',
    image: '/hero-person.png',
  },
  {
    name: 'Raj Krishnan',
    role: 'CFO · NeoRetail Group',
    company: 'NR',
    companyColor: 'bg-squash',
    quote:
      '"The embedded payment rails are a game-changer. Our checkout conversion went up 18% the month we integrated BION\'s QR Scan-to-Pay solution."',
    image: '/hero-person.png',
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    const newIndex = (next + testimonials.length) % testimonials.length;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const t = testimonials[index];

  return (
    <section className="bg-navy w-full py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Slide */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-10 md:gap-16 items-center"
          >
            {/* Portrait */}
            <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto md:mx-0 rounded-[2rem] overflow-hidden bg-moon-medium flex-shrink-0">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              {/* Top row */}
              <div className="flex items-center justify-between">
                {/* Company Badge */}
                <div className={`${t.companyColor} text-white font-bold text-sm px-4 py-2 rounded-full tracking-wide`}>
                  {t.company}
                </div>
                {/* Counter */}
                <span className="text-moon-medium text-sm font-medium tabular-nums">
                  {index + 1} / {testimonials.length}
                </span>
              </div>

              {/* Person info */}
              <p className="text-moon-medium text-sm font-medium">
                {t.name} &bull; {t.role}
              </p>

              {/* Quote */}
              <blockquote className="text-moon-light text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.25] tracking-[-0.01em]">
                {t.quote}
              </blockquote>

              {/* CTA */}
              <button
                onClick={() => go(index + 1)}
                className="group flex items-center gap-2 text-malibu text-sm font-semibold w-fit mt-2 hover:gap-3 transition-all duration-300"
              >
                Read more customer stories
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>

              {/* Navigation dots */}
              <div className="flex gap-3 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'bg-moon-light w-8' : 'bg-moon-medium/40 w-4'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
