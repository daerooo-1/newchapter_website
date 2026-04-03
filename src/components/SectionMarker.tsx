import React from "react";
import { Logo } from "./Logo";

interface SectionMarkerProps {
  label: string;
  className?: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 text-[#db4b2b] ${className}`}>
      <div className="flex items-center">
        <Logo className="w-[14px] h-[14px] animate-spin-slow" />
      </div>
      <span className="text-[14px] font-black tracking-widest leading-none uppercase">
        {label}
      </span>
    </div>
  );
};
