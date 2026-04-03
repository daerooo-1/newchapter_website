import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Plus, Image as ImageIcon, Check, ArrowLeft, Info } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { SectionMarker } from "../components/SectionMarker";

interface ServiceCardProps {
  service: any;
  index: number;
  activeIndex: number | null;
  scrollToCard: (i: number) => void;
  handleContactClick: () => void;
  handleLearnMore: (s: any) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index, 
  activeIndex, 
  scrollToCard, 
  handleContactClick, 
  handleLearnMore 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div 
      ref={containerRef} 
      className="h-[100vh] md:h-[110vh] sticky top-20 service-card-element"
      style={{ zIndex: activeIndex === index ? 50 : 10 + index }}
    >
      <motion.div
        style={{ scale }}
        className="w-full flex flex-col pt-[10vh] md:pt-[12vh] drop-shadow-2xl pointer-events-none"
      >
        <div 
          onClick={() => scrollToCard(index)}
          className={`w-1/3 px-4 py-3 md:py-4 font-display font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase ${service.bgColor} ${service.tabTextColor} border-t border-x border-ink/5 relative z-50 flex items-center justify-center ${service.tabPosition} cursor-pointer hover:brightness-110 transition-all duration-300 pointer-events-auto`}
          style={{ marginBottom: '-1px' }}
          title={`Go to ${service.title}`}
        >
          {service.tab}
        </div>

        <div className={`h-[85vh] md:h-[80vh] ${service.bgColor} shadow-soft border border-ink/5 overflow-hidden flex flex-col md:grid md:grid-cols-[0.7fr_1.3fr] pointer-events-auto relative z-40`}>
          <div className="w-full h-full flex items-start justify-start p-8 md:p-12 pl-8 md:pl-12 pt-16 md:pt-24">
            <div className={`${service.placeholderBg} w-[70%] aspect-[3/4] flex flex-col items-center justify-center gap-3 border border-ink/10`}>
              <ImageIcon size={32} className={`${service.placeholderText} opacity-50`} />
              <span className={`font-display font-bold text-[10px] tracking-widest uppercase ${service.placeholderText} px-2 text-center`}>
                Image Space
              </span>
            </div>
          </div>

          <div className="p-8 md:p-16 pt-16 md:pt-24 flex flex-col justify-start h-full overflow-y-auto custom-scrollbar">
            <h2 className={`text-3xl md:text-5xl font-display ${service.textColor} mb-2 leading-tight uppercase tracking-tight`}>
              {service.title}
            </h2>
            {service.propertyTypes && (
              <p className={`text-[13px] md:text-[15px] font-sans ${service.bodyTextColor} opacity-60 mb-8 tracking-wide`}>
                {service.propertyTypes}
              </p>
            )}
            <p className={`text-lg ${service.bodyTextColor} font-sans leading-relaxed mb-10 max-w-none`}>
              {service.body}
            </p>
            
