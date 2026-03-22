import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { PhotoStrip } from "@/components/PhotoStrip";
import { SectionPreviews } from "@/components/SectionPreviews";
import { stripPhotos1 } from "@/data/photos";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <PhotoStrip photos={stripPhotos1} />
      <SectionPreviews />
    </>
  );
}
