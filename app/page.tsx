import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import OutcomesSection from "@/components/OutcomesSection";
import CompaniesSection from "@/components/CompaniesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContentShowcaseSection from "@/components/ContentShowcaseSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import SolutionIntroSection from "@/components/SolutionIntroSection";
import SecondaryNav from "@/components/SecondaryNav";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1f]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Problem Section */}
        <ProblemSection />
        
        {/* Solution Intro Section */}
        <SolutionIntroSection />
        
        {/* Secondary Navigation */}
        <SecondaryNav />
        
        {/* Content Showcase Section */}
        <ContentShowcaseSection id="content-showcase-outcomes" />
        
        {/* Video Showcase Section */}
        <VideoShowcaseSection id="content-showcase-problems" />
        
        {/* Content Showcase Section */}
        <ContentShowcaseSection id="content-showcase-solutions" />
        
        {/* Outcomes Section */}
        <OutcomesSection />
        
        {/* Companies Section */}
        <CompaniesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Booking Section */}
        <BookingSection />
        
        {/* Other sections */}
        <div className="container mx-auto px-6 py-20">
          <section id="services" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
              <p className="text-lg text-[#a5aee9]">
                Scroll to see the sticky header in action
              </p>
            </div>
          </section>

          <section id="portfolio" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
              <p className="text-lg text-[#a5aee9]">
                Our work speaks for itself
              </p>
            </div>
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">About</h2>
              <p className="text-lg text-[#a5aee9]">
                Learn more about our team
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
