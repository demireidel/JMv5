import { cn } from "@/lib/cn";

interface WordmarkProps {
  className?: string;
  light?: boolean;
}

export function Wordmark({ className, light = false }: WordmarkProps) {
  return (
    <span
      className={cn("font-accent text-lg font-bold uppercase tracking-wider", className)}
    >
      <span className={`transition-colors duration-300 ${light ? "text-white/90" : "text-text-primary"}`}>Javier</span>{" "}
      <span className="text-gold transition-colors duration-300">Milei</span>
    </span>
  );
}
