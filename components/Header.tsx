import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 mix-blend-difference text-white"
    >
      <div className="text-xl font-bold tracking-widest uppercase font-display">
        Read Double
      </div>
      
      <button
        onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-md"
      >
        <Globe size={16} />
        <span className="text-sm font-medium tracking-wide w-12 text-center">
          {lang === 'en' ? 'EN' : '中文'}
        </span>
      </button>
    </motion.header>
  );
};