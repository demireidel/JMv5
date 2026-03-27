// ── Homepage Editorial Data ──────────────────────────────────
// Structured for an institutional presidential front page.
// Every claim includes source, date, and evidentiary status.

export interface ProofMetric {
  value: string;
  label: string;
  source: string;
  date: string;
}

export interface InheritanceItem {
  value: string;
  label: string;
  detail: string;
  source: string;
}

export interface ReformEntry {
  num: string;
  title: string;
  instrument: string;
  date: string;
  result: string;
  status: "vigente" | "en-tramite";
}

export interface ResultCard {
  value: string;
  label: string;
  before: string;
  after: string;
  source: string;
  methodology?: string;
  href: string;
}

export interface LeaderMeeting {
  flag: string;
  name: string;
  role: string;
  context: string;
  date: string;
}

export interface FutureBet {
  title: string;
  stat: string;
  statLabel: string;
  desc: string;
  status: "anuncio" | "proyeccion" | "vigente";
  href: string;
}

// ── 2. Proof Bar ─────────────────────────────────────────────

export const proofMetrics: ProofMetric[] = [
  { value: "57 % → 27 %", label: "Pobreza", source: "INDEC, EPH", date: "I sem. 2025" },
  { value: "17.000 % → 26 %", label: "Inflación interanual", source: "INDEC, IPC", date: "Feb. 2025" },
  { value: "14.500+", label: "Desregulaciones", source: "Boletín Oficial", date: "Mar. 2025" },
  { value: "1.er superávit", label: "financiero en 16 años", source: "Min. de Economía", date: "Ejercicio 2024" },
];

// ── 3. Inheritance ───────────────────────────────────────────

export const inheritanceIntro = {
  kicker: "La herencia recibida",
  title: "Situación al 10 de diciembre de 2023",
  subtitle: "Argentina atravesaba la peor combinación de desequilibrios de su historia contemporánea: un desajuste monetario comparable al del Rodrigazo, reservas del Banco Central en peores condiciones que en la víspera de la hiperinflación de 1989, e indicadores sociales más graves que los de la crisis de 2001.",
} as const;

export const inheritanceItems: InheritanceItem[] = [
  { value: "57 %", label: "Pobreza", detail: "La cifra más alta desde la crisis de 2001. Siete de cada diez menores de 14 años vivían bajo la línea de pobreza.", source: "INDEC, EPH S2 2023" },
  { value: "17.000 %", label: "Inflación mayorista anualizada", detail: "El nivel de precios mayoristas se duplicaba cada 50 días.", source: "INDEC, IPIM dic. 2023" },
  { value: "15 % del PBI", label: "Déficit consolidado", detail: "Equivalente a 13 bases monetarias emitidas en un solo año.", source: "Min. de Economía" },
  { value: "−USD 13.000 M", label: "Reservas netas del BCRA", detail: "El Banco Central operaba con patrimonio neto negativo.", source: "BCRA, balance dic. 2023" },
  { value: "9.000", label: "Piquetes anuales", detail: "Promedio de 25 cortes de calles y rutas por día.", source: "Min. de Seguridad" },
  { value: "200 %+", label: "Brecha cambiaria", detail: "Restricciones cambiarias, controles de capitales y distorsión de precios relativos.", source: "Ámbito Financiero, dic. 2023" },
];

// ── 4. Reforms ───────────────────────────────────────────────

export const reformsIntro = {
  kicker: "Las reformas",
  title: "Doce transformaciones estructurales",
  subtitle: "En dos años se aprobaron más reformas de fondo que en las cuatro décadas anteriores. Sin controles de precios, sin confiscación de depósitos y sin congelamiento de tarifas.",
} as const;

