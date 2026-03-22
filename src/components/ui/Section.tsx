type SectionVariant = "dark" | "navy" | "midnight";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: SectionVariant;
  bleedTop?: boolean;
  bleedBottom?: boolean;
  className?: string;
}

// satisfies ensures every variant key is covered at compile time
const variantClasses = {
  dark:  "bg-dark text-text-primary",
  navy:  "bg-navy text-text-primary",
  midnight: "bg-midnight text-dark",
} satisfies Record<SectionVariant, string>;

const variantBg = {
  dark:  "var(--color-dark)",
  navy:  "var(--color-navy)",
  midnight: "var(--color-midnight)",
} satisfies Record<SectionVariant, string>;

export function Section({
  children,
  id,
  variant = "dark",
  bleedTop = false,
  bleedBottom = false,
  className = "",
}: SectionProps) {
  const bleedClasses = [
    bleedTop    ? "section-bleed-top"    : "",
    bleedBottom ? "section-bleed-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={`py-[var(--spacing-section)] ${variantClasses[variant]} ${bleedClasses} ${className}`}
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
