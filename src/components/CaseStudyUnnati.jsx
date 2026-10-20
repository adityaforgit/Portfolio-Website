import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { DoodleBubble, DoodleSparkle, DoodleUnderline, GithubIcon } from './Doodles';
import unnati1 from '../assets/ui/unnati_portal_1.png';
import unnati2 from '../assets/ui/unnati_portal_2.png';
import unnati3 from '../assets/ui/unnati_portal_3.png';

const unnatiScreens = [
  {
    id: 'portal',
    label: 'Portal UI',
    caption: 'Civic Issue Intake & Portal Hub',
    image: unnati1,
  },
  {
    id: 'milestones',
    label: 'Milestones',
    caption: 'Student Capstone Sprint Tracker',
    image: unnati2,
  },
  {
    id: 'csr',
    label: 'CSR Escrow',
    caption: 'Corporate Capital & CSR Allocation',
    image: unnati3,
  },
];

export default function CaseStudyUnnati() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="unnati" className="relative w-full bg-warm-sand text-charcoal py-20 sm:py-28 px-6 sm:px-12 border-b border-warm-border overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Phone Mockup Surrounded by Electric Blue Thought Bubbles */}
        <div className="md:col-span-6 relative flex flex-col items-center justify-center py-8">
          
          {/* Floating Blue Doodle Thought Bubble 1 (Top Left) */}
          <div className="absolute -top-4 -left-4 sm:left-2 z-20 transform -rotate-6">
            <DoodleBubble>
              Village Issue &rarr; Student Sprint
            </DoodleBubble>
          </div>

          {/* Floating Blue Doodle Thought Bubble 2 (Right) */}
          <div className="absolute top-1/3 -right-6 sm:-right-2 z-20 transform rotate-6">
            <DoodleBubble>
              CSR Funding Linked!
            </DoodleBubble>
          </div>

          {/* Floating Blue Doodle Thought Bubble 3 (Bottom Left) */}
          <div className="absolute -bottom-4 left-4 z-20 transform rotate-3">
            <DoodleBubble>
              Real-time State Sync
            </DoodleBubble>
          </div>

          {/* Smartphone Mockup */}
          <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-white border-4 border-warm-border shadow-2xl overflow-hidden p-2.5 z-10 flex flex-col">
            {/* Phone Speaker Notch */}
            <div className="w-20 h-3 bg-charcoal/20 rounded-full mx-auto mb-2 flex-shrink-0" />

            {/* Screen Tabs Selector */}
            <div className="flex items-center justify-between gap-1 mb-2 px-1 flex-shrink-0">
              {unnatiScreens.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex-1 py-1 rounded-md text-[9px] font-mono transition-all text-center ${
                    activeIdx === idx
                      ? 'bg-doodle-blue text-white font-semibold shadow-sm'
                      : 'bg-warm-sand/80 text-charcoal/60 hover:text-charcoal'
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>

            {/* Real Screen Preview */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative flex-1 w-full rounded-2xl overflow-hidden border border-warm-border bg-charcoal/5 group cursor-pointer"
              title="Click to expand full UI design"
            >
              <img
                src={unnatiScreens[activeIdx].image}
                alt={unnatiScreens[activeIdx].caption}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-2 text-white">
                <span className="text-[9px] font-mono block text-white/90 truncate">{unnatiScreens[activeIdx].caption}</span>
                <span className="text-[8px] text-doodle-blue font-script flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-2.5 h-2.5" /> click to inspect full Figma UI
                </span>
              </div>
            </div>
          </div>

          <DoodleSparkle className="absolute bottom-10 right-4 w-6 h-6 text-doodle-blue" delay={0.6} />
        </div>

        {/* Right Column: Editorial Narrative for Unnati */}
        <div className="md:col-span-6 space-y-6 text-left">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-doodle-blue font-semibold">
                SMART INDIA HACKATHON 2026
              </span>
              <span className="text-charcoal/30">&bull;</span>
              <span className="font-mono text-xs text-charcoal/60">PARTICIPANT</span>
            </div>

            <h3 className="font-serif text-5xl sm:text-6xl text-charcoal font-normal tracking-tight">
              Unnati Portal
            </h3>
            <DoodleUnderline className="w-32 h-3 text-doodle-blue" />
          </div>

          <p className="font-sans text-charcoal/80 text-base sm:text-lg leading-relaxed">
            Unnati Portal is a platform that connects village-level challenges with engineering student projects, corporate CSR funding, and government monitoring.
          </p>

          <p className="font-sans text-charcoal/70 text-sm sm:text-base leading-relaxed">
            It allows citizens and village representatives to report local issues. Student teams can work on these challenges as practical projects.
          </p>

          {/* Achievement Box */}
          <div className="p-4 rounded-xl bg-white border border-warm-border flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-doodle-blue/10 border border-doodle-blue/20 flex items-center justify-center text-doodle-blue font-serif text-lg font-bold">
              ✦
            </div>
            <div>
              <span className="font-medium text-charcoal block text-sm">
                Smart India Hackathon 2026
              </span>
              <span className="text-xs text-charcoal/60 font-sans">
                Participated in Smart India Hackathon 2026.
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'REST APIs'].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white border border-warm-border text-charcoal/80">
                {t}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="https://github.com/AlgoAstra-Team/unnati-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-white font-medium text-xs font-mono hover:bg-charcoal/90 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full-Resolution Unnati Design */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-charcoal-dark border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-1 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">
                  Figma Design Preview
                </span>
                <span className="text-white/30">&bull;</span>
                <span className="font-sans text-xs text-white/80">
                  {unnatiScreens[activeIdx].caption}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" /> Close
              </button>
            </div>
            
            <div className="mt-3 rounded-xl overflow-hidden bg-neutral-900 border border-white/10 max-h-[75vh] overflow-y-auto">
              <img
                src={unnatiScreens[activeIdx].image}
                alt={unnatiScreens[activeIdx].caption}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
