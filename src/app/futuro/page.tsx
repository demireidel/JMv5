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
  title: "Futuro",
  description:
    "Proyectos estratégicos: Silicon Valley, Stargate AI, energía nuclear y Vaca Muerta.",
};

const headerMetrics = [
  { value: "4", label: "Pilares estratégicos" },
  { value: "$20B", label: "Stargate Argentina" },
  { value: "7", label: "CEOs tech reunidos" },
];

export default function FuturoPage() {
  return (
    <>
      <PageHeader
        eyebrow={futuroHeader.sectionTitle}
        title="El Futuro de Argentina"
      >
        <Pullquote className="mt-6">{futuroHeader.introQuote}</Pullquote>
        <p className="mt-4 max-w-[44rem] text-[length:var(--text-sm)] leading-[1.7] text-text-secondary">
          {futuroHeader.introText}
        </p>
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
        headline="El futuro no se espera. Se construye."
        cta="Ver la visión completa"
        href="/vision"
      />
    </>
  );
}
