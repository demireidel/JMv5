import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badge = cva(
  "font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em]",
  {
    variants: {
      variant: {
        gold: "text-gold",
        celeste: "text-celeste",
        danger: "text-danger",
        success: "text-success",
        muted: "text-text-tertiary",
      },
      fill: {
        none: "",
        outline:
          "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1",
        solid:
          "inline-flex items-center rounded-full px-2.5 py-0.5 font-bold text-white bg-[color-mix(in_oklch,var(--color-gold-light),transparent_10%)]",
      },
      weight: {
        normal: "font-normal",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "gold",
      fill: "none",
      weight: "normal",
    },
  }
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badge>;

export function Badge({
  className,
  variant,
  fill,
  weight,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badge({ variant, fill, weight }), className)} {...props} />
  );
}
