import React from 'react';
import { DoodleCurlyArrow, DoodleSparkle, DoodleUnderline } from './Doodles';
import ResumeQRCode from './ResumeQRCode';

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
                  Kolkata, India
                </span>
              </div>
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-white border border-warm-border text-charcoal/80 self-start sm:self-center">
                2024 &mdash; 2028
              </span>
            </div>

            <p className="font-sans text-charcoal/80 text-base leading-relaxed pt-1">
              <strong className="text-charcoal font-medium">B.Tech in Computer Science and Engineering (Internet of Things)</strong>
            </p>
          </div>

          {/* Academic Highlights & Key Focus Areas */}
          <div className="pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-charcoal/50 block mb-2">
              Focus Areas
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-sans text-charcoal/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Data Structures and Algorithms in Java
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Java and Object-Oriented Programming
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Spring and Spring Boot
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Microservices
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                UI/UX Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-doodle-blue" />
                Internet of Things
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
              {/* Clickable Real Scannable QR Code */}
              <a
                href="/links"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open LinkedIn, GitHub & Resume"
                className="p-2 bg-warm-sand rounded-xl border border-warm-border/50 block hover:border-doodle-blue transition-all cursor-pointer group-hover:scale-[1.02]"
              >
                <ResumeQRCode className="w-32 h-32 text-charcoal" />
              </a>

              <div className="space-y-0.5">
                <span className="font-mono text-[11px] font-semibold text-charcoal block tracking-wider uppercase">
                  Aditya Thakur &bull; Links
                </span>
                <div className="text-[10px] font-sans text-charcoal/70 flex items-center justify-center gap-1.5 pt-0.5">
                  <a
                    href="https://www.linkedin.com/in/adithakur03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-doodle-blue hover:underline transition-colors cursor-pointer"
                  >
                    LinkedIn
                  </a>
                  <span className="text-charcoal/40">&bull;</span>
                  <a
                    href="https://github.com/adityaforgit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-doodle-blue hover:underline transition-colors cursor-pointer"
                  >
                    GitHub
                  </a>
                  <span className="text-charcoal/40">&bull;</span>
                  <a
                    href="/Aditya_Thakur_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-doodle-blue hover:underline transition-colors cursor-pointer"
                  >
                    Resume
                  </a>
                </div>
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

