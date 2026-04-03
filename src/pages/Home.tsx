import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  MoveUpRight, 
  Plus, 
  CloudRain, 
  Building, 
  Droplet, 
  Zap, 
  Thermometer, 
  Layout, 
  DoorOpen, 
  Layers,
  Instagram
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { SectionMarker } from "../components/SectionMarker";

interface ServiceChapterProps {
  service: any;
  index: number;
}

const ServiceChapter: React.FC<ServiceChapterProps> = ({ service, index }) => {
  const containerRef = useRef<HTMLElement>(null);
  const stickyTop = 160 + index * 64;

  // 1. Outgoing Progress: Tracks when this chapter is being covered by the next one.
  const { scrollYProgress: outgoingProgress } = useScroll({
    target: containerRef,
    offset: [`start ${stickyTop}px`, `start ${stickyTop - 100}vh`],
  });

  // 2. Incoming Progress: Tracks when this chapter is rising into its sticky position.
  const { scrollYProgress: incomingProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `start ${stickyTop}px`],
  });

  // Premium, restrained spring for smooth editorial motion
  const springConfig = {
    stiffness: 60,
    damping: 28,
    mass: 1,
    restDelta: 0.001,
  };

  const smoothOutgoing = useSpring(outgoingProgress, springConfig);
  const smoothIncoming = useSpring(incomingProgress, springConfig);

  // Outgoing transformations (Parked state)
  const scale = useTransform(smoothOutgoing, [0, 0.5], [1, 0.96]);
  const opacity = useTransform(smoothOutgoing, [0, 0.5], [1, 0.8]);

  // Title text color transition for parked state
  const parkedTitleColor = useTransform(
    smoothOutgoing,
    [0, 0.5],
    ["#2B2117", "#D2CFC9"]
  );

  // Incoming transformation (smooth rise)
  const yOffset = useTransform(smoothIncoming, [0, 1], [100, 0]);

  return (
    <section
      ref={containerRef}
      className="sticky min-h-screen bg-paper border-t border-ink/10 flex flex-col overflow-hidden px-6 md:px-12"
      style={{
        zIndex: 20 + index,
        top: `${stickyTop}px`,
      }}
    >
      <motion.div
        style={{ scale, opacity, y: yOffset }}
        className="pt-6 pb-10 max-w-[1800px] mx-auto w-full flex flex-col gap-10 origin-top"
      >
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 md:gap-x-20 gap-y-12 items-start">
          {/* Left Column: Title, Subline, CTA, Overview */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col">
            <motion.h2 className="text-5xl md:text-[clamp(3rem,6.2vw,6.8rem)] font-display leading-[0.85] tracking-tighter uppercase md:whitespace-nowrap">
              <span className="mr-4 text-[#D2CFC9]">{service.number}.</span>
              <motion.span style={{ color: parkedTitleColor }}>
                {service.title}
              </motion.span>
            </motion.h2>

            <p className="mt-6 text-accent font-display text-xs md:text-sm tracking-[0.2em] uppercase">
              {service.subline}
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mt-10">
              {service.ctas.map((cta: any, cIdx: number) => (
                <Link
                  key={cIdx}
                  to={service.ctaLinks[cIdx]}
                  className={`group flex items-center gap-4 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    cIdx === 0
                      ? "bg-ink text-paper hover:bg-accent"
                      : "border border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  {cta}
                  <MoveUpRight
                    size={12}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>
              ))}
            </div>

            {/* Overview */}
            <div className="mt-12">
              <p className="text-lg md:text-xl text-ink/70 font-sans leading-relaxed max-w-2xl">
                {service.overview}
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-end md:pt-20">
            <div className="aspect-[16/9] md:aspect-[4/3] w-full bg-ink/5 overflow-hidden relative group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>

        {/* Supporting Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-20 mt-4">
          {service.points.map((point: any, pIdx: number) => (
            <div key={pIdx} className="flex flex-col gap-3 border-t border-ink/10 pt-6">
              <span className="text-[10px] font-mono text-ink/40 uppercase tracking-wider">
                0{pIdx + 1}. {point.label}
              </span>
              <p className="text-sm md:text-base text-ink/80 font-sans leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visual spacer for stacking effect */}
      <div className="h-20 bg-paper"></div>
    </section>
  );
};

export const Home = () => {
  const services = [
    {
      number: "01",
      title: "Residential Inspections",
      subline: "Detached Homes | Townhomes | Condominiums & Apartments",
      overview:
        "We provide clear, practical residential inspections to help buyers, sellers, and property owners better understand a home’s visible and accessible condition. Whether you are purchasing, preparing to list, or reviewing a newer home before a warranty deadline, our goal is to help you move forward with greater clarity.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      points: [
        { label: "Pre-Purchase", text: "Clearer insight before you buy." },
        { label: "Pre-Listing", text: "Identify concerns before going to market." },
        { label: "New Home Warranty", text: "Review visible defects before key deadlines." },
      ],
      ctas: ["Explore Residential Inspections", "See Pricing"],
      ctaLinks: ["/services/residential", "/pricing"],
    },
    {
      number: "02",
      title: "Commercial Inspections",
      subline: "Retail | Office | Restaurant | Mixed-Use",
      overview:
        "We provide commercial inspections to help clients better understand the visible condition of a property before purchase, lease, ownership planning, or further due diligence. Our approach is practical, clear, and focused on major systems, maintenance concerns, and the next questions worth asking.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      points: [
        { label: "Building Envelope", text: "Visible exterior and shell condition." },
        { label: "Major Systems", text: "HVAC, plumbing, electrical, and related observations." },
        { label: "Decision Support", text: "Practical context for ownership and next steps." },
      ],
      ctas: ["Explore Commercial Inspections", "Request a Quote"],
      ctaLinks: ["/services/commercial", "/contact"],
    },
    {
      number: "03",
      title: "Building Consulting",
      subline: "Pre-Renovation | Repair Review | Maintenance Planning",
      overview:
        "Not every situation begins with a full inspection. We provide building consulting for clients who need practical guidance on visible building concerns, repair priorities, renovation planning, or next steps. Grounded in hands-on construction experience, this service is designed to help clients move forward with clearer direction.",
      image:
        "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1200&auto=format&fit=crop",
      points: [
        { label: "Visible Concerns", text: "Review building issues in practical terms." },
        { label: "Repair Priorities", text: "Understand what may need attention first." },
        { label: "Next-Step Guidance", text: "Move forward with clearer direction." },
      ],
      ctas: ["Explore Building Consulting", "Request a Quote"],
      ctaLinks: ["/services/consulting", "/contact"],
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      id: "01",
      question: "What areas do you serve in British Columbia?",
      answer: "We provide inspection and consulting services throughout Vancouver and the Lower Mainland, including North Vancouver, West Vancouver, Burnaby, Coquitlam, Port Moody, Richmond, Surrey, Langley, and Delta. For projects outside these areas, please feel free to contact us to discuss availability.",
    },
    {
      id: "02",
      question: "Will this help me make a purchase or sale decision?",
      answer: "Yes. The goal of the inspection is to help you better understand the property’s current condition so you can make a more informed decision. For buyers, that may mean identifying visible deficiencies, maintenance concerns, or items that deserve further review. For sellers, it can mean gaining clearer insight before listing and reducing surprises during the transaction.",
    },
    {
      id: "03",
      question: "What exactly will I receive after the inspection?",
      answer: "You will receive a clear, organized report with findings, observations, and supporting photos. The report is designed to help you better understand the property, highlight visible concerns, and identify areas that may warrant maintenance, repair, or further review.",
    },
    {
      id: "04",
      question: "How long does it take?",
      answer: "Inspection time can vary depending on the size, type, and condition of the property. Smaller condo units may take less time, while detached homes and commercial spaces can take longer. The goal is not to rush the process, but to allow enough time for a careful and practical inspection.",
    },
    {
      id: "05",
      question: "Do you inspect condos and townhomes differently?",
      answer: "Yes. The inspection approach can vary depending on the type of property, access, and whether certain components are part of a private unit or shared/common property. Condo and townhome inspections are often more focused on the unit itself and the systems or components associated with it, while detached homes typically involve a broader range of exterior and structural elements.",
    },
    {
      id: "06",
      question: "What happens if issues are found?",
      answer: "Finding issues does not automatically mean a deal should stop. The purpose of the inspection is to help you understand the condition of the property more clearly. If visible concerns are found, the report can help you better understand their significance and think through possible next steps, whether that means maintenance, repair planning, further review, or discussion with the other party.",
    },
    {
      id: "07",
      question: "Do you provide same-day or prompt reporting?",
      answer: "Report timing can vary depending on the property and scope of service, but clear and timely reporting is an important part of the inspection process. Our goal is to provide reporting as promptly as possible without compromising clarity or usefulness.",
    },
    {
      id: "08",
      question: "Do you offer thermal imaging or added tools?",
      answer: "Where appropriate, thermal imaging may be used as a supplementary tool during the inspection process. It can help identify areas that may warrant closer attention or further review. Depending on the property and situation, other tools may also be used to support the inspection where appropriate.",
    },
    {
      id: "09",
      question: "Can this help sellers before listing?",
      answer: "Yes. A pre-listing inspection can help sellers identify issues early, better understand the property’s current condition, and reduce surprises before the property goes to market. It can also help sellers prepare more confidently for the next stage of the sales process.",
    },
  ];

  const whatWeLookAt = [
    {
      label: "Roofing & drainage",
      icon: CloudRain,
      description: "Visible roof coverings and drainage systems where accessible."
    },
    {
      label: "Exterior & structure",
      icon: Building,
      description: "Exterior finishes and visible structural components."
    },
    {
      label: "Plumbing systems",
      icon: Droplet,
      description: "Fixtures and visible plumbing components within the home."
    },
    {
      label: "Electrical systems",
      icon: Zap,
      description: "Panels, wiring, and representative electrical components."
    },
    {
      label: "Heating & cooling",
      icon: Thermometer,
      description: "Primary heating and cooling systems serving the home."
    },
    {
      label: "Interior areas",
      icon: Layout,
      description: "Interior finishes and general visible condition."
    },
    {
      label: "Doors, windows & safety",
      icon: DoorOpen,
      description: "Doors, windows, stairs, and railings."
    },
    {
      label: "Attic / crawlspace",
      icon: Layers,
      description: "Accessible attic or crawlspace areas where present."
    }
  ];

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollParam = params.get("scroll");
    if (scrollParam === "services") {
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (scrollParam === "contact") {
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.search]);

  return (
    <div className="w-full bg-paper text-ink">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-ink"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative h-full w-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-32">
          <div className="max-w-[1800px] mx-auto w-full animate-fade-in-up">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tight mb-8 text-paper uppercase">
                At the first step of <br /> your next chapter.
              </h1>

              <p className="text-lg md:text-xl font-sans font-medium text-paper/80 mb-12 max-w-2xl leading-relaxed">
                Residential and commercial inspections with practical insight, clear reporting, and the information you need to move forward with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex justify-center items-center px-10 py-5 bg-accent text-paper text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-300"
                >
                  Book an Inspection
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex justify-center items-center px-10 py-5 border border-paper/30 text-paper text-[11px] font-bold uppercase tracking-[0.2em] hover:border-paper transition-all duration-300"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-12 hidden md:block">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50 vertical-text">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-paper/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 md:px-12 bg-paper">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-7">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 mb-10">
              <SectionMarker /> About us
            </span>
            <h2 className="text-4xl md:text-heading-base font-display mb-12 text-ink leading-tight tracking-tight uppercase">
              Your New Chapter Starts <br /> on Solid Ground
            </h2>
            <div className="space-y-8 text-ink/80 font-sans text-xl leading-relaxed max-w-3xl">
              <p>
                New Chapter Inspection & Consulting was built around a simple idea:
                every property journey deserves a strong first step. Whether you are
                purchasing a home, preparing to sell, or evaluating a commercial space,
                our role is to provide clear observations, practical context, and the
                information you need to make a sound decision.
              </p>
              <p>
                Led by Jake Choi, a BC licensed inspector, Red Seal carpenter, and
                former general contractor with more than 10 years of construction
                experience, New Chapter provides practical building knowledge, careful
                observation, and straightforward communication to help clients better
                understand the property and move forward with confidence.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 md:pt-40 flex md:justify-end">
            <Link
              to="/about"
              className="group flex items-center gap-6 bg-ink text-paper px-12 py-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300"
            >
              Read more about us
              <MoveUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div id="services" className="relative">
        {/* Persistent Section Label */}
        <div className="sticky top-[80px] z-[10] bg-paper px-6 md:px-12">
          <div className="max-w-[1800px] mx-auto w-full py-10">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40">
              <SectionMarker /> Our Services
            </span>
          </div>
        </div>

        {services.map((service, index) => (
          <ServiceChapter key={service.number} service={service} index={index} />
        ))}

        {/* Bottom spacer */}
        <div className="h-[10vh]"></div>
      </div>

      {/* What We Look At Section */}
      <section className="pt-20 pb-40 px-6 md:px-12 bg-paper border-t border-ink/10">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-32 max-w-4xl">
            <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 font-sans mb-8">
              <SectionMarker /> What We Look At
            </span>
            <p className="text-ink/70 font-sans text-xl md:text-3xl leading-relaxed max-w-3xl">
              Our inspections focus on the home’s visible and accessible systems and components, providing a practical overview of the property’s condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16 md:gap-y-24">
            {whatWeLookAt.map((item, idx) => (
              <motion.div 
                key={idx}
                className="group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
              >
                <div className="flex flex-col gap-6">
                  <div className="text-accent/30 group-hover:text-accent transition-all duration-500 transform group-hover:scale-110 origin-left">
                    <item.icon size={32} strokeWidth={1} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-display text-ink uppercase tracking-tight">
                      {item.label}
                    </h3>
                    <div className="h-16 overflow-hidden">
                      <p className="text-ink/40 font-sans text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-ink py-40 px-6 md:px-12 text-paper">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-20 md:gap-32">
          <div className="md:w-2/5">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-paper/40 mb-10">
              <SectionMarker /> FAQ
            </span>
            <h2 className="text-4xl md:text-heading-base font-display leading-tight tracking-tight mb-8 uppercase">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-paper/60 font-sans text-lg leading-relaxed max-w-sm">
              Clear answers to some of the questions clients most often ask before booking an inspection or consulting service.
            </p>
          </div>
          <div className="md:w-3/5 space-y-0">
            {faqs.map((item, idx) => (
              <div 
                key={item.id} 
                className="border-b border-paper/10 py-12 cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-8 md:gap-12">
                    <span className="text-[10px] font-mono opacity-30">/ {item.id}</span>
                    <h3 className={`text-2xl md:text-3xl font-display uppercase tracking-tight transition-all duration-500 ${openFaq === idx ? 'text-accent pl-6' : 'group-hover:text-accent group-hover:pl-6'}`}>
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`transition-colors duration-500 ${openFaq === idx ? 'text-accent' : 'text-paper/30 group-hover:text-accent'}`}
                  >
                    <Plus size={24} strokeWidth={1} />
                  </motion.div>
                </div>
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: openFaq === idx ? "auto" : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pl-16 md:pl-24 pt-6 text-paper/50 max-w-xl font-sans text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-12 bg-paper border-t border-ink/5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans mb-10">
              <SectionMarker /> Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tight mb-12 uppercase">
              Start your <br />
              <span className="text-accent">New Chapter.</span>
            </h2>
            <p className="text-xl text-ink/60 font-sans leading-relaxed max-w-md mb-16">
              Ready to move forward? Contact us to schedule an inspection or ask a question about the process.
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30">Contact Details</p>
                <div className="space-y-2">
                  <a href="mailto:info@newchapterinspectbc.com" className="block text-xl md:text-2xl font-display hover:text-accent transition-colors">info@newchapterinspectbc.com</a>
                  <a href="tel:16725330062" className="block text-xl md:text-2xl font-display hover:text-accent transition-colors">1.672.533.0062</a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30">Location</p>
                <p className="text-xl md:text-2xl font-display">Vancouver, BC</p>
              </div>

              <div className="pt-6">
                <a 
                  href="https://instagram.com/newchapterinspectbc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-paper transition-all duration-500">
                    <Instagram size={20} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">@newchapterinspectbc</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-sm border border-ink/5 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane"
                    className="w-full bg-transparent border-b border-ink/10 py-3 px-1 focus:border-accent outline-none transition-colors font-sans text-lg placeholder:text-ink/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full bg-transparent border-b border-ink/10 py-3 px-1 focus:border-accent outline-none transition-colors font-sans text-lg placeholder:text-ink/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com"
                  className="w-full bg-transparent border-b border-ink/10 py-3 px-1 focus:border-accent outline-none transition-colors font-sans text-lg placeholder:text-ink/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 ml-1">Service Required</label>
                <select className="w-full bg-transparent border-b border-ink/10 py-3 px-1 focus:border-accent outline-none transition-colors font-sans text-lg text-ink/60 appearance-none cursor-pointer">
                  <option value="">Select a service</option>
                  <option value="residential">Residential Inspection</option>
                  <option value="commercial">Commercial Inspection</option>
                  <option value="consulting">Building Consulting</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 ml-1">Property Details & Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about the property or your specific questions..."
                  className="w-full bg-transparent border-b border-ink/10 py-3 px-1 focus:border-accent outline-none transition-colors font-sans text-lg placeholder:text-ink/20 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-ink text-paper py-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 group flex items-center justify-center gap-4 mt-4"
              >
                Send Message
                <MoveUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};