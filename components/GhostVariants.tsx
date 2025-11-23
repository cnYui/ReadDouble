
import React from 'react';
import { motion } from 'framer-motion';

const GhostBase = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-lg">
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {children}
  </svg>
);

const Body = () => (
  <path
    d="M 40 200 L 40 90 C 40 20 160 20 160 90 L 160 200"
    fill="#ffffff"
    stroke="#0a0a0a"
    strokeWidth="4"
  />
);

const Glasses = ({ lookX = 0, lookY = 0 }) => (
  <g>
    {/* Bridge */}
    <path d="M 94 85 C 94 78 106 78 106 85" stroke="#0a0a0a" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Temples */}
    <path d="M 44 82 L 30 85" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    <path d="M 156 82 L 170 85" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    {/* Lenses */}
    <circle cx="70" cy="85" r="26" fill="#ffffff" stroke="#0a0a0a" strokeWidth="4" />
    <circle cx="130" cy="85" r="26" fill="#ffffff" stroke="#0a0a0a" strokeWidth="4" />
    {/* Pupils */}
    <motion.circle 
      cx="70" cy="85" r="8" fill="#0a0a0a" 
      animate={{ cx: 70 + lookX, cy: 85 + lookY }}
      transition={{ type: "spring", stiffness: 100 }}
    />
    <motion.circle 
      cx="130" cy="85" r="8" fill="#0a0a0a" 
      animate={{ cx: 130 + lookX, cy: 85 + lookY }}
      transition={{ type: "spring", stiffness: 100 }}
    />
  </g>
);

export const GhostSleeping = () => (
  <GhostBase>
    <Body />
    {/* Sleeping Eyes */}
    <path d="M 55 90 Q 70 100 85 90" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    <path d="M 115 90 Q 130 100 145 90" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    {/* Mouth */}
    <circle cx="100" cy="115" r="6" fill="#0a0a0a" opacity="0.5" />
    {/* Beanie */}
    <path d="M 35 65 Q 100 10 165 65" fill="#eb5e28" stroke="#0a0a0a" strokeWidth="4" />
    <circle cx="100" cy="35" r="10" fill="#eb5e28" stroke="#0a0a0a" strokeWidth="4" />
    {/* Zzz */}
    <motion.text 
      x="160" y="60" 
      fontSize="24" fontWeight="bold" fill="#0a0a0a"
      animate={{ y: [60, 40], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >Z</motion.text>
  </GhostBase>
);

export const GhostTeaching = () => (
  <GhostBase>
    <Body />
    <Glasses lookX={2} />
    {/* Book in Left Hand */}
    <rect x="20" y="120" width="50" height="60" rx="4" fill="#4ade80" stroke="#0a0a0a" strokeWidth="3" transform="rotate(-10 45 150)" />
    <circle cx="55" cy="150" r="12" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" />
    {/* Stick in Right Hand */}
    <line x1="145" y1="150" x2="145" y2="50" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    <circle cx="145" cy="150" r="12" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" />
    {/* Pointer Tip */}
    <circle cx="145" cy="45" r="6" fill="#eb5e28" stroke="#0a0a0a" strokeWidth="3" />
  </GhostBase>
);

export const GhostArmsCrossed = () => (
  <GhostBase>
    <Body />
    <Glasses />
    {/* Arms Crossed */}
    <path d="M 45 140 C 45 140 80 160 100 160 C 120 160 155 140 155 140" fill="none" stroke="#0a0a0a" strokeWidth="16" strokeLinecap="round" />
    <path d="M 45 140 C 45 140 80 160 100 160 C 120 160 155 140 155 140" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
    {/* Hands */}
    <circle cx="60" cy="145" r="10" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" />
    <circle cx="140" cy="145" r="10" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" />
  </GhostBase>
);

export const GhostLaptop = () => (
  <GhostBase>
    <Body />
    <Glasses lookY={4} />
    {/* Laptop */}
    <rect x="50" y="140" width="100" height="60" rx="6" fill="#a3e635" stroke="#0a0a0a" strokeWidth="3" />
    <path d="M 50 140 L 150 140 L 140 130 L 60 130 Z" fill="#bef264" stroke="#0a0a0a" strokeWidth="3" />
    <circle cx="100" cy="170" r="8" fill="#ffffff" opacity="0.5" />
    {/* Hands typing */}
    <motion.circle cx="70" cy="150" r="10" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" animate={{ y: [0, 2, 0] }} transition={{ duration: 0.2, repeat: Infinity }} />
    <motion.circle cx="130" cy="150" r="10" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" animate={{ y: [2, 0, 2] }} transition={{ duration: 0.2, repeat: Infinity }} />
  </GhostBase>
);

export const GhostMeditating = () => (
  <GhostBase>
    {/* Squashed Body */}
    <path
      d="M 40 220 L 40 110 C 40 40 160 40 160 110 L 160 220"
      fill="#ffffff"
      stroke="#0a0a0a"
      strokeWidth="4"
    />
    {/* Closed Eyes (Peaceful) */}
    <path d="M 55 95 Q 70 85 85 95" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    <path d="M 115 95 Q 130 85 145 95" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    
    {/* Legs (Lotus) */}
    <path d="M 50 180 Q 100 220 150 180" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    <path d="M 50 180 Q 30 190 50 200" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
    <path d="M 150 180 Q 170 190 150 200" fill="none" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />

    {/* Hands (Mudra) */}
    <circle cx="100" cy="150" r="10" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" />
    <circle cx="100" cy="150" r="4" fill="#eb5e28" />
    
    {/* Levitation Shadow */}
    <motion.ellipse 
      cx="100" cy="220" rx="60" ry="10" fill="#000" opacity="0.1" 
      animate={{ rx: [50, 60, 50], opacity: [0.2, 0.1, 0.2] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </GhostBase>
);

export const GhostThumbsUp = () => (
  <GhostBase>
    <Body />
    <Glasses />
    {/* Thumbs Up Arm */}
    <path d="M 160 130 Q 180 130 180 110 L 180 100" fill="none" stroke="#0a0a0a" strokeWidth="14" strokeLinecap="round" />
    <path d="M 160 130 Q 180 130 180 110 L 180 100" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
    {/* Thumb */}
    <circle cx="180" cy="95" r="12" fill="#ffffff" stroke="#0a0a0a" strokeWidth="3" />
    <path d="M 175 100 L 180 85 L 185 100" fill="#ffffff" /> 
  </GhostBase>
);

export const GHOST_VARIANTS: Record<string, React.ReactNode> = {
  "sleeping": <GhostSleeping />,
  "teaching": <GhostTeaching />,
  "arms-crossed": <GhostArmsCrossed />,
  "laptop": <GhostLaptop />,
  "meditating": <GhostMeditating />,
  "thumbs-up": <GhostThumbsUp />
};
