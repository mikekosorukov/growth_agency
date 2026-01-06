'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

interface NotificationProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Notification({ isVisible, onClose }: NotificationProps) {
  const notificationRef = useRef<HTMLDivElement>(null);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Close notification first
    onClose();

    // Calculate the position accounting for sticky header (73px)
    const offset = 81;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    
    // Animate scroll using Motion
    animate(startPosition, targetPosition, {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo('about');
  };

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Add event listener after a short delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={notificationRef}
          initial={{ opacity: 0, x: 700 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 700 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed right-4 top-[90px] z-[100] w-full max-w-[600px]"
        >
          <div className="notification-container relative box-border flex w-full flex-col items-start overflow-hidden bg-[#323966] py-0 pl-[16px] pr-0">
            <div className="relative flex w-full shrink-0 items-start gap-[16px]">
              {/* Icon */}
              <div className="relative flex h-[48px] shrink-0 items-center justify-center gap-[10px]">
                <div className="relative size-[24px] shrink-0 overflow-clip">
                  <Image
                    src="/icon-info-notification.svg"
                    alt="Info"
                    width={24}
                    height={24}
                    className="size-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative box-border flex min-h-px min-w-px grow basis-0 flex-col items-start px-0 pb-0 pt-[14px] shrink-0">
                <div className="relative flex w-full shrink-0 items-center gap-[4px] text-[14px]">
                  <div className="relative flex shrink-0 flex-col justify-center whitespace-pre text-nowrap font-medium leading-[0] text-[#dcdff2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="whitespace-pre leading-[1.1]">Coming soon.</p>
                  </div>
                  <p className="relative min-h-px min-w-px grow basis-0 shrink-0 font-normal leading-[1.4] text-[#a5aee9]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <Link
                      href="#about"
                      onClick={handleContactClick}
                      className="cursor-pointer underline decoration-solid underline-offset-2 transition-colors hover:text-[#c9d1ff]"
                      aria-label="Contact about case studies"
                    >
                      Contact
                    </Link>
                    {' '}to get early info.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="relative flex h-[48px] shrink-0 items-center justify-end">
                <button
                  onClick={onClose}
                  className="relative flex size-[48px] shrink-0 items-center justify-center gap-[10px] transition-opacity hover:opacity-70"
                  aria-label="Close notification"
                >
                  <div className="relative size-[11px] shrink-0 overflow-clip">
                    <Image
                      src="/icon-close-notification.svg"
                      alt="Close"
                      width={11}
                      height={11}
                      className="size-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

