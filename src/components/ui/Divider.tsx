import { cn } from "@/lib/cn";

interface DividerProps {
  className?: string;
  animated?: boolean;
}

export function Divider({ className, animated = true }: DividerProps) {
  if (!animated) {
    return <hr className={cn("border-none border-t border-border mb-12", className)} />;
  }

  return (
    <hr
      className={cn(
        "border-none h-px bg-gradient-to-r from-transparent via-gold to-transparent",
        className
      )}
      style={{
        transform: "scaleX(1)",
        transformOrigin: "center",
        animationName: "anim-line-expand",
        animationDuration: "800ms",
        animationTimingFunction: "var(--ease-out-expo)",
        animationFillMode: "both",
        animationTimeline: "view()",
        animationRange: "entry 0% entry 50%",
      }}
    />
  );
}
