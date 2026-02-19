
-- Enable extensions
create extension if not exists "uuid-ossp";

-- SITE SETTINGS
create table if not exists public.site_settings (
  id uuid primary key default uuid_generate_v4(),
  key text unique not null,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- PAGES
create table if not exists public.pages (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- PAGE SECTIONS
create table if not exists public.page_sections (
  id uuid primary key default uuid_generate_v4(),
  page_id uuid not null references public.pages(id) on delete cascade,
  type text not null,
  sort_order int not null default 0,
  status text not null default 'published',
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_page_sections_page_order on public.page_sections(page_id, sort_order);

-- TRUSTED LOGOS
create table if not exists public.trusted_logos (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  logo_url text not null,
  link_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- TESTIMONIALS
create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  quote text not null,
  name text not null,
  role text,
  company text,
  country text,
  avatar_url text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- SERVICES
create table if not exists public.services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  tagline text,
  description text,
  price_amount numeric(10,2),
  price_unit text default 'per vessel / month',
  is_most_popular boolean not null default false,
  is_best_value boolean not null default false,
  inclusions jsonb not null default '[]'::jsonb,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- CASE STUDIES
create table if not exists public.case_studies (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  client_type text,
  fleet_size text,
  primary_challenge text,
  key_result text,
  engagement_period text,
  content jsonb not null default '{}'::jsonb,
  is_published boolean not null default true,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- BLOG CATEGORIES
create table if not exists public.blog_categories (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  slug text unique not null,
  sort_order int not null default 0
);

-- BLOG TAGS
create table if not exists public.blog_tags (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  slug text unique not null
);

-- BLOG POSTS
create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  excerpt text,
  cover_image_url text,
  category_id uuid references public.blog_categories(id) on delete set null,
  content_json jsonb not null default '[]'::jsonb,
  content_html text,
  content_text text,
  status text not null default 'draft',
  published_at timestamptz,
  scheduled_for timestamptz,
  reading_time_minutes int,
  author_name text default 'N. Shahdat',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- BLOG POST TAGS
create table if not exists public.blog_post_tags (
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  tag_id uuid not null references public.blog_tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

create index if not exists idx_blog_posts_status_published on public.blog_posts(status, published_at desc);

-- SEO META
create table if not exists public.seo_meta (
  id uuid primary key default uuid_generate_v4(),
  entity_type text not null,
  entity_id uuid not null,
  meta_title text,
  meta_description text,
  og_image_url text,
  canonical_url text,
  noindex boolean not null default false,
  updated_at timestamptz not null default now()
);

create index if not exists idx_seo_meta_entity on public.seo_meta(entity_type, entity_id);

-- CONTACT SUBMISSIONS
create table if not exists public.contact_submissions (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text not null,
  company_name text,
  vessel_count int,
  service_needed text,
  message text not null,
  status text not null default 'new',
  notes text,
  created_at timestamptz not null default now()
);

-- UPDATED_AT trigger function
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Attach updated_at triggers
do $$
begin
  if not exists (select 1 from pg_trigger where tgname='trg_pages_updated_at') then
    create trigger trg_pages_updated_at before update on public.pages for each row execute function public.set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname='trg_page_sections_updated_at') then
    create trigger trg_page_sections_updated_at before update on public.page_sections for each row execute function public.set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname='trg_services_updated_at') then
    create trigger trg_services_updated_at before update on public.services for each row execute function public.set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname='trg_testimonials_updated_at') then
    create trigger trg_testimonials_updated_at before update on public.testimonials for each row execute function public.set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname='trg_case_studies_updated_at') then
    create trigger trg_case_studies_updated_at before update on public.case_studies for each row execute function public.set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname='trg_blog_posts_updated_at') then
    create trigger trg_blog_posts_updated_at before update on public.blog_posts for each row execute function public.set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname='trg_trusted_logos_updated_at') then
    create trigger trg_trusted_logos_updated_at before update on public.trusted_logos for each row execute function public.set_updated_at();
  end if;
end $$;

-- Enable RLS on all tables
alter table public.site_settings enable row level security;
alter table public.pages enable row level security;
alter table public.page_sections enable row level security;
alter table public.trusted_logos enable row level security;
alter table public.testimonials enable row level security;
alter table public.services enable row level security;
alter table public.case_studies enable row level security;
alter table public.blog_categories enable row level security;
alter table public.blog_tags enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_post_tags enable row level security;
alter table public.seo_meta enable row level security;
alter table public.contact_submissions enable row level security;

-- Public read policies for content tables
create policy "Public read site_settings" on public.site_settings for select using (true);
create policy "Public read pages" on public.pages for select using (true);
create policy "Public read page_sections" on public.page_sections for select using (true);
create policy "Public read trusted_logos" on public.trusted_logos for select using (true);
create policy "Public read testimonials" on public.testimonials for select using (true);
create policy "Public read services" on public.services for select using (true);
create policy "Public read case_studies" on public.case_studies for select using (true);
create policy "Public read blog_categories" on public.blog_categories for select using (true);
create policy "Public read blog_tags" on public.blog_tags for select using (true);
create policy "Public read blog_posts" on public.blog_posts for select using (true);
create policy "Public read blog_post_tags" on public.blog_post_tags for select using (true);
create policy "Public read seo_meta" on public.seo_meta for select using (true);

-- Insert-only policy for contact submissions
create policy "Public insert contact_submissions" on public.contact_submissions for insert with check (true);

-- Seed data
insert into public.site_settings (key, value)
values
  ('brand', '{"name":"DPA Virtual Assistant","primaryColor":"#0B1F3B","accentColor":"#1E6F7E"}'),
  ('contact', '{"whatsapp":"https://wa.me/88017414688828","email":"support@dpavirtualassistant.com"}')
on conflict (key) do nothing;

insert into public.pages (slug, title)
values
  ('home','Home'),
  ('about','About'),
  ('services','Services'),
  ('case-studies','Case Studies'),
  ('blog','Blog'),
  ('contact','Contact'),
  ('privacy','Privacy Policy'),
  ('terms','Terms & Conditions')
on conflict (slug) do nothing;

insert into public.blog_categories (name, slug, sort_order)
values
  ('Audit Preparation','audit-preparation',1),
  ('Certification Tracking','certification-tracking',2),
  ('SMS / ISM','sms-ism',3),
  ('PSC Inspection','psc-inspection',4),
  ('Operational Compliance','operational-compliance',5)
on conflict (slug) do nothing;
