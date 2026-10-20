import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check } from 'lucide-react';
import { DoodleSparkle, DoodleUnderline, GithubIcon, LinkedinIcon } from './Doodles';

export default function FooterSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "adityathakur03012006@gmail.com";
  const phone = "+91 7858888488";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-warm-sand text-charcoal overflow-hidden">
      
      {/* 3-Column Sub Navigation Bar matching the top */}
      <div className="w-full border-b border-warm-border/80 bg-warm-sand-dark/40">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-warm-border text-center text-[11px] sm:text-xs font-mono uppercase tracking-widest text-charcoal/70">
          <button
            onClick={() => scrollTo('about')}
            className="py-3.5 sm:py-4 px-2 hover:text-charcoal hover:bg-white/60 transition-all cursor-pointer font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="py-3.5 sm:py-4 px-2 hover:text-charcoal hover:bg-white/60 transition-all cursor-pointer font-medium"
          >
            Selected Works
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="py-3.5 sm:py-4 px-2 hover:text-charcoal hover:bg-white/60 transition-all cursor-pointer font-medium"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Main Footer Block */}
      <div className="max-w-5xl mx-auto py-16 sm:py-24 px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-start">
        
        {/* Left Column: Avatar + "Thank you" + Contact Info */}
        <div className="md:col-span-6 space-y-6 text-left">
          
          <div>
            <h3 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal tracking-tight">
              Thank you
            </h3>
            <DoodleUnderline className="w-24 h-2.5 text-doodle-blue mt-0.5" />
          </div>

          <div className="space-y-2 font-sans text-charcoal/80 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-charcoal">
              Thank you for visiting my portfolio.
            </p>
            <p>
              I am currently learning, building projects, and exploring opportunities in software development, backend engineering, UI/UX design, and Internet of Things.
            </p>
          </div>

          {/* Interactive Contact Actions */}
          <div className="space-y-3 pt-2 text-xs font-mono">
            {/* Email Pill */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="px-4 py-2.5 rounded-full bg-white border border-warm-border text-charcoal font-medium hover:border-doodle-blue transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-doodle-blue" />}
                <span>{copiedEmail ? "Copied!" : email}</span>
              </button>
            </div>

            {/* Phone & Location */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`tel:${phone}`}
                className="px-4 py-2 rounded-full bg-white/70 border border-warm-border text-charcoal/80 hover:text-charcoal hover:bg-white transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-doodle-blue" />
                <span>{phone}</span>
              </a>

              <div className="px-3 py-2 rounded-full bg-white/40 text-charcoal/70 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-charcoal/50" />
                <span>Kolkata, India</span>
              </div>
            </div>

            {/* Social Handles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/adithakur03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-warm-border text-charcoal hover:text-doodle-blue hover:border-doodle-blue transition-all shadow-xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/adityaforgit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-warm-border text-charcoal hover:text-doodle-blue hover:border-doodle-blue transition-all shadow-xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Handwritten Blue Script Closing Letter */}
        <div className="md:col-span-6 relative p-6 sm:p-8 rounded-3xl bg-white/80 border border-warm-border shadow-xs text-left space-y-4">
          <DoodleSparkle className="absolute -top-3 right-6 w-6 h-6 text-doodle-blue" delay={0.2} />

          <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest block">
            A Note from Aditya
          </span>

          <p className="font-script text-doodle-blue text-xl sm:text-2xl leading-relaxed">
            "Thank you for visiting my portfolio. I am currently learning, building projects, and exploring opportunities in software development, backend engineering, UI/UX design, and Internet of Things."
          </p>

          <div className="pt-2 text-right">
            <span className="font-script text-doodle-blue text-2xl font-bold">
              ~ Aditya Thakur
            </span>
          </div>
        </div>

      </div>

      {/* Copyright Strip */}
      <div className="border-t border-warm-border/70 py-6 text-center text-xs font-mono text-charcoal/50">
        &copy; {new Date().getFullYear()} Aditya Thakur &bull; Kolkata, India
      </div>

    </footer>
  );
}
