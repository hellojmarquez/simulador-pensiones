'use client';
import Navbar from './components/Navbar';
import NewFooter from './components/NewFooter';
import HeroSection from './components/landing/HeroSection';
import ReformInfographic from './components/landing/ReformInfographic';
import TrustFeatures from './components/landing/TrustFeatures';
import MethodologySection from './components/landing/MethodologySection';
import FaqAccordion from './components/landing/FaqAccordion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary-500 selection:text-white overflow-hidden">
      <Navbar />
      
      {/* 1. HERO V2: Massive Typo + 3D Composition */}
      <HeroSection />

      {/* 2. REFORM EDUCATOR: Visual Breakdown of the 6% */}
      <ReformInfographic />

      {/* 3. VALUE PROPS: Why use this tool? */}
      <TrustFeatures />

      {/* 4. METHODOLOGY: Data Objectivity and Transparency */}
      <MethodologySection />

      {/* 5. FAQ: Building Professionalism and Transparency */}
      <FaqAccordion />

      {/* 6. FOOTER: Redesigned Dark Footer */}
      <NewFooter />
    </main>
  );
}
