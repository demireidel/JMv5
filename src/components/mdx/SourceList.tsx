import { cn } from "@/lib/cn";

interface SourceItem {
  label: string;
  detail?: string;
}

interface SourceListProps {
  sources: SourceItem[];
  className?: string;
}

/**
 * Structured source list — for attribution at the end of editorial sections.
 * Use in MDX: <SourceList sources={[{ label: "INDEC, EPH", detail: "I sem. 2025" }]} />
 */
export function SourceList({ sources, className }: SourceListProps) {
  return (
    <aside
      className={cn(
        "my-8 rounded-[var(--radius-md)] border border-rule bg-surface-1 px-5 py-4",
        className
      )}
    >
      <p className="m-0 mb-2 text-[0.6875rem] font-medium tracking-[0.04em] text-text-tertiary">
        Fuentes
      </p>
      <ul className="m-0 list-none space-y-1 p-0">
        {sources.map((s) => (
          <li
            key={s.label}
            className="text-[length:var(--text-xs)] text-text-secondary"
          >
            {s.label}
            {s.detail && (
              <span className="ml-1 text-text-tertiary">— {s.detail}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
