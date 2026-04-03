import React from "react";
import { Logo } from "./Logo";

interface SectionMarkerProps {
  label: string;
  className?: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-10 text-[#db4b2b] ${className}`}>
      <div className="flex items-center justify-center">
        <Logo className="w-14 h-14 animate-spin-slow" />
      </div>
      <span className="text-[30px] md:text-[34px] font-black tracking-[0.5em] uppercase">
        {label}
      </span>
      <div className="h-[2px] w-32 bg-current opacity-30"></div>
    </div>
  );
};
