"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import type {
  Etapa,
  Paper,
  Discurso,
  Entrevista,
  Influencia,
} from "@/data/archivo";

const sections = [
  { id: "libros", num: "I", title: "Libros" },
  { id: "discursos", num: "II", title: "Discursos" },
  { id: "entrevistas", num: "III", title: "Entrevistas" },
  { id: "papers", num: "IV", title: "Papers" },
  { id: "influencias", num: "V", title: "Influencias" },
  { id: "reconocimientos", num: "VI", title: "Reconocimientos" },
];

export function ArchivoContent({
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
}: {
  etapas: Etapa[];
  papers: Paper[];
  discursos: Discurso[];
  entrevistas: Entrevista[];
  influencias: Influencia[];
  reconocimientos: string[];
}) {
  const [activeSection, setActiveSection] = useState("libros");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(s.id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section style={{ background: "var(--navy)", paddingBlock: "var(--section-py)" }}>
      <Container wide>
        <div className="flex gap-12">
          {/* Sticky sidebar TOC — desktop only */}
          <nav
            className="hidden lg:block shrink-0 sticky self-start"
            style={{ top: "6rem", width: "14rem" }}
            aria-label="Secciones del archivo"
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
              Secciones
            </p>
            <ul className="list-none m-0 p-0 space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block px-3 py-2 rounded-md no-underline transition-colors"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: activeSection === s.id ? "var(--gold)" : "var(--text-3)",
                      background: activeSection === s.id ? "var(--surface-1)" : "transparent",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-accent)" }}>{s.num}</span>{" "}
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main content — all sections visible */}
          <div className="flex-1 min-w-0" style={{ maxWidth: "52rem" }}>

            {/* ── LIBROS ────────────────────────────── */}
            <article id="libros" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>I</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Libros</h2>
              </div>
              <div className="space-y-10">
                {etapas.map((etapa) => (
                  <div key={etapa.label}>
                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--text-sm)",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {etapa.label}{" "}
                      <span style={{ color: "var(--text-3)" }}>({etapa.desc})</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {etapa.books.map((book) => (
                        <div
                          key={book.title}
                          className="flex gap-4 p-4 rounded-lg"
                          style={{
                            background: "var(--surface-1)",
                            border: `1px solid ${book.highlight ? "oklch(0.80 0.17 85 / 0.3)" : "var(--border)"}`,
                          }}
                        >
                          {book.cover && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={book.cover}
                              alt={book.title}
                              className="rounded-md object-cover shrink-0"
                              style={{ width: "4rem", height: "6rem" }}
                              loading="lazy"
                            />
                          )}
                          <div>
                            <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{book.year}</p>
                            <h4 className="m-0 mt-1" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--text-1)", lineHeight: 1.3 }}>{book.title}</h4>
                            {book.publisher && <p className="m-0 mt-1" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{book.publisher}</p>}
                            {book.desc && <p className="m-0 mt-1" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.5 }}>{book.desc}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* ── DISCURSOS ──────────────────────────── */}
            <article id="discursos" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>II</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Discursos</h2>
              </div>
              <div className="space-y-4">
                {discursos.map((d, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl"
                    style={{
                      background: "var(--surface-1)",
                      border: `1px solid ${d.keynote ? "oklch(0.80 0.17 85 / 0.3)" : "var(--border)"}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--gold)", letterSpacing: "0.05em" }}>{d.date}</span>
                      {d.keynote && <span className="px-2 py-0.5 rounded-full" style={{ fontSize: "var(--text-xs)", background: "oklch(0.80 0.17 85 / 0.15)", color: "var(--gold)" }}>Keynote</span>}
                    </div>
                    <h4 className="m-0 mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", color: "var(--text-1)" }}>{d.title}</h4>
                    <p className="m-0 mb-2" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{d.location}</p>
                    <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{d.desc}</p>
                    {d.frase && (
                      <p className="m-0 mt-3 italic" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--text-2)", borderLeft: "3px solid var(--gold)", paddingLeft: "0.75rem" }}>
                        &laquo;{d.frase}&raquo;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* ── ENTREVISTAS ────────────────────────── */}
            <article id="entrevistas" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>III</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Entrevistas</h2>
              </div>
              <div className="space-y-4">
                {entrevistas.map((e, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl"
                    style={{
                      background: "var(--surface-1)",
                      border: `1px solid ${e.highlight ? "oklch(0.80 0.17 85 / 0.3)" : "var(--border)"}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--gold)", letterSpacing: "0.05em" }}>{e.date}</span>
                      {e.duration && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{e.duration}</span>}
                    </div>
                    <h4 className="m-0 mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", color: "var(--text-1)" }}>{e.outlet}</h4>
                    {e.journalist && <p className="m-0 mb-2" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>Con {e.journalist}</p>}
                    <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{e.desc}</p>
                    {e.impact && (
                      <p className="m-0 mt-2 px-3 py-1.5 rounded-md inline-block" style={{ fontSize: "var(--text-xs)", background: "oklch(0.80 0.17 85 / 0.1)", color: "var(--gold)" }}>{e.impact}</p>
                    )}
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* ── PAPERS ─────────────────────────────── */}
            <article id="papers" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>IV</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Papers académicos</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {papers.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg"
                    style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
                  >
                    <span className="block mb-1" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--celeste)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.topic}</span>
                    <h4 className="m-0 mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--text-1)", lineHeight: 1.3 }}>{p.title}</h4>
                    {p.coauthors && <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>Con {p.coauthors}</p>}
                    {p.venue && <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{p.venue}</p>}
                    {p.desc && <p className="m-0 mt-1" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.5 }}>{p.desc}</p>}
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* ── INFLUENCIAS ────────────────────────── */}
            <article id="influencias" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>V</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Influencias intelectuales</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {influencias.map((inf) => (
                  <div key={inf.school} className="p-5 rounded-xl" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <h4 className="m-0 mb-2" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-sm)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{inf.school}</h4>
                    <p className="m-0 mb-2" style={{ fontSize: "var(--text-sm)", color: "var(--text-1)", fontWeight: 600 }}>{inf.names}</p>
                    {inf.keyWork && <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{inf.keyWork}</p>}
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* ── RECONOCIMIENTOS ─────────────────────── */}
            <article id="reconocimientos">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>VI</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Reconocimientos</h2>
              </div>
              <ul className="list-none m-0 p-0 space-y-2">
                {reconocimientos.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginTop: "2px" }}>&#9670;</span>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-2)" }}>{r}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
