import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const statCard = cva("text-center", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const valueStyles = {
  sm: "font-accent text-[length:var(--text-xl)] font-bold leading-none text-gold",
  md: "font-accent text-[length:var(--text-2xl)] font-bold leading-none text-gold",
  lg: "font-accent text-[length:var(--text-3xl)] font-bold leading-none text-gold",
};

const labelStyles = {
  sm: "mt-1 block font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-secondary",
  md: "mt-2 block font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-secondary",
  lg: "mt-2 block font-accent text-[length:var(--text-sm)] uppercase tracking-[0.05em] text-text-secondary",
};

type StatCardProps = VariantProps<typeof statCard> & {
  value: string;
  label: string;
  detail?: string;
  className?: string;
};

export function StatCard({
  value,
  label,
  detail,
  size = "md",
  className,
}: StatCardProps) {
  const s = size ?? "md";
  return (
    <div className={cn(statCard({ size }), className)}>
      <span className={valueStyles[s]}>{value}</span>
      <span className={labelStyles[s]}>{label}</span>
      {detail && (
        <p className="m-0 mt-1 text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
          {detail}
        </p>
      )}
    </div>
  );
}
