import { Card } from "@/components/ui/Card";
import type { Thinker } from "@/data/vision";

interface ThinkerGridProps {
  items: Thinker[];
}

export function ThinkerGrid({ items }: ThinkerGridProps) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((t) => (
        <Card key={t.title} className="p-4">
          <span className="block font-accent text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.05em] text-text-tertiary mb-1">{t.era}</span>
          <h4 className="font-display text-[length:var(--text-sm)] leading-[1.3] text-text-primary">{t.title}</h4>
          <p className="text-[length:var(--text-xs)] leading-relaxed text-text-secondary leading-snug text-text-tertiary">{t.desc}</p>
        </Card>
      ))}
    </div>
  );
}
