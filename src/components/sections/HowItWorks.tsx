'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaWallet, FaCheckDouble, FaCoins } from 'react-icons/fa6';
import { useRef } from 'react';

const steps = [
  {
    id: 1,
    title: "Connect your wallet",
    description: "Link your Web3 stablecoin wallet securely to begin the seamless onboarding process.",
    icon: FaWallet,
    color: "bg-[#049f9f]" // Innovation Blue
  },
  {
    id: 2,
    title: "Instant approval",
    description: "Our smart risk engine evaluates your on-chain footprint to grant credit limits instantly.",
    icon: FaCheckDouble,
    color: "bg-[#049f8f]" // Transparency Green
  },
  {
    id: 3,
    title: "Stablecoins in minutes",
    description: "Receive your approved credit line directly into your wallet as borderless stablecoins.",
    icon: FaCoins,
    color: "bg-[#048f9f]" // Tomato
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Connect the scroll progress of this section to the dashed line fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#f4faff] w-full py-28 md:py-40 px-6 overflow-hidden relative" id="how-it-works" ref={containerRef}>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

        {/* Left Side: Title & Image */}
        <div className="lg:w-[45%] flex flex-col lg:sticky lg:top-40 h-fit">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-navy text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight uppercase leading-none mb-6"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed max-w-lg mb-12"
          >
            Experience the fastest route to borderless credit. Replace outdated paperwork with seamless, on-chain verification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-full max-w-[420px] aspect-square mx-auto lg:mx-0"
          >
            <Image
              src="/howitworks.png"
              alt="Bion How It Works"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 300px, 500px"
              priority
            />
          </motion.div>
        </div>

        {/* Right Side: Timeline Steps */}
        <div className="lg:w-[55%] relative">

          {/* Timeline Dashed Background Line */}
          <div className="absolute left-[31px] md:left-[47px] top-6 bottom-6 w-[2px] border-l-[3px] border-dashed border-gray-200" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-[31px] md:left-[47px] top-6 w-[3px] bg-malibu origin-top rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex gap-6 md:gap-12"
              >
                {/* Number Badge */}
                <div className={`flex-shrink-0 relative z-10 w-16 h-16 md:w-24 md:h-24 rounded-full ${step.color} border-[3px] border-transparent flex items-center justify-center`}>
                  <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">
                    {step.id}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-0 md:pt-1">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 md:p-10 rounded-[32px] bg-white border border-gray-100 shadow-xl transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${step.color} mb-6`}>
                      <step.icon className="text-white text-2xl md:text-3xl" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-navy uppercase tracking-wider mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
