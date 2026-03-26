import type { Paper } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ContentGrid } from "@/components/ui/ContentGrid";

export function PapersSection({ papers }: { papers: Paper[] }) {
  return (
    <SectionArticle id="papers">
      <ChapterHeader numeral="IV" title="Papers académicos" />
      <ContentGrid cols={2}>
        {papers.map((p, i) => (
          <Card key={i} className="p-4">
            <span className="block font-accent text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.05em] text-text-tertiary mb-1 !text-celeste">
              {p.topic}
            </span>
            <h4 className="font-display text-[length:var(--text-sm)] leading-[1.3] text-text-primary">
              {p.title}
            </h4>
            {p.coauthors && (
              <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
                Con {p.coauthors}
              </p>
            )}
            {p.venue && (
              <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
                {p.venue}
              </p>
            )}
            {p.desc && (
              <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary mt-1">
                {p.desc}
              </p>
            )}
          </Card>
        ))}
      </ContentGrid>
    </SectionArticle>
  );
}
