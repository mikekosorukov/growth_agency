'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContentShowcaseSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative box-border flex w-full flex-col items-center gap-[40px] bg-[#1d2241] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:flex-row lg:gap-[80px] lg:px-[80px] lg:py-[80px]"
      aria-label="Content Showcase"
    >
      {/* Left Column - Content */}
      <div className="relative w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-col lg:items-start lg:self-stretch">
        <div className="box-border flex w-full flex-col gap-[64px] px-0 py-[32px]">
          <div className="flex w-full flex-col gap-[48px]">
            <div className="flex w-full flex-col gap-[8px]">
              <h2 className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </div>
            <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
            </p>
          </div>
          
          {/* Button - only show for content-showcase-solutions (3rd section) */}
          {id === 'content-showcase-solutions' && (
            <div className="relative flex shrink-0 items-start gap-[16px]">
              <Link
                href="#book"
                className="group relative h-[48px] shrink-0 border border-solid border-[#8c99eb] bg-gradient-to-r from-[#323966] to-[#232b5c] hover:from-[#3a4170] hover:to-[#2a3467] transition-all cursor-pointer sm:h-[50px] md:h-[52px] lg:h-[56px]"
                aria-label="Talk to us"
              >
              <div className="box-border flex h-full items-center justify-center overflow-clip rounded-[inherit] p-[12px] sm:p-[14px] lg:p-[16px]">
                <div className="relative box-border flex shrink-0 items-center justify-center gap-[10px] px-[12px] py-0 sm:px-[14px] lg:px-[16px]">
                  <span className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-none tracking-[0.5px] sm:text-[17px] md:text-[18px] lg:text-[20px] bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-transparent">
                    Talk to Us
                  </span>
                </div>
                {/* Chat Icon - appears on hover with sequential animation */}
                <div className="relative shrink-0 h-[20px] w-0 sm:h-[23px] lg:h-[26px] overflow-visible group-hover:w-[20px] sm:group-hover:w-[23px] lg:group-hover:w-[26px] transition-all duration-300 ease-out">
                  <div className="relative size-full">
                    {/* chat-1: appears first quickly (larger bubble in back) */}
                    <div className="absolute aspect-square left-[12.5%] right-[4.17%] top-[calc(50%-1px)] -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center">
                      <Image
                        src="/chat-1.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* chat-2: appears with delay as chat-1 is about to reach design size (smaller bubble) */}
                    <div className="absolute aspect-square left-0 right-1/2 top-[calc(50%+7px)] -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-200 ease-out origin-center">
                      <Image
                        src="/chat-2.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Column - Browser Mockup */}
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

            {/* Content Area - Placeholder */}
            <div className="relative min-h-0 w-full flex-1">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[#dde1e6]" />
                <Image
                  src="/content-placeholder.png"
                  alt=""
                  fill
                  className="object-cover opacity-75"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

