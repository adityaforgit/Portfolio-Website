import React from 'react';

export default function Navbar({ onReplayIntro }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#222225]/95 backdrop-blur-md border-b border-white/10 text-white/80">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 flex items-center justify-between">
        <div className="flex-1 grid grid-cols-3 divide-x divide-white/10 text-center text-[11px] sm:text-xs font-mono uppercase tracking-widest">
          <button
            onClick={() => scrollTo('about')}
            className="py-3.5 sm:py-4 px-2 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer font-medium truncate"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="py-3.5 sm:py-4 px-2 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer font-medium truncate"
          >
            Selected Works
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="py-3.5 sm:py-4 px-2 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer font-medium truncate"
          >
            Contact
          </button>
        </div>

        {onReplayIntro && (
          <button
            onClick={onReplayIntro}
            title="Replay Loading Animation"
            className="ml-2 sm:ml-4 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <span className="text-amber-400">⚡</span>
            <span className="hidden sm:inline">Intro</span>
          </button>
        )}
      </div>
    </header>
  );
}
