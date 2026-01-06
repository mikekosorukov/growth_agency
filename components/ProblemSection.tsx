'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProblemSection() {
  const cards = [
    {
      icon: '/problemicon-1.png',
      text: "Most tech startups don't have the business expertise to bring their product to market — yet it's too early to hire a full-time executive."
    },
    {
      icon: '/problemicon-2.png',
      text: "Solving go-to-market with default tactics is a dangerous shortcut. Without truly understanding the customer first, that approach always fails."
    },
    {
      icon: '/problemicon-3.png',
      text: "One-and-done doesn't work for go-to-market. Without team alignment and buy-in, the GTM efforts will stall."
    }
  ];

  return (
    <section 
      id="problems"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[40px] pt-[40px] pb-[50px] sm:gap-[48px] sm:px-[80px] sm:pt-[50px] sm:pb-[65px] md:gap-[56px] md:px-[120px] md:pt-[60px] md:pb-[80px] lg:gap-[64px] lg:px-[160px] lg:pt-[80px] lg:pb-[100px] overflow-hidden"
      style={{ boxShadow: '0 -6px 6px -6px rgba(5, 9, 32, 0.9), 0 6px 6px -6px rgba(5, 9, 32, 0.9)' }}
      aria-labelledby="problem-heading"
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

      {/* Section Title */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[6px] text-center sm:gap-[8px]">
        <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
          THE PROBLEM
        </p>
        <h2 
          id="problem-heading"
          className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]"
        >
          Most GTM fails not because it&apos;s hard,<br />but because it&apos;s shallow
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-[16px] border border-solid border-[#3f4367] bg-[#1d2241] pt-[32px] px-[16px] pb-[32px]"
          >
            {/* Icon */}
            <div className="relative h-[28px] w-[28px] shrink-0">
              <Image
                src={card.icon}
                alt=""
                width={28}
                height={28}
                className="block h-full w-full"
              />
            </div>
            
            {/* Text */}
            <p className="w-full text-center text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

