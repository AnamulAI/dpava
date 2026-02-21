import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostAuthor from "@/components/blog/BlogPostAuthor";
import BlogRelated from "@/components/blog/BlogRelated";
import BlogCTA from "@/components/blog/BlogCTA";
import { usePublicBlogPost, useRelatedPosts } from "@/hooks/usePublicBlog";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = usePublicBlogPost(slug);
  const { data: related = [] } = useRelatedPosts(post?.id, post?.category_id);

  // SEO: set document title and meta description
  useEffect(() => {
    if (!post) return;
    const title = post.seo_title ?? `${post.title} | DPA Virtual Assistant`;
    const desc = post.seo_description ?? post.excerpt ?? "";
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", desc);
    else {
      const el = document.createElement("meta");
      el.name = "description";
      el.content = desc;
      document.head.appendChild(el);
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        <main className="py-32">
          <div className="container mx-auto px-6 max-w-3xl space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post || isError) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        <main className="py-32 text-center">
          <h1 className="text-navy text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested article could not be found.</p>
          <Link to="/blog" className="text-teal text-sm font-semibold uppercase tracking-widest hover:underline">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <BlogPostHero post={post} />
        <BlogPostContent post={post} />
        <BlogPostAuthor />
        <BlogRelated posts={related} />
        <BlogCTA />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
