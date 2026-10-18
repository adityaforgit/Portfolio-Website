import React from 'react';
import { FileText, Globe, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { DoodleSparkle, DoodleUnderline, DoodleArrow, GithubIcon, LinkedinIcon } from './Doodles';
import profileImg from '../assets/profile.jpg';

export default function LinksHub() {
  const links = [
    {
      id: 'resume',
      title: 'Resume / CV (PDF)',
      subtitle: 'View or download my updated curriculum vitae',
      tag: 'Verified PDF',
      url: '/Aditya_Thakur_Resume.pdf',
      icon: FileText,
      accent: 'border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/5',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      iconColor: 'text-emerald-600 bg-emerald-100',
      actionText: 'Open Resume'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      subtitle: 'Connect professionally, view background & network updates',
      tag: '@adithakur03',
      url: 'https://www.linkedin.com/in/adithakur03',
      icon: LinkedinIcon,
      accent: 'border-blue-500/30 hover:border-blue-500 bg-blue-500/5',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      iconColor: 'text-blue-600 bg-blue-100',
      actionText: 'View Profile'
    },
    {
      id: 'github',
      title: 'GitHub Repositories',
      subtitle: 'Explore open-source code, Nagar Sudhar, Unnati & Grade Compass',
      tag: '@adityaforgit',
      url: 'https://github.com/adityaforgit',
      icon: GithubIcon,
      accent: 'border-charcoal/30 hover:border-charcoal bg-charcoal/5',
      badgeColor: 'bg-charcoal/10 text-charcoal border-charcoal/20',
      iconColor: 'text-charcoal bg-white',
      actionText: 'Explore Code'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-warm-sand text-charcoal flex flex-col items-center justify-between p-4 sm:p-8 select-none">
      
      {/* Top Bar Navigation */}
      <div className="w-full max-w-lg flex items-center justify-between py-2">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-warm-border text-xs font-mono text-charcoal/80 hover:text-charcoal hover:bg-white transition-all shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Portfolio Home</span>
        </a>

        <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
          QR Connect Hub
        </span>
      </div>

      {/* Center Container */}
      <div className="w-full max-w-lg my-auto py-8 flex flex-col items-center text-center space-y-6">
        
        {/* Profile Avatar Frame with Doodles */}
        <div className="relative">
          <DoodleSparkle className="absolute -top-3 -right-3 w-6 h-6 text-doodle-blue" delay={0.2} />
          <DoodleSparkle className="absolute -bottom-2 -left-2 w-5 h-5 text-doodle-blue" delay={0.4} />

          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-warm-border shadow-md bg-white p-1">
            <img
              src={profileImg}
              alt="Aditya Thakur"
              className="w-full h-full object-cover object-top rounded-full contrast-105"
            />
          </div>
        </div>

        {/* Identity & Bio Heading */}
        <div className="space-y-1.5">
          <div className="relative inline-block">
            <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
              Aditya Thakur
            </h1>
            <DoodleUnderline className="w-24 h-2.5 text-doodle-blue mx-auto mt-0.5" />
          </div>

          <p className="font-mono text-xs uppercase tracking-wider text-charcoal/70">
            CSE (IoT) &bull; Java &bull; Spring Boot
          </p>

          <p className="font-script text-doodle-blue text-xl sm:text-2xl pt-1">
            ~ select an option below to connect
          </p>
        </div>

        {/* The 3 Core Links Cards */}
        <div className="w-full space-y-3.5 pt-2">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full p-4 rounded-2xl bg-white border border-warm-border hover:shadow-md transition-all flex items-center justify-between text-left cursor-pointer hover:scale-[1.01]`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-xs ${item.iconColor} border border-warm-border/50 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-base sm:text-lg font-medium text-charcoal group-hover:text-doodle-blue transition-colors">
                        {item.title}
                      </span>
                      <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-charcoal/60 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded-full bg-warm-sand group-hover:bg-doodle-blue group-hover:text-white text-charcoal/60 transition-colors ml-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Secondary Back to Main Portfolio Button */}
        <div className="w-full pt-2">
          <a
            href="/"
            className="w-full py-3 px-4 rounded-2xl bg-charcoal text-white font-mono text-xs uppercase tracking-wider hover:bg-charcoal/90 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4 text-doodle-blue" />
            <span>Visit Full Interactive Portfolio</span>
          </a>
        </div>

      </div>

      {/* Footer Strip */}
      <div className="w-full max-w-lg py-3 border-t border-warm-border/70 text-center text-[10px] font-mono text-charcoal/50">
        &copy; {new Date().getFullYear()} Aditya Thakur &bull; Netaji Subhash Engineering College &bull; Kolkata, India
      </div>

    </div>
  );
}
