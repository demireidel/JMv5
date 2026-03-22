import Link from "next/link";
import { navLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "oklch(0.12 0.01 270)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          maxWidth: "var(--max-width)",
          paddingTop: "var(--space-3xl)",
          paddingBottom: "var(--space-xl)",
        }}
      >
        {/* Top row: wordmark + nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Wordmark + tagline */}
          <div>
            <Link href="/" className="no-underline">
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-xl)",
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                JAVIER{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-xl)",
                  letterSpacing: "0.1em",
                  color: "var(--gold)",
                }}
              >
                MILEI
              </span>
            </Link>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-sm)",
                color: "var(--text-2)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              La libertad avanza
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Navegación del pie de página">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="no-underline transition-colors"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-2)",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div
          className="mb-8"
          style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}
        >
          <p className="m-0">
            Presidencia de la Nación Argentina — Casa Rosada
          </p>
          <p className="m-0">Balcarce 50, Buenos Aires, Argentina</p>
        </div>

        {/* Argentine flag */}
        <div
          className="flex gap-0 rounded overflow-hidden mb-8"
          style={{ height: "4px", maxWidth: "8rem" }}
          aria-label="Bandera Argentina"
        >
          <div className="flex-1" style={{ background: "var(--celeste)" }} />
          <div className="flex-1 bg-white" />
          <div className="flex-1" style={{ background: "var(--celeste)" }} />
        </div>

        {/* Bottom */}
        <p
          className="m-0"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "var(--text-sm)",
            color: "var(--text-3)",
          }}
        >
          Viva la libertad, carajo.
        </p>
      </div>
    </footer>
  );
}
