'use client';

import Image from 'next/image';

export default function DividerSection() {
  return (
    <div className="bg-[#1d2241] box-border content-stretch flex flex-col gap-[48px] items-center pb-[28px] pt-0 px-0 relative w-full isolate z-10" data-name="section" data-node-id="3328:18870">
      {/* Removed max-w-[1440px] to allow lines to fill full browser width on larger viewports */}
      <div className="h-[49px] relative shrink-0 w-full" data-node-id="3328:18895">
        <div className="absolute bottom-0 left-0 right-0 top-[-2.04%]">
          <Image
            alt=""
            src="/divider-decoration.svg"
            fill
            className="block object-cover"
          />
        </div>
      </div>
    </div>
  );
}

