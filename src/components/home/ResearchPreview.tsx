import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { researchPreview } from "@/data/homepage";

export function ResearchPreview() {
  return (
    <section className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <div className="reveal-fade-up mx-auto max-w-[var(--width-narrow)] text-center">
          <SectionKicker className="text-center">{researchPreview.kicker}</SectionKicker>
          <h2 className="m-0 font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
            {researchPreview.title}
          </h2>
          <p className="mx-auto mt-[var(--spacing-md)] max-w-[50ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
            {researchPreview.subtitle}
          </p>

          <div className="mx-auto mt-8 flex max-w-md justify-center divide-x divide-border">
            {researchPreview.stats.map((s) => (
              <div key={s.label} className="flex-1 px-4 py-3 text-center">
                <p className="m-0 font-accent text-[length:var(--text-xl)] font-bold leading-none text-gold">
                  {s.value}
                </p>
                <p className="m-0 mt-1 text-[length:var(--text-xs)] text-text-secondary">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={researchPreview.href}
              className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-gold no-underline transition-colors hover:text-text-primary"
            >
              Explorar el archivo intelectual →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
