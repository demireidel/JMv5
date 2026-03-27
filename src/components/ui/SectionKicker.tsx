import { cn } from "@/lib/cn";

interface SectionKickerProps {
  children: React.ReactNode;
  color?: "gold" | "celeste" | "muted";
  className?: string;
}

/**
 * Section kicker — editorial overline label.
 * Uses small-caps Fraunces instead of all-caps Oswald for institutional feel.
 */
export function SectionKicker({ children, color = "muted", className }: SectionKickerProps) {
  return (
    <p
      className={cn(
        "mb-3 font-display text-[length:var(--text-sm)] font-normal tracking-[0.04em]",
        "first-letter:uppercase",
        color === "gold" ? "text-gold" : color === "celeste" ? "text-celeste" : "text-text-tertiary",
        className
      )}
      style={{ fontVariant: "small-caps" }}
    >
      {children}
    </p>
  );
}
