import React from 'react';
import { Compass, GraduationCap, MapPin, Sparkles, Languages, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <div className="border-b border-white/5 pb-4">
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Background</span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mt-1">About &amp; Focus</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Modern Narrative */}
        <div className="md:col-span-7 space-y-5 text-white/70 font-light leading-relaxed text-base">
          <p>
            I am a <span className="text-white font-medium">Computer Science and Engineering</span> student specializing in the <span className="text-white font-medium">Internet of Things (IoT)</span> at Netaji Subhash Engineering College (2024 &ndash; 2028), Kolkata.
          </p>
          <p>
            My engineering foundation is built on <span className="text-white font-medium">Java, Spring Boot, microservices architecture, and Python</span>. I am driven by creating practical software solutions that solve tangible societal problems—from civic grievance systems to rural innovation platforms.
          </p>
          <p>
            Alongside robust backend engineering, I place significant emphasis on <span className="text-white font-medium">UI/UX design and frontend craftsmanship</span>, ensuring complex software remains clean, intuitive, and accessible to everyday users.
          </p>
        </div>

        {/* Quick Facts Sidebar */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-white/40 block text-[10px]">ACADEMICS</span>
                <span className="text-white font-medium">B.Tech in CSE (IoT), NSEC</span>
                <span className="text-white/40 block text-[11px]">2024 &mdash; 2028</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/40" />
              <div>
                <span className="text-white/40 block text-[10px]">LOCATION</span>
                <span className="text-white font-medium">Kolkata, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Languages className="w-4 h-4 text-white/40" />
              <div>
                <span className="text-white/40 block text-[10px]">LANGUAGES</span>
                <span className="text-white font-medium">English &bull; Hindi</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-white/40 block text-[10px]">OPPORTUNITY STATUS</span>
                <span className="text-emerald-400 font-medium">Open for Software Internships &amp; Sprints</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
