import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroCurtain({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Step 1: Smoothly expand hairline filament
    const t1 = setTimeout(() => setStage(1), 350);
    // Step 2: Unveil typography
    const t2 = setTimeout(() => setStage(2), 850);
    // Step 3: Finish and smoothly fade out curtain (extended display time)
    const t3 = setTimeout(() => {
      setStage(3);
      setTimeout(onComplete, 900);
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: -25, 
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090A0D] p-6 text-center select-none"
        >
          {/* Expanding Hairline Light Filament */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={stage >= 1 ? { width: 160, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mb-6"
          />

          {/* Clean Minimal Typography: Aditya Thakur + Portfolio Website */}
          <div className="overflow-hidden space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={stage >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white"
            >
              Aditya Thakur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={stage >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-mono text-white/50 tracking-[0.25em] uppercase"
            >
              Portfolio Website
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
