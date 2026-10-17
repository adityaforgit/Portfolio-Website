import React from 'react';
import { Trophy, Award, GraduationCap, Sparkles } from 'lucide-react';

const milestones = [
  {
    year: "2026",
    title: "Smart India Hackathon (SIH)",
    role: "National Competitor &bull; Unnati Portal",
    desc: "Engineered the Unnati Portal—connecting rural village challenges with engineering students, CSR capital, and state-level administrative governance.",
    badge: "SIH 2026",
    highlight: true,
  },
  {
    year: "2025",
    title: "Internal Smart India Hackathon (SIH)",
    role: "Ranked 4th Position &bull; Nagar Sudhar",
    desc: "Secured 4th rank in the college-level SIH selection by architecting Nagar Sudhar, a streamlined civic grievance reporting and dispatch platform.",
    badge: "Winner (4th)",
    highlight: true,
  },
  {
    year: "2025",
    title: "Hackatron 3.0 &bull; BIT Sindri",
    role: "Top 20 Finalist",
    desc: "Recognized among the Top 20 competing engineering teams at Hackatron 3.0, organized by the Birsa Institute of Technology (BIT) Sindri.",
    badge: "Top 20",
    highlight: false,
  },
  {
    year: "2024 — 2028",
    title: "Netaji Subhash Engineering College (NSEC)",
    role: "B.Tech in CSE (Internet of Things)",
    desc: "Undergraduate curriculum covering Java, Spring frameworks, computer networks, IoT sensor architectures, and data structures & algorithms.",
    badge: "Undergraduate",
    highlight: false,
  },
];

export default function Timeline() {
  return (
    <section id="milestones" className="space-y-8">
      <div className="border-b border-white/5 pb-4 text-center sm:text-left">
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Track Record</span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mt-1">Honors &amp; Education</h2>
      </div>

      <div className="divide-y divide-white/5 font-light">
        {milestones.map((item, idx) => (
          <div
            key={idx}
            className="py-6 flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-6 items-center sm:items-baseline text-center sm:text-left group hover:bg-white/[0.015] px-2 rounded-xl transition-colors"
          >
            {/* Year */}
            <div className="sm:col-span-3 text-xs font-mono text-white/40 flex items-center justify-center sm:justify-start gap-2">
              <span className="text-white/60 font-medium">{item.year}</span>
            </div>

            {/* Title & Desc */}
            <div className="sm:col-span-6 space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-display font-medium text-white text-base group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  item.highlight 
                    ? "bg-amber-400/10 text-amber-300 border-amber-400/20" 
                    : "bg-white/5 text-white/50 border-white/5"
                }`}>
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Role */}
            <div className="sm:col-span-3 text-xs font-mono text-emerald-400/90 sm:text-right" dangerouslySetInnerHTML={{ __html: item.role }} />
          </div>
        ))}
      </div>
    </section>
  );
}
