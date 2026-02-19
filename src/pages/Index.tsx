import Header from "@/components/dpa/Header";
import Hero from "@/components/dpa/Hero";
import ProblemBlock from "@/components/dpa/ProblemBlock";
import SolutionFramework from "@/components/dpa/SolutionFramework";
import ServicesPreview from "@/components/dpa/ServicesPreview";
import CaseStudies from "@/components/dpa/CaseStudies";
import Testimonials from "@/components/dpa/Testimonials";
import CTABlock from "@/components/dpa/CTABlock";
import Footer from "@/components/dpa/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemBlock />
        <SolutionFramework />
        <ServicesPreview />
        <CaseStudies />
        <Testimonials />
        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
