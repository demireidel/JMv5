import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { PageCTA } from "@/components/ui/PageCTA";
import { ArchivoContent } from "@/components/archivo/ArchivoContent";
import {
  archivoHeader,
  etapas,
  papers,
  discursos,
  entrevistas,
  reconocimientos,
} from "@/data/archivo";

export const metadata: Metadata = {
  title: "Archivo Intelectual",
  description:
    "Archivo intelectual: libros, artículos académicos, discursos y entrevistas del Presidente Milei.",
};

const headerMetrics = [
  { value: "9", label: "Libros" },
  { value: "7", label: "Papers académicos" },
  { value: "11", label: "Discursos históricos" },
];

export default function ArchivoPage() {
  return (
    <>
      <PageHeader
        eyebrow={archivoHeader.sectionTitle}
        title="Obra Intelectual"
        subtitle={archivoHeader.sectionIntro}
      >
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <ArchivoContent
        etapas={etapas}
        papers={papers}
        discursos={discursos}
        entrevistas={entrevistas}
        reconocimientos={reconocimientos}
      />

      <PageCTA
        headline="Las ideas preceden a la acción. La acción precede a los resultados."
        cta="Ver los logros"
        href="/logros"
      />
    </>
  );
}
