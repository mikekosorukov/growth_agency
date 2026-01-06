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
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import DividerSection from "@/components/DividerSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1f] overflow-x-clip">
      <Header />
      
      <main className="overflow-visible">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Divider Section */}
        <DividerSection />
        
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
        
        {/* Video Showcase Section - Duplicate */}
        <VideoShowcaseSection id="content-showcase-problems-2" />
        
        {/* Divider Section */}
        <DividerSection />
        
        {/* Outcomes Section */}
        <OutcomesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Companies Section */}
        <CompaniesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Booking Section */}
        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
