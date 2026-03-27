import type { MDXComponents } from "mdx/types";

import { Pullquote } from "@/components/ui/Pullquote";
import { EvidenceChip } from "@/components/ui/EvidenceChip";
import { SourceNote } from "@/components/ui/SourceNote";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Figure } from "@/components/mdx/Figure";
import { Callout } from "@/components/mdx/Callout";
import { SourceList } from "@/components/mdx/SourceList";

/**
 * MDX component overrides.
 * These map markdown elements and custom components to our design system.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ── HTML element overrides ─────────────────────────────────
    h1: (props) => (
      <h1
        className="m-0 mb-6 font-display text-[length:var(--text-3xl)] leading-[1.05] text-text-primary"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="m-0 mb-4 mt-12 font-display text-[length:var(--text-2xl)] leading-[1.1] text-text-primary"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="m-0 mb-3 mt-8 font-display text-[length:var(--text-xl)] leading-[1.15] text-text-primary"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="m-0 mb-2 mt-6 font-display text-[length:var(--text-lg)] leading-[1.2] text-text-primary"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="m-0 mb-5 text-[length:var(--text-base)] leading-[1.75] text-text-secondary"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-8 border-l-2 border-rule pl-[var(--spacing-lg)] font-display text-[length:var(--text-lg)] italic leading-[1.55] text-text-secondary"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mb-5 ml-6 list-disc text-[length:var(--text-base)] leading-[1.75] text-text-secondary"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mb-5 ml-6 list-decimal text-[length:var(--text-base)] leading-[1.75] text-text-secondary"
        {...props}
      />
    ),
    li: (props) => <li className="mb-2" {...props} />,
    hr: () => <SectionDivider className="my-12" />,
    strong: (props) => (
      <strong className="font-semibold text-text-primary" {...props} />
    ),
    a: (props) => (
      <a
        className="text-text-primary underline decoration-rule underline-offset-2 transition-colors hover:text-gold hover:decoration-gold"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table
          className="w-full border-collapse text-[length:var(--text-sm)]"
          {...props}
        />
      </div>
    ),
    th: (props) => (
      <th
        className="border-b border-rule px-3 py-2 text-left text-[0.75rem] font-medium text-text-tertiary"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="border-b border-rule px-3 py-2 text-text-secondary"
        {...props}
      />
    ),

    // ── Custom components available in MDX ─────────────────────
    PullQuote: Pullquote,
    EvidenceChip,
    SourceNote,
    SectionDivider,
    Figure,
    Callout,
    SourceList,

    // Spread any additional components passed in
    ...components,
  };
}
