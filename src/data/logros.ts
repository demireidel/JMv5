// ── Logros Data ──────────────────────────────────────────

export interface PobrezaCounter {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  sub: string;
}

export interface PobrezaPill {
  val: string;
  lbl: string;
}

export interface PobrezaFlowCard {
  tag: string;
  big: string;
  desc: string;
}

export interface PobrezaData {
  badge: string;
  topbarNum: string;
  kicker: string;
  headline: string;
  headlineEm: string;
  counters: PobrezaCounter[];
  narrative: string[];
  flowBefore: PobrezaFlowCard;
  flowAfter: PobrezaFlowCard;
  pills: PobrezaPill[];
  quote: string;
  quoteAttr: string;
}

export const pobrezaData: PobrezaData = {
  badge: "01 — POBREZA",
  topbarNum: "EL LOGRO MÁS IMPORTANTE",
  kicker: "De la peor crisis social desde 2001 al mayor descenso de pobreza en la historia argentina",
  headline: "Más de ",
  headlineEm: "10 millones",
  counters: [
    { target: 57, suffix: "%", label: "Pobreza heredada", sub: "Q1 2024 — la peor desde la crisis de 2001" },
    { target: 27, suffix: "%", label: "Pobreza actual", sub: "Q3 2025 — el nivel más bajo en 7 años" },
    { target: 10, suffix: "M+", label: "Salieron de la pobreza", sub: "En menos de dos años — sin precedente histórico" },
    { target: 5.3, suffix: "M", decimals: 1, label: "Salieron de la indigencia", sub: "Del 20,3 % al 4,6 % — caída de 77 %" },
  ],
  narrative: [
    "En el primer trimestre de 2024, el INDEC reveló la magnitud de la catástrofe heredada: la pobreza alcanzó el **57 %** — la peor cifra desde la crisis terminal de 2001. Estaba camuflada con controles de precios, tarifas congeladas y maquillaje estadístico. Siete de cada diez chicos eran pobres. Casi 20 millones de personas vivían bajo la línea de pobreza, con una indigencia del 20,3 %. El gobierno de Alberto Fernández y Cristina Kirchner dejó una bomba social sin precedentes.",
    "La plata de la ayuda social no llegaba a quienes la necesitaban. Organizaciones como la UTEP y Barrios de Pie operaban como intermediarias del Estado: se quedaban con hasta el 20 % de los recursos, administraban la miseria como un negocio y usaban a los más vulnerables como rehenes para movilizaciones y presión política. Era un sistema diseñado para perpetuar la pobreza, no para combatirla.",
    "La ministra de Capital Humano, Sandra Pettovello, desmanteló el aparato de intermediarios y eliminó las transferencias discrecionales. La plata dejó de pasar por punteros y empezó a llegar **directo al bolsillo** de cada beneficiario. La AUH aumentó un **492,9 %**. Se incorporaron **600.000 chicos** que estaban fuera del sistema. La prestación Alimentar creció 137,5 %. Las becas Primera Infancia subieron más de 500 % y Primeros Mil Días más de 1.100 %. Para el tercer trimestre de 2025, la pobreza cayó al **26,9 %** — el valor más bajo desde 2018 y la mayor reducción de pobreza jamás registrada en la Argentina.",
  ],
  flowBefore: {
    tag: "HERENCIA — peor cifra desde 2001",
    big: "57 %",
    desc: "Casi 20 M de personas bajo la línea de pobreza. Indigencia: 20,3 %. 7 de cada 10 chicos eran pobres. Ayuda social secuestrada por intermediarios.",
  },
  flowAfter: {
    tag: "Q3 2025 — récord histórico de reducción",
    big: "26,9 %",
    desc: "Mínimo en 7 años. 10 M+ salieron de la pobreza, 5,3 M de la indigencia. Transferencias directas. AUH +493 %.",
  },
  pills: [
    { val: "+493%", lbl: "AUH" },
    { val: "600K", lbl: "Chicos incorporados" },
    { val: "+137%", lbl: "Alimentar" },
    { val: "+500%", lbl: "Becas Primera Infancia" },
    { val: "+1.100%", lbl: "Primeros Mil Días" },
  ],
  quote: "«Robar está mal, pero robarle el pan de la boca a los más vulnerables, haciéndolos esclavos para amasar poder, excede a cualquier adjetivo que se pueda encontrar en el diccionario.»",
  quoteAttr: "— Milei, Congreso 2026",
};

