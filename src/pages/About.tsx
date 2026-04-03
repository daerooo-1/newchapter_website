import React from "react";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, CheckCircle, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";
import { SectionMarker } from "../components/SectionMarker";

export const About = () => {
  const { content } = useContent();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="bg-paper min-h-screen pt-40 pb-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start mb-40">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="md:col-span-7 space-y-16"
          >
              <div className="space-y-8">
                  <motion.span 
                    variants={fadeIn}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans"
                  >
                      <SectionMarker /> About Us
                  </motion.span>
                  <motion.h1 
                    variants={fadeIn}
                    className="text-4xl md:text-heading-base font-display text-ink leading-[1.1] tracking-tight uppercase"
                  >
                      {content.about.title}
                  </motion.h1>
              </div>

              <motion.div 
                variants={fadeIn}
                className="space-y-8 text-xl text-ink/80 leading-relaxed font-sans max-w-3xl"
              >
                  <p className="whitespace-pre-line">
                      {content.about.story}
                  </p>
              </motion.div>

              <motion.div variants={fadeIn} className="pt-4">
                <Link 
                    to="/contact"
                    className="group inline-flex items-center gap-6 bg-ink text-paper px-12 py-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300"
                >
                    Get in Touch
                    <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
          </motion.div>

          <div className="md:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] overflow-hidden bg-ink/5"
              >
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop" 
                    alt="Inspector" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                    referrerPolicy="no-referrer"
                  />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-10 -left-10 md:-left-20 bg-white p-10 max-w-xs shadow-2xl border border-ink/5 hidden md:block"
              >
                  <p className="text-ink italic font-serif text-xl leading-relaxed">
                    "Our mission is to provide the clarity you need to move forward with confidence."
                  </p>
                  <div className="mt-6 w-12 h-px bg-accent"></div>
              </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="border-t border-ink/10 pt-32">
          {/* Layer 1: Intro */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-24 max-w-4xl"
          >
              <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans mb-8">
                <SectionMarker /> Why Choose Us
              </span>
              <h2 className="text-4xl md:text-6xl font-display text-ink uppercase tracking-tight mb-8 leading-[1.1]">
                Built on Practical Experience and Recognized Credentials
              </h2>
              <p className="text-ink/60 font-sans text-xl leading-relaxed max-w-2xl">
                Choosing an inspection service is not only about checking boxes. It is about working with someone who can observe carefully, explain clearly, and bring practical building knowledge to the process.
              </p>
          </motion.div>

          {/* Layer 2: Three-point trust layer */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-32"
          >
            {/* Point 01 */}
            <motion.div variants={fadeIn} className="space-y-6">
              <span className="block font-display text-accent text-sm tracking-widest uppercase">01</span>
              <h3 className="text-2xl font-display text-ink uppercase tracking-tight">Practical Building Knowledge</h3>
              <p className="text-ink/70 font-sans leading-relaxed">
                New Chapter is led by a BC licensed inspector, Red Seal carpenter, and former general contractor with more than 10 years of construction experience.
              </p>
            </motion.div>

            {/* Point 02 */}
            <motion.div variants={fadeIn} className="space-y-6">
              <span className="block font-display text-accent text-sm tracking-widest uppercase">02</span>
              <h3 className="text-2xl font-display text-ink uppercase tracking-tight">Clear, Usable Reporting</h3>
              <p className="text-ink/70 font-sans leading-relaxed">
                We focus on organized reporting, straightforward communication, and practical observations that help clients understand what matters most.
              </p>
            </motion.div>

            {/* Point 03 */}
            <motion.div variants={fadeIn} className="space-y-6">
              <span className="block font-display text-accent text-sm tracking-widest uppercase">03</span>
              <h3 className="text-2xl font-display text-ink uppercase tracking-tight">Trusted Qualifications</h3>
              <p className="text-ink/70 font-sans leading-relaxed">
                Licensed inspection practice, recognized credentials, and hands-on field experience come together to support better-informed decisions.
              </p>
            </motion.div>
          </motion.div>

          {/* Layer 3: Credential/logo layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-16 md:pt-24 border-t border-ink/5"
          >
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
              
              {/* credential-logo-consumer-protection */}
              <div className="h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                {/* TODO: Replace this logo placeholder with final PNG asset */}
                <img 
                  src="https://www.consumerprotectionbc.ca/wp-content/uploads/2017/01/CPBC_LicensedBy_4C-01.png" 
                  alt="Consumer Protection BC" 
                  className="max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* credential-logo-internachi */}
              <div className="h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                {/* TODO: Replace this logo placeholder with final PNG asset */}
                <img 
                  src="https://s3.amazonaws.com/uploads.nachi.org/logos/2022/InterNACHI-CPI-Logo.png" 
                  alt="InterNACHI / CPI" 
                  className="max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* credential-logo-redseal */}
              <div className="h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                {/* TODO: Replace this logo placeholder with final PNG asset */}
                <img 
                  src="https://www.red-seal.ca/images/rs_logo.png" 
                  alt="Red Seal Carpenter" 
                  className="max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};