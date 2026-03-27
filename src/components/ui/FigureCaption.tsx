import { cn } from "@/lib/cn";

interface FigureCaptionProps {
  children: React.ReactNode;
  credit?: string;
  className?: string;
}

/**
 * Caption for figures, charts, images.
 * Optional credit line (photographer, agency).
 */
export function FigureCaption({ children, credit, className }: FigureCaptionProps) {
  return (
    <figcaption className={cn("mt-2 text-[length:var(--text-xs)] leading-relaxed text-text-tertiary", className)}>
      {children}
      {credit && (
        <span className="ml-2 italic text-text-tertiary/60">
          {credit}
        </span>
      )}
    </figcaption>
  );
}
