"use client";

import { Divider } from "@/components/ui/Divider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionArticleProps {
  id: string;
  last?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function SectionArticle({
  id,
  last = false,
  className,
  children,
}: SectionArticleProps) {
  return (
    <article id={id} className={className ?? "mb-20"}>
      <ScrollReveal variant="fade-up" duration={500}>
        {children}
      </ScrollReveal>
      {!last && <Divider animated className="mt-16" />}
    </article>
  );
}
