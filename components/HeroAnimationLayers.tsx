'use client';

import { useScroll, useTransform, motion, useMotionTemplate } from 'motion/react';
import { RefObject } from 'react';
import Image from 'next/image';

interface HeroAnimationLayersProps {
  sectionRef: RefObject<HTMLElement>;
}

export default function HeroAnimationLayers({ sectionRef }: HeroAnimationLayersProps) {
  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Layer 2: Mask position for line reveal (translates from left to right)
  // Starting at -60% to account for 200px blur, ending at 110% to fully reveal
  const maskX = useTransform(scrollYProgress, [0, 1], ['-60%', '110%']);

  // Layer 3: Scale animation (identical for all shapes)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Layer 3: Opacity animations (identical for all shapes)
  const borderOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const fillOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);

  // Layer 3: Rotation animations (different for each shape)
  const octagonRotation = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const triangleRotation = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rectangleRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <>
      {/* Layer 1: Static Background Shapes */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Image
          src="/hero-layer-1-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Layer 2: Line Vector with Translating Opacity Mask */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ zIndex: 2 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="gaussian-blur-mask">
            <feGaussianBlur in="SourceGraphic" stdDeviation="200" />
          </filter>
          <mask id="reveal-mask">
            <motion.rect
              x={maskX}
              y="0"
              width="150%"
              height="100%"
              fill="white"
              filter="url(#gaussian-blur-mask)"
            />
          </mask>
        </defs>
        <image
          href="/hero-layer-2-line.svg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#reveal-mask)"
        />
      </svg>

      {/* Layer 3: Geometric Shapes with Scale/Rotate/Opacity */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {/* Octagon */}
        <motion.div
          className="absolute"
          style={{
            scale,
            rotate: octagonRotation,
            opacity: fillOpacity,
            top: '20%',
            left: '15%',
            width: '200px',
            height: '200px',
          }}
        >
          <Image
            src="/hero-layer-3-octagon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Triangle */}
        <motion.div
          className="absolute"
          style={{
            scale,
            rotate: triangleRotation,
            opacity: fillOpacity,
            top: '60%',
            left: '70%',
            width: '250px',
            height: '250px',
          }}
        >
          <Image
            src="/hero-layer-3-triangle.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Rectangle */}
        <motion.div
          className="absolute"
          style={{
            scale,
            rotate: rectangleRotation,
            opacity: fillOpacity,
            top: '40%',
            right: '10%',
            width: '180px',
            height: '180px',
          }}
        >
          <Image
            src="/hero-layer-3-rectangle.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </>
  );
}

