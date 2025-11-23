
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GHOST_VARIANTS } from './GhostVariants';

interface SlotMachineProps {
  images: string[];
  buttonText?: {
    idle: string;
    active: string;
  };
}

export const SlotMachine: React.FC<SlotMachineProps> = ({ images, buttonText }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const controls = useAnimation();
  
  const itemHeight = 240; 
  const numLoops = 20; 

  const idleText = buttonText?.idle || "TAP TO EVOLVE";
  const activeText = buttonText?.active || "EVOLVING...";

  const spin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * images.length);
    const targetSet = numLoops - 3;
    const finalY = -1 * (targetSet * images.length * itemHeight + randomIndex * itemHeight);

    await controls.start({ y: 0, transition: { duration: 0 } });

    await controls.start({
      y: finalY,
      transition: {
        duration: 3.5,
        ease: [0.15, 0.85, 0.35, 1],
      }
    });

    setIsSpinning(false);
  };

  const stripKeys = Array(numLoops).fill(images).flat();

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-full pointer-events-auto">
      <div className="relative w-[240px] h-[240px] bg-white rounded-2xl overflow-hidden border-4 border-brand-black/5 shadow-2xl ring-1 ring-white/10">
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={controls}
          initial={{ y: 0 }}
          className="flex flex-col items-center"
        >
          {stripKeys.map((key, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center flex-shrink-0 p-8"
              style={{ height: itemHeight, width: '100%' }}
            >
              {GHOST_VARIANTS[key] || <div className="text-black">?</div>}
            </div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={spin}
        disabled={isSpinning}
        className={`
          px-8 py-2.5 rounded-full font-bold text-sm md:text-base tracking-wider transition-all transform border
          ${isSpinning 
            ? 'bg-white/10 text-white/50 border-white/5 cursor-not-allowed scale-95' 
            : 'bg-brand-accent text-white border-brand-accent hover:bg-brand-accent/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(235,94,40,0.4)] active:scale-95'}
        `}
      >
        {isSpinning ? activeText : idleText}
      </button>
    </div>
  );
};

