interface ChapterHeaderProps {
  numeral: string;
  title: string;
  subtitle?: string;
}

export function ChapterHeader({
  numeral,
  title,
  subtitle,
}: ChapterHeaderProps) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-baseline gap-4">
        <span className="font-accent text-[length:var(--text-2xl)] leading-none text-gold">
          {numeral}
        </span>
        <h3 className="m-0 font-display text-[length:var(--text-xl)] leading-[1.1] text-text-primary">
          {title}
        </h3>
      </div>
      {subtitle && (
        <p className="mb-10 text-[length:var(--text-sm)] leading-[1.7] text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
