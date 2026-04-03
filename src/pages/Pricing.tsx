import React, { useRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { motion } from "motion/react";

export const Pricing = () => {
  const detailedPricingRef = useRef<HTMLDivElement>(null);

  const scrollToDetailed = () => {
    detailedPricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tiers = [
    {
      name: "Residential Inspections",
      price: "$425",
      priceDetail: "starting from",
      features: ["Condos & Apartments", "Townhouses", "Detached Homes", "New Construction", "Digital Report (24hrs)"],
      showReadMore: true,
    },
    {
      name: "Commercial Inspections",
      price: "$700",
      priceDetail: "starting from",
      features: ["Retail Spaces", "Office Buildings", "Warehouses", "Light Industrial"],
    },
    {
      name: "Pre-Renovation Consulting",
      price: "$350",
      features: ["Feasibility Analysis", "Risk Assessment", "Construction Advice", "Problem Diagnosis", "Renovation Planning"],
    }
  ];

  const detailedPricing = [
    {
      type: "Condo / Apartment",
      rows: [
        { range: "Under 1000 sf", price: "$425" },
        { range: "Between 1001 and 2000 sf", price: "$475" },
        { range: "Between 2001 and 3000 sf", price: "$525" },
        { range: "Condo over 4000 sf", price: "$600" },
      ]
    },
    {
      type: "Townhouse",
      rows: [
        { range: "Townhouse under 1500 sf", price: "$525" },
        { range: "Between 1501 and 2000 sf", price: "$575" },
        { range: "Between 2001 and 3000 sf", price: "$625" },
        { range: "Between 3001 and 4000 sf", price: "$675" },
        { range: "Between 4001 and 5000 sf", price: "$750" },
      ]
    },
    {
      type: "Detached Home",
      rows: [
        { range: "Homes under 2000 sf", price: "$575" },
        { range: "Between 2001 and 3000 sf", price: "$625" },
        { range: "Between 3001 and 4000 sf", price: "$675" },
        { range: "Between 4001 and 5000 sf", price: "$750" },
      ]
    }
  ];

  return (
    <div className="bg-primary min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
             <span className="text-xs font-bold uppercase tracking-widest mb-4 block flex items-center justify-center gap-2 opacity-100 text-accent font-sans">
                <Logo className="w-3 h-3 animate-spin-slow" /> Investment
             </span>
            <h1 className="text-5xl font-serif font-medium mb-6 text-wood-900">Transparent Pricing</h1>
            <p className="text-wood-900/70 text-lg font-sans">Invest in peace of mind.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
            <div 
                key={tier.name} 
                className="group relative p-10 bg-white text-wood-900 min-h-[500px] flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-2xl hover:bg-wood-900 hover:text-primary cursor-default border border-wood-900/5 hover:border-accent"
            >
                <div>
                    <h3 className="text-2xl font-serif font-medium mb-2 group-hover:text-accent transition-colors">{tier.name}</h3>
                    <div className="text-4xl font-light mb-8 opacity-90 flex flex-col items-start gap-1 group-hover:opacity-100 font-sans">
                        <span className="font-medium">{tier.price}</span>
                        {tier.priceDetail && (
                          <span className="text-sm opacity-50 font-normal uppercase tracking-wide">{tier.priceDetail}</span>
                        )}
                    </div>
                    <ul className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm opacity-80 group-hover:opacity-100 transition-opacity font-sans">
                        <Check size={16} className="text-accent shrink-0" /> {feature}
                        </li>
                    ))}
                    </ul>
                    {tier.showReadMore && (
                      <button 
                        onClick={scrollToDetailed}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-accent hover:text-wood-900 group-hover:text-accent transition-colors mb-6"
                      >
                        Read More <ChevronDown size={14} className="animate-bounce" />
                      </button>
                    )}
                </div>
                <Link to="/contact" className="w-full block text-center py-4 border border-wood-900 text-wood-900 text-[10px] uppercase tracking-widest transition-all group-hover:bg-accent group-hover:border-accent group-hover:text-white hover:bg-wood-900 hover:text-white font-sans">
                Request Quote
                </Link>
            </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-sm text-wood-900/60 uppercase tracking-widest font-medium font-sans">
                * Pricing varies based on size, age, and complexity.
            </p>
        </div>

        {/* Detailed Pricing Table */}
        <motion.div 
          ref={detailedPricingRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 pt-20 border-t border-wood-900/10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-wood-900 mb-4 uppercase tracking-tight">Detailed Residential Pricing</h2>
            <p className="text-wood-900/60 font-sans uppercase text-xs tracking-widest">Standard Inspection Fees by Property Type & Size</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {detailedPricing.map((category) => (
              <div key={category.type} className="space-y-6">
                <h3 className="text-xl font-serif font-medium text-accent border-b border-wood-900/10 pb-4 uppercase tracking-wide">
                  {category.type}
                </h3>
                <div className="space-y-4">
                  {category.rows.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-wood-900/5 group">
                      <span className="text-sm text-wood-900/70 font-sans group-hover:text-wood-900 transition-colors">{row.range}</span>
                      <span className="text-sm font-bold text-wood-900 font-sans">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-wood-900 text-primary rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-xl font-serif font-medium mb-2">Need a custom quote?</h4>
              <p className="text-sm opacity-70 font-sans">For properties over 5000 sf, multi-unit buildings, or specialized consulting, please contact us for a detailed proposal.</p>
            </div>
            <Link to="/contact" className="bg-accent text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-wood-900 transition-all font-sans font-bold">
              Contact for Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
