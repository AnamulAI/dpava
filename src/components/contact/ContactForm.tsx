import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const WA_LINK = "https://wa.me/88017414688828";

const SERVICE_OPTIONS = [
  "Certification Tracking & Renewals",
  "SMS / ISM Documentation Support",
  "PSC / Flag / Class Audit Preparation",
  "LSA / FFA Servicing Coordination",
  "Operational Compliance Support",
  "Port Clearance Documentation Support",
  "New Vessel Takeover Documentation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    vesselCount: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Save to Supabase for CRM / admin use
    try {
      await supabase.from("contact_submissions").insert({
        full_name: form.fullName,
        email: form.email,
        company_name: form.company || null,
        vessel_count: form.vesselCount ? parseInt(form.vesselCount, 10) || null : null,
        service_needed: form.service || null,
        message: form.message,
      });
    } catch {
      // Silently continue — WhatsApp is the primary delivery
    }

    // Build WhatsApp message as fallback delivery
    const text = encodeURIComponent(
      `*Support Request*\nName: ${form.fullName}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nVessels: ${form.vesselCount}\nService: ${form.service}\n\n${form.message}`
    );
    window.open(`${WA_LINK}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="border border-teal/40 bg-teal/5 p-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              Request Sent
            </p>
            <h2 className="text-navy text-2xl font-bold mb-4">
              Your request has been forwarded via WhatsApp.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If WhatsApp didn't open, please send your details directly to{" "}
              <a
                href="mailto:support@dpavirtualassistant.com"
                className="text-teal font-medium"
              >
                support@dpavirtualassistant.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-light py-20 md:py-24 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">
            Enquiry Form
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-3">
            Request Compliance Support
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Fill in your details and a tailored support plan will be proposed
            within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-navy text-sm font-semibold mb-1.5">
                Full Name <span className="text-teal">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                maxLength={100}
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-dpa-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-navy text-sm font-semibold mb-1.5">
                Email Address <span className="text-teal">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                maxLength={255}
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-dpa-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-navy text-sm font-semibold mb-1.5">
                Company Name{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                name="company"
                maxLength={100}
                value={form.company}
                onChange={handleChange}
                placeholder="Shipping company or management company"
                className="w-full border border-dpa-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal transition-colors"
              />
            </div>

            {/* Vessel Count + Service — two column on md */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-navy text-sm font-semibold mb-1.5">
                  Vessel Count <span className="text-teal">*</span>
                </label>
                <select
                  name="vesselCount"
                  required
                  value={form.vesselCount}
                  onChange={handleChange}
                  className="w-full border border-dpa-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-teal transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select vessel count
                  </option>
                  <option>1</option>
                  <option>2 – 5</option>
                  <option>6 – 10</option>
                  <option>10+</option>
                </select>
              </div>

              <div>
                <label className="block text-navy text-sm font-semibold mb-1.5">
                  Service Needed <span className="text-teal">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-dpa-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-teal transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-navy text-sm font-semibold mb-1.5">
                Message <span className="text-teal">*</span>
              </label>
              <textarea
                name="message"
                required
                maxLength={1000}
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="e.g. We manage 3 vessels flagged under Panama and Marshall Islands. Looking for ongoing certification tracking, ISM documentation support, and PSC audit preparation. Vessels are bulk carriers operating in Asia-Pacific routes."
                className="w-full border border-dpa-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-3">
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-10 py-4 hover:bg-teal-hover transition-colors text-base"
                >
                  Request Support Plan
                </button>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                No upfront payment required. Support begins after agreement.
              </p>
            </div>

            {/* Confidentiality note */}
            <p className="text-muted-foreground text-xs leading-relaxed">
              All information shared is handled with strict confidentiality.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
