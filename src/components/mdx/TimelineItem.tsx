import { cn } from "@/lib/cn";
import { EvidenceChip } from "@/components/ui/EvidenceChip";
import type { ComponentProps } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  instrument?: string;
  children?: React.ReactNode;
  status?: ComponentProps<typeof EvidenceChip>["status"];
  className?: string;
}

/**
 * Single timeline entry — date, title, optional instrument/status, and body.
 * Use in MDX: <TimelineItem date="Dic. 2023" title="DNU 70/23" status="vigente">...</TimelineItem>
 */
export function TimelineItem({
  date,
  title,
  instrument,
  children,
  status,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative border-l-2 border-rule py-4 pl-6",
        className
      )}
    >
      {/* Dot */}
      <div className="absolute left-[-5px] top-5 h-2 w-2 rounded-full bg-rule" />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-[0.6875rem] text-text-tertiary">{date}</span>
        {instrument && (
          <span className="text-[0.6875rem] italic text-text-tertiary">
            {instrument}
          </span>
        )}
        {status && <EvidenceChip status={status} />}
      </div>

      <h4 className="m-0 mt-1 text-[length:var(--text-sm)] font-medium text-text-primary">
        {title}
      </h4>

      {children && (
        <div className="mt-2 text-[length:var(--text-xs)] leading-relaxed text-text-secondary">
          {children}
        </div>
      )}
    </div>
  );
}
