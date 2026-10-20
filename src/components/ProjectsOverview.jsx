import React from 'react';
import { DoodleSpiral, DoodleArrow } from './Doodles';
import gradeCompassImg from '../assets/ui/grade_compass_mobile.png';
import nagarSudharImg from '../assets/ui/nagar_sudhar_mobile.png';
import unnatiImg from '../assets/ui/unnati_portal_1.png';

const previewItems = [
  {
    id: 'grade-compass',
    title: 'Grade Compass',
    category: 'Personal Project • Built from Scratch',
    tag: 'Academic Calculator',
    description: 'A MAKAUT-focused academic calculator that helps students track internal marks and estimate the End-Semester Examination score needed for target grades.',
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: '#10B981',
    badge: 'MAKAUT Calc',
    image: gradeCompassImg,
  },
  {
    id: 'nagar-sudhar',
    title: 'Nagar Sudhar',
    category: 'Smart India Hackathon 2025 • Rank 4',
    tag: 'Civic Issue Resolution',
    description: 'Civic issue reporting system developed as a team project for Smart India Hackathon 2025.',
    color: 'from-amber-500/20 to-orange-500/10',
    accent: '#F59E0B',
    badge: 'SIH Rank 4',
    image: nagarSudharImg,
  },
  {
    id: 'unnati',
    title: 'Unnati Portal',
    category: 'Smart India Hackathon 2026 • Participant',
    tag: 'Citizen & CSR Platform',
    description: 'A platform connecting village-level challenges with student projects, CSR funding, and government monitoring.',
    color: 'from-blue-500/20 to-indigo-500/10',
    accent: '#3D68FF',
    badge: 'SIH 2026',
    image: unnatiImg,
  }
];

// Duplicated list for infinite seamless loop sliding
const slidingItems = [...previewItems, ...previewItems, ...previewItems, ...previewItems];

export default function ProjectsOverview() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="works" className="relative w-full bg-charcoal text-white py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Title with Spiral & Doodle Annotation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-2 sm:px-4">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
              Projects.
            </h2>
            <DoodleSpiral className="w-8 h-8 text-doodle-blue" />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <DoodleArrow className="w-6 h-6 text-doodle-blue -rotate-45 hidden sm:block" />
            <span className="font-script text-doodle-blue text-xl">
              curated work &amp; hackathon builds (2024 &mdash; 2026)
            </span>
          </div>
        </div>

        {/* Small Interaction Hint */}
        <div className="flex items-center justify-between px-2 sm:px-4 text-xs font-mono text-white/40">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Continuous Project Stream
          </span>
          <span className="font-script text-doodle-blue text-sm sm:text-base">
            ✦ Hover to pause &bull; Click card to jump to case study
          </span>
        </div>

        {/* Continuous Horizontal Sliding Marquee Track */}
        <div className="relative w-full overflow-hidden py-3">
          
          {/* Subtle Side Vignette Fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-charcoal to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-charcoal to-transparent z-20" />

          {/* Infinite Sliding Track */}
          <div className="animate-project-slide flex gap-5">
            {slidingItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => scrollTo(item.id)}
                className="w-56 sm:w-64 flex-shrink-0 group cursor-pointer flex flex-col items-center space-y-3 p-3.5 rounded-2xl bg-charcoal-card/90 border border-charcoal-border hover:border-doodle-blue/80 hover:bg-charcoal-card hover:scale-[1.02] transition-all shadow-lg"
              >
                {/* Mini Smartphone Mockup Frame */}
                <div className="relative w-full aspect-[9/15] rounded-xl bg-charcoal-dark border-2 border-white/15 overflow-hidden shadow-md group-hover:border-doodle-blue transition-colors">
                  {/* Speaker Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/40 z-20" />
                  
                  {/* Real UI Screen Content */}
                  <div className="relative w-full h-full overflow-hidden bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white/90 border border-white/10">
                        {item.badge}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                    </div>
                  </div>
                </div>

                {/* Title & Tag Underneath */}
                <div className="text-center w-full space-y-0.5">
                  <h4 className="font-serif text-sm sm:text-base font-medium text-white group-hover:text-doodle-blue transition-colors truncate">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/40 block uppercase tracking-wider truncate">
                    {item.category}
                  </span>
                  <span className="font-script text-doodle-blue text-xs opacity-0 group-hover:opacity-100 transition-opacity block">
                    inspect case study &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
