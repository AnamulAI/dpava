import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";

const titles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/pages": "Pages & Sections",
  "/admin/blog": "Blog Posts",
  "/admin/blog/new": "New Blog Post",
  "/admin/case-studies": "Case Studies",
  "/admin/services": "Services",
  "/admin/testimonials": "Testimonials",
  "/admin/logos": "Trusted Logos",
  "/admin/leads": "Leads",
  "/admin/seo": "SEO Meta",
};

export const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();

  const pageTitle =
    titles[location.pathname] ||
    (location.pathname.startsWith("/admin/blog/") ? "Edit Blog Post" : "Admin");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="border-b bg-card h-14 flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="font-semibold text-lg">{pageTitle}</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground hidden sm:inline">{user?.email}</span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
