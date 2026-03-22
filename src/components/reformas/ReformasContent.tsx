"use client";

import { useState, useEffect } from "react";
import type { ReformBlock, Reforma } from "@/data/reformas";
import { Container } from "@/components/ui/Container";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

function ReformCard({ reforma }: { reforma: Reforma }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--surface-1)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-xs)",
            color: "var(--gold)",
            letterSpacing: "0.1em",
          }}
        >
          {reforma.num} — {reforma.title}
        </span>
      </div>

      <div className="px-5 pt-4 pb-3">
        <h4
          className="m-0 mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-lg)",
            color: "var(--text-1)",
            lineHeight: 1.3,
          }}
        >
          {reforma.subtitle}
        </h4>
      </div>

      {/* ANTES / AHORA */}
      <div className="px-5 pb-4 space-y-3">
        <div
          className="rounded-lg p-4"
          style={{ background: "var(--tint-before)" }}
        >
          <span
            className="block mb-1"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xs)",
              color: "var(--danger)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Antes
          </span>
          <div
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-2)",
              lineHeight: 1.6,
            }}
          >
            {reforma.antes}
          </div>
        </div>

        <div
          className="rounded-lg p-4"
          style={{ background: "var(--tint-after)" }}
        >
          <span
            className="block mb-1"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-xs)",
              color: "var(--success)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Ahora
          </span>
          <div
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-2)",
              lineHeight: 1.6,
            }}
          >
            {reforma.ahora}
          </div>
        </div>

        {/* Impact stats */}
        {reforma.impactStats.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {reforma.impactStats.map((s) => (
              <div
                key={s.label}
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-xs)",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  {s.val}
                </span>{" "}
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Expandable impact text */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full px-5 py-3 flex items-center justify-between bg-transparent border-none cursor-pointer"
        style={{
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-xs)",
          color: "var(--text-2)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
        aria-expanded={expanded}
        aria-controls={`reforma-detail-${reforma.num}`}
      >
        {expanded ? "Cerrar" : "Impacto"}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: `transform var(--duration-fast)`,
          }}
        >
          <path
            d="M3 5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={`reforma-detail-${reforma.num}`}
        className="overflow-hidden transition-all"
        style={{
          maxHeight: expanded ? "200rem" : "0",
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-standard)",
        }}
      >
        <div className="px-5 pb-5">
          <div
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            {reforma.impactText}
          </div>
          {reforma.quote && (
            <blockquote
              className="mt-4 m-0 italic"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-sm)",
                color: "var(--text-2)",
                borderLeft: "3px solid var(--gold)",
                paddingLeft: "0.75rem",
              }}
            >
              {reforma.quote.text}
              <footer
                className="mt-1 not-italic"
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--text-3)",
                  fontFamily: "var(--font-accent)",
                }}
              >
                — {reforma.quote.cite}
              </footer>
            </blockquote>
          )}
        </div>
      </div>
    </article>
  );
}

export function ReformasContent({
  blocks,
  reformas,
}: {
  blocks: ReformBlock[];
  reformas: Reforma[];
}) {
  const [activeBlock, setActiveBlock] = useState(blocks[0]?.title ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    blocks.forEach((b) => {
      const id = `bloque-${b.title.replace(/\s+/g, "-").toLowerCase()}`;
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveBlock(b.title);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [blocks]);

  return (
    <section style={{ background: "var(--navy)", paddingBlock: "var(--section-py)" }}>
      <Container wide>
        <div className="flex gap-12">
          {/* Sticky sidebar TOC — desktop only */}
          <nav
            className="hidden lg:block shrink-0 sticky self-start"
            style={{ top: "6rem", width: "14rem" }}
            aria-label="Bloques de reforma"
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
              Bloques
            </p>
            <ul className="list-none m-0 p-0 space-y-1">
              {blocks.map((b, i) => {
                const id = `bloque-${b.title.replace(/\s+/g, "-").toLowerCase()}`;
                const cleanTitle = b.title.replace(/^BLOQUE\s+[IVX]+\s*—\s*/i, "");
                return (
                  <li key={b.title}>
                    <a
                      href={`#${id}`}
                      className="block px-3 py-2 rounded-md no-underline transition-colors"
                      style={{
                        fontSize: "var(--text-xs)",
                        color: activeBlock === b.title ? "var(--gold)" : "var(--text-3)",
                        background: activeBlock === b.title ? "var(--surface-1)" : "transparent",
                        transitionDuration: "var(--duration-fast)",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-accent)" }}>{romanNumerals[i]}</span>{" "}
                      {cleanTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Main content — all blocks visible */}
          <div className="flex-1 min-w-0" style={{ maxWidth: "52rem" }}>
            {blocks.map((block, i) => {
              const id = `bloque-${block.title.replace(/\s+/g, "-").toLowerCase()}`;
              const cleanTitle = block.title.replace(/^BLOQUE\s+[IVX]+\s*—\s*/i, "");
              const blockReformas = reformas.slice(block.range[0], block.range[1]);

              return (
                <article key={block.title} id={id} className="mb-16">
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
                    <h2
                      className="m-0"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-xl)",
                        color: "var(--text-1)",
                      }}
                    >
                      {cleanTitle}
                    </h2>
                  </div>
                  <p
                    className="mb-8"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-2)",
                      maxWidth: "44rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {block.subtitle}
                  </p>

                  {/* Reform cards */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {blockReformas.map((r) => (
                      <ReformCard key={r.num} reforma={r} />
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
