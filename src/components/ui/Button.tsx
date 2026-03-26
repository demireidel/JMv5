import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const button = cva(
  "inline-flex items-center justify-center font-accent font-bold uppercase tracking-[0.08em] transition-all duration-[var(--duration-fast)] ease-[var(--ease-out-expo)] cursor-pointer no-underline",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-dark hover:brightness-110 active:scale-[0.97]",
        ghost:
          "bg-transparent text-gold border border-gold/30 hover:bg-gold/10 active:scale-[0.97]",
        link: "bg-transparent text-gold hover:underline underline-offset-4 p-0",
      },
      size: {
        sm: "text-[length:var(--text-xs)] px-4 py-2 rounded-[var(--radius-md)] gap-1.5",
        md: "text-[length:var(--text-sm)] px-6 py-3 rounded-[var(--radius-md)] gap-2",
        lg: "text-[length:var(--text-sm)] px-8 py-4 rounded-[var(--radius-lg)] gap-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof button> & {
    as?: "button" | "a";
    href?: string;
  };

export function Button({
  className,
  variant,
  size,
  as: Tag = "button",
  ...props
}: ButtonProps) {
  return (
    <Tag
      className={cn(button({ variant, size }), className)}
      {...(props as Record<string, unknown>)}
    />
  );
}
