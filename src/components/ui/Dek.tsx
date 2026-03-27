import { cn } from "@/lib/cn";

interface DekProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Dek / deck — subhead below a headline.
 * Lighter weight, wider measure than body copy.
 */
export function Dek({ children, className }: DekProps) {
  return (
    <p
      className={cn(
        "m-0 mt-[var(--spacing-md)] max-w-[56ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary",
        className
      )}
    >
      {children}
    </p>
  );
}
