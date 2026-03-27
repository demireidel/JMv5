import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Dek } from "@/components/ui/Dek";
import { Card } from "@/components/ui/Card";
import { EvidenceChip } from "@/components/ui/EvidenceChip";
import { futureBets } from "@/data/homepage";

/**
 * FutureBets — clearly separates verified initiatives from projections.
 * Each card shows its evidentiary status via EvidenceChip.
 */
export function FutureBetsSection() {
  return (
    <section className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>Proyectos estratégicos</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          Iniciativas en curso y proyecciones
        </h2>
        <Dek>
          Cuatro pilares de desarrollo. El estado de cada iniciativa se indica explícitamente.
        </Dek>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {futureBets.map((bet) => (
            <Link key={bet.title} href={bet.href} className="group block no-underline">
              <Card hover="lift" padding="lg" className="reveal-fade-up h-full">
                {/* Status chip — makes claim status explicit */}
                <div className="mb-3">
                  <EvidenceChip status={bet.status} />
                </div>

                <h3 className="m-0 font-display text-[length:var(--text-lg)] leading-[1.15] text-text-primary">
                  {bet.title}
                </h3>
                <p className="m-0 mt-2 text-[length:var(--text-sm)] leading-relaxed text-text-secondary">
                  {bet.desc}
                </p>

                {/* Key figure */}
                <div className="mt-4 flex items-baseline gap-2 border-t border-rule pt-3">
                  <span className="font-display text-[length:var(--text-lg)] font-semibold leading-none text-text-primary">
                    {bet.stat}
                  </span>
                  <span className="text-[0.6875rem] text-text-tertiary">
                    {bet.statLabel}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
