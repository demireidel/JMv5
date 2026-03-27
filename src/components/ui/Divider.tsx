import { cn } from "@/lib/cn";

interface DividerProps {
  className?: string;
  animated?: boolean;
}

/**
 * Editorial divider — thin rule in a warm neutral tone.
 * Animated version scales in when scrolled into view (progressive enhancement).
 */
export function Divider({ className, animated = false }: DividerProps) {
  if (animated) {
    return (
      <hr
        className={cn("m-0 border-none h-px bg-rule", className)}
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

  return <hr className={cn("m-0 border-none h-px bg-rule", className)} />;
}
