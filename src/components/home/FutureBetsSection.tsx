import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Card } from "@/components/ui/Card";
import { futureBets } from "@/data/homepage";

export function FutureBetsSection() {
  return (
    <section className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>El futuro</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          Las apuestas estratégicas
        </h2>
        <p className="mt-[var(--spacing-md)] max-w-[56ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
          Cuatro pilares transforman a la Argentina en protagonista de la revolución tecnológica y energética global.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {futureBets.map((bet) => (
            <Link key={bet.title} href={bet.href} className="group block no-underline">
              <Card hover="lift" padding="lg" className="reveal-fade-up h-full">
                <p className="m-0 font-accent text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.1em] text-gold">
                  {bet.kicker}
                </p>
                <h3 className="m-0 mt-2 font-display text-[length:var(--text-xl)] leading-[1.1] text-text-primary">
                  {bet.title}
                </h3>
                <p className="m-0 mt-2 text-[length:var(--text-sm)] leading-relaxed text-text-secondary">
                  {bet.desc}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-accent text-[length:var(--text-lg)] font-bold leading-none text-gold">
                    {bet.stat}
                  </span>
                  <span className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-tertiary">
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
