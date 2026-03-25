'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Traction: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const stats = [
    {
      label: "Users",
      value: "200,000+",
      // subtext: "Global community growing daily"
    },
    {
      label: "GMV",
      value: "$1.5 Mn+",
      // subtext: "Total transaction volume processed"
    }
  ];

  return (
    <section className="py-24 bg-moon-light">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >

          <h1 className="text-6xl md:text-6xl font-bold text-navy tracking-tight"> Traction</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center text-center shadow-sm border border-gray-100/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-7xl font-bold text-navy mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xl md:text-2xl font-bold text-navy/80 mb-2 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-gray-500 font-medium">
                {/* {stat.subtext} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction;
