// ── Mundo Data ───────────────────────────────────────────

export interface Leader {
  flag: string;
  name: string;
  role: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
}

export interface MegaStat {
  value: string;
  label: string;
  detail: string;
  animated?: {
    target: number;
    prefix?: string;
    suffix?: string;
    formatDot?: boolean;
  };
}

export interface TradeAgreement {
  tag: string;
  title: string;
  description: string;
  keyFacts: { text: string; color: "gold" | "blue" | "green" }[];
  image: string;
  imageAlt: string;
  badge: string;
  reverse?: boolean;
}

export interface CooperationItem {
  icon: string;
  title: string;
  desc: string;
}

// ── Data ────────────────────────────────────────────────

export const leaders: Leader[] = [
  { flag: "🇺🇸", name: "Donald Trump", role: "Presidente de EE.UU." },
  { flag: "🇮🇹", name: "Giorgia Meloni", role: "Primera Ministra de Italia" },
  { flag: "🇫🇷", name: "Emmanuel Macron", role: "Presidente de Francia" },
  { flag: "🇮🇱", name: "Benjamin Netanyahu", role: "PM de Israel" },
  { flag: "🇮🇳", name: "Narendra Modi", role: "PM de India" },
  { flag: "🇺🇸", name: "Elon Musk", role: "Tesla, X, SpaceX" },
  { flag: "🇺🇸", name: "Sam Altman", role: "CEO de OpenAI" },
  { flag: "🇺🇸", name: "Tim Cook", role: "CEO de Apple" },
  { flag: "🇺🇸", name: "Mark Zuckerberg", role: "CEO de Meta" },
  { flag: "🇸🇻", name: "Nayib Bukele", role: "Presidente de El Salvador" },
  { flag: "🌐", name: "K. Georgieva", role: "Directora del FMI" },
  { flag: "🇺🇸", name: "Jamie Dimon", role: "CEO de JP Morgan" },
  { flag: "🇺🇸", name: "Sundar Pichai", role: "CEO de Google" },
  { flag: "🇺🇸", name: "Scott Bessent", role: "Secretario del Tesoro" },
  { flag: "🇨🇱", name: "José A. Kast", role: "Presidente de Chile" },
  { flag: "🇭🇺", name: "Viktor Orbán", role: "PM de Hungría" },
];

