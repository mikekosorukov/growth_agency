'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function OutcomesSection() {
  const caseStudies = [
    {
      title: 'Onboarding flow',
      description: 'I worked with Jet Admin to capture the new AI-enabled opportunity a',
      imageUrl: '/case-study-1.png', // Placeholder for future images
    },
    {
      title: 'Successful pivot',
      description: 'Id eros pellentesque facilisi id mollis faucibus commodo enim.',
      imageUrl: '/case-study-2.png',
    },
    {
      title: 'Title',
      description: 'Nunc, pellentesque velit malesuada non massa arcu.',
      imageUrl: '/case-study-3.png',
    },
    {
      title: 'Title',
      description: 'Imperdiet purus pellentesque sit mi nibh sit integer faucibus.',
      imageUrl: '/case-study-4.png',
    },
  ];

  return (
    <section
      id="outcomes"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[50px] md:gap-[56px] md:px-[60px] md:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px]"
      aria-labelledby="outcomes-heading"
    >
      {/* Background Image Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#171c39]" />
        <Image
          src="/problem-section-bg.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-soft-light"
          priority={false}
        />
      </div>

      {/* Section Title */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[6px] text-center sm:gap-[8px]">
        <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
          OUTCOMES
        </p>
        <h2
          id="outcomes-heading"
          className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]"
        >
          The results we delivered in the past
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((study, index) => (
          <article
            key={index}
            className="flex flex-col justify-between border border-solid border-[#3f4367] bg-[#1d2241] transition-all hover:border-[#5f6387] hover:bg-[#222749]"
          >
            {/* Image Placeholder */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[#dde1e6]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-75" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[16px] p-[16px] pt-[24px] flex-grow">
              {/* Title */}
              <h3 className="text-[20px] font-bold leading-[1.1] text-[#dcdff2]">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] font-normal leading-[1.4] text-[#a5aee9]">
                {study.description}
              </p>
            </div>

            {/* Button */}
            <div className="p-[16px] pt-0 mt-auto">
              <Link
                href="#case-study"
                className="group inline-flex items-center gap-[7px] py-[16px] transition-all"
                aria-label={`View full study: ${study.title}`}
              >
                <span className="bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-[20px] font-medium leading-none tracking-[0.5px] text-transparent transition-all group-hover:from-[#e8edff] group-hover:to-[#b4c0ff]">
                  Full study
                </span>
                <div className="relative h-[24px] w-[24px] text-[#8c99eb] transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-[360deg]">
                  <Image
                    src="/arrow-right.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-full"
                  />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <button
        className="group relative z-10 flex shrink-0 items-center justify-center border border-solid border-[#494f8e] bg-[#0E1330]/30 px-[12px] py-[12px] transition-all hover:bg-[#1f2446] hover:border-[#7a82c4] cursor-pointer"
        aria-label="Load more case studies"
      >
        <div className="relative h-[20px] w-[20px] text-[#494f8e] transition-all group-hover:translate-y-1 group-hover:text-[#7a82c4]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-[8px] px-[12px] py-0">
          <span className="text-[14px] font-medium leading-none tracking-[0.5px] text-[#494f8e] whitespace-pre transition-colors group-hover:text-[#7a82c4]">
            Load more
          </span>
        </div>
      </button>
    </section>
  );
}

