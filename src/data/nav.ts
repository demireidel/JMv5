// ── Nav Data ─────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
  sublabel: string;
}

export const navLinks: NavLink[] = [
  { href: "/vision",   label: "Visión",    sublabel: "Ideas & valores" },
  { href: "/logros",   label: "Logros",    sublabel: "Gestión de gobierno" },
  { href: "/reformas", label: "Reformas",  sublabel: "La transformación" },
  { href: "/futuro",   label: "Futuro",    sublabel: "El proyecto país" },
  { href: "/mundo",    label: "Mundo",     sublabel: "Argentina global" },
  { href: "/archivo",  label: "Archivo",   sublabel: "Multimedia & prensa" },
];
