'use client';

import Image from 'next/image';
import { motion, MotionValue, useTransform, cubicBezier } from 'motion/react';
import HeroOctagon from './HeroOctagon';
import HeroTriangle from './HeroTriangle';
import HeroRectangle from './HeroRectangle';
import HeroPath from './HeroPath';

interface HeroScrollAnimationProps {
  progress: MotionValue<number>;
  pathProgress: MotionValue<number>;
  shapesProgress: MotionValue<number>;
}

export default function HeroScrollAnimation({ progress, pathProgress, shapesProgress }: HeroScrollAnimationProps) {
  const smoothEase = cubicBezier(0.17, 0.67, 0.83, 0.67);
  const softEndEase = cubicBezier(0.35, 0.17, 0.3, 1);
  // S-curve ease - starts slow, accelerates in middle, eases out at end (smooth organic motion)
  const sCurveEase = cubicBezier(0.65, 0, 0.35, 1);
  // Ease-out curve for path reveal - normal speed at start, decelerates smoothly at end
  const pathRevealEase = cubicBezier(0, 0, 0.35, 1);
  // Ease-out curve for accent shapes - normal speed at start, decelerates smoothly at end
  const accentShapesEase = cubicBezier(0, 0, 0.3, 1);

  // Octagon animations (first shape to animate) - uses extended shapesProgress
  const octagonScale = useTransform(shapesProgress, [0, 0.4], [0.35, 1], { ease: sCurveEase });
  const octagonRotate = useTransform(shapesProgress, [0, 0.4], [-90, 0], { ease: softEndEase });
  const shadowDy = useTransform(shapesProgress, [0, 0.4], [0, 4], { ease: smoothEase });
  const shadowBlur = useTransform(shapesProgress, [0, 0.4], [0, 9], { ease: smoothEase });
  const strokeOpacity = useTransform(shapesProgress, [0.1, 0.4], [0, 1], { ease: smoothEase });
  const fillOpacity = useTransform(shapesProgress, [0, 0.4], [0, 0.3], { ease: smoothEase });

  // Triangle animations (second shape, delayed) - uses extended shapesProgress
  const triangleScale = useTransform(shapesProgress, [0.18, 0.55], [0.35, 1], { ease: sCurveEase });
  const triangleRotate = useTransform(shapesProgress, [0.18, 0.55], [-60, 0], { ease: softEndEase });
  const triangleShadowDy = useTransform(shapesProgress, [0.18, 0.55], [0, 4], { ease: smoothEase });
  const triangleShadowBlur = useTransform(shapesProgress, [0.18, 0.55], [0, 9], { ease: smoothEase });
  const triangleStrokeOpacity = useTransform(shapesProgress, [0.28, 0.55], [0, 1], { ease: smoothEase });
  const triangleFillOpacity = useTransform(shapesProgress, [0.18, 0.55], [0, 0.3], { ease: smoothEase });

  // Rectangle animations (third shape, more delay) - uses extended shapesProgress
  const rectangleScale = useTransform(shapesProgress, [0.4, 0.7], [0.35, 1], { ease: sCurveEase });
  const rectangleShadowDy = useTransform(shapesProgress, [0.4, 0.7], [0, 4], { ease: smoothEase });
  const rectangleShadowBlur = useTransform(shapesProgress, [0.4, 0.7], [0, 9], { ease: smoothEase });
  const rectangleStrokeOpacity = useTransform(shapesProgress, [0.5, 0.7], [0, 1], { ease: smoothEase });
  const rectangleFillOpacity = useTransform(shapesProgress, [0.4, 0.7], [0, 0.3], { ease: smoothEase });

  // Sparkle animations - delayed to appear later in the scroll
  const sparkleScaleLeft = useTransform(progress, [0.75, 0.85, 0.87], [0, 1.25, 1], { ease: smoothEase });
  const sparkleScaleMiddle = useTransform(progress, [0.80, 0.90, 0.92], [0, 1.25, 1], { ease: smoothEase });
  const sparkleScaleRight = useTransform(progress, [0.85, 0.95, 0.97], [0, 1.25, 1], { ease: smoothEase });
  const sparkleScaleFarRight = useTransform(progress, [0.85, 0.97, 1.0], [0, 1.25, 1], { ease: smoothEase });

  // Path mask animation - simplified: white rect with blur slides left to right
  // Uses pathProgress which extends 1.5x further down the page for slower reveal
  // Applies ease-out curve so it decelerates smoothly at the end
  // Rect is 200% wide. Position x is the LEFT edge of the rect.
  // Start: -110% → rect right edge at 90%, blur positioned to reveal immediately
  // End: 0% → rect fully covers viewport (slows down as it approaches the end)
  const pathMaskX = useTransform(pathProgress, [0, 1], ['-110%', '0%'], { ease: pathRevealEase });

  // Accent shapes animations (8 shapes) - they shrink from larger to smaller (initial size reduced by 15%)
  // Uses extended shapesProgress and ease-out curve for smoother animation
  // Shapes anchored to octagon
  const accentScaleOctagon = useTransform(shapesProgress, [0, 0.4], [1.19, 0.6], { ease: accentShapesEase });
  // Shapes anchored to triangle  
  const accentScaleTriangle = useTransform(shapesProgress, [0.18, 0.55], [1.19, 0.6], { ease: accentShapesEase });
  // Shapes anchored to rectangle
  const accentScaleRectangle = useTransform(shapesProgress, [0.4, 0.7], [1.19, 0.6], { ease: accentShapesEase });
  
  // Group-level scale for all 8 accent shapes - matches background shapes animation window
  // Uses regular progress (not shapesProgress) to sync with background shapes timing
  // Linear animation (no easing curve)
  const accentGroupScale = useTransform(progress, [0, 0.7], [1.0, 0.982]);
  
  // Group-level opacity for all 8 accent shapes - reduces opacity by 30%
  const accentGroupOpacity = useTransform(progress, [0, 0.7], [1.0, 0.15]);

  return (
    <div className="relative w-full max-w-[1012px]" style={{ aspectRatio: '1012 / 660' }}>
      <div className="relative w-full h-full grid" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
        {/* Path Layer - Curved dashed line */}
        <div className="relative w-full h-full" style={{ gridArea: '1 / 1' }}>
          <div className="absolute" style={{ left: '1.59%', top: '11.67%', width: '98.36%', height: '62.94%' }}>
            <HeroPath maskX={pathMaskX} />
          </div>
        </div>

        {/* Main Shapes Layer - Individual Shapes */}
        <div className="relative w-full h-full" style={{ gridArea: '1 / 1' }}>
          {/* Shape 1: Octagon (left) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '12.70%', 
              top: '39.96%', 
              width: '13.15%', 
              height: '22.42%',
              scale: octagonScale
            }}
          >
            <HeroOctagon dy={shadowDy} blur={shadowBlur} strokeOpacity={strokeOpacity} fillOpacity={fillOpacity} />
          </motion.div>

          {/* Shape 2: Triangle (middle) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '41.70%', 
              top: '31.06%', 
              width: '14.43%', 
              height: '19.85%',
              scale: triangleScale
            }}
          >
            <HeroTriangle dy={triangleShadowDy} blur={triangleShadowBlur} strokeOpacity={triangleStrokeOpacity} fillOpacity={triangleFillOpacity} />
          </motion.div>

          {/* Shape 3: Rectangle (right) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '70.46%', 
              top: '24.24%', 
              width: '16.50%', 
              height: '17.12%',
              scale: rectangleScale
            }}
          >
            <HeroRectangle dy={rectangleShadowDy} blur={rectangleShadowBlur} strokeOpacity={rectangleStrokeOpacity} fillOpacity={rectangleFillOpacity} />
          </motion.div>
        </div>

        {/* Sparkles Layer */}
        <div className="relative w-full h-full" style={{ gridArea: '1 / 1' }}>
          {/* Sparkle 6 - Top right large */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '78.46%', 
              top: '20.61%', 
              width: '2.87%', 
              aspectRatio: '1',
              scale: sparkleScaleFarRight
            }}
          >
            <Image
              src="/hero-animation-sparkle-large.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Sparkle 3 - Middle center large */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '53.95%', 
              top: '40.61%', 
              width: '2.87%', 
              aspectRatio: '1',
              scale: sparkleScaleMiddle
            }}
          >
            <Image
              src="/hero-animation-sparkle-large.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Sparkle 5 - Top right small */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '74.51%', 
              top: '22.88%', 
              width: '2.08%', 
              aspectRatio: '1',
              scale: sparkleScaleRight
            }}
          >
            <Image
              src="/hero-animation-sparkle-small.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Sparkle 4 - Middle right small */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '77.77%', 
              top: '39.24%', 
              width: '2.08%', 
              aspectRatio: '1',
              scale: sparkleScaleRight
            }}
          >
            <Image
              src="/hero-animation-sparkle-small.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Sparkle 1 - Bottom left small */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '16.21%', 
              top: '59.70%', 
              width: '2.08%', 
              aspectRatio: '1',
              scale: sparkleScaleLeft
            }}
          >
            <Image
              src="/hero-animation-sparkle-small.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Sparkle 2 - Left large */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '20.75%', 
              top: '38.48%', 
              width: '2.87%', 
              aspectRatio: '1',
              scale: sparkleScaleLeft
            }}
          >
            <Image
              src="/hero-animation-sparkle-large.svg"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* 8 Animated Accent Shapes Layer - anchored to main shapes */}
        <div className="relative w-full h-full" style={{ gridArea: '1 / 1' }}>
          {/* Group wrapper for all 8 accent shapes - applies group-level scale and opacity */}
          <motion.div 
            className="relative w-full h-full"
            style={{ scale: accentGroupScale, opacity: accentGroupOpacity }}
          >
          {/* Shape 1: Small hexagon - anchored near octagon (bottom-left) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '11%', 
              top: '33%', 
              width: '4.5%',
              opacity: 0.6,
              scale: accentScaleOctagon
            }}
          >
            <Image
              src="/animated-shape-1.svg"
              alt=""
              width={46}
              height={53}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 2: Small triangle - anchored near octagon (below) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '15%', 
              top: '63%', 
              width: '4%',
              opacity: 0.6,
              scale: accentScaleOctagon
            }}
          >
            <Image
              src="/animated-shape-2.svg"
              alt=""
              width={50}
              height={43}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 3: Larger triangle - anchored near main triangle (above-left) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '24.6%', 
              top: '30%', 
              width: '5%',
              opacity: 0.6,
              scale: accentScaleTriangle
            }}
          >
            <Image
              src="/animated-shape-3.svg"
              alt=""
              width={62}
              height={54}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 4: Small rectangle - anchored near main triangle (below-right) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '36%', 
              top: '54%', 
              width: '4%',
              opacity: 0.6,
              scale: accentScaleTriangle
            }}
          >
            <Image
              src="/animated-shape-4.svg"
              alt=""
              width={47}
              height={27}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 5: Circle - anchored near rectangle (left) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '53%', 
              top: '57%', 
              width: '4%',
              opacity: 0.6,
              scale: accentScaleRectangle
            }}
          >
            <Image
              src="/animated-shape-5.svg"
              alt=""
              width={50}
              height={50}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 6: Circle - anchored near rectangle (bottom-right) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '58%', 
              top: '32%', 
              width: '4.2%',
              opacity: 0.6,
              scale: accentScaleRectangle
            }}
          >
            <Image
              src="/animated-shape-6.svg"
              alt=""
              width={51}
              height={51}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 7: Small hexagon - positioned 150px below shape-8 (center-to-center) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '93.25%', 
              top: '31.3%', 
              width: '3.5%',
              opacity: 0.6,
              scale: accentScaleRectangle
            }}
          >
            <Image
              src="/animated-shape-7.svg"
              alt=""
              width={41}
              height={47}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Shape 8: Rectangle - anchored near main rectangle (above) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '86.8%', 
              top: '17.6%', 
              width: '4.5%',
              opacity: 0.6,
              scale: accentScaleRectangle
            }}
          >
            <Image
              src="/animated-shape-8.svg"
              alt=""
              width={54}
              height={32}
              className="w-full h-auto"
            />
          </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

