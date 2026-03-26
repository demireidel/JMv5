import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { PhotoStrip } from "@/components/home/PhotoStrip";
import { SectionPreviews } from "@/components/home/SectionPreviews";
import { stripPhotos1, stripPhotos2, stripPhotos3 } from "@/data/photos";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <StatsStrip />
      
      {/* Photo gallery section with refined spacing */}
      <div className="relative overflow-hidden bg-dark py-4">
        <PhotoStrip photos={stripPhotos1} />
      </div>
      
      <SectionPreviews />
      
      {/* Additional photo galleries with visual rhythm */}
      <div className="relative overflow-hidden bg-dark py-4">
        <PhotoStrip photos={stripPhotos2} direction="right" />
      </div>
      
      <div className="relative overflow-hidden bg-dark pb-8 pt-4">
        <PhotoStrip photos={stripPhotos3} />
      </div>
    </div>
  );
}
