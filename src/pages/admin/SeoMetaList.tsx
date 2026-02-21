import { useState } from "react";
import { useSeoMetas, useCreateSeoMeta, useUpdateSeoMeta, useDeleteSeoMeta } from "@/hooks/useAdminSeo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Seo = Tables<"seo_meta">;

export default function SeoMetaList() {
  const [filter, setFilter] = useState("all");
  const { data, isLoading } = useSeoMetas(filter);
  const createMut = useCreateSeoMeta();
  const updateMut = useUpdateSeoMeta();
  const deleteMut = useDeleteSeoMeta();
  const [editing, setEditing] = useState<Seo | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => { setEditing({ id: "", entity_type: "page", entity_id: "", meta_title: "", meta_description: "", og_image_url: "", canonical_url: "", noindex: false, updated_at: "" } as unknown as Seo); setIsNew(true); };
  const openEdit = (s: Seo) => { setEditing(s); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };

  const handleSave = () => {
    if (!editing) return;
    const payload = { entity_type: editing.entity_type, entity_id: editing.entity_id, meta_title: editing.meta_title, meta_description: editing.meta_description, og_image_url: editing.og_image_url, canonical_url: editing.canonical_url, noindex: editing.noindex };
    if (isNew) createMut.mutate(payload, { onSuccess: close });
    else updateMut.mutate({ id: editing.id, ...payload }, { onSuccess: close });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center justify-between">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="page">Page</SelectItem>
            <SelectItem value="blog">Blog</SelectItem>
            <SelectItem value="case_study">Case Study</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={openNew}><Plus className="h-4 w-4 mr-1" />New SEO Meta</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader><TableRow><TableHead>Entity Type</TableHead><TableHead>Meta Title</TableHead><TableHead className="hidden md:table-cell">Noindex</TableHead><TableHead className="w-[100px]">Actions</TableHead></TableRow></TableHeader>
          <TableBody>
            {isLoading ? Array.from({ length: 3 }).map((_, i) => <TableRow key={i}><TableCell colSpan={4}><Skeleton className="h-6 w-full" /></TableCell></TableRow>) :
            data?.length === 0 ? <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No SEO meta</TableCell></TableRow> :
            data?.map((s) => (
              <TableRow key={s.id}>
                <TableCell><Badge variant="secondary">{s.entity_type}</Badge></TableCell>
                <TableCell className="font-medium">{s.meta_title ?? "—"}</TableCell>
                <TableCell className="hidden md:table-cell">{s.noindex ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(s)}><Pencil className="h-4 w-4" /></Button>
                    <AlertDialog><AlertDialogTrigger asChild><Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => deleteMut.mutate(s.id)}>Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={!!editing} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{isNew ? "New SEO Meta" : "Edit SEO Meta"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Entity Type</Label>
                  <Select value={editing.entity_type} onValueChange={(v) => setEditing({ ...editing, entity_type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="page">Page</SelectItem>
                      <SelectItem value="blog">Blog</SelectItem>
                      <SelectItem value="case_study">Case Study</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Entity ID</Label><Input value={editing.entity_id} onChange={(e) => setEditing({ ...editing, entity_id: e.target.value })} required /></div>
              </div>
              <div className="space-y-2"><Label>Meta Title</Label><Input value={editing.meta_title ?? ""} onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })} /></div>
              <div className="space-y-2"><Label>Meta Description</Label><Textarea value={editing.meta_description ?? ""} onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })} rows={3} /></div>
              <div className="space-y-2"><Label>OG Image URL</Label><Input value={editing.og_image_url ?? ""} onChange={(e) => setEditing({ ...editing, og_image_url: e.target.value })} /></div>
              <div className="space-y-2"><Label>Canonical URL</Label><Input value={editing.canonical_url ?? ""} onChange={(e) => setEditing({ ...editing, canonical_url: e.target.value })} /></div>
              <div className="flex items-center gap-2"><Label>Noindex</Label><Switch checked={editing.noindex} onCheckedChange={(c) => setEditing({ ...editing, noindex: c })} /></div>
              <div className="flex gap-2"><Button onClick={handleSave} disabled={createMut.isPending || updateMut.isPending}>{isNew ? "Create" : "Update"}</Button><Button variant="outline" onClick={close}>Cancel</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
