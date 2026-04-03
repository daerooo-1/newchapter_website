import React from "react";
import { Logo } from "./Logo";

interface SectionMarkerProps {
  label: string;
  className?: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-6 text-[#db4b2b] ${className}`}>
      <div className="flex items-center justify-center">
        <Logo className="w-10 h-10 animate-spin-slow" />
      </div>
      <span className="text-[40px] font-black tracking-[0.4em] leading-none uppercase">
        {label}
      </span>
    </div>
  );
};
