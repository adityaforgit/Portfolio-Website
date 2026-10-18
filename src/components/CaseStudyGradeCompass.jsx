import React, { useState } from 'react';
import { Calculator, Target, Sparkles, Check } from 'lucide-react';
import { DoodleOval, DoodleSparkle, DoodleArrow, GithubIcon } from './Doodles';

export default function CaseStudyGradeCompass() {
  const [targetSgpa, setTargetSgpa] = useState(8.5);
  const internalScore = 24 + 38; // CA + PCA = 62 / 65

  // Calculate needed ESE score
  const neededEse = Math.min(70, Math.max(28, Math.round((targetSgpa * 10 - internalScore * 0.4) * 1.15)));

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
          
          {/* Main Interactive Phone Frame */}
          <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-charcoal-dark border-4 border-charcoal-border shadow-2xl overflow-hidden p-3.5 z-10">
            <div className="w-20 h-3 bg-white/20 rounded-full mx-auto mb-3" />

            <div className="h-full space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-serif font-bold text-emerald-400 text-sm flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> Grade Compass
                </span>
                <span className="font-mono text-[9px] text-white/50">MAKAUT Calc</span>
              </div>

              {/* Internal Marks Card */}
              <div className="p-3 rounded-xl bg-charcoal-card border border-white/10 space-y-2">
                <span className="font-mono text-[9px] text-white/50 uppercase block">Continuous Evaluation</span>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-1.5 rounded bg-white/5">
                    <span className="text-white/50 block text-[8px]">CA 1-4 AVG</span>
                    <span className="text-white font-bold">24 / 25</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/5">
                    <span className="text-white/50 block text-[8px]">PCA PRACTICAL</span>
                    <span className="text-white font-bold">38 / 40</span>
                  </div>
                </div>
              </div>

              {/* Interactive Target Slider Simulation */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" /> Target SGPA
                  </span>
                  <span className="font-mono text-emerald-300 font-bold">{targetSgpa.toFixed(1)}</span>
                </div>
                
                <input
                  type="range"
                  min="7.0"
                  max="9.8"
                  step="0.1"
                  value={targetSgpa}
                  onChange={(e) => setTargetSgpa(parseFloat(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-1 bg-white/20 rounded"
                />

                <div className="p-2 rounded bg-charcoal-dark border border-emerald-400/20 text-center">
                  <span className="text-[9px] text-white/60 block">REQUIRED IN 70-MARK ESE</span>
                  <span className="text-emerald-300 font-bold font-mono text-sm">{neededEse} / 70</span>
                </div>
              </div>

              {/* Quick Status */}
              <div className="p-2 rounded-lg bg-white/5 text-center text-[10px] text-white/60">
                Grade: <strong className="text-white">O (Outstanding) Eligible</strong>
              </div>
            </div>
          </div>

          {/* Secondary Mockup Screen (Behind) */}
          <div className="hidden sm:block absolute right-0 w-56 aspect-[9/18] rounded-[2rem] bg-charcoal-card/80 border border-white/10 shadow-lg overflow-hidden p-3 transform rotate-6 scale-90 opacity-50 z-0">
            <div className="w-16 h-2.5 bg-white/20 rounded-full mx-auto mb-3" />
            <div className="space-y-2 text-[9px] font-mono text-white/60">
              <span className="text-emerald-400 font-semibold block">ALL 6 SEMESTERS</span>
              <div className="h-28 rounded bg-white/5 p-2 flex items-center justify-center text-center">
                CGPA Cumulative Curve &bull; 8.84 Expected
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
