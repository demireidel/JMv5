import type { Metadata } from "next";
import { pobrezaData, logros } from "@/data/logros";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { PageCTA } from "@/components/ui/PageCTA";
import { LogrosGrid } from "@/components/logros/LogrosGrid";

export const metadata: Metadata = {
  title: "Resultados de gestión",
  description:
    "Principales resultados del gobierno del presidente Milei: reducción de la pobreza, desinflación, equilibrio fiscal y recuperación del orden público.",
};

const headerMetrics = [
  { value: "19", label: "Indicadores documentados" },
  { value: "57 % → 27 %", label: "Pobreza" },
  { value: "Hiper evitada", label: "Estabilización" },
  { value: "9.000 → 0", label: "Cortes de vías" },
];

export default function LogrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resultados de gestión"
        title="Indicadores con datos verificables"
        subtitle="Cada resultado se presenta con la cifra heredada, la cifra actual, la fuente oficial y la metodología de medición correspondientes."
        updated="Marzo 2025"
      >
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <LogrosGrid logros={logros} pobrezaData={pobrezaData} />

      <PageCTA
        headline="Los resultados son consecuencia de las reformas. Las reformas, del marco institucional."
        cta="Ver las 12 reformas estructurales"
        href="/reformas"
      />
    </>
  );
}
