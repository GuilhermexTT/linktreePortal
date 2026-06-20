import React from 'react';
import { motion } from 'framer-motion';

export const ConnectionFlow: React.FC = () => {
  // SVG circuit line path animations
  const pulseTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "linear" as const
  };

  return (
    <div className="w-full max-w-xl flex flex-col items-center justify-center my-8 select-none z-10 px-4">
      {/* Visual node connection diagram */}
      <div className="relative flex items-center justify-between w-full max-w-[280px] h-12 mb-4">
        {/* Node 1: Adisea */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-adisea-blue/40 bg-[#030712] shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          <span className="text-[10px] font-bold font-display text-adisea-blue">A</span>
          <span className="absolute -bottom-5 text-[9px] uppercase tracking-wider font-semibold text-adisea-text-muted/70">Adisea</span>
        </div>

        {/* Connection Line 1 to 2 */}
        <div className="flex-grow relative h-[2px] mx-2 bg-gradient-to-r from-adisea-blue/20 via-adisea-blue/25 to-adisea-blue/20 overflow-hidden">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-transparent via-adisea-cyan to-transparent dot-glow"
            initial={{ left: '-30%' }}
            animate={{ left: '100%' }}
            transition={pulseTransition}
          />
        </div>

        {/* Node 2: Adisea Hub */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-adisea-blue/40 bg-[#030712] shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          <span className="text-[10px] font-bold font-display text-adisea-blue">H</span>
          <span className="absolute -bottom-5 text-[9px] uppercase tracking-wider font-semibold text-adisea-text-muted/70">Hub</span>
        </div>

        {/* Connection Line 2 to 3 */}
        <div className="flex-grow relative h-[2px] mx-2 bg-gradient-to-r from-adisea-blue/20 via-adisea-cyan/25 to-adisea-cyan/20 overflow-hidden">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-transparent via-adisea-cyan to-transparent dot-glow"
            initial={{ left: '-30%' }}
            animate={{ left: '100%' }}
            transition={{ ...pulseTransition, delay: 1.5 }}
          />
        </div>

        {/* Node 3: Luna */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-adisea-cyan bg-[#030712] shadow-[0_0_12px_rgba(0,212,255,0.4)]">
          <span className="text-[10px] font-bold font-display text-adisea-cyan">L</span>
          <span className="absolute -bottom-5 text-[9px] uppercase tracking-wider font-semibold text-adisea-text-muted/70">Luna</span>
        </div>
      </div>

      {/* Description Text */}
      <div className="mt-4 text-center max-w-sm">
        <p className="text-xs sm:text-sm text-adisea-text-muted leading-relaxed font-sans font-medium">
          Um ecossistema integrado de{' '}
          <span className="text-white">tecnologia</span>,{' '}
          <span className="text-white">conteúdo</span> e{' '}
          <span className="text-white">soluções empresariais</span>.
        </p>
      </div>
    </div>
  );
};
