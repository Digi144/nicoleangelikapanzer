import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SegmentSelector } from "@/components/sections/SegmentSelector";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { BurnoutSection } from "@/components/sections/BurnoutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SegmentSelector />
      <ProblemSection />
      <MethodSection />
      <OfferSection />
      <BurnoutSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}

