"use client";

import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoStripProps {
  photos: Photo[];
  direction?: "left" | "right";
}

export function PhotoStrip({ photos, direction }: PhotoStripProps) {
  const scrollRight = direction === "right";
  const doubled = useMemo(() => [...photos, ...photos], [photos]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const inView = useRef(false);

  const anim = useRef({
    offset: 0,
    speed: scrollRight ? 1.2 : -1,
    dragging: false,
    dragStartX: 0,
    dragStartOffset: 0,
    rafId: 0,
    hovering: false,
  });

  const getHalfWidth = useCallback(() => {
    if (!stripRef.current) return 1;
    return stripRef.current.scrollWidth / 2;
  }, []);

  const wrapOffset = useCallback(
    (x: number) => {
      const hw = getHalfWidth();
      let wrapped = x % hw;
      if (wrapped > 0) wrapped -= hw;
      if (wrapped <= -hw) wrapped += hw;
      return wrapped;
    },
    [getHalfWidth]
  );

  const applyTransform = useCallback((x: number) => {
    if (stripRef.current) {
      stripRef.current.style.transform = `translateX(${x}px)`;
    }
  }, []);

  const tick = useCallback(() => {
    const a = anim.current;
    if (!a.dragging && !a.hovering && inView.current) {
      a.offset = wrapOffset(a.offset + a.speed);
      applyTransform(a.offset);
    }
    a.rafId = requestAnimationFrame(tick);
  }, [wrapOffset, applyTransform]);

  useEffect(() => {
    anim.current.rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim.current.rafId);
  }, [tick]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      anim.current.offset = wrapOffset(anim.current.offset);
      applyTransform(anim.current.offset);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [wrapOffset, applyTransform]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!wrapperRef.current) return;
    e.preventDefault();
    const a = anim.current;
    a.dragging = true;
    a.dragStartX = e.clientX;
    a.dragStartOffset = a.offset;
    setIsDragging(true);
    wrapperRef.current.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const a = anim.current;
      if (!a.dragging) return;
      e.preventDefault();
      const dx = e.clientX - a.dragStartX;
      a.offset = wrapOffset(a.dragStartOffset + dx);
      applyTransform(a.offset);
    },
    [wrapOffset, applyTransform]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    const a = anim.current;
    if (!a.dragging) return;
    a.dragging = false;
    setIsDragging(false);
    wrapperRef.current?.releasePointerCapture(e.pointerId);
  }, []);

  const handleMouseEnter = useCallback(() => {
    anim.current.hovering = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    anim.current.hovering = false;
  }, []);

  return (
    <div
      ref={wrapperRef}
      role="region"
      aria-label="Galeria de fotos — arrasta o desliza para ver mas"
      className={`relative select-none overflow-hidden bg-dark py-[var(--spacing-sm)] ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fade edges for seamless loop illusion */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-dark to-transparent" />
      
      <div ref={stripRef} className="flex w-max gap-4">
        {doubled.map((p, i) => (
          <div 
            key={`${p.src}-${i}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={480}
              height={300}
              draggable={false}
              className="h-[clamp(9rem,7rem+9vw,16rem)] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 220px, 320px"
            />
            {/* Subtle overlay on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
