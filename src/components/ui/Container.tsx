import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export function Container({
  children,
  wide = false,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        wide ? "max-w-[96rem]" : "max-w-[var(--width-content)]",
        className
      )}
    >
      {children}
    </div>
  );
}