export const timeline: TimelineEvent[] = [
  {
    date: "ENE 2024",
    title: "Davos I — El rugido del león",
    desc: "Milei irrumpe en el Foro Económico Mundial con un discurso que sacude al establishment global. Por primera vez en décadas, un presidente argentino se planta ante la élite de Davos para defender el libre mercado sin ambigüedades. Argentina vuelve al radar del mundo.",
  },
  {
    date: "ABR 2025",
    title: "Acuerdo FMI — USD 20.000M",
    desc: "Programa de 48 meses bajo el Extended Fund Facility con un primer desembolso descomunal de USD 12.000M — el más grande que el Fondo haya girado en una sola transferencia. Habilita un nuevo régimen cambiario de banda de flotación que entierra el crawling peg.",
  },
  {
    date: "JUN 2025",
    title: "Bilateral con Netanyahu — Jerusalén",
    desc: "Milei se reúne con el Primer Ministro israelí en Jerusalén, consolidando la alianza estratégica. Acuerdos de cooperación en ciberseguridad, agtech e inteligencia. Israel reconoce a Argentina como socio prioritario en América Latina.",
  },
  {
    date: "JUN 2025",
    title: "Bilateral con Macron — Niza",
    desc: "En la Riviera francesa, Milei y Macron sellan un entendimiento que parecía imposible: el presidente liberal y el dirigista europeo encuentran terreno común en defensa, energía nuclear y el impulso final al acuerdo Mercosur-UE.",
  },
  {
    date: "JUL 2025",
    title: "Modi en Buenos Aires — Hito histórico",
    desc: "Primera bilateral India-Argentina desde 1968 — más de medio siglo de silencio diplomático roto de un solo golpe. Modi aterriza en Buenos Aires para abrir un canal directo con la tercera economía de Sudamérica. Acuerdos en tecnología, defensa y cadenas de suministro de minerales críticos.",
  },
  {
    date: "JUL 2025",
    title: "1ª Revisión FMI aprobada",
    desc: "El Fondo aprueba sin objeciones la primera revisión del programa, desbloqueando USD 2.000M adicionales. Argentina sorprende a los mercados retornando a los mercados internacionales de capital antes de lo previsto, colocando deuda con spreads en mínimos desde 2018.",
  },
  {
    date: "SEP 2025",
    title: "TLC Mercosur — EFTA firmado en Río",
    desc: "Ocho años de negociación culminan en Río de Janeiro. Una zona de libre comercio de 300 millones de personas con el bloque de mayor renta per cápita del planeta: Suiza, Noruega, Islandia y Liechtenstein. 100% arancel cero para productos industriales.",
  },
  {
    date: "SEP 2025",
    title: "Netanyahu en Nueva York",
    desc: "Al margen de la Asamblea General de la ONU, segundo encuentro bilateral del año entre Milei y Netanyahu. Refuerzo de la cooperación en defensa e inteligencia, y coordinación conjunta en foros multilaterales.",
  },
  {
    date: "OCT 2025",
    title: "Casa Blanca — Bilateral con Trump",
    desc: "Milei cruza el umbral de la Casa Blanca como el primer líder sudamericano recibido por Trump. Almuerzo de trabajo con delegaciones completas en el Salón Oval. La imagen del apretón de manos recorre el mundo: Argentina tiene un aliado en Washington.",
  },
  {
    date: "OCT 2025",
    title: "Swap USD 20.000M con el Tesoro de EE.UU.",
    desc: "En un gesto sin precedentes, el secretario Bessent activa el Exchange Stabilization Fund (ESF) por primera vez en la historia para un país latinoamericano. Swap de divisas por USD 20.000M, compra directa de bonos soberanos argentinos y crédito stand-by del Tesoro.",
  },
  {
    date: "NOV 2025",
    title: "Framework Comercial con EE.UU.",
    desc: "La Casa Blanca anuncia el marco del acuerdo bilateral comercial. Comienzan las negociaciones técnicas capítulo por capítulo. El mundo toma nota: un TLC entre EE.UU. y Sudamérica deja de ser fantasía.",
  },
  {
    date: "DIC 2025",
    title: "Kast en Casa Rosada",
    desc: "El presidente chileno José Antonio Kast visita Buenos Aires para una bilateral en Casa Rosada. Agenda conjunta de libre comercio, seguridad fronteriza y cooperación energética. Un eje liberal se consolida en el Cono Sur.",
  },
  {
    date: "ENE 2026",
    title: "Riesgo país debajo de 500 puntos",
    desc: "El 27 de enero de 2026, el riesgo país argentino perfora el piso de los 500 puntos por primera vez desde junio de 2018. Una señal que los mercados internacionales leen con claridad: Argentina dejó de ser sinónimo de default.",
  },
  {
    date: "ENE 2026",
    title: "Firma Mercosur — UE en Asunción",
    desc: "Después de 25 años de idas y vueltas, el acuerdo más ambicioso entre bloques se materializa en la Cumbre de Asunción. Acuerdo de Asociación + Acuerdo Comercial Interino. Un mercado integrado de 700 millones de personas que representa el 30% del PBI global.",
  },
  {
    date: "ENE 2026",
    title: "Davos III + Board of Peace",
    desc: "Tercer Special Address consecutivo ante el WEF — ningún líder latinoamericano lo había logrado. Firma del Board of Peace junto a Trump: 19 países comprometidos con la resolución pacífica de conflictos. Argentina queda eximida de la cuota de USD 1.000M.",
  },
  {
    date: "FEB 2026",
    title: "Firma del TLC Argentina — EE.UU.",
    desc: "Lo que ningún gobierno logró en 200 años de historia. Primer tratado de libre comercio entre EE.UU. y un país sudamericano. 1.675 productos argentinos sin arancel. Cuota de 100.000 toneladas de carne bovina. Acuerdo de minerales críticos. Un antes y un después.",
  },
  {
    date: "MAR 2026",
    title: "Shield of the Americas — Miami",
    desc: "Coalición de 17 naciones del hemisferio occidental, co-liderada por Argentina y EE.UU., firma en Miami el pacto de seguridad hemisférica más ambicioso en décadas. Objetivo: erradicar el narcoterrorismo y blindar la región contra la interferencia de potencias extracontinentales.",
  },
  {
    date: "MAR 2026",
    title: "Argentina Week — Nueva York",
    desc: "Más de 300 líderes empresariales de todo el mundo convergen en Manhattan. Jamie Dimon inaugura el evento desde la flamante torre de JP Morgan en 270 Park Avenue. USD 16.150M en inversiones confirmadas. Gobernadores argentinos salen a vender sus provincias al capital global.",
  },
];

