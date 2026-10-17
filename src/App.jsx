import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import IntroCurtain from './components/IntroCurtain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);

  const handleReplayIntro = () => {
    setIntroKey(prev => prev + 1);
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#090A0D] text-[#F8FAFC]">
      {/* Dynamic Animated Background with Grid & Floating Auroras */}
      <Background />

      {/* Intro Curtain Screen */}
      {showIntro && (
        <IntroCurtain
          key={introKey}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Top Navigation */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Content Sections (Properly Centered and Full-Width on Mobile) */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-20 sm:space-y-28">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

