
-- 1. Create admins table
create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null,
  email text,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;

-- 2. Create is_admin() helper
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins where user_id = auth.uid()
  );
$$;

-- 3. Drop all existing old-named policies
drop policy if exists "Public read blog_categories" on public.blog_categories;
drop policy if exists "Public read blog_post_tags" on public.blog_post_tags;
drop policy if exists "Public read blog_posts" on public.blog_posts;
drop policy if exists "Public read blog_tags" on public.blog_tags;
drop policy if exists "Public read case_studies" on public.case_studies;
drop policy if exists "Public insert contact_submissions" on public.contact_submissions;
drop policy if exists "Public read page_sections" on public.page_sections;
drop policy if exists "Public read pages" on public.pages;
drop policy if exists "Public read seo_meta" on public.seo_meta;
drop policy if exists "Public read services" on public.services;
drop policy if exists "Public read site_settings" on public.site_settings;
drop policy if exists "Public read testimonials" on public.testimonials;
drop policy if exists "Public read trusted_logos" on public.trusted_logos;

-- Also drop new-named policies in case of re-run
drop policy if exists "Public can read site_settings" on public.site_settings;
drop policy if exists "Admins can manage site_settings" on public.site_settings;
drop policy if exists "Public can read published pages" on public.pages;
drop policy if exists "Admins can manage pages" on public.pages;
drop policy if exists "Public can read published sections" on public.page_sections;
drop policy if exists "Admins can manage page_sections" on public.page_sections;
drop policy if exists "Public can read trusted_logos" on public.trusted_logos;
drop policy if exists "Admins can manage trusted_logos" on public.trusted_logos;
drop policy if exists "Public can read published testimonials" on public.testimonials;
drop policy if exists "Admins can manage testimonials" on public.testimonials;
drop policy if exists "Public can read published services" on public.services;
drop policy if exists "Admins can manage services" on public.services;
drop policy if exists "Public can read published case_studies" on public.case_studies;
drop policy if exists "Admins can manage case_studies" on public.case_studies;
drop policy if exists "Public can read blog_categories" on public.blog_categories;
drop policy if exists "Admins can manage blog_categories" on public.blog_categories;
drop policy if exists "Public can read blog_tags" on public.blog_tags;
drop policy if exists "Admins can manage blog_tags" on public.blog_tags;
drop policy if exists "Public can read published blog_posts" on public.blog_posts;
drop policy if exists "Admins can manage blog_posts" on public.blog_posts;
drop policy if exists "Public can read blog_post_tags" on public.blog_post_tags;
drop policy if exists "Admins can manage blog_post_tags" on public.blog_post_tags;
drop policy if exists "Public can read seo_meta" on public.seo_meta;
drop policy if exists "Admins can manage seo_meta" on public.seo_meta;
drop policy if exists "Public can create contact submissions" on public.contact_submissions;
drop policy if exists "Admins can read contact submissions" on public.contact_submissions;
drop policy if exists "Admins can update contact submissions" on public.contact_submissions;
drop policy if exists "Admins can delete contact submissions" on public.contact_submissions;
drop policy if exists "Admins can read admins" on public.admins;
drop policy if exists "Admins can manage admins" on public.admins;

-- 4. ADMINS table policies
create policy "Admins can read admins"
on public.admins for select to authenticated
using (public.is_admin());

create policy "Admins can manage admins"
on public.admins for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 5. SITE SETTINGS
create policy "Public can read site_settings"
on public.site_settings for select to anon, authenticated
using (true);

create policy "Admins can manage site_settings"
on public.site_settings for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 6. PAGES
create policy "Public can read published pages"
on public.pages for select to anon, authenticated
using (status = 'published');

create policy "Admins can manage pages"
on public.pages for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 7. PAGE SECTIONS
create policy "Public can read published sections"
on public.page_sections for select to anon, authenticated
using (status = 'published');

create policy "Admins can manage page_sections"
on public.page_sections for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 8. TRUSTED LOGOS
create policy "Public can read trusted_logos"
on public.trusted_logos for select to anon, authenticated
using (true);

create policy "Admins can manage trusted_logos"
on public.trusted_logos for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 9. TESTIMONIALS
create policy "Public can read published testimonials"
on public.testimonials for select to anon, authenticated
using (is_published = true);

create policy "Admins can manage testimonials"
on public.testimonials for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 10. SERVICES
create policy "Public can read published services"
on public.services for select to anon, authenticated
using (is_published = true);

create policy "Admins can manage services"
on public.services for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 11. CASE STUDIES
create policy "Public can read published case_studies"
on public.case_studies for select to anon, authenticated
using (is_published = true);

create policy "Admins can manage case_studies"
on public.case_studies for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 12. BLOG CATEGORIES
create policy "Public can read blog_categories"
on public.blog_categories for select to anon, authenticated
using (true);

create policy "Admins can manage blog_categories"
on public.blog_categories for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 13. BLOG TAGS
create policy "Public can read blog_tags"
on public.blog_tags for select to anon, authenticated
using (true);

create policy "Admins can manage blog_tags"
on public.blog_tags for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 14. BLOG POSTS
create policy "Public can read published blog_posts"
on public.blog_posts for select to anon, authenticated
using (status = 'published' and (published_at is null or published_at <= now()));

create policy "Admins can manage blog_posts"
on public.blog_posts for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 15. BLOG POST TAGS
create policy "Public can read blog_post_tags"
on public.blog_post_tags for select to anon, authenticated
using (true);

create policy "Admins can manage blog_post_tags"
on public.blog_post_tags for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 16. SEO META
create policy "Public can read seo_meta"
on public.seo_meta for select to anon, authenticated
using (true);

create policy "Admins can manage seo_meta"
on public.seo_meta for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- 17. CONTACT SUBMISSIONS
create policy "Public can create contact submissions"
on public.contact_submissions for insert to anon, authenticated
with check (true);

create policy "Admins can read contact submissions"
on public.contact_submissions for select to authenticated
using (public.is_admin());

create policy "Admins can update contact submissions"
on public.contact_submissions for update to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can delete contact submissions"
on public.contact_submissions for delete to authenticated
using (public.is_admin());
