import { ARTICLES } from "@/data/articles";

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const filtered =
    activeCategory === "All"
      ? [...ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      : ARTICLES.filter((a) => a.category === activeCategory).sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

  if (filtered.length === 0) {
    return (
      <p className="text-muted-foreground text-sm py-12 text-center">
        No articles in this category yet.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((article) => (
        <article
          key={article.slug}
          className="bg-background border border-dpa-border flex flex-col"
        >
          {/* Image placeholder */}
          <div className="bg-gray-light h-44 flex items-center justify-center border-b border-dpa-border">
            <div className="w-10 h-10 border border-dpa-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                <rect x="3" y="3" width="18" height="18" rx="0" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <span className="inline-block bg-teal text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 w-fit mb-3">
              {article.category}
            </span>
            <h3 className="text-navy font-bold text-base leading-snug mb-2">
              {article.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-[10px] uppercase tracking-widest font-semibold mb-3">
              <span>{article.date}</span>
              <span className="w-0.5 h-0.5 bg-muted-foreground/40 rounded-full" />
              <span>{article.readTime}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
              {article.excerpt}
            </p>
            <p className="text-navy text-xs leading-relaxed mb-4 italic border-l-2 border-teal pl-3">
              💡 {article.takeaway}
            </p>
            <a
              href={`/blog/${article.slug}`}
              className="text-teal text-xs font-semibold uppercase tracking-widest hover:underline"
            >
              Read Article →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
