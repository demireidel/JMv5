import Link from "next/link";
import { navLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-cream-dark">
      <div className="mx-auto max-w-[var(--width-content)] px-4 pb-[var(--spacing-xl)] pt-[var(--spacing-3xl)] sm:px-6 lg:px-8">
        {/* Institutional header */}
        <div className="reveal-fade-up mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="no-underline">
              <span className="font-display text-lg font-semibold leading-tight text-text-primary">
                Presidencia de la Nación
              </span>
            </Link>
            <p className="m-0 mt-1 text-[0.75rem] text-text-tertiary">
              República Argentina
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Navegación del pie de página">
            <ul className="m-0 grid list-none grid-cols-2 gap-x-10 gap-y-2 p-0 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--text-sm)] text-text-secondary no-underline transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div className="reveal-fade-up mb-6 text-[length:var(--text-xs)] text-text-tertiary">
          <p className="m-0">
            Presidencia de la Nación Argentina — Casa Rosada
          </p>
          <p className="m-0">Balcarce 50, Buenos Aires, Argentina</p>
        </div>

        {/* Argentine flag stripe */}
        <div
          className="mb-6 flex max-w-24 gap-0 overflow-hidden rounded-sm"
          style={{ height: "3px" }}
          aria-label="Bandera Argentina"
          role="img"
        >
          <div className="flex-1 bg-celeste" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-celeste" />
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.6875rem] text-text-tertiary">
          <span>Accesibilidad</span>
          <span>Aviso legal</span>
          <span>Mapa del sitio</span>
          <span>Contacto</span>
        </div>
      </div>
    </footer>
  );
}
