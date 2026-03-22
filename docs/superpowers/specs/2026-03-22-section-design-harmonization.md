# Section Design Harmonization

**Date:** 2026-03-22
**Approach:** Option B — Semantic components + token standardization
**Reference page:** Visión (already the most consistent)

---

## Goal

Propagate the editorial feel of the Visión page to all other sections (Logros, Reformas, Futuro, Mundo, Archivo). Achieve visual coherence through standardized spacing tokens, semantic CSS classes, and four lightweight UI components.

---

## 1. CSS Token Standardization (`globals.css`)

### Spacing rules (enforced via classes, not tokens)

| Context | Class | Value |
|---------|-------|-------|
| Article bottom margin | `mb-20` | replaces mixed mb-12/mb-16 |
| Divider spacing (above and below) | `mb-16` | consistent everywhere |
| Grid gap (2–3 col) | `gap-5` | replaces gap-3/gap-4/gap-5 mix |
| Grid gap (4 col) | `gap-4` | for denser stat grids |
| Card default padding | `p-5` | replaces p-4/p-5/p-6 mix |
| ChapterHeader numeral→title | `mb-6` | was mb-2 (too tight) |
| ChapterHeader title→subtitle | `mb-10` | was mb-8 |

### New semantic CSS classes

```css
.section-kicker
  font-accent, --text-xs, uppercase, tracking-[0.15em], text-gold, mb-3

.card-label
  font-accent, --text-xs, uppercase, tracking-[0.05em], text-tertiary, mb-1

.card-heading
  font-display, --text-sm, text-primary, mb-2, leading-snug

.card-body
  --text-xs, leading-[1.6], text-secondary

.content-prose
  space-y-4, max-w-[44rem], (children: text-base, leading-relaxed, text-secondary)
```

These replace all `text-[length:var(--text-sm)] font-display text-text-primary` inline patterns currently scattered across 8+ components.

---

## 2. New UI Components

### `src/components/ui/Prose.tsx`

Extracted from `VisionChapters.tsx` (where it currently lives as a local component). Wraps prose paragraphs with consistent spacing and max-width.

```tsx
<div className="content-prose">{children}</div>
```

Used by: VisionChapters, LogrosContent (narrative blocks), ArchivoContent.

---

### `src/components/ui/SectionArticle.tsx`

Replaces the manual `<article id="..." className="mb-20">` + `<Divider>` pattern that every section component manages differently today.

```tsx
interface SectionArticleProps {
  id: string;
  last?: boolean;
  children: React.ReactNode;
}
```

- Renders `<article id={id} className="mb-20">`
- Appends `<Divider className="mt-16 mb-0">` unless `last` is true
- Removes the need for each component to manually handle divider placement and spacing

Used by: all 6 section components.

---

### `src/components/ui/ContentGrid.tsx`

Standardizes the 6+ ad-hoc grid layouts into one component with a `cols` prop.

```tsx
interface ContentGridProps {
  cols?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}
```

| `cols` | Output classes |
|--------|---------------|
| `2` (default) | `grid grid-cols-1 sm:grid-cols-2 gap-5` |
| `3` | `grid grid-cols-2 sm:grid-cols-3 gap-5` |
| `4` | `grid grid-cols-2 sm:grid-cols-4 gap-4` |

Used by: MundoContent (5 grids), FuturoContent (2 grids), LogrosContent, ReformasContent.

---

### `src/components/ui/SectionKicker.tsx`

Eyebrow text above a content block. Different from `page-eyebrow` (PageHeader) and `badge-text` (card labels).

```tsx
<p className="section-kicker">{children}</p>
```

Used by: FuturoContent (project type labels), MundoContent (section intros).

---

## 3. Component Migration Plan

### Order

1. `globals.css` — add semantic classes, fix ChapterHeader spacing
2. Create `ui/Prose.tsx`, `ui/SectionArticle.tsx`, `ui/ContentGrid.tsx`, `ui/SectionKicker.tsx`
3. `VisionChapters.tsx` — extract local Prose → use `ui/Prose`, wrap articles in SectionArticle
4. `MundoContent.tsx` — most inconsistent; replace all 5 grids with ContentGrid, inline types with card-label/card-heading/card-body
5. `FuturoContent.tsx` — replace kicker patterns with SectionKicker, grids with ContentGrid
6. `ArchivoContent.tsx` — replace inline typography with semantic classes
7. `LogrosContent.tsx` — minor: wrap articles in SectionArticle, fix spacing
8. `ReformasContent.tsx` — minor: same as Logros

### Per-component changes

| Component | Changes |
|-----------|---------|
| `VisionChapters.tsx` | Extract Prose, wrap articles in SectionArticle |
| `MundoContent.tsx` | ContentGrid (×5), card-label/card-heading/card-body (inline → classes) |
| `FuturoContent.tsx` | SectionKicker (×3), ContentGrid (×2), card-body inline → class |
| `ArchivoContent.tsx` | card-label/card-heading/card-body throughout, SectionArticle wrappers |
| `LogrosContent.tsx` | SectionArticle wrappers, gap-5 on grids |
| `ReformasContent.tsx` | SectionArticle wrappers, gap-5 on grids |
| `ChapterHeader.tsx` | Update mb-2 → mb-6 (numeral row), prose-body mb-8 → mb-10 |

---

## 4. Out of Scope

- `SidebarLayout`, `Card`, `Divider`, `BeforeAfterPanel`, `Pullquote` — no structural changes
- All `/src/data/` files — untouched
- Animations, ScrollReveal, parallax
- `Hero.tsx`, `NavBar.tsx`, `Footer.tsx`, `PageHeader.tsx`
- `StatsStrip`, `SectionPreviews`

---

## 5. Verification

1. `npm run build` — must pass with no errors
2. Visual check on all 6 section pages: consistent article spacing, uniform card padding, no cramped ChapterHeaders
3. Visión page must look identical to pre-change (it's the reference)
