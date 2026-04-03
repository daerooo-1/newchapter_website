import React from "react";
import { Logo } from "./Logo";

interface SectionMarkerProps {
  label: string;
  className?: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-5 text-[#db4b2b] ${className}`}>
      <div className="flex items-center justify-center">
        <Logo className="w-7 h-7 animate-spin-slow" />
      </div>
      <span className="text-[15px] md:text-[17px] font-black tracking-[0.5em] uppercase">
        {label}
      </span>
      <div className="h-[1px] w-16 bg-current opacity-30"></div>
    </div>
  );
};
