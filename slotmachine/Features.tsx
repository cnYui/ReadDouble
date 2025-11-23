
import React, { useRef } from 'react';
import { ContentSection } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SlotMachine } from './SlotMachine';

interface FeaturesProps {
  content: ContentSection['features'];
}

export const Features: React.FC<FeaturesProps> = ({ content }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-55%"]); 

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-10">
          <h3 className="text-xl font-display uppercase tracking-widest text-brand-accent border-b border-brand-accent pb-2">
            {content.title}
          </h3>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-20">
          {content.items.map((item, i) => (
            <div 
              key={i} 
              className="relative w-[80vw] md:w-[600px] h-[80vh] flex-shrink-0 group"
            >
              <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:bg-white/10 p-12 pb-16 flex flex-col justify-between overflow-visible">
                <span className={`text-9xl font-display font-bold text-white/5 absolute top-4 right-4 select-none transition-opacity duration-300 ${item.flowchart || item.slotImages ? 'opacity-[0.03]' : ''}`}>
                  0{i + 1}
                </span>

                {item.flowchart && (
                  <div className="flex-1 flex flex-col items-center justify-center gap-1 z-20 pointer-events-none pt-8">
                    {item.flowchart.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            delay: idx * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className={`
                            relative px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-bold tracking-wide shadow-lg border backdrop-blur-md text-center max-w-[90%] w-[200px] md:w-[240px] flex items-center justify-center
                            ${step.type === 'user' 
                              ? 'bg-white/90 text-brand-black border-white/50 shadow-white/10' 
                              : 'bg-brand-accent text-white border-brand-accent/50 shadow-brand-accent/20'}
                          `}
                        >
                          {step.label}
                        </motion.div>
                        {idx < item.flowchart.length - 1 && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.5 }}
                            transition={{ delay: idx * 0.1 + 0.05 }}
                            className="text-white/50 -my-0.5"
                          >
                            <ArrowDown size={14} />
                          </motion.div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {item.slotImages && (
                   <div className="flex-1 flex flex-col items-center justify-center z-20 pt-8">
                     <SlotMachine images={item.slotImages} buttonText={item.slotButton} />
                   </div>
                )}

                <h4 className="relative z-30 text-4xl md:text-5xl font-bold mb-6 text-white">
                  {item.title}
                </h4>
                <p className="relative z-30 text-xl text-white/70 font-serif leading-relaxed">
                  {item.desc}
                </p>
                <div className="relative z-30 mt-8 h-1 w-0 bg-brand-accent group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

