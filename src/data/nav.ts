// ── Nav Data ─────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
  sublabel: string;
}

export const navLinks: NavLink[] = [
  { href: "/vision",   label: "Visión",    sublabel: "Principios de gobierno" },
  { href: "/logros",   label: "Logros",    sublabel: "Resultados de gestión" },
  { href: "/reformas", label: "Reformas",  sublabel: "Transformaciones estructurales" },
  { href: "/futuro",   label: "Futuro",    sublabel: "Proyectos estratégicos" },
  { href: "/mundo",    label: "Mundo",     sublabel: "Relaciones exteriores" },
  { href: "/archivo",  label: "Archivo",   sublabel: "Producción intelectual" },
];
