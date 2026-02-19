

## Admin RLS Policy Migration

### Overview

Create an `admins` allowlist table with an `is_admin()` helper function, then replace all existing permissive RLS policies with a proper dual-layer system: public read access for published content + admin write access for all CMS tables.

### What Changes

**New database objects:**
- `admins` table (id, user_id, email, created_at) with RLS enabled
- `is_admin()` security definer function that checks if the current authenticated user is in the admins table

**Policy replacements across all 13 content tables:**
- Drop all existing "Public read X" policies
- Create new public SELECT policies (scoped to published content where applicable)
- Create admin management policies for INSERT/UPDATE/DELETE
- Replace the existing contact_submissions INSERT policy with a more complete set (public insert + admin read/manage)

### Key Adjustments to Your SQL

1. **`is_admin()` function** -- will add `set search_path = public` for security compliance (prevents search_path manipulation attacks).

2. **`for update, delete` syntax** -- Postgres does not support combining two commands in one policy. The contact submissions admin manage policy will be split into separate UPDATE and DELETE policies.

3. **Existing old policies** -- Your SQL already includes `DROP POLICY IF EXISTS` for the new policy names, but the current database has differently-named policies (e.g., `"Public read blog_categories"` vs `"Public can read blog_categories"`). The migration will also drop these original policies to avoid conflicts.

4. **No code changes needed** -- The frontend only uses anonymous SELECT queries and the contact form INSERT, which remain permitted under the new policies.

### Important Notes

- **Authentication required**: You will need to implement Supabase Auth (login) and manually insert your user_id into the `admins` table before admin policies will work. Until then, content management continues through the Supabase Dashboard SQL Editor.
- **No frontend changes**: The public-facing site continues working as-is since anonymous read access is preserved for published content.

### Technical Details

**Migration SQL (single migration file):**

```text
1. Create admins table with RLS enabled
2. Create is_admin() security definer function (with search_path = public)
3. Drop all 14 existing old-named RLS policies
4. Create new policies:
   - admins: admin-only read + manage
   - site_settings: public read + admin manage
   - pages: public read published + admin manage
   - page_sections: public read published + admin manage
   - trusted_logos: public read + admin manage
   - testimonials: public read published + admin manage
   - services: public read published + admin manage
   - case_studies: public read published + admin manage
   - blog_categories: public read + admin manage
   - blog_tags: public read + admin manage
   - blog_posts: public read published (with date check) + admin manage
   - blog_post_tags: public read + admin manage
   - seo_meta: public read + admin manage
   - contact_submissions: public insert + admin read + admin update + admin delete
```

Total: ~40 policy statements across 14 tables.

