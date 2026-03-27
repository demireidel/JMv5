import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageMeta } from "@/components/ui/PageMeta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  date?: string;
  updated?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  date,
  updated,
  breadcrumbs,
  children,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "bg-cream-dark pb-12 pt-14 md:pt-18",
        backgroundImage && "relative overflow-hidden"
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt || ""}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklch, var(--color-overlay-dark), transparent 40%) 0%, color-mix(in oklch, var(--color-overlay-dark), transparent 5%) 100%)",
            }}
          />
        </>
      )}
      <Container className={backgroundImage ? "relative z-10" : undefined}>
        <div
          className={backgroundImage ? "section-light-text" : undefined}
          style={{ animation: "anim-fade-up 600ms var(--ease-out-expo) both" }}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-4" />}

          {/* Kicker */}
          <p
            className="m-0 mb-[var(--spacing-sm)] font-display text-[length:var(--text-sm)] tracking-[0.04em] text-text-tertiary"
            style={{ fontVariant: "small-caps" }}
          >
            {eyebrow}
          </p>

          {/* Thin rule */}
          <span
            className="mb-5 block h-px w-10 bg-rule"
            aria-hidden="true"
          />

          {/* Title */}
          <h1 className="m-0 font-display text-[length:var(--text-3xl)] leading-[1.05] text-text-primary">
            {title}
            {titleEmphasis && (
              <> <span className="italic text-gold">{titleEmphasis}</span></>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-[var(--spacing-md)] max-w-[52ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary">
              {subtitle}
            </p>
          )}

          {/* Date metadata */}
          {(date || updated) && (
            <PageMeta date={date} updated={updated} className="mt-4" />
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
