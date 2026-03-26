"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { sectionCards } from "@/data/home";

export function SectionPreviews() {
  return (
    <section className="relative bg-dark py-[var(--spacing-section)]">
      {/* Subtle radial gradient for depth */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 100%, oklch(0.58 0.155 70 / 0.03) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <ScrollReveal variant="fade-up">
          <div className="mb-16 text-center">
            <p className="badge-text mb-4 tracking-[0.25em]">
              Explorar
            </p>
            <h2 className="mx-auto max-w-2xl font-display text-[length:var(--text-2xl)] leading-tight text-text-primary">
              La transformacion, seccion por seccion
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Refined bento grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectionCards.map((s, i) => {
            const isFeatured = i === 0 || i === 5;
            const spanClass =
              i === 0 ? "lg:col-span-2" : i === 5 ? "lg:col-span-3" : "";
            return (
              <ScrollReveal key={s.href} variant="fade-up" delay={i * 80} className={spanClass}>
                <Link href={s.href} className="group block h-full no-underline">
                  <Card accent hover className={`relative h-full overflow-hidden ${isFeatured ? "p-8 md:p-10" : "p-6 md:p-8"}`}>
                    {/* Subtle corner accent */}
                    <div 
                      className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: "radial-gradient(circle at 100% 0%, oklch(0.58 0.155 70 / 0.1) 0%, transparent 70%)",
                      }}
                    />
                    
                    {/* Stat chip */}
                    {s.stat && (
                      <div className="mb-5 flex items-baseline gap-3">
                        <span
                          className={`font-accent font-bold leading-none text-gold ${
                            isFeatured
                              ? "text-[length:var(--text-3xl)]"
                              : "text-[length:var(--text-2xl)]"
                          }`}
                        >
                          {s.stat}
                        </span>
                        <span className="stat-label opacity-70">{s.statLabel}</span>
                      </div>
                    )}

                    <h3
                      className={`m-0 mb-3 font-display text-text-primary transition-colors duration-300 group-hover:text-gold ${
                        isFeatured
                          ? "text-[length:var(--text-2xl)]"
                          : "text-[length:var(--text-xl)]"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="prose-body m-0 leading-relaxed">{s.desc}</p>

                    {/* Arrow indicator */}
                    <div className="badge-text mt-6 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                      <span className="opacity-70 transition-opacity duration-300 group-hover:opacity-100">Explorar</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      >
                        <path
                          d="M7 4l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
