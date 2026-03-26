import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Card } from "@/components/ui/Card";
import { resultsIntro, resultCards } from "@/data/homepage";

export function ResultsSection() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{resultsIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {resultsIntro.title}
        </h2>
        <p className="mt-[var(--spacing-md)] max-w-[56ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
          {resultsIntro.subtitle}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {resultCards.map((card) => (
            <Link key={card.label} href={card.href} className="group block no-underline">
              <Card accent="gold" hover="lift" padding="lg" className="reveal-fade-up h-full">
                <p className="m-0 font-accent text-[length:var(--text-2xl)] font-bold leading-none text-gold">
                  {card.value}
                </p>
                <p className="m-0 mt-1 font-accent text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.08em] text-text-primary">
                  {card.label}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[var(--radius-md)] border border-border-before bg-tint-before/30 px-3 py-2">
                    <p className="m-0 text-[length:var(--text-xs)] font-semibold text-danger">Antes</p>
                    <p className="m-0 mt-0.5 text-[length:var(--text-xs)] leading-snug text-text-secondary">
                      {card.before}
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-md)] border border-border-after bg-tint-after/30 px-3 py-2">
                    <p className="m-0 text-[length:var(--text-xs)] font-semibold text-success">Ahora</p>
                    <p className="m-0 mt-0.5 text-[length:var(--text-xs)] leading-snug text-text-secondary">
                      {card.after}
                    </p>
                  </div>
                </div>

                <p className="m-0 mt-4 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-gold transition-colors group-hover:text-text-primary">
                  Ver evidencia →
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