export const megaStats: MegaStat[] = [
  {
    value: "1er",
    label: "País sudamericano",
    detail: "en firmar un TLC bilateral con EE.UU. en la historia — lo que ningún gobierno logró en 200 años de vida independiente",
  },
  {
    value: "1.675",
    label: "Productos argentinos",
    detail: "con aranceles eliminados hacia EE.UU. + 221 posiciones norteamericanas con arancel cero recíproco",
    animated: { target: 1675, formatDot: true },
  },
  {
    value: "$1.013M",
    label: "Exportaciones recuperadas",
    detail: "en acceso directo al mercado de consumo más grande del mundo — USD 28T de PBI",
    animated: { target: 1013, prefix: "$", suffix: "M" },
  },
  {
    value: "100K tn",
    label: "Carne bovina",
    detail: "cuota libre de arancel — la mayor concesión cárnica bilateral de EE.UU. en un tratado comercial",
    animated: { target: 100, suffix: "K tn" },
  },
  {
    value: "92%",
    label: "Aranceles eliminados",
    detail: "por la UE para exportaciones del Mercosur — mercado de 700M de personas, 30% del PBI mundial",
    animated: { target: 92, suffix: "%" },
  },
  {
    value: "<500",
    label: "Riesgo país",
    detail: "por debajo de 500 puntos el 27 de enero de 2026 — el nivel más bajo desde junio de 2018, una señal inequívoca de confianza global",
    animated: { target: 500, prefix: "<" },
  },
  {
    value: "$11.29B",
    label: "Superávit comercial 2025",
    detail: "USD 11.290M de superávit en la balanza comercial de 2025 — Argentina vuelve a exportar más de lo que importa, revirtiendo años de déficit",
    animated: { target: 11.29, prefix: "$", suffix: "B" },
  },
];

