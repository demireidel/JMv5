import { cn } from "@/lib/cn";

interface EditorialAsideProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Right-rail callout for supplementary context:
 * pull quotes, source notes, stat highlights, or editor notes.
 * On mobile: inline block with left border.
 * On desktop: floats into the right rail when inside EditorialGrid.
 */
export function EditorialAside({ children, className }: EditorialAsideProps) {
  return (
    <aside
      className={cn(
        "border-l-2 border-border pl-4 text-[length:var(--text-xs)] leading-relaxed text-text-tertiary",
        "lg:float-right lg:-mr-[14rem] lg:ml-8 lg:w-[12rem] lg:border-l-0 lg:border-none lg:pl-0",
        className
      )}
    >
      {children}
    </aside>
  );
}
