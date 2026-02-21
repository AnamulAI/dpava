import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  created_at: string;
  reading_time_minutes: number | null;
  content_html: string | null;
  content_json: unknown;
  content_text: string | null;
  author_name: string | null;
  category_id: string | null;
  category_name?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
}

function estimateReadingTime(text: string | null): number {
  if (!text) return 3;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function usePublicBlogCategories() {
  return useQuery({
    queryKey: ["public-blog-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("id, name, slug, sort_order")
        .order("sort_order");
      if (error) throw error;
      return data as BlogCategory[];
    },
  });
}

export function usePublicBlogPosts(categoryId?: string | null) {
  return useQuery({
    queryKey: ["public-blog-posts", categoryId ?? "all"],
    queryFn: async () => {
      let q = supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, cover_image_url, published_at, created_at, reading_time_minutes, content_text, category_id, author_name, blog_categories(name)")
        .eq("status", "published")
        .or("published_at.is.null,published_at.lte.now()")
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false });

      if (categoryId) {
        q = q.eq("category_id", categoryId);
      }

      const { data, error } = await q;
      if (error) throw error;

      // Enrich with reading time and category name
      return (data ?? []).map((p: any) => ({
        ...p,
        category_name: p.blog_categories?.name ?? "",
        reading_time_minutes: p.reading_time_minutes ?? estimateReadingTime(p.content_text),
      })) as BlogPost[];
    },
  });
}

export function usePublicBlogPost(slug: string | undefined) {
  return useQuery({
    queryKey: ["public-blog-post", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("status", "published")
        .maybeSingle();
      if (error) throw error;
      if (!data) return null;

      // Get category name
      let category_name = "";
      if (data.category_id) {
        const { data: cat } = await supabase
          .from("blog_categories")
          .select("name")
          .eq("id", data.category_id)
          .maybeSingle();
        category_name = cat?.name ?? "";
      }

      // Get SEO meta
      const { data: seo } = await supabase
        .from("seo_meta")
        .select("meta_title, meta_description")
        .eq("entity_type", "blog")
        .eq("entity_id", data.id)
        .maybeSingle();

      return {
        ...data,
        reading_time_minutes: data.reading_time_minutes ?? estimateReadingTime(data.content_text),
        category_name,
        seo_title: seo?.meta_title ?? null,
        seo_description: seo?.meta_description ?? null,
      };
    },
  });
}

export function useRelatedPosts(postId: string | undefined, categoryId: string | null | undefined) {
  return useQuery({
    queryKey: ["public-blog-related", postId, categoryId],
    enabled: !!postId,
    queryFn: async () => {
      let q = supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, cover_image_url, published_at, created_at, reading_time_minutes, content_text, category_id, author_name")
        .eq("status", "published")
        .neq("id", postId!)
        .order("published_at", { ascending: false, nullsFirst: false })
        .limit(3);

      if (categoryId) {
        q = q.eq("category_id", categoryId);
      }

      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as BlogPost[];
    },
  });
}
