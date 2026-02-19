import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/services-hero-bg.jpg";

const WA_LINK = "https://wa.me/88017414688828";
const EMAIL = "support@dpavirtualassistant.com";

export default function ContactHero() {
  return (
    <section className="relative py-20 md:py-28 border-b border-dpa-border overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "blur(12px)",
          transform: "scale(1.05)",
        }}
      />
      {/* Deep navy overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(11,31,59,0.78)" }}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-5">
            Contact
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-[1.1] mb-5 max-w-xl">
            Contact & Support Request
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[560px]">
            Send your vessel details and compliance requirements for structured
            support.
          </p>

          {/* Contact method cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mb-10">
            {/* WhatsApp */}
            <div className="border border-white/20 bg-white/5 p-6">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
                WhatsApp
              </p>
              <p className="text-teal font-semibold text-sm mb-1">
                +880 1741 4688828
              </p>
              <p className="text-white/50 text-xs">Fastest response channel</p>
            </div>
            {/* Email */}
            <div className="border border-white/20 bg-white/5 p-6">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
                Email
              </p>
              <p className="text-teal font-semibold text-sm mb-1 break-all">
                {EMAIL}
              </p>
              <p className="text-white/50 text-xs">Response within 24 hours</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-8 py-4 hover:bg-teal-hover transition-colors text-base"
            >
              <WhatsAppIcon />
              WhatsApp Now
              <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 hover:border-white hover:bg-white/10 transition-colors text-sm"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
