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

  // 3D tilt: max 5 degrees rotation (more subtle)
  const rotateX = hovering ? relY * -5 : 0;
  const rotateY = hovering ? relX * 5 : 0;

  return (
    <div className="group relative" ref={cardRef}>
      {/* Glow ring — gradient reads --mx/--my via CSS, no re-render per mousemove frame */}
      <div
        aria-hidden="true"
        className="card-glow pointer-events-none absolute -inset-px rounded-[var(--radius-xl)]"
        style={{ 
          opacity: hovering ? 1 : 0, 
          transition: "opacity 400ms var(--ease-out-expo)",
          filter: "blur(1px)",
        }}
      />
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ 
          background: "radial-gradient(circle at 50% 50%, oklch(0.58 0.155 70 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className={`${accent ? "surface-card-accent" : "surface-card"} card-hover relative ${className}`}
        style={{
          transform: hovering
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`
            : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
          transition: hovering
            ? "transform 100ms linear"
            : "transform 600ms var(--ease-spring)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
