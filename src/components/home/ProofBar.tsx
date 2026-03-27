import { proofMetrics } from "@/data/homepage";

/**
 * ProofBar — key indicators with per-metric source/date attribution.
 * Server component, zero JS.
 */
export function ProofBar() {
  return (
    <section className="border-y border-rule bg-cream-dark">
      <div className="mx-auto max-w-[var(--width-content)] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-rule md:grid-cols-4">
          {proofMetrics.map((m) => (
            <div key={m.label} className="px-3 py-5 text-center md:px-5 md:py-7">
              <p className="m-0 font-display text-[length:var(--text-lg)] font-semibold leading-tight text-text-primary md:text-[length:var(--text-xl)]">
                {m.value}
              </p>
              <p className="m-0 mt-1 text-[0.75rem] text-text-secondary">
                {m.label}
              </p>
              <p className="m-0 mt-1.5 text-[0.625rem] italic text-text-tertiary">
                {m.source} · {m.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
