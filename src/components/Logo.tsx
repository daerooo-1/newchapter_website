import React from "react";

export const Logo = ({ className = "w-6 h-6", fill = "currentColor" }: { className?: string, fill?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill={fill} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M50 0C68.9 0 84.8 11.2 92.4 27.2L50 50L7.6 27.2C15.2 11.2 31.1 0 50 0ZM92.4 72.8C84.8 88.8 68.9 100 50 100C31.1 100 15.2 88.8 7.6 72.8L50 50L92.4 72.8Z"
        fill="none" 
      />
      {/* Rounded Diamond Shape with 'n' cutout simulated by path data */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M50 0C56.6667 0 62.6667 2.33333 67.5 6.5L93.5 32.5C97.6667 37.3333 100 43.3333 100 50C100 56.6667 97.6667 62.6667 93.5 67.5L67.5 93.5C62.6667 97.6667 56.6667 100 50 100C43.3333 100 37.3333 97.6667 32.5 93.5L6.5 67.5C2.33333 62.6667 0 56.6667 0 50C0 43.3333 2.33333 37.3333 6.5 32.5L32.5 6.5C37.3333 2.33333 43.3333 0 50 0ZM25 65V45C25 31.1929 36.1929 20 50 20C63.8071 20 75 31.1929 75 45V55L80 50V45C80 28.4315 66.5685 15 50 15C33.4315 15 20 28.4315 20 45V65H25Z" 
        fill={fill}
      />
    </svg>
  );
};