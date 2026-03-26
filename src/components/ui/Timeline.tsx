import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";

interface TimelineItem {
  date: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

/**
 * Vertical timeline — date on the left, content on the right,
 * rendered inside Cards.
 */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, i) => (
        <Card key={i} className="flex gap-4 p-4">
          <div className="shrink-0 min-w-[5rem] pt-0.5 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-gold">
            {item.date}
          </div>
          <div>
            <h4 className="m-0 mb-1 font-display text-[length:var(--text-sm)] leading-[1.3] text-text-primary">
              {item.title}
            </h4>
            <p className="m-0 text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
              {item.desc}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
