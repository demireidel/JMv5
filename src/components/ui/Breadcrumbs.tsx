import Link from "next/link";
import { cn } from "@/lib/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation with BreadcrumbList structured data.
 * Last item is the current page (no link).
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://javiermilei.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        aria-label="Ubicación"
        className={cn(
          "flex items-center gap-1.5 text-[0.6875rem] text-text-tertiary",
          className
        )}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="text-text-tertiary/40">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-text-tertiary no-underline transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-text-secondary">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
