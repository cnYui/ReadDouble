import React, { useRef } from 'react';
import { ContentSection } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PainStoryProps {
  content: ContentSection['pain'];
}

export const PainStory: React.FC<PainStoryProps> = ({ content }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Animation Timings
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.25, 0.35], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
  
  const blurVal = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(0px)", "blur(6px)", "blur(12px)"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white text-black transition-colors duration-500">
        
        {/* Paper Content Container - The "Box" */}
        <motion.div 
          style={{ filter: blurVal, opacity: opacityBg }}
          className="w-full max-w-[900px] h-full px-8 md:px-12 py-16 mx-auto bg-white relative overflow-hidden"
        >
          <div className="font-serif text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-justify text-gray-900 space-y-6 select-none pointer-events-none">
            <p>
              yet incomplete character: homogenization of the methodologies across research communities and emergence of new capabilities. From a technical perspective, it is <i>transfer learning</i> that makes foundation models possible, and it is <i>scale</i> that makes them powerful. The emergence of foundation models has been predominantly observed in the NLP domain, with examples ranging from BERT to ChatGPT. This trend has gained traction in recent years, extending to computer vision and other fields. In NLP, the introduction of BERT in late 2018 is considered as the inception of the foundation model era.
            </p>
            
            <p>
              In this paper, we focus on <i>multimodal foundation models</i>, which inherit all properties of foundation models discussed in the Stanford paper (<span className="text-blue-700">Bommasani et al., 2021</span>), but with an emphasis on models with the capability to deal with vision and vision-language modalities. Among the ever-growing literature, we categorize multimodal foundation models in Figure 1.2, based on their functionality and generality. For each category, we present exemplary models that demonstrate the primary capabilities inherent to these multimodal foundation models.
            </p>

            <div className="space-y-4 mt-4">
              <p>
                <span className="font-bold">• Visual Understanding Models.</span> (Highlighted with orange in Figure 1.2) Learning general visual representations is essential to build vision foundation models, as pre-training a strong vision backbone is fundamental to all types of computer vision downstream tasks, ranging from image-level (e.g., image classification, retrieval, and captioning), region-level (e.g., detection and grounding) to pixel-level tasks (e.g., segmentation). We group the methods into three categories, depending on the types of supervision signals used to train the models.
              </p>
              
              <ul className="space-y-3 mt-2">
                <li className="pl-4 flex">
                  <span className="font-bold mr-2 min-w-fit">– Label supervision.</span>
                  <span>
                    Datasets like ImageNet (<span className="text-blue-700">Krizhevsky et al., 2012</span>) and ImageNet21K (<span className="text-blue-700">Ridnik et al., 2021</span>) have been popular for supervised learning, and larger-scale proprietary datasets are also used in industrial labs (<span className="text-blue-700">Sun et al., 2017</span>; <span className="text-blue-700">Singh et al., 2022b</span>).
                  </span>
                </li>
                <li className="pl-4 flex">
                  <span className="font-bold mr-2 min-w-fit">– Language supervision.</span>
                  <span>
                    Language is a richer form of supervision. Models like CLIP (<span className="text-blue-700">Radford et al., 2021</span>) and ALIGN (<span className="text-blue-700">Jia et al., 2021</span>) are pre-trained using a contrastive loss over millions of image-text pairs.
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-4">
              The remarkable success of BERT rapidly stimulates interest in self-supervised learning in the computer vision community, giving rise to models such as SimCLR (<span className="text-blue-700">Chen et al., 2020a</span>), MoCo (<span className="text-blue-700">He et al., 2020</span>), BEiT (<span className="text-blue-700">Bao et al., 2022</span>), and MAE (<span className="text-blue-700">He et al., 2022a</span>). During the same time period, the success of pre-training also significantly promotes the vision-and-language multimodal field to an unprecedented level of attention.
            </p>
          </div>
        </motion.div>

        {/* Floating Text Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="relative w-full max-w-4xl px-6 text-center">
            <motion.h2 style={{ opacity: opacity1 }} className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold font-display text-black">
              {content.line1}
            </motion.h2>
            <motion.h2 style={{ opacity: opacity2 }} className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold font-display text-black/60 blur-[1px]">
              {content.line2}
            </motion.h2>
            <motion.h2 style={{ opacity: opacity3 }} className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold font-display text-brand-accent">
              {content.line3}
            </motion.h2>
          </div>
        </div>

      </div>
    </section>
  );
};
