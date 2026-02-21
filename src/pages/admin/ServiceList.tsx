import { useState } from "react";
import { useServices, useCreateService, useUpdateService, useDeleteService } from "@/hooks/useAdminServices";
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
import { Plus, Pencil, Trash2, X } from "lucide-react";
import type { Tables, Json } from "@/integrations/supabase/types";

type Service = Tables<"services">;

export default function ServiceList() {
  const { data, isLoading } = useServices();
  const createMut = useCreateService();
  const updateMut = useUpdateService();
  const deleteMut = useDeleteService();
  const [editing, setEditing] = useState<Service | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [inclusions, setInclusions] = useState<string[]>([]);
  const [newInclusion, setNewInclusion] = useState("");

  const openNew = () => {
    setEditing({ id: "", name: "", tagline: "", description: "", price_amount: null, price_unit: "per vessel / month", inclusions: [] as unknown as Json, is_most_popular: false, is_best_value: false, is_published: true, sort_order: 0, created_at: "", updated_at: "" } as Service);
    setInclusions([]);
    setIsNew(true);
  };
  const openEdit = (s: Service) => {
    setEditing(s);
    setInclusions(Array.isArray(s.inclusions) ? (s.inclusions as string[]) : []);
    setIsNew(false);
  };
  const close = () => { setEditing(null); setIsNew(false); };

  const handleSave = () => {
    if (!editing) return;
    const payload = {
      name: editing.name, tagline: editing.tagline, description: editing.description,
      price_amount: editing.price_amount, price_unit: editing.price_unit,
      inclusions: inclusions as unknown as Json,
      is_most_popular: editing.is_most_popular, is_best_value: editing.is_best_value,
      is_published: editing.is_published, sort_order: editing.sort_order,
    };
    if (isNew) createMut.mutate(payload, { onSuccess: close });
    else updateMut.mutate({ id: editing.id, ...payload }, { onSuccess: close });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end"><Button onClick={openNew}><Plus className="h-4 w-4 mr-1" />New Service</Button></div>
      <div className="rounded-md border">
        <Table>
          <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Price</TableHead><TableHead>Status</TableHead><TableHead className="hidden md:table-cell">Order</TableHead><TableHead className="w-[100px]">Actions</TableHead></TableRow></TableHeader>
          <TableBody>
            {isLoading ? Array.from({ length: 3 }).map((_, i) => <TableRow key={i}><TableCell colSpan={5}><Skeleton className="h-6 w-full" /></TableCell></TableRow>) :
            data?.length === 0 ? <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No services</TableCell></TableRow> :
            data?.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-medium">{s.name}{s.is_most_popular && <Badge className="ml-2" variant="default">Popular</Badge>}{s.is_best_value && <Badge className="ml-2" variant="secondary">Best Value</Badge>}</TableCell>
                <TableCell>{s.price_amount != null ? `$${s.price_amount}` : "—"}</TableCell>
                <TableCell><Badge variant={s.is_published ? "default" : "secondary"}>{s.is_published ? "Published" : "Draft"}</Badge></TableCell>
                <TableCell className="hidden md:table-cell">{s.sort_order}</TableCell>
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{isNew ? "New Service" : "Edit Service"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>Name</Label><Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} required /></div>
                <div className="space-y-2"><Label>Tagline</Label><Input value={editing.tagline ?? ""} onChange={(e) => setEditing({ ...editing, tagline: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Description</Label><Textarea value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={3} /></div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2"><Label>Price</Label><Input type="number" value={editing.price_amount ?? ""} onChange={(e) => setEditing({ ...editing, price_amount: e.target.value ? Number(e.target.value) : null })} /></div>
                <div className="space-y-2"><Label>Price Unit</Label><Input value={editing.price_unit ?? ""} onChange={(e) => setEditing({ ...editing, price_unit: e.target.value })} /></div>
                <div className="space-y-2"><Label>Sort Order</Label><Input type="number" value={editing.sort_order} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} /></div>
              </div>
              <div className="space-y-2">
                <Label>Inclusions</Label>
                <div className="space-y-1">
                  {inclusions.map((inc, i) => (
                    <div key={i} className="flex gap-1 items-center">
                      <Input value={inc} onChange={(e) => { const n = [...inclusions]; n[i] = e.target.value; setInclusions(n); }} />
                      <Button type="button" variant="ghost" size="icon" onClick={() => setInclusions(inclusions.filter((_, j) => j !== i))}><X className="h-4 w-4" /></Button>
                    </div>
                  ))}
                  <div className="flex gap-1">
                    <Input placeholder="Add inclusion..." value={newInclusion} onChange={(e) => setNewInclusion(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); if (newInclusion.trim()) { setInclusions([...inclusions, newInclusion.trim()]); setNewInclusion(""); } } }} />
                    <Button type="button" variant="outline" size="sm" onClick={() => { if (newInclusion.trim()) { setInclusions([...inclusions, newInclusion.trim()]); setNewInclusion(""); } }}>Add</Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2"><Label>Published</Label><Switch checked={editing.is_published} onCheckedChange={(c) => setEditing({ ...editing, is_published: c })} /></div>
                <div className="flex items-center gap-2"><Label>Most Popular</Label><Switch checked={editing.is_most_popular} onCheckedChange={(c) => setEditing({ ...editing, is_most_popular: c })} /></div>
                <div className="flex items-center gap-2"><Label>Best Value</Label><Switch checked={editing.is_best_value} onCheckedChange={(c) => setEditing({ ...editing, is_best_value: c })} /></div>
              </div>
              <div className="flex gap-2"><Button onClick={handleSave} disabled={createMut.isPending || updateMut.isPending}>{isNew ? "Create" : "Update"}</Button><Button variant="outline" onClick={close}>Cancel</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
