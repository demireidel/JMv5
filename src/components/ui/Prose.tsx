import { cn } from "@/lib/cn";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={cn("content-prose", className)}>
      {children}
    </div>
  );
}
