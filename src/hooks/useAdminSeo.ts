import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export function useSeoMetas(entityType?: string) {
  return useQuery({
    queryKey: ["admin-seo", entityType],
    queryFn: async () => {
      let q = supabase.from("seo_meta").select("*").order("entity_type");
      if (entityType && entityType !== "all") q = q.eq("entity_type", entityType);
      const { data, error } = await q;
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateSeoMeta() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (s: TablesInsert<"seo_meta">) => {
      const { error } = await supabase.from("seo_meta").insert(s);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("SEO meta created"); qc.invalidateQueries({ queryKey: ["admin-seo"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useUpdateSeoMeta() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...s }: TablesUpdate<"seo_meta"> & { id: string }) => {
      const { error } = await supabase.from("seo_meta").update(s).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("SEO meta updated"); qc.invalidateQueries({ queryKey: ["admin-seo"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useDeleteSeoMeta() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("seo_meta").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("SEO meta deleted"); qc.invalidateQueries({ queryKey: ["admin-seo"] }); },
    onError: (e) => toast.error(e.message),
  });
}
