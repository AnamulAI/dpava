import { useState } from "react";
import { usePages, usePageSections, useUpdateSection, useSwapSectionOrder } from "@/hooks/useAdminPages";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUp, ArrowDown, Pencil } from "lucide-react";
import type { Tables, Json } from "@/integrations/supabase/types";

type Section = Tables<"page_sections">;

export default function PageSections() {
  const { data: pages, isLoading: pagesLoading } = usePages();
  const [pageId, setPageId] = useState<string>("");
  const { data: sections, isLoading: sectionsLoading } = usePageSections(pageId || undefined);
  const updateMut = useUpdateSection();
  const swapMut = useSwapSectionOrder();
  const [editing, setEditing] = useState<Section | null>(null);
  const [contentStr, setContentStr] = useState("");

  const openEdit = (s: Section) => { setEditing(s); setContentStr(JSON.stringify(s.content, null, 2)); };
  const close = () => setEditing(null);

  const handleSave = () => {
    if (!editing) return;
    let content: Json;
    try { content = JSON.parse(contentStr); } catch { return; }
    updateMut.mutate({ id: editing.id, content, status: editing.status }, { onSuccess: close });
  };

  const swap = (idx: number, dir: -1 | 1) => {
    if (!sections) return;
    const other = idx + dir;
    if (other < 0 || other >= sections.length) return;
    swapMut.mutate({ idA: sections[idx].id, orderA: sections[idx].sort_order, idB: sections[other].id, orderB: sections[other].sort_order });
  };

  return (
    <div className="space-y-4">
      <Select value={pageId} onValueChange={setPageId}>
        <SelectTrigger className="w-[250px]"><SelectValue placeholder="Select a page..." /></SelectTrigger>
        <SelectContent>
          {pagesLoading ? <SelectItem value="__loading" disabled>Loading...</SelectItem> :
            pages?.map((p) => <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>)}
        </SelectContent>
      </Select>
      {pageId && (
        <div className="rounded-md border">
          <Table>
            <TableHeader><TableRow><TableHead>Type</TableHead><TableHead>Status</TableHead><TableHead>Order</TableHead><TableHead className="w-[140px]">Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {sectionsLoading ? Array.from({ length: 3 }).map((_, i) => <TableRow key={i}><TableCell colSpan={4}><Skeleton className="h-6 w-full" /></TableCell></TableRow>) :
              sections?.length === 0 ? <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No sections</TableCell></TableRow> :
              sections?.map((s, idx) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.type}</TableCell>
                  <TableCell><Badge variant={s.status === "published" ? "default" : "secondary"}>{s.status}</Badge></TableCell>
                  <TableCell>{s.sort_order}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => swap(idx, -1)} disabled={idx === 0}><ArrowUp className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => swap(idx, 1)} disabled={idx === (sections?.length ?? 0) - 1}><ArrowDown className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => openEdit(s)}><Pencil className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <Dialog open={!!editing} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Edit Section: {editing?.type}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="space-y-2"><Label>Content JSON</Label><Textarea value={contentStr} onChange={(e) => setContentStr(e.target.value)} rows={12} className="font-mono text-xs" /></div>
              <div className="flex items-center gap-2"><Label>Published</Label><Switch checked={editing.status === "published"} onCheckedChange={(c) => setEditing({ ...editing, status: c ? "published" : "draft" })} /></div>
              <div className="flex gap-2"><Button onClick={handleSave} disabled={updateMut.isPending}>Save</Button><Button variant="outline" onClick={close}>Cancel</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
