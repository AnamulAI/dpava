import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

export function useTestimonials() {
  return useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateTestimonial() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (t: TablesInsert<"testimonials">) => {
      const { error } = await supabase.from("testimonials").insert(t);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Testimonial created"); qc.invalidateQueries({ queryKey: ["admin-testimonials"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useUpdateTestimonial() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...t }: TablesUpdate<"testimonials"> & { id: string }) => {
      const { error } = await supabase.from("testimonials").update(t).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Testimonial updated"); qc.invalidateQueries({ queryKey: ["admin-testimonials"] }); },
    onError: (e) => toast.error(e.message),
  });
}

export function useDeleteTestimonial() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Testimonial deleted"); qc.invalidateQueries({ queryKey: ["admin-testimonials"] }); },
    onError: (e) => toast.error(e.message),
  });
}
