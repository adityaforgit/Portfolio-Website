import React from 'react';
import { Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { DoodleBubble, DoodleSparkle, DoodleUnderline, GithubIcon } from './Doodles';

export default function CaseStudyUnnati() {
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
          <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-white border-4 border-warm-border shadow-2xl overflow-hidden p-3 z-10">
            {/* Notch */}
            <div className="w-20 h-3 bg-charcoal/20 rounded-full mx-auto mb-3" />

            {/* Screen Content */}
            <div className="h-full space-y-3 font-sans text-xs bg-warm-sand/50 p-2.5 rounded-2xl">
              <div className="flex items-center justify-between border-b border-warm-border pb-2">
                <span className="font-serif font-bold text-doodle-blue text-sm">Unnati Gov</span>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-blue-100 text-blue-700">SIH '26</span>
              </div>

              {/* Status Pipeline Diagram in Phone */}
              <div className="p-3 rounded-xl bg-white border border-warm-border space-y-2">
                <span className="font-mono text-[9px] text-charcoal/50 uppercase block">Active Workflow</span>
                <div className="space-y-1.5 text-[10px]">
                  <div className="flex items-center justify-between p-1.5 rounded bg-warm-sand">
                    <span className="font-medium text-charcoal">1. Village Need Logged</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-blue-50 border border-blue-200 text-doodle-blue font-semibold">
                    <span>2. Student Prototype</span>
                    <span className="font-mono text-[9px]">Review</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-warm-sand text-charcoal/60">
                    <span>3. CSR Capital Grant</span>
                    <span className="font-mono text-[9px]">&bull; Pending</span>
                  </div>
                </div>
              </div>

              {/* Project Card */}
              <div className="p-2.5 rounded-xl bg-white border border-warm-border">
                <div className="font-semibold text-charcoal text-[11px]">Solar Micro-Grid &bull; Purulia</div>
                <div className="text-[10px] text-charcoal/70 mt-0.5">NSEC Team &bull; 80% Milestones Met</div>
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
            {['Spring Boot', 'Microservices', 'REST APIs', 'React.js', 'PostgreSQL', 'Docker'].map((t, i) => (
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
    </section>
  );
}
