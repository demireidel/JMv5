import { cn } from "@/lib/cn";

interface MetricPillProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Inline pill showing a gold metric + label, used inside cards
 * for impact stats, key facts, etc.
 */
export function MetricPill({ value, label, className }: MetricPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-baseline gap-1.5 rounded-full border border-border bg-surface-1 px-3 py-1.5",
        className
      )}
    >
      <span className="font-accent text-[length:var(--text-xs)] font-bold text-gold">
        {value}
      </span>
      <span className="text-[length:var(--text-xs)] text-text-tertiary">
        {label}
      </span>
    </div>
  );
}
