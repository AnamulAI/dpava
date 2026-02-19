import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import AboutHero from "@/components/about/AboutHero";
import ProfessionalBackground from "@/components/about/ProfessionalBackground";
import ShippingCompanies from "@/components/about/ShippingCompanies";
import OurApproach from "@/components/about/OurApproach";
import RegulatoryFramework from "@/components/about/RegulatoryFramework";
import Qualifications from "@/components/about/Qualifications";
import ConfidentialityTrust from "@/components/about/ConfidentialityTrust";

const About = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <AboutHero />
      <ProfessionalBackground />
      <ShippingCompanies />
      <OurApproach />
      <RegulatoryFramework />
      <Qualifications />
      <ConfidentialityTrust />
    </main>
    <Footer />
  </div>
);

export default About;
