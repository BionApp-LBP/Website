'use client';
import { motion } from 'framer-motion';

const ValueProposition = () => {
    return (
        <section className="bg-pistachio pt-24 pb-32 md:pb-48 overflow-hidden flex flex-col items-center w-full">
            
            {/* Giant Bold Typography Billboard */}
            <div className="container max-w-[1400px] mx-auto px-6 text-center">
                <motion.h2 
                    className="text-[clamp(2rem,4.5vw,72px)] font-[900] text-navy leading-[0.95] tracking-[-0.02em] uppercase mb-8 max-w-[1000px] mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    BION is collateral free short-tenure stablecoin micro-credit lender with embedded payment rails
                </motion.h2>

                <motion.p 
                    className="text-[clamp(1.2rem,2vw,1.8rem)] font-medium text-navy/80 max-w-4xl mx-auto leading-snug"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    BION aims to solve for 900M+ for people across MENA, SEA, and India who are digitally active but lacks credit access
                </motion.p>
            </div>

            {/* Opaque Cards Row */}
            <div className="w-full max-w-[1400px] mx-auto px-6 mt-16 md:mt-24">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {["BION Credit", "QR Scan-to-Pay", "Prepaid Instruments", "VISA Card"].map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="bg-moon-light/70 backdrop-blur-md shadow-sm rounded-[2rem] py-5 px-8 text-navy font-bold text-lg md:text-xl flex items-center justify-center flex-1 min-w-[200px] whitespace-nowrap border border-moon-light/50"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
