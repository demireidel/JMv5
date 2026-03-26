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
  title: "Reformas",
  description:
    "Las 12 reformas estructurales del gobierno: estabilización, desregulación, legislación y seguridad.",
};

const headerMetrics = heroCounters.map((c) => ({
  value: c.num,
  label: c.label,
}));

export default function ReformasPage() {
  return (
    <>
      <PageHeader
        eyebrow={reformasHero.eyebrow}
        title={reformasHero.title}
        subtitle={reformasHero.desc}
      >
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <ReformasContent blocks={reformBlocks} reformas={reformas} />

      <PageCTA
        headline="Las reformas son la base. Los resultados son la prueba."
        cta="Ver los 19 logros"
        href="/logros"
      />
    </>
  );
}
