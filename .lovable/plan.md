

## Plan: Add Blog Posts to All Categories

### Current State
- **5 categories** exist: Audit Preparation (0), Certification Tracking (0), SMS / ISM (0), PSC Inspection (1), Operational Compliance (0)
- **1 post** exists (PSC Inspection category)
- 4 categories are empty — the blog looks sparse

### What Will Change

Create a **database migration** that inserts 5 new blog posts (one per empty category, plus one more for PSC Inspection to balance it out), all with `status = 'published'` and `published_at = now()`. Each post will have:

- A maritime-industry-relevant **title, slug, excerpt**
- **Markdown content** (`content_text`) with 300–500 words of realistic DPA/maritime compliance content
- Pre-rendered **`content_html`** from the markdown
- Correct **`category_id`** mapping
- `author_name = 'N. Shahdat'`

### Post Topics by Category

| Category | Post Title |
|----------|-----------|
| Audit Preparation | How to Prepare Your Fleet for a Successful Port State Control Audit |
| Certification Tracking | A Practical Guide to Managing Vessel Certification Deadlines |
| SMS / ISM | Strengthening Your Safety Management System: Key ISM Code Requirements |
| Operational Compliance | Navigating MARPOL Annex VI: Emission Compliance for Ship Operators |
| PSC Inspection | Common PSC Deficiencies and How to Avoid Them |

### Steps

1. **Create a single SQL migration** that inserts 5 blog posts with full content into the `blog_posts` table, each linked to the correct category UUID.

### Technical Details
- Posts are inserted via migration so they appear in both the public blog and admin panel.
- Content uses `content_text` (markdown) and `content_html` (rendered HTML) fields matching the existing blog system's rendering priority.
- No code changes needed — the existing Blog page and Admin BlogList already query and display all published posts.

