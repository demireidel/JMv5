import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  children,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  const titleWords = title.split(" ");
  const totalWords = titleWords.length + (titleEmphasis ? titleEmphasis.split(" ").length : 0);
  const stagger = 30;

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
        <div className={backgroundImage ? "section-light-text" : undefined}>
          {/* Eyebrow */}
          <p
            className="m-0 mb-[var(--spacing-sm)] font-accent text-[length:var(--text-sm)] uppercase tracking-[0.15em] text-gold"
            style={{ animation: "anim-slide-right 500ms var(--ease-out-expo) both" }}
          >
            {eyebrow}
          </p>

          {/* Gold ornamental rule */}
          <span
            className="block h-0.5 w-10 rounded-sm bg-gold mb-5"
            aria-hidden="true"
            style={{ animation: "anim-fade-up 400ms var(--ease-out-expo) 150ms both" }}
          />

          {/* Title — word-by-word reveal */}
          <h1 className="m-0 font-display text-[length:var(--text-3xl)] leading-[1.05] text-text-primary">
            {titleWords.map((word, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  animation: `anim-fade-up 500ms var(--ease-out-expo) ${i * stagger}ms both`,
                }}
              >
                {word}
                {i < titleWords.length - 1 || titleEmphasis ? "\u00A0" : ""}
              </span>
            ))}
            {titleEmphasis?.split(" ").map((word, i) => (
              <span
                key={`em-${i}`}
                className="inline-block italic text-gold"
                style={{
                  animation: `anim-fade-up 500ms var(--ease-out-expo) ${(titleWords.length + i) * stagger}ms both`,
                }}
              >
                {word}
                {i < (titleEmphasis.split(" ").length - 1) ? "\u00A0" : ""}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className="mt-[var(--spacing-md)] max-w-[52ch] text-[length:var(--text-base)] leading-relaxed text-text-secondary"
              style={{
                animation: `anim-fade-up 600ms var(--ease-out-expo) ${totalWords * stagger}ms both`,
              }}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
