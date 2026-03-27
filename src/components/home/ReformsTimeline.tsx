import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Dek } from "@/components/ui/Dek";
import { EvidenceChip } from "@/components/ui/EvidenceChip";
import { reformsIntro, reformEntries } from "@/data/homepage";

/**
 * Reforms — legislative/structural ledger.
 * Each entry shows instrument, date, result, and evidentiary status.
 */
export function ReformsTimeline() {
  return (
    <section className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{reformsIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {reformsIntro.title}
        </h2>
        <Dek>{reformsIntro.subtitle}</Dek>

        {/* Ledger table on desktop, stacked cards on mobile */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-rule">
          {/* Header — hidden on mobile */}
          <div className="hidden grid-cols-[3rem_1fr_10rem_8rem_6rem] gap-x-4 border-b border-rule bg-dark px-5 py-2.5 text-[0.6875rem] text-text-tertiary md:grid">
            <span>#</span>
            <span>Reforma</span>
            <span>Instrumento</span>
            <span>Fecha</span>
            <span>Estado</span>
          </div>

          {reformEntries.map((entry, i) => (
            <div
              key={entry.num}
              className={`reveal-fade-up flex flex-col gap-2 border-b border-rule bg-dark p-5 last:border-b-0 md:grid md:grid-cols-[3rem_1fr_10rem_8rem_6rem] md:items-baseline md:gap-x-4 md:py-3.5 ${
                i % 2 === 1 ? "md:bg-surface-1" : ""
              }`}
            >
              {/* Number */}
              <span className="font-display text-[0.8125rem] font-semibold text-text-tertiary">
                {entry.num}
              </span>

              {/* Title + result */}
              <div>
                <p className="m-0 text-[0.8125rem] font-medium text-text-primary">
                  {entry.title}
                </p>
                <p className="m-0 mt-0.5 text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
                  {entry.result}
                </p>
              </div>

              {/* Instrument */}
              <span className="text-[0.6875rem] text-text-tertiary">
                {entry.instrument}
              </span>

              {/* Date */}
              <span className="text-[0.6875rem] text-text-tertiary">
                {entry.date}
              </span>

              {/* Status */}
              <EvidenceChip status={entry.status} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reformas"
            className="text-[length:var(--text-sm)] text-text-secondary no-underline transition-colors hover:text-text-primary"
          >
            Ver las 12 reformas en detalle →
          </Link>
        </div>
      </Container>
    </section>
  );
}
