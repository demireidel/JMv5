interface WordmarkProps {
  className?: string;
  light?: boolean;
}

export function Wordmark({ className = "", light = false }: WordmarkProps) {
  return (
    <span
      className={`font-accent text-lg font-bold uppercase tracking-[0.15em] ${className}`}
    >
      <span className={`transition-colors duration-300 ${light ? "text-white/90" : "text-text-primary"}`}>Javier</span>{" "}
      <span className="text-gold transition-colors duration-300">Milei</span>
    </span>
  );
}
