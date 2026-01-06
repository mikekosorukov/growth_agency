import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1d2241] px-6 py-8 lg:px-20">
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
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        {/* Logo Container - Left */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative h-[21px] w-[40.5px]">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain object-center"
            />
          </div>
          <p className="text-[#a5aee9] text-sm lg:text-base font-normal leading-[1.4] whitespace-nowrap">
            GTM & Product Growth
          </p>
        </div>

        {/* Copyright Text - Center (Absolutely Positioned) */}
        <p className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-[#a5aee9] text-sm text-center whitespace-nowrap font-variation-100">
          MKG @ 2025. All rights reserved.
        </p>

        {/* Social Icons - Right */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="https://api.whatsapp.com/send?phone=66999089830"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[18px] h-[18px] flex items-center justify-center hover:brightness-125 hover:saturate-150 transition-all"
            aria-label="WhatsApp"
          >
            <Image
              src="/icon-whatsapp.svg"
              alt="WhatsApp"
              width={18}
              height={18}
              className="w-full h-full"
            />
          </Link>
          <Link
            href="https://x.com/MikeKosorukov"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[18px] h-[18px] flex items-center justify-center hover:brightness-125 hover:saturate-150 transition-all"
            aria-label="X (Twitter)"
          >
            <Image
              src="/icon-x-twitter.svg"
              alt="X (Twitter)"
              width={18}
              height={18}
              className="w-full h-full"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/mkosorukov/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[18px] h-[18px] flex items-center justify-center hover:brightness-125 hover:saturate-150 transition-all"
            aria-label="LinkedIn"
          >
            <Image
              src="/icon-linkedin.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="w-full h-full"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

