'use client';

import Image from 'next/image';

export default function ContentShowcaseSection({ id }: { id?: string }) {
  // Determine which tag to show based on id
  const getTag = () => {
    if (id === 'content-showcase-outcomes') {
      return (
        <div className="bg-[rgba(165,193,233,0.15)] border border-solid border-[#A5C1E9] box-border content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[2px] relative rounded-[12px] w-fit" data-name="Context tag" data-node-id="3322:18848">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-[#A5C1E9] whitespace-pre" data-node-id="3322:18849" style={{ fontVariationSettings: "'wdth' 100" }}>
            Context
          </p>
        </div>
      );
    } else if (id === 'content-showcase-solutions') {
      return (
        <div className="bg-[rgba(231,165,233,0.15)] border border-solid border-[#E7A5E9] box-border content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[2px] relative rounded-[12px] w-fit" data-name="Strategy tag" data-node-id="3322:18853">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-[#E7A5E9] whitespace-pre" data-node-id="3322:18854" style={{ fontVariationSettings: "'wdth' 100" }}>
            Strategy
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id={id}
      className="relative box-border flex w-full flex-col items-center bg-[#1d2241] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-label="Content Showcase"
    >
      {/* Noise texture overlay */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/300-60-15-monochrome.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '350px 350px',
          mixBlendMode: 'soft-light',
          opacity: 0.65,
        }}
      />
      {/* Content container - centered with max-width */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col items-center gap-[40px] lg:flex-row lg:gap-[80px]">
      {/* Left Column - Content */}
      <div className="w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-col lg:items-start lg:self-stretch">
        <div className="box-border flex w-full flex-col gap-[64px] px-0 py-[32px]">
          <div className="flex w-full flex-col gap-[32px]">
            <div className="flex w-full flex-col gap-[28px]">
              {/* Tag */}
              {getTag()}
              
              <h2 className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
                {id === 'content-showcase-outcomes' 
                  ? 'Surface the core constraints and assumptions'
                  : id === 'content-showcase-solutions'
                  ? 'Strategy rooted in customer insight and business context'
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              </h2>
            </div>
            {id === 'content-showcase-outcomes' ? (
              <div className="w-full flex flex-col gap-[16px]">
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                  Startups don&apos;t live in a vacuum. Every tech startup operates within a specific set of realities: product maturity, business model, unit economics, runway, and competitive landscape.
                </p>
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                  We begin by explicitly mapping these variables. This is a short but critical step to ensure all downstream efforts count.
                </p>
              </div>
            ) : id === 'content-showcase-solutions' ? (
              <div className="w-full flex flex-col gap-[16px]">
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Tech companies operate with unknown, interdependent variables — change one, and the entire product–market–model–channel configuration shifts. That's why bolting on templatized GTM tactics never works in tech.
                </p>
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                We use the learnings from the first two steps to build a strategy that provides clarity and laser focus on the highest-leverage opportunities.
                </p>
              </div>
            ) : (
              <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Column - Media Container */}
      <div className="w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-row lg:items-center lg:self-stretch">
        {id === 'content-showcase-outcomes' ? (
          <div 
            className="relative h-[400px] w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] p-[24px] sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[400px]"
          >
            {/* Pattern background layer */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage: 'url(/line-pattern-2.svg)',
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px'
              }}
            />
            
            {/* Inner container with dark navy background */}
            <div 
              className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] border border-solid border-[#3f4367] bg-[#171c39]"
              style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
            >
              {/* Section 1 design-4-min PNG - on top of all layers */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/Section 1 design-4-min.png"
                  alt=""
                  width={583}
                  height={383}
                  className="w-full h-full object-contain opacity-100"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ) : id === 'content-showcase-solutions' ? (
          <div 
            className="relative h-[400px] w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] p-[24px] sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[400px]"
          >
            {/* Pattern background layer */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage: 'url(/line-pattern-2.svg)',
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px'
              }}
            />
            
            {/* Inner container with dark navy background */}
            <div 
              className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] border border-solid border-[#3f4367] bg-[#171c39]"
              style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
            >
              {/* Design-3-5-min PNG - on top of all layers */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/Design-3-5-min.png"
                  alt=""
                  width={583}
                  height={383}
                  className="w-full h-full object-contain opacity-100"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      </div>
    </section>
  );
}

