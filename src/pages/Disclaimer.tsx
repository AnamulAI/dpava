import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-navy text-3xl md:text-4xl font-bold mb-8">Disclaimer</h1>
          <p className="text-muted-foreground text-sm mb-6">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">General Information</h2>
              <p>The information provided on the DPA Virtual Assistant website is for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the content.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Professional Services</h2>
              <p>DPA Virtual Assistant provides administrative and document processing support for maritime operations. Our services do not constitute legal, regulatory, or classification advice. Clients should consult qualified maritime professionals for regulatory compliance decisions.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">No Guarantee of Results</h2>
              <p>While we maintain high standards of accuracy and timeliness, we cannot guarantee specific outcomes such as audit results, PSC inspection scores, or regulatory approvals. Results depend on multiple factors beyond our control.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">External Links</h2>
              <p>Our website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of these third-party sites.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Limitation of Liability</h2>
              <p>In no event shall DPA Virtual Assistant be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Contact</h2>
              <p>If you have questions about this disclaimer, contact us at <a href="mailto:support@dpavirtualassistant.com" className="text-teal hover:underline">support@dpavirtualassistant.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
