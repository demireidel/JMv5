import { Card } from "@/components/ui/Card";
import type { DataPoint } from "@/data/vision";

interface DataStripGridProps {
  items: DataPoint[];
}

export function DataStripGrid({ items }: DataStripGridProps) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((d) => (
        <Card key={d.num} className="p-4 text-center">
          <span className="font-accent text-[length:var(--text-2xl)] font-bold leading-none text-gold">{d.num}</span>
          <span className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-secondary mt-1 block">{d.label}</span>
        </Card>
      ))}
    </div>
  );
}
