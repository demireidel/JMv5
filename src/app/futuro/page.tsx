import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MetricRow } from "@/components/ui/MetricRow";
import { Pullquote } from "@/components/ui/Pullquote";
import { PageCTA } from "@/components/ui/PageCTA";
import {
  futuroHeader,
  siliconValley,
  galleryPhotos,
  stargate,
  nuclear,
  vacaMuerta,
  futuroClosing,
} from "@/data/futuro";
import { FuturoContent } from "@/components/futuro/FuturoContent";

export const metadata: Metadata = {
  title: "Proyectos estratégicos",
  description:
    "Iniciativas de desarrollo: inteligencia artificial, Stargate, energía nuclear y Vaca Muerta.",
};

const headerMetrics = [
  { value: "4", label: "Ejes estratégicos" },
  { value: "USD 20.000 M", label: "Stargate Argentina" },
  { value: "7", label: "Directivos tech reunidos" },
];

export default function FuturoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos estratégicos"
        title="Iniciativas en curso y proyecciones"
        subtitle="Cuatro ejes de desarrollo que posicionan a Argentina en la revolución tecnológica y energética global. Cada iniciativa indica su estado: vigente, anunciada o proyectada."
        updated="Marzo 2025"
      >
        <Pullquote className="mt-6">{futuroHeader.introQuote}</Pullquote>
        <MetricRow metrics={headerMetrics} />
      </PageHeader>

      <FuturoContent
        siliconValley={siliconValley}
        galleryPhotos={galleryPhotos}
        stargate={stargate}
        nuclear={nuclear}
        vacaMuerta={vacaMuerta}
        closing={futuroClosing}
      />

      <PageCTA
        headline="El desarrollo de largo plazo requiere un marco institucional estable y una visión de país."
        cta="Conocer los fundamentos"
        href="/vision"
      />
    </>
  );
}
