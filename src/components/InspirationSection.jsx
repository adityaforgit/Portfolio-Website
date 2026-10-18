import React from 'react';
import { Cpu, Wifi, Activity, Sparkles } from 'lucide-react';
import { DoodleOval, DoodleSparkle, DoodleArrow } from './Doodles';

export default function InspirationSection() {
  return (
    <section className="relative w-full bg-warm-sand text-charcoal py-20 sm:py-28 px-6 sm:px-12 border-b border-warm-border overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-6 space-y-6 text-left">
          
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 font-semibold">
              HARDWARE &bull; SENSOR TELEMETRY
            </span>
            <h3 className="font-serif text-5xl sm:text-6xl text-charcoal font-normal tracking-tight">
              Inspiration &amp; Hardware
            </h3>
          </div>

          <div className="relative inline-flex items-center">
            <DoodleOval className="w-48 h-10 text-doodle-blue" />
            <span className="absolute inset-0 flex items-center justify-center font-script text-doodle-blue text-base">
              IoT Edge &amp; Microcontrollers
            </span>
          </div>

          <p className="font-sans text-charcoal/80 text-base sm:text-lg leading-relaxed">
            Bridging the physical and digital worlds. As an IoT undergraduate, I explore the synergy between low-level hardware microcontrollers (ESP32, Arduino) and high-concurrency cloud backends via MQTT, WebSockets, and lightweight JSON telemetry.
          </p>

          <p className="font-sans text-charcoal/70 text-sm sm:text-base leading-relaxed">
            From smart environmental monitoring to edge automated triggers, hardware informs how I design distributed systems with real-world latency, power constraints, and sensor reliability in mind.
          </p>

          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['ESP32', 'Arduino', 'MQTT Broker', 'WebSockets', 'C++', 'Sensor Networks'].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white border border-warm-border text-charcoal/80">
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Open Sketchbook & Phone Telemetry Mockup */}
        <div className="md:col-span-6 relative flex items-center justify-center py-6">
          <DoodleSparkle className="absolute top-2 left-4 w-6 h-6 text-doodle-blue" delay={0.3} />
          
          {/* Sketchbook Mockup Frame (Behind) */}
          <div className="w-64 sm:w-72 aspect-[4/3] rounded-2xl bg-white border-2 border-warm-border shadow-lg p-4 transform -rotate-6 z-0 flex flex-col justify-between">
            {/* Spiral binding holes */}
            <div className="flex justify-between border-b border-warm-border pb-2 text-[9px] font-mono text-charcoal/40">
              <span>IOT NOTEBOOK #03</span>
              <span>2025</span>
            </div>

            {/* Hand-drawn circuit sketch inside notebook */}
            <div className="space-y-2 py-1">
              <div className="text-[10px] font-script text-doodle-blue">~ sensor pinout &amp; mqtt pipeline</div>
              <svg viewBox="0 0 160 60" className="w-full text-charcoal/60 stroke-current fill-none">
                <rect x="10" y="15" width="35" height="30" rx="3" strokeWidth="1.5" />
                <text x="16" y="32" className="text-[7px] font-mono fill-current">ESP32</text>
                <line x1="45" y1="30" x2="75" y2="30" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="90" cy="30" r="15" strokeWidth="1.5" />
                <text x="80" y="32" className="text-[6px] font-mono fill-current">MQTT</text>
                <line x1="105" y1="30" x2="135" y2="30" strokeWidth="1.5" strokeDasharray="3 2" />
                <rect x="135" y="15" width="20" height="30" rx="2" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="text-[9px] font-mono text-charcoal/40 text-right">
              latency: 18ms &bull; ok
            </div>
          </div>

          {/* Smartphone Telemetry Mockup (Overlapping Foreground) */}
          <div className="absolute right-2 sm:right-6 bottom-0 w-48 sm:w-52 aspect-[9/18] rounded-3xl bg-charcoal-dark border-2 border-white/20 shadow-2xl p-2.5 transform rotate-3 z-10">
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
            <div className="h-full space-y-2 font-mono text-[9px] text-white">
              <div className="flex justify-between items-center text-cyan-400 border-b border-white/10 pb-1">
                <span>TELEMETRY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="p-2 rounded bg-white/5 space-y-1">
                <div className="text-white/50 text-[8px]">Active Node: NSEC-Lab</div>
                <div className="text-cyan-300 font-bold text-xs">24.6°C &bull; 58% RH</div>
              </div>

              {/* Mini Sparkline graph */}
              <div className="p-2 rounded bg-white/5">
                <span className="text-white/40 block text-[7px]">SIGNAL STRENGTH (RSSI)</span>
                <div className="h-10 flex items-end gap-1 pt-2">
                  {[40, 65, 55, 80, 95, 70, 85, 90].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-cyan-400/80 rounded-t" />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

