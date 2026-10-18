import React, { useState } from 'react';
import IntroCurtain from './components/IntroCurtain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HelloSection from './components/HelloSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsOverview from './components/ProjectsOverview';
import CaseStudyNagarSudhar from './components/CaseStudyNagarSudhar';
import CaseStudyUnnati from './components/CaseStudyUnnati';
import CaseStudyGradeCompass from './components/CaseStudyGradeCompass';
import CaseStudyMicroservices from './components/CaseStudyMicroservices';
import InspirationSection from './components/InspirationSection';
import FunFactsSection from './components/FunFactsSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);

  const handleReplayIntro = () => {
    setIntroKey(prev => prev + 1);
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-charcoal text-[#F8FAFC] overflow-x-hidden selection:bg-doodle-blue selection:text-white">
      {/* Intro Curtain Screen */}
      {showIntro && (
        <IntroCurtain key={introKey} onComplete={() => setShowIntro(false)} />
      )}

      {/* Top 3-Column Navigation with Replay Trigger */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Flow: Alternating Charcoal & Warm-Sand Blocks */}
      <main className="w-full flex flex-col">
        {/* Charcoal: Hero with Giant Serif & Sketched Pill */}
        <Hero />

        {/* Warm Sand: Hello with Rounded Portrait & Blue Orbits */}
        <HelloSection />

        {/* Warm Sand: Education & Scannable QR & Languages */}
        <EducationSection />

        {/* Warm Sand: Skills & Retro Workstation Graphic */}
        <SkillsSection />

        {/* Charcoal: Projects Overview Lineup */}
        <ProjectsOverview />

        {/* Charcoal: Case Study 1 - Nagar Sudhar (SIH 2025 4th Rank) */}
        <CaseStudyNagarSudhar />

        {/* Warm Sand: Case Study 2 - Unnati Portal (SIH 2026 Finalist) */}
        <CaseStudyUnnati />

        {/* Charcoal: Case Study 3 - Grade Compass (MAKAUT Calculator) */}
        <CaseStudyGradeCompass />

        {/* Warm Sand: Case Study 4 - Spring Boot Microservices */}
        <CaseStudyMicroservices />

        {/* Warm Sand: Hardware & Inspiration Telemetry Lab */}
        <InspirationSection />

        {/* Charcoal: Fun Facts with Camera-Roll Scrapbook & 4 Vector Doodles */}
        <FunFactsSection />

        {/* Warm Sand: Footer Strip & "Thank you" Letter */}
        <FooterSection />
      </main>
    </div>
  );
}
