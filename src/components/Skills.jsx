import React from 'react';
import { Server, Code, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Server,
    title: "Backend & Enterprise Architecture",
    skills: ["Spring", "Spring Boot", "Microservices"],
  },
  {
    icon: Code,
    title: "Core Languages & Algorithms",
    skills: [
      "Java",
      "Data Structures and Algorithms (Java)",
      "Python",
      "C",
      "PHP",
      "JavaScript",
    ],
  },
  {
    icon: Layout,
    title: "Frontend & UI/UX Design",
    skills: [
      "React",
      "Tailwind CSS",
      "UI/UX Design",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    icon: Terminal,
    title: "Developer Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "IntelliJ IDEA",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="border-b border-white/5 pb-4 text-center sm:text-left">
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Capabilities</span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mt-1">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-4 text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/80">
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-display text-base font-medium text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-xs font-mono text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
