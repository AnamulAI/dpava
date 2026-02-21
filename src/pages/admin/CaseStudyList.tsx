import { useState } from "react";
import { useCaseStudies, useCreateCaseStudy, useUpdateCaseStudy, useDeleteCaseStudy } from "@/hooks/useAdminCaseStudies";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Tables, Json } from "@/integrations/supabase/types";

function toSlug(s: string) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

type CS = Tables<"case_studies">;

export default function CaseStudyList() {
  const { data, isLoading } = useCaseStudies();
  const createMut = useCreateCaseStudy();
  const updateMut = useUpdateCaseStudy();
  const deleteMut = useDeleteCaseStudy();
  const [editing, setEditing] = useState<CS | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => { setEditing({ id: "", title: "", slug: "", client_type: "", fleet_size: "", primary_challenge: "", engagement_period: "", key_result: "", content: {} as Json, is_published: true, published_at: null, created_at: "", updated_at: "" } as CS); setIsNew(true); };
  const openEdit = (cs: CS) => { setEditing(cs); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };

  const handleSave = () => {
    if (!editing) return;
    let content: Json;
    try { content = typeof editing.content === "string" ? JSON.parse(editing.content as string) : editing.content; } catch { return; }
    const payload = { title: editing.title, slug: editing.slug, client_type: editing.client_type, fleet_size: editing.fleet_size, primary_challenge: editing.primary_challenge, engagement_period: editing.engagement_period, key_result: editing.key_result, content, is_published: editing.is_published };
    if (isNew) createMut.mutate(payload, { onSuccess: close });
    else updateMut.mutate({ id: editing.id, ...payload }, { onSuccess: close });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end"><Button onClick={openNew}><Plus className="h-4 w-4 mr-1" />New Case Study</Button></div>
      <div className="rounded-md border">
        <Table>
          <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Status</TableHead><TableHead className="hidden md:table-cell">Client Type</TableHead><TableHead className="w-[100px]">Actions</TableHead></TableRow></TableHeader>
          <TableBody>
            {isLoading ? Array.from({ length: 3 }).map((_, i) => <TableRow key={i}><TableCell colSpan={4}><Skeleton className="h-6 w-full" /></TableCell></TableRow>) :
            data?.length === 0 ? <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No case studies</TableCell></TableRow> :
            data?.map((cs) => (
              <TableRow key={cs.id}>
                <TableCell className="font-medium">{cs.title}</TableCell>
                <TableCell><Badge variant={cs.is_published ? "default" : "secondary"}>{cs.is_published ? "Published" : "Draft"}</Badge></TableCell>
                <TableCell className="hidden md:table-cell">{cs.client_type ?? "—"}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(cs)}><Pencil className="h-4 w-4" /></Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild><Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button></AlertDialogTrigger>
                      <AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => deleteMut.mutate(cs.id)}>Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={!!editing} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{isNew ? "New Case Study" : "Edit Case Study"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>Title</Label><Input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value, slug: isNew ? toSlug(e.target.value) : editing.slug })} /></div>
                <div className="space-y-2"><Label>Slug</Label><Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>Client Type</Label><Input value={editing.client_type ?? ""} onChange={(e) => setEditing({ ...editing, client_type: e.target.value })} /></div>
                <div className="space-y-2"><Label>Fleet Size</Label><Input value={editing.fleet_size ?? ""} onChange={(e) => setEditing({ ...editing, fleet_size: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Primary Challenge</Label><Input value={editing.primary_challenge ?? ""} onChange={(e) => setEditing({ ...editing, primary_challenge: e.target.value })} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>Engagement Period</Label><Input value={editing.engagement_period ?? ""} onChange={(e) => setEditing({ ...editing, engagement_period: e.target.value })} /></div>
                <div className="space-y-2"><Label>Key Result</Label><Input value={editing.key_result ?? ""} onChange={(e) => setEditing({ ...editing, key_result: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Content JSON</Label><Textarea value={typeof editing.content === "string" ? editing.content : JSON.stringify(editing.content, null, 2)} onChange={(e) => setEditing({ ...editing, content: e.target.value as unknown as Json })} rows={8} className="font-mono text-xs" /></div>
              <div className="flex items-center gap-2"><Label>Published</Label><Switch checked={editing.is_published} onCheckedChange={(c) => setEditing({ ...editing, is_published: c })} /></div>
              <div className="flex gap-2"><Button onClick={handleSave} disabled={createMut.isPending || updateMut.isPending}>{isNew ? "Create" : "Update"}</Button><Button variant="outline" onClick={close}>Cancel</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
