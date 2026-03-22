"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroImage } from "@/data/photos";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      videoRef.current?.pause();
      setShowFallback(true);
      return;
    }

    // Skip video on slow connections or data-saver mode
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || conn?.effectiveType === "2g") {
      setShowFallback(true);
    }
  }, []);

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background video */}
      {!showFallback && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage.src}
          onError={() => setShowFallback(true)}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback static image (reduced motion, slow connection, or video error) */}
      {showFallback && (
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            color-mix(in oklch, var(--color-overlay-dark), transparent 85%) 0%,
            color-mix(in oklch, var(--color-overlay-dark), transparent 65%) 40%,
            color-mix(in oklch, var(--color-overlay-dark), transparent 30%) 80%,
            color-mix(in oklch, var(--color-overlay-dark), transparent 10%) 100%
          )`,
        }}
      />

      {/* Gold accent line at top */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gold" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12">
        <p className="mb-4 text-center font-accent text-[length:var(--text-sm)] uppercase tracking-[0.25em] text-text-secondary">
          Presidente de la Nacion Argentina
        </p>

        <h1 className="text-center leading-none">
          <span className="block font-accent text-[length:var(--text-hero)] font-normal uppercase tracking-[0.08em] text-white">
            Javier
          </span>
          <span className="gold-shimmer block font-accent text-[length:var(--text-hero)] font-normal uppercase tracking-[0.08em]">
            Milei
          </span>
        </h1>

        {/* Gold divider */}
        <div className="mx-auto mb-4 mt-6 h-0.5 w-12 bg-gold" />

        <p className="text-center font-display text-[length:var(--text-lg)] italic text-text-secondary">
          Argentina sera el pais mas libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/25 pt-1.5">
            <div className="h-2 w-1 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
