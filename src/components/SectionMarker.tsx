import React from "react";
import { Logo } from "./Logo";

interface SectionMarkerProps {
  className?: string;
}

/**
 * Reusable section label marker component.
 * Displays a rotating logo placeholder.
 */
export const SectionMarker: React.FC<SectionMarkerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* TODO: Replace section label logo placeholder with final brand logo asset */}
      <Logo className="w-[11px] h-[11px] animate-spin-slow" />
    </div>
  );
};
