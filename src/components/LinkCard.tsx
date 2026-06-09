import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { EcosystemModule } from '../data/ecosystem';
import { AetherLogo, LunaLogo, AetherHubLogo, CommerceLogo, AgentLogo } from './LinkLogos';

interface LinkCardProps {
  module: EcosystemModule;
}

export const LinkCard: React.FC<LinkCardProps> = ({ module }) => {
  const { title, subtitle, domain, description, logoId, url, isActive, badge } = module;

  // Map logoId to the corresponding custom SVG logo component
  const renderLogo = () => {
    switch (logoId) {
      case 'aether':
        return (
          <img
            src="/aether-card-logo.jpg"
            alt="Aether Solutions Logo"
            className="w-12 h-12 object-cover rounded-lg drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]"
            draggable="false"
          />
        );
      case 'luna':
        return <LunaLogo size={48} />;
      case 'hub':
        return <AetherHubLogo size={48} />;
      case 'commerce':
        return <CommerceLogo size={48} />;
      case 'agent':
        return <AgentLogo size={48} />;
      default:
        return <AetherLogo size={48} />;
    }
  };

  // Card item entrance animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const // Custom premium cubic-bezier ease
      }
    }
  };

  return (
    <motion.a
      href={isActive ? url : undefined}
      target={isActive ? "_blank" : undefined}
      rel={isActive ? "noopener noreferrer" : undefined}
      className={`relative w-full max-w-2xl flex items-center gap-6 p-5 sm:p-6 rounded-2xl glass-panel text-left transition-all duration-300 group border focus:outline-none focus:ring-2 focus:ring-aether-cyan/60 ${
        isActive 
          ? 'cursor-pointer hover:border-aether-cyan/35 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)]' 
          : 'cursor-not-allowed opacity-60'
      }`}
      variants={cardVariants}
      whileHover={isActive ? { y: -5, scale: 1.015 } : {}}
      whileTap={isActive ? { scale: 0.99 } : {}}
      aria-label={`Explorar o ambiente ${title}: ${subtitle}. Acessar ${domain}`}
    >
      {/* Glow highlight overlay inside the card on hover */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aether-blue/5 via-aether-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* 1. Left Section: Styled Logo Container */}
      <div className="relative flex items-center justify-center p-3 rounded-xl bg-slate-950/45 border border-white/5 w-18 h-18 sm:w-20 sm:h-20 shrink-0 shadow-inner group-hover:border-aether-cyan/25 transition-all duration-300">
        {/* Glowing aura around logo inside the container on hover */}
        {isActive && (
          <div className="absolute inset-0 rounded-xl bg-aether-cyan/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
        <div className="z-10 transition-transform duration-500 group-hover:scale-105">
          {renderLogo()}
        </div>
      </div>

      {/* 2. Middle Section: Texts (Title, Subtitle, Domain, Description) */}
      <div className="flex-grow min-w-0 z-10">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <h2 className="text-lg sm:text-xl font-bold font-display text-white tracking-wide group-hover:text-aether-cyan transition-colors duration-300">
            {title}
          </h2>
          {badge && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-aether-cyan/10 border border-aether-cyan/20 text-aether-cyan">
              {badge}
            </span>
          )}
        </div>
        
        {/* Subtitle tag / module specification */}
        <div className="text-xs font-semibold text-aether-text-muted/85 uppercase tracking-wider mb-1 font-display">
          {subtitle}
        </div>

        {/* Subdomain */}
        <div className="text-xs sm:text-sm font-medium text-aether-cyan mb-2 group-hover:text-[#5ce2ff] transition-colors duration-300 select-all">
          {domain}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-aether-text-muted leading-relaxed font-sans line-clamp-2">
          {description}
        </p>
      </div>

      {/* 3. Right Section: Connector Arrow */}
      {isActive && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 text-aether-text-muted group-hover:text-aether-cyan group-hover:border-aether-cyan/40 group-hover:bg-aether-cyan/5 transition-all duration-300 shrink-0">
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      )}
    </motion.a>
  );
};
