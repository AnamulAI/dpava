import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export function useServices() {
  return useQuery({
    queryKey: ["admin-services"],
    queryFn: async () => {
      const { data, error } = await supabase.from("services").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateService() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (s: TablesInsert<"services">) => {
      const { error } = await supabase.from("services").insert(s);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Service created"); qc.invalidateQueries({ queryKey: ["admin-services"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useUpdateService() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...s }: TablesUpdate<"services"> & { id: string }) => {
      const { error } = await supabase.from("services").update(s).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Service updated"); qc.invalidateQueries({ queryKey: ["admin-services"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useDeleteService() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("services").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Service deleted"); qc.invalidateQueries({ queryKey: ["admin-services"] }); },
    onError: (e) => toast.error(e.message),
  });
}
