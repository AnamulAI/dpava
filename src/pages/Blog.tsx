import { useState } from "react";
import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";
import { usePublicBlogCategories, usePublicBlogPosts } from "@/hooks/usePublicBlog";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [activeCatId, setActiveCatId] = useState<string | null>(null);
  const { data: categories = [], isLoading: catsLoading } = usePublicBlogCategories();
  const { data: posts = [], isLoading: postsLoading } = usePublicBlogPosts(activeCatId);

  const featured = activeCatId === null ? posts[0] ?? null : null;
  const gridPosts = featured ? posts.slice(1) : posts;

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <BlogHero />
        {postsLoading ? (
          <section className="bg-background py-16 border-b border-dpa-border">
            <div className="container mx-auto px-6">
              <Skeleton className="h-64 w-full" />
            </div>
          </section>
        ) : featured ? (
          <BlogFeatured post={featured} />
        ) : null}

        <section className="bg-background py-20 md:py-24 border-b border-dpa-border">
          <div className="container mx-auto px-6">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {catsLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-9 w-32" />
                ))
              ) : (
                <>
                  <button
                    onClick={() => setActiveCatId(null)}
                    className={`text-xs font-semibold uppercase tracking-widest px-5 py-2 border transition-colors ${
                      activeCatId === null
                        ? "bg-teal text-white border-teal"
                        : "border-dpa-border text-muted-foreground hover:border-teal hover:text-teal"
                    }`}
                  >
                    All
                    <span className="ml-2 opacity-60">({posts.length + (featured ? 1 : 0)})</span>
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCatId(cat.id)}
                      className={`text-xs font-semibold uppercase tracking-widest px-5 py-2 border transition-colors ${
                        activeCatId === cat.id
                          ? "bg-teal text-white border-teal"
                          : "border-dpa-border text-muted-foreground hover:border-teal hover:text-teal"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </>
              )}
            </div>
            <BlogGrid posts={gridPosts} isLoading={postsLoading} />
          </div>
        </section>
        <BlogCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
