import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, PenSquare, Briefcase, Package, MessageSquareQuote, Image, Users, FileText, Search } from "lucide-react";

const counters = [
  { key: "blog_posts", label: "Blog Posts", icon: PenSquare },
  { key: "case_studies", label: "Case Studies", icon: Briefcase },
  { key: "services", label: "Services", icon: Package },
  { key: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { key: "trusted_logos", label: "Trusted Logos", icon: Image },
  { key: "contact_submissions", label: "Leads", icon: Users },
  { key: "pages", label: "Pages", icon: FileText },
  { key: "seo_meta", label: "SEO Meta", icon: Search },
] as const;

type CountResult = { count: number; error: string | null };

export default function Dashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-dashboard-counts"],
    queryFn: async () => {
      const results: Record<string, CountResult> = {};
      await Promise.all(
        counters.map(async (c) => {
          const { count, error } = await supabase
            .from(c.key)
            .select("*", { count: "exact", head: true });
          if (error) {
            results[c.key] = { count: 0, error: error.message };
          } else {
            results[c.key] = { count: count ?? 0, error: null };
          }
        })
      );
      return results;
    },
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {counters.map((c) => (
        <Card key={c.key}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{c.label}</CardTitle>
            <c.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : data?.[c.key]?.error ? (
              <div className="flex items-center gap-1.5 text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="text-xs leading-tight">
                  Cannot read <strong>{c.label}</strong> — check RLS policies
                </span>
              </div>
            ) : (
              <div className="text-2xl font-bold">{data?.[c.key]?.count ?? 0}</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}