export const tradeAgreements: TradeAgreement[] = [
  {
    tag: "Acuerdo Bilateral Histórico",
    title: "Acuerdo de Comercio e Inversión Recíproco con Estados Unidos",
    description:
      "Lo que parecía un espejismo diplomático se convirtió en realidad el día que Milei y Trump estamparon sus firmas sobre el primer tratado de libre comercio entre Estados Unidos y un país sudamericano en la historia. El acuerdo elimina aranceles de forma recíproca para 1.675 productos argentinos y 221 posiciones norteamericanas, abriendo de par en par las puertas del mercado de consumo más grande del planeta. La joya de la corona: una cuota preferencial de 100.000 toneladas de carne bovina sin arancel — la mayor concesión cárnica que Washington haya otorgado jamás en un tratado bilateral. Se incluye un cronograma de revisión conjunta de aranceles al acero (sección 232) y aluminio con desgravación progresiva. El financiamiento fluye a través del EXIM Bank y la DFC (Development Finance Corporation) para inversiones en minerales críticos, energía, infraestructura y data centers. Capítulos de propiedad intelectual, facilitación aduanera digital y mecanismo inversor-Estado completan un acuerdo que reescribe las reglas del juego hemisférico.",
    keyFacts: [
      { text: "USD 1.013M en exportaciones", color: "gold" },
      { text: "1.675 + 221 posiciones sin arancel", color: "blue" },
      { text: "100K tn carne bovina cuota libre", color: "green" },
      { text: "EXIM Bank + DFC financiamiento", color: "gold" },
    ],
    image: "/images/banco/trump-casablanca-oval.jpg",
    imageAlt: "Milei con Trump en el Salón Oval — Acuerdo bilateral Argentina-EE.UU.",
    badge: "🇺🇸🇦🇷 Firmado Feb 2026",
  },
  {
    tag: "Acuerdo de Asociación",
    title: "Mercosur — Unión Europea: un mercado de 700 millones de personas",
    description:
      "Veinticinco años. Un cuarto de siglo de rondas, borradores, bloqueos y falsas alarmas. Y fue un presidente argentino que se define como anarcocapitalista quien finalmente lo cerró. En la Cumbre de Asunción de enero 2026, el acuerdo más ambicioso entre bloques regionales del planeta dejó de ser borrador para convertirse en tratado. La UE eliminará aranceles para el 92% de las exportaciones del Mercosur. Las proyecciones oficiales son contundentes: las exportaciones argentinas a la UE crecerían un 76% en 5 años (de USD 8.641M a USD 15.208M) y un 122% en 10 años (hasta USD 19.165M). Tres pilares sostienen la arquitectura: comercial (desgravación arancelaria, compras públicas, servicios e inversiones), político (diálogo institucionalizado, derechos humanos, no proliferación) y de cooperación (ciencia, tecnología, medio ambiente, educación). Un mercado integrado que representa el 30% del PBI mundial.",
    keyFacts: [
      { text: "700 millones de consumidores", color: "gold" },
      { text: "De USD 8.641M a 19.165M", color: "blue" },
      { text: "+76% en 5 años / +122% en 10", color: "green" },
    ],
    image: "/images/banco/mercosur-ue-escenario.jpg",
    imageAlt: "Ceremonia de firma Mercosur-UE en Asunción, enero 2026",
    badge: "🇪🇺 Firmado Ene 2026",
    reverse: true,
  },
  {
    tag: "Tratado de Libre Comercio",
    title: "Mercosur — EFTA: Suiza, Noruega, Islandia y Liechtenstein",
    description:
      "Río de Janeiro, septiembre de 2025. Tras ocho años de negociación técnica, el Mercosur sella un tratado con el bloque de mayor renta per cápita del mundo. EFTA eliminará el 100% de los aranceles a productos industriales y pesqueros del Mercosur — sin excepciones, sin asteriscos. Preferencias inmediatas para carne bovina, café, etanol, vino, miel y cítricos. Capítulos completos de servicios, inversiones, compras públicas, propiedad intelectual y desarrollo sostenible. Nace una zona de libre comercio de 300 millones de personas con un PBI combinado de USD 4,3 billones. Argentina fue sede de las tres últimas rondas de negociación en Buenos Aires, forzando un ritmo que convirtió a este en el acuerdo más rápido jamás cerrado por el Mercosur.",
    keyFacts: [
      { text: "300M de consumidores", color: "gold" },
      { text: "100% arancel cero industrial", color: "blue" },
      { text: "USD 4,3B PBI combinado", color: "green" },
    ],
    image: "/images/banco/mercosur-efta.jpg",
    imageAlt: "Milei con Santiago Peña — Cumbre Mercosur-EFTA",
    badge: "🇨🇭🇳🇴 Firmado Sep 2025",
  },
];

export const financialSupport = {
  tag: "Respaldo Financiero Sin Precedentes",
  title: "Acuerdo FMI por USD 20.000M + Swap del Tesoro de EE.UU. por USD 20.000M",
  description:
    "Abril de 2025: el FMI aprueba un programa de 48 meses por USD 20.000M bajo el Extended Fund Facility, con un primer desembolso de USD 12.000M — el giro individual más grande en la historia del Fondo. El programa habilita un nuevo régimen cambiario de banda de flotación que sepulta definitivamente el crawling peg. Pero la verdadera bomba llega desde Washington: el Tesoro de EE.UU. activa por primera vez en la historia el Exchange Stabilization Fund (ESF) para un país latinoamericano — un mecanismo reservado hasta entonces para aliados del G7. Swap de divisas por USD 20.000M, compra directa de bonos soberanos argentinos y crédito stand-by del Tesoro. En julio 2025, la primera revisión se aprueba sin objeciones y desbloquea USD 2.000M adicionales. Argentina retorna a los mercados internacionales de capital con spreads en mínimos históricos desde 2018, mientras el riesgo país se desploma por debajo de los 500 puntos por primera vez en casi ocho años. Un respaldo total de USD 40.000M que selló la credibilidad del programa económico ante el mundo.",
  keyFacts: [
    { text: "USD 40.000M en respaldo total", color: "gold" as const },
    { text: "1ª vez ESF para Latinoamérica", color: "blue" as const },
    { text: "Riesgo país < 500 (mín. desde 2018)", color: "green" as const },
  ],
  image: "/images/banco/davos-2024-fmi.jpg",
  imageAlt: "Milei con directivos del FMI en Davos — Respaldo financiero internacional",
};

