import { cn } from "@/lib/cn";

interface SectionKickerProps {
  children: React.ReactNode;
  color?: "gold" | "celeste";
  className?: string;
}

export function SectionKicker({ children, color = "gold", className }: SectionKickerProps) {
  return (
    <p
      className={cn(
        "mb-3 font-accent text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.15em]",
        color === "gold" ? "text-gold" : "text-celeste",
        className
      )}
    >
      {children}
    </p>
  );
}
