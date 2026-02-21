import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { TablesUpdate, Json } from "@/integrations/supabase/types";

export function usePages() {
  return useQuery({
    queryKey: ["admin-pages"],
    queryFn: async () => {
      const { data, error } = await supabase.from("pages").select("*").order("title");
      if (error) throw error;
      return data;
    },
  });
}

export function usePageSections(pageId?: string) {
  return useQuery({
    queryKey: ["admin-page-sections", pageId],
    enabled: !!pageId,
    queryFn: async () => {
      const { data, error } = await supabase.from("page_sections").select("*").eq("page_id", pageId!).order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useUpdateSection() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: TablesUpdate<"page_sections"> & { id: string }) => {
      const { error } = await supabase.from("page_sections").update(updates).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Section updated"); qc.invalidateQueries({ queryKey: ["admin-page-sections"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useSwapSectionOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ idA, orderA, idB, orderB }: { idA: string; orderA: number; idB: string; orderB: number }) => {
      await supabase.from("page_sections").update({ sort_order: orderB }).eq("id", idA);
      await supabase.from("page_sections").update({ sort_order: orderA }).eq("id", idB);
    },
    onSuccess: () => { toast.success("Order updated"); qc.invalidateQueries({ queryKey: ["admin-page-sections"] }); },
    onError: (e) => toast.error(e.message),
  });
}