export const reformEntries: ReformEntry[] = [
  { num: "01", title: "Equilibrio fiscal", instrument: "Ley de Bases", date: "Dic. 2023", result: "Primer superávit financiero del Tesoro Nacional en 16 años", status: "vigente" },
  { num: "02", title: "Saneamiento monetario", instrument: "Resolución BCRA", date: "Ene. 2024", result: "Eliminación del déficit cuasifiscal del Banco Central", status: "vigente" },
  { num: "03", title: "Unificación cambiaria", instrument: "Decreto 28/2025", date: "Abr. 2025", result: "Levantamiento del cepo: tipo de cambio unificado y libre", status: "vigente" },
  { num: "04", title: "Desregulación general", instrument: "DNU 70/23", date: "Dic. 2023", result: "Derogación de más de 300 regulaciones", status: "vigente" },
  { num: "05", title: "Ley Bases y RIGI", instrument: "Ley 27.742", date: "Jul. 2024", result: "Régimen de incentivos para grandes inversiones, marco de privatizaciones y desregulación laboral", status: "vigente" },
  { num: "06", title: "Programa de desregulación", instrument: "Decretos varios", date: "2024–2025", result: "14.500 normas eliminadas o simplificadas", status: "vigente" },
  { num: "07", title: "Reforma laboral", instrument: "Ley 27.742, Tít. V", date: "Jul. 2024", result: "Primera reforma del régimen laboral en 30 años: período de prueba extendido y fondo de cese", status: "vigente" },
  { num: "08", title: "Apertura comercial", instrument: "Res. SCI", date: "Feb. 2024", result: "Eliminación del sistema de licencias de importación (SIRA/SIMI)", status: "vigente" },
  { num: "09", title: "Reforma tributaria", instrument: "Decreto 38/2024", date: "Ene. 2024", result: "Eliminación del impuesto PAÍS y reducción de retenciones a las exportaciones", status: "vigente" },
  { num: "10", title: "Seguridad y orden público", instrument: "Protocolo MSeg", date: "Dic. 2023", result: "Protocolo de actuación ante cortes de vía pública e interceptación de aeronaves de narcotráfico", status: "vigente" },
  { num: "11", title: "Reforma previsional", instrument: "Decreto 274/2024", date: "Mar. 2024", result: "Nueva fórmula de movilidad para garantizar la sostenibilidad del sistema jubilatorio", status: "vigente" },
  { num: "12", title: "Reforma electoral", instrument: "Proyecto de Ley BUP", date: "2025", result: "Implementación de la Boleta Única de Papel en elecciones nacionales", status: "en-tramite" },
];

// ── 5. Results ───────────────────────────────────────────────

export const resultsIntro = {
  kicker: "Resultados de gestión",
  title: "La evidencia disponible",
  subtitle: "Principales indicadores con datos oficiales de antes y después. Cada cifra remite a la fuente y la metodología correspondientes.",
} as const;

export const resultCards: ResultCard[] = [
  { value: "57 % → 27 %", label: "Pobreza", before: "Cifra más alta desde la crisis de 2001", after: "Descenso sostenido durante cuatro trimestres consecutivos", source: "INDEC, EPH", methodology: "Encuesta Permanente de Hogares, línea de pobreza por adulto equivalente", href: "/logros" },
  { value: "Hiperinflación evitada", label: "Estabilización monetaria", before: "Inflación mayorista interanual de 17.000 %", after: "Estabilización sin plan Bonex, sin confiscación de depósitos y sin default", source: "INDEC / BCRA", methodology: "IPC e IPIM base dic. 2023", href: "/logros" },
  { value: "9.000 → 0", label: "Cortes de vías públicas", before: "Promedio de 25 cortes diarios de calles y rutas", after: "Aplicación del protocolo de seguridad en manifestaciones", source: "Min. de Seguridad", href: "/logros" },
  { value: "2,4 %", label: "Inflación mensual", before: "Variación diaria de precios del 1 % en diciembre de 2023", after: "Proceso de desinflación más rápido de la región", source: "INDEC, IPC", methodology: "Índice de Precios al Consumidor, nivel general", href: "/logros" },
];

// ── 6. Research Preview ─────────────────────────────────────

