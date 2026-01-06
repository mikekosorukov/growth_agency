'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'motion/react';
import HeroScrollAnimation from './HeroScrollAnimation';

export default function HeroSection() {
  const h2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [endScroll, setEndScroll] = useState(800); // Default fallback
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollLimit = () => {
      if (h2Ref.current) {
        const rect = h2Ref.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const h2TopFromPageTop = rect.top + scrollTop;
        // End animation when H2 top touches the top of viewport
        // Move trigger 60px earlier as per user's request
        setEndScroll(h2TopFromPageTop - 60);
      }
    };

    // Initial calculation
    updateScrollLimit();
    
    // Recalculate after a short delay to ensure layout is stable (fonts, etc)
    const timeoutId = setTimeout(updateScrollLimit, 100);

    window.addEventListener('resize', updateScrollLimit);
    window.addEventListener('scroll', updateScrollLimit);
    return () => {
      window.removeEventListener('resize', updateScrollLimit);
      window.removeEventListener('scroll', updateScrollLimit);
      clearTimeout(timeoutId);
    };
  }, []);

  // Map scroll to progress: 0 (start/assembled) -> 1 (end/disassembled)
  // Start at 15px scroll, end when H2 top touches viewport top (minus 60px offset)
  const progress = useTransform(scrollY, [15, endScroll], [0, 1], { clamp: true });
  
  // Extended progress for path animation - takes longer to complete (3.2x the scroll distance)
  const pathProgress = useTransform(scrollY, [15, endScroll * 3.2], [0, 1], { clamp: true });
  
  // Extended progress for main shapes animation - takes longer to complete (1.5x the scroll distance)
  const shapesProgress = useTransform(scrollY, [15, endScroll * 1.5], [0, 1], { clamp: true });
  
  // Ease-out curve for background opacity - drops abruptly at start, then smooths out
  const opacityEaseOut = cubicBezier(0, 0, 0.3, 1);
  
  // Background shapes zoom-out effect on scroll (30% magnitude - subtle)
  const backgroundScale = useTransform(progress, [0, 1], [1, 0.97]);
  
  // Background shapes opacity mask for fade on scroll - with ease-out curve
  const backgroundOpacity = useTransform(progress, [0, 0.8, 1], [1, 0.3, 0.15], { ease: opacityEaseOut });

  return (
    <section 
      ref={sectionRef}
      className="hero-section-bg box-border relative flex w-full flex-col items-center gap-[40px] px-[20px] pb-[10px] pt-[120px] sm:gap-[50px] sm:px-[40px] sm:pb-[15px] sm:pt-[130px] md:gap-[60px] md:px-[60px] md:pb-[20px] md:pt-[145px] lg:gap-[80px] lg:px-[80px] lg:pb-[0px] lg:pt-[170px] overflow-hidden mb-[-105px]"
      aria-label="Hero section"
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-x-0 top-0 bottom-[105px] w-full z-[1] pointer-events-none"
        style={{
          backgroundImage: 'url(/300-60-15-monochrome.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '350px 350px',
          mixBlendMode: 'soft-light',
          opacity: 0.65,
        }}
      />
      
      {/* Background Shapes Container - with opacity mask applied to all geometric elements */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden"
        style={{ 
          scale: backgroundScale, 
          opacity: backgroundOpacity,
          maskImage: 'url(/static-shapes-background-mask.svg)',
          WebkitMaskImage: 'url(/static-shapes-background-mask.svg)',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskPosition: 'center -100px',
          WebkitMaskPosition: 'center -100px',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        {/* Static shapes background image */}
        <div className="absolute bottom-[35px] left-[-13px] w-[calc(100%+13px)]">
          <Image
            src="/Static-shapes-3-min.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.div>

      {/* H1 Title */}
      <div className="relative w-full max-w-5xl text-center z-10 -mt-[50px]">
        <h1 className="hero-heading hero-gradient-text relative w-full shrink-0 font-bold leading-[1.1]" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
          We help tech companies navigate the messy path to sustainable growth
        </h1>
      </div>
      
      {/* H2 Subtitle - ref for scroll timing */}
      <div ref={h2Ref} className="relative w-full max-w-3xl text-center -mt-[20px] sm:-mt-[25px] md:-mt-[30px] lg:-mt-[40px] z-10">
          <p className="relative w-full shrink-0 font-normal leading-[1.4] text-[#a5aee9]" style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}>
          We partner with traction and early-growth tech startups and SMEs to build <br className="hidden md:block" />a complete GTM system grounded in deep customer insight
          </p>
      </div>

      {/* Hero Animation - reduced bottom margin for tighter gap */}
      <div className="relative w-full flex justify-center -mt-[90px] sm:-mt-[110px] md:-mt-[130px] lg:-mt-[150px] mb-[-40px] pointer-events-none z-[2]">
        <HeroScrollAnimation progress={progress} pathProgress={pathProgress} shapesProgress={shapesProgress} />
      </div>
    </section>
  );
}
