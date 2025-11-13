'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function BookingSection() {
  const embedRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load script once
    if (scriptLoadedRef.current) return;
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="embed.js"]');
    if (existingScript) {
      scriptLoadedRef.current = true;
      console.log('[Cal.com] Script already exists, initializing embed...');
      // Wait a bit for script to be ready, then initialize
      setTimeout(() => {
        if (embedRef.current && window.Cal) {
          console.log('[Cal.com] Initializing with existing script...');
          try {
            window.Cal('inline', {
              elementOrSelector: embedRef.current,
              calLink: 'mkosorukov/bookings.mkgproductlab.com',
              layout: 'month_view',
            });
            console.log('[Cal.com] Embed initialized successfully');
          } catch (error) {
            console.error('[Cal.com] Error initializing embed:', error);
          }
        } else {
          console.warn('[Cal.com] window.Cal not available or element not found');
          console.log('[Cal.com] window.Cal:', window.Cal);
          console.log('[Cal.com] embedRef.current:', embedRef.current);
        }
      }, 100);
      return;
    }

    // Try multiple possible script URLs
    const scriptUrls = [
      'https://bookings.mkgproductlab.com/embed/embed.js',
      'https://bookings.mkgproductlab.com/embed.js',
    ];

    let currentUrlIndex = 0;

    const tryLoadScript = (urlIndex: number) => {
      if (urlIndex >= scriptUrls.length) {
        console.error('[Cal.com] All script URLs failed, using iframe fallback');
        const fallback = document.querySelector('.cal-embed-fallback') as HTMLIFrameElement;
        const embedDiv = document.querySelector('.cal-embed-inline') as HTMLElement;
        if (fallback && embedDiv) {
          embedDiv.style.display = 'none';
          fallback.style.display = 'block';
        }
        return;
      }

      const scriptUrl = scriptUrls[urlIndex];
        console.log(`[Cal.com] Attempting to load script from: ${scriptUrl}`);
        console.log('[Cal.com] License check: The embed should verify license from backend automatically.');

      // Load Cal.com embed script
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      
      script.onload = () => {
        scriptLoadedRef.current = true;
        console.log(`[Cal.com] Script loaded successfully from: ${scriptUrl}`);
        
        // Check license status
        console.log('[Cal.com] Checking license status...');
        fetch('https://bookings.mkgproductlab.com/api/trpc/viewer.public.license.check')
          .then(r => r.json())
          .then(data => {
            console.log('[Cal.com] License check response:', data);
            if (data?.result?.data?.json?.valid) {
              console.log('[Cal.com] ✅ License is VALID - branding should be removed');
            } else {
              console.warn('[Cal.com] ⚠️ License is NOT valid or not recognized');
              console.log('[Cal.com] Check NorthFlank env vars and restart the instance');
            }
          })
          .catch(e => {
            console.warn('[Cal.com] Could not verify license status:', e);
            console.log('[Cal.com] Try: https://bookings.mkgproductlab.com/settings/admin/license');
          });
        
        // Poll for Cal to become available (script might need time to initialize)
        let attempts = 0;
        const maxAttempts = 20; // Try for up to 4 seconds (20 * 200ms)
        
        const checkForCal = setInterval(() => {
          attempts++;
          console.log(`[Cal.com] Checking for window.Cal (attempt ${attempts}/${maxAttempts})...`);
          console.log('[Cal.com] window.Cal type:', typeof window.Cal);
          
          // Check for any Cal-related globals
          const calKeys = Object.keys(window).filter(k => k.toLowerCase().includes('cal'));
          if (calKeys.length > 0) {
            console.log('[Cal.com] Found Cal-related window keys:', calKeys);
            calKeys.forEach(key => {
              console.log(`[Cal.com] window.${key}:`, (window as any)[key]);
            });
          }
          
          // Also check if embed might have auto-initialized
          if (embedRef.current && embedRef.current.children.length > 0) {
            console.log('[Cal.com] ⚠️ Embed element has children - might have auto-initialized!');
            console.log('[Cal.com] Children:', embedRef.current.children);
          }
          
          // Check if Cal is now available
          if (window.Cal) {
            clearInterval(checkForCal);
            console.log('[Cal.com] ✅ window.Cal is now available!');
            
            if (embedRef.current) {
              console.log('[Cal.com] Initializing embed...');
              
              // Try different calLink formats
              const calLinkFormats = [
                'mkosorukov/bookings.mkgproductlab.com',
                'mkosorukov',
                'bookings.mkgproductlab.com/mkosorukov',
              ];

              let formatIndex = 0;
              const tryInitialize = () => {
                if (formatIndex >= calLinkFormats.length) {
                  console.error('[Cal.com] All calLink formats failed, check console for details');
                  // Show iframe fallback as last resort
                  const fallback = document.querySelector('.cal-embed-fallback') as HTMLIFrameElement;
                  const embedDiv = document.querySelector('.cal-embed-inline') as HTMLElement;
                  if (fallback && embedDiv) {
                    embedDiv.style.display = 'none';
                    fallback.style.display = 'block';
                  }
                  return;
                }

                const calLink = calLinkFormats[formatIndex];
                console.log(`[Cal.com] Trying calLink format: ${calLink}`);
                
                try {
                  window.Cal('inline', {
                    elementOrSelector: embedRef.current,
                    calLink: calLink,
                    layout: 'month_view',
                  });
                  console.log(`[Cal.com] Embed initialization called with format: ${calLink}`);
                  console.log('[Cal.com] Check the page to see if embed rendered. If not, next format will be tried.');
                  
                  // Give it a moment to render, then check if content appeared
                  setTimeout(() => {
                    const embedElement = embedRef.current;
                    if (embedElement && embedElement.children.length > 0) {
                      console.log(`[Cal.com] ✅ Embed rendered successfully with format: ${calLink}`);
                    } else {
                      console.warn(`[Cal.com] ⚠️ Embed did not render with format: ${calLink}, trying next...`);
                      formatIndex++;
                      tryInitialize();
                    }
                  }, 1500);
                } catch (error) {
                  console.error(`[Cal.com] ❌ Error with format ${calLink}:`, error);
                  formatIndex++;
                  tryInitialize();
                }
              };

              tryInitialize();
            } else {
              console.error('[Cal.com] embedRef.current is null');
            }
          } else if (attempts >= maxAttempts) {
            clearInterval(checkForCal);
            console.log('[Cal.com] ℹ️ window.Cal not available, but this is OK if embed auto-initialized from data attributes.');
            console.log('[Cal.com] Checking if embed auto-initialized from data attributes...');
            
            // Check if embed auto-initialized from data attributes
            setTimeout(() => {
              const embedElement = embedRef.current;
              if (embedElement && embedElement.children.length > 0) {
                console.log('[Cal.com] ✅ Embed successfully auto-initialized from data attributes!');
                console.log('[Cal.com] The embed is working - window.Cal is not needed for auto-initialization.');
              } else {
                console.warn('[Cal.com] ⚠️ Embed did not auto-initialize. Using iframe fallback.');
                const fallback = document.querySelector('.cal-embed-fallback') as HTMLIFrameElement;
                const embedDiv = document.querySelector('.cal-embed-inline') as HTMLElement;
                if (fallback && embedDiv) {
                  embedDiv.style.display = 'none';
                  fallback.style.display = 'block';
                }
              }
            }, 1000);
          }
        }, 200); // Check every 200ms
      };
      
      script.onerror = () => {
        console.warn(`[Cal.com] Script failed to load from: ${scriptUrl}`);
        // Try next URL
        tryLoadScript(urlIndex + 1);
      };
      
      document.body.appendChild(script);
    };

    tryLoadScript(0);

    return () => {
      // Cleanup: don't remove script as it might be used elsewhere
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <section
      id="book"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[50px] md:gap-[56px] md:px-[60px] md:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px]"
      aria-label="Book a consultation"
    >
      {/* Background with texture overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#171c39]" />
        <Image
          src="/faq-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-20 mix-blend-soft-light"
          priority={false}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-[48px]">
        {/* Section Text */}
        <div className="relative flex w-full flex-col items-start gap-[34px] text-center">
          {/* Top Container */}
          <div className="relative flex w-full flex-col items-center gap-[8px]">
            <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
              CONNECT
            </p>
            <h2 className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]">
              Book a time to speak with me
            </h2>
          </div>
          
          {/* Description */}
          <p className="font-variation-100 relative w-full shrink-0 text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] md:text-[18px]">
            <span>Please select the time that fits you or just text me in </span>
            <Link
              href="https://t.me/markknd"
              className="cursor-pointer underline decoration-solid underline-offset-2 transition-colors hover:text-[#c9d1ff]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via Telegram"
            >
              Telegram
            </Link>
            <span> / </span>
            <Link
              href="https://wa.me/77778451175"
              className="cursor-pointer underline decoration-solid underline-offset-2 transition-colors hover:text-[#c9d1ff]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp
            </Link>
          </p>
        </div>
        
        {/* Calendar Widget Container - Cal.com integration */}
        <div className="relative w-full max-w-[1200px]">
          <div 
            ref={embedRef}
            className="cal-embed cal-embed-inline"
            data-cal-link="mkosorukov/bookings.mkgproductlab.com"
            data-cal-config='{"layout":"month_view","theme":"dark","brandColor":"#8c99eb"}'
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
          {/* Fallback iframe in case embed script doesn't work */}
          <iframe
            src="https://bookings.mkgproductlab.com/mkosorukov?embed=true&theme=dark"
            className="cal-embed-fallback"
            style={{
              width: '100%',
              height: '800px',
              border: 'none',
              borderRadius: '8px',
              display: 'none' // Hidden by default, shown if embed script fails
            }}
            title="Book a consultation"
            allow="camera; microphone; geolocation"
          />
        </div>
      </div>
    </section>
  );
}

