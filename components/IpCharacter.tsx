
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const IpCharacter = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== 'undefined') {
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const calculateEyeOffset = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    
    const angle = Math.atan2(dy, dx);
    const maxRadius = 10; 
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy) / 25, maxRadius);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  const eyeOffset = calculateEyeOffset();

  return (
    <div className="relative w-full h-full max-w-[600px] max-h-[600px] flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        <defs>
          <mask id="bodyMask">
             <rect x="-100" y="-100" width="400" height="400" fill="white" />
             {/* Mask out the bottom part to simulate hiding behind the ledge */}
             <rect x="-100" y="170" width="400" height="100" fill="black" />
          </mask>
        </defs>

        {/* Ghost Body */}
        <path
          d="M 40 250 L 40 90 C 40 20 160 20 160 90 L 160 250"
          fill="#ffffff"
          mask="url(#bodyMask)"
        />
        
        {/* The Ledge - Matches background color #050505 to blend seamlessly */}
        <rect x="-100" y="170" width="400" height="200" fill="#050505" />

        {/* Paws - Resting on top of the ledge */}
        <circle cx="35" cy="170" r="14" fill="#ffffff" />
        <circle cx="165" cy="170" r="14" fill="#ffffff" />

        {/* Glasses */}
        <g transform="translate(0, 0)">
            {/* Bridge */}
            <path d="M 94 85 C 94 78 106 78 106 85" stroke="#0a0a0a" strokeWidth="4" fill="none" strokeLinecap="round" />
            
            {/* Temples */}
            <path d="M 44 82 L 30 85" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
            <path d="M 156 82 L 170 85" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />

            {/* Lenses */}
            <circle cx="70" cy="85" r="26" fill="#ffffff" stroke="#0a0a0a" strokeWidth="5" />
            <circle cx="130" cy="85" r="26" fill="#ffffff" stroke="#0a0a0a" strokeWidth="5" />
            
            {/* Pupils - Animated */}
            <motion.circle 
                cx="70" cy="85" r="8" fill="#0a0a0a"
                animate={{ cx: 70 + eyeOffset.x, cy: 85 + eyeOffset.y }}
                transition={{ type: "spring", damping: 30, stiffness: 250 }}
            />
            <motion.circle 
                cx="130" cy="85" r="8" fill="#0a0a0a"
                animate={{ cx: 130 + eyeOffset.x, cy: 85 + eyeOffset.y }}
                transition={{ type: "spring", damping: 30, stiffness: 250 }}
            />
            
            {/* Reflections */}
            <circle cx="80" cy="76" r="3" fill="white" opacity="0.7" />
            <circle cx="140" cy="76" r="3" fill="white" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
