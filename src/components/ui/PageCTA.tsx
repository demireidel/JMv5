import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

interface PageCTAProps {
  headline: string;
  cta: string;
  href: string;
  className?: string;
}

/**
 * Standardized CTA band — server component.
 * Used at the bottom of every internal page.
 * Italic serif quote + gold bordered button.
 */
export function PageCTA({ headline, cta, href, className }: PageCTAProps) {
  return (
    <section className={cn("border-t border-border bg-dark py-[var(--spacing-section)]", className)}>
      <Container>
        <div className="reveal-fade-up mx-auto max-w-[var(--width-narrow)] text-center">
          <p className="m-0 font-display text-[length:var(--text-xl)] italic leading-snug text-text-primary md:text-[length:var(--text-2xl)]">
            {headline}
          </p>
          <div className="mx-auto mt-2 h-px w-12 bg-gold" aria-hidden="true" />
          <div className="mt-8">
            <Link
              href={href}
              className="inline-block rounded-[var(--radius-md)] border-2 border-gold bg-transparent px-8 py-3 font-accent text-[length:var(--text-sm)] font-bold uppercase tracking-[0.15em] text-gold no-underline transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] hover:bg-gold hover:text-dark"
            >
              {cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
