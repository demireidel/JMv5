import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ctaBand } from "@/data/homepage";

/**
 * CTABand — presidential closing. Forward-looking, not slogan-like.
 * Quiet serif quote, thin rule, understated button.
 */
export function CTABand() {
  return (
    <section className="border-t border-rule bg-dark py-[var(--spacing-section)]">
      <Container>
        <div className="reveal-fade-up mx-auto max-w-[var(--width-narrow)]">
          <blockquote className="m-0 border-l-2 border-rule pl-6">
            <p className="m-0 font-display text-[length:var(--text-xl)] italic leading-snug text-text-primary md:text-[length:var(--text-2xl)]">
              {ctaBand.headline}
            </p>
          </blockquote>
          <div className="mt-8 pl-6">
            <Link
              href={ctaBand.href}
              className="text-[length:var(--text-sm)] text-text-secondary no-underline transition-colors hover:text-text-primary"
            >
              {ctaBand.cta} →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
