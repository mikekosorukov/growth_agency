'use client';

export default function SolutionIntroSection() {
  return (
    <section
      id="solutions"
      className="relative box-border flex w-full flex-col items-center gap-[48px] bg-[#1d2241] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-labelledby="solution-heading"
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
      <div className="box-border flex w-full max-w-[1280px] flex-col gap-[34px] px-0 text-center sm:px-[70px] md:px-[100px] lg:px-[180px]">
        {/* Top - Tag and Heading */}
        <div className="flex w-full flex-col items-center gap-[8px]">
          <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            THE SOLUTION
          </p>
          <h2
            id="solution-heading"
            className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]"
          >
            GTM, rebuilt from the fundamentals up
          </h2>
        </div>
        
        {/* Body Text */}
        <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
        GTM isn’t distribution. It starts with understanding how the market interacts with your product — everything else is a function of that. We uncover the real drivers behind your traction and build a scalable system of insight → strategy → execution.
        </p>

        {/* How We Work Steps */}
        <div className="content-stretch flex items-start relative size-full" data-name="How we work steps" data-node-id="3313:29881">
          <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Step 1 component" data-node-id="3313:29882">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="3313:29883">
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29884" />
              <div className="bg-[rgba(165,193,233,0.20)] border border-solid border-[#A5C1E9] box-border content-stretch flex flex-col h-[39px] items-center justify-center px-[12px] py-[6px] relative rounded-[90px] shrink-0 w-[40px]" data-name="Atoms/Step/Active" data-node-id="3313:29885">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" data-node-id="I3313:29885;11:26" style={{ fontVariationSettings: "'wdth' 100" }}>
                  1
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px relative shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29886">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line" data-node-id="I3313:29886;11:17">
                  <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(165, 193, 233, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src="/step-line-1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-0 relative shrink-0 text-center w-full" data-name="Atoms/Step Name" data-node-id="3313:29887">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#a5c1e9] text-[18px] text-nowrap whitespace-pre" data-node-id="3313:29888" style={{ fontVariationSettings: "'wdth' 100" }}>
                Context
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a5aee9] text-[14px] w-[min-content]" data-node-id="3313:29889" style={{ fontVariationSettings: "'wdth' 100" }}>
              Understand the system's core parameters: business model, market, and product.
              </p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Step 2 component" data-node-id="3313:29890">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="3313:29891">
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px relative shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29892">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line" data-node-id="I3313:29892;11:17">
                  <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(184, 165, 233, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src="/step-line-2.svg" />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(184,165,233,0.20)] border border-solid border-[#B8A5E9] box-border content-stretch flex flex-col h-[39px] items-center justify-center px-[12px] py-[6px] relative rounded-[90px] shrink-0 w-[40px]" data-name="Atoms/Step/Active" data-node-id="3313:29893">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" data-node-id="I3313:29893;11:26" style={{ fontVariationSettings: "'wdth' 100" }}>
                  2
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px relative shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29894">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line" data-node-id="I3313:29894;11:17">
                  <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(184, 165, 233, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src="/step-line-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-0 relative shrink-0 text-center w-full" data-name="Atoms/Step Name" data-node-id="3313:29895">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#b8a5e9] text-[18px] text-nowrap whitespace-pre" data-node-id="3313:29896" style={{ fontVariationSettings: "'wdth' 100" }}>
                Customer
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a5aee9] text-[14px] w-[min-content]" data-node-id="3313:29897" style={{ fontVariationSettings: "'wdth' 100" }}>
              Understand who your customer is, why they buy, and how they evaluate options.
              </p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Step 3 component" data-node-id="3313:29898">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="3313:29899">
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px relative shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29900">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line" data-node-id="I3313:29900;11:17">
                  <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(231, 165, 233, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src="/step-line-3.svg" />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(231,165,233,0.20)] border border-solid border-[#E7A5E9] box-border content-stretch flex flex-col h-[39px] items-center justify-center px-[12px] py-[6px] relative rounded-[90px] shrink-0 w-[40px]" data-name="Atoms/Step/Inactive" data-node-id="3313:29901">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" data-node-id="I3313:29901;11:28" style={{ fontVariationSettings: "'wdth' 100" }}>
                  3
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px relative shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29902">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line" data-node-id="I3313:29902;11:17">
                  <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(231, 165, 233, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src="/step-line-3.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-0 relative shrink-0 text-center w-full" data-name="Atoms/Step Name" data-node-id="3313:29903">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#e7a5e9] text-[18px] text-nowrap whitespace-pre" data-node-id="3313:29904" style={{ fontVariationSettings: "'wdth' 100" }}>
                Strategy
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a5aee9] text-[14px] w-[min-content]" data-node-id="3313:29905" style={{ fontVariationSettings: "'wdth' 100" }}>
              Define how your business wins, what to focus on, and what to say no to.
              </p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Step 4 component" data-node-id="3313:29906">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="3313:29907">
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px relative shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29908">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line" data-node-id="I3313:29908;11:17">
                  <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(233, 167, 165, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src="/step-line-4.svg" />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(233,165,165,0.20)] border border-solid border-[#E9A5A5] box-border content-stretch flex flex-col h-[39px] items-center justify-center px-[12px] py-[6px] relative rounded-[90px] shrink-0 w-[40px]" data-name="Atoms/Step/Active" data-node-id="3313:29909">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" data-node-id="I3313:29909;11:26" style={{ fontVariationSettings: "'wdth' 100" }}>
                  4
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow h-0 items-start min-h-px min-w-px shrink-0" data-name="Atoms/Line/Active" data-node-id="3313:29910" />
            </div>
            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-0 relative shrink-0 text-center w-full" data-name="Atoms/Step Name" data-node-id="3313:29911">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#e9a5a5] text-[18px] text-nowrap whitespace-pre" data-node-id="3313:29912" style={{ fontVariationSettings: "'wdth' 100" }}>
                Execution
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a5aee9] text-[14px] w-[min-content]" data-node-id="3313:29913" style={{ fontVariationSettings: "'wdth' 100" }}>
              Deliver what the strategy says will drive disproportionate impact on your business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

