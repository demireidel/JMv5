import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { visionPhotos } from "@/data/photos";
import { VisionChapters } from "@/components/vision/VisionChapters";

export const metadata: Metadata = {
  title: "Visión y Filosofía",
  description:
    "La visión filosófica y los principios que guían el gobierno del Presidente Javier Milei. Cinco capítulos sobre libertad, capitalismo, Estado, cultura y Occidente.",
};

export default function VisionPage() {
  return (
    <>
      {/* Opening */}
      <section className="pt-28 pb-12" style={{ background: "var(--dark)" }}>
        <Container>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-sm)",
              color: "var(--gold)",
              letterSpacing: "0.2em",
            }}
          >
            La visión
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-3xl)",
              color: "var(--text-1)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
            }}
          >
            Argentina será{" "}
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                color: "var(--gold)",
                textTransform: "none",
              }}
            >
              el país más libre del mundo
            </span>
          </h1>
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "var(--text-lg)",
              color: "var(--text-2)",
              maxWidth: "44rem",
              lineHeight: 1.6,
            }}
          >
            No vine a administrar decadencia. Vine a refundar la Argentina sobre
            la libertad, la propiedad privada y la cooperación social voluntaria.
          </p>

          {/* Mantra */}
          <blockquote
            className="m-0 rounded-xl p-6"
            style={{
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              maxWidth: "48rem",
            }}
          >
            <p
              className="m-0 mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "var(--text-base)",
                color: "var(--text-1)",
                lineHeight: 1.6,
              }}
            >
              &laquo;El liberalismo es el respeto irrestricto del proyecto de vida del
              prójimo, basado en el principio de no agresión, en defensa del derecho a
              la vida, a la libertad y a la propiedad, donde solo se puede ser exitoso
              sirviendo al prójimo con bienes de mejor calidad a un mejor precio.&raquo;
            </p>
            <footer
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                color: "var(--text-3)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Alberto Benegas Lynch (h) — Discurso de asunción, diciembre 2023
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* Chapters with sidebar navigation */}
      <VisionChapters photos={visionPhotos} />
    </>
  );
}
