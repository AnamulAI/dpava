import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export function useBlogs(search?: string, status?: string) {
  return useQuery({
    queryKey: ["admin-blogs", search, status],
    queryFn: async () => {
      let q = supabase.from("blog_posts").select("*, blog_categories(name)").order("created_at", { ascending: false });
      if (search) q = q.or(`title.ilike.%${search}%,slug.ilike.%${search}%`);
      if (status && status !== "all") q = q.eq("status", status);
      const { data, error } = await q;
      if (error) throw error;
      return data;
    },
  });
}

export function useBlog(id?: string) {
  return useQuery({
    queryKey: ["admin-blog", id],
    enabled: !!id,
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id!).single();
      if (error) throw error;
      return data;
    },
  });
}

export function useBlogCategories() {
  return useQuery({
    queryKey: ["blog-categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_categories").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useBlogTags() {
  return useQuery({
    queryKey: ["blog-tags"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_tags").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });
}

export function usePostTags(postId?: string) {
  return useQuery({
    queryKey: ["blog-post-tags", postId],
    enabled: !!postId,
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_post_tags").select("tag_id").eq("post_id", postId!);
      if (error) throw error;
      return data.map((t) => t.tag_id);
    },
  });
}

export function useCreateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ post, tagIds }: { post: TablesInsert<"blog_posts">; tagIds: string[] }) => {
      const { data, error } = await supabase.from("blog_posts").insert(post).select().single();
      if (error) throw error;
      if (tagIds.length > 0) {
        const { error: tagError } = await supabase.from("blog_post_tags").insert(tagIds.map((tag_id) => ({ post_id: data.id, tag_id })));
        if (tagError) throw tagError;
      }
      return data;
    },
    onSuccess: () => { toast.success("Blog post created"); qc.invalidateQueries({ queryKey: ["admin-blogs"] }); },
    onError: (e) => toast.error(`Failed to create post: ${e.message}`),
  });
}

export function useUpdateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, post, tagIds }: { id: string; post: TablesUpdate<"blog_posts">; tagIds: string[] }) => {
      const { error } = await supabase.from("blog_posts").update(post).eq("id", id);
      if (error) throw error;
      await supabase.from("blog_post_tags").delete().eq("post_id", id);
      if (tagIds.length > 0) {
        const { error: tagError } = await supabase.from("blog_post_tags").insert(tagIds.map((tag_id) => ({ post_id: id, tag_id })));
        if (tagError) throw tagError;
      }
    },
    onSuccess: () => { toast.success("Blog post updated"); qc.invalidateQueries({ queryKey: ["admin-blogs"] }); qc.invalidateQueries({ queryKey: ["admin-blog"] }); },
    onError: (e) => toast.error(`Failed to update post: ${e.message}`),
  });
}

export function useDeleteBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await supabase.from("blog_post_tags").delete().eq("post_id", id);
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Blog post deleted"); qc.invalidateQueries({ queryKey: ["admin-blogs"] }); },
    onError: (e) => toast.error(`Failed to delete post: ${e.message}`),
  });
}
