import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

const shell = cva("py-[var(--spacing-section)]", {
  variants: {
    bg: {
      dark: "bg-dark text-text-primary",
      navy: "bg-navy text-text-primary",
      midnight: "bg-midnight text-dark",
    },
  },
  defaultVariants: {
    bg: "dark",
  },
});

type SectionShellProps = React.ComponentProps<"section"> &
  VariantProps<typeof shell> & {
    wide?: boolean;
  };

/**
 * SectionShell = Section background + Container in one.
 * Replaces the common `<Section><Container>` composition.
 */
export function SectionShell({
  bg,
  wide,
  className,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section className={cn(shell({ bg }), className)} {...props}>
      <Container wide={wide}>{children}</Container>
    </section>
  );
}
