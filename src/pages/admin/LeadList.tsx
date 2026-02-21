import { useLeads, useUpdateLeadStatus } from "@/hooks/useAdminLeads";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const statusColors: Record<string, "default" | "secondary" | "destructive"> = {
  new: "default",
  in_progress: "secondary",
  resolved: "destructive",
};

export default function LeadList() {
  const { data, isLoading } = useLeads();
  const updateStatus = useUpdateLeadStatus();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    setExpanded(next);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="hidden md:table-cell">Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}><TableCell colSpan={6}><Skeleton className="h-6 w-full" /></TableCell></TableRow>
          )) : data?.length === 0 ? (
            <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No leads</TableCell></TableRow>
          ) : data?.map((lead) => (
            <Collapsible key={lead.id} asChild open={expanded.has(lead.id)} onOpenChange={() => toggle(lead.id)}>
              <>
                <TableRow>
                  <TableCell>
                    <CollapsibleTrigger asChild>
                      <button className="p-1"><ChevronDown className={`h-4 w-4 transition-transform ${expanded.has(lead.id) ? "rotate-180" : ""}`} /></button>
                    </CollapsibleTrigger>
                  </TableCell>
                  <TableCell className="font-medium">{lead.full_name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell className="hidden md:table-cell">{lead.company_name ?? "—"}</TableCell>
                  <TableCell>
                    <Select value={lead.status} onValueChange={(v) => updateStatus.mutate({ id: lead.id, status: v })}>
                      <SelectTrigger className="w-[130px] h-8">
                        <Badge variant={statusColors[lead.status] ?? "default"}>{lead.status}</Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                </TableRow>
                <CollapsibleContent asChild>
                  <TableRow>
                    <TableCell colSpan={6} className="bg-muted/50">
                      <div className="p-3 space-y-1 text-sm">
                        {lead.service_needed && <p><strong>Service:</strong> {lead.service_needed}</p>}
                        {lead.vessel_count != null && <p><strong>Vessels:</strong> {lead.vessel_count}</p>}
                        <p><strong>Message:</strong> {lead.message}</p>
                        {lead.notes && <p><strong>Notes:</strong> {lead.notes}</p>}
                      </div>
                    </TableCell>
                  </TableRow>
                </CollapsibleContent>
              </>
            </Collapsible>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
