import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Trophy, Award, MapPin } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 sm:space-y-10 pt-6 sm:pt-14"
    >
      {/* Live Badge & Location (Centered on Mobile) */}
      <motion.div
        variants={item}
        className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-white/50 tracking-wider uppercase text-center sm:text-left"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span className="text-white/80">Computer Science &amp; IoT Engineer</span>
        <span className="text-white/20">&bull;</span>
        <span>NSEC Kolkata</span>
        <span className="text-white/20 hidden xs:inline">&bull;</span>
        <span className="text-emerald-400/90 flex items-center justify-center gap-1 w-full sm:w-auto mt-1 sm:mt-0">
          <MapPin className="w-3 h-3" /> Kolkata, India
        </span>
      </motion.div>

      {/* Main Headline (Centered on Mobile) */}
      <motion.div variants={item} className="space-y-5 text-center sm:text-left">
        <h1 className="font-display text-3xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.12] sm:leading-[1.06] mx-auto sm:mx-0">
          Engineering practical software solutions with distributed backends.
        </h1>
        <p className="max-w-2xl text-sm sm:text-lg text-white/60 leading-relaxed font-light mx-auto sm:mx-0">
          I'm Aditya Thakur, an undergraduate engineer specializing in the Internet of Things at Netaji Subhash Engineering College. I build robust architectures with Java, Spring Boot microservices, Python, and user-centric web applications.
        </p>
      </motion.div>

      {/* Action Buttons (Centered on Mobile) */}
      <motion.div
        variants={item}
        className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2"
      >
        <a
          href="#work"
          className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-full bg-white text-black text-xs font-semibold tracking-wider uppercase hover:bg-white/90 transition-all flex items-center gap-2 shadow-sm"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:text-white hover:border-white/25 transition-all flex items-center gap-1.5"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* Real Resume Credential Cards */}
      <motion.div
        variants={item}
        className="pt-10 sm:pt-12 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"
      >
        {/* Achievement 1 */}
        <div className="flex items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-left">
          <Trophy className="w-4 h-4 text-amber-300 shrink-0" />
          <div className="text-xs">
            <span className="text-white font-medium block font-sans text-sm">Internal SIH 2025</span>
            <span className="text-white/50 font-mono text-[11px]">Ranked 4th &bull; Nagar Sudhar</span>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="flex items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-left">
          <Award className="w-4 h-4 text-indigo-400 shrink-0" />
          <div className="text-xs">
            <span className="text-white font-medium block font-sans text-sm">Hackatron 3.0</span>
            <span className="text-white/50 font-mono text-[11px]">Top 20 Finalist &bull; BIT Sindri</span>
          </div>
        </div>

        {/* Achievement 3 */}
        <div className="flex items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-left">
          <Trophy className="w-4 h-4 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <span className="text-white font-medium block font-sans text-sm">SIH 2026 Contender</span>
            <span className="text-white/50 font-mono text-[11px]">Unnati Portal &bull; Rural Impact</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
