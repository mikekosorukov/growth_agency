'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VideoShowcaseSection({ id }: { id?: string }) {
  // Determine which tag to show based on id
  const getTag = () => {
    if (id === 'content-showcase-problems') {
      return (
        <div className="bg-[rgba(184,165,233,0.15)] border border-solid border-[#B8A5E9] box-border content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[2px] relative rounded-[12px] w-fit" data-name="Customer tag" data-node-id="3322:18850">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-[#B8A5E9] whitespace-pre" data-node-id="3322:18851" style={{ fontVariationSettings: "'wdth' 100" }}>
            Customer
          </p>
        </div>
      );
    } else if (id === 'content-showcase-problems-2') {
      return (
        <div className="bg-[rgba(233,165,165,0.15)] border border-solid border-[#E9A5A5] box-border content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[2px] relative rounded-[12px] w-fit" data-name="Execution tag" data-node-id="3322:18856">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-[#E9A5A5] whitespace-pre" data-node-id="3322:18857" style={{ fontVariationSettings: "'wdth' 100" }}>
            Execution
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id={id}
      className={`relative box-border flex w-full flex-col items-center gap-[40px] ${
        id === 'content-showcase-problems-2' 
          ? 'border-x border-t border-solid border-[#3f4367]' 
          : 'border border-solid border-[#3f4367]'
      } bg-[#171c39] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:flex-row lg:gap-[80px] lg:px-[80px] lg:py-[80px] overflow-hidden`}
      aria-label="Video Showcase"
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

      {/* Left Column - Media Container */}
      <div className="relative z-10 w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-row lg:items-center lg:self-stretch">
        {id === 'content-showcase-problems' ? (
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
              className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] border border-solid border-[#3f4367] bg-[#151A37]"
              style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
            >
              {/* Design-3-7-min PNG - on top of all layers */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/Design-3-7-min.png"
                  alt=""
                  width={583}
                  height={383}
                  className="w-full h-full object-contain opacity-100"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ) : id === 'content-showcase-problems-2' ? (
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
              className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] border border-solid border-[#3f4367] bg-[#151A37]"
              style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
            >
              {/* Design-4-3-min PNG - on top of all layers */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/Design-4-3-min.png"
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

      {/* Right Column - Content */}
      <div className="relative z-10 w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-col lg:items-start lg:self-stretch">
        <div className="box-border flex w-full flex-col gap-[48px] px-0 py-[32px]">
          <div className="flex w-full flex-col gap-[32px]">
            <div className="flex w-full flex-col gap-[28px]">
              {/* Tag */}
              {getTag()}
              
              <h2 className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
                {id === 'content-showcase-problems'
                  ? 'Understand your customer: why they buy and how they buy'
                  : id === 'content-showcase-problems-2'
                  ? 'Translating strategy into outcomes'
                  : 'Bibendum amet at molestie mattis.'}
              </h2>
            </div>
            {id === 'content-showcase-problems' ? (
              <div className="w-full flex flex-col gap-[16px]">
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Nothing impacts a tech company’s trajectory more than how well you understand your customer. Get this wrong, and every downstream GTM decision will compound the problem.
                </p>
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                We extract initial signals from sales calls, support conversations, and product-usage data, then build stronger evidence through conversations with real buyers and users. This surfaces who your best customers are, why they buy, where they go to evaluate solutions, and what keeps them coming back — key inputs into a strong GTM strategy.
                </p>
              </div>
            ) : id === 'content-showcase-problems-2' ? (
              <div className="w-full flex flex-col gap-[16px]">
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Execution is where most founders jump right in, but outputs ≠ outcomes. Sales copy doesn&apos;t drive pipeline, and new onboarding doesn&apos;t improve retention on its own — unless they&apos;re the result of deep insight and a coherent strategy.
                </p>
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                We only deliver what the strategy determines will actually move the needle for this business at this stage. From there, execution can take different forms:
                </p>
              </div>
            ) : (
              <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
              </p>
            )}
          </div>
          
          {/* Button - only show for content-showcase-problems-2 (duplicate section) */}
          {id === 'content-showcase-problems-2' && (
            <div className="relative flex shrink-0 items-start gap-[16px]">
              <Link
                href="/bookings"
                target="_blank"
                rel="noopener noreferrer"
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
    </section>
  );
}