export const cooperationGrid: CooperationItem[] = [
  {
    icon: "🛡️",
    title: "Shield of the Americas",
    desc: "Coalición hemisférica de 17 naciones contra el narcoterrorismo y la interferencia de potencias extracontinentales. Co-liderada por Argentina y EE.UU., firmada en Miami en marzo 2026. El pacto de seguridad más ambicioso del hemisferio occidental en décadas.",
  },
  {
    icon: "🕊️",
    title: "Board of Peace",
    desc: "Firmado en Davos junto a Trump. 19 países comprometidos con la resolución pacífica de conflictos internacionales. Argentina fue eximida de la cuota de participación de USD 1.000M — un reconocimiento explícito a su liderazgo moral en el foro.",
  },
  {
    icon: "⚡",
    title: "RIGI — Grandes Inversiones",
    desc: "Régimen de incentivos para inversiones estratégicas que ya atrae capital global en energía, minería, tecnología e infraestructura. Vaca Muerta, GNL, litio y data centers de IA: Argentina se posiciona como la potencia de recursos naturales del siglo XXI.",
  },
  {
    icon: "🤖",
    title: "Hub de Inteligencia Artificial",
    desc: "Reuniones bilaterales con los 7 CEOs más influyentes de Silicon Valley — Apple, Meta, Tesla, OpenAI, Google, Amazon, a16z. Stargate Argentina: primer proyecto de infraestructura IA fuera de EE.UU. con inversión comprometida de hasta USD 25.000M.",
  },
  {
    icon: "⚛️",
    title: "Plan Nuclear + SMR",
    desc: "Reactivación de Nucleoeléctrica Argentina y plan de reactores modulares pequeños (SMR) para alimentar data centers y generar energía limpia. Cooperación directa con EE.UU. en tecnología nuclear de última generación.",
  },
  {
    icon: "🔗",
    title: "Minerales Críticos",
    desc: "Acuerdo bilateral con EE.UU. sobre litio, tierras raras y cadenas de suministro. Reciclaje de baterías, seguridad de inversiones y acceso preferencial al mercado norteamericano para minerales estratégicos de la transición energética.",
  },
  {
    icon: "🌍",
    title: "Seguridad Económica",
    desc: "Alineamiento con EE.UU. en controles de exportación, seguridad de inversiones y protección frente a prácticas no mercantiles de terceros estados. Argentina abandona la ambigüedad y elige su lugar en el tablero geopolítico global.",
  },
];

// ── Section metadata ────────────────────────────────────

export const mundoHero = {
  imgSrc: "/images/banco/miami-cumbre-trump-lideres.jpg",
  imgAlt: "Argentina en el mundo",
  subtitle: "Inserción Internacional",
  titleLine1: "ARGENTINA",
  titleLine2: "EN EL MUNDO",
} as const;

export const acuerdosHeader = {
  sectionTitle: "ACUERDOS COMERCIALES",
  sectionIntro: "En dos años, Argentina firmó tres acuerdos de libre comercio históricos que abren mercados para más de mil millones de consumidores — y reescribió las reglas del comercio hemisférico.",
} as const;

export const cooperacionHeader = {
  sectionTitle: "COOPERACIÓN Y FINANCIAMIENTO",
  sectionIntro: "Argentina aseguró USD 40.000M en respaldo financiero, lideró una coalición de seguridad de 17 naciones, y se posicionó como el destino de inversión en energía e inteligencia artificial del hemisferio sur.",
} as const;
