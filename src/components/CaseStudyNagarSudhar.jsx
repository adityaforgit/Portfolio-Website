import React from 'react';
import { ExternalLink, CheckCircle2, AlertCircle, MapPin, ShieldCheck } from 'lucide-react';
import { DoodleSparkle, DoodleMusicNotes, DoodleArrow, DoodleOval, GithubIcon } from './Doodles';

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
              <span className="font-mono text-xs text-white/50">CIVIC GOV</span>
            </div>
            
            <h3 className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
              Nagar Sudhar
            </h3>
          </div>

          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            A centralized civic grievance reporting and municipal resolution platform. Empowers citizens to report local infrastructure defects—such as potholes, waterlogging, or faulty streetlights—with automated GPS geotagging, departmental dispatch, and real-time verification tracking.
          </p>

          {/* Key Metric / Highlight Box */}
          <div className="p-4 rounded-xl bg-charcoal-card border border-charcoal-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-serif text-xl font-bold">
              #4
            </div>
            <div>
              <span className="font-medium text-white block text-sm">
                4th Rank &bull; Internal Smart India Hackathon
              </span>
              <span className="text-xs text-white/60 font-sans">
                Selected among competitive university engineering teams for civic innovation.
              </span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['Java', 'Spring Boot', 'REST APIs', 'React', 'Tailwind CSS', 'Leaflet Maps', 'MySQL'].map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links & Hand-drawn Doodle Note */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/adityaforgit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-charcoal font-medium text-xs font-mono hover:bg-white/90 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source</span>
            </a>

            <div className="relative inline-flex items-center">
              <DoodleOval className="w-40 h-10 text-doodle-blue" />
              <span className="absolute inset-0 flex items-center justify-center font-script text-doodle-blue text-sm">
                SIH Top Solution
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
          <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[2.5rem] bg-charcoal-dark border-4 border-charcoal-border shadow-2xl overflow-hidden p-3 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
            {/* Phone Speaker Notch */}
            <div className="w-20 h-3 bg-white/20 rounded-full mx-auto mb-3" />
            
            {/* Screen Content: Nagar Sudhar Citizen App */}
            <div className="h-full space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-serif font-semibold text-amber-400 text-sm">Nagar Sudhar</span>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Live GPS</span>
              </div>

              {/* Feed Card 1 */}
              <div className="p-3 rounded-xl bg-charcoal-card border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-medium text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" /> Sector V, Salt Lake
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[8px]">In Review</span>
                </div>
                <div className="text-[11px] text-white/70">Main Road Pothole &bull; Depth 14cm</div>
                <div className="text-[9px] text-white/40 font-mono">Assigned to: Ward 28 Roads Dept</div>
              </div>

              {/* Feed Card 2 */}
              <div className="p-3 rounded-xl bg-charcoal-card border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-medium text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" /> Gariahat Junction
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 font-mono text-[8px]">Resolved</span>
                </div>
                <div className="text-[11px] text-white/70">Streetlight Failure #8812</div>
                <div className="text-[9px] text-white/40 font-mono">Verified by Municipal Officer</div>
              </div>

              {/* Action Button on phone screen */}
              <div className="mt-4 p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-center font-mono text-[10px] text-amber-300 font-semibold">
                + Report New Municipal Incident
              </div>
            </div>
          </div>

          {/* Secondary Mobile Mockup (Behind Tilted Right) */}
          <div className="hidden sm:block absolute right-2 w-56 aspect-[9/18] rounded-[2rem] bg-charcoal-card/90 border-2 border-white/10 shadow-xl overflow-hidden p-3 transform rotate-6 opacity-60 z-0 scale-90">
            <div className="w-16 h-2.5 bg-white/20 rounded-full mx-auto mb-3" />
            <div className="p-2 space-y-2 text-[10px] font-mono text-white/70">
              <span className="text-doodle-blue font-semibold block">ADMIN OVERSIGHT</span>
              <div className="h-20 rounded bg-white/5 p-2 text-[9px] flex items-center justify-center text-white/40">
                Heatmap Analytics &bull; 87% Cleared
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
