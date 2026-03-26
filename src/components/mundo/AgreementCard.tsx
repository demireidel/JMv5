import { Card } from "@/components/ui/Card";
import type { TradeAgreement } from "@/data/mundo";

interface AgreementCardProps {
  ta: Pick<TradeAgreement, "tag" | "title" | "description" | "keyFacts">;
}

const factStyles: Record<"gold" | "blue" | "green", { className: string; icon: string }> = {
  gold:  { className: "text-gold border-gold/30",    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },       // star
  blue:  { className: "text-celeste border-celeste/30", icon: "M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" },                              // pin
  green: { className: "text-success border-success/30", icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" },                                                // check
};

export function AgreementCard({ ta }: AgreementCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <span className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-gold mb-2 block">{ta.tag}</span>
        <h3 className="font-display text-[length:var(--text-xl)] leading-[1.1] text-text-primary m-0 mb-3">{ta.title}</h3>
        <p className="text-[length:var(--text-sm)] leading-[1.7] text-text-secondary m-0 mb-4">{ta.description}</p>
        <div className="flex flex-wrap gap-2">
          {ta.keyFacts.map((f, i) => {
            const style = factStyles[f.color];
            return (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 rounded-full border bg-surface-2 px-3 py-1 text-[length:var(--text-xs)] ${style.className}`}
              >
                <svg
                  className="h-3 w-3 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={style.icon} />
                </svg>
                {f.text}
              </span>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
