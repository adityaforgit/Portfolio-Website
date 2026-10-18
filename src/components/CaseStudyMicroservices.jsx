import React from 'react';
import { Cpu, Layers, Server, ShieldCheck, Database } from 'lucide-react';
import { DoodleSparkle, DoodleUnderline, GithubIcon } from './Doodles';

export default function CaseStudyMicroservices() {
  return (
    <section id="microservices" className="relative w-full bg-warm-sand text-charcoal py-20 sm:py-28 px-6 sm:px-12 border-b border-warm-border overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Cascading Fan of Smartphone Mockups (Scrapbook Layout) */}
        <div className="md:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] py-4">
          
          {/* Phone Screen 1 (Back Left, Tilted -12deg) */}
          <div className="absolute -left-2 sm:left-4 top-4 w-44 sm:w-48 aspect-[9/18] rounded-2xl bg-white border border-warm-border shadow-md p-2.5 transform -rotate-12 hover:-rotate-6 transition-all duration-300 opacity-80 z-0">
            <div className="w-12 h-1.5 bg-warm-border rounded-full mx-auto mb-2" />
            <div className="space-y-1.5 text-[8px] font-mono text-charcoal/60">
              <span className="text-purple-600 font-bold block">AUTH SERVICE</span>
              <div className="bg-warm-sand p-1.5 rounded">JWT Token Issued</div>
              <div className="bg-warm-sand p-1.5 rounded">OAuth2 Provider: Ok</div>
            </div>
          </div>

          {/* Phone Screen 2 (Back Right, Tilted +14deg) */}
          <div className="absolute right-0 sm:right-6 top-8 w-44 sm:w-48 aspect-[9/18] rounded-2xl bg-white border border-warm-border shadow-md p-2.5 transform rotate-12 hover:rotate-6 transition-all duration-300 opacity-80 z-0">
            <div className="w-12 h-1.5 bg-warm-border rounded-full mx-auto mb-2" />
            <div className="space-y-1.5 text-[8px] font-mono text-charcoal/60">
              <span className="text-emerald-600 font-bold block">ORDER SERVICE</span>
              <div className="bg-warm-sand p-1.5 rounded">Kafka Event Stream</div>
              <div className="bg-warm-sand p-1.5 rounded">JPA Hibernate Commit</div>
            </div>
          </div>

          {/* Phone Screen 3 (Center Foreground, Upright with Subtle Tilt) */}
          <div className="relative w-52 sm:w-60 aspect-[9/18] rounded-3xl bg-white border-2 border-warm-border shadow-2xl p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
            <div className="w-16 h-2 bg-charcoal/20 rounded-full mx-auto mb-3" />
            
            <div className="h-full space-y-2.5 font-sans text-xs">
              <div className="flex items-center justify-between border-b border-warm-border pb-1.5">
                <span className="font-serif font-bold text-charcoal text-sm">Spring Cloud</span>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-semibold">Gateway</span>
              </div>

              {/* Service Topology */}
              <div className="p-2.5 rounded-xl bg-warm-sand border border-warm-border space-y-1.5">
                <span className="font-mono text-[8px] text-charcoal/50 uppercase block">Eureka Service Registry</span>
                <div className="space-y-1 text-[9px] font-mono">
                  <div className="flex items-center justify-between p-1 rounded bg-white">
                    <span>API Gateway:8080</span>
                    <span className="text-emerald-600 font-bold">200 OK</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-white">
                    <span>Auth Service:8081</span>
                    <span className="text-emerald-600 font-bold">HEALTHY</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-white">
                    <span>Order Engine:8082</span>
                    <span className="text-emerald-600 font-bold">HEALTHY</span>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-purple-50 border border-purple-200 text-purple-800 text-[10px] text-center font-mono">
                Resilience4j Circuit Breaker &bull; Closed
              </div>
            </div>
          </div>

          <DoodleSparkle className="absolute top-0 right-2 w-6 h-6 text-doodle-blue" delay={0.5} />
        </div>

        {/* Right Column: Editorial Narrative for Microservices */}
        <div className="md:col-span-6 space-y-6 text-left">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                ENTERPRISE SYSTEM DESIGN
              </span>
              <span className="text-charcoal/30">&bull;</span>
              <span className="font-mono text-xs text-charcoal/60">JAVA CORE</span>
            </div>

            <h3 className="font-serif text-5xl sm:text-6xl text-charcoal font-normal tracking-tight">
              Microservices Architecture
            </h3>
            <DoodleUnderline className="w-36 h-3 text-doodle-blue" />
          </div>

          <p className="font-sans text-charcoal/80 text-base sm:text-lg leading-relaxed">
            A resilient, distributed backend architecture engineered with Spring Boot and Spring Cloud. Built with isolated service boundaries to support horizontal scaling, fault tolerance, and independent deployability.
          </p>

          {/* Architectural Pillars */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-white border border-warm-border">
              <span className="font-mono text-xs text-purple-600 block font-semibold">SERVICE DISCOVERY</span>
              <span className="text-xs text-charcoal/80 font-sans">Netflix Eureka Registry &amp; Client Load Balancing</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-warm-border">
              <span className="font-mono text-xs text-purple-600 block font-semibold">CIRCUIT BREAKERS</span>
              <span className="text-xs text-charcoal/80 font-sans">Resilience4j Automated Fallback &amp; Rate Limiting</span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Eureka', 'Resilience4j', 'JPA / Hibernate', 'Docker'].map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white border border-warm-border text-charcoal/80">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-2">
            <a
              href="https://github.com/adityaforgit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-white font-medium text-xs font-mono hover:bg-charcoal/90 transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore Architecture Code</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
