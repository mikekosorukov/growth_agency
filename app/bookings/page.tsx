'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingsPage() {
  const embedRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);
  const calendarReadyRef = useRef(false);

  // Function to detect when Cal.com calendar is actually ready
  const detectCalendarReady = () => {
    if (calendarReadyRef.current) return; // Already detected
    
    const embedElement = embedRef.current;
    if (!embedElement) return;

    console.log('[Cal.com] 🔍 Starting calendar readiness detection...');
    
    // Look for the Cal.com iframe
    const iframe = embedElement.querySelector('iframe') as HTMLIFrameElement;
    
    if (iframe) {
      console.log('[Cal.com] ✅ Found iframe element');
      
      // Method 1: Listen for iframe load event
      const handleIframeLoad = () => {
        console.log('[Cal.com] 📡 Iframe load event fired');
        
        // Additional check: wait a bit for content to render inside iframe
        setTimeout(() => {
          // Check if iframe has actual content (not just empty/loading state)
          try {
            // Check iframe dimensions as a proxy for loaded content
            const iframeRect = iframe.getBoundingClientRect();
            if (iframeRect.height > 100) {
              console.log('[Cal.com] ✅ Iframe has content (height > 100px), marking as ready');
              if (!calendarReadyRef.current) {
                calendarReadyRef.current = true;
                setIsCalendarLoading(false);
              }
            } else {
              console.log('[Cal.com] ⚠️ Iframe height too small, continuing to wait...');
            }
          } catch (e) {
            console.log('[Cal.com] ⚠️ Cannot access iframe internals (CORS), using fallback detection');
            // If we can't access iframe internals due to CORS, assume it's ready after load event
            if (!calendarReadyRef.current) {
              calendarReadyRef.current = true;
              setIsCalendarLoading(false);
            }
          }
        }, 800); // Wait 800ms after iframe load for content to render
      };
      
      if (iframe.complete || iframe.contentDocument?.readyState === 'complete') {
        console.log('[Cal.com] Iframe already loaded');
        handleIframeLoad();
      } else {
        iframe.addEventListener('load', handleIframeLoad);
        console.log('[Cal.com] Added load event listener to iframe');
      }
      
      // Method 2: MutationObserver to watch for Cal.com UI elements
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length > 0) {
            // Check if meaningful content was added
            const hasCalendarUI = embedElement.querySelector('[class*="cal-"], [data-cal-], [id*="cal-"]');
            if (hasCalendarUI && !calendarReadyRef.current) {
              console.log('[Cal.com] ✅ Detected Cal.com UI elements via MutationObserver');
              calendarReadyRef.current = true;
              setIsCalendarLoading(false);
              observer.disconnect();
              break;
            }
          }
        }
      });
      
      observer.observe(embedElement, {
        childList: true,
        subtree: true,
        attributes: false
      });
      
      // Cleanup timeout
      setTimeout(() => {
        observer.disconnect();
      }, 15000);
      
    } else {
      console.log('[Cal.com] ⏳ No iframe found yet, will retry...');
    }
  };

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
        const Cal = window.Cal;
        if (embedRef.current && Cal) {
          console.log('[Cal.com] Initializing with existing script...');
          try {
            Cal('inline', {
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
                  if (window.Cal && embedRef.current) {
                    window.Cal('inline', {
                      elementOrSelector: embedRef.current,
                      calLink: calLink,
                      layout: 'month_view',
                    });
                  }
                  console.log(`[Cal.com] Embed initialization called with format: ${calLink}`);
                  console.log('[Cal.com] Check the page to see if embed rendered. If not, next format will be tried.');
                  
                  // Give it a moment to render, then check if content appeared
                  setTimeout(() => {
                    const embedElement = embedRef.current;
                    if (embedElement && embedElement.children.length > 0) {
                      console.log(`[Cal.com] ✅ Embed rendered successfully with format: ${calLink}`);
                      // Start monitoring for actual calendar readiness
                      detectCalendarReady();
                      // Also set up a polling mechanism to retry detection
                      const pollInterval = setInterval(() => {
                        detectCalendarReady();
                        if (calendarReadyRef.current) {
                          clearInterval(pollInterval);
                        }
                      }, 500);
                      // Stop polling after 15 seconds
                      setTimeout(() => {
                        clearInterval(pollInterval);
                        if (!calendarReadyRef.current) {
                          console.log('[Cal.com] ⏱️ Timeout reached, showing calendar anyway');
                          calendarReadyRef.current = true;
                          setIsCalendarLoading(false);
                        }
                      }, 15000);
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
                // Start monitoring for actual calendar readiness
                detectCalendarReady();
                // Set up polling
                const pollInterval = setInterval(() => {
                  detectCalendarReady();
                  if (calendarReadyRef.current) {
                    clearInterval(pollInterval);
                  }
                }, 500);
                setTimeout(() => {
                  clearInterval(pollInterval);
                  if (!calendarReadyRef.current) {
                    console.log('[Cal.com] ⏱️ Timeout reached, showing calendar anyway');
                    calendarReadyRef.current = true;
                    setIsCalendarLoading(false);
                  }
                }, 15000);
              } else {
                console.warn('[Cal.com] ⚠️ Embed did not auto-initialize. Using iframe fallback.');
                const fallback = document.querySelector('.cal-embed-fallback') as HTMLIFrameElement;
                const embedDiv = document.querySelector('.cal-embed-inline') as HTMLElement;
                if (fallback && embedDiv) {
                  embedDiv.style.display = 'none';
                  fallback.style.display = 'block';
                  // For fallback iframe, wait for its load event
                  fallback.addEventListener('load', () => {
                    console.log('[Cal.com] Fallback iframe loaded');
                    setTimeout(() => {
                      calendarReadyRef.current = true;
                      setIsCalendarLoading(false);
                    }, 1000);
                  });
                } else {
                  setTimeout(() => {
                    calendarReadyRef.current = true;
                    setIsCalendarLoading(false);
                  }, 3000);
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
              backgroundImage: 'url(/300-60-15-monochrome.png)',
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
            
            {/* Calendar Widget Container - Cal.com integration */}
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
      </main>

      <Footer />
    </div>
  );
}

