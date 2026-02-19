import { useState } from "react";
import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";

const CATEGORIES = [
  "All",
  "Audit Preparation",
  "Certification Tracking",
  "SMS / ISM",
  "PSC Inspection",
  "Operational Compliance",
];

const Blog = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <BlogHero />
        <BlogFeatured />
        <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
          <div className="container mx-auto px-6">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-xs font-semibold uppercase tracking-widest px-5 py-2 border transition-colors ${
                    active === cat
                      ? "bg-teal text-white border-teal"
                      : "border-dpa-border text-muted-foreground hover:border-teal hover:text-teal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <BlogGrid activeCategory={active} />
          </div>
        </section>
        <BlogCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
