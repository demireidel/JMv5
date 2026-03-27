import { cn } from "@/lib/cn";

interface PageMetaProps {
  date?: string;
  updated?: string;
  readingTime?: string;
  className?: string;
}

/**
 * Metadata strip: publication date, last updated, reading time.
 */
export function PageMeta({ date, updated, readingTime, className }: PageMetaProps) {
  const items = [
    date && `Publicado: ${date}`,
    updated && `Actualizado: ${updated}`,
    readingTime && `${readingTime} de lectura`,
  ].filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-x-4 gap-y-1 text-[length:var(--text-xs)] text-text-tertiary", className)}>
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
}
