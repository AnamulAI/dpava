import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export function useCaseStudies() {
  return useQuery({
    queryKey: ["admin-case-studies"],
    queryFn: async () => {
      const { data, error } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateCaseStudy() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (cs: TablesInsert<"case_studies">) => {
      const { error } = await supabase.from("case_studies").insert(cs);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Case study created"); qc.invalidateQueries({ queryKey: ["admin-case-studies"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useUpdateCaseStudy() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...cs }: TablesUpdate<"case_studies"> & { id: string }) => {
      const { error } = await supabase.from("case_studies").update(cs).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Case study updated"); qc.invalidateQueries({ queryKey: ["admin-case-studies"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useDeleteCaseStudy() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("case_studies").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Case study deleted"); qc.invalidateQueries({ queryKey: ["admin-case-studies"] }); },
    onError: (e) => toast.error(e.message),
  });
}
