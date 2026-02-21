import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlog, useBlogCategories, useBlogTags, usePostTags, useCreateBlog, useUpdateBlog } from "@/hooks/useAdminBlog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import type { Json } from "@/integrations/supabase/types";

function toSlug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const { data: post, isLoading } = useBlog(id);
  const { data: categories } = useBlogCategories();
  const { data: tags } = useBlogTags();
  const { data: existingTagIds } = usePostTags(id);
  const createMut = useCreateBlog();
  const updateMut = useUpdateBlog();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [contentJson, setContentJson] = useState("[]");
  const [status, setStatus] = useState("draft");
  const [readingTime, setReadingTime] = useState<number | "">("");
  const [authorName, setAuthorName] = useState("N. Shahdat");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setSlug(post.slug);
      setSlugManual(true);
      setExcerpt(post.excerpt ?? "");
      setCoverImageUrl(post.cover_image_url ?? "");
      setCategoryId(post.category_id ?? "");
      setContentJson(JSON.stringify(post.content_json, null, 2));
      setStatus(post.status);
      setReadingTime(post.reading_time_minutes ?? "");
      setAuthorName(post.author_name ?? "N. Shahdat");
    }
  }, [post]);

  useEffect(() => {
    if (existingTagIds) setSelectedTags(existingTagIds);
  }, [existingTagIds]);

  useEffect(() => {
    if (!slugManual) setSlug(toSlug(title));
  }, [title, slugManual]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let parsedJson: Json;
    try { parsedJson = JSON.parse(contentJson); } catch { return; }

    const postData = {
      title, slug, excerpt: excerpt || null, cover_image_url: coverImageUrl || null,
      category_id: categoryId || null, content_json: parsedJson, status,
      reading_time_minutes: readingTime === "" ? null : Number(readingTime),
      author_name: authorName || null,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    if (isEdit) {
      updateMut.mutate({ id, post: postData, tagIds: selectedTags }, { onSuccess: () => navigate("/admin/blog") });
    } else {
      createMut.mutate({ post: postData, tagIds: selectedTags }, { onSuccess: () => navigate("/admin/blog") });
    }
  };

  if (isEdit && isLoading) return <Skeleton className="h-96 w-full" />;

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      <Card><CardContent className="pt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => { setTitle(e.target.value); if (!slugManual) setSlugManual(false); }} required />
          </div>
          <div className="space-y-2">
            <Label>Slug</Label>
            <Input value={slug} onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Excerpt</Label>
          <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Cover Image URL</Label>
            <Input value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Author</Label>
            <Input value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
              <SelectContent>
                {categories?.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Reading Time (min)</Label>
            <Input type="number" value={readingTime} onChange={(e) => setReadingTime(e.target.value === "" ? "" : Number(e.target.value))} />
          </div>
          <div className="space-y-2 flex items-end gap-2 pb-1">
            <Label>Published</Label>
            <Switch checked={status === "published"} onCheckedChange={(c) => setStatus(c ? "published" : "draft")} />
          </div>
        </div>
        {tags && tags.length > 0 && (
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-3">
              {tags.map((t) => (
                <label key={t.id} className="flex items-center gap-1.5 text-sm">
                  <Checkbox checked={selectedTags.includes(t.id)} onCheckedChange={(c) => setSelectedTags(c ? [...selectedTags, t.id] : selectedTags.filter((x) => x !== t.id))} />
                  {t.name}
                </label>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-2">
          <Label>Content JSON</Label>
          <Textarea value={contentJson} onChange={(e) => setContentJson(e.target.value)} rows={12} className="font-mono text-xs" />
        </div>
      </CardContent></Card>
      <div className="flex gap-2">
        <Button type="submit" disabled={createMut.isPending || updateMut.isPending}>
          {isEdit ? "Update Post" : "Create Post"}
        </Button>
        <Button type="button" variant="outline" onClick={() => navigate("/admin/blog")}>Cancel</Button>
      </div>
    </form>
  );
}
