import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactNextSteps from "@/components/contact/ContactNextSteps";
import ContactPayment from "@/components/contact/ContactPayment";
import ContactReassurance from "@/components/contact/ContactReassurance";

const Contact = () => (
  <div className="min-h-screen font-sans">
    <Header />
    <main>
      <ContactHero />
      <ContactForm />
      <ContactNextSteps />
      <ContactPayment />
      <ContactReassurance />
    </main>
    <Footer />
  </div>
);

export default Contact;
