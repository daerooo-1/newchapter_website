import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#2B2117] text-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grain"></div>
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <h3 className="font-display text-[40px] leading-[26px] mb-4 font-normal tracking-tight text-accent">
              NewChapter<br/>
              <span className="text-white text-[19px] leading-[22px] tracking-[0.3em] uppercase font-sans font-light opacity-80">Inspection & Consulting</span>
            </h3>
            <p className="text-sm text-primary/70 leading-relaxed max-w-sm font-sans">
              Your trusted partner in the first step of your property journey. 
              Built on a foundation of structural expertise and technical depth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-accent font-sans">Navigation</h4>
            <ul className="text-sm space-y-4 text-primary/70 font-sans">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/?scroll=contact" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-accent font-sans">Get in Touch</h4>
            <div className="space-y-4 mb-10">
                <p className="text-sm text-primary/70 font-sans">Vancouver, BC</p>
                <a href="mailto:info@newchapterinspectbc.com" className="block text-sm text-primary/70 hover:text-white transition-colors duration-300 cursor-pointer font-sans">info@newchapterinspectbc.com</a>
                <a href="tel:16725330062" className="block text-sm text-primary/70 hover:text-white transition-colors duration-300 cursor-pointer font-sans">1.672.533.0062</a>
                <a href="https://instagram.com/newchapterinspectbc" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary/70 hover:text-white transition-colors duration-300 cursor-pointer font-sans">@newchapterinspectbc</a>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-[11px] text-primary/50 leading-relaxed space-y-4 font-sans max-w-5xl">
            <p className="font-bold text-primary/70 uppercase tracking-[0.2em] text-[9px]">Compliance & Standards</p>
            <p>
              All inspections are performed in accordance with the applicable <span className="text-primary/90 font-medium">Standards of Practice</span>. 
              To ensure a completely unbiased evaluation, New Chapter Inspection & Consulting operates 
              as an independent inspection firm. We do not provide repair, renovation, or construction 
              services on any inspected properties.
            </p>
            <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5 mt-8">
              <p className="text-primary/30">© 2026 New Chapter Inspection & Consulting. All rights reserved.</p>
              <div className="flex gap-6 text-primary/30">
                <Link to="/privacy" className="hover:text-primary/60 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-primary/60 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};