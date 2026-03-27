import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const card = cva(
  "rounded-[var(--radius-lg)] border border-border bg-surface-1 transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  {
    variants: {
      accent: {
        none: "",
        gold: "border-l-3 border-l-gold",
      },
      hover: {
        none: "",
        lift: [
          "transition-[transform,border-color,box-shadow] duration-250 ease-[var(--ease-out-expo)]",
          "hover:translate-y-[-3px] hover:border-[oklch(0.55_0.17_75/0.35)]",
          "hover:shadow-[0_0_0_1px_oklch(0.55_0.17_75/0.1),0_8px_32px_oklch(0_0_0/0.12),0_0_40px_oklch(0.80_0.17_85/0.18)]",
        ].join(" "),
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-5",
        lg: "p-6",
      },
    },
    defaultVariants: {
      accent: "none",
      hover: "none",
      padding: "none",
    },
  }
);

type CardProps = React.ComponentProps<"div"> & VariantProps<typeof card>;

export function Card({
  accent,
  hover,
  padding,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(card({ accent, hover, padding }), className)} {...props}>
      {children}
    </div>
  );
}
