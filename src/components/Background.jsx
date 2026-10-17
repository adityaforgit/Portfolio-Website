import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Atmospheric color palettes that rotate in a continuous cinematic loop
const colorPalettes = [
  {
    name: "Cosmic Indigo",
    orb1: "#6366F1", // Indigo
    orb2: "#8B5CF6", // Violet
    orb3: "#3B82F6", // Royal Blue
    accentGlow: "rgba(99, 102, 241, 0.14)",
  },
  {
    name: "Emerald Aurora",
    orb1: "#10B981", // Emerald
    orb2: "#06B6D4", // Cyan
    orb3: "#059669", // Jade
    accentGlow: "rgba(16, 185, 129, 0.13)",
  },
  {
    name: "Sunset Nebula",
    orb1: "#F43F5E", // Rose
    orb2: "#F59E0B", // Amber
    orb3: "#9333EA", // Purple
    accentGlow: "rgba(244, 63, 94, 0.13)",
  },
  {
    name: "Oceanic Abyssal",
    orb1: "#0284C7", // Sky Blue
    orb2: "#2563EB", // Cobalt
    orb3: "#0D9488", // Deep Teal
    accentGlow: "rgba(2, 132, 199, 0.13)",
  },
];

export default function Background() {
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const gridRef = useRef(null);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  // 1. Mouse Spotlight Tracker with Lerp for Silk-Smooth Response
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.targetX = e.clientX;
      mousePos.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animId;
    const updateMouse = () => {
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.1;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.1;

      if (gridRef.current) {
        gridRef.current.style.maskImage = `
          radial-gradient(ellipse 850px 550px at ${mousePos.current.x}px ${mousePos.current.y}px, black 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.08) 100%)
        `;
        gridRef.current.style.webkitMaskImage = `
          radial-gradient(ellipse 850px 550px at ${mousePos.current.x}px ${mousePos.current.y}px, black 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.08) 100%)
        `;
      }
      animId = requestAnimationFrame(updateMouse);
    };
    animId = requestAnimationFrame(updateMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. GSAP Floating Physics for the Orbs (Multi-Axis Sine Looping)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orb 1: Upper Hero Aura
      gsap.to(orb1Ref.current, {
        x: '+=100',
        y: '-=80',
        scale: 1.15,
        rotation: 35,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Orb 2: Projects / Middle Aura
      gsap.to(orb2Ref.current, {
        x: '-=90',
        y: '+=100',
        scale: 0.9,
        rotation: -45,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Orb 3: Lower Footer / Milestones Aura
      gsap.to(orb3Ref.current, {
        x: '+=70',
        y: '-=90',
        scale: 1.2,
        rotation: 40,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  // 3. Automatic Cinematic Color Shift Loop (Every 9 Seconds via GSAP)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPaletteIndex((prev) => {
        const nextIndex = (prev + 1) % colorPalettes.length;
        const nextPalette = colorPalettes[nextIndex];

        // Smooth 3.5s GSAP color morph transition across the orbs
        if (orb1Ref.current) {
          gsap.to(orb1Ref.current, {
            backgroundColor: nextPalette.orb1,
            duration: 3.5,
            ease: 'power2.inOut',
          });
        }
        if (orb2Ref.current) {
          gsap.to(orb2Ref.current, {
            backgroundColor: nextPalette.orb2,
            duration: 3.5,
            ease: 'power2.inOut',
          });
        }
        if (orb3Ref.current) {
          gsap.to(orb3Ref.current, {
            backgroundColor: nextPalette.orb3,
            duration: 3.5,
            ease: 'power2.inOut',
          });
        }

        return nextIndex;
      });
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // 4. Subtle Floating Dust Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.22 + 0.08,
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const activePalette = colorPalettes[currentPaletteIndex];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Interactive Architectural Dot Grid with Mouse Illumination */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* 2. GSAP-Driven Floating & Morphing Color Orbs */}
      {/* Orb 1: Upper Left Hero Atmosphere */}
      <div
        ref={orb1Ref}
        style={{ backgroundColor: activePalette.orb1 }}
        className="absolute top-[-10%] left-[15%] w-[680px] h-[680px] rounded-full blur-[140px] opacity-[0.16] will-change-transform"
      />

      {/* Orb 2: Center Right Projects Atmosphere */}
      <div
        ref={orb2Ref}
        style={{ backgroundColor: activePalette.orb2 }}
        className="absolute top-[38%] right-[8%] w-[720px] h-[720px] rounded-full blur-[160px] opacity-[0.14] will-change-transform"
      />

      {/* Orb 3: Lower Left Milestones/Contact Atmosphere */}
      <div
        ref={orb3Ref}
        style={{ backgroundColor: activePalette.orb3 }}
        className="absolute bottom-[6%] left-[12%] w-[640px] h-[640px] rounded-full blur-[150px] opacity-[0.15] will-change-transform"
      />

      {/* 3. Ambient Dust / Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* 4. Edge Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090A0D]/50 via-transparent to-[#090A0D]" />

      {/* 5. Minimalist Ambient Atmosphere Status Pill (Bottom Left Indicator) */}
      <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest pointer-events-auto">
        <span
          className="w-1.5 h-1.5 rounded-full transition-colors duration-1000"
          style={{ backgroundColor: activePalette.orb1 }}
        />
        <span>Atmosphere: {activePalette.name}</span>
      </div>
    </div>
  );
}
