import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import CaseStudiesDetail from "@/components/case-studies/CaseStudiesDetail";
import CaseStudiesApproach from "@/components/case-studies/CaseStudiesApproach";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";

const CaseStudies = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesDetail />
      <CaseStudiesApproach />
      <CaseStudiesCTA />
    </main>
    <Footer />
  </div>
);

export default CaseStudies;
