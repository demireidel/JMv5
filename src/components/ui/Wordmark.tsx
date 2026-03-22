interface WordmarkProps {
  className?: string;
  light?: boolean;
}

export function Wordmark({ className = "", light = false }: WordmarkProps) {
  return (
    <span
      className={`font-accent text-lg font-bold uppercase tracking-wider ${className}`}
    >
      <span className={light ? "text-white/90" : "text-text-primary"}>Javier</span>{" "}
      <span className="text-gold">Milei</span>
    </span>
  );
}
