export default function CompaniesSection() {
  return (
    <section
      className="relative box-border flex w-full flex-col items-center gap-[48px] bg-[#1d2241] px-[20px] pb-0 pt-[40px] sm:px-[40px] sm:pt-[50px] md:px-[60px] md:pt-[60px] lg:px-[80px] lg:pt-[80px]"
      aria-labelledby="companies-heading"
    >
      {/* Section Text */}
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-[48px]">
        <div className="flex w-full flex-col items-center gap-[8px] text-center">
          <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            COMPANIES
          </p>
          <h2
            id="companies-heading"
            className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]"
          >
            Companies I helped grow both as an external operator and a full-time employee
          </h2>
        </div>
      </div>
    </section>
  );
}








