import type { Metadata } from "next";
import {
  reformasHero,
  heroCounters,
  reformBlocks,
  reformas,
} from "@/data/reformas";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { PageCTA } from "@/components/ui/PageCTA";
import { ReformasContent } from "@/components/reformas/ReformasContent";

export const metadata: Metadata = {
  title: "Reformas estructurales",
  description:
    "Las doce reformas estructurales del gobierno: estabilización macroeconómica, desregulación, apertura comercial y seguridad.",
};

const headerMetrics = heroCounters.map((c) => ({
  value: c.num,
  label: c.label,
}));

export default function ReformasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reformas estructurales"
        title="Doce transformaciones de fondo"
        subtitle="Cada reforma se identifica por su instrumento legal, su fecha de vigencia y su estado de implementación."
        updated="Marzo 2025"
      >
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <ReformasContent blocks={reformBlocks} reformas={reformas} />

      <PageCTA
        headline="Las reformas crean el marco. Los resultados lo confirman."
        cta="Ver los indicadores de gestión"
        href="/logros"
      />
    </>
  );
}
