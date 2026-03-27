import Image from "next/image";
import { cn } from "@/lib/cn";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Editorial figure — responsive image with caption and optional credit.
 * Use in MDX: <Figure src="/images/..." alt="..." caption="..." credit="Presidencia" />
 */
export function Figure({
  src,
  alt,
  caption,
  credit,
  aspectRatio = "16/9",
  className,
}: FigureProps) {
  return (
    <figure className={cn("my-8", className)}>
      <div
        className="relative overflow-hidden rounded-[var(--radius-lg)]"
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 text-[length:var(--text-xs)] leading-relaxed text-text-tertiary">
          {caption}
          {credit && (
            <span className="ml-2 italic text-text-tertiary/60">
              {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
