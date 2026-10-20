import React from 'react';
import { RetroWorkstation, DoodleArrow, DoodleUnderline } from './Doodles';

const toolIcons = [
  { name: 'Java', symbol: '☕' },
  { name: 'Spring', symbol: '🍃' },
  { name: 'React', symbol: '⚛️' },
  { name: 'Python', symbol: '🐍' },
  { name: 'Git', symbol: '🌿' },
  { name: 'VS Code', symbol: '💻' },
  { name: 'IntelliJ', symbol: '⚡' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-warm-sand text-charcoal py-16 sm:py-24 px-6 sm:px-12 border-b border-warm-border overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header & Tool Icons Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="text-left">
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal tracking-tight">
              Skills
            </h2>
            <DoodleUnderline className="w-24 h-3 text-doodle-blue mt-1" />
          </div>

          {/* Quick Tool Badges Row with Blue Doodle Note */}
          <div className="relative flex items-center gap-2 self-start sm:self-auto pt-4 sm:pt-0">
            {/* Hand-drawn note above icons */}
            <div className="absolute -top-7 left-0 sm:left-4 flex items-center gap-1 z-10">
              <span className="font-script text-doodle-blue text-lg font-medium whitespace-nowrap">
                tech stack &amp; tools
              </span>
              <DoodleArrow className="w-6 h-6 text-doodle-blue rotate-45" />
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-white/80 p-2 rounded-xl border border-warm-border shadow-xs">
              {toolIcons.map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warm-sand/80 border border-warm-border/60 text-xs font-mono text-charcoal hover:bg-white hover:border-doodle-blue/40 transition-colors"
                  title={t.name}
                >
                  <span className="text-sm">{t.symbol}</span>
                  <span className="font-medium">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Content: Detailed Skills List + Retro Workstation Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          {/* Left Column: Skills Bullet Points */}
          <div className="md:col-span-7 space-y-6 text-left">
            <p className="font-sans text-charcoal/80 text-base leading-relaxed">
              Practical technical skill set across object-oriented programming, modern web frameworks, core backend development, and user interface design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Category 1 */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-charcoal/50 block">
                  Programming Languages
                </span>
                <ul className="space-y-1.5 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    C
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Java
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Python
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    PHP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    JavaScript
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-charcoal/50 block">
                  Web Development
                </span>
                <ul className="space-y-1.5 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    HTML
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Tailwind CSS
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-charcoal/50 block">
                  Backend and Core Concepts
                </span>
                <ul className="space-y-1.5 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Spring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Spring Boot
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Microservices
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Data Structures and Algorithms in Java
                  </li>
                </ul>
              </div>

              {/* Category 4 */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-charcoal/50 block">
                  Tools and Design
                </span>
                <ul className="space-y-1.5 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Git
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    Visual Studio Code
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    IntelliJ IDEA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                    UI/UX Design
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Retro Workstation Aesthetic Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <RetroWorkstation />
          </div>

        </div>

      </div>
    </section>
  );
}

