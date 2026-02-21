import type { BlogPost } from "@/hooks/usePublicBlog";
import { formatDate } from "@/hooks/usePublicBlog";

interface Props {
  post: BlogPost;
}

export default function BlogFeatured({ post }: Props) {
  return (
    <section className="bg-background py-16 md:py-20 border-b border-dpa-border">
      <div className="container mx-auto px-6">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-8">
          Featured Article
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-0 border border-dpa-border">
          {post.cover_image_url ? (
            <div className="min-h-[260px] md:min-h-[320px] border-b md:border-b-0 md:border-r border-dpa-border overflow-hidden">
              <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="bg-gray-light flex items-center justify-center min-h-[260px] md:min-h-[320px] border-b md:border-b-0 md:border-r border-dpa-border">
              <div className="text-center px-6">
                <div className="w-16 h-16 border-2 border-dpa-border mx-auto mb-4 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                    <rect x="3" y="3" width="18" height="18" rx="0" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Featured Image</p>
              </div>
            </div>
          )}

          <div className="p-8 md:p-12 flex flex-col justify-center">
            {post.category_name && (
              <span className="inline-block bg-teal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 w-fit mb-4">
                {post.category_name}
              </span>
            )}
            <h2 className="text-navy text-2xl md:text-3xl font-bold leading-tight mb-4">
              {post.title}
            </h2>
            {post.excerpt && (
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center gap-3 text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6">
              <span>{formatDate(post.published_at ?? post.created_at)}</span>
              <span className="w-1 h-1 bg-muted-foreground/40 rounded-full" />
              <span>{post.reading_time_minutes} min read</span>
            </div>
            <div>
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex border-2 border-teal text-teal text-xs font-semibold px-6 py-2.5 hover:bg-teal hover:text-white transition-colors"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
