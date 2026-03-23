"use client";

import {
  useRef,
  useEffect,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "clip-reveal"
  | "slide-left"
  | "slide-right"
  | "blur-in"
  | "cinematic"
  | "rise-up"
  | "none";

interface VariantConfig {
  hidden: React.CSSProperties;
  visible: React.CSSProperties;
  /** CSS property names separated by commas for transition string */
  transition: string;
}

const variants = {
  "fade-up":    { hidden: { opacity: 0, transform: "translateY(28px)" },                           visible: { opacity: 1, transform: "translateY(0)" },                  transition: "opacity,transform" },
  "fade-in":    { hidden: { opacity: 0 },                                                           visible: { opacity: 1 },                                              transition: "opacity" },
  "scale-in":   { hidden: { opacity: 0, transform: "scale(0.91)" },                                visible: { opacity: 1, transform: "scale(1)" },                       transition: "opacity,transform" },
  "clip-reveal":{ hidden: { clipPath: "inset(100% 0 0 0)" },                                       visible: { clipPath: "inset(0)" },                                    transition: "clip-path" },
  "slide-left": { hidden: { opacity: 0, transform: "translateX(-48px)" },                          visible: { opacity: 1, transform: "translateX(0)" },                  transition: "opacity,transform" },
  "slide-right":{ hidden: { opacity: 0, transform: "translateX(48px)" },                           visible: { opacity: 1, transform: "translateX(0)" },                  transition: "opacity,transform" },
  "blur-in":    { hidden: { opacity: 0, filter: "blur(10px)" },                                    visible: { opacity: 1, filter: "blur(0px)" },                         transition: "opacity,filter" },
  "cinematic":  { hidden: { opacity: 0, transform: "translateY(36px) scale(0.96)", filter: "blur(10px)" }, visible: { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }, transition: "opacity,transform,filter" },
  "rise-up":    { hidden: { opacity: 0, transform: "translateY(52px) scale(0.97)" },               visible: { opacity: 1, transform: "translateY(0) scale(1)" },         transition: "opacity,transform" },
  "none":       { hidden: {},                                                                       visible: {},                                                          transition: "" },
} satisfies Record<AnimationVariant, VariantConfig>;

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

  if (variant === "none") {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  const config = variants[variant];
  const ease = "var(--ease-out-expo)";
  const transitionValue = config.transition
    .split(",")
    .map((p) => `${p.trim()} ${duration}ms ${ease} ${delay}ms`)
    .join(", ");

  const style: React.CSSProperties = {
    ...(visible ? config.visible : config.hidden),
    transition: transitionValue,
    willChange: visible ? undefined : config.transition.split(",").join(" "),
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
