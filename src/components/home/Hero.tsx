"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroImage } from "@/data/photos";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      videoRef.current?.pause();
      setShowFallback(true);
      setStep(99);
      return;
    }

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData || conn?.effectiveType === "2g") {
      setShowFallback(true);
      setStep(99);
      return;
    }

    // Choreographed entrance sequence
    const timers = [
      setTimeout(() => setStep(1), 100),   // gold top line
      setTimeout(() => setStep(2), 400),   // eyebrow
      setTimeout(() => setStep(3), 600),   // "Javier"
      setTimeout(() => setStep(4), 800),   // "Milei"
      setTimeout(() => setStep(5), 1200),  // gold divider
      setTimeout(() => setStep(6), 1500),  // subtitle
      setTimeout(() => setStep(7), 1900),  // scroll indicator
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const shown = step >= 99;

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
          preload="metadata"
          src="/videos/milei_epic.mp4"
          poster={heroImage.src}
          onError={() => setShowFallback(true)}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
      )}

      {/* Fallback static image */}
      {showFallback && (
        <div className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Gold accent line at top */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gold"
        style={{
          transform: shown || step >= 1 ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 800ms var(--ease-out-expo)",
        }}
      />

      {/* Content — centered with dramatic positioning */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-16 md:pb-20">
        {/* Eyebrow */}
        <p
          className="mb-8 text-center font-accent text-xs uppercase tracking-[0.4em] text-white/70"
          style={{
            opacity: shown || step >= 2 ? 1 : 0,
            transform: shown || step >= 2 ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms var(--ease-out-expo), transform 700ms var(--ease-out-expo)",
            letterSpacing: "0.35em",
          }}
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
          {/* "Javier" — elegant, white with subtle tracking */}
          <span
            className="block font-accent font-bold uppercase text-white"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 5.5rem)",
              letterSpacing: "0.25em",
              clipPath: shown || step >= 3 ? "inset(0)" : "inset(100% 0 0 0)",
              transition: "clip-path 900ms var(--ease-out-expo)",
              marginBottom: "0.1em",
            }}
          >
            Javier
          </span>
          {/* "Milei" — massive, gold shimmer, commanding presence */}
          <span
            className={`block font-accent font-bold uppercase ${shown || step >= 4 ? "gold-shimmer" : ""}`}
            style={{
              fontSize: "clamp(5.5rem, 22vw, 14rem)",
              letterSpacing: "0.04em",
              clipPath: shown || step >= 4 ? "inset(0)" : "inset(100% 0 0 0)",
              transition: "clip-path 1000ms var(--ease-out-expo)",
              ...(!(shown || step >= 4) ? { color: "var(--color-gold)" } : {}),
            }}
          >
            Milei
          </span>
        </h1>

        {/* Gold divider — expands from center */}
        <div
          className="mx-auto mb-6 mt-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
          style={{
            transform: shown || step >= 5 ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 800ms var(--ease-out-expo)",
          }}
        />

        {/* Subtitle — elegant, refined typography */}
        <p
          className="max-w-[42rem] text-center font-display text-lg italic leading-relaxed text-white/85 md:text-xl"
          style={{
            opacity: shown || step >= 6 ? 1 : 0,
            transform: shown || step >= 6 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 800ms var(--ease-out-expo), transform 800ms var(--ease-out-expo)",
            textShadow: "0 2px 20px oklch(0 0 0 / 0.4)",
          }}
        >
          Argentina sera el pais mas libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
          style={{
            opacity: shown || step >= 7 ? 1 : 0,
            transition: "opacity 400ms var(--ease-standard)",
          }}
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/25 pt-1.5">
            <div className="h-2 w-1 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
