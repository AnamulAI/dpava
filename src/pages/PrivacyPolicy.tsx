import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-navy text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-6">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">1. Introduction</h2>
              <p>DPA Virtual Assistant ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you use our website and services.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company name submitted through our contact form.</li>
                <li><strong>Service-Related Data:</strong> Vessel details, fleet size, and service requirements shared during consultations.</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website via cookies and analytics tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and provide requested services.</li>
                <li>To improve our website experience and service offerings.</li>
                <li>To send relevant updates if you have opted in to communications.</li>
                <li>To comply with legal obligations and maritime regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">4. Data Sharing</h2>
              <p>We do not sell or rent your personal data. Information may be shared with trusted service providers who assist in delivering our services, subject to strict confidentiality agreements.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">5. Data Security</h2>
              <p>We implement industry-standard security measures including encryption, secure servers, and access controls to protect your information.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, contact us at <a href="mailto:support@dpavirtualassistant.com" className="text-teal hover:underline">support@dpavirtualassistant.com</a>.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">7. Contact</h2>
              <p>For questions regarding this policy, reach us at <a href="mailto:support@dpavirtualassistant.com" className="text-teal hover:underline">support@dpavirtualassistant.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
