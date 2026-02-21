import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { marked } from "marked";
import {
  Bold,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
} from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TOOLBAR: {
  icon: React.ElementType;
  label: string;
  prefix: string;
  suffix?: string;
  block?: boolean;
}[] = [
  { icon: Heading2, label: "Heading 2", prefix: "## ", block: true },
  { icon: Heading3, label: "Heading 3", prefix: "### ", block: true },
  { icon: Bold, label: "Bold", prefix: "**", suffix: "**" },
  { icon: List, label: "Bullet list", prefix: "- ", block: true },
  { icon: ListOrdered, label: "Numbered list", prefix: "1. ", block: true },
  { icon: Quote, label: "Blockquote", prefix: "> ", block: true },
];

export default function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  const insert = useCallback(
    (prefix: string, suffix?: string, block?: boolean) => {
      const el = ref.current;
      if (!el) return;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const selected = value.slice(start, end);
      let replacement: string;

      if (block) {
        // For block-level items, prefix each line if multiline, else prefix once
        const lines = selected
          ? selected.split("\n").map((l) => `${prefix}${l}`)
          : [`${prefix}text`];
        replacement = lines.join("\n");
      } else {
        replacement = selected
          ? `${prefix}${selected}${suffix ?? ""}`
          : `${prefix}text${suffix ?? ""}`;
      }

      const next = value.slice(0, start) + replacement + value.slice(end);
      onChange(next);

      // restore cursor after React re-render
      requestAnimationFrame(() => {
        el.focus();
        const newPos = start + replacement.length;
        el.setSelectionRange(newPos, newPos);
      });
    },
    [value, onChange],
  );

  const htmlPreview = marked.parse(value || "", { async: false }) as string;

  return (
    <div className="border border-border rounded-md overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 px-2 py-1.5 border-b border-border bg-muted/40 flex-wrap">
        {TOOLBAR.map((item) => (
          <Button
            key={item.label}
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title={item.label}
            onClick={() => insert(item.prefix, item.suffix, item.block)}
          >
            <item.icon className="h-4 w-4" />
          </Button>
        ))}

        <div className="ml-auto">
          <Button
            type="button"
            variant={showPreview ? "secondary" : "ghost"}
            size="sm"
            className="h-8 text-xs"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? "Edit" : "Preview"}
          </Button>
        </div>
      </div>

      {/* Editor / Preview */}
      {showPreview ? (
        <div
          className="prose prose-sm max-w-none p-4 min-h-[320px] bg-background"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        />
      ) : (
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={16}
          className="w-full resize-y p-4 text-sm font-mono bg-background focus:outline-none min-h-[320px]"
          placeholder="Write your article in Markdown…"
        />
      )}
    </div>
  );
}
