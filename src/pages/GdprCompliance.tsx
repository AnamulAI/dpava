import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";

export default function GdprCompliance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-navy text-3xl md:text-4xl font-bold mb-8">GDPR Compliance</h1>
          <p className="text-muted-foreground text-sm mb-6">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Our Commitment</h2>
              <p>DPA Virtual Assistant is committed to compliance with the General Data Protection Regulation (GDPR) for all clients and users within the European Economic Area (EEA).</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Lawful Basis for Processing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contractual Necessity:</strong> Processing required to fulfil service agreements with clients.</li>
                <li><strong>Legitimate Interest:</strong> Improving our services and website experience.</li>
                <li><strong>Consent:</strong> Marketing communications are only sent with explicit opt-in consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Your Rights Under GDPR</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data.</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format.</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interest.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Data Retention</h2>
              <p>Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Client service data is retained for the duration of the engagement plus any legally required retention period.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">International Transfers</h2>
              <p>Where data is transferred outside the EEA, we ensure appropriate safeguards are in place, including standard contractual clauses approved by the European Commission.</p>
            </section>

            <section>
              <h2 className="text-navy text-xl font-semibold mb-3">Contact the Data Controller</h2>
              <p>To exercise any of your GDPR rights, contact us at <a href="mailto:support@dpavirtualassistant.com" className="text-teal hover:underline">support@dpavirtualassistant.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
