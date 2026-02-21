

## Full CMS Admin Panel

### Overview

Replace the placeholder admin dashboard with a complete CMS panel featuring sidebar navigation, top bar, and full CRUD management for all 9 content sections. All data operations use the existing Supabase tables with admin RLS policies.

### Architecture

**Layout:** Sidebar + top bar pattern using shadcn/ui Sidebar component.

- Left sidebar: 9 navigation items with icons, collapsible on mobile
- Top bar: dynamic page title + user email + logout button
- Main content area: renders the active section

**Routing:** Nested routes under `/admin` using React Router.

```text
/admin              --> Dashboard (stats overview)
/admin/pages        --> Pages + Sections manager
/admin/blog         --> Blog post list
/admin/blog/new     --> Create blog post
/admin/blog/:id     --> Edit blog post
/admin/case-studies --> Case studies list + edit
/admin/services     --> Services list + edit
/admin/testimonials --> Testimonials list + edit
/admin/logos        --> Trusted logos list + edit
/admin/leads        --> Contact submissions list
/admin/seo          --> SEO meta list + edit
```

### Files to Create (21 new files)

**Layout:**
1. `src/components/admin/AdminSidebar.tsx` -- Sidebar with 9 nav items using shadcn Sidebar + NavLink for active state highlighting
2. `src/components/admin/AdminLayout.tsx` -- (rewrite) SidebarProvider wrapper + top bar with dynamic title + logout

**Dashboard:**
3. `src/pages/admin/Dashboard.tsx` -- Overview with counts from each table (total posts, leads, etc.)

**Blog (most complex section):**
4. `src/pages/admin/BlogList.tsx` -- Table with search, status filter (all/draft/published), edit/delete actions
5. `src/pages/admin/BlogForm.tsx` -- Shared create/edit form: title, slug (auto-generated), category select, tag multi-select, excerpt, cover image URL, content_json textarea, status toggle, reading time
6. `src/hooks/useAdminBlog.ts` -- React Query hooks: useBlogs, useBlog, useCreateBlog, useUpdateBlog, useDeleteBlog

**Case Studies:**
7. `src/pages/admin/CaseStudyList.tsx` -- Table with published filter, edit/delete
8. `src/pages/admin/CaseStudyForm.tsx` -- Dialog/page form: title, slug, client type, fleet size, challenge, engagement period, key result, content JSON textarea, published toggle
9. `src/hooks/useAdminCaseStudies.ts` -- CRUD hooks

**Services:**
10. `src/pages/admin/ServiceList.tsx` -- Table with sort order, edit/delete
11. `src/pages/admin/ServiceForm.tsx` -- Dialog form: name, tagline, description, price amount, price unit, inclusions array editor (add/remove items), most popular toggle, best value toggle, published toggle, sort order
12. `src/hooks/useAdminServices.ts` -- CRUD hooks

**Testimonials:**
13. `src/pages/admin/TestimonialList.tsx` -- Table with published toggle inline, edit/delete
14. `src/pages/admin/TestimonialForm.tsx` -- Dialog form: name, role, company, country, quote, avatar URL, published toggle, sort order
15. `src/hooks/useAdminTestimonials.ts` -- CRUD hooks

**Trusted Logos:**
16. `src/pages/admin/LogoList.tsx` -- Table with sort order, edit/delete
17. `src/pages/admin/LogoForm.tsx` -- Dialog form: name, logo URL, link URL, sort order
18. `src/hooks/useAdminLogos.ts` -- CRUD hooks

**Leads:**
19. `src/pages/admin/LeadList.tsx` -- Read-only table with status badge (new/in_progress/resolved), status dropdown to update, expandable message view
20. `src/hooks/useAdminLeads.ts` -- useLeads query + useUpdateLeadStatus mutation

**Pages + Sections:**
21. `src/pages/admin/PageSections.tsx` -- Page selector dropdown, sections list ordered by sort_order, edit JSON content in dialog, draft/published toggle, move up/down buttons
22. `src/hooks/useAdminPages.ts` -- usePages, usePageSections, useUpdateSection, reorder mutation

**SEO Meta:**
23. `src/pages/admin/SeoMetaList.tsx` -- Table filtered by entity_type, edit in dialog
24. `src/pages/admin/SeoMetaForm.tsx` -- Dialog form: entity type select, entity ID, meta title, meta description, OG image URL, canonical URL, noindex toggle
25. `src/hooks/useAdminSeo.ts` -- CRUD hooks

### Files to Modify (2 files)

1. **`src/App.tsx`** -- Replace single `/admin` route with nested routes for all admin sub-pages, wrap all in single AuthProvider
2. **`src/components/admin/AdminLayout.tsx`** -- Complete rewrite with sidebar layout

### Key Patterns

**CRUD Hook Pattern (repeated across all sections):**
```text
- useQuery for list (with search/filter params)
- useQuery for single item (by ID)
- useMutation for create (with queryClient.invalidateQueries)
- useMutation for update
- useMutation for delete
- All mutations show toast on success/error
```

**Form Pattern:**
- Blog uses dedicated page routes (`/admin/blog/new`, `/admin/blog/:id`)
- All other sections use shadcn Dialog for create/edit (simpler data models)
- Confirm delete via AlertDialog before executing

**Slug Auto-Generation:**
- On title change, auto-generate slug using `title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')`
- Allow manual override

**Inclusions Array Editor (Services):**
- Simple list with text inputs + add/remove buttons
- Stored as JSON array in the `inclusions` column

**Content JSON Editor:**
- For blog posts and case studies: textarea with JSON syntax
- Displays formatted JSON, validates on save

### UX Details

- Loading states: Skeleton components for tables and forms
- Toast notifications: success/error on all mutations via sonner
- Confirm before delete: AlertDialog with "Are you sure?" message
- Clean enterprise style: uses existing navy/teal CSS variables
- Responsive: sidebar collapses on mobile via SidebarTrigger
- Tables use shadcn Table component with consistent styling
- Status badges with color coding (green=published, yellow=draft, blue=new, etc.)

### No Database Changes

All tables and RLS policies already exist. No migration needed. The admin user's authenticated session satisfies the `is_admin()` RLS check for all write operations.

### Technical Notes

- All admin queries bypass the "published only" RLS filter because admin policies use `is_admin()` which grants full access regardless of status
- React Query cache invalidation ensures UI stays in sync after mutations
- The AuthProvider wraps all `/admin/*` routes once (moved from per-route wrapping to a parent route wrapper)

