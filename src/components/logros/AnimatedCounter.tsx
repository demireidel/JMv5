"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
  sub: string;
  decimals?: number;
}

export function AnimatedCounter({
  target,
  suffix,
  label,
  sub,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, display } = useAnimatedNumber({
    target,
    duration: 1800,
    decimals,
  });

  return (
    <div ref={ref} className="text-center">
      <p
        className="m-0"
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-3xl)",
          color: "var(--gold)",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {display}
        <span style={{ fontSize: "0.6em" }}>{suffix}</span>
      </p>
      <p
        className="m-0 mt-2"
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-sm)",
          color: "var(--text-1)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </p>
      <p
        className="m-0 mt-1"
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--text-3)",
          maxWidth: "16rem",
          marginInline: "auto",
        }}
      >
        {sub}
      </p>
    </div>
  );
}
