import React from 'react';
import { DoodleSparkle, DoodleMusicNotes, DoodleOval, GithubIcon } from './Doodles';
import nagarSudharMobile from '../assets/ui/nagar_sudhar_mobile.png';
import nagarSudharDesktop from '../assets/ui/nagar_sudhar_desktop.png';

export default function CaseStudyNagarSudhar() {
  return (
    <section id="nagar-sudhar" className="relative w-full bg-charcoal text-white py-20 sm:py-28 px-6 sm:px-12 border-b border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Editorial Details & SIH 4th Rank Badge */}
        <div className="md:col-span-6 space-y-6 text-left">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
                SMART INDIA HACKATHON 2025
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="font-mono text-xs text-white/50">TEAM PROJECT</span>
            </div>
            
            <h3 className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
              Nagar Sudhar
            </h3>
          </div>

          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            Nagar Sudhar is a team project created to make civic issue reporting easier. It focuses on giving citizens a simple way to report local problems such as damaged roads, waterlogging, or streetlight issues.
          </p>

          {/* Key Metric / Highlight Box */}
          <div className="p-4 rounded-xl bg-charcoal-card border border-charcoal-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-serif text-xl font-bold">
              #4
            </div>
            <div>
              <span className="font-medium text-white block text-sm">
                Rank 4 &bull; Internal Smart India Hackathon 2025 Selection
              </span>
              <span className="text-xs text-white/60 font-sans">
                Civic issue reporting system developed as a team project for Smart India Hackathon 2025.
              </span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['Flutter', 'Dart', 'React', 'JavaScript', 'Tailwind CSS', 'Leaflet Maps', 'REST APIs'].map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links & Hand-drawn Doodle Note */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/mayankbuilds/Nagar-Sudhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-charcoal font-medium text-xs font-mono hover:bg-white/90 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <a
              href="https://github.com/mayankbuilds/nagar-sudhar-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/20 font-medium text-xs font-mono hover:bg-white/20 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Dashboard</span>
            </a>

            <div className="relative inline-flex items-center">
              <DoodleOval className="w-36 h-10 text-doodle-blue" />
              <span className="absolute inset-0 flex items-center justify-center font-script text-doodle-blue text-sm">
                SIH Rank 4
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Tilted Dark Floating Mobile Screens & Doodles */}
        <div className="md:col-span-6 relative flex justify-center items-center py-6">
          
          {/* Musical Notes & Sparkle Doodles */}
          <DoodleMusicNotes className="absolute top-2 right-6 w-10 h-10 text-doodle-blue animate-bounce opacity-80" />
          <DoodleSparkle className="absolute bottom-4 left-6 w-6 h-6 text-doodle-blue" delay={0.4} />

          {/* Primary Mobile Mockup (Tilted Left) */}
          <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-charcoal-dark border-4 border-charcoal-border shadow-2xl overflow-hidden p-2.5 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10 group">
            {/* Phone Speaker Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/80 rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            
            {/* Real App Screenshot */}
            <a
              href="https://nagar-sudhar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 relative"
              title="Click to visit live Nagar Sudhar web app"
            >
              <img
                src={nagarSudharMobile}
                alt="Nagar Sudhar Civic App UI"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white/90 text-[10px] font-mono px-2 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/15">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live App
                </span>
                <span className="text-white/60">nagar-sudhar.vercel.app &rarr;</span>
              </div>
            </a>
          </div>

          {/* Secondary Mobile Mockup (Behind Tilted Right) */}
          <div className="hidden sm:block absolute right-2 w-56 aspect-[9/18] rounded-[2rem] bg-charcoal-card/90 border-2 border-white/10 shadow-xl overflow-hidden p-2 transform rotate-6 opacity-70 hover:opacity-90 transition-opacity z-0 scale-90">
            <div className="w-16 h-2 bg-white/20 rounded-full mx-auto mb-2" />
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-neutral-900 border border-white/10 relative">
              <img
                src={nagarSudharDesktop}
                alt="Nagar Sudhar Admin Oversight"
                className="w-full h-full object-cover object-left-top"
                loading="lazy"
              />
              <div className="absolute bottom-2 inset-x-2 text-center text-[9px] font-mono text-white/70 bg-black/70 backdrop-blur-sm py-0.5 rounded border border-white/10">
                Live Web View
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
