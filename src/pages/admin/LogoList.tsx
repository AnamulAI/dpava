import { useState } from "react";
import { useLogos, useCreateLogo, useUpdateLogo, useDeleteLogo } from "@/hooks/useAdminLogos";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Logo = Tables<"trusted_logos">;

export default function LogoList() {
  const { data, isLoading } = useLogos();
  const createMut = useCreateLogo();
  const updateMut = useUpdateLogo();
  const deleteMut = useDeleteLogo();
  const [editing, setEditing] = useState<Logo | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => { setEditing({ id: "", name: "", logo_url: "", link_url: "", sort_order: 0, created_at: "", updated_at: "" } as Logo); setIsNew(true); };
  const openEdit = (l: Logo) => { setEditing(l); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };

  const handleSave = () => {
    if (!editing) return;
    const payload = { name: editing.name, logo_url: editing.logo_url, link_url: editing.link_url, sort_order: editing.sort_order };
    if (isNew) createMut.mutate(payload, { onSuccess: close });
    else updateMut.mutate({ id: editing.id, ...payload }, { onSuccess: close });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end"><Button onClick={openNew}><Plus className="h-4 w-4 mr-1" />New Logo</Button></div>
      <div className="rounded-md border">
        <Table>
          <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Logo</TableHead><TableHead className="hidden md:table-cell">Order</TableHead><TableHead className="w-[100px]">Actions</TableHead></TableRow></TableHeader>
          <TableBody>
            {isLoading ? Array.from({ length: 3 }).map((_, i) => <TableRow key={i}><TableCell colSpan={4}><Skeleton className="h-6 w-full" /></TableCell></TableRow>) :
            data?.length === 0 ? <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No logos</TableCell></TableRow> :
            data?.map((l) => (
              <TableRow key={l.id}>
                <TableCell className="font-medium">{l.name}</TableCell>
                <TableCell><img src={l.logo_url} alt={l.name} className="h-8 max-w-[100px] object-contain" /></TableCell>
                <TableCell className="hidden md:table-cell">{l.sort_order}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(l)}><Pencil className="h-4 w-4" /></Button>
                    <AlertDialog><AlertDialogTrigger asChild><Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => deleteMut.mutate(l.id)}>Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={!!editing} onOpenChange={(o) => !o && close()}>
        <DialogContent>
          <DialogHeader><DialogTitle>{isNew ? "New Logo" : "Edit Logo"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="space-y-2"><Label>Name</Label><Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} required /></div>
              <div className="space-y-2"><Label>Logo URL</Label><Input value={editing.logo_url} onChange={(e) => setEditing({ ...editing, logo_url: e.target.value })} required /></div>
              <div className="space-y-2"><Label>Link URL</Label><Input value={editing.link_url ?? ""} onChange={(e) => setEditing({ ...editing, link_url: e.target.value })} /></div>
              <div className="space-y-2"><Label>Sort Order</Label><Input type="number" value={editing.sort_order} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} /></div>
              <div className="flex gap-2"><Button onClick={handleSave} disabled={createMut.isPending || updateMut.isPending}>{isNew ? "Create" : "Update"}</Button><Button variant="outline" onClick={close}>Cancel</Button></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
