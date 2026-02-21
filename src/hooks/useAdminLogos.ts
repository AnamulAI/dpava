import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export function useLogos() {
  return useQuery({
    queryKey: ["admin-logos"],
    queryFn: async () => {
      const { data, error } = await supabase.from("trusted_logos").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateLogo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (l: TablesInsert<"trusted_logos">) => {
      const { error } = await supabase.from("trusted_logos").insert(l);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Logo created"); qc.invalidateQueries({ queryKey: ["admin-logos"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useUpdateLogo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...l }: TablesUpdate<"trusted_logos"> & { id: string }) => {
      const { error } = await supabase.from("trusted_logos").update(l).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Logo updated"); qc.invalidateQueries({ queryKey: ["admin-logos"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useDeleteLogo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("trusted_logos").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Logo deleted"); qc.invalidateQueries({ queryKey: ["admin-logos"] }); },
    onError: (e) => toast.error(e.message),
  });
}
