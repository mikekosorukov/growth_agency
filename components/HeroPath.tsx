'use client';

import { motion, MotionValue, useMotionTemplate } from 'motion/react';

interface HeroPathProps {
  maskX: MotionValue<string>;
}

export default function HeroPath({ maskX }: HeroPathProps) {
  // Create the mask position string
  const maskPosition = useMotionTemplate`${maskX} 0%`;

  return (
    <svg 
      preserveAspectRatio="none" 
      width="100%" 
      height="100%" 
      overflow="visible" 
      style={{ display: 'block' }} 
      viewBox="0 0 996 418" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient for the path stroke */}
        <linearGradient id="paint0_linear_path" x1="987.937" y1="63.54" x2="-16.063" y2="324.039" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BCFF" stopOpacity="0"/>
          <stop offset="0.0426558" stopColor="#B1BCFF" stopOpacity="0.3"/>
          <stop offset="0.125515" stopColor="#B1BCFF"/>
          <stop offset="0.28171" stopColor="#B1BCFF"/>
          <stop offset="0.381573" stopColor="#B1BCFF" stopOpacity="0.35"/>
          <stop offset="0.502631" stopColor="#B1BCFF"/>
          <stop offset="0.632305" stopColor="#B1BCFF" stopOpacity="0.35"/>
          <stop offset="0.817068" stopColor="#B1BCFF"/>
          <stop offset="1" stopColor="#A5AEE9" stopOpacity="0"/>
        </linearGradient>
        
        {/* Gaussian blur filter for soft reveal edge */}
        <filter id="gaussian_blur_mask" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
        
        {/* Simplified mask: plain white rectangle with blur, slides from left to right */}
        <mask id="reveal_mask_path">
          <motion.rect
            x="0"
            y="-50%"
            width="200%"
            height="200%"
            fill="white"
            filter="url(#gaussian_blur_mask)"
            style={{ x: maskX }}
          />
        </mask>
      </defs>
      
      <g id="Path-container" mask="url(#reveal_mask_path)">
        <path 
          id="Path-vector" 
          d="M0.0192206 416.456C0.0192206 416.456 22.9682 416.862 60.0396 393.507C97.1111 370.152 118.106 346.944 154.506 302.881C190.906 258.818 220.006 214.388 266.58 165.341C313.155 116.293 385.359 114.175 433.254 156.961C481.149 199.747 499.03 235.509 529.683 264.884C572.176 305.607 647.375 307.111 688.374 264.884C741.697 209.965 746.806 174.842 805.238 104.596C840.869 61.7601 877.275 45.1669 895.937 37.0399C914.599 28.9129 995.437 1.03991 995.437 1.03991" 
          stroke="url(#paint0_linear_path)" 
          strokeWidth="2.2" 
          strokeDasharray="7 7"
        />
      </g>
    </svg>
  );
}
