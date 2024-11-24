import LandingPageAbout from "@/components/landing-page/AboutSection";
import ApproachSection from "@/components/landing-page/ApproachSection";
import BlogsSection from "@/components/landing-page/BlogsSection";
import HeroSection from "@/components/landing-page/HeroSection";
import MasterySection from "@/components/landing-page/MasterySection";
import PortfolioSection from "@/components/landing-page/PortfolioSection";
import ServicesSection from "@/components/landing-page/ServicesSection";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LandingPageAbout />
      <PortfolioSection />
      <ServicesSection />
      <MasterySection />
      <ApproachSection />
      <Testimonials />
      <BlogsSection />
    </>
  );
}
