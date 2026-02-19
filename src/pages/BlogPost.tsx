import { useParams, Link } from "react-router-dom";
import Header from "@/components/dpa/Header";
import Footer from "@/components/dpa/Footer";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostAuthor from "@/components/blog/BlogPostAuthor";
import BlogRelated from "@/components/blog/BlogRelated";
import BlogCTA from "@/components/blog/BlogCTA";
import { ARTICLES } from "@/data/articles";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
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

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <BlogPostHero article={article} />
        <BlogPostContent />
        <BlogPostAuthor />
        <BlogRelated articles={related} />
        <BlogCTA />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
