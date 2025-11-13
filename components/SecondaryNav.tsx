'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'motion/react';

export default function SecondaryNav() {
  const [showContent, setShowContent] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const navRef = useRef<HTMLElement>(null);
  const stickyOffsetRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement || !navRef.current) return;

    // Calculate the position accounting for sticky headers
    // Main header (73px) + gap (8px) + secondary nav height
    const navHeight = navRef.current.offsetHeight;
    const offset = 81 + navHeight;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    
    // Set flag to ignore scroll-based section tracking during animation
    isAnimatingRef.current = true;
    
    // Animate scroll using Motion
    animate(startPosition, targetPosition, {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
      onComplete: () => {
        // Re-enable scroll-based tracking after animation completes
        isAnimatingRef.current = false;
      },
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, section: string) => {
    e.preventDefault();
    // Immediately update active section on click
    setActiveSection(section);
    smoothScrollTo(targetId);
  };

  useEffect(() => {
    // Store the initial offset position of the nav
    if (navRef.current) {
      stickyOffsetRef.current = navRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (!navRef.current) return;

      const scrollPosition = window.scrollY;
      const navRect = navRef.current.getBoundingClientRect();
      // Check if nav is at or past its sticky position (top: 81px)
      // Text should appear as soon as nav reaches sticky position
      const hasScrolledToSticky = navRect.top <= 81;
      const navHeight = navRef.current.offsetHeight;
      
      // PRIORITY 1: Handle text appearance/disappearance (original behavior)
      const outcomesSection = document.getElementById('outcomes');
      
      if (outcomesSection) {
        const outcomesRect = outcomesSection.getBoundingClientRect();
        const outcomesTouchesNav = outcomesRect.top <= 81 + navHeight;
        
        setShowContent(hasScrolledToSticky && !outcomesTouchesNav);
        setHideNav(outcomesTouchesNav);
      } else {
        setShowContent(hasScrolledToSticky);
        setHideNav(false);
      }
      
      // PRIORITY 2: Track active section (only when content is visible and not animating)
      if (!hasScrolledToSticky) {
        setActiveSection('');
        return;
      }
      
      // If we're animating from a click, ignore scroll-based tracking
      if (isAnimatingRef.current) {
        return;
      }
      
      const contentShowcaseOutcomes = document.getElementById('content-showcase-outcomes');
      const contentShowcaseProblems = document.getElementById('content-showcase-problems');
      const contentShowcaseSolutions = document.getElementById('content-showcase-solutions');
      
      // Find which section the nav is currently over by checking which section's top
      // is closest to the nav bottom position (but hasn't passed the nav yet)
      const navBottom = 81 + navHeight;
      const sections = [
        { id: 'outcomes', element: contentShowcaseOutcomes },
        { id: 'problems', element: contentShowcaseProblems },
        { id: 'solutions', element: contentShowcaseSolutions },
      ];
      
      let closestSection = '';
      let closestDistance = Infinity;
      
      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section overlaps with nav area
          if (rect.top <= navBottom && rect.bottom >= 81) {
            // Calculate distance from section top to nav bottom
            // Prefer sections that are approaching (positive distance but small)
            const distance = rect.top - navBottom;
            
            // If this section is closer to the nav bottom than previous ones, select it
            if (Math.abs(distance) < Math.abs(closestDistance)) {
              closestDistance = distance;
              closestSection = id;
            }
          }
        }
      });
      
      setActiveSection(closestSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="sticky top-[81px] z-40 w-full border-y border-solid border-[#3f4367] bg-[#171c39] before:absolute before:left-0 before:right-0 before:top-[-9px] before:h-[8px] before:bg-[#1d2241] before:content-['']"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: hideNav ? 0 : 1,
        y: hideNav ? -60 : 0, // Slide up 60px to go under the main header
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
      }}
      style={{
        pointerEvents: hideNav ? 'none' : 'auto',
      }}
    >
      <div className="flex flex-col gap-[12px] px-[20px] py-[14px] sm:px-[40px] sm:gap-[14px] md:flex-row md:items-center md:justify-between md:gap-[24px] md:px-[60px] md:py-[14px] lg:px-[80px]">
        {/* Left - Statement */}
        <div className="w-full md:flex-1 md:min-w-[200px]">
          <motion.p
            className="text-[17px] font-medium leading-[1.4] text-[#dcdff2] sm:text-[18px] md:text-[19px] lg:text-[21px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
          >
            Starting with the why is the most important part
          </motion.p>
        </div>

        {/* Right - Navigation Links */}
        <motion.div
          className="flex items-center gap-[16px] flex-shrink-0 sm:gap-[20px] md:gap-[24px] lg:gap-[32px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
          }}
        >
          <Link
            href="#content-showcase-outcomes"
            onClick={(e) => handleNavClick(e, 'content-showcase-outcomes', 'outcomes')}
            className={`text-[14px] font-normal leading-[1.4] transition-all lg:text-[15px] ${
              activeSection === 'outcomes'
                ? 'text-[#dcdff2] underline decoration-1 underline-offset-4'
                : 'text-[#a5aee9] hover:text-[#dcdff2]'
            }`}
          >
            The outcomes
          </Link>
          <Link
            href="#content-showcase-problems"
            onClick={(e) => handleNavClick(e, 'content-showcase-problems', 'problems')}
            className={`text-[14px] font-normal leading-[1.4] transition-all lg:text-[15px] ${
              activeSection === 'problems'
                ? 'text-[#dcdff2] underline decoration-1 underline-offset-4'
                : 'text-[#a5aee9] hover:text-[#dcdff2]'
            }`}
          >
            The problems
          </Link>
          <Link
            href="#content-showcase-solutions"
            onClick={(e) => handleNavClick(e, 'content-showcase-solutions', 'solutions')}
            className={`text-[14px] font-normal leading-[1.4] transition-all lg:text-[15px] ${
              activeSection === 'solutions'
                ? 'text-[#dcdff2] underline decoration-1 underline-offset-4'
                : 'text-[#a5aee9] hover:text-[#dcdff2]'
            }`}
          >
            The solutions
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}

