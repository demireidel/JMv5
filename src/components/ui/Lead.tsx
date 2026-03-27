import { cn } from "@/lib/cn";

interface LeadProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Lead paragraph — the opening lede of an editorial section.
 * Larger than body text, serif, slightly darker.
 */
export function Lead({ children, className }: LeadProps) {
  return (
    <p
      className={cn(
        "m-0 max-w-[55ch] font-display text-[length:var(--text-lg)] leading-[1.65] text-text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}
