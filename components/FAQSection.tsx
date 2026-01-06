'use client';

import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: 'Can you build the app?',
      answer:
        'Yes, we specialize in building custom applications from the ground up. Our team has extensive experience in full-stack development, mobile app development, and web applications. We work closely with you to understand your requirements and deliver a product that meets your business objectives and delights your users.',
    },
    {
      question: 'Can you coach my staff?',
      answer:
        'Absolutely! We offer coaching and training programs tailored to your team\'s needs. Whether it\'s product management, growth strategies, or technical skills, we provide hands-on guidance and mentorship to help your staff develop the capabilities they need to drive your business forward.',
    },
    {
      question: 'Do you work with pre-seed startups?',
      answer:
        'Yes, we work with startups at all stages, including pre-seed. We understand the unique challenges early-stage companies face and offer flexible engagement models to fit your budget. Our goal is to help you validate your ideas, build an MVP, and position yourself for success in fundraising and growth.',
    },
    {
      question: 'Do you work with companies other than software?',
      answer:
        'While our core expertise is in software and technology, we work with companies across various industries. Our growth strategies and product development methodologies are applicable to any business looking to scale. We\'ve successfully partnered with e-commerce, healthcare, fintech, and service-based companies.',
    },
    {
      question: 'How can we get in touch?',
      answer:
        'Getting in touch is easy! You can book a call directly through our website, send us an email, or connect with us on LinkedIn. We typically respond within 24 hours and are happy to discuss your project, answer questions, and explore how we can help you achieve your growth goals.',
    },
  ];

  return (
    <section
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[50px] md:gap-[56px] md:px-[60px] md:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-label="Frequently Asked Questions"
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

      {/* Section Header */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[48px]">
        <div className="flex w-full flex-col items-center gap-[8px] text-center">
          <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            FAQ
          </p>
          <h2 className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            Find out if we could be a fit
          </h2>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="relative z-10 flex w-full max-w-[900px] flex-col gap-[16px]">
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div">
            {({ open }) => (
              <div className="w-full border border-solid border-[#3f4367] bg-[#1d2241] transition-all hover:border-[#5f6387]">
                <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between gap-[8px] p-[16px] text-left transition-all hover:bg-[#222749]">
                  <span className="font-variation-100 flex-1 text-[20px] font-bold leading-[1.1] text-[#a5aee9]">
                    {faq.question}
                  </span>
                  <div className="relative size-[24px] shrink-0">
                    {/* Plus Icon - visible when closed */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                        open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1V6H1C0.734784 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8H6V13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13V8H13C13.2652 8 13.5196 7.89464 13.7071 7.70711C13.8946 7.51957 14 7.26522 14 7C14 6.73478 13.8946 6.48043 13.7071 6.29289C13.5196 6.10536 13.2652 6 13 6H8Z" fill="#A5AEE9"/>
                      </svg>
                    </div>
                    {/* Minus Icon - visible when open */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                        open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                      }`}
                    >
                      <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H13C13.2652 2 13.5196 1.89464 13.7071 1.70711C13.8946 1.51957 14 1.26522 14 1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0H1Z" fill="#A5AEE9"/>
                      </svg>
                    </div>
                  </div>
                </Disclosure.Button>
                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out data-[open]:grid-rows-[1fr]" data-open={open || undefined}>
                  <div className="overflow-hidden">
                    <Disclosure.Panel static className="border-t border-[#3f4367]">
                      <div className="bg-[#0E1330]/40 px-[16px] pb-[16px] pt-[16px] opacity-0 transition-opacity duration-300 data-[open]:opacity-100" data-open={open || undefined}>
                        <p className="text-[18px] font-normal leading-[1.4] text-[#a5aee9]">
                          {faq.answer}
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </div>
                </div>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}

