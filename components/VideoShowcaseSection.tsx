'use client';

import Image from 'next/image';

export default function VideoShowcaseSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:flex-row lg:gap-[80px] lg:px-[80px] lg:py-[80px]"
      aria-label="Video Showcase"
    >
      {/* Background Image Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#171c39]" />
        <Image
          src="/content-showcase-bg.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-soft-light"
          priority={false}
        />
      </div>

      {/* Left Column - Browser Mockup with Video */}
      <div className="relative w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-row lg:items-center lg:self-stretch">
        <div className="relative h-[400px] w-full rounded-[20px] border border-solid border-[#c1c7cd] sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[400px]">
          {/* Background with texture overlay */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px]">
            <div className="absolute inset-0 rounded-[20px] bg-[#171c39]" />
            <Image
              src="/content-showcase-bg.png"
              alt=""
              fill
              className="rounded-[20px] object-cover opacity-20 mix-blend-soft-light"
              priority={false}
            />
          </div>

          {/* Content Container */}
          <div className="relative flex h-full w-full flex-col overflow-clip rounded-[inherit]">
            {/* Top Bar - Browser Chrome */}
            <div className="box-border flex w-full shrink-0 items-center gap-[43px] p-[16px]">
              {/* Left side - Three circle dots */}
              <div className="flex shrink-0 items-center gap-[5px]">
                <div className="relative size-[16px] shrink-0 overflow-clip">
                  <div className="absolute inset-[8.6%_8.33%_8.06%_8.33%]">
                    <Image
                      src="/circle-dot.svg"
                      alt=""
                      fill
                      className="block"
                    />
                  </div>
                </div>
                <div className="relative size-[16px] shrink-0 overflow-clip">
                  <div className="absolute inset-[8.6%_8.33%_8.06%_8.33%]">
                    <Image
                      src="/circle-dot.svg"
                      alt=""
                      fill
                      className="block"
                    />
                  </div>
                </div>
                <div className="relative size-[16px] shrink-0 overflow-clip">
                  <div className="absolute inset-[8.6%_8.33%_8.06%_8.33%]">
                    <Image
                      src="/circle-dot.svg"
                      alt=""
                      fill
                      className="block"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Navigation arrows */}
              <div className="flex flex-1 items-center justify-end gap-[5px]">
                <div className="relative size-[24px] shrink-0 overflow-clip">
                  <div className="absolute inset-[22.31%_33.28%_22.21%_34.76%]">
                    <Image
                      src="/chevron-left-browser.svg"
                      alt=""
                      fill
                      className="block"
                    />
                  </div>
                </div>
                <div className="relative size-[24px] shrink-0 overflow-clip">
                  <div className="absolute inset-[22.61%_34.47%_22.02%_33.68%]">
                    <Image
                      src="/chevron-right-browser.svg"
                      alt=""
                      fill
                      className="block"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Content Area with Play Button */}
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center gap-[10px]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[#dde1e6]" />
                <Image
                  src="/video-placeholder.png"
                  alt=""
                  fill
                  className="object-cover opacity-75"
                  priority={false}
                />
              </div>

              {/* Play Button Icon */}
              <div className="relative z-10 size-[96px] shrink-0 overflow-clip">
                <div className="absolute inset-[8.333%]">
                  <Image
                    src="/play-icon.svg"
                    alt="Play video"
                    fill
                    className="block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="relative w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-col lg:items-start lg:self-stretch">
        <div className="box-border flex w-full flex-col gap-[64px] px-0 py-[32px]">
          <div className="flex w-full flex-col gap-[48px]">
            <div className="flex w-full flex-col gap-[8px]">
              <h2 className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]">
                Bibendum amet at molestie mattis.
              </h2>
            </div>
            <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

