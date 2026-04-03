import React from "react";
import { Logo } from "./Logo";

interface SectionMarkerProps {
  label: string;
  className?: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-4 text-[#db4b2b] ${className}`}>
      <div className="flex items-center justify-center">
        <Logo className="w-[30px] h-[30px] animate-spin-slow" />
      </div>
      <span className="text-[30px] font-black tracking-[0.3em] leading-none uppercase">
        {label}
      </span>
    </div>
  );
};
