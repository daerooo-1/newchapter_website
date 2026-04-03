import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SectionMarker } from "../components/SectionMarker";

export const CommercialInspections = () => {
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
                Commercial Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-display leading-[1.1] tracking-tight uppercase mb-8 max-w-4xl">
                Commercial Inspections with <br className="hidden lg:block" /> Practical Insight
              </h1>
              <p className="text-lg md:text-xl text-ink/60 font-sans font-light leading-relaxed mb-10 max-w-2xl">
                We provide commercial inspections to help clients better understand the visible condition of a property before purchase, lease, ownership planning, or further due diligence.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-4 bg-ink text-paper px-10 py-5 font-sans font-medium text-[13px] tracking-wide uppercase hover:bg-accent transition-all duration-300"
                >
                  Request a Quote
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
            <p className="text-2xl md:text-3xl font-display leading-tight uppercase mb-8">
              We know commercial property decisions often involve more moving parts, more risk, and more long-term planning. Our commercial inspections are designed to provide a practical understanding of a property’s visible condition so clients can move forward with clearer information and better context.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-lg text-ink/60 leading-relaxed font-sans italic border-l-2 border-accent/20 pl-8">
              We focus on major visible and accessible systems and components, with reporting that helps identify observed deficiencies, maintenance concerns, and items that may warrant further review.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT’S TYPICALLY INCLUDED */}
      <section className="py-24 px-6 md:px-10 bg-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-16">
            <SectionMarker className="mb-6 justify-start" />
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-6">What’s Typically Included</h2>
            <p className="text-ink/60 font-sans max-w-2xl">
              Depending on the property type, access, and the scope set out in the inspection agreement, a commercial inspection may include:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
            {[
              "Roofing and roof drainage, where accessible",
              "Exterior walls and visible site-related conditions",
              "Visible structural components",
              "Plumbing systems and fixtures",
              "Electrical systems and accessible service equipment",
              "Heating, cooling, and ventilation systems",
              "Interior areas and visible finishes",
              "Doors, windows, stairs, and railings",
              "Visible life-safety related observations, where applicable",
              "General condition observations related to maintenance and repair planning"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border-b border-ink/10 pb-6">
                <Check size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-base text-ink/80 font-sans leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXAMPLE PROPERTY TYPES */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-12">
            <SectionMarker className="mb-6 justify-start" />
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight">Example Property Types</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Retail units",
              "Office spaces",
              "Restaurants",
              "Mixed-use properties",
              "Small commercial buildings"
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

      {/* 6. WHAT YOU CAN EXPECT */}
      <section className="py-24 px-6 md:px-10 border-t border-ink/5">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight">What You Can Expect</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl text-ink/80 font-sans leading-relaxed mb-8">
              We provide a clear report outlining the visible condition of major systems and components, along with observed deficiencies, maintenance concerns, and items that may deserve further review.
            </p>
            <p className="text-lg text-ink/60 font-sans leading-relaxed">
              Our goal is to help clients better understand the property as it stands today so they can make more informed decisions about purchase, lease, ownership planning, or next steps.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SCOPE NOTE (Lower on page, quieter) */}
      <section className="py-16 px-6 md:px-10 bg-paper">
        <div className="max-w-[2000px] mx-auto">
          <div className="max-w-3xl border-l border-ink/10 pl-8">
            <h4 className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-ink/40 mb-4">Scope Note</h4>
            <p className="text-ink/50 font-sans text-sm leading-relaxed italic">
              Our commercial inspections are visual and non-invasive in nature and are limited to visible and accessible components at the time of inspection. Exact scope may vary depending on the type of property, tenancy, occupancy, access, and the agreed scope of service.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CLOSING SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="bg-ink text-paper p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-display leading-[0.9] uppercase mb-10">
                Practical reporting for important property decisions
              </h2>
              <p className="text-xl text-paper/70 font-sans leading-relaxed mb-12 max-w-2xl">
                Commercial inspections are about more than identifying issues — they are about helping you better understand the property, the level of visible risk, and the questions that may need to be answered before moving forward.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-4 bg-accent text-paper px-10 py-5 font-sans font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-paper hover:text-ink transition-all duration-300"
                >
                  <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                  Request a Quote
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 border border-paper/20 font-sans font-bold text-[10px] tracking-[0.2em] uppercase hover:border-paper transition-colors"
                >
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
