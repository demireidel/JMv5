import type { Metadata } from "next";
import { pobrezaData, logros, logrosSectionHeader } from "@/data/logros";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { PageCTA } from "@/components/ui/PageCTA";
import { LogrosGrid } from "@/components/logros/LogrosGrid";

export const metadata: Metadata = {
  title: "Logros",
  description:
    "Los logros concretos del gobierno del Presidente Javier Milei: reducción de pobreza, desinflación, equilibrio fiscal y más.",
};

const headerMetrics = [
  { value: "19", label: "Logros documentados" },
  { value: "57% → 27%", label: "Pobreza" },
  { value: "HIPER EVITADA", label: "Estabilización" },
  { value: "9.000 → 0", label: "Piquetes" },
];

export default function LogrosPage() {
  return (
    <>
      <PageHeader
        eyebrow={logrosSectionHeader.sectionTitle}
        title="Resultados Concretos"
        subtitle={logrosSectionHeader.sectionIntro}
      >
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <LogrosGrid logros={logros} pobrezaData={pobrezaData} />

      <PageCTA
        headline="Cada número tiene una historia. Cada historia tiene evidencia."
        cta="Ver las 12 reformas"
        href="/reformas"
      />
    </>
  );
}
