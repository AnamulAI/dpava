import type { BlogPost } from "@/hooks/usePublicBlog";

interface Props {
  post: BlogPost;
}

// Simple renderer for content_json blocks
function renderJsonBlocks(blocks: unknown) {
  if (!Array.isArray(blocks)) return null;
  return blocks.map((block: Record<string, unknown>, i: number) => {
    const type = block.type as string;
    const text = (block.text ?? block.content ?? "") as string;
    switch (type) {
      case "heading":
      case "h2":
        return <h2 key={i} className="text-navy text-2xl md:text-[1.7rem] font-bold mb-4 mt-12">{text}</h2>;
      case "h3":
        return <h3 key={i} className="text-navy text-xl font-bold mb-3 mt-10">{text}</h3>;
      case "paragraph":
      case "p":
        return <p key={i} className="text-foreground text-base leading-[1.9] mb-6">{text}</p>;
      case "list":
      case "ul": {
        const items = (block.items ?? []) as string[];
        return (
          <ul key={i} className="space-y-3 mb-8 pl-0">
            {items.map((item, j) => (
              <li key={j} className="text-foreground text-base leading-[1.8] flex gap-3">
                <span className="text-teal font-bold shrink-0">–</span>
                {item}
              </li>
            ))}
          </ul>
        );
      }
      case "callout":
      case "highlight":
        return (
          <div key={i} className="border-l-[4px] border-teal bg-gray-light px-6 py-5 mb-8">
            {block.title && <p className="text-navy font-bold text-sm uppercase tracking-widest mb-2">{block.title as string}</p>}
            <p className="text-foreground text-sm leading-[1.8]">{text}</p>
          </div>
        );
      case "ref":
      case "reference":
        return (
          <div key={i} className="flex items-start gap-3 bg-background border border-dpa-border px-5 py-4 mb-6">
            <span className="text-teal text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5">Ref:</span>
            <p className="text-muted-foreground text-xs leading-[1.7]">{text}</p>
          </div>
        );
      default:
        return <p key={i} className="text-foreground text-base leading-[1.9] mb-6">{text}</p>;
    }
  });
}

export default function BlogPostContent({ post }: Props) {
  const hasHtml = !!post.content_html?.trim();
  const hasJson = Array.isArray(post.content_json) && (post.content_json as unknown[]).length > 0;

  return (
    <section className="bg-background py-16 md:py-20 border-b border-dpa-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Cover image */}
        {post.cover_image_url ? (
          <div className="border border-dpa-border mb-12 overflow-hidden">
            <img src={post.cover_image_url} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
          </div>
        ) : (
          <div className="bg-gray-light border border-dpa-border flex items-center justify-center h-64 md:h-80 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-dpa-border mx-auto mb-3 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                  <rect x="3" y="3" width="18" height="18" rx="0" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Article Image</p>
            </div>
          </div>
        )}

        <article className="prose-dpa">
          {hasHtml ? (
            <div dangerouslySetInnerHTML={{ __html: post.content_html! }} />
          ) : hasJson ? (
            renderJsonBlocks(post.content_json)
          ) : post.content_text ? (
            post.content_text.split("\n\n").map((p, i) => (
              <p key={i} className="text-foreground text-base leading-[1.9] mb-6">{p}</p>
            ))
          ) : (
            <p className="text-muted-foreground text-sm italic">No content available.</p>
          )}
        </article>
      </div>
    </section>
  );
}
