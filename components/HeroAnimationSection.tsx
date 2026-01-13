'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'motion/react';
import HeroOctagon from './HeroOctagon';
import HeroTriangle from './HeroTriangle';
import HeroRectangle from './HeroRectangle';
import HeroPath from './HeroPath';

export default function HeroAnimationSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 350px", "start -50px"]
  });

  const smoothEase = cubicBezier(0.17, 0.67, 0.83, 0.67);
  const softEndEase = cubicBezier(0.35, 0.17, 0.3, 1);
  const baseFillEase = cubicBezier(0, 0.7, 0.1, 1);

  const octagonScale = useTransform(scrollYProgress, [0.1, 0.5], [0.5, 1], { ease: softEndEase });
  const octagonRotate = useTransform(scrollYProgress, [0.1, 0.5], [-90, 0], { ease: softEndEase });
  // triangleRotate moved to delayed section
  const shadowDy = useTransform(scrollYProgress, [0.1, 0.5], [0, 4], { ease: smoothEase });
  const shadowBlur = useTransform(scrollYProgress, [0.1, 0.5], [0, 9], { ease: smoothEase });
  const strokeOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1], { ease: smoothEase });
  const fillOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 0.3], { ease: smoothEase });
  const baseFillOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.3, 1], { ease: baseFillEase });
  const pathMaskX = useTransform(scrollYProgress, [0, 1], ['-160%', '-20%']);

  // Triangle specific animations with delay (starts at 0.15 progress)
  const triangleScale = useTransform(scrollYProgress, [0.28, 0.65], [0.5, 1], { ease: softEndEase });
  const triangleRotate = useTransform(scrollYProgress, [0.28, 0.65], [-60, 0], { ease: softEndEase });
  const triangleShadowDy = useTransform(scrollYProgress, [0.28, 0.65], [0, 4], { ease: smoothEase });
  const triangleShadowBlur = useTransform(scrollYProgress, [0.28, 0.65], [0, 9], { ease: smoothEase });
  const triangleStrokeOpacity = useTransform(scrollYProgress, [0.38, 0.65], [0, 1], { ease: smoothEase });
  const triangleFillOpacity = useTransform(scrollYProgress, [0.28, 0.65], [0, 0.3], { ease: smoothEase });
  const triangleBaseFillOpacity = useTransform(scrollYProgress, [0.28, 0.65], [0.3, 1], { ease: baseFillEase });

  // Rectangle specific animations with double delay (starts at 0.2 progress)
  const rectangleScale = useTransform(scrollYProgress, [0.5, 0.8], [0.5, 1], { ease: softEndEase });
  const rectangleShadowDy = useTransform(scrollYProgress, [0.5, 0.8], [0, 4], { ease: smoothEase });
  const rectangleShadowBlur = useTransform(scrollYProgress, [0.5, 0.8], [0, 9], { ease: smoothEase });
  const rectangleStrokeOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1], { ease: smoothEase });
  const rectangleFillOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 0.3], { ease: smoothEase });
  const rectangleBaseFillOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0.3, 1], { ease: baseFillEase });
  const sparkleScaleLeft = useTransform(scrollYProgress, [0.75, 0.85, 0.87], [0, 1.25, 1], { ease: smoothEase });
  const sparkleScaleMiddle = useTransform(scrollYProgress, [0.80, 0.9, 0.92], [0, 1.25, 1], { ease: smoothEase });
  const sparkleScaleRight = useTransform(scrollYProgress, [0.85, 0.95, 0.97], [0, 1.25, 1], { ease: smoothEase });
  const sparkleScaleFarRight = useTransform(scrollYProgress, [0.85, 0.97, 1], [0, 1.25, 1], { ease: smoothEase });

  return (
    <section 
      ref={sectionRef}
      className="box-border flex w-full flex-col items-center justify-center px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px] xl:px-[214px]"
      style={{ backgroundColor: '#1d2241' }}
      aria-label="Hero animation"
    >
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
              scale: octagonScale,
              rotate: octagonRotate
            }}
          >
            <HeroOctagon dy={shadowDy} blur={shadowBlur} strokeOpacity={strokeOpacity} fillOpacity={fillOpacity} baseFillOpacity={baseFillOpacity} />
          </motion.div>

          {/* Shape 2: Triangle (middle) */}
          <motion.div 
            className="absolute" 
            style={{ 
              left: '41.70%', 
              top: '31.06%', 
              width: '14.43%', 
              height: '19.85%',
              scale: triangleScale,
              rotate: triangleRotate
            }}
          >
            <HeroTriangle dy={triangleShadowDy} blur={triangleShadowBlur} strokeOpacity={triangleStrokeOpacity} fillOpacity={triangleFillOpacity} baseFillOpacity={triangleBaseFillOpacity} />
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
            <HeroRectangle dy={rectangleShadowDy} blur={rectangleShadowBlur} strokeOpacity={rectangleStrokeOpacity} fillOpacity={rectangleFillOpacity} baseFillOpacity={rectangleBaseFillOpacity} />
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
        </div>
      </div>
    </section>
  );
}

