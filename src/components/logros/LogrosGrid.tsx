"use client";

import { useState, useEffect } from "react";
import type { Logro } from "@/data/logros";
import { BeforeAfterCard } from "@/components/logros/BeforeAfterCard";
import { Container } from "@/components/ui/Container";

const romanNumerals = ["I", "II", "III", "IV", "V"];

interface LogroBlock {
  id: string;
  title: string;
  subtitle: string;
  nums: string[];
}

const blocks: LogroBlock[] = [
  {
    id: "estabilizacion",
    title: "Estabilización macroeconómica",
    subtitle: "Se evitó la hiperinflación, se pulverizó la inflación, se eliminó el déficit y se levantó el cepo",
    nums: ["02", "04", "05", "10"],
  },
  {
    id: "crecimiento",
    title: "Crecimiento y producción",
    subtitle: "La economía creció, las exportaciones batieron récords, el campo y la minería explotaron",
    nums: ["09", "11", "18", "15"],
  },
  {
    id: "orden",
    title: "Orden y seguridad",
    subtitle: "Se terminaron los piquetes, bajaron los homicidios y se liberó la economía",
    nums: ["03", "07", "08"],
  },
  {
    id: "credibilidad",
    title: "Credibilidad y confianza",
    subtitle: "Argentina volvió al mapa financiero: riesgo país, blanqueo, inversiones y mercados",
    nums: ["06", "17", "19"],
  },
  {
    id: "bolsillo",
    title: "Bolsillo y calidad de vida",
    subtitle: "Salarios reales, crédito hipotecario, menos impuestos, más vuelos y más consumo",
    nums: ["13", "12", "16", "14"],
  },
];

export function LogrosGrid({ logros }: { logros: Logro[] }) {
  const [activeBlock, setActiveBlock] = useState("estabilizacion");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    blocks.forEach((b) => {
      const el = document.getElementById(`logro-${b.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveBlock(b.id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section style={{ background: "var(--dark)", paddingBlock: "var(--section-py)" }}>
      <Container wide>
        <div className="flex gap-12">
          {/* Sticky sidebar TOC — desktop only */}
          <nav
            className="hidden lg:block shrink-0 sticky self-start"
            style={{ top: "6rem", width: "14rem" }}
            aria-label="Bloques de logros"
          >
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                color: "var(--text-3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {logros.length} logros
            </p>
            <ul className="list-none m-0 p-0 space-y-1">
              {blocks.map((b, i) => (
                <li key={b.id}>
                  <a
                    href={`#logro-${b.id}`}
                    className="block px-3 py-2 rounded-md no-underline transition-colors"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: activeBlock === b.id ? "var(--gold)" : "var(--text-3)",
                      background: activeBlock === b.id ? "var(--surface-1)" : "transparent",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-accent)" }}>{romanNumerals[i]}</span>{" "}
                    {b.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0" style={{ maxWidth: "52rem" }}>
            {blocks.map((block, i) => {
              const blockLogros = block.nums
                .map((num) => logros.find((l) => l.num === num))
                .filter(Boolean) as Logro[];

              if (blockLogros.length === 0) return null;

              return (
                <article key={block.id} id={`logro-${block.id}`} className="mb-16">
                  {/* Block header */}
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--text-2xl)",
                        color: "var(--gold)",
                      }}
                    >
                      {romanNumerals[i]}
                    </span>
                    <h3
                      className="m-0"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-xl)",
                        color: "var(--text-1)",
                      }}
                    >
                      {block.title}
                    </h3>
                  </div>
                  <p
                    className="mb-8"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-2)",
                      lineHeight: 1.7,
                    }}
                  >
                    {block.subtitle}
                  </p>

                  {/* Cards grid */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {blockLogros.map((logro) => (
                      <BeforeAfterCard key={logro.num} logro={logro} />
                    ))}
                  </div>

                  {i < blocks.length - 1 && (
                    <hr
                      className="mt-16"
                      style={{ border: "none", borderTop: "1px solid var(--border)" }}
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
