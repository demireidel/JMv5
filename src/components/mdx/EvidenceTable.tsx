import { cn } from "@/lib/cn";
import { EvidenceChip } from "@/components/ui/EvidenceChip";
import type { ComponentProps } from "react";

interface EvidenceRow {
  indicator: string;
  before: string;
  after: string;
  source: string;
  status?: ComponentProps<typeof EvidenceChip>["status"];
}

interface EvidenceTableProps {
  rows: EvidenceRow[];
  className?: string;
}

/**
 * Structured before/after evidence table with source + status per row.
 * Use in MDX: <EvidenceTable rows={[...]} />
 */
export function EvidenceTable({ rows, className }: EvidenceTableProps) {
  return (
    <div
      className={cn(
        "my-8 overflow-hidden rounded-[var(--radius-lg)] border border-rule",
        className
      )}
    >
      <div className="hidden grid-cols-[1fr_8rem_8rem_10rem_5rem] gap-x-3 border-b border-rule bg-surface-1 px-4 py-2 text-[0.6875rem] text-text-tertiary md:grid">
        <span>Indicador</span>
        <span>Antes</span>
        <span>Ahora</span>
        <span>Fuente</span>
        <span>Estado</span>
      </div>
      {rows.map((row) => (
        <div
          key={row.indicator}
          className="flex flex-col gap-1 border-b border-rule bg-dark p-4 last:border-b-0 md:grid md:grid-cols-[1fr_8rem_8rem_10rem_5rem] md:items-center md:gap-x-3 md:py-2.5"
        >
          <span className="text-[0.8125rem] font-medium text-text-primary">
            {row.indicator}
          </span>
          <span className="text-[0.75rem] text-danger">{row.before}</span>
          <span className="text-[0.75rem] text-success">{row.after}</span>
          <span className="text-[0.6875rem] italic text-text-tertiary">
            {row.source}
          </span>
          {row.status && <EvidenceChip status={row.status} />}
        </div>
      ))}
    </div>
  );
}
