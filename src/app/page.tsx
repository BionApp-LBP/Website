'use client';
import { motion } from 'framer-motion';
import { HeroParallax, ValueProposition, HorizontalCards, BentoGrid, OurDNA, Testimonials, BackersAndPartners, CommunityBanner, HowItWorks } from '@/components/sections';
import { Navbar, Footer } from '@/components/layout';


export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <main className="w-full bg-moon-light text-navy">

      <Navbar />
      <HeroParallax />
      <HorizontalCards />
      <HowItWorks />
      {/* <ValueProposition /> */}
      <BackersAndPartners />
      <OurDNA />
      {/* <Testimonials /> */}
      {/* <BentoGrid /> */}
      <CommunityBanner />
      {/* <Footer /> */}
    </main>
  );
}
