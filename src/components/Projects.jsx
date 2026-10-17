import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Network, Calculator, Cpu, LayoutDashboard, Target } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Grade Compass — MAKAUT Grade Calculator",
    category: "tools",
    categoryLabel: "PERSONAL PROJECT • ACADEMIC TOOL",
    desc: "Built from scratch: a student-focused academic calculator designed for MAKAUT marks tracking and semester exam planning. Calculates continuous internal assessments and estimates the exact End-Semester Examination (ESE) score needed to achieve target grades.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Grade Planning", "UI/UX Design", "GitHub"],
    github: "https://github.com/adityaforgit",
    previewType: "grade-compass",
  },
  {
    id: 2,
    title: "Nagar Sudhar — Civic Issue Reporting System",
    category: "hackathon",
    categoryLabel: "SMART INDIA HACKATHON 2025 • 4TH RANK",
    desc: "Team project for Smart India Hackathon 2025: a centralized civic incident reporting and resolution platform. Empowers citizens to report local civic grievances with automated routing, geo-tagged status tracking, and an administrative oversight dashboard.",
    tags: ["Java", "Web Development", "UI/UX Design", "Dashboard", "Git", "GitHub"],
    github: "https://github.com/adityaforgit",
    previewType: "civic",
  },
  {
    id: 3,
    title: "Unnati Portal — Rural Problem & CSR Platform",
    category: "hackathon",
    categoryLabel: "SMART INDIA HACKATHON 2026",
    desc: "Platform connecting village challenges with engineering student projects, corporate CSR funding, and state-level administrative monitoring. Lets citizens and village representatives report local issues and supports student-led project development sprints.",
    tags: ["Spring Boot", "Microservices", "JavaScript", "CSR Engine", "GitHub"],
    github: "https://github.com/adityaforgit",
    previewType: "unnati",
  },
  {
    id: 4,
    title: "Spring Boot Microservices Architecture",
    category: "backend",
    categoryLabel: "BACKEND & ENTERPRISE",
    desc: "Modular, distributed backend services implemented using Spring Boot and microservices architecture with decoupled service boundaries, RESTful endpoints, and automated error handling.",
    tags: ["Spring", "Spring Boot", "Microservices", "Java", "Python", "REST APIs"],
    github: "https://github.com/adityaforgit",
    previewType: "backend",
  },
];

const filterTabs = [
  { key: "all", label: "All Projects" },
  { key: "tools", label: "Academic Tools" },
  { key: "hackathon", label: "Hackathons (SIH)" },
  { key: "backend", label: "Spring & Backend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Render a designful visual preview header for each resume project
  const renderCardVisual = (type) => {
    switch (type) {
      case "grade-compass":
        return (
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-emerald-950/40 via-teal-950/20 to-black/60 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden mb-5 group-hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Calculator className="w-3.5 h-3.5" /> GRADE COMPASS &bull; MAKAUT
              </span>
              <span className="text-white/60">SEMESTER PLANNING</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[10px] font-mono text-white/70">
              <div className="p-2 rounded bg-white/5 border border-white/10 flex-1">
                <span className="text-white/40 block text-[9px]">INTERNAL MARKS</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  CA: 24/25 &bull; PCA: 38/40
                </span>
              </div>
              <div className="p-2 rounded bg-emerald-500/10 border border-emerald-400/30 flex-1 text-right">
                <span className="text-emerald-400/80 block text-[9px] flex items-center justify-end gap-1">
                  <Target className="w-2.5 h-2.5" /> TARGET ESE SCORE
                </span>
                <span className="text-emerald-300 font-bold">
                  52/70 &rarr; SGPA 8.75
                </span>
              </div>
            </div>
          </div>
        );

      case "civic":
        return (
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-amber-950/40 via-orange-950/20 to-black/60 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden mb-5 group-hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> NAGAR SUDHAR &bull; SIH '25
              </span>
              <span className="text-emerald-400 font-semibold">RANK #4 INTERNAL</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-white/70">
              <div className="p-2 rounded bg-white/5 border border-white/10 flex-1">
                <span className="text-white/40 block text-[9px]">GRIEVANCE STATUS</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Auto-Dispatched
                </span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/10 flex-1">
                <span className="text-white/40 block text-[9px]">DASHBOARD UI</span>
                <span className="text-amber-300 font-bold flex items-center gap-1">
                  <LayoutDashboard className="w-3 h-3" /> Live Analytics
                </span>
              </div>
            </div>
          </div>
        );

      case "unnati":
        return (
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-indigo-950/40 via-blue-950/20 to-black/60 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden mb-5 group-hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                <Network className="w-3.5 h-3.5" /> UNNATI PORTAL &bull; SIH '26
              </span>
              <span>CSR &amp; STATE SYNC</span>
            </div>
            {/* Visual Pipeline Conduits */}
            <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-white/70">
              <div className="px-2 py-1 rounded bg-white/5 border border-white/10">
                Village Issue
              </div>
              <div className="h-[1px] flex-1 bg-indigo-400/40" />
              <div className="px-2 py-1 rounded bg-indigo-500/20 border border-indigo-400/40 text-indigo-300">
                Student Project
              </div>
              <div className="h-[1px] flex-1 bg-indigo-400/40" />
              <div className="px-2 py-1 rounded bg-white/5 border border-white/10">
                CSR Capital
              </div>
            </div>
          </div>
        );

      case "backend":
        return (
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-violet-950/30 via-zinc-950/40 to-black/60 border border-white/5 p-3.5 flex flex-col justify-between font-mono text-[10px] relative overflow-hidden mb-5 group-hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-white/40 border-b border-white/5 pb-1.5">
              <span className="flex items-center gap-1.5 text-violet-400">
                <Cpu className="w-3.5 h-3.5" /> SPRING BOOT &bull; MICROSERVICES
              </span>
              <span className="text-emerald-400">STATUS: ACTIVE</span>
            </div>
            <div className="space-y-1 text-white/60 text-[10px]">
              <div><span className="text-violet-400">GET</span> /api/v1/services/cluster</div>
              <div className="text-emerald-400">&gt; 200 OK &bull; Decoupled REST Endpoint Response</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="work" className="space-y-8">
      {/* Header & Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/5 pb-5 gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Featured Work</span>
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mt-1">Highlighted Projects</h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-mono">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.a
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/[0.025] backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-white/[0.045] transition-all flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Visual Preview Header */}
                {renderCardVisual(project.previewType)}

                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                  <span className="text-[11px] tracking-wider text-emerald-400/90 font-semibold">{project.categoryLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-display text-xl font-medium text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-white/60 mt-2.5 leading-relaxed font-light">
                  {project.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono text-white/40">
                {project.tags.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
