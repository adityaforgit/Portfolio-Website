import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Mail } from 'lucide-react';

export default function Navbar({ onReplayIntro }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full bg-[#090A0D]/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 py-3.5 sm:py-4"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="text-sm font-semibold tracking-tight text-white flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform"></span>
          <span className="font-display">Aditya Thakur</span>
          <span className="hidden sm:inline text-xs font-mono text-white/30">&bull; Kolkata</span>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-white/60">
          <a href="#work" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#milestones" className="hover:text-white transition-colors">Milestones</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onReplayIntro}
            title="Replay Intro Animation"
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-white/60" />
            <span className="hidden sm:inline">Intro</span>
          </button>

          <a
            href="https://github.com/adityaforgit"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-1.5 rounded-full text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>

          <a
            href="https://linkedin.com/in/adithakur03"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-1.5 rounded-full text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>

          <a
            href="mailto:adityathakur03012006@gmail.com"
            title="Email Aditya"
            className="p-1.5 rounded-full text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </motion.header>
  );
}
