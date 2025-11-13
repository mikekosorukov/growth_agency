import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border border-[#3f4367] bg-[#1d2241] px-6 py-8 lg:px-20">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
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
            Product Growth & Innovation
          </p>
        </div>

        {/* Copyright Text - Center (Absolutely Positioned) */}
        <p className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-[#a5aee9] text-sm text-center whitespace-nowrap font-variation-100">
          MKG @ 2025. All rights reserved.
        </p>

        {/* Social Icons - Right */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[18px] h-[18px] flex items-center justify-center hover:opacity-80 transition-opacity"
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
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[18px] h-[18px] flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Twitter"
          >
            <Image
              src="/icon-twitter.svg"
              alt="Twitter"
              width={18}
              height={18}
              className="w-full h-full"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[18px] h-[18px] flex items-center justify-center hover:opacity-80 transition-opacity"
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

