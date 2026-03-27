import Link from "next/link";
import { Container } from "@/components/ui/Container";

/* ─────────────────────────────────────────────────────────
   Types
   ───────────────────────────────────────────────────────── */

interface PillarStat {
  value: string;
  label: string;
  from: string;
  a11yLabel: string;
}

interface CompactStat {
  value: string;
  label: string;
}

/* ─────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────── */

const pillars: PillarStat[] = [
  {
    value: "2,4%",
    label: "Inflación mensual",
    from: "Era 25,5%",
    a11yLabel: "Inflación mensual: de 25,5% a 2,4%",
  },
  {
    value: "Superávit",
    label: "Balance fiscal",
    from: "Era –15% PBI",
    a11yLabel: "Balance fiscal: de –15% del PBI a superávit",
  },
  {
    value: "<500",
    label: "Riesgo país",
    from: "Era 2.800 pts",
    a11yLabel: "Riesgo país: de 2.800 a menos de 500 puntos",
  },
  {
    value: "+4,4%",
    label: "Crecimiento PIB",
    from: "Era –1,6%",
    a11yLabel: "Crecimiento del PIB: de –1,6% a +4,4%",
  },
];

const compacts: CompactStat[] = [
  { value: "14.500+", label: "desregulaciones" },
  { value: "USD 55B", label: "inversiones comprometidas" },
  { value: "44.305", label: "créditos hipotecarios" },
];

/* ─────────────────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────────────────── */

function GoldDivider() {
  return (
    <div aria-hidden="true" className="reveal mx-auto my-12 h-px w-full max-w-[48rem] bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:my-16" />
  );
}

function PillarCard({ stat, isLast }: { stat: PillarStat; isLast: boolean }) {
  return (
    <div
      className={`flex flex-col items-center px-4 py-6 text-center sm:py-0 ${isLast ? "" : "border-b border-white/[0.06] sm:border-b-0 sm:border-r"}`}
      role="group"
      aria-label={stat.a11yLabel}
    >
      <p className="gold-shimmer font-accent text-4xl font-bold leading-none tracking-tight lg:text-5xl">
        {stat.value}
      </p>
      <p className="mt-2 font-accent text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
        {stat.label}
      </p>
      <p className="mt-1 text-[length:var(--text-xs)] text-white/30">
        {stat.from}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   LogrosSection — editorial layout, pure server component
   ───────────────────────────────────────────────────────── */

export function LogrosSection() {
  return (
    <section
      id="logros"
      aria-labelledby="logros-heading"
      className="section-light-text relative overflow-hidden bg-midnight py-[var(--spacing-section)]"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.55 0.17 75 / 0.04) 0%, transparent 70%)",
        }}
      />

      <Container>
        {/* ── Header ────────────────────────────────────── */}
        <div className="reveal-left mb-20 max-w-[42rem]">
          <p className="badge-text mb-3 tracking-[0.25em]">
            II — Logros de Gestión
          </p>
          <h2
            id="logros-heading"
            className="font-display leading-[1.05] text-white"
            style={{ fontSize: "clamp(2rem, 1.2rem + 3.5vw, 4rem)" }}
          >
            La transformación{" "}
            <em className="gold-shimmer not-italic">en números</em>
          </h2>
          <p className="prose-body mt-5 max-w-[36rem]">
            Prometimos transformar Argentina. Acá están los datos
            que lo prueban.
          </p>
        </div>

        {/* ── Hero stat: Pobreza ────────────────────────── */}
        <div
          className="reveal mb-4 text-center"
          role="group"
          aria-label="Pobreza: 10 millones de argentinos salieron de la pobreza"
        >
          <p
            className="font-accent font-bold leading-[0.85] tracking-tighter text-white"
            style={{ fontSize: "clamp(5rem, 3rem + 10vw, 12rem)" }}
            aria-hidden="true"
          >
            10<span className="text-gold">M</span><span className="text-gold/60">+</span>
          </p>
          <p
            className="mx-auto mt-4 max-w-[28rem] font-display text-xl leading-snug text-white/70 sm:text-2xl"
          >
            de argentinos salieron de la pobreza
          </p>

          {/* Before → After pills */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5">
            <span className="font-accent text-sm text-white/35 line-through decoration-white/15">
              57%
            </span>
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              role="img"
              aria-label="se redujo a"
              className="text-gold"
            >
              <path
                d="M1 6h16M13 1l4 5-4 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="gold-shimmer font-accent text-sm font-bold">
              27%
            </span>
            <span className="text-[length:var(--text-xs)] text-white/30">
              Mínimo en 7 años
            </span>
          </div>
        </div>

        <GoldDivider />

        {/* ── Four pillars ──────────────────────────────── */}
        <div
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Indicadores económicos clave"
        >
          {pillars.map((stat, i) => (
            <div key={stat.label} role="listitem">
              <PillarCard stat={stat} isLast={i === pillars.length - 1} />
            </div>
          ))}
        </div>

        <GoldDivider />

        {/* ── Compact metrics band ──────────────────────── */}
        <div className="reveal mx-auto flex max-w-[48rem] flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 lg:gap-16">
          {compacts.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-accent text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Pull quote ────────────────────────────────── */}
        <div className="reveal mt-16 sm:mt-20">
          <blockquote className="mx-auto max-w-[42rem] text-center">
            <p
              className="font-display leading-snug text-white/50"
              style={{ fontSize: "clamp(1.1rem, 0.9rem + 1vw, 1.6rem)" }}
            >
              &ldquo;La Argentina que dejamos atrás no vuelve más.
              Cada número de esta página es un argentino que come mejor,
              un emprendedor que abrió su negocio, una familia que
              accedió a su primera casa.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── CTA ──────────────────────────────────────── */}
        <div className="reveal mt-12 flex justify-center sm:mt-16">
          <Link
            href="/logros"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-3.5 font-accent text-sm uppercase tracking-[0.15em] text-gold no-underline transition-all duration-[var(--duration-normal)] hover:border-gold hover:bg-gold hover:text-midnight"
          >
            Ver los 19 logros en detalle
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
