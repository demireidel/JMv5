interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: "dark" | "navy" | "cream";
  className?: string;
}

const variantStyles = {
  dark: "bg-dark text-text-primary",
  navy: "bg-navy text-text-primary",
  cream: "bg-cream text-dark",
} as const;

export function Section({
  children,
  id,
  variant = "dark",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${className}`}
      style={{ paddingBlock: "var(--section-py)" }}
    >
      {children}
    </section>
  );
}
