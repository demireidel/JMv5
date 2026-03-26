"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

type AnimatedNumberVariant =
  /** StatsStrip: stat-number size, suffix, simple label, scale pop effect */
  | "strip"
  /** Logros/Futuro: larger 3xl stat-number, suffix, bold label, sub-label */
  | "counter";

interface AnimatedNumberProps {
  target: number;
  suffix: string;
  label: string;
  /** Only used in "counter" variant */
  sub?: string;
  decimals?: number;
  variant?: AnimatedNumberVariant;
}

export function AnimatedNumber({
  target,
  suffix,
  label,
  sub,
  decimals = 0,
  variant = "strip",
}: AnimatedNumberProps) {
  const { ref, display, value } = useAnimatedNumber({
    target,
    duration: 1800,
    decimals,
  });

  if (variant === "strip") {
    // Scale pop: 0.85 → 1.0 as value approaches target (more subtle)
    const progress = target > 0 ? Math.min(value / target, 1) : 1;
    const scale = progress < 1 ? 0.85 + 0.15 * progress : 1;
    const done = progress >= 1;

    return (
      <div className="text-center" ref={ref}>
        <p
          className="m-0 font-accent text-[length:var(--text-2xl)] font-bold leading-snug text-gold"
          aria-live="polite"
          style={{
            transform: `scale(${scale})`,
            textShadow: done
              ? "0 0 30px oklch(0.72 0.16 75 / 0.25)"
              : `0 0 50px oklch(0.72 0.16 75 / ${0.15 + progress * 0.35})`,
            transition: "text-shadow 400ms var(--ease-out-expo)",
          }}
        >
          {display}
          <span className="ml-1 text-[0.65em] opacity-80">{suffix}</span>
        </p>
        <p className="m-0 mt-2 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-secondary">{label}</p>
      </div>
    );
  }

  // variant === "counter"
  return (
    <div ref={ref} className="text-center">
      <p
        className="m-0 font-accent text-[length:var(--text-3xl)] font-bold leading-none text-gold"
        aria-live="polite"
      >
        {display}
        <span className="text-[0.6em]">{suffix}</span>
      </p>
      <p className="m-0 mt-2 font-accent text-[length:var(--text-sm)] uppercase tracking-wide text-text-primary">
        {label}
      </p>
      {sub && (
        <p className="m-0 mx-auto mt-1 max-w-64 text-[length:var(--text-xs)] text-text-tertiary">
          {sub}
        </p>
      )}
    </div>
  );
}
