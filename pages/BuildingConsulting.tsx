import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SectionMarker } from "../components/SectionMarker";

export const BuildingConsulting = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-paper min-h-screen font-sans text-ink">
      {/* 1. HERO */}
      <section className="pt-32 pb-16 px-6 md:px-10 border-b border-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-sans font-medium text-[13px] tracking-wide uppercase mb-6 block">
                Building Consulting
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-display leading-[1.1] tracking-tight uppercase mb-8 max-w-4xl">
                Expert Guidance for Your <br className="hidden lg:block" /> Building Projects
              </h1>
              <p className="text-lg md:text-xl text-ink/60 font-sans font-light leading-relaxed mb-10 max-w-2xl">
                Strategic technical advice to help you navigate complex building challenges with clarity and confidence.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-4 bg-ink text-paper px-10 py-5 font-sans font-medium text-[13px] tracking-wide uppercase hover:bg-accent transition-all duration-300"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 border border-ink/20 font-sans font-medium text-[13px] tracking-wide uppercase hover:border-ink transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <SectionMarker className="mb-8 justify-start" />
            <h2 className="text-3xl md:text-4xl font-display leading-tight uppercase mb-8">
              Strategic Advice for Informed Decisions
            </h2>
            <p className="text-xl text-ink/80 font-sans leading-relaxed">
              Beyond standard inspections, our consulting services provide deep technical expertise to help you navigate complex building challenges. Whether you're planning a renovation, managing a portfolio, or addressing specific performance issues, we offer the clarity you need to move forward with confidence.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-lg text-ink/60 leading-relaxed font-sans italic border-l-2 border-accent/20 pl-8">
              We focus on providing the technical clarity and strategic perspective you need to manage your assets effectively.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT BUILDING CONSULTING CAN HELP WITH */}
      <section className="py-24 px-6 md:px-10 bg-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-16">
            <SectionMarker className="mb-6 justify-start" />
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-6">What Building Consulting Can Help With</h2>
            <p className="text-ink/60 font-sans max-w-2xl">
              Our consulting services are tailored to your specific needs, providing targeted expertise where it matters most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pre-Purchase Strategy",
                description: "Deep-dive analysis of specific building systems or concerns before you commit to a major acquisition."
              },
              {
                title: "Renovation & Capital Planning",
                description: "Technical guidance on building condition and system life cycles to help you prioritize future investments."
              },
              {
                title: "Problem Solving & Diagnostics",
                description: "Investigating specific performance issues, from moisture intrusion to structural concerns, with a focus on practical solutions."
              },
              {
                title: "Maintenance & Operations",
                description: "Developing long-term maintenance strategies to preserve asset value and ensure building performance."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 border border-ink/10 hover:border-accent/30 transition-colors group">
                <h3 className="text-xl font-display uppercase mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-ink/60 font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROPERTY TYPES WE CONSULT ON */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-12">
            <SectionMarker className="mb-6 justify-start" />
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight">Property Types We Consult On</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Residential portfolios",
              "Commercial buildings",
              "Mixed-use developments",
              "Historic properties",
              "Industrial spaces"
            ].map((type, i) => (
              <div 
                key={i} 
                className="px-8 py-4 bg-white border border-ink/10 font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-ink/70"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU CAN EXPECT */}
      <section className="py-24 px-6 md:px-10 border-t border-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight">What You Can Expect</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Collaborative Approach",
                description: "We work closely with owners, managers, and stakeholders to understand specific goals and challenges."
              },
              {
                title: "Technical Depth",
                description: "Our consulting goes beyond the surface, providing detailed technical analysis and expert perspective."
              },
              {
                title: "Actionable Insights",
                description: "We focus on providing clear, practical recommendations that help you make informed decisions."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-1px bg-accent mb-4" />
                <h3 className="text-xl font-display uppercase">{item.title}</h3>
                <p className="text-ink/60 font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="bg-ink text-paper p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-display leading-[0.9] uppercase mb-10">
                Ready to discuss your project?
              </h2>
              <p className="text-xl text-paper/70 font-sans leading-relaxed mb-12 max-w-2xl">
                Building consulting is about more than just identifying issues — it's about providing the technical clarity and strategic perspective you need to manage your assets effectively.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-4 bg-accent text-paper px-10 py-5 font-sans font-medium text-[13px] tracking-wide uppercase hover:bg-paper hover:text-ink transition-all duration-300"
                >
                  <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                  Contact Us
                </button>
              </div>
            </div>
            
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-paper/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};
