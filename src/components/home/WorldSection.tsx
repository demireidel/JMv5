import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Dek } from "@/components/ui/Dek";
import { worldIntro, worldLeaders, worldStats } from "@/data/homepage";

/**
 * World — diplomacy/statecraft emphasis, not celebrity name-dropping.
 * Each leader entry shows full title, context, and date.
 * Stats show source attribution.
 */
export function WorldSection() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{worldIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {worldIntro.title}
        </h2>
        <Dek>{worldIntro.subtitle}</Dek>

        {/* Bilateral meetings — formal entries, not pills */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-rule">
          {worldLeaders.map((l, i) => (
            <div
              key={l.name}
              className={`reveal-fade-up flex items-center gap-4 border-b border-rule px-5 py-3.5 last:border-b-0 ${
                i % 2 === 1 ? "bg-surface-1" : "bg-dark"
              }`}
            >
              <span className="text-lg" aria-hidden="true">{l.flag}</span>
              <div className="flex-1">
                <p className="m-0 text-[0.8125rem] font-medium text-text-primary">
                  {l.name}
                </p>
                <p className="m-0 text-[0.6875rem] text-text-tertiary">
                  {l.role}
                </p>
              </div>
              <div className="text-right">
                <p className="m-0 text-[0.6875rem] text-text-secondary">
                  {l.context}
                </p>
                <p className="m-0 text-[0.625rem] text-text-tertiary">
                  {l.date}
                </p>
              </div>
            </div>
          ))}
          <Link
            href="/mundo"
            className="flex items-center justify-center border-t border-rule bg-dark px-5 py-3 text-[0.75rem] text-text-tertiary no-underline transition-colors hover:text-text-primary"
          >
            Ver las 20+ bilaterales →
          </Link>
        </div>

        {/* Key stats with source */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-rule rounded-[var(--radius-lg)] border border-rule">
          {worldStats.map((s) => (
            <div key={s.label} className="reveal-fade-up px-4 py-5 text-center">
              <p className="m-0 font-display text-[length:var(--text-xl)] font-semibold leading-none text-text-primary">
                {s.value}
              </p>
              <p className="m-0 mt-1 text-[0.6875rem] text-text-secondary">
                {s.label}
              </p>
              <p className="m-0 mt-1.5 text-[0.5625rem] italic text-text-tertiary">
                {s.source} · {s.date}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
