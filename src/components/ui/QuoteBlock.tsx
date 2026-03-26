import { cn } from "@/lib/cn";

interface QuoteBlockProps {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}

/**
 * Blockquote with gold left border.
 * Replaces the old Pullquote component with a more descriptive name.
 */
export function QuoteBlock({ children, cite, className }: QuoteBlockProps) {
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
