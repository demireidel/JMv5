import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  reformasHero,
  heroCounters,
  reformBlocks,
  reformas,
} from "@/data/reformas";
import { ReformasContent } from "@/components/reformas/ReformasContent";

export const metadata: Metadata = {
  title: "Reformas",
  description:
    "Las 12 reformas estructurales del gobierno: estabilización, desregulación, legislación y seguridad.",
};

export default function ReformasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12" style={{ background: "var(--dark)" }}>
        <Container>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-sm)",
              color: "var(--gold)",
              letterSpacing: "0.2em",
            }}
          >
            {reformasHero.eyebrow}
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-3xl)",
              color: "var(--text-1)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {reformasHero.title}
          </h1>
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "var(--text-lg)",
              color: "var(--text-2)",
              maxWidth: "48rem",
              lineHeight: 1.6,
            }}
          >
            {reformasHero.desc}
          </p>

          {/* Hero counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroCounters.map((c) => (
              <div key={c.label} className="text-center">
                <p
                  className="m-0"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-2xl)",
                    color: "var(--gold)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {c.num}
                </p>
                <p
                  className="m-0 mt-2"
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Reform blocks with tabs */}
      <ReformasContent blocks={reformBlocks} reformas={reformas} />
    </>
  );
}
