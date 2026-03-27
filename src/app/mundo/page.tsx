import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { PageCTA } from "@/components/ui/PageCTA";
import { leaders, timeline, megaStats, tradeAgreements } from "@/data/mundo";
import { MundoContent } from "@/components/mundo/MundoContent";

export const metadata: Metadata = {
  title: "Relaciones exteriores",
  description:
    "Política exterior argentina: acuerdos comerciales, reuniones bilaterales y posicionamiento estratégico.",
  alternates: { canonical: "/mundo" },
  openGraph: {
    title: "Política exterior y acuerdos comerciales",
    description: "Reuniones bilaterales, tratados de libre comercio y reposicionamiento estratégico de Argentina.",
    url: "/mundo",
  },
};

const headerMetrics = [
  { value: "3", label: "TLC firmados" },
  { value: "20+", label: "Bilaterales con jefes de Estado" },
  { value: "USD 55.000 M", label: "Inversión comprometida" },
];

export default function MundoPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Relaciones exteriores" }]}
        eyebrow="Relaciones exteriores"
        title="Política exterior y acuerdos comerciales"
        subtitle="Argentina firmó tres tratados de libre comercio, sostuvo más de veinte reuniones bilaterales con jefes de Estado y atrajo compromisos de inversión por USD 55.000 millones en dos años de gestión."
        updated="Marzo 2025"
      >
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <MundoContent
        leaders={leaders}
        timeline={timeline}
        megaStats={megaStats}
        tradeAgreements={tradeAgreements}
      />

      <PageCTA
        headline="La reinserción internacional es condición necesaria para el desarrollo de largo plazo."
        cta="Ver los proyectos estratégicos"
        href="/futuro"
      />
    </>
  );
}
