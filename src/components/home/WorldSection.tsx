import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { worldIntro, worldLeaders, worldStats } from "@/data/homepage";

export function WorldSection() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{worldIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {worldIntro.title}
        </h2>
        <p className="mt-[var(--spacing-md)] max-w-[56ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
          {worldIntro.subtitle}
        </p>

        {/* Leaders grid */}
        <div className="mt-10 flex flex-wrap gap-3">
          {worldLeaders.map((l) => (
            <div
              key={l.name}
              className="reveal-fade-up flex items-center gap-2.5 rounded-full border border-border bg-surface-1 px-4 py-2.5"
            >
              <span className="text-lg" aria-hidden="true">{l.flag}</span>
              <div>
                <p className="m-0 font-accent text-[length:var(--text-sm)] font-semibold leading-tight text-text-primary">
                  {l.name}
                </p>
                <p className="m-0 text-[length:var(--text-xs)] leading-tight text-text-tertiary">
                  {l.role}
                </p>
              </div>
            </div>
          ))}
          <Link
            href="/mundo"
            className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2.5 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.08em] text-gold no-underline transition-colors hover:border-gold hover:text-text-primary"
          >
            +14 más →
          </Link>
        </div>

        {/* World stats */}
        <div className="mt-10 flex flex-wrap gap-8">
          {worldStats.map((s) => (
            <div key={s.label} className="reveal-fade-up">
              <p className="m-0 font-accent text-[length:var(--text-xl)] font-bold leading-none text-gold">
                {s.value}
              </p>
              <p className="m-0 mt-1 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-secondary">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/mundo"
            className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-gold no-underline transition-colors hover:text-text-primary"
          >
            Ver la agenda internacional completa →
          </Link>
        </div>
      </Container>
    </section>
  );
}
