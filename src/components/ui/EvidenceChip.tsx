import { cn } from "@/lib/cn";

type EvidenceStatus = "verificado" | "proyeccion" | "anuncio" | "vigente" | "en-tramite";

interface EvidenceChipProps {
  status: EvidenceStatus;
  className?: string;
}

const statusConfig: Record<EvidenceStatus, { label: string; color: string }> = {
  verificado:  { label: "Dato verificado",  color: "border-success/40 text-success bg-tint-after/20" },
  proyeccion:  { label: "Proyección",       color: "border-celeste/40 text-celeste bg-celeste/5" },
  anuncio:     { label: "Anuncio oficial",  color: "border-gold/40 text-gold bg-gold/5" },
  vigente:     { label: "Vigente",          color: "border-success/40 text-success bg-tint-after/20" },
  "en-tramite":{ label: "En trámite",       color: "border-text-tertiary/30 text-text-tertiary bg-surface-1" },
};

/**
 * Small pill indicating the evidentiary status of a claim.
 */
export function EvidenceChip({ status, className }: EvidenceChipProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.6875rem] leading-tight",
        config.color,
        className
      )}
    >
      {config.label}
    </span>
  );
}
