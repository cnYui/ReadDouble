
import React, { useRef } from 'react';
import { ContentSection } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User } from 'lucide-react';

// Custom Ghost Icon for the Chat Avatar
const GhostIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <path
      d="M 40 200 L 40 90 C 40 20 160 20 160 90 L 160 200"
      fill="#ffffff"
    />
    {/* Face Elements */}
    <g transform="translate(0, -5)">
        {/* Bridge */}
        <path d="M 94 85 C 94 78 106 78 106 85" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" />
        
        {/* Lenses */}
        <circle cx="70" cy="85" r="28" fill="#ffffff" stroke="#0a0a0a" strokeWidth="12" />
        <circle cx="130" cy="85" r="28" fill="#ffffff" stroke="#0a0a0a" strokeWidth="12" />
        
        {/* Pupils */}
        <circle cx="70" cy="85" r="12" fill="#0a0a0a" />
        <circle cx="130" cy="85" r="12" fill="#0a0a0a" />
    </g>
  </svg>
);

interface DemoProps {
  content: ContentSection['demo'];
}

export const Demo: React.FC<DemoProps> = ({ content }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const totalMessages = content.conversation.length;

  // Move the container up ONLY after the screen is likely full.
  // We start the movement later (at 0.4 progress) to keep the start stable.
  // We move it less aggressively to avoid empty space at the bottom.
  const yContainer = useTransform(scrollYProgress, [0.4, 1], ["0%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-brand-dark">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-start py-0">
        {/* Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-black to-brand-dark pointer-events-none" />
        
        <motion.div 
          style={{ y: yContainer }}
          className="relative z-10 w-full max-w-3xl px-6 pt-32 pb-32"
        >
          {content.conversation.map((msg, i) => {
             // Calculate sequential triggers
             const step = 1 / totalMessages;
             const start = i * step;
             // End the animation slightly before the next one starts for clarity, 
             // or overlap slightly for smoothness. Overlapping slightly looks better.
             const end = start + step * 1.5; 
             
             const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
             const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
             
             // Animate max-height to allow the element to take up layout space progressively.
             // This ensures the centered container only accounts for visible items,
             // preventing the "everything stuck at the top" issue.
             const maxHeight = useTransform(scrollYProgress, [start, end], ["0px", "1000px"]);

             return (
              <motion.div
                key={i}
                style={{ 
                  opacity, 
                  scale,
                  maxHeight,
                }}
                className="overflow-hidden origin-top"
              >
                <div className={`flex gap-4 mb-8 ${msg.speaker === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg overflow-hidden ${msg.speaker === 'user' ? 'bg-white/10' : 'bg-brand-accent'}`}>
                    {msg.speaker === 'user' ? <User size={18} /> : <GhostIcon className="w-7 h-7 translate-y-1" />}
                  </div>
                  
                  <div className={`flex flex-col ${msg.speaker === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                    <span className="text-xs uppercase tracking-widest mb-1 text-white/40">
                      {msg.speaker === 'user' ? content.userLabel : content.aiLabel}
                    </span>
                    <div className={`p-4 rounded-2xl text-base md:text-lg leading-relaxed font-serif shadow-sm ${
                      msg.speaker === 'user' 
                        ? 'bg-white/5 border border-white/10 text-white/90 rounded-tr-none' 
                        : 'bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 border border-brand-accent/20 text-white rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
