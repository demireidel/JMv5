import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Dek } from "@/components/ui/Dek";
import { inheritanceIntro, inheritanceItems } from "@/data/homepage";

/**
 * Inheritance — dossier-style evidence blocks.
 * Each item shows value, label, detail, and source attribution.
 */
export function InheritanceSection() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{inheritanceIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {inheritanceIntro.title}
        </h2>
        <Dek>{inheritanceIntro.subtitle}</Dek>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {inheritanceItems.map((item) => (
            <div
              key={item.label}
              className="reveal-fade-up flex flex-col bg-dark p-5"
            >
              <p className="m-0 font-display text-[length:var(--text-xl)] font-semibold leading-none text-danger">
                {item.value}
              </p>
              <p className="m-0 mt-1.5 text-[0.8125rem] font-medium text-text-primary">
                {item.label}
              </p>
              <p className="m-0 mt-2 flex-1 text-[length:var(--text-xs)] leading-relaxed text-text-tertiary">
                {item.detail}
              </p>
              <p className="m-0 mt-3 border-t border-rule pt-2 text-[0.625rem] italic text-text-tertiary">
                {item.source}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
