// ── Homepage Funnel Data ─────────────────────────────────────
// All content for the campaign conversion funnel homepage.
// Static strings — no hydration-dependent values above the fold.

export interface ProofMetric {
  value: string;
  label: string;
}

export interface InheritanceItem {
  value: string;
  label: string;
  detail: string;
}

export interface ReformStep {
  num: string;
  title: string;
  result: string;
}

export interface ResultCard {
  value: string;
  label: string;
  before: string;
  after: string;
  href: string;
}

export interface LeaderMeeting {
  flag: string;
  name: string;
  role: string;
}

export interface FutureBet {
  title: string;
  kicker: string;
  stat: string;
  statLabel: string;
  desc: string;
  href: string;
}

// ── 2. Proof Bar ─────────────────────────────────────────────

export const proofMetrics: ProofMetric[] = [
  { value: "57% → 27%", label: "Pobreza" },
  { value: "17.000% → 26%", label: "Inflación anualizada" },
  { value: "14.500+", label: "Desregulaciones" },
  { value: "1er superávit", label: "en 16 años" },
];

// ── 3. Inheritance ───────────────────────────────────────────

export const inheritanceIntro = {
  kicker: "La herencia",
  title: "Lo que recibimos el 10 de diciembre de 2023",
  subtitle: "La peor crisis de la historia combinaba tres catástrofes simultáneas: el desequilibrio monetario del Rodrigazo, la situación del Banco Central peor que antes de la hiper del 89, y los indicadores sociales peores que en 2001.",
} as const;

export const inheritanceItems: InheritanceItem[] = [
  { value: "57%", label: "Pobreza", detail: "Peor cifra desde 2001. 7 de cada 10 chicos eran pobres." },
  { value: "17.000%", label: "Inflación mayorista", detail: "Anualizada. El peso se destruía en tiempo real." },
  { value: "15% PBI", label: "Déficit consolidado", detail: "13 bases monetarias emitidas en un año." },
  { value: "-USD 13.000M", label: "Reservas netas", detail: "El Banco Central estaba en quiebra técnica." },
  { value: "9.000", label: "Piquetes por año", detail: "25 cortes de calle por día. Impunidad total." },
  { value: "200%+", label: "Brecha cambiaria", detail: "Cepo, controles y maquillaje estadístico." },
];

// ── 4. Reforms Timeline ─────────────────────────────────────

export const reformsIntro = {
  kicker: "Las reformas",
  title: "12 transformaciones estructurales",
  subtitle: "Más reformas en dos años que en las últimas cuatro décadas juntas. Sin controles de precios, sin confiscaciones, sin congelamientos — a puro mercado libre.",
} as const;

export const reformSteps: ReformStep[] = [
  { num: "01", title: "Equilibrio fiscal", result: "1er superávit financiero en 16 años" },
  { num: "02", title: "Desarme monetario", result: "Eliminación del déficit cuasifiscal del BCRA" },
  { num: "03", title: "Unificación cambiaria", result: "Fin del cepo — tipo de cambio libre" },
  { num: "04", title: "DNU 70/23", result: "300+ regulaciones eliminadas de un golpe" },
  { num: "05", title: "Ley Bases", result: "RIGI, privatizaciones, desregulación laboral" },
  { num: "06", title: "14.500 desregulaciones", result: "La economía más regulada → la más libre" },
  { num: "07", title: "Reforma laboral", result: "Primera en 30 años — período de prueba, fondo de cese" },
  { num: "08", title: "Reforma comercial", result: "Apertura importaciones, fin de SIRA/SIMI" },
  { num: "09", title: "Reforma tributaria", result: "Eliminación de impuesto PAÍS, baja de retenciones" },
  { num: "10", title: "Reforma penal", result: "Derribo de aviones narco, protocolo antipiquetes" },
  { num: "11", title: "Reforma previsional", result: "Sostenibilidad del sistema jubilatorio" },
  { num: "12", title: "Reforma electoral", result: "Boleta Única de Papel — transparencia total" },
];

