import React, { useRef } from 'react';
import { ContentSection } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  content: ContentSection['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Elements */}
      <motion.div 
        style={{ scale: scaleBg }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-black to-brand-black opacity-50"
      />
      
      {/* Floating Particles (Simulated) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [0, -100], 
              opacity: [0.2, 0] 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 tracking-tight text-brand-highlight mix-blend-overlay">
          {content.tagline}
        </h1>
        <p className="text-xl md:text-2xl font-serif text-white/70 font-light max-w-2xl mx-auto">
          {content.subline}
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">{content.scroll}</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};