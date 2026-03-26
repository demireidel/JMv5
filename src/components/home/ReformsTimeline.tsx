import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { reformsIntro, reformSteps } from "@/data/homepage";

export function ReformsTimeline() {
  return (
    <section className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <SectionKicker>{reformsIntro.kicker}</SectionKicker>
        <h2 className="m-0 max-w-[28ch] font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary">
          {reformsIntro.title}
        </h2>
        <p className="mt-[var(--spacing-md)] max-w-[56ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
          {reformsIntro.subtitle}
        </p>

        {/* Timeline grid */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reformSteps.map((step) => (
            <div
              key={step.num}
              className="reveal-fade-up flex flex-col bg-dark p-5"
            >
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-accent text-[length:var(--text-lg)] leading-none text-gold">
                  {step.num}
                </span>
                <h3 className="m-0 font-accent text-[length:var(--text-sm)] font-semibold uppercase tracking-[0.04em] text-text-primary">
                  {step.title}
                </h3>
              </div>
              <p className="m-0 text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
                {step.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reformas"
            className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-gold no-underline transition-colors hover:text-text-primary"
          >
            Ver las 12 reformas en detalle →
          </Link>
        </div>
      </Container>
    </section>
  );
}
