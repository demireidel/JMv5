"use client";

import {
  useRef,
  useEffect,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type AnimationVariant = "fade-up" | "fade-in" | "scale-in";

interface VariantConfig {
  hidden: React.CSSProperties;
  visible: React.CSSProperties;
  transition: string;
}

const variants: Record<AnimationVariant, VariantConfig> = {
  "fade-up":  { hidden: { opacity: 0, transform: "translateY(28px)" }, visible: { opacity: 1, transform: "translateY(0)" }, transition: "opacity,transform" },
  "fade-in":  { hidden: { opacity: 0 },                                visible: { opacity: 1 },                            transition: "opacity" },
  "scale-in": { hidden: { opacity: 0, transform: "scale(0.91)" },     visible: { opacity: 1, transform: "scale(1)" },     transition: "opacity,transform" },
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
}

/**
 * Lightweight IntersectionObserver-based reveal.
 * Use this only when you need staggered delays or complex orchestration.
 * For simple reveals, use CSS classes: .reveal-fade-up, .reveal-fade-in, .reveal-scale-in
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.15,
  once = true,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const config = variants[variant];
  const ease = "var(--ease-out-expo)";
  const transitionValue = config.transition
    .split(",")
    .map((p) => `${p.trim()} ${duration}ms ${ease} ${delay}ms`)
    .join(", ");

  const style: React.CSSProperties = {
    ...(visible ? config.visible : config.hidden),
    transition: transitionValue,
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
