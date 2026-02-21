import { Link } from "react-router-dom";
import type { BlogPost } from "@/hooks/usePublicBlog";
import { formatDate } from "@/hooks/usePublicBlog";

interface Props {
  posts: BlogPost[];
}

export default function BlogRelated({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-background py-16 md:py-20 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
          Continue Reading
        </p>
        <h2 className="text-navy text-2xl md:text-3xl font-bold mb-10">
          Related Articles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-background border border-dpa-border flex flex-col hover:border-teal/40 transition-colors"
            >
              {post.cover_image_url ? (
                <div className="h-40 border-b border-dpa-border overflow-hidden">
                  <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="bg-gray-light h-40 flex items-center justify-center border-b border-dpa-border">
                  <div className="w-10 h-10 border border-dpa-border flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                      <rect x="3" y="3" width="18" height="18" rx="0" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {post.category_name && (
                  <span className="inline-block bg-teal text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 w-fit mb-3">
                    {post.category_name}
                  </span>
                )}
                <h3 className="text-navy font-bold text-sm leading-snug mb-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                )}
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mt-4">
                  Read Article →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
