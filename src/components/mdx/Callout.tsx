import { cn } from "@/lib/cn";

interface CalloutProps {
  type?: "note" | "warning" | "source";
  children: React.ReactNode;
  className?: string;
}

const styles = {
  note: "border-gold/30 bg-gold/5",
  warning: "border-danger/30 bg-tint-before/15",
  source: "border-rule bg-surface-1",
};

const labels = {
  note: "Nota",
  warning: "Atención",
  source: "Fuente",
};

/**
 * Editorial callout box — for notes, warnings, or source attributions.
 * Use in MDX: <Callout type="source">Datos del INDEC, 2025.</Callout>
 */
export function Callout({ type = "note", children, className }: CalloutProps) {
  return (
    <aside
      className={cn(
        "my-6 rounded-[var(--radius-md)] border-l-2 p-4",
        styles[type],
        className
      )}
    >
      <p className="m-0 mb-1.5 text-[0.6875rem] font-medium tracking-[0.04em] text-text-tertiary">
        {labels[type]}
      </p>
      <div className="text-[length:var(--text-sm)] leading-relaxed text-text-secondary">
        {children}
      </div>
    </aside>
  );
}
