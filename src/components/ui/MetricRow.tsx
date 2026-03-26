import { cn } from "@/lib/cn";

export interface Metric {
  value: string;
  label: string;
}

interface MetricRowProps {
  metrics: Metric[];
  className?: string;
}

/**
 * Standardized metric bar — server component.
 * Used in PageHeader children, section intros, or standalone.
 * Renders as a divided row of gold value + label pairs.
 */
export function MetricRow({ metrics, className }: MetricRowProps) {
  return (
    <div
      className={cn(
        "mt-8 grid divide-x divide-border",
        metrics.length <= 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {metrics.map((m) => (
        <div key={m.label} className="px-4 py-4 text-center first:pl-0 first:text-left last:pr-0 last:text-right md:px-6">
          <p className="m-0 font-accent text-[length:var(--text-xl)] font-bold leading-tight text-gold">
            {m.value}
          </p>
          <p className="m-0 mt-1 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.06em] text-text-secondary">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}
