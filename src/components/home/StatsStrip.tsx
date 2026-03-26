"use client";

import { homeStats } from "@/data/home";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsStrip() {
  return (
    <section className="section-light-text relative overflow-hidden bg-midnight">
      {/* Subtle gradient overlay for depth */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.58 0.155 70 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[var(--width-content)] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {homeStats.map((stat, i) => (
            <ScrollReveal 
              key={stat.label} 
              variant="fade-up" 
              delay={i * 100} 
              className="flex justify-center"
            >
              <div 
                className="relative px-6 py-16 text-center md:px-10"
                style={{
                  borderRight: i < 3 ? "1px solid oklch(1 0 0 / 0.06)" : "none",
                }}
              >
                {/* Decorative top accent */}
                <div 
                  className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                  style={{ opacity: i % 2 === 0 ? 1 : 0 }}
                />
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  decimals={stat.decimals}
                  variant="strip"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
