import React from "react";
import { motion } from "motion/react";
import { Plus, Check, Info, ArrowRight, Home, Building2, Building, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SectionMarker } from "../components/SectionMarker";

export const ResidentialInspections = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-paper min-h-screen font-sans text-ink">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 md:px-10 border-b border-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-sans font-medium text-[13px] tracking-wide uppercase mb-6 block">
                Residential Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-display leading-[1.1] tracking-tight uppercase mb-8 max-w-4xl">
                Residential inspections for every stage <br className="hidden lg:block" /> of your property journey
              </h1>
              <p className="text-lg md:text-xl text-ink/60 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                We provide clear, practical inspections for detached homes, townhomes, and condo units — helping you better understand the property and move forward with confidence.
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
                  onClick={() => navigate('/pricing')}
                  className="px-10 py-5 border border-ink/20 font-sans font-medium text-[13px] tracking-wide uppercase hover:border-ink transition-colors"
                >
                  See Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <SectionMarker className="mb-8 justify-start" />
            <p className="text-2xl md:text-4xl font-display leading-tight uppercase mb-8">
              We know a residential inspection is one of the most important early steps in a property journey. Our goal is to help you better understand the visible and accessible condition of a home through practical observations, clear reporting, and straightforward communication.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-20">
            <p className="text-lg text-ink/60 leading-relaxed font-sans italic border-l-2 border-accent/20 pl-8">
              To make the process easier to navigate, we organize our residential services in two ways: by inspection purpose and by property type.
            </p>
          </div>
        </div>
      </section>

      {/* 4. QUICK NAVIGATION */}
      <section className="sticky top-20 z-40 bg-paper/80 backdrop-blur-md border-y border-ink/5 py-6 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-ink/40">Explore by Purpose</span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Pre-Purchase', 'Pre-Listing', 'Warranty'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection('purpose')}
                  className="px-4 py-2 bg-white border border-ink/5 rounded-full text-[11px] font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="h-px w-12 bg-ink/10 hidden md:block"></div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <span className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-ink/40">Explore by Property</span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Detached', 'Townhomes', 'Condos'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 bg-white border border-ink/5 rounded-full text-[11px] font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BY INSPECTION PURPOSE */}
      <section id="purpose" className="py-32 px-6 md:px-10 bg-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-16">
            <SectionMarker className="mb-6 justify-start" />
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">By Inspection Purpose</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Purchase Inspections",
                body: "We provide pre-purchase inspections for buyers who want a clearer understanding of the property before closing. These inspections help identify visible deficiencies, maintenance concerns, and items that may warrant further review so you can make a more informed decision before moving forward."
              },
              {
                title: "Pre-Listing Inspections",
                body: "We provide pre-listing inspections for sellers who want to understand the property’s current condition before going to market. These inspections can help uncover issues early, support a smoother sales process, and give both sellers and prospective buyers greater clarity."
              },
              {
                title: "New Home Warranty Inspections",
                body: "We provide new home warranty inspections for newer homes within the applicable warranty period. These inspections focus on identifying visible construction defects, incomplete items, and warranty-related concerns before key deadlines."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-paper p-10 border border-ink/5 flex flex-col h-full hover:shadow-soft transition-all duration-500"
              >
                <h3 className="text-2xl font-display text-ink mb-6 uppercase leading-tight">{card.title}</h3>
                <p className="text-ink/60 font-sans text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BY PROPERTY TYPE */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto">
          <div className="mb-24">
            <SectionMarker className="mb-6 justify-start" />
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">By Property Type</h2>
          </div>

          {/* Detached Homes */}
          <div id="detached" className="mb-40 scroll-mt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="sticky top-40">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-ink text-paper p-4">
                      <Home size={32} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display uppercase leading-none">Detached <br /> Homes</h3>
                  </div>
                  <p className="text-lg text-ink/70 leading-relaxed mb-10 font-sans">
                    We provide detached home inspections to help buyers, sellers, and homeowners gain a clearer understanding of the property’s visible and accessible condition before an important decision is made. Because detached homes often include a broader range of exterior and structural elements, this type of inspection typically offers the most complete overall picture of the home as a whole.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => navigate('/contact')} className="bg-accent text-paper px-8 py-4 font-display font-bold text-[10px] tracking-widest uppercase hover:bg-ink transition-colors">Request a Quote</button>
                    <button onClick={() => navigate('/pricing')} className="border border-ink/10 px-8 py-4 font-display font-bold text-[10px] tracking-widest uppercase hover:border-ink transition-colors">See Pricing</button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-ink/5 p-10 md:p-16">
                  <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink mb-10 border-b border-ink/10 pb-4">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                    {[
                      "Roofing and roof drainage",
                      "Exterior walls and trim",
                      "Visible structural components",
                      "Plumbing fixtures and systems",
                      "Electrical service and panels",
                      "Heating and cooling systems",
                      "Interior walls and ceilings",
                      "Stairs and safety features",
                      "Garage or carport areas",
                      "Attic or crawlspace areas",
                      "Fireplaces and chimneys"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Check size={14} className="text-accent mt-1 shrink-0" />
                        <span className="text-sm text-ink/80 font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-ink/10 pt-10">
                    <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink mb-4">What You Can Expect</h4>
                    <p className="text-ink/60 font-sans text-sm leading-relaxed italic">
                      After the inspection, we provide a clear report outlining the inspected items, visible concerns, and observations that may warrant maintenance, repair, or further review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Townhomes */}
          <div id="townhomes" className="mb-40 scroll-mt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 lg:order-2">
                <div className="sticky top-40">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-ink text-paper p-4">
                      <Building2 size={32} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display uppercase leading-none">Townhomes</h3>
                  </div>
                  <p className="text-lg text-ink/70 leading-relaxed mb-10 font-sans">
                    We provide townhome inspections to help clients understand the visible condition of the unit and the systems associated with it before buying, selling, or planning next steps. In many cases, a townhome inspection is similar to a detached home inspection in terms of the interior systems reviewed, but the overall scope can be influenced by ownership boundaries, shared building components, and access.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => navigate('/contact')} className="bg-accent text-paper px-8 py-4 font-display font-bold text-[10px] tracking-widest uppercase hover:bg-ink transition-colors">Request a Quote</button>
                    <button onClick={() => navigate('/pricing')} className="border border-ink/10 px-8 py-4 font-display font-bold text-[10px] tracking-widest uppercase hover:border-ink transition-colors">See Pricing</button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 lg:order-1">
                <div className="bg-ink/5 p-10 md:p-16">
                  <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink mb-10 border-b border-ink/10 pb-4">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                    {[
                      "Interior walls and finishes",
                      "Kitchens and bathrooms",
                      "Unit electrical components",
                      "Unit heating and cooling",
                      "Stairs and safety features",
                      "Fireplaces, where applicable",
                      "Attached decks or balconies",
                      "Visible exterior elements"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Check size={14} className="text-accent mt-1 shrink-0" />
                        <span className="text-sm text-ink/80 font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/50 p-6 border-l-2 border-accent mb-10">
                    <h5 className="font-display font-bold text-[10px] tracking-widest uppercase text-accent mb-2">Scope Note</h5>
                    <p className="text-xs text-ink/60 font-sans leading-relaxed">
                      Because townhomes may include shared or common components, some exterior or building-wide elements may fall outside the standard inspection scope unless specifically arranged in advance.
                    </p>
                  </div>
                  <div className="border-t border-ink/10 pt-10">
                    <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink mb-4">What You Can Expect</h4>
                    <p className="text-ink/60 font-sans text-sm leading-relaxed italic">
                      We help you better understand the current condition of the unit and identify visible issues that may deserve follow-up with the seller, strata, or appropriate specialists where needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Condos */}
          <div id="condos" className="scroll-mt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="sticky top-40">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-ink text-paper p-4">
                      <Building size={32} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display uppercase leading-none">Condos & <br /> Apartments</h3>
                  </div>
                  <p className="text-lg text-ink/70 leading-relaxed mb-10 font-sans">
                    We provide condo and apartment inspections focused on the visible condition of the unit itself. Because these properties are part of a larger building, the inspection is generally centered on the interior systems, finishes, and components serving the suite rather than the building as a whole.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => navigate('/contact')} className="bg-accent text-paper px-8 py-4 font-display font-bold text-[10px] tracking-widest uppercase hover:bg-ink transition-colors">Request a Quote</button>
                    <button onClick={() => navigate('/pricing')} className="border border-ink/10 px-8 py-4 font-display font-bold text-[10px] tracking-widest uppercase hover:border-ink transition-colors">See Pricing</button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-ink/5 p-10 md:p-16">
                  <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink mb-10 border-b border-ink/10 pb-4">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                    {[
                      "Interior walls and ceilings",
                      "Kitchens and bathrooms",
                      "Unit plumbing systems",
                      "Unit electrical components",
                      "Unit heating and cooling",
                      "Ventilation components",
                      "Interior finishes and wear",
                      "Balconies or associated elements"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Check size={14} className="text-accent mt-1 shrink-0" />
                        <span className="text-sm text-ink/80 font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/50 p-6 border-l-2 border-accent mb-10">
                    <h5 className="font-display font-bold text-[10px] tracking-widest uppercase text-accent mb-2">Scope Note</h5>
                    <p className="text-xs text-ink/60 font-sans leading-relaxed">
                      Building-wide common areas and shared systems are generally outside the standard scope unless access and arrangements are made in advance.
                    </p>
                  </div>
                  <div className="border-t border-ink/10 pt-10">
                    <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink mb-4">What You Can Expect</h4>
                    <p className="text-ink/60 font-sans text-sm leading-relaxed italic">
                      We help you better understand the condition of the suite you are actually buying, selling, or occupying. Our report highlights visible concerns within the unit and points out areas that may require maintenance or further review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ADDITIONAL TOOLS (Utility Block) */}
      <section className="py-24 px-6 md:px-10 bg-ink text-paper">
        <div className="max-w-[2000px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="bg-accent p-6 shrink-0">
            <Thermometer size={40} />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-accent mb-4">Additional Tools: Thermal Imaging</h4>
            <p className="text-paper/70 font-sans text-base leading-relaxed">
              Where appropriate, we may use thermal imaging as a supplementary tool during the inspection process. It can help identify temperature anomalies that may point to areas requiring closer attention or further review. Its usefulness depends on site conditions, access, and the nature of the materials and systems being inspected.
            </p>
          </div>
        </div>
      </section>

      {/* 7.5 GENERAL SCOPE (Subdued Note) */}
      <section className="py-16 px-6 md:px-10 border-t border-ink/5">
        <div className="max-w-[2000px] mx-auto">
          <div className="max-w-3xl">
            <h4 className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-ink/40 mb-4">General Scope</h4>
            <p className="text-ink/50 font-sans text-sm leading-relaxed italic">
              Our inspections focus on the home’s visible and accessible systems and components, with exact scope depending on the type of property, access at the time of inspection, and the terms outlined in the inspection agreement.
            </p>
          </div>
        </div>
      </section>

      {/* 8. CLOSING SECTION */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[2000px] mx-auto bg-paper border border-ink/10 p-12 md:p-24 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <SectionMarker className="mb-8" />
            <h2 className="text-4xl md:text-6xl font-display text-ink leading-[0.9] uppercase mb-10 max-w-3xl mx-auto">
              A practical, clear approach to residential inspections
            </h2>
            <p className="text-xl text-ink/60 font-sans leading-relaxed mb-12 max-w-2xl mx-auto">
              Every home is different, and every client comes to the inspection with a different purpose. We approach each inspection with careful observation, practical insight, and straightforward communication so you can better understand the home as it stands today and make informed decisions about what comes next.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => navigate('/contact')}
                className="group flex items-center gap-4 bg-accent text-paper px-10 py-5 font-sans font-medium text-[13px] tracking-wide uppercase hover:bg-ink transition-all duration-300"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                Request a Quote
              </button>
              <button 
                onClick={() => navigate('/pricing')}
                className="px-10 py-5 border border-ink/20 font-sans font-medium text-[13px] tracking-wide uppercase hover:border-ink transition-colors"
              >
                See Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
