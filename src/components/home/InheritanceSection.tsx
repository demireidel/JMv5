import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { inheritanceIntro, inheritanceItems } from "@/data/homepage";

export function InheritanceSection() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{inheritanceIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {inheritanceIntro.title}
        </h2>
        <p className="mt-[var(--spacing-md)] max-w-[56ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
          {inheritanceIntro.subtitle}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inheritanceItems.map((item) => (
            <div
              key={item.label}
              className="reveal-fade-up rounded-[var(--radius-xl)] border border-border bg-surface-1 p-5"
            >
              <p className="m-0 font-accent text-[length:var(--text-xl)] font-bold leading-none text-danger">
                {item.value}
              </p>
              <p className="m-0 mt-1 font-accent text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.08em] text-text-primary">
                {item.label}
              </p>
              <p className="m-0 mt-2 text-[length:var(--text-xs)] leading-relaxed text-text-tertiary">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
