import { Link } from "react-router-dom";
import { Mail, Phone, Headset, MapPin } from "lucide-react";

const SERVICE_ITEMS = [
  "Certification Tracking",
  "ISM / SMS Updates",
  "Audit Preparation",
  "Port Clearance Support",
  "Compliance Reporting",
  "Vendor Coordination",
  "Survey Planning",
  "Deficiency Response",
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "GDPR Compliance", href: "/gdpr" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer
      className="w-full relative"
      style={{ background: "linear-gradient(180deg, #0B1F3B 0%, #08162B 100%)" }}
    >
      {/* Content wrapper */}
      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 1200, paddingTop: 56, paddingBottom: 32, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* A) MAIN FOOTER — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Col 1: Brand */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
              DPA<span style={{ color: "rgba(255,255,255,0.70)" }}> Virtual</span> Assistant
            </h3>
            <p style={{ fontSize: 14, lineHeight: "22px", fontWeight: 400, color: "rgba(255,255,255,0.60)" }}>
              Professional maritime document processing and crew management support — serving shipping companies worldwide with 24/7 availability.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.50)", marginBottom: 14 }}>
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICE_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="transition-colors hover:underline"
                    style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.50)", marginBottom: 14 }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:support@dpavirtualassistant.com" className="flex items-center gap-2 transition-colors hover:underline"
                  style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}>
                  <Mail size={14} className="shrink-0" /> support@dpavirtualassistant.com
                </a>
              </li>
              <li>
                <a href="tel:+8801741468828" className="flex items-center gap-2 transition-colors hover:underline"
                  style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}>
                  <Phone size={14} className="shrink-0" /> +880 1741-468828
                </a>
              </li>
              <li className="flex items-center gap-2" style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.60)" }}>
                <Headset size={14} className="shrink-0" /> 24/7 Support Available
              </li>
              <li className="flex items-center gap-2" style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.50)", marginTop: 4 }}>
                <MapPin size={14} className="shrink-0" /> Based in: Chattogram, Bangladesh | Serving globally
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 40, marginBottom: 24, borderTop: "1px solid rgba(255,255,255,0.10)" }} />

        {/* C) SUB-FOOTER */}
        <div className="text-center">
          {/* Row 1: Legal Links */}
          <div className="flex flex-wrap justify-center" style={{ gap: "8px 18px" }}>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="transition-opacity hover:underline"
                style={{ fontSize: 13, lineHeight: "18px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Row 2: Tagline */}
          <p style={{ marginTop: 16, fontSize: 13, lineHeight: "18px", fontWeight: 500, letterSpacing: "0.2px", color: "rgba(255,255,255,0.80)" }}>
            Serving Globally | 24/7 Support
          </p>

          {/* Row 3: Copyright */}
          <p style={{ marginTop: 8, fontSize: 12, lineHeight: "16px", fontWeight: 400, color: "rgba(255,255,255,0.60)" }}>
            © {new Date().getFullYear()} DPA Virtual Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
