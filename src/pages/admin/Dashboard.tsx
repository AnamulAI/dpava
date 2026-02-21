import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PenSquare, Briefcase, Package, MessageSquareQuote, Image, Users, FileText, Search } from "lucide-react";

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

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-dashboard-counts"],
    queryFn: async () => {
      const results: Record<string, number> = {};
      for (const c of counters) {
        const { count } = await supabase.from(c.key).select("*", { count: "exact", head: true });
        results[c.key] = count ?? 0;
      }
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
            {isLoading ? <Skeleton className="h-8 w-16" /> : <div className="text-2xl font-bold">{data?.[c.key] ?? 0}</div>}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
