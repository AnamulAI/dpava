import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import { AdminLayout } from "./components/admin/AdminLayout";

// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import BlogList from "./pages/admin/BlogList";
import BlogForm from "./pages/admin/BlogForm";
import CaseStudyList from "./pages/admin/CaseStudyList";
import ServiceList from "./pages/admin/ServiceList";
import TestimonialList from "./pages/admin/TestimonialList";
import LogoList from "./pages/admin/LogoList";
import LeadList from "./pages/admin/LeadList";
import PageSections from "./pages/admin/PageSections";
import SeoMetaList from "./pages/admin/SeoMetaList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route
            path="/admin/login"
            element={
              <AuthProvider>
                <AdminLogin />
              </AuthProvider>
            }
          />
          <Route
            path="/admin"
            element={
              <AuthProvider>
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              </AuthProvider>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="pages" element={<PageSections />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/new" element={<BlogForm />} />
            <Route path="blog/:id" element={<BlogForm />} />
            <Route path="case-studies" element={<CaseStudyList />} />
            <Route path="services" element={<ServiceList />} />
            <Route path="testimonials" element={<TestimonialList />} />
            <Route path="logos" element={<LogoList />} />
            <Route path="leads" element={<LeadList />} />
            <Route path="seo" element={<SeoMetaList />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
