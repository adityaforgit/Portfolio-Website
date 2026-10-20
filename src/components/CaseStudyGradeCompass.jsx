import React from 'react';
import { DoodleOval, DoodleSparkle, GithubIcon } from './Doodles';
import gradeCompassMobile from '../assets/ui/grade_compass_mobile.png';
import gradeCompassDesktop from '../assets/ui/grade_compass_desktop.png';

export default function CaseStudyGradeCompass() {

  return (
    <section id="grade-compass" className="relative w-full bg-charcoal text-white py-20 sm:py-28 px-6 sm:px-12 border-b border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Editorial Details */}
        <div className="md:col-span-6 space-y-6 text-left">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                PERSONAL PROJECT
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="font-mono text-xs text-white/50">BUILT FROM SCRATCH</span>
            </div>

            <h3 className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
              Grade Compass
            </h3>
          </div>

          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            Grade Compass is my personal project, built from scratch for MAKAUT students. It helps students understand internal marks and estimate the End-Semester Examination score needed to achieve a target grade.
          </p>

          {/* Social Proof Pill Badge */}
          <div className="relative inline-flex items-center">
            <DoodleOval className="w-60 h-12 text-doodle-blue" />
            <span className="absolute inset-0 flex items-center justify-center font-script text-doodle-blue text-base">
              Built from scratch for MAKAUT
            </span>
          </div>

          {/* Feature List */}
          <div className="space-y-2 font-sans text-sm text-white/70 pt-1">
            {[
              'Subject-wise marks and grade calculation',
              'Internal marks calculation',
              'End-Semester Examination target-score prediction',
              'Real-time updates while entering marks',
              'Input validation',
              'Mobile-friendly interface'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['React', 'Tailwind CSS', 'JavaScript', 'UI/UX Design', 'Vite'].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-2">
            <a
              href="https://github.com/adityaforgit/grade-compass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-charcoal font-medium text-xs font-mono hover:bg-white/90 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>

        </div>

        {/* Right Column: Dual Mobile Screens Mockup */}
        <div className="md:col-span-6 relative flex justify-center items-center py-6">
          <DoodleSparkle className="absolute -top-2 left-6 w-6 h-6 text-doodle-blue" delay={0.2} />
          
          {/* Main Mobile Screen Mockup */}
          <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-charcoal-dark border-4 border-charcoal-border shadow-2xl overflow-hidden p-2.5 z-10 group transform hover:scale-[1.02] transition-transform duration-500">
            {/* Phone Speaker Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/80 rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>

            {/* Real App Screenshot */}
            <a
              href="https://makautgradecompass.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 relative"
              title="Click to visit live Grade Compass web app"
            >
              <img
                src={gradeCompassMobile}
                alt="Grade Compass Live Calculator UI"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white/90 text-[10px] font-mono px-2 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/15">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live App
                </span>
                <span className="text-white/60">gradecompass.vercel.app &rarr;</span>
              </div>
            </a>
          </div>

          {/* Secondary Mockup Screen (Behind) */}
          <div className="hidden sm:block absolute right-0 w-56 aspect-[9/18] rounded-[2rem] bg-charcoal-card/80 border border-white/10 shadow-lg overflow-hidden p-2 transform rotate-6 scale-90 opacity-70 hover:opacity-90 transition-opacity z-0">
            <div className="w-16 h-2 bg-white/20 rounded-full mx-auto mb-2" />
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-neutral-900 border border-white/10 relative">
              <img
                src={gradeCompassDesktop}
                alt="Grade Compass Desktop Calculator"
                className="w-full h-full object-cover object-left-top"
                loading="lazy"
              />
              <div className="absolute bottom-2 inset-x-2 text-center text-[9px] font-mono text-white/70 bg-black/70 backdrop-blur-sm py-0.5 rounded border border-white/10">
                Desktop View
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
