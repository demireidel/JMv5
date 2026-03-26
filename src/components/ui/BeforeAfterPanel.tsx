interface BeforeAfterPanelProps {
  type: "before" | "after";
  label?: string;
  value?: string;
  children?: React.ReactNode;
}

export function BeforeAfterPanel({
  type,
  label,
  value,
  children,
}: BeforeAfterPanelProps) {
  const panelClass = type === "before" ? "panel-before" : "panel-after";
  const valueColor = type === "before" ? "text-danger" : "text-success";
  const badgeColor = type === "before" ? "!text-danger" : "!text-success";
  const defaultLabel = type === "before" ? "Antes" : "Ahora";

  return (
    <div className={panelClass}>
      <span
        className={`mb-1 flex items-center gap-1 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] ${badgeColor}`}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
          aria-hidden="true"
          className={type === "before" ? "rotate-180" : ""}
        >
          <path d="M5 1l4 8H1z" />
        </svg>
        {label ?? defaultLabel}
      </span>
      {value && (
        <span className={`font-accent text-[length:var(--text-2xl)] font-bold leading-none ${valueColor}`}>
          {value}
        </span>
      )}
      {children && (
        <div className="mt-1 text-[length:var(--text-sm)] leading-[1.7] text-text-secondary">
          {children}
        </div>
      )}
    </div>
  );
}