export interface BeforeAfter {
  label: string;
  val: string;
  desc: string;
}

export interface Logro {
  num: string;
  badge: string;
  title: string;
  paragraphs: string[];
  before: BeforeAfter;
  after: BeforeAfter;
  callout: string;
  gradient: string;
  imgBefore: string;
  imgAfter: string;
  altBefore: string;
  altAfter: string;
  reverse?: boolean;
}

export const logros: Logro[] = [
  {
    num: "02",
    badge: "02 — ESTABILIZACIÓN",
    title: "Se evitó la hiperinflación: se desactivó la bomba más grande de la historia",
    paragraphs: [
      "En agosto de 2023, Sergio Massa quedó tercero en las PASO y lanzó el «Plan Platita»: inyectó 1,3 % del PBI en bonos, devolución de IVA y beneficios impositivos — todo financiado con emisión pura del Banco Central. En un solo año emitió trece bases monetarias. Para diciembre de 2023, la inflación mayorista viajaba al 17.000 % anualizado. El déficit consolidado llegaba al 15 % del PBI. Las reservas netas eran negativas en USD 13.000 M. La brecha cambiaria superaba el 200 %.",
      "La herencia que recibimos el 10 de diciembre de 2023 combinaba las tres peores crisis de la historia argentina en una sola: el desequilibrio monetario duplicaba al del Rodrigazo de junio de 1975, el Banco Central estaba en peor situación que antes de la hiperinflación de Alfonsín en 1989, y los indicadores sociales superaban en gravedad a los del colapso de 2001. Ningún país del mundo había enfrentado jamás estas tres crisis simultáneamente sin caer en hiperinflación.",
      "El ministro de Economía Luis «Toto» Caputo lo resolvió de forma opuesta a cualquier antecedente histórico: sin expropiaciones, sin Plan Bonex, sin controles de precios, sin confiscar depósitos — todo a libre mercado. En seis meses se eliminó el déficit cuasifiscal del Banco Central. La hiper se evitó. Fue la primera vez en la historia argentina que una crisis de esta magnitud se resolvió sin destruir los ahorros de la clase media.",
    ],
    before: { label: "Herencia dic. 2023 — la peor de la historia", val: "17.000%", desc: "Inflación mayorista anualizada. 13 bases monetarias emitidas en un año. Déficit consolidado 15 % PBI. Reservas negativas USD 13.000 M." },
    after: { label: "Resultado — sin precedente mundial", val: "HIPER EVITADA", desc: "Cuasifiscal eliminado en 6 meses. Sin Bonex, sin confiscación, sin controles — a puro mercado libre." },
    callout: "Se desactivó la mayor bomba inflacionaria de la historia argentina sin tocar un solo depósito ni confiscar un solo peso.",
    gradient: "linear-gradient(135deg, #b71c1c, #d32f2f)",
    imgBefore: "/images/logros/02-antes.png",
    imgAfter: "/images/logros/02-despues.png",
    altBefore: "Pesos argentinos quemándose, hiperinflación",
    altAfter: "Bosques de Palermo, familias disfrutando",
  },
  {
    num: "03",
    badge: "03 — ORDEN",
    title: "No más piquetes: la calle es de todos los argentinos",
    paragraphs: [
      "En 2023, la Argentina registró más de 9.000 piquetes — un promedio de 25 cortes de calle por día. Organizaciones sociales como la UTEP, el Polo Obrero y Barrios de Pie recibían financiamiento estatal y cortaban rutas con total impunidad. Millones de argentinos no podían ir a trabajar, llevar a sus hijos al colegio ni llegar a un hospital. Los piquetes se financiaban con plata de la ayuda social — dinero que debía llegar a los más necesitados terminaba pagando el aparato de presión callejera de dirigentes como Juan Grabois y Eduardo Belliboni.",
      "La ministra de Seguridad Patricia Bullrich implementó el Protocolo Antipiquetes desde el primer día de gobierno. Se eliminaron las transferencias discrecionales a intermediarios. La plata va directo a quien la necesita, sin punteros. Las calles se liberaron por primera vez en más de 20 años. La 9 de Julio, la Panamericana, los accesos a Buenos Aires: todos circulan con normalidad.",
    ],
    before: { label: "2023 — 25 cortes por día", val: "9.000", desc: "Piquetes por año. Financiados con plata de la ayuda social. Impunidad total para los organizadores." },
    after: { label: "2024-2025", val: "0", desc: "Cero cortes. Protocolo Bullrich. Transferencias directas. Las calles son de todos por primera vez en 20 años." },
    callout: "De 25 piquetes por día a cero. Las calles argentinas volvieron a ser de la gente que trabaja, no de los que extorsionan.",
    gradient: "linear-gradient(135deg, #4a148c, #7b1fa2)",
    imgBefore: "/images/logros/03-antes.png",
    imgAfter: "/images/logros/03-despues.png",
    altBefore: "Piqueteros cortando la 9 de Julio",
    altAfter: "Obelisco y 9 de Julio fluyendo de noche",
    reverse: true,
  },
  {
    num: "04",
    badge: "04 — DESINFLACIÓN",
    title: "La inflación se pulverizó: del 17.000 % anualizado a menos de 30 %",
    paragraphs: [
      "En la primera semana de diciembre de 2023, la inflación corría al 1 % diario — un ritmo que destruía el poder adquisitivo en tiempo real. La inflación mayorista de noviembre fue del 54 % mensual, equivalente a 17.000 % anualizado. La minorista marcó 25,5 % en diciembre. Los argentinos cobraban el sueldo y corrían a comprar antes de que los precios volvieran a subir. Los supermercados remarcaban dos y tres veces por semana.",
      "El equipo económico de Toto Caputo logró la desinflación más rápida de la historia argentina sin recurrir a ninguna de las herramientas habituales: sin fijar el tipo de cambio, sin congelar precios, sin tablitas, sin pactos sociales. Solo con disciplina fiscal y monetaria. Para febrero de 2026, la inflación mensual bajó a 2,4 %, y la interanual se ubica en torno al 26 %. Una caída de más de 99 % desde el pico heredado — la mayor desinflación del mundo en curso.",
    ],
    before: { label: "Dic 2023 — al borde de la hiper", val: "17.000%", desc: "Inflación mayorista anualizada. 25,5 % mensual minorista. 1 % diario. Remarcaciones múltiples por semana." },
    after: { label: "Feb 2026", val: "2,4%", desc: "Mensual. Interanual ~26 %. Sin controles de precios, sin tipo de cambio fijo — desinflación récord mundial." },
    callout: "De 1 % de inflación por día a 2,4 % por mes. La mayor desinflación del planeta, lograda sin controles ni congelamientos.",
    gradient: "linear-gradient(135deg, #e65100, #ff8f00)",
    imgBefore: "/images/logros/04-antes.png",
    imgAfter: "/images/logros/04-despues.png",
    altBefore: "Supermercado con límites de compra, escasez",
    altAfter: "Familia comprando con normalidad, góndolas llenas",
  },
  {
    num: "05",
    badge: "05 — FISCAL",
    title: "Déficit cero: primer presupuesto equilibrado en más de un siglo",
    paragraphs: [
      "La Argentina llevaba más de 100 años sin presentar un presupuesto equilibrado y libre de default. El gobierno de Alberto Fernández dejó un déficit fiscal consolidado de 15 puntos del PBI: cinco del Tesoro Nacional y diez escondidos debajo de la alfombra del Banco Central en forma de Leliqs y pases. Había 22 ministerios, 106 secretarías y un aparato burocrático diseñado para alimentar a la política, no para servir al ciudadano.",
      "En el primer mes de gobierno se aplicó el mayor ajuste fiscal de la historia: se bajó de 22 a 7 ministerios, se eliminaron 106 secretarías, se cortaron las transferencias discrecionales y se frenó la emisión monetaria. El resultado: superávit fiscal desde enero de 2024 — sostenido durante más de dos años consecutivos. Se bajaron impuestos por 2,5 puntos del PBI, incluyendo la eliminación del Impuesto PAÍS y la reducción de retenciones. Se aprobó el primer presupuesto equilibrado, libre de default, en 123 años.",
    ],
    before: { label: "Herencia — 100+ años sin equilibrio", val: "–15% PBI", desc: "Déficit consolidado. 22 ministerios, 106 secretarías. Emisión descontrolada. Brecha cambiaria 200 %+." },
    after: { label: "2024-2026", val: "SUPERÁVIT", desc: "Sostenido 24 meses consecutivos. 7 ministerios. Gasto –30 %. Impuestos –2,5 pp PBI. Primer presupuesto equilibrado en 123 años." },
    callout: "Primer superávit fiscal sostenido en 123 años. Primer gobierno de la historia que baja impuestos y gasto al mismo tiempo.",
    gradient: "linear-gradient(135deg, #1a237e, #283593)",
    imgBefore: "/images/logros/05-antes.png",
    imgAfter: "/images/logros/05-despues.png",
    altBefore: "Máquina imprimiendo billetes, emisión descontrolada",
    altAfter: "Plaza de Mayo y Casa Rosada, orden fiscal",
    reverse: true,
  },
  {
    num: "06",
    badge: "06 — CREDIBILIDAD",
    title: "El riesgo país se desplomó: Argentina volvió al mapa financiero mundial",
    paragraphs: [
      "En diciembre de 2023, el riesgo país superaba los 2.000 puntos básicos. La Argentina estaba en default técnico, sin acceso a los mercados internacionales de crédito. Ningún inversor serio consideraba poner un dólar en el país. Los bonos argentinos cotizaban a precio de remate — a niveles de países en guerra.",
      "La credibilidad fiscal y la disciplina monetaria hicieron lo que décadas de promesas no lograron. El riesgo país se desplomó a 652 puntos tras las legislativas de octubre 2025 — una caída de más de 2.500 puntos básicos. Se cerró un acuerdo histórico con el FMI por USD 20.000 M. Las empresas anunciaron inversiones por más de USD 55.000 M. Argentina volvió a ser destino de inversión extranjera directa por primera vez en más de una década.",
    ],
    before: { label: "Dic 2023 — país paria", val: "2.000+ pts", desc: "Sin acceso a mercados. Bonos a precio de default. Ningún inversor miraba a Argentina." },
    after: { label: "Post legislativas oct. 2025", val: "652 pts", desc: "–2.500 pb. Acuerdo FMI USD 20.000 M. Inversiones anunciadas USD 55.000 M. Argentina volvió al mundo." },
    callout: "De país paria financiero a destino de inversión: USD 55.000 M en proyectos anunciados y el riesgo país más bajo en 6 años.",
    gradient: "linear-gradient(135deg, #0d47a1, #1565c0)",
    imgBefore: "/images/logros/06-antes.png",
    imgAfter: "/images/logros/06-despues.png",
    altBefore: "Crisis 2001, auto quemándose frente al Obelisco",
    altAfter: "Grúas de Puerto Madero, Argentina abierta al mundo",
  },
  {
    num: "07",
    badge: "07 — SEGURIDAD",
    title: "Tasa de homicidios más baja en 25 años — y la más baja de toda Sudamérica",
    paragraphs: [
      "Rosario se había convertido en una de las ciudades más violentas de América Latina. En 2022 registró 261 homicidios — más que muchas capitales centroamericanas. Las bandas narco del clan de «Los Monos» y otros grupos operaban con impunidad, extorsionando comercios, controlando barrios enteros y ejecutando a plena luz del día. A nivel nacional, la tasa de homicidios era de 4,4 por cada 100.000 habitantes.",
      "La ministra de Seguridad Patricia Bullrich desplegó fuerzas federales en Rosario y lanzó operativos conjuntos con la Justicia Federal contra las bandas narco. Los homicidios bajaron 17 % a nivel nacional. En Rosario la caída fue del 65 % — la mayor reducción de violencia en la historia de la ciudad. Argentina registró 3,8 homicidios por 100.000 habitantes en 2024: la tasa más baja en 25 años y la más baja de toda Sudamérica, por debajo de Chile y Uruguay por primera vez en la historia.",
    ],
    before: { label: "2022-2023 — Rosario tomada por el narco", val: "4,4", desc: "Homicidios/100K. Rosario: 261 asesinatos. Bandas narco con impunidad total. Fronteras sin control." },
    after: { label: "2024 — récord histórico", val: "3,8", desc: "Tasa más baja en 25 años y la más baja de Sudamérica. Rosario –65 %. Por debajo de Chile y Uruguay por primera vez." },
    callout: "Por primera vez en la historia, Argentina tiene menos homicidios per cápita que Chile y Uruguay. Rosario recuperó sus calles.",
    gradient: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    imgBefore: "/images/logros/07-antes.png",
    imgAfter: "/images/logros/07-despues.png",
    altBefore: "Operativo policial nocturno, inseguridad en Rosario",
    altAfter: "Monumento a la Bandera, Rosario en paz",
    reverse: true,
  },
  {
    num: "08",
    badge: "08 — DESREGULACIÓN",
    title: "14.500 desregulaciones: la motosierra de Sturzenegger liberó la economía",
    paragraphs: [
      "La Argentina tenía más de 67.000 regulaciones vigentes — un laberinto burocrático diseñado para proteger privilegios, no para servir al ciudadano. Detrás de cada regulación había un curro, un intermediario o un monopolio protegido. Aerolíneas Argentinas había costado USD 8.000 M al Estado desde su re-estatización en 2008 bajo Cristina Kirchner. La ley de alquileres de 2020 había destruido el mercado: la oferta cayó 50 % y los precios se dispararon. Abrir un negocio requería hasta 14 trámites y 45 días.",
      "El ministro de Desregulación Federico Sturzenegger eliminó más de 14.500 regulaciones mediante el DNU 70/2023 y la Ley Bases. Aerolíneas Argentinas pasó de pérdida crónica a generar ganancias por USD 100 M en 2025. La derogación de la ley de alquileres triplicó la oferta y bajó los precios un 30 % en términos reales. Se registró récord histórico de pasajeros aéreos. Los cielos abiertos permitieron la entrada de nuevas aerolíneas low-cost. Abrir un negocio pasó de 45 días a 24 horas.",
    ],
    before: { label: "Argentina asfixiada — 67.000 regulaciones", val: "ASFIXIA", desc: "Cada regulación, un privilegio. Aerolíneas: –USD 8.000 M. Ley de alquileres destruyó la oferta. 45 días para abrir un negocio." },
    after: { label: "Argentina desregulada — DNU 70 + Ley Bases", val: "14.500+", desc: "Regulaciones eliminadas. Aerolíneas: +USD 100 M. Alquileres –30 % real, oferta x3. Récord de pasajeros aéreos." },
    callout: "De 67.000 regulaciones a 14.500 menos. Aerolíneas pasó de perder USD 8.000 M a ganar USD 100 M. La motosierra funciona.",
    gradient: "linear-gradient(135deg, #bf360c, #e65100)",
    imgBefore: "/images/logros/08-antes.png",
    imgAfter: "/images/logros/08-despues.png",
    altBefore: "Cola interminable de trámites, burocracia asfixiante",
    altAfter: "Aerolíneas Argentinas despegando, cielos abiertos",
  },
];

export const logrosSectionHeader = {
  sectionTitle: "LOGROS DE GESTIÓN",
  sectionIntro: "El 10 de diciembre de 2023, Argentina estaba en crisis terminal. La inflación corría al 1 % diario, el Banco Central tenía reservas negativas de USD 13.000 M, el déficit consolidado era de 15 % del PBI, y los indicadores sociales eran peores que en 2001 — la peor herencia de la historia. Este es el antes y el después de cada una de las batallas que dimos.",
} as const;
