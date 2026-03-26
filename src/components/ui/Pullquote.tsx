import { cn } from "@/lib/cn";

interface PullquoteProps {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}

/**
 * @deprecated Use QuoteBlock instead. Kept for backward compatibility.
 */
export function Pullquote({ children, cite, className }: PullquoteProps) {
  return (
    <blockquote
      className={cn(
        "my-8 m-0 border-l-3 border-gold pl-[var(--spacing-lg)] font-display text-[length:var(--text-lg)] italic text-text-secondary",
        className
      )}
    >
      <p className="m-0">{children}</p>
      {cite && (
        <footer className="mt-2 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] not-italic text-gold/70">
          {cite}
        </footer>
      )}
    </blockquote>
  );
}
