import { HeroVideo } from "@/components/home/HeroVideo";
import { heroImage } from "@/data/photos";

/**
 * Hero — server component.
 * Entrance choreography is pure CSS animation-delay.
 * Only HeroVideo is a client island (video fallback logic).
 */
export function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background — client island for video/fallback logic */}
      <HeroVideo
        src="/videos/milei_epic.mp4"
        poster={heroImage.src}
        alt={heroImage.alt}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Gold accent line at top */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-center bg-gold"
        style={{ animation: "anim-line-expand 800ms var(--ease-out-expo) 100ms both" }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12">
        {/* Eyebrow */}
        <p
          className="mb-6 text-center font-accent text-sm uppercase tracking-[0.35em] text-white/85"
          style={{ animation: "anim-fade-up 600ms var(--ease-out-expo) 400ms both" }}
        >
          Presidente de la Nacion Argentina
        </p>

        <h1
          className="text-center"
          style={{
            lineHeight: 0.82,
            textShadow: "0 4px 60px oklch(0 0 0 / 0.5), 0 2px 20px oklch(0 0 0 / 0.3)",
          }}
        >
          {/* "Javier" */}
          <span
            className="block font-accent font-bold uppercase text-white"
            style={{
              fontSize: "clamp(3rem, 11vw, 6.5rem)",
              letterSpacing: "0.18em",
              animation: "anim-clip-reveal-up 800ms var(--ease-out-expo) 600ms both",
            }}
          >
            Javier
          </span>
          {/* "Milei" */}
          <span
            className="block font-accent font-bold uppercase text-gold"
            style={{
              fontSize: "clamp(5rem, 19vw, 11rem)",
              letterSpacing: "0.08em",
              animation: "anim-clip-reveal-up 900ms var(--ease-out-expo) 800ms both",
            }}
          >
            Milei
          </span>
        </h1>

        {/* Gold divider */}
        <div
          className="mx-auto mb-5 mt-7 h-px w-20 origin-center bg-gold"
          style={{ animation: "anim-line-expand 700ms var(--ease-out-expo) 1200ms both" }}
        />

        {/* Subtitle */}
        <p
          className="max-w-[36rem] text-center font-display text-xl italic leading-snug text-white/90"
          style={{ animation: "anim-fade-up 700ms var(--ease-out-expo) 1500ms both" }}
        >
          Argentina sera el pais mas libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
          style={{ animation: "anim-fade-in 400ms var(--ease-standard) 1900ms both" }}
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/25 pt-1.5">
            <div className="h-2 w-1 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
