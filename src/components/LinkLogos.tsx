import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  glow?: boolean;
}

export const AetherLogo: React.FC<LogoProps> = ({ size = 48, glow = true, ...props }) => {
  const glowFilterId = "aether-glow-logo";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="aether-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        {glow && (
          <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? `url(#${glowFilterId})` : undefined}>
        {/* Sleek futuristic A shape */}
        <path
          d="M50 12 L85 82 C86.5 85 83.5 88 80 87 L50 78 L20 87 C16.5 88 13.5 85 15 82 L50 12 Z"
          fill="url(#aether-grad)"
          fillOpacity="0.1"
          stroke="url(#aether-grad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Glowing inner ribbon/wave representing flow and connectivity */}
        <path
          d="M27 75 C37 60, 63 60, 73 75 C60 55, 40 55, 27 75 Z"
          fill="#00D4FF"
          fillOpacity="0.8"
          filter="drop-shadow(0px 0px 4px rgba(0, 212, 255, 0.8))"
        />
        {/* Soft crossbar */}
        <path
          d="M32 65 C44 58, 56 58, 68 65"
          stroke="url(#aether-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
      </g>
    </svg>
  );
};

export const LunaLogo: React.FC<LogoProps> = ({ size = 48, glow = true, ...props }) => {
  const glowFilterId = "luna-glow-logo";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="luna-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="60%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        {glow && (
          <filter id={glowFilterId} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? `url(#${glowFilterId})` : undefined}>
        {/* Crescent moon shape */}
        <path
          d="M62 25 C40 25, 22 43, 22 65 C22 81, 32 94, 46 99 C30 92, 29 68, 44 52 C56 39, 74 36, 81 49 C76 34, 69 25, 62 25 Z"
          fill="url(#luna-grad)"
          fillOpacity="0.9"
          stroke="url(#luna-grad)"
          strokeWidth="1.5"
          filter="drop-shadow(0px 0px 5px rgba(0, 212, 255, 0.5))"
        />
        {/* Orbit ring representing tech / connection */}
        <path
          d="M15 65 C15 50, 85 45, 85 60"
          stroke="#00D4FF"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        {/* Orbital glow spark */}
        <circle cx="75" cy="50" r="3" fill="#FFFFFF" filter="drop-shadow(0px 0px 4px #00D4FF)" />
      </g>
    </svg>
  );
};

export const AetherHubLogo: React.FC<LogoProps> = ({ size = 48, glow = true, ...props }) => {
  const glowFilterId = "hub-glow-logo";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="hub-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        {glow && (
          <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? `url(#${glowFilterId})` : undefined}>
        {/* Intelligent Connected Nodes / Hexagonal structure */}
        
        {/* Connective lines */}
        <path d="M50 18 L77 34 L77 66 L50 82 L23 66 L23 34 Z" stroke="url(#hub-grad)" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M50 18 L50 82" stroke="url(#hub-grad)" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M23 34 L77 66" stroke="url(#hub-grad)" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M23 66 L77 34" stroke="url(#hub-grad)" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Central glowing hub */}
        <circle cx="50" cy="50" r="14" fill="url(#hub-grad)" fillOpacity="0.25" stroke="url(#hub-grad)" strokeWidth="2" />
        <circle cx="50" cy="50" r="7" fill="#00D4FF" filter="drop-shadow(0 0 6px #00D4FF)" />

        {/* Satellite Nodes */}
        <circle cx="50" cy="18" r="4.5" fill="#3B82F6" stroke="#00D4FF" strokeWidth="1.5" />
        <circle cx="77" cy="34" r="4.5" fill="#3B82F6" stroke="#00D4FF" strokeWidth="1.5" />
        <circle cx="77" cy="66" r="4.5" fill="#3B82F6" stroke="#00D4FF" strokeWidth="1.5" />
        <circle cx="50" cy="82" r="4.5" fill="#3B82F6" stroke="#00D4FF" strokeWidth="1.5" />
        <circle cx="23" cy="66" r="4.5" fill="#3B82F6" stroke="#00D4FF" strokeWidth="1.5" />
        <circle cx="23" cy="34" r="4.5" fill="#3B82F6" stroke="#00D4FF" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export const CommerceLogo: React.FC<LogoProps> = ({ size = 48, glow = true, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="comm-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      <g filter={glow ? "drop-shadow(0px 0px 6px rgba(0, 212, 255, 0.4))" : undefined}>
        {/* Isometric glowing cube representing warehouse/delivery/commerce */}
        <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" stroke="url(#comm-grad)" strokeWidth="2" fill="url(#comm-grad)" fillOpacity="0.1" />
        <path d="M50 20 L50 80" stroke="url(#comm-grad)" strokeWidth="2" />
        <path d="M20 35 L50 50 L80 35" stroke="url(#comm-grad)" strokeWidth="2" />
        {/* Micro nodes inside representing data trading */}
        <circle cx="35" cy="42" r="3" fill="#00D4FF" />
        <circle cx="65" cy="42" r="3" fill="#00D4FF" />
        <circle cx="50" cy="65" r="3" fill="#3B82F6" />
      </g>
    </svg>
  );
};

export const AgentLogo: React.FC<LogoProps> = ({ size = 48, glow = true, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="agent-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      <g filter={glow ? "drop-shadow(0px 0px 6px rgba(0, 212, 255, 0.4))" : undefined}>
        {/* Brain network style node */}
        <path d="M50 15 C30 15, 20 30, 20 50 C20 70, 30 85, 50 85 C70 85, 80 70, 80 50 C80 30, 70 15, 50 15 Z" stroke="url(#agent-grad)" strokeWidth="2" fill="url(#agent-grad)" fillOpacity="0.05" />
        
        {/* Connected AI core arcs */}
        <path d="M35 50 A 15 15 0 0 1 65 50" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 50 A 15 15 0 0 0 65 50" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />

        {/* Neural lines */}
        <line x1="50" y1="15" x2="50" y2="35" stroke="url(#agent-grad)" strokeWidth="1.5" />
        <line x1="50" y1="65" x2="50" y2="85" stroke="url(#agent-grad)" strokeWidth="1.5" />
        <line x1="20" y1="50" x2="35" y2="50" stroke="url(#agent-grad)" strokeWidth="1.5" />
        <line x1="65" y1="50" x2="80" y2="50" stroke="url(#agent-grad)" strokeWidth="1.5" />

        <circle cx="50" cy="50" r="5" fill="#FFFFFF" filter="drop-shadow(0px 0px 4px #00D4FF)" />
      </g>
    </svg>
  );
};