export const researchPreview = {
  kicker: "Archivo presidencial",
  title: "Producción intelectual",
  subtitle: "Libros, artículos académicos y discursos del presidente Milei. El registro completo de una trayectoria que combina formación económica, debate público y ejercicio del poder.",
  catalog: [
    { count: "9", category: "Libros publicados", span: "1996–2023" },
    { count: "7", category: "Artículos académicos", span: "Economía y políticas públicas" },
    { count: "11", category: "Discursos institucionales", span: "Davos, ONU, CPAC, G7" },
  ],
  href: "/archivo",
} as const;

// ── 7. World ─────────────────────────────────────────────────

export const worldIntro = {
  kicker: "Relaciones exteriores",
  title: "Política exterior y acuerdos comerciales",
  subtitle: "Reuniones bilaterales con jefes de Estado, firma de acuerdos comerciales de alcance histórico y reposicionamiento estratégico de Argentina en el escenario internacional.",
} as const;

export const worldLeaders: LeaderMeeting[] = [
  { flag: "🇺🇸", name: "Donald Trump", role: "Presidente de los Estados Unidos", context: "Reunión bilateral en el Salón Oval", date: "Feb. 2025" },
  { flag: "🇮🇹", name: "Giorgia Meloni", role: "Primera Ministra de Italia", context: "Bilateral en Roma y Cumbre del G7", date: "Jun. 2024" },
  { flag: "🇫🇷", name: "Emmanuel Macron", role: "Presidente de Francia", context: "Reunión bilateral en el Palacio del Elíseo", date: "Jun. 2024" },
  { flag: "🇮🇱", name: "Benjamin Netanyahu", role: "Primer Ministro de Israel", context: "Reunión bilateral en Jerusalén", date: "Feb. 2024" },
  { flag: "🇮🇳", name: "Narendra Modi", role: "Primer Ministro de la India", context: "Reunión bilateral en Nueva Delhi", date: "Feb. 2025" },
  { flag: "🇬🇧", name: "Keir Starmer", role: "Primer Ministro del Reino Unido", context: "Reunión bilateral durante el Foro de Davos", date: "Ene. 2025" },
];

export const worldStats: ProofMetric[] = [
  { value: "3", label: "Tratados de libre comercio firmados", source: "Cancillería", date: "2024–2025" },
  { value: "20+", label: "Reuniones bilaterales con jefes de Estado", source: "Cancillería", date: "2024–2025" },
  { value: "USD 55.000 M", label: "Inversión comprometida", source: "Min. de Economía", date: "Mar. 2025" },
];

// ── 8. Future Bets ───────────────────────────────────────────

export const futureBets: FutureBet[] = [
  {
    title: "Centro regional de inteligencia artificial",
    stat: "7",
    statLabel: "directivos de tecnología reunidos",
    desc: "Posicionar a Argentina como sede de infraestructura de IA aprovechando la Patagonia, la disponibilidad de energía limpia y el clima favorable para centros de datos.",
    status: "anuncio",
    href: "/futuro",
  },
  {
    title: "Stargate Argentina",
    stat: "USD 20.000 M",
    statLabel: "inversión directa anunciada",
    desc: "Primer proyecto Stargate fuera de Estados Unidos: centro de datos de gran escala en la Patagonia bajo el régimen RIGI.",
    status: "anuncio",
    href: "/futuro",
  },
  {
    title: "Plan nuclear",
    stat: "4.°",
    statLabel: "reactor en fase de construcción",
    desc: "Construcción de Atucha III y desarrollo de reactores modulares pequeños (SMR) para posicionar a Argentina como proveedor nuclear regional.",
    status: "vigente",
    href: "/futuro",
  },
  {
    title: "Vaca Muerta",
    stat: "2.ª",
    statLabel: "reserva mundial de gas no convencional",
    desc: "Objetivo: superar el millón de barriles diarios en 2026 y alcanzar exportaciones energéticas por USD 30.000 M anuales antes de 2030.",
    status: "proyeccion",
    href: "/futuro",
  },
];

// ── 9. CTA Band ──────────────────────────────────────────────

export const ctaBand = {
  headline: "La Argentina que imaginaron los constituyentes de 1853 está más cerca que en cualquier momento de los últimos cien años.",
  cta: "Conocer la visión completa",
  href: "/vision",
} as const;
