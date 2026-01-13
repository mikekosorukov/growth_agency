'use client';

import Image from 'next/image';

/**
 * VideoPlaceholder Component
 * 
 * A stylized video placeholder with interactive hover animations:
 * - Dot pattern background with opacity transition
 * - Container lifts up on hover
 * - Inner container scales down slightly with shadow
 * - Play icon scales up with pulsing brightness animation
 * 
 * CSS styles are in globals.css under:
 * - .dot-pattern-bg
 * - .media-inner-container
 * - .play-icon-container
 * 
 * Usage:
 * Import and place inside a container. The component maintains
 * a 625:420 aspect ratio.
 * 
 * @example
 * <VideoPlaceholder />
 */
export default function VideoPlaceholder() {
  return (
    <div 
      className="dot-pattern-bg relative w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] p-[24px]"
      style={{ aspectRatio: '625 / 420' }}
    >
      {/* Inner container with lavender background */}
      <div className="media-inner-container relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] bg-[#ccd0ee]">
        {/* Play Circle Icon */}
        <div className="play-icon-container relative h-[96px] w-[96px] shrink-0 overflow-clip">
          <div className="absolute inset-[8.33%]">
            <Image
              src="/play-circle-icon.svg"
              alt="Play video"
              fill
              className="block max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

