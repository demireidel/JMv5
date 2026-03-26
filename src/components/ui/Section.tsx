import { cn } from "@/lib/cn";

type SectionVariant = "dark" | "navy" | "midnight";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: SectionVariant;
  bleedTop?: boolean;
  bleedBottom?: boolean;
  className?: string;
}

const variantClasses = {
  dark:     "bg-dark text-text-primary",
  navy:     "bg-navy text-text-primary",
  midnight: "bg-midnight text-dark",
} satisfies Record<SectionVariant, string>;

const variantBg = {
  dark:     "var(--color-dark)",
  navy:     "var(--color-navy)",
  midnight: "var(--color-midnight)",
} satisfies Record<SectionVariant, string>;

export function Section({
  children,
  id,
  variant = "dark",
  bleedTop = false,
  bleedBottom = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--spacing-section)]",
        variantClasses[variant],
        bleedTop && "section-bleed-top",
        bleedBottom && "section-bleed-bottom",
        className
      )}
      style={
        bleedTop || bleedBottom
          ? ({ "--section-bg": variantBg[variant] } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </section>
  );
}
