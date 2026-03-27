import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Dek } from "@/components/ui/Dek";
import { Card } from "@/components/ui/Card";
import { resultsIntro, resultCards } from "@/data/homepage";

/**
 * Results — evidence cards with source, methodology, before/after.
 */
export function ResultsSection() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{resultsIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {resultsIntro.title}
        </h2>
        <Dek>{resultsIntro.subtitle}</Dek>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {resultCards.map((card) => (
            <Link key={card.label} href={card.href} className="group block no-underline">
              <Card accent="gold" hover="lift" padding="lg" className="reveal-fade-up h-full">
                {/* Headline metric */}
                <p className="m-0 font-display text-[length:var(--text-xl)] font-semibold leading-tight text-text-primary">
                  {card.value}
                </p>
                <p className="m-0 mt-1 text-[0.8125rem] text-text-secondary">
                  {card.label}
                </p>

                {/* Before / After */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[var(--radius-md)] border border-border-before bg-tint-before/15 px-3 py-2">
                    <p className="m-0 text-[0.6875rem] font-medium text-danger">Antes</p>
                    <p className="m-0 mt-0.5 text-[length:var(--text-xs)] leading-snug text-text-secondary">
                      {card.before}
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-md)] border border-border-after bg-tint-after/15 px-3 py-2">
                    <p className="m-0 text-[0.6875rem] font-medium text-success">Ahora</p>
                    <p className="m-0 mt-0.5 text-[length:var(--text-xs)] leading-snug text-text-secondary">
                      {card.after}
                    </p>
                  </div>
                </div>

                {/* Source + methodology footer */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-3">
                  <div>
                    <span className="text-[0.625rem] italic text-text-tertiary">
                      Fuente: {card.source}
                    </span>
                    {card.methodology && (
                      <span className="ml-2 text-[0.625rem] text-text-tertiary">
                        · {card.methodology}
                      </span>
                    )}
                  </div>
                  <span className="text-[0.6875rem] text-text-tertiary transition-colors group-hover:text-text-primary">
                    Ver evidencia →
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
