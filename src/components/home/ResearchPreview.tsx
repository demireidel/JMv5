import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { researchPreview } from "@/data/homepage";

/**
 * ResearchPreview — presidential archive catalog, library-like.
 * Structured catalog entries instead of promo tiles.
 */
export function ResearchPreview() {
  return (
    <section className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{researchPreview.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {researchPreview.title}
        </h2>
        <p className="m-0 mt-[var(--spacing-md)] max-w-[50ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
          {researchPreview.subtitle}
        </p>

        {/* Catalog entries — ledger-like rows */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-rule">
          {researchPreview.catalog.map((entry, i) => (
            <div
              key={entry.category}
              className={`reveal-fade-up flex items-baseline justify-between gap-4 border-b border-rule px-5 py-4 last:border-b-0 ${
                i % 2 === 1 ? "bg-surface-1" : "bg-dark"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[length:var(--text-xl)] font-semibold leading-none text-text-primary">
                  {entry.count}
                </span>
                <span className="text-[0.8125rem] text-text-primary">
                  {entry.category}
                </span>
              </div>
              <span className="text-[0.6875rem] text-text-tertiary">
                {entry.span}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={researchPreview.href}
            className="text-[length:var(--text-sm)] text-text-secondary no-underline transition-colors hover:text-text-primary"
          >
            Explorar el archivo completo →
          </Link>
        </div>
      </Container>
    </section>
  );
}
