import React from "react";
import { MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionMarker } from "../components/SectionMarker";

export const SampleReport = () => {
  return (
    <div className="bg-paper min-h-screen pt-40 pb-32 px-6 md:px-12 text-ink">
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans mb-10">
              <SectionMarker /> Resources
            </span>
            <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tight mb-12 uppercase">
              Sample Inspection <br /> Report
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-sans leading-relaxed max-w-2xl mb-0 lg:mb-0">
              Our reports are designed to clearly organize findings, with photos and practical explanations to help you understand the property.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 justify-end lg:pb-4"
          >
            <a 
              href="/SampleReport-Residential.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-6 bg-ink text-paper px-12 py-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 group/btn"
            >
              View Residential Report
              <MoveUpRight 
                size={16} 
                className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" 
              />
            </a>

            <a 
              href="/SampleReport-Commercial.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-6 border border-ink/20 text-ink px-12 py-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-500 group/btn"
            >
              View Commercial Report
              <MoveUpRight 
                size={16} 
                className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" 
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
