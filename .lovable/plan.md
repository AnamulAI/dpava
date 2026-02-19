

## Database Schema Migration for DPA Virtual Assistant CMS

### Overview

Create a comprehensive CMS-ready database schema in Supabase with 11 tables, seed data, and automated `updated_at` triggers. This provides the backend foundation for managing all site content (pages, blog posts, case studies, services, testimonials) through a future admin panel.

### What Gets Created

**Tables (11 total):**

1. `site_settings` -- Key-value store for brand config and contact details
2. `pages` -- CMS page registry (home, about, services, etc.)
3. `page_sections` -- Modular section blocks per page (hero, CTA, FAQ, etc.)
4. `trusted_logos` -- Partner/client logo carousel data
5. `testimonials` -- Client quotes with metadata
6. `services` -- Service packages with pricing and inclusions
7. `case_studies` -- Structured case study content (challenge/action/outcome)
8. `blog_categories` -- Blog category taxonomy
9. `blog_tags` -- Blog tag taxonomy
10. `blog_posts` -- Full blog post storage with JSON content blocks
11. `blog_post_tags` -- Many-to-many join table (posts to tags)
12. `seo_meta` -- Reusable SEO metadata for any entity type
13. `contact_submissions` -- Lead capture / enquiry storage

**Seed Data:**
- 2 site settings records (brand config, contact info)
- 8 page records (home, about, services, case-studies, blog, contact, privacy, terms)
- 5 blog category records matching existing UI filters

**Infrastructure:**
- `set_updated_at()` trigger function
- 7 `updated_at` triggers on mutable tables
- 2 indexes for performance (page sections ordering, blog post status/date)

### RLS Considerations

Since this is a public-facing website with no user authentication implemented yet, all tables will have RLS enabled with public read-only policies for content tables (`SELECT` for `anon` role). Write access will not be granted through RLS -- content management will initially be done through the Supabase Dashboard SQL Editor or a future admin panel.

- **Read-only public access**: site_settings, pages, page_sections, trusted_logos, testimonials, services, case_studies, blog_categories, blog_tags, blog_posts, blog_post_tags, seo_meta
- **Insert-only public access**: contact_submissions (so the contact form can submit leads)

### Migration SQL

The migration will execute the user's provided SQL with the following adjustments:
- Remove `CHECK` constraints on `status` fields and replace with validation triggers (per Supabase best practices)
- Add RLS policies for public read access and contact form insert access
- Keep all seed data inserts as part of the migration since they define schema-level defaults

### Code Changes

After the migration, update the **Contact Form** (`src/components/contact/ContactForm.tsx`) to save submissions to the `contact_submissions` table in addition to the existing WhatsApp redirect. No other frontend code changes are needed at this stage -- the existing hardcoded data in components (articles, case studies, services) will continue to work. Migrating the frontend to read from Supabase tables can be done incrementally in future iterations.

### Technical Details

**Migration (single SQL migration):**

```text
1. Create uuid-ossp extension
2. Create all 13 tables with proper types, defaults, and foreign keys
3. Create indexes (page_sections ordering, blog_posts status/date, seo_meta entity lookup)
4. Create set_updated_at() trigger function
5. Attach updated_at triggers to 7 tables
6. Enable RLS on all tables
7. Create SELECT policies for anon on content tables
8. Create INSERT policy for anon on contact_submissions
9. Seed site_settings, pages, and blog_categories
```

**Frontend change:**

- `src/components/contact/ContactForm.tsx` -- Add a Supabase insert call to `contact_submissions` table on form submit (before the WhatsApp redirect). This stores leads in the database for future CRM/admin use. The WhatsApp redirect continues as the primary delivery mechanism.

### Important Notes

- No authentication is implemented yet. The RLS policies grant public read access only. Write operations (except contact form submissions) must be done through the Supabase Dashboard.
- The `CHECK` constraints in the user's SQL (for `status` fields) will be replaced with validation triggers per Supabase guidelines.
- The existing hardcoded frontend data continues to work unchanged. Future iterations can migrate components to fetch from Supabase.

