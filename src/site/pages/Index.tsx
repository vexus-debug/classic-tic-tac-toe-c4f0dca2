import Layout from "@/site/components/Layout";
import HeroSection from "@/site/components/home/HeroSection";
import TrustStrip from "@/site/components/home/TrustStrip";
import FeaturesOverviewSection from "@/site/components/home/FeaturesOverviewSection";
import HowItWorksSection from "@/site/components/home/HowItWorksSection";
import DashboardShowcaseSection from "@/site/components/home/DashboardShowcaseSection";
import AnalyzeSection from "@/site/components/home/AnalyzeSection";
import TestimonialsSection from "@/site/components/home/TestimonialsSection";
import FAQSection from "@/site/components/home/FAQSection";
import CTASection from "@/site/components/home/CTASection";
import { IndustryProvider } from "@/site/components/home/industry";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IndustryProvider>
        <TrustStrip />
        <FeaturesOverviewSection />
        <HowItWorksSection />
        <DashboardShowcaseSection />
        <AnalyzeSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </IndustryProvider>
    </Layout>
  );
};

export default Index;
