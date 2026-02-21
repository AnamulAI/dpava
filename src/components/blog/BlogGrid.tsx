import type { BlogPost } from "@/hooks/usePublicBlog";
import { formatDate } from "@/hooks/usePublicBlog";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogGridProps {
  posts: BlogPost[];
  isLoading: boolean;
}

function ImagePlaceholder() {
  return (
    <div className="w-10 h-10 border border-dpa-border flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
        <rect x="3" y="3" width="18" height="18" rx="0" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    </div>
  );
}

export default function BlogGrid({ posts, isLoading }: BlogGridProps) {
  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border border-dpa-border">
            <Skeleton className="h-44 w-full" />
            <div className="p-6 space-y-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground text-sm py-12 text-center">
        No articles in this category yet.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-background border border-dpa-border flex flex-col"
        >
          {post.cover_image_url ? (
            <div className="h-44 border-b border-dpa-border overflow-hidden">
              <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ) : (
            <div className="bg-gray-light h-44 flex items-center justify-center border-b border-dpa-border">
              <ImagePlaceholder />
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            {post.category_name && (
              <span className="inline-block bg-teal text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 w-fit mb-3">
                {post.category_name}
              </span>
            )}
            <h3 className="text-navy font-bold text-base leading-snug mb-2">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-[10px] uppercase tracking-widest font-semibold mb-3">
              <span>{formatDate(post.published_at ?? post.created_at)}</span>
              <span className="w-0.5 h-0.5 bg-muted-foreground/40 rounded-full" />
              <span>{post.reading_time_minutes} min read</span>
            </div>
            {post.excerpt && (
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
            )}
            <Link
              to={`/blog/${post.slug}`}
              className="text-teal text-xs font-semibold uppercase tracking-widest hover:underline"
            >
              Read Article →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
