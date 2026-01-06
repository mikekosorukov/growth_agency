import Image from 'next/image';
import Link from 'next/link';

export default function BookingSection() {

  return (
    <section
      id="book"
      className="booking-section-bg relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] px-[20px] pt-[40px] pb-[60px] sm:gap-[48px] sm:px-[40px] sm:pt-[50px] sm:pb-[80px] md:gap-[56px] md:px-[60px] md:pt-[60px] md:pb-[100px] lg:gap-[64px] lg:px-[80px] lg:pt-[80px] lg:pb-[120px] overflow-hidden"
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
            The GTM system for sustainable growth
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
        
        {/* Button */}
        <div className="relative flex shrink-0 items-center justify-center gap-[16px]">
          <Link
            href="/bookings"
            target="_blank"
            rel="noopener noreferrer"
            className="group hero-button relative h-[48px] shrink-0 border border-solid border-[#8c99eb] bg-gradient-to-r from-[#323966] to-[#232b5c] hover:from-[#3a4170] hover:to-[#2a3467] transition-all cursor-pointer sm:h-[50px] md:h-[52px] lg:h-[56px]"
            aria-label="Book a discovery call"
          >
            <div className="box-border flex h-full items-center justify-center overflow-clip rounded-[inherit] p-[12px] sm:p-[14px] lg:p-[16px]">
              <div className="relative box-border flex shrink-0 items-center justify-center gap-[10px] px-[12px] py-0 sm:px-[14px] lg:px-[16px]">
                <span className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-none tracking-[0.5px] sm:text-[17px] md:text-[18px] lg:text-[20px] bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-transparent">
                  Book a Discovery Call
                </span>
              </div>
              {/* Calendar Icon - appears on hover with cascade animation */}
              <div className="relative shrink-0 h-[20px] w-0 sm:h-[22px] lg:h-[24px] overflow-visible group-hover:w-[20px] sm:group-hover:w-[22px] lg:group-hover:w-[24px] transition-all duration-300 ease-out">
                <div className="relative size-full">
                  {/* Calendar outline - appears first */}
                  <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 4.5C3.67157 4.5 3 5.17157 3 6V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V6C21 5.17157 20.3284 4.5 19.5 4.5H4.5ZM1.5 6C1.5 4.34315 2.84315 3 4.5 3H19.5C21.1569 3 22.5 4.34315 22.5 6V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H4.5C2.84315 22.5 1.5 21.1569 1.5 19.5V6Z" fill="#8c99eb"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 1.5C6.41421 1.5 6.75 1.83579 6.75 2.25V3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75V2.25C5.25 1.83579 5.58579 1.5 6 1.5Z" fill="#8c99eb"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M18 1.5C18.4142 1.5 18.75 1.83579 18.75 2.25V3.75C18.75 4.16421 18.4142 4.5 18 4.5C17.5858 4.5 17.25 4.16421 17.25 3.75V2.25C17.25 1.83579 17.5858 1.5 18 1.5Z" fill="#8c99eb"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H21.75C22.1642 6.75 22.5 7.08579 22.5 7.5C22.5 7.91421 22.1642 8.25 21.75 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5Z" fill="#8c99eb"/>
                    </svg>
                  </div>
                  {/* Date "31" - appears second with delay */}
                  <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 delay-200 ease-out origin-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.8404 10.0837C15.9693 9.98875 16.1252 9.9375 16.2854 9.9375H16.5C16.9143 9.9375 17.25 10.2733 17.25 10.6875V18.5625C17.25 18.9767 16.9143 19.3125 16.5 19.3125C16.0858 19.3125 15.75 18.9767 15.75 18.5625V12.0137L14.695 12.7913C14.3616 13.037 13.892 12.9659 13.6463 12.6325C13.4006 12.299 13.4717 11.8295 13.8051 11.5838L15.8404 10.0837Z" fill="#8c99eb"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.5714 11.0055C6.89113 10.465 7.68897 9.75 8.99113 9.75C9.7101 9.75 10.4417 9.94447 11.0127 10.3794C11.6032 10.8291 11.9847 11.5122 11.986 12.3661C11.9892 12.7017 11.9255 13.0347 11.7986 13.3455C11.6718 13.656 11.4844 13.9383 11.2474 14.1756C10.5622 14.8746 9.57045 15.1233 8.99301 15.1233C8.57879 15.1233 8.24301 14.7875 8.24301 14.3733C8.24301 13.9591 8.57879 13.6233 8.99301 13.6233C9.10629 13.6233 9.32042 13.5931 9.56148 13.504C9.79948 13.4159 10.0185 13.2871 10.1777 13.1241C10.18 13.1218 10.1823 13.1195 10.1846 13.1172C10.2815 13.0204 10.3582 12.9053 10.4099 12.7785C10.4617 12.6516 10.4876 12.5158 10.486 12.3788C10.486 12.376 10.486 12.3731 10.486 12.3703C10.486 12.0018 10.3383 11.7512 10.1039 11.5727C9.84892 11.3785 9.45811 11.25 8.99113 11.25C8.28705 11.25 7.94864 11.6235 7.86243 11.7692C7.65155 12.1257 7.19158 12.2437 6.83507 12.0329C6.47856 11.822 6.36051 11.362 6.5714 11.0055Z" fill="#8c99eb"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.24402 14.373C8.24402 13.9588 8.57981 13.623 8.99402 13.623C9.62768 13.623 10.7251 13.8985 11.4775 14.6677C12.0219 15.2227 12.2345 15.966 12.2345 16.6957C12.2345 17.5835 11.8499 18.312 11.2304 18.8013C10.6281 19.2771 9.84275 19.4998 9.04137 19.4998C7.5216 19.4998 6.62629 18.4073 6.33857 17.9197C6.12806 17.5629 6.24661 17.1031 6.60334 16.8926C6.96008 16.6821 7.41992 16.8006 7.63042 17.1574C7.8002 17.4451 8.2952 17.9998 9.04137 17.9998C9.58014 17.9998 10.0164 17.8488 10.3006 17.6243C10.5676 17.4133 10.7345 17.1148 10.7345 16.6957C10.7345 16.2425 10.6041 15.9192 10.4064 15.7178L10.4054 15.7168C9.99916 15.3013 9.32588 15.123 8.99402 15.123C8.57981 15.123 8.24402 14.7873 8.24402 14.373Z" fill="#8c99eb"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