// ── 5. Results ───────────────────────────────────────────────

export const resultsIntro = {
  kicker: "Los resultados",
  title: "La evidencia habla",
  subtitle: "19 logros con datos de antes y después. Sin relato — los números.",
} as const;

export const resultCards: ResultCard[] = [
  { value: "57% → 27%", label: "Pobreza", before: "La peor cifra desde 2001", after: "10M+ salieron de la pobreza", href: "/logros" },
  { value: "HIPER EVITADA", label: "Estabilización", before: "17.000% inflación mayorista", after: "Sin Bonex, sin confiscaciones", href: "/logros" },
  { value: "9.000 → 0", label: "Piquetes", before: "25 cortes de calle por día", after: "Protocolo Bullrich — las calles son de todos", href: "/logros" },
  { value: "2,4%", label: "Inflación mensual", before: "1% de inflación por día", after: "La mayor desinflación del planeta", href: "/logros" },
];

// ── 6. Research Preview ─────────────────────────────────────

export const researchPreview = {
  kicker: "El pensamiento",
  title: "Obra Intelectual",
  subtitle: "9 libros, 7 papers académicos, 11 discursos que redefinieron el debate global. La producción intelectual de un presidente-economista sin precedentes.",
  stats: [
    { value: "9", label: "Libros publicados" },
    { value: "7", label: "Papers académicos" },
    { value: "11", label: "Discursos históricos" },
  ],
  href: "/archivo",
} as const;

// ── 7. World ─────────────────────────────────────────────────

export const worldIntro = {
  kicker: "Argentina en el mundo",
  title: "De país paria a líder global",
  subtitle: "En dos años, Argentina pasó de estar aislada del mundo a firmar los acuerdos comerciales más ambiciosos de su historia.",
} as const;

export const worldLeaders: LeaderMeeting[] = [
  { flag: "🇺🇸", name: "Trump", role: "Presidente EE.UU." },
  { flag: "🇮🇹", name: "Meloni", role: "PM Italia" },
  { flag: "🇫🇷", name: "Macron", role: "Presidente Francia" },
  { flag: "🇮🇱", name: "Netanyahu", role: "PM Israel" },
  { flag: "🇮🇳", name: "Modi", role: "PM India" },
  { flag: "🇬🇧", name: "Starmer", role: "PM Reino Unido" },
];

export const worldStats: ProofMetric[] = [
  { value: "3", label: "TLCs firmados" },
  { value: "20+", label: "Bilaterales con líderes" },
  { value: "USD 55.000M", label: "Inversiones comprometidas" },
];

// ── 8. Future Bets ───────────────────────────────────────────

export const futureBets: FutureBet[] = [
  {
    title: "Silicon Valley",
    kicker: "Hub global de IA",
    stat: "7",
    statLabel: "CEOs tech reunidos",
    desc: "Argentina como centro mundial de inteligencia artificial — con Patagonia, energía limpia y clima frío.",
    href: "/futuro",
  },
  {
    title: "Stargate Argentina",
    kicker: "USD 20.000M en inversión",
    stat: "$20B",
    statLabel: "inversión directa",
    desc: "El mayor proyecto de infraestructura tecnológica de la historia argentina.",
    href: "/futuro",
  },
  {
    title: "Energía Nuclear",
    kicker: "Potencia nuclear civil",
    stat: "4°",
    statLabel: "reactor en construcción",
    desc: "Atucha III más SMRs. Argentina se posiciona como proveedor nuclear regional.",
    href: "/futuro",
  },
  {
    title: "Vaca Muerta",
    kicker: "El gigante despierta",
    stat: "2°",
    statLabel: "reserva de shale gas",
    desc: "De importar energía a exportar USD 30.000M anuales antes de 2030.",
    href: "/futuro",
  },
];

// ── 9. CTA Band ──────────────────────────────────────────────

export const ctaBand = {
  headline: "La Argentina que soñaron nuestros padres fundadores está más cerca que nunca.",
  cta: "Explorar la visión completa",
  href: "/vision",
} as const;
