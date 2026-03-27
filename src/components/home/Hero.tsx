import { HeroVideo } from "@/components/home/HeroVideo";
import { heroImage } from "@/data/photos";

/**
 * Hero — institutional masthead with editorial dek.
 * Mixed-case Fraunces, compact context line, reduced height.
 * HeroVideo is the only client island (video/fallback).
 */
export function Hero() {
  return (
    <section className="relative h-[65vh] min-h-[26rem] w-full overflow-hidden">
      <HeroVideo
        src="/videos/milei_epic.mp4"
        poster={heroImage.src}
        alt={heroImage.alt}
      />

      <div className="hero-overlay absolute inset-0" />

      {/* Content — bottom-aligned masthead */}
      <div
        className="relative z-10 flex h-full flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8"
        style={{ animation: "anim-fade-up 800ms var(--ease-out-expo) 300ms both" }}
      >
        <div className="mx-auto w-full max-w-[var(--width-content)]">
          {/* Office context line */}
          <p className="m-0 text-[0.6875rem] tracking-[0.04em] text-white/40">
            Presidencia de la Nación Argentina
          </p>

          {/* Thin rule */}
          <div className="my-3 h-px w-10 bg-white/15" aria-hidden="true" />

          {/* Name — mixed-case Fraunces, not shouted */}
          <h1 className="m-0 font-display text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[0.95] text-white/92">
            Javier Milei
          </h1>

          {/* Dek — editorial subtitle */}
          <p className="m-0 mt-3 max-w-[42ch] font-display text-[clamp(0.9375rem,2vw,1.125rem)] italic leading-snug text-white/55">
            Las ideas de la libertad, al servicio del progreso de la Nación
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        style={{ animation: "anim-fade-in 400ms var(--ease-standard) 1200ms both" }}
      >
        <div className="flex h-6 w-3.5 items-start justify-center rounded-full border border-white/15 pt-1">
          <div className="h-1 w-0.5 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
