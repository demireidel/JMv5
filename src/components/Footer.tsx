"use client";

import Link from "next/link";
import { navLinks } from "@/data/nav";
import { Wordmark } from "@/components/ui/Wordmark";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy">
      {/* Subtle gradient accent */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, oklch(0.58 0.155 70 / 0.04) 0%, transparent 60%)",
        }}
      />
      
      <div className="relative mx-auto max-w-[var(--width-content)] px-4 pb-[var(--spacing-xl)] pt-[var(--spacing-3xl)] sm:px-6 lg:px-8">
        {/* Top row: wordmark + nav */}
        <ScrollReveal variant="fade-up">
          <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Wordmark + tagline */}
            <div>
              <Link href="/" className="group no-underline">
                <Wordmark className="text-xl tracking-[0.12em] transition-opacity duration-300 group-hover:opacity-80" />
              </Link>
              <p className="page-eyebrow mt-3 opacity-60">La libertad avanza</p>
            </div>

            {/* Nav links */}
            <nav aria-label="Navegacion del pie de pagina">
              <ul className="m-0 grid list-none grid-cols-2 gap-x-14 gap-y-4 p-0 sm:grid-cols-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-slide text-[length:var(--text-sm)] text-text-secondary no-underline transition-all duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ScrollReveal>

        {/* Decorative divider */}
        <ScrollReveal variant="fade-in" delay={150}>
          <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mb-10 text-[length:var(--text-xs)] text-text-tertiary">
            <p className="m-0 opacity-70">
              Presidencia de la Nacion Argentina — Casa Rosada
            </p>
            <p className="m-0 opacity-70">Balcarce 50, Buenos Aires, Argentina</p>
          </div>
        </ScrollReveal>

        {/* Argentine flag — refined */}
        <ScrollReveal variant="none" delay={400}>
          <div
            className="mb-10 flex max-w-40 gap-0 overflow-hidden rounded-sm"
            style={{ height: "3px" }}
            aria-label="Bandera Argentina"
            role="img"
          >
            <div className="flex-1 bg-celeste" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-celeste" />
          </div>
        </ScrollReveal>

        {/* Bottom */}
        <ScrollReveal variant="fade-up" delay={500}>
          <p className="m-0 font-display text-[length:var(--text-base)] italic text-text-secondary">
            Viva la libertad, carajo.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
