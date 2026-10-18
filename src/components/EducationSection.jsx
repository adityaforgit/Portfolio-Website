import React from 'react';
import { DoodleCurlyArrow, DoodleSparkle, DoodleUnderline } from './Doodles';

export default function EducationSection() {
  return (
    <section className="relative w-full bg-warm-sand text-charcoal py-16 sm:py-24 px-6 sm:px-12 border-b border-warm-border">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-start">
        
        {/* Left Column: Education */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal tracking-tight">
              Education
            </h2>
            <DoodleUnderline className="w-28 h-3 text-doodle-blue mt-1" />
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-warm-border/70 pb-3">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                  Netaji Subhash Engineering College
                </h3>
                <span className="text-sm font-sans text-charcoal/70">
                  Techno India Group &bull; MAKAUT, Kolkata
                </span>
              </div>
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-white border border-warm-border text-charcoal/80 self-start sm:self-center">
                2024 &mdash; 2028
              </span>
            </div>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed pt-1">
              Pursuing <strong className="text-charcoal font-medium">B.Tech in Computer Science and Engineering (IoT)</strong>. Rigorous coursework spanning foundational algorithms, microservices architecture, and embedded systems engineering.
            </p>
          </div>

          {/* Academic Highlights & Key Coursework */}
          <div className="pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-charcoal/50 block mb-2">
              Key Focus &amp; Coursework
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-sans text-charcoal/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Data Structures &amp; Algorithms (Java)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Spring Boot &amp; Microservices
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Database Systems (MySQL &amp; JPA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Computer Networks &amp; Operating Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                IoT Architectures (ESP32, MQTT)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                UI/UX Design &amp; Responsive Web
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: QR Code Card & Languages */}
        <div className="md:col-span-5 space-y-10 flex flex-col items-center md:items-start">
          
          {/* QR Code Container with Hand-drawn Doodle Note */}
          <div className="relative group w-full max-w-[260px]">
            {/* Curly Hand-drawn Arrow and Text */}
            <div className="absolute -top-10 -right-16 hidden sm:flex flex-col items-center z-10">
              <span className="font-script text-doodle-blue text-lg font-semibold rotate-6 whitespace-nowrap">
                scan to connect!
              </span>
              <DoodleCurlyArrow className="w-14 h-14 text-doodle-blue" />
            </div>

            {/* QR Card */}
            <div className="bg-white p-5 rounded-2xl border border-warm-border shadow-sm flex flex-col items-center text-center space-y-3">
              {/* Clean SVG QR Code */}
              <div className="p-2 bg-warm-sand rounded-xl border border-warm-border/50">
                <svg viewBox="0 0 120 120" className="w-32 h-32 text-charcoal fill-current">
                  {/* Top-left position marker */}
                  <rect x="10" y="10" width="30" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="5" />
                  <rect x="20" y="20" width="10" height="10" />
                  {/* Top-right position marker */}
                  <rect x="80" y="10" width="30" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="5" />
                  <rect x="90" y="20" width="10" height="10" />
                  {/* Bottom-left position marker */}
                  <rect x="10" y="80" width="30" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="5" />
                  <rect x="20" y="90" width="10" height="10" />
                  {/* Data patterns */}
                  <rect x="48" y="12" width="6" height="6" />
                  <rect x="62" y="12" width="6" height="6" />
                  <rect x="48" y="26" width="6" height="6" />
                  <rect x="62" y="32" width="6" height="6" />
                  <rect x="12" y="48" width="6" height="6" />
                  <rect x="26" y="54" width="6" height="6" />
                  <rect x="48" y="48" width="8" height="8" fill="#3D68FF" />
                  <rect x="62" y="48" width="6" height="6" />
                  <rect x="76" y="48" width="6" height="6" />
                  <rect x="90" y="54" width="6" height="6" />
                  <rect x="104" y="48" width="6" height="6" />
                  <rect x="48" y="62" width="6" height="6" />
                  <rect x="62" y="62" width="6" height="6" />
                  <rect x="76" y="62" width="6" height="6" />
                  <rect x="48" y="76" width="6" height="6" />
                  <rect x="62" y="84" width="6" height="6" />
                  <rect x="80" y="80" width="6" height="6" />
                  <rect x="94" y="84" width="6" height="6" />
                  <rect x="84" y="96" width="6" height="6" />
                  <rect x="100" y="100" width="6" height="6" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[11px] font-semibold text-charcoal block tracking-wider uppercase">
                  Aditya Thakur &bull; Links
                </span>
                <span className="text-[10px] font-sans text-charcoal/60 block">
                  LinkedIn &bull; GitHub &bull; Resume
                </span>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="w-full space-y-3 text-left">
            <h3 className="font-serif text-3xl text-charcoal font-normal">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-white border border-warm-border">
                <span className="font-medium text-charcoal block">English</span>
                <span className="text-xs text-charcoal/60 font-sans">Professional</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-warm-border">
                <span className="font-medium text-charcoal block">Hindi</span>
                <span className="text-xs text-charcoal/60 font-sans">Native / Bilingual</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

