import { proofMetrics } from "@/data/homepage";

/**
 * Static proof bar — 4 key metrics rendered as server HTML.
 * No animated counters, no hydration dependency.
 */
export function ProofBar() {
  return (
    <section className="bg-cream-dark border-y border-border">
      <div className="mx-auto max-w-[var(--width-content)] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {proofMetrics.map((m) => (
            <div key={m.label} className="px-4 py-8 text-center md:px-6 md:py-10">
              <p className="m-0 font-accent text-[length:var(--text-xl)] font-bold leading-tight text-gold md:text-[length:var(--text-2xl)]">
                {m.value}
              </p>
              <p className="m-0 mt-2 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.08em] text-text-secondary">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
