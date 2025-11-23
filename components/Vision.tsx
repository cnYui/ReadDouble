
import React from 'react';
import { ContentSection } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface VisionProps {
  content: ContentSection;
}

export const Vision: React.FC<VisionProps> = ({ content }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between py-20 bg-brand-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex-1 flex items-center justify-center text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight max-w-5xl whitespace-pre-line"
        >
          "{content.vision.statement}"
        </motion.h2>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-white text-brand-black px-12 py-4 rounded-full text-xl font-bold tracking-wide overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
            {content.cta.button} <ArrowRight size={20} />
          </span>
        </motion.button>

        <footer className="text-white/30 text-sm uppercase tracking-widest">
          {content.cta.footer}
        </footer>
      </div>
    </section>
  );
};
