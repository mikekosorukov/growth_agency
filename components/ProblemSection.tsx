'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProblemSection() {
  const cards = [
    {
      icon: '/icon-calendar.svg',
      text: "Many founding teams don't have product and go-to-market resource. The founders spread too thin trying to built a team, ship the product and acquire customers"
    },
    {
      icon: '/icon-luggage.svg',
      text: "The fundamental variables that affect all facets of business - marketing, sales, product development - is understanding who you build for, why, and how it will move the needle for the business"
    },
    {
      icon: '/icon-activity.svg',
      text: "Separating the chaff from the wheats become even more difficult with the rise of Gen AI. This pushes companies even further away from the customers and serving their outcomes."
    },
    {
      icon: '/icon-car.svg',
      text: "External consultants and agencies lack in-depth knowledge and full immersion that is required to identify and solve the right customer problems"
    }
  ];

  return (
    <section 
      id="problems"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[50px] md:gap-[56px] md:px-[60px] md:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px]"
      aria-labelledby="problem-heading"
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
          THE PROBLEM
        </p>
        <h2 
          id="problem-heading"
          className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]"
        >
          Infliction point between early-stage and growth stage
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-[16px] border border-solid border-[#3f4367] bg-[#1d2241] p-[16px] transition-all hover:border-[#5f6387] hover:bg-[#222749]"
          >
            {/* Icon */}
            <div className="relative h-[48px] w-[48px] shrink-0">
              <Image
                src={card.icon}
                alt=""
                width={48}
                height={48}
                className="block h-full w-full"
              />
            </div>
            
            {/* Text */}
            <p className="w-full text-center text-[16px] font-normal leading-[1.4] text-[#dcdff2] sm:text-[17px] lg:text-[18px]">
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

