"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroVideoProps {
  src: string;
  poster: string;
  alt: string;
}

/**
 * Tiny client island: handles video playback, reduced-motion,
 * and save-data fallback. Everything else in Hero is server-rendered.
 */
export function HeroVideo({ src, poster, alt }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
      setShowFallback(true);
      return;
    }

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData || conn?.effectiveType === "2g") {
      setShowFallback(true);
    }
  }, []);

  if (showFallback) {
    return (
      <div className="absolute inset-0">
        <Image
          src={poster}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      src={src}
      poster={poster}
      onError={() => setShowFallback(true)}
      className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
    />
  );
}