            {service.phases && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-white/10 pt-10">
                {service.phases.map((phase: any, pIdx: number) => (
                  <div key={pIdx} className="flex flex-col gap-3">
                    <span className={`text-[11px] font-display font-bold tracking-[0.2em] uppercase ${service.textColor}`}>
                      {phase.name}
                    </span>
                    <p className={`text-sm ${service.bodyTextColor} opacity-70 leading-relaxed`}>
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-auto pb-8">
              <button 
                onClick={handleContactClick}
                className={`group flex items-center gap-3 ${service.buttonBg} ${service.buttonText} px-8 py-4 w-fit font-display font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-black/10`}
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                {service.button}
              </button>
              {service.secondaryButton && (
                <button 
                  onClick={() => handleLearnMore(service)}
                  className={`flex items-center gap-3 border border-white/20 hover:bg-white/10 ${service.textColor} px-8 py-4 w-fit font-display font-bold text-xs tracking-widest uppercase transition-colors`}
                >
                  {service.secondaryButton}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Services = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleContactClick = () => {
    navigate("/contact");
  };

  const services = [
    {
      id: "residential",
      tab: "RESIDENTIAL INSPECTIONS",
      title: "RESIDENTIAL INSPECTIONS",
      propertyTypes: "Detached Houses | Duplex | Townhomes | Condos",
      body: "We provide clear, practical residential inspections to help buyers, sellers, and property owners better understand a home’s visible and accessible condition. Whether you are purchasing, preparing to list, or reviewing a newer home before a warranty deadline, our goal is to help you move forward with greater clarity.",
      button: "BOOK THIS INSPECTION",
      secondaryButton: "LEARN MORE",
      phases: [
        { name: "Pre-Purchase", description: "In-depth analysis before you buy." },
        { name: "Pre-Listing", description: "Identify issues before selling." },
        { name: "Maintenance", description: "Keep your home in top shape." }
      ],
      bgColor: "bg-accent",
      textColor: "text-paper",
      bodyTextColor: "text-paper/90",
      tabTextColor: "text-paper/80",
      buttonBg: "bg-ink",
      buttonText: "text-paper",
      tabPosition: "ml-0",
      placeholderBg: "bg-black/10",
      placeholderText: "text-paper/50",
      detailContent: {
        intro: {
          heading: "Precision residential inspections for informed property decisions.",
          body: "A home is more than a structure; it's a significant investment and a place of sanctuary. Our residential inspections provide the technical clarity you need to move forward with confidence, whether you're buying, selling, or maintaining your property."
        },
        core: {
          heading: "Property Types & Expertise",
          items: [
            { title: "Detached Houses", description: "Exhaustive 400+ point inspection covering structural, mechanical, and envelope integrity for standalone properties." },
            { title: "Duplex & Multi-Unit", description: "Technical evaluation of shared systems and structural separation, ensuring both units meet safety and performance standards." },
            { title: "Townhomes", description: "Focused assessment of building envelope and shared structural components, highlighting potential Strata risks and liabilities." },
            { title: "Condos", description: "Interior systems deep-dive combined with a review of common area maintenance records to identify hidden Strata risks." }
          ]
        },
        deliverables: {
          heading: "What to Expect",
          items: [
            "Comprehensive Digital Report with high-resolution imagery",
            "On-site verbal summary of major findings",
            "Thermal imaging for moisture and insulation assessment",
            "Maintenance roadmap for upcoming 5-10 year requirements",
            "Follow-up consultation for any technical questions"
          ]
        },
        advisory: {
          title: "Scope Note",
          body: "Our inspections are non-invasive visual property condition assessments. While we use advanced tools like thermal imaging and moisture meters, we do not perform destructive testing or move heavy furniture/stored items."
        }
      }
    },
    {
      id: "commercial",
      tab: "COMMERCIAL INSPECTIONS",
      title: "Commercial Inspections with Practical Insight",
      propertyTypes: "Office | Retail | Industrial | Multi-Unit Residential",
      body: "We provide commercial building inspections as visual property condition assessments that follow recognized industry practices. Our approach focuses on a thorough evaluation of structural integrity, mechanical systems, and visible maintenance concerns to help you better understand the property.",
      button: "BOOK THIS INSPECTION",
      secondaryButton: "LEARN MORE",
      phases: [
        { name: "Building Envelope", description: "Visual assessment of exterior shell and structural integrity." },
        { name: "Mechanical Systems", description: "Evaluation of HVAC, plumbing, and operational efficiency." },
        { name: "Risk Mitigation", description: "Identifying liabilities and deferred maintenance requirements." }
      ],
      bgColor: "bg-ink",
      textColor: "text-paper",
      bodyTextColor: "text-paper/80",
      tabTextColor: "text-paper/60",
      buttonBg: "bg-accent",
      buttonText: "text-paper",
      tabPosition: "ml-[33.33%]",
      placeholderBg: "bg-white/5",
      placeholderText: "text-paper/30",
      detailContent: {
        intro: {
          heading: "Rigorous property condition assessments for commercial assets.",
          body: "Our commercial building inspections follow widely recognized industry practices, generally consistent with ASTM E2018 guidelines. We provide a thorough evaluation of structural integrity, mechanical systems, and long-term maintenance requirements to protect your commercial investment."
        },
        core: {
          heading: "Asset Classes & Focus Areas",
          items: [
            { title: "Office & Retail", description: "Comprehensive assessments of tenant-occupied spaces, focusing on accessibility, fire safety, and mechanical efficiency." },
            { title: "Industrial", description: "Technical evaluation of heavy-duty structural components, high-capacity electrical systems, and specialized loading infrastructure." },
            { title: "Multi-Unit Residential", description: "In-depth review of shared building systems, envelope performance, and common area maintenance for large-scale residential assets." },
            { title: "Hospitality", description: "Detailed condition reports for hotels and leisure facilities, prioritizing guest safety and operational continuity." }
          ]
        },
        deliverables: {
          heading: "Deliverables",
          items: [
            "ASTM E2018-compliant Property Condition Assessment (PCA)",
            "Immediate and short-term capital expenditure estimates",
            "Evaluation of major building systems (HVAC, Electrical, Plumbing)",
            "Review of site improvements and accessibility",
            "Executive summary for quick decision-making"
          ]
        },
        advisory: {
          title: "Technical Standard",
          body: "Our commercial assessments are baseline PCAs. Specialized engineering reviews (e.g., seismic, environmental Phase I) can be coordinated as part of a larger due diligence team if required."
        }
      }
    },
    {
      id: "consulting",
      tab: "BUILDING CONSULTING",
      title: "Building Consulting & Structural Advisory",
      propertyTypes: "Pre-Renovation | Building Feasibility | Maintenance Solutions",
      body: "Protect your renovation budget and structural integrity with expert technical consulting. Backed by multi-trade construction experience, we evaluate design plans and existing conditions to identify potential structural conflicts and aging system interactions before the first hammer swings.",
      button: "BOOK THIS INSPECTION",
      secondaryButton: "LEARN MORE",
      bgColor: "bg-paper",
      textColor: "text-ink",
      bodyTextColor: "text-ink/70",
      tabTextColor: "text-ink/60",
      buttonBg: "bg-accent",
      buttonText: "text-paper",
      tabPosition: "ml-[66.66%]",
      placeholderBg: "bg-ink/5",
      placeholderText: "text-ink/30",
      detailContent: {
        intro: {
          heading: "Expert technical consulting for complex building projects.",
          body: "Protect your renovation budget and structural integrity with expert technical consulting. Backed by multi-trade construction experience, we evaluate design plans and existing conditions to identify potential structural conflicts and aging system interactions before the first hammer swings."
        },
        core: {
          heading: "Consulting Services",
          items: [
            { title: "Renovation Planning", description: "Technical roadmap for complex renovations, ensuring structural changes are feasible and code-compliant." },
            { title: "Structural Advisory", description: "In-depth analysis of load-bearing walls, foundation integrity, and seismic upgrades for older properties." },
            { title: "System Interaction", description: "Specialized assessment for Vancouver character homes and aging system interactions (Electrical, Plumbing, Envelope)." },
            { title: "Contractor Liaison", description: "Bridging the gap between homeowners and trades with clear technical specifications and performance standards." }
          ]
        },
        deliverables: {
          heading: "Consulting Outcomes",
          items: [
            "Detailed technical feasibility report",
            "Structural conflict identification and mitigation strategies",
            "Construction sequencing and roadmap",
            "Technical specifications for trade bidding",
            "Ongoing project advisory and site reviews"
          ]
        },
        advisory: {
          title: "Advisory Note",
          body: "Consulting services are tailored to specific project needs. While we provide structural advisory, formal engineering stamps must be obtained from a licensed Professional Engineer (P.Eng) where required by local building authorities."
        }
      },
      phases: [
        { name: "Feasibility & Structural Advisory", description: "Technical evaluation of load-bearing structures and design plan feasibility." },
        { name: "Whole-Home System Interaction", description: "Specialized assessment for Vancouver character homes and aging system interactions." },
        { name: "Construction Strategy & Roadmap", description: "Actionable guidance on budget management and construction sequencing." }
      ],
    },
  ];

  useEffect(() => {
    const serviceId = searchParams.get("service");
    if (serviceId) {
      if (serviceId === 'residential') {
        navigate('/services/residential', { replace: true });
        return;
      }
      if (serviceId === 'commercial') {
        navigate('/services/commercial', { replace: true });
        return;
      }
      if (serviceId === 'consulting') {
        navigate('/services/consulting', { replace: true });
        return;
      }
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        setViewMode('detail');
        window.scrollTo(0, 0);
      }
    } else {
      // Redirect to home page services section if no service is selected
      navigate("/?scroll=services", { replace: true });
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (viewMode === 'detail') return;
      const container = document.getElementById("cards-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        if (rect.top > 0) {
          setActiveIndex(null);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewMode]);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    const container = document.getElementById("cards-container");
    const cards = document.getElementsByClassName("service-card-element");

    if (container && cards[index]) {
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const cardOffset = (cards[index] as HTMLElement).offsetTop;
      const stickyOffset = 80; // Matches top-20 (5rem)

      window.scrollTo({
        top: containerTop + cardOffset - stickyOffset,
        behavior: "smooth"
      });
    }
  };

  const handleLearnMore = (service: any) => {
    if (service.id === 'residential') {
      navigate('/services/residential');
      return;
    }
    if (service.id === 'commercial') {
      navigate('/services/commercial');
      return;
    }
    if (service.id === 'consulting') {
      navigate('/services/consulting');
      return;
    }
    setSelectedService(service);
    setViewMode('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (viewMode === 'detail' && selectedService) {
    const content = selectedService.detailContent;

    return (
      <div className="bg-paper min-h-screen font-sans">
        {/* 1. Hero Section */}
        <section className="pt-36 pb-16 px-6 md:px-12 border-b border-ink/5">
          <div className="max-w-7xl mx-auto">
            <motion.button 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setViewMode('list')}
              className="flex items-center gap-2 text-ink/40 hover:text-accent transition-colors mb-12 font-sans font-bold text-[10px] tracking-[0.2em] uppercase"
            >
              <ArrowLeft size={14} /> Back to Services
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-sans font-bold text-[10px] tracking-[0.2em] uppercase mb-8 block">
                  {selectedService.id === 'residential' ? 'Residential' : selectedService.id === 'commercial' ? 'Commercial' : 'Building Consulting'}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-ink leading-[1.1] tracking-tight uppercase">
                  {selectedService.title.split(' ').map((word: string, i: number) => (
                    <React.Fragment key={i}>
                      {word} {i === 1 && <br className="hidden md:block" />}
                    </React.Fragment>
                  ))}
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="bg-ink/5 w-64 aspect-[3/4] flex flex-col items-center justify-center gap-3 border border-ink/10 grayscale hover:grayscale-0 transition-all duration-700">
                  <ImageIcon size={32} className="text-ink/20" />
                  <SectionMarker className="mt-4" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Intro Section */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-5">
              <SectionMarker className="mb-8 justify-start" />
              <h2 className="text-3xl md:text-4xl font-display text-ink leading-tight uppercase">
                {content.intro.heading}
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl text-ink/70 leading-relaxed font-sans font-light">
                {content.intro.body}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Core Content Area (Card Grid) */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-ink/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-ink/10"></div>
              <h3 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink/40">
                {content.core.heading}
              </h3>
              <div className="h-px flex-1 bg-ink/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
              {content.core.items.map((item: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-paper p-8 md:p-10 flex flex-col h-full hover:bg-white transition-colors duration-500"
                >
                  <span className="text-accent font-display font-bold text-[10px] tracking-widest mb-6 block">0{idx + 1}</span>
                  <h4 className="text-xl font-display text-ink mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-ink/60 leading-relaxed font-sans">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Expectations / Deliverables (Checklist Grid) */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h3 className="text-4xl font-display text-ink leading-[0.9] uppercase mb-6">
                {content.deliverables.heading}
              </h3>
              <p className="text-ink/50 font-sans text-sm leading-relaxed">
                Our process is designed for clarity and thoroughness, ensuring you receive actionable data in a format that's easy to understand.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {content.deliverables.items.map((item: string, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 items-start border-b border-ink/5 pb-6"
                  >
                    <div className="mt-1 bg-accent/10 p-1 rounded-full">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span className="text-ink/80 font-sans text-base leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Scope Note / Advisory (Inset Note) */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-accent p-8 md:p-12 shadow-sm flex gap-8 items-start">
              <div className="hidden md:block pt-1">
                <Info size={24} className="text-accent/40" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-accent mb-4">
                  {content.advisory.title}
                </h4>
                <p className="text-ink/60 font-sans text-sm md:text-base leading-relaxed italic">
                  "{content.advisory.body}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Closing CTA */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto bg-ink p-12 md:p-24 text-center relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-paper via-transparent to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <SectionMarker className="mb-8" />
              <h2 className="text-4xl md:text-6xl font-display text-paper leading-[0.9] uppercase mb-10 max-w-3xl mx-auto">
                Ready to move forward with technical clarity?
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={handleContactClick}
                  className="group flex items-center gap-4 bg-accent text-paper px-10 py-5 font-sans font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-ink transition-all duration-300"
                >
                  <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                  Book Your Inspection
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-paper/60 hover:text-paper transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen">
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-accent font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Expertise
          </span>
          <h1 className="text-6xl md:text-8xl font-display text-ink leading-[0.9] tracking-tight mb-8">
            OUR <br /> SERVICES
          </h1>
          <p className="text-xl text-ink/60 max-w-xl font-sans leading-relaxed">
            Professional property inspection and consulting services backed by a decade of construction mastery.
          </p>
        </motion.div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto relative">
        <div id="cards-container" className="flex flex-col gap-0 relative pb-[70vh]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              activeIndex={activeIndex}
              scrollToCard={scrollToCard}
              handleContactClick={handleContactClick}
              handleLearnMore={handleLearnMore}
            />
          ))}
          <div className="h-[100vh] w-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
