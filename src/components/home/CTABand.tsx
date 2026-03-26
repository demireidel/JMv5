import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ctaBand } from "@/data/homepage";

export function CTABand() {
  return (
    <section className="bg-dark border-t border-border py-[var(--spacing-section)]">
      <Container>
        <div className="reveal-fade-up mx-auto max-w-[var(--width-narrow)] text-center">
          <p className="m-0 font-display text-[length:var(--text-xl)] italic leading-snug text-text-primary md:text-[length:var(--text-2xl)]">
            {ctaBand.headline}
          </p>
          <div className="mx-auto mt-2 h-px w-12 bg-gold" aria-hidden="true" />
          <div className="mt-8">
            <Link
              href={ctaBand.href}
              className="inline-block rounded-[var(--radius-md)] border-2 border-gold bg-transparent px-8 py-3 font-accent text-[length:var(--text-sm)] font-bold uppercase tracking-[0.15em] text-gold no-underline transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] hover:bg-gold hover:text-dark"
            >
              {ctaBand.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
