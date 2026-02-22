import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-navy text-3xl md:text-4xl font-bold mb-8">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground text-sm mb-6">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the DPA Virtual Assistant website and services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">2. Services</h2>
              <p>DPA Virtual Assistant provides maritime document processing, compliance support, and crew management assistance. Service scope is defined by individual agreements with each client.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">3. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information required for service delivery.</li>
                <li>Maintain confidentiality of any account credentials provided.</li>
                <li>Comply with all applicable maritime and international regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">4. Confidentiality</h2>
              <p>All client data, vessel information, and documents shared with DPA Virtual Assistant are treated as strictly confidential and handled in accordance with our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">5. Limitation of Liability</h2>
              <p>DPA Virtual Assistant provides administrative and document processing support. We are not liable for decisions made based on information we process. Our liability is limited to the fees paid for the specific service in question.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">6. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days' written notice. Outstanding fees remain payable upon termination.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">7. Governing Law</h2>
              <p>These terms are governed by the laws of Bangladesh. Any disputes shall be resolved through arbitration in Chattogram, Bangladesh.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">8. Contact</h2>
              <p>Questions about these terms can be directed to <a href="mailto:support@dpavirtualassistant.com" className="text-teal hover:underline">support@dpavirtualassistant.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
