import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.50)", marginBottom: 14 }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:underline"
                    style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.50)", marginBottom: 14 }}>
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/privacy-policy" className="transition-colors hover:underline" style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:underline" style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* B) DIVIDER */}
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
