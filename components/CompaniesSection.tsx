export default function CompaniesSection() {
  return (
    <section
      className="relative box-border flex w-full flex-col items-center gap-[48px] bg-[#1d2241] px-[20px] pb-0 pt-[40px] sm:px-[40px] sm:pt-[50px] md:px-[60px] md:pt-[60px] lg:px-[80px] lg:pt-[80px] overflow-hidden"
      aria-labelledby="companies-heading"
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
      
      {/* Section Text */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[48px]">
        <div className="flex w-full flex-col items-center gap-[8px] text-center">
          <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            TESTIMONIALS
          </p>
          <h2
            id="companies-heading"
            className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]"
          >
            Firsthand insights from tech teams
          </h2>
        </div>
      </div>
    </section>
  );
}









