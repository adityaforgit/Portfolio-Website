import React from 'react';
import { motion } from 'framer-motion';
import { DoodleArrow, DoodleUnderline, DoodleSparkle, DoodleAuthenticOrbits } from './Doodles';
import profileImg from '../assets/profile.jpg';

export default function HelloSection() {
  return (
    <section id="about" className="relative w-full bg-warm-sand text-charcoal py-20 sm:py-28 px-6 sm:px-12 border-b border-warm-border">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Dribbble Editorial Portrait with Vector Doodles & Traits */}
        <div className="md:col-span-5 flex flex-col items-center justify-center relative select-none py-4">
          
          {/* Hand-drawn note "hey there!" with arrow */}
          <div className="absolute -top-7 left-2 sm:left-4 flex items-center gap-1 z-30">
            <span className="font-script text-doodle-blue text-2xl font-bold -rotate-6">
              hey there!
            </span>
            <DoodleArrow className="w-9 h-9 text-doodle-blue rotate-12" />
          </div>

          {/* Outer Composition Frame: 1:1 Proportional Frame (460x461) */}
          <div className="relative w-[310px] sm:w-[370px] md:w-[390px] aspect-[460/461] flex items-center justify-center">

            {/* 1. Top-Left: Curious + sparkle */}
            <div className="absolute left-[26%] top-[12.5%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <span className="font-script text-doodle-blue text-2xl sm:text-3xl font-bold tracking-wide -rotate-6 drop-shadow-xs">
                Curious
              </span>
            </div>
            <div className="absolute left-[24.5%] top-[19%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <DoodleSparkle className="w-5 h-5 text-doodle-blue" delay={0.2} />
            </div>

            {/* 2. Top-Right: Sparkles + Problem Solver */}
            <div className="absolute left-[76%] top-[16%] -translate-y-1/2 z-20 flex flex-col items-start pointer-events-none">
              <span className="font-script text-doodle-blue text-2xl sm:text-3xl font-bold tracking-wide rotate-2 drop-shadow-xs">
                Problem Solver
              </span>
            </div>
            <div className="absolute left-[60%] top-[11.5%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <DoodleSparkle className="w-7 h-7 sm:w-8 sm:h-8 text-doodle-blue" delay={0.1} />
            </div>
            <div className="absolute left-[67.5%] top-[8.5%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5 text-doodle-blue" delay={0.4} />
            </div>

            {/* 3. Mid-Left: Fast Learner (positioned back from face) */}
            <div className="absolute right-[80%] top-[46.5%] -translate-y-1/2 z-20 pointer-events-none whitespace-nowrap text-right">
              <span className="font-script text-doodle-blue text-2xl sm:text-3xl font-bold tracking-wide -rotate-6 drop-shadow-xs inline-block">
                Fast Learner
              </span>
            </div>

            {/* 4. Mid-Right: UI/UX Enthusiast */}
            <div className="absolute left-[77.5%] top-[67%] -translate-y-1/2 z-20 pointer-events-none">
              <span className="font-script text-doodle-blue text-2xl sm:text-3xl font-bold tracking-wide rotate-6 drop-shadow-xs">
                UI/UX Enthusiast
              </span>
            </div>

            {/* 5. Bottom-Left: sparkles + Backend Learner */}
            <div className="absolute left-[20%] top-[94%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1 pointer-events-none">
              <span className="font-script text-doodle-blue text-2xl sm:text-3xl font-bold tracking-wide -rotate-3 drop-shadow-xs">
                Backend Learner
              </span>
            </div>
            <div className="absolute left-[23%] top-[85.5%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <DoodleSparkle className="w-5 h-5 text-doodle-blue" delay={0.3} />
            </div>
            <div className="absolute left-[32.5%] top-[91.5%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <DoodleSparkle className="w-4 h-4 text-doodle-blue" delay={0.5} />
            </div>

            {/* 6. Bottom-Right: IoT Explorer + sparkle */}
            <div className="absolute left-[71%] top-[87%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 pointer-events-none">
              <span className="font-script text-doodle-blue text-2xl sm:text-3xl font-bold tracking-wide rotate-3 drop-shadow-xs">
                IoT Explorer
              </span>
            </div>
            <div className="absolute left-[59.5%] top-[90.5%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <DoodleSparkle className="w-5 h-5 text-doodle-blue" delay={0.6} />
            </div>

            {/* Center Oval Portrait: Exact 1:1 geometry (width=44.78%, height=69.41%, left=23.26%, top=16.92%) */}
            <div
              className="absolute rounded-[50%] overflow-hidden bg-[#E2DCD4] shadow-md flex items-center justify-center group z-10"
              style={{
                left: '23.26%',
                top: '16.92%',
                width: '44.78%',
                height: '69.41%',
              }}
            >
              <img
                src={profileImg}
                alt="Aditya Thakur"
                className="w-full h-full object-cover object-top contrast-110 brightness-100 group-hover:scale-105 transition-all duration-700"
              />
              {/* Soft subtle bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Authentic 1:1 Vector Doodle Orbit Loops matching Dribbble Reference */}
            <DoodleAuthenticOrbits className="absolute inset-0 w-full h-full pointer-events-none z-15 text-doodle-blue drop-shadow-xs" />

          </div>

          {/* Subscript tag under photo */}
          <div className="mt-3 flex items-center gap-2">
            <span className="font-script text-doodle-blue text-lg">
              ~ Aditya Thakur &bull; Kolkata, IN
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Serif "Hello." and Narrative */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl text-charcoal font-normal tracking-tight">
              Hello.
            </h2>
            <div className="w-16 h-1 bg-doodle-blue mt-2 rounded-full" />
          </div>

          <div className="space-y-4 text-charcoal/80 font-sans text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I’m <strong className="text-charcoal font-semibold">Aditya Thakur</strong>, a Computer Science and Engineering student specializing in Internet of Things at{' '}
              <strong className="text-charcoal font-semibold">Netaji Subhash Engineering College</strong>, Kolkata.
            </p>
            <p>
              I enjoy building practical software solutions using{' '}
              <span className="relative inline-block font-medium text-charcoal">
                Java, Spring Boot
                <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-3 text-doodle-blue pointer-events-none" />
              </span>
              , and web technologies. My interests include backend development, microservices, data structures and algorithms, UI/UX design, and creating tools that solve real student and community problems.
            </p>
            <p>
              I have worked on hackathon projects such as <em className="font-serif italic font-semibold text-charcoal">Nagar Sudhar</em> and{' '}
              <em className="font-serif italic font-semibold text-charcoal">Unnati Portal</em>, and I also built{' '}
              <em className="font-serif italic font-semibold text-charcoal">Grade Compass</em> independently from scratch.
            </p>
          </div>

          {/* Quick status pill */}
          <div className="pt-2 flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-charcoal/70">
              Open to Software Internships
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

