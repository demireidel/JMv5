import { cn } from "@/lib/cn";

interface EditorialGridProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Ultrawide editorial grid with central reading column
 * and space for floating asides on the right.
 *
 * On desktop: 80rem max, with 14rem right margin reserved for EditorialAside floats.
 * On mobile: standard single column.
 * Prose measure is capped at 44rem (content-prose) within this grid.
 */
export function EditorialGrid({ children, className }: EditorialGridProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[var(--width-content)] px-4 sm:px-6 lg:px-8",
        "lg:pr-[16rem]", // leave room for floating asides
        className
      )}
    >
      {children}
    </div>
  );
}
