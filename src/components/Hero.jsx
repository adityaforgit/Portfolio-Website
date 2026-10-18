import React from 'react';
import { motion } from 'framer-motion';
import { DoodleOval, DoodleSparkle } from './Doodles';

export default function Hero() {
  return (
    <section className="relative w-full bg-charcoal text-white pt-20 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-white/10">
      {/* Decorative ambient subtle background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-doodle-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Sparkles */}
      <DoodleSparkle className="absolute top-12 left-1/4 w-5 h-5 opacity-70" delay={0.2} />
      <DoodleSparkle className="absolute bottom-16 right-1/4 w-6 h-6 opacity-60" delay={0.8} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-3xl"
      >
        {/* Handwritten script name above title */}
        <span className="font-script text-3xl sm:text-4xl text-doodle-blue font-medium tracking-wide mb-1 select-none">
          Aditya Thakur
        </span>

        {/* Giant luxury editorial serif title */}
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#F9F9FA] font-normal tracking-tight leading-none mb-6">
          Portfolio
        </h1>

        {/* Sketched hand-drawn blue oval badge */}
        <div className="relative inline-flex items-center justify-center px-6 py-2 mb-4">
          <DoodleOval className="absolute inset-0 w-full h-full text-doodle-blue scale-105" />
          <span className="relative z-10 font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/90 font-medium">
            CSE Student &bull; IoT &bull; Java &bull; Spring Boot
          </span>
        </div>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Building practical software projects with Java, web technologies, and user-focused design.
        </p>
      </motion.div>
    </section>
  );
}
