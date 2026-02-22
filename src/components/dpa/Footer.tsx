const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "GDPR Compliance", href: "/gdpr" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: "linear-gradient(180deg, #0B1F3B 0%, #08162B 100%)",
      }}
    >
      {/* Top divider */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 24,
        }}
      >
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }} />
      </div>

      {/* Content */}
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: 1200,
          paddingTop: 56,
          paddingBottom: 40,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Row A — Legal Links */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: "10px 20px" }}
        >
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-opacity hover:underline"
              style={{
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Row B — Tagline */}
        <p
          style={{
            marginTop: 24,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 500,
            letterSpacing: "0.2px",
            color: "rgba(255,255,255,0.80)",
          }}
        >
          Serving Globally | 24/7 Support
        </p>

        {/* Row C — Copyright */}
        <p
          style={{
            marginTop: 10,
            fontSize: 13,
            lineHeight: "18px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          © {new Date().getFullYear()} DPA Virtual Assistant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
