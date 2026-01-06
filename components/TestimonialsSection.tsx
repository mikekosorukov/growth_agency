'use client';

import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

interface Testimonial {
  authorName: string;
  authorRole: string;
  testimonialText: string;
  authorTitle: string;
  employmentType: string;
  avatarUrl: string;
}

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 1 }
    }
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on('init', onInit);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const testimonials: Testimonial[] = [
    {
      authorName: 'Jonathan Kite',
      authorRole: 'SEO at Rent Ready, a Real Estate Marketplace',
      testimonialText: '"From discovery through execution, ... Mike\'s contributions significantly elevated our product, and his dedication to customer-driven innovation was evident in every project he touched."',
      authorTitle: 'Fractional Product Growth Lead',
      employmentType: 'Contractor',
      avatarUrl: '/testimonial-1.png',
    },
    {
      authorName: 'Kirill Chabanov',
      authorRole: 'COO at aqua cloud, a Test Management SaaS',
      testimonialText: '"Mike\'s sharp in understanding the market and the customers, often diving deep into research and data analysis. That helped us a lot with better positioning of our product."',
      authorTitle: 'Product Manager: Digital Innovation',
      employmentType: 'Full-time',
      avatarUrl: '/testimonial-icon-2.jpeg',
    },
    {
      authorName: 'Leonid Netrebskii',
      authorRole: 'Head of Software Engineering at Rent Ready, a Real Estate Marketplace',
      testimonialText: '"Mike revolutionized our product approach: development teams are now happy to see the goals and values of their work, and product managers are focused on business impact."',
      authorTitle: 'Fractional Product Growth Lead',
      employmentType: 'Contractor',
      avatarUrl: '/testimonial-icon-3.png',
    },
  ];

  return (
    <section
      className="relative box-border flex w-full flex-col items-center gap-[64px] bg-[#1d2241] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-label="Client Testimonials"
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
      
      {/* Carousel Container */}
      <div className="relative z-10 w-full max-w-[1280px]">
        <div className="flex items-center gap-[16px]">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="group relative z-10 size-[24px] shrink-0 cursor-pointer transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="View previous testimonial"
          >
            <div className="absolute inset-[22.31%_33.28%_22.21%_34.76%]">
              <Image
                src="/chevron-left-testimonial.svg"
                alt=""
                fill
                className="transition-transform group-hover:scale-110"
              />
            </div>
          </button>

          {/* Embla Viewport */}
          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[16px]">
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="relative flex min-w-0 flex-[0_0_100%] flex-col border border-solid border-[#3f4367] bg-[#171c39] px-[40px] py-[24px] md:flex-[0_0_calc(50%-8px)]"
                >
                  {/* Content Wrapper - grows to fill space */}
                  <div className="relative z-10 flex flex-col gap-[16px] flex-grow">
                    {/* User Card */}
                    <div className="flex h-[64px] items-center justify-start gap-[8px]">
                      <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#1d2241]">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.authorName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-col items-start">
                        <p className="w-full text-[14px] font-medium leading-[1.1] text-[#dcdff2]">
                          {testimonial.authorName}
                        </p>
                        <p className="w-full text-[10px] font-normal leading-[1.4] text-[#a5aee9]">
                          {testimonial.authorRole}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-center text-[24px] font-normal leading-[1.4] text-[#a5aee9]">
                      {testimonial.testimonialText.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </blockquote>

                    {/* View on LinkedIn Button */}
                    <div className="flex justify-start mt-auto pt-[24px]">
                      <Link
                        href="https://www.linkedin.com/in/mkosorukov/details/recommendations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-10 flex shrink-0 items-center justify-center border border-solid border-[#494f8e] bg-[#0E1330]/30 px-[12px] py-[8px] transition-all hover:bg-[#1f2446] hover:border-[#7a82c4] cursor-pointer w-fit"
                        aria-label="View recommendation on LinkedIn"
                      >
                      <div className="flex items-center justify-center gap-[8px] px-[12px] py-0">
                        <span className="text-[14px] font-medium leading-none tracking-[0.5px] text-[#494f8e] whitespace-pre transition-colors group-hover:text-[#7a82c4]">
                          View on LinkedIn
                        </span>
                      </div>
                      <div className="relative h-[16px] w-[16px] overflow-hidden text-[#494f8e] transition-all group-hover:text-[#7a82c4]">
                        {/* LinkedIn Icon - slides out to the right on hover */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full absolute inset-0 transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-full group-hover:opacity-0">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                        </svg>
                        {/* External Link Icon - slides in from the left on hover */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full absolute inset-0 transition-all duration-300 ease-in-out transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </div>
                    </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="group relative z-10 size-[24px] shrink-0 cursor-pointer transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="View next testimonial"
          >
            <div className="absolute inset-[22.61%_34.47%_22.02%_33.68%]">
              <Image
                src="/chevron-right-testimonial.svg"
                alt=""
                fill
                className="transition-transform group-hover:scale-110"
              />
            </div>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-[32px] flex items-center justify-center gap-[12px]" role="tablist" aria-label="Testimonial pages">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`size-[12px] cursor-pointer rounded-full border border-solid transition-all ${
                index === selectedIndex
                  ? 'border-[#8c99eb] bg-[#8c99eb]'
                  : 'border-[#494f8e] bg-transparent hover:border-[#7a82c4]'
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : 'false'}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

