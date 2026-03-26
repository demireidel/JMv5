import Image from "next/image";
import type { Etapa } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ContentGrid } from "@/components/ui/ContentGrid";

export function LibrosSection({ etapas }: { etapas: Etapa[] }) {
  return (
    <SectionArticle id="libros">
      <ChapterHeader numeral="III" title="Libros" />
      <div className="space-y-10">
        {etapas.map((etapa) => (
          <div key={etapa.label}>
            <h3 className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-gold mb-4 !text-gold">
              {etapa.label}{" "}
              <span className="text-text-tertiary">({etapa.desc})</span>
            </h3>
            <ContentGrid cols={2}>
              {etapa.books.map((book) => (
                <Card
                  key={book.title}
                  accent={book.highlight ? "gold" : "none"}
                  className="flex gap-4 p-4"
                >
                  {book.cover && (
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={64}
                      height={96}
                      className="shrink-0 rounded-md object-cover"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
                      {book.year}
                    </p>
                    <h4 className="font-display text-[length:var(--text-sm)] leading-[1.3] text-text-primary mt-1">
                      {book.title}
                    </h4>
                    {book.publisher && (
                      <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary mt-1">
                        {book.publisher}
                      </p>
                    )}
                    {book.desc && (
                      <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary mt-1">
                        {book.desc}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </ContentGrid>
          </div>
        ))}
      </div>
    </SectionArticle>
  );
}
