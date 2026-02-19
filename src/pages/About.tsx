import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import AboutHero from "@/components/about/AboutHero";
import ProfessionalBackground from "@/components/about/ProfessionalBackground";
import OurApproach from "@/components/about/OurApproach";
import ConfidentialityTrust from "@/components/about/ConfidentialityTrust";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <AboutHero />
      <ProfessionalBackground />
      <OurApproach />
      <ConfidentialityTrust />
      <AboutCTA />
    </main>
    <Footer />
  </div>
);

export default About;
