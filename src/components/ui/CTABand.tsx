import { cn } from "@/lib/cn";
import Link from "next/link";

interface CTABandProps {
  eyebrow?: string;
  heading: string;
  href: string;
  label: string;
  className?: string;
}

/**
 * Full-width call-to-action band with gold accent.
 * Used at the bottom of pages to drive navigation.
 */
export function CTABand({
  eyebrow,
  heading,
  href,
  label,
  className,
}: CTABandProps) {
  return (
    <div
      className={cn(
        "border-t border-border bg-surface-1 py-[var(--spacing-xl)]",
        className
      )}
    >
      <div className="mx-auto flex max-w-[var(--width-content)] flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-8">
        <div>
          {eyebrow && (
            <p className="m-0 mb-1 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.15em] text-gold">
              {eyebrow}
            </p>
          )}
          <h3 className="m-0 font-display text-[length:var(--text-xl)] text-text-primary">
            {heading}
          </h3>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-gold px-6 py-3 font-accent text-[length:var(--text-sm)] font-bold uppercase tracking-[0.08em] text-dark no-underline transition-all duration-[var(--duration-fast)] hover:brightness-110 active:scale-[0.97]"
        >
          {label}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
