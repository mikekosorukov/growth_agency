'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// CalApi type from types/cal.d.ts
type CalApi = NonNullable<typeof window.Cal>;

export default function BookingsPage() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);
  const calInitialized = useRef(false);

  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    // Cal.com embed initialization (official pattern)
    (function (C: Window, A: string, L: string) {
      const p = function (a: CalApi, ar: unknown[]) {
        if (a.q) a.q.push(ar);
      };
      const d = C.document;
      
      C.Cal = C.Cal || function (...args: unknown[]) {
        const cal = C.Cal as CalApi;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api: CalApi = function (...apiArgs: unknown[]) {
            p(api, apiArgs);
          };
          const namespace = args[1];
          api.q = api.q || [];
          if (typeof namespace === 'string' && cal.ns) {
            cal.ns[namespace] = api;
            return api;
          }
          return;
        }
        p(cal, args);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize Cal.com
    if (window.Cal) {
      window.Cal('init', { origin: 'https://app.cal.com' });

      // Create the inline embed
      window.Cal('inline', {
        elementOrSelector: '#cal-embed',
        calLink: 'mike-kosorukov/25min',
        layout: 'month_view',
        config: {
          theme: 'dark',
        }
      });

      // Configure UI
      window.Cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    }

    // Hide loading indicator after a delay
    const timer = setTimeout(() => {
      setIsCalendarLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1f]">
      <Header />
      
      <main>
        <section
          className="relative box-border flex w-full flex-col items-center gap-[40px] border-x border-b border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[50px] md:gap-[56px] md:px-[60px] md:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px] overflow-hidden"
          aria-label="Book a consultation"
        >
          {/* Noise texture overlay */}
          <div 
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              backgroundImage: 'url(/300-60-15-monochrome.webp)',
              backgroundRepeat: 'repeat',
              backgroundSize: '350px 350px',
              mixBlendMode: 'soft-light',
              opacity: 0.65,
            }}
          />

          <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-[48px]">
            {/* Section Text */}
            <div className="relative flex w-full flex-col items-start gap-[34px] text-center">
              {/* Top Container */}
              <div className="relative flex w-full flex-col items-center gap-[8px]">
                <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
                  CONNECT
                </p>
                <h2 className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
                Book a time to talk
                </h2>
              </div>
              
              {/* Description */}
              <p className="font-variation-100 relative w-full shrink-0 text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] md:text-[18px]">
                <span>Pick a time that works for you — or message us on </span>
                <Link
                  href="https://t.me/mkosorukov"
                  className="cursor-pointer underline decoration-solid underline-offset-2 transition-colors hover:text-[#c9d1ff]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via Telegram"
                >
                  Telegram
                </Link>
                <span> / </span>
                <Link
                  href="https://api.whatsapp.com/send?phone=66999089830"
                  className="cursor-pointer underline decoration-solid underline-offset-2 transition-colors hover:text-[#c9d1ff]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                >
                  WhatsApp
                </Link>
              </p>
            </div>
            
            {/* Calendar Widget Container - Cal.com Cloud integration */}
            <div className="relative w-full max-w-[1200px]">
              {/* Loading Indicator - Spinning Octagon */}
              {isCalendarLoading && (
                <div 
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-[16px] pointer-events-none"
                  style={{ minHeight: '600px' }}
                >
                  <p className="text-[14px] font-normal text-[#a5aee9] tracking-wide">
                    The calendar is loading ...
                  </p>
                  <div 
                    className="animate-spin"
                    style={{ 
                      width: '45px', 
                      height: '45px',
                      animationDuration: '2s',
                      animationTimingFunction: 'linear'
                    }}
                  >
                    <Image
                      src="/hero-layer-3-octagon.svg"
                      alt="Loading..."
                      width={45}
                      height={45}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
              
              <div 
                ref={embedRef}
                id="cal-embed"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  overflow: 'hidden',
                  minHeight: '600px',
                  backgroundColor: '#171c39',
                  border: '1px solid #3f4367',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
