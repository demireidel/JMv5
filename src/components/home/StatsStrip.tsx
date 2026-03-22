"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { homeStats, type HomeStat } from "@/data/home";

function AnimatedStat({ stat, delay }: { stat: HomeStat; delay: number }) {
  const { ref, display, value } = useAnimatedNumber({
    target: stat.target,
    duration: 1800,
    decimals: stat.decimals,
  });

  // Derive progress locally: 0 → 1 as value approaches target
  const progress = stat.target > 0 ? Math.min(value / stat.target, 1) : 1;
  // Scale pop during animation: starts at 0.85, springs to 1.0
  const scale = progress < 1 ? 0.85 + 0.15 * progress : 1;

  return (
    <ScrollReveal variant="scale-in" delay={delay}>
      <div className="text-center" ref={ref}>
        <p
          className="stat-number m-0 leading-snug"
          aria-live="polite"
          style={{
            transform: `scale(${scale})`,
            textShadow: "0 0 40px color-mix(in oklch, var(--color-gold-light), transparent 80%)",
          }}
        >
          {display}
          <span className="text-[0.7em]">{stat.suffix}</span>
        </p>
        <p className="stat-label m-0 mt-2">{stat.label}</p>
      </div>
    </ScrollReveal>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-navy">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {homeStats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
