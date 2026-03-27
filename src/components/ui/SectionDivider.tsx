import { cn } from "@/lib/cn";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

/**
 * Editorial section divider — thin rule with optional centered label.
 * Replaces the animated gold gradient dividers.
 */
export function SectionDivider({ label, className }: SectionDividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <hr className="m-0 flex-1 border-none border-t border-border" />
        <span className="text-[0.6875rem] tracking-[0.08em] text-text-tertiary">
          {label}
        </span>
        <hr className="m-0 flex-1 border-none border-t border-border" />
      </div>
    );
  }

  return <hr className={cn("m-0 border-none border-t border-border", className)} />;
}
