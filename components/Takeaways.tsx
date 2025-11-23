
import React from 'react';
import { ContentSection } from '../types';
import { motion } from 'framer-motion';

interface TakeawaysProps {
  content: ContentSection['takeaways'];
}

// --- Mind Map Components ---

const nodes = [
  // Root
  { id: 'root', label: 'Physics', x: 50, y: 50, r: 8, type: 'root' },
  // Level 1
  { id: '1', label: 'Quantum', x: 25, y: 30, r: 6, type: 'main' },
  { id: '2', label: 'Relativity', x: 75, y: 30, r: 6, type: 'main' },
  { id: '3', label: 'Thermodynamics', x: 50, y: 80, r: 6, type: 'main' },
  // Level 2 (Quantum)
  { id: '1-1', label: 'Entanglement', x: 10, y: 15, r: 4, type: 'sub' },
  { id: '1-2', label: 'Superposition', x: 35, y: 10, r: 4, type: 'sub' },
  // Level 2 (Relativity)
  { id: '2-1', label: 'Spacetime', x: 65, y: 10, r: 4, type: 'sub' },
  { id: '2-2', label: 'Gravity', x: 90, y: 15, r: 4, type: 'sub' },
  // Level 2 (Thermo)
  { id: '3-1', label: 'Entropy', x: 30, y: 85, r: 4, type: 'sub' },
  { id: '3-2', label: 'Heat', x: 70, y: 85, r: 4, type: 'sub' },
];

const edges = [
  { from: 'root', to: '1' }, { from: 'root', to: '2' }, { from: 'root', to: '3' },
  { from: '1', to: '1-1' }, { from: '1', to: '1-2' },
  { from: '2', to: '2-1' }, { from: '2', to: '2-2' },
  { from: '3', to: '3-1' }, { from: '3', to: '3-2' },
];

const MindMap = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] bg-brand-dark/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl backdrop-blur-sm">
       {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {edges.map((edge, i) => {
          const start = nodes.find(n => n.id === edge.from)!;
          const end = nodes.find(n => n.id === edge.to)!;
          return (
            <motion.line
              key={i}
              x1={`${start.x}%`} y1={`${start.y}%`}
              x2={`${end.x}%`} y2={`${end.y}%`}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
          );
        })}
      </svg>
      
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className={`absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: i * 0.1 // Stagger effect
          }}
        >
          {/* Node Circle */}
          <div 
            className={`
              rounded-full border shadow-[0_0_15px_rgba(235,94,40,0.3)]
              ${node.type === 'root' ? 'w-6 h-6 bg-brand-accent border-brand-accent' : 
                node.type === 'main' ? 'w-4 h-4 bg-brand-black border-brand-accent' : 
                'w-3 h-3 bg-brand-black border-white/40'}
            `} 
          />
          {/* Label */}
          <span className={`
            absolute mt-8 px-2 py-0.5 rounded text-center whitespace-nowrap
            ${node.type === 'root' ? 'text-sm font-bold text-white bg-black/50 backdrop-blur-md' : 
              node.type === 'main' ? 'text-xs text-white/90 font-medium' : 
              'text-[10px] text-white/60'}
          `}>
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};


// --- Heatmap Components ---

// Generate dummy heatmap data (approx 6 months)
const generateHeatmapData = () => {
  const data = [];
  const weeks = 20;
  const days = 7;
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      // 0 = empty, 1 = low, 2 = med, 3 = high
      // More activity on recent weeks
      const rand = Math.random();
      let val = 0;
      if (rand > 0.6) val = 1;
      if (rand > 0.8) val = 2;
      if (rand > 0.95) val = 3;
      week.push(val);
    }
    data.push(week);
  }
  return data;
};

const heatmapData = generateHeatmapData();

const Heatmap = ({ stats }: { stats: ContentSection['takeaways']['stats'] }) => {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      {/* Stats Header */}
      <div className="flex justify-between items-center gap-2">
        {stats.map((stat, i) => (
          <div key={i} className="bg-brand-dark/50 p-4 rounded-xl border border-white/5 flex-1 min-w-[90px] backdrop-blur-sm">
            <div className="text-xl md:text-2xl font-bold font-display text-brand-accent">{stat.value}</div>
            <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Grid Container */}
      <div className="bg-brand-dark/50 p-6 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm flex-1 flex flex-col justify-center">
        <div className="flex gap-1 md:gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
          {heatmapData.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1 md:gap-1.5">
              {week.map((val, dIndex) => (
                <motion.div
                  key={`${wIndex}-${dIndex}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (wIndex * 0.02) + (dIndex * 0.01) }}
                  className={`
                    w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-sm md:rounded-md transition-colors duration-300 hover:opacity-80
                    ${val === 0 ? 'bg-white/5' : 
                      val === 1 ? 'bg-brand-accent/30' : 
                      val === 2 ? 'bg-brand-accent/60' : 
                      'bg-brand-accent shadow-[0_0_8px_rgba(235,94,40,0.6)]'}
                  `}
                />
              ))}
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-white/40">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
          <div className="w-2.5 h-2.5 rounded-sm bg-brand-accent/30" />
          <div className="w-2.5 h-2.5 rounded-sm bg-brand-accent/60" />
          <div className="w-2.5 h-2.5 rounded-sm bg-brand-accent" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};


export const Takeaways: React.FC<TakeawaysProps> = ({ content }) => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 relative flex flex-col justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Mind Map */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider pl-2 border-l-4 border-brand-accent">
            {content.mindMapTitle}
          </h3>
          <MindMap />
        </motion.div>

        {/* Right: Heatmap */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 h-full"
        >
           <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider pl-2 border-l-4 border-white/20">
            {content.heatmapTitle}
          </h3>
          <Heatmap stats={content.stats} />
        </motion.div>

      </div>
    </section>
  );
};
