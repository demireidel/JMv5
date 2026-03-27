import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { PageCTA } from "@/components/ui/PageCTA";
import { ArchivoContent } from "@/components/archivo/ArchivoContent";
import {
  etapas,
  papers,
  discursos,
  entrevistas,
  reconocimientos,
} from "@/data/archivo";

export const metadata: Metadata = {
  title: "Archivo intelectual",
  description:
    "Producción intelectual del presidente Milei: libros, artículos académicos, discursos institucionales y entrevistas.",
};

const headerMetrics = [
  { value: "9", label: "Libros" },
  { value: "7", label: "Artículos académicos" },
  { value: "11", label: "Discursos institucionales" },
];

export default function ArchivoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Archivo intelectual"
        title="Producción intelectual"
        subtitle="Libros, artículos académicos, discursos y entrevistas del presidente Milei. El registro de una trayectoria que combina formación económica, debate público y ejercicio del poder."
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
        headline="Las ideas orientan la acción. La acción produce resultados."
        cta="Ver los indicadores de gestión"
        href="/logros"
      />
    </>
  );
}
