
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainStory } from './components/PainStory';
import { Companion } from './components/Companion';
import { Features } from './components/Features';
import { Demo } from './components/Demo';
import { Takeaways } from './components/Takeaways';
import { Vision } from './components/Vision';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const content = CONTENT[lang];

  // Smooth scroll behavior for HTML
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-brand-black text-white min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Header lang={lang} setLang={setLang} />
      
      <main>
        <Hero content={content.hero} />
        
        <PainStory content={content.pain} />
        
        <Companion content={content.companion} />

        <Features content={content.features} />
        
        <Demo content={content.demo} />
        
        <Takeaways content={content.takeaways} />
        
        <Vision content={content} />
      </main>
    </div>
  );
};

export default App;
