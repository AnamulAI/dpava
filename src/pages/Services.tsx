import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicePackages from "@/components/services/ServicePackages";
import AllInOnePackage from "@/components/services/AllInOnePackage";
import ServiceScope from "@/components/services/ServiceScope";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <ServicesHero />
      <ServicePackages />
      <AllInOnePackage />
      <ServiceScope />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
    <Footer />
  </div>
);

export default Services;
