import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface Props {
  article: Article;
}

export default function BlogPostHero({ article }: Props) {
  return (
    <section className="bg-navy-deep py-16 md:py-20 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest">
            <li>
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li>
              <Link to="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            </li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li className="text-white/60 truncate max-w-[200px]">{article.category}</li>
          </ol>
        </nav>

        <span className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-5">
          {article.category}
        </span>

        <h1 className="text-white text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-white/50 text-xs uppercase tracking-widest font-semibold">
          <span>{article.date}</span>
          <span className="w-1 h-1 bg-white/30" />
          <span>{article.readTime}</span>
        </div>
      </div>
    </section>
  );
}
