import { cn } from "@/lib/cn";

interface SourceNoteProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Inline source attribution for data claims.
 * Example: "Fuente: INDEC, marzo 2025"
 */
export function SourceNote({ children, className }: SourceNoteProps) {
  return (
    <span
      className={cn(
        "text-[length:var(--text-xs)] italic text-text-tertiary",
        className
      )}
    >
      {children}
    </span>
  );
}
