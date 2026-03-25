'use client';
import { motion } from 'framer-motion';
import { HeroParallax, HorizontalCards, OurDNA, BackersAndPartners, CommunityBanner, HowItWorks, Traction } from '@/components/sections';
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
      <Traction />

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
