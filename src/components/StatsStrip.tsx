"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { target: 57, suffix: "% → 26.9%", label: "Reducción de pobreza" },
  { target: 2.4, suffix: "% mensual", label: "Inflación", decimals: 1 },
  { target: 14500, suffix: "+", label: "Desregulaciones" },
  { target: 652, suffix: " pts", label: "Riesgo país" },
];

function AnimatedStat({ stat }: { stat: StatItem }) {
  const { ref, display } = useAnimatedNumber({
    target: stat.target,
    duration: 1800,
    decimals: stat.decimals,
  });

  return (
    <div className="text-center" ref={ref}>
      <p
        className="m-0"
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-2xl)",
          color: "var(--gold)",
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        {display}
        <span style={{ fontSize: "0.7em" }}>{stat.suffix}</span>
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
        {stat.label}
      </p>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section
      style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14"
        style={{ maxWidth: "var(--max-width)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
