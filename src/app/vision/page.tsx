import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pullquote } from "@/components/ui/Pullquote";
import { PageCTA } from "@/components/ui/PageCTA";
import { Container } from "@/components/ui/Container";
import VisionContent from "@/content/vision.mdx";

export const metadata: Metadata = {
  title: "Visión y principios",
  description:
    "Fundamentos filosóficos y principios rectores del gobierno del presidente Javier Milei. Cinco capítulos sobre libertad, capitalismo, Estado, cultura y defensa de Occidente.",
  alternates: { canonical: "/vision" },
  openGraph: {
    title: "Visión y principios de gobierno",
    description: "Los fundamentos del proyecto de gobierno: libertad individual, propiedad privada y cooperación social voluntaria.",
    url: "/vision",
  },
};

export default function VisionPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Visión y principios" }]}
        eyebrow="Visión y principios"
        title="Los fundamentos del proyecto"
        titleEmphasis="de gobierno"
        subtitle="Un programa de transformación fundado en la libertad individual, la propiedad privada y la cooperación social voluntaria."
        updated="Marzo 2025"
      >
        <Pullquote cite="Alberto Benegas Lynch (h) — citado en el discurso de asunción, 10 de diciembre de 2023" className="mt-6">
          «El liberalismo es el respeto irrestricto del proyecto de vida del
          prójimo, basado en el principio de no agresión, en defensa del derecho a
          la vida, a la libertad y a la propiedad, donde solo se puede ser exitoso
          sirviendo al prójimo con bienes de mejor calidad a un mejor precio.»
        </Pullquote>
      </PageHeader>

      <section className="bg-dark py-[var(--spacing-section)]">
        <Container>
          <article className="content-prose">
            <VisionContent />
          </article>
        </Container>
      </section>

      <PageCTA
        headline="Las ideas orientan la acción. La acción produce resultados."
        cta="Ver los resultados de gestión"
        href="/logros"
      />
    </>
  );
}
