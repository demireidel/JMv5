"use client";

import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CardProps {
  children: React.ReactNode;
  accent?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  accent = false,
  hover = false,
  className = "",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { relX, relY, hovering } = useMousePosition(cardRef);

  if (!hover) {
    return (
      <div
        className={`${accent ? "surface-card-accent" : "surface-card"} ${className}`}
      >
        {children}
      </div>
    );
  }

  // 3D tilt: max 7 degrees rotation
  const rotateX = hovering ? relY * -7 : 0;
  const rotateY = hovering ? relX * 7 : 0;

  return (
    <div className="relative" ref={cardRef}>
      {/* Glow ring — gradient reads --mx/--my via CSS, no re-render per mousemove frame */}
      <div
        aria-hidden="true"
        className="card-glow pointer-events-none absolute -inset-px rounded-[var(--radius-xl)]"
        style={{ opacity: hovering ? 1 : 0, transition: "opacity 300ms var(--ease-out-expo)" }}
      />
      <div
        className={`${accent ? "surface-card-accent" : "surface-card"} card-hover relative ${className}`}
        style={{
          transform: hovering
            ? `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`
            : "perspective(900px) rotateX(0) rotateY(0) translateZ(0)",
          transition: hovering
            ? "transform 80ms linear"
            : "transform 500ms var(--ease-spring)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
