'use client';

export default function SolutionIntroSection() {
  return (
    <section
      id="solutions"
      className="relative box-border flex w-full flex-col items-center gap-[48px] bg-[#1d2241] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px]"
      aria-labelledby="solution-heading"
    >
      <div className="box-border flex w-full max-w-[1280px] flex-col gap-[34px] px-0 text-center sm:px-[20px] md:px-[40px] lg:px-[100px]">
        {/* Top - Tag and Heading */}
        <div className="flex w-full flex-col items-center gap-[8px]">
          <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            THE SOLUTION
          </p>
          <h2
            id="solution-heading"
            className="w-full text-[28px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[32px] md:text-[36px] lg:text-[42px]"
          >
            Bibendum amet at molestie mattis.
          </h2>
        </div>
        
        {/* Body Text */}
        <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi.
        </p>
      </div>
    </section>
  );
}

