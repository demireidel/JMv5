import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { InheritanceSection } from "@/components/home/InheritanceSection";
import { ReformsTimeline } from "@/components/home/ReformsTimeline";
import { ResultsSection } from "@/components/home/ResultsSection";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { WorldSection } from "@/components/home/WorldSection";
import { FutureBetsSection } from "@/components/home/FutureBetsSection";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      {/* 1. Hero — single client component above the fold */}
      <Hero />

      {/* 2. Proof bar — static metrics, server rendered */}
      <ProofBar />

      {/* 3. What Milei inherited */}
      <InheritanceSection />

      {/* 4. Key reforms timeline */}
      <ReformsTimeline />

      {/* 5. Results with before/after */}
      <ResultsSection />

      {/* 6. Research / archive preview */}
      <ResearchPreview />

      {/* 7. Argentina in the world */}
      <WorldSection />

      {/* 8. Future bets */}
      <FutureBetsSection />

      {/* 9. Final CTA */}
      <CTABand />
    </>
  );
}
