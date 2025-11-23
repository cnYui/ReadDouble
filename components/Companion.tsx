
import React, { useRef, useState } from 'react';
import { ContentSection } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IpCharacter } from './IpCharacter';

interface CompanionProps {
  content: ContentSection['companion'];
}

export const Companion: React.FC<CompanionProps> = ({ content }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Timeline:
  // 0.0 - 0.35: Body Double Explanation (Light Theme)
  // 0.35 - 0.55: IP Character Slides Up (Dark Theme Curtain)
  // 0.55 - 1.0: Character Reveal fully visible

  // --- Stage 1: Body Double ---
  // Fades out and scales down slightly as the curtain rises
  const stage1Opacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);
  const stage1Scale = useTransform(scrollYProgress, [0.35, 0.55], [1, 0.95]);
  const stage1PointerEvents = useTransform(scrollYProgress, (val) => val > 0.4 ? 'none' : 'auto');

  // --- Stage 2: Character Reveal ---
  // slides up from bottom (100% -> 0%) to cover the screen
  const stage2Y = useTransform(scrollYProgress, [0.35, 0.55], ["100%", "0%"]);
  
  // Text animation within Stage 2
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.6, 0.7], [30, 0]);

  // Interaction State for Stage 1
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isCompanionActive = hoveredIndex !== null;

  return (
    <motion.section 
      ref={targetRef} 
      className="relative h-[300vh] z-20 bg-brand-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ================= STAGE 1: BODY DOUBLE EXPLANATION ================= */}
        <motion.div 
          style={{ opacity: stage1Opacity, scale: stage1Scale, pointerEvents: stage1PointerEvents }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-brand-black bg-[#f8f9fa] z-10"
        >
            
            {/* Left Side: Interactive Visual */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col items-center justify-center relative">
               <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center bg-white/50 rounded-3xl border border-black/5 shadow-sm p-8">
                  
                  {/* SVG Diagram */}
                  <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                     {/* Labels */}
                     <text x="80" y="40" textAnchor="middle" className="font-bold text-lg fill-black/60">{content.bodyDouble.labels.solo}</text>
                     <text x="320" y="40" textAnchor="middle" className="font-bold text-lg fill-black">{content.bodyDouble.labels.companion}</text>

                     {/* Solo Circle (Wobbly) */}
                     <motion.g 
                        initial={{ x: 80, y: 120 }}
                        animate={{ 
                           x: 80 + (isCompanionActive ? 0 : Math.random() * 2),
                           y: 120 + (isCompanionActive ? 0 : Math.random() * 2)
                        }}
                     >
                        <motion.circle 
                           cx="0" cy="0" r="35" 
                           fill="none" 
                           stroke="currentColor" 
                           strokeWidth="3"
                           className="text-gray-400"
                           animate={{ 
                             scale: isCompanionActive ? 0.9 : [1, 1.05, 0.95, 1],
                             opacity: isCompanionActive ? 0.5 : 1
                           }}
                           transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Dotted Line downward */}
                        <line x1="0" y1="40" x2="0" y2="120" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-gray-300" />
                     </motion.g>

                     {/* Companion Circle (Steady & Pulsing) */}
                     <g transform="translate(320, 120)">
                        <motion.circle 
                           cx="0" cy="0" r="40" 
                           fill="none" 
                           stroke="currentColor" 
                           strokeWidth="4"
                           className="text-black"
                           animate={{ 
                             scale: isCompanionActive ? [1, 1.1, 1] : 1,
                             strokeWidth: isCompanionActive ? 5 : 4
                           }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Solid Line downward */}
                        <line x1="0" y1="45" x2="0" y2="120" stroke="currentColor" strokeWidth="4" className="text-black" />
                        
                        {/* Glow Effect */}
                        <motion.circle 
                          cx="0" cy="0" r="40"
                          fill="rgba(0,0,0,0.05)"
                          animate={{ scale: isCompanionActive ? [1, 1.5] : 1, opacity: isCompanionActive ? [0.5, 0] : 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                     </g>

                     {/* Focus Bar Background */}
                     <rect x="50" y="260" width="300" height="12" rx="6" fill="#e5e7eb" />
                     
                     {/* Focus Bar Fill */}
                     <motion.rect 
                        x="50" y="260" height="12" rx="6" fill="#000"
                        initial={{ width: 100 }}
                        animate={{ width: isCompanionActive ? 280 : 100 }}
                        transition={{ type: "spring", stiffness: 50 }}
                     />

                     {/* Focus Labels */}
                     <text x="50" y="250" className="text-xs font-medium fill-gray-500">{content.bodyDouble.labels.focusLow}</text>
                     <text x="350" y="250" textAnchor="end" className="text-xs font-medium fill-gray-900">{content.bodyDouble.labels.focusHigh}</text>
                  </svg>

               </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-12 mt-8 md:mt-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight text-black">
                  {content.bodyDouble.title}
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-serif">
                  {content.bodyDouble.subtitle}
                </p>

                <div className="space-y-4">
                  {content.bodyDouble.items.map((item, index) => (
                    <motion.div 
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group flex items-start p-4 rounded-xl transition-all duration-300 cursor-default border ${
                        hoveredIndex === index 
                          ? 'bg-white border-black/10 shadow-lg scale-[1.02]' 
                          : 'bg-transparent border-transparent hover:bg-black/5'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 transition-colors ${
                        hoveredIndex === index ? 'bg-black text-white' : 'bg-black/10 text-black'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-brand-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
        </motion.div>

        {/* ================= STAGE 2: CHARACTER REVEAL (CURTAIN) ================= */}
        <motion.div
          style={{ y: stage2Y }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050505]"
        >
             {/* Character Container */}
             <div className="relative w-full h-full flex flex-col items-center justify-center pb-20">
                 <div className="w-[80vw] md:w-[500px] aspect-square">
                    <IpCharacter />
                 </div>
                 
                 <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute bottom-32 text-center px-6"
                 >
                     <p className="text-2xl md:text-4xl text-brand-highlight font-serif italic font-light max-w-3xl leading-snug">
                        {content.reveal.text}
                     </p>
                 </motion.div>
             </div>
        </motion.div>

      </div>
    </motion.section>
  );
};
