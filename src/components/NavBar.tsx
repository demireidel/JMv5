"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          hamburgerRef.current?.focus();
          return;
        }
        if (e.key === "Tab") {
          const container = menuNavRef.current;
          const focusable = container
            ? Array.from(
                container.querySelectorAll<HTMLElement>(
                  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
              )
            : [];
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[var(--height-nav)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] ${
          scrolled
            ? "border-b border-rule bg-nav-bg shadow-sm backdrop-blur-[16px] backdrop-saturate-[1.3]"
            : isHome
              ? "border-b border-white/8 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[4px]"
              : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-full max-w-[var(--width-content)] items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          {/* Institutional wordmark */}
          <Link
            href="/"
            className="flex flex-col no-underline"
            aria-label="Inicio — Presidencia de la Nación"
          >
            <span
              className={`font-display text-[0.9375rem] font-semibold leading-tight tracking-[0.01em] transition-colors duration-300 ${
                isHome && !scrolled ? "text-white/95" : "text-text-primary"
              }`}
            >
              Presidencia de la Nación
            </span>
            <span
              className={`text-[0.625rem] leading-tight tracking-[0.06em] transition-colors duration-300 ${
                isHome && !scrolled ? "text-white/50" : "text-text-tertiary"
              }`}
            >
              República Argentina
            </span>
          </Link>

          {/* Desktop nav links — Inter, regular weight, no all-caps */}
          <ul className="relative m-0 hidden list-none items-center gap-0.5 p-0 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-[0.8125rem] tracking-[0.01em] no-underline transition-colors duration-[var(--duration-fast)] ${
                    isActive(link.href)
                      ? "text-text-primary"
                      : isHome && !scrolled
                        ? "text-white/70 hover:text-white"
                        : "text-text-tertiary hover:text-text-primary"
                  }`}
                  {...(isActive(link.href) ? { "aria-current": "page" as const } : {})}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-3 bottom-0 h-px bg-text-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className={`flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md transition-colors duration-[var(--duration-fast)] md:hidden ${
              isHome && !scrolled
                ? "border border-white/20 bg-black/30 backdrop-blur-md hover:bg-black/50"
                : "border border-border bg-surface-1 hover:bg-surface-2"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-4 transition-all duration-[var(--duration-fast)] ${
                isHome && !scrolled ? "bg-white" : "bg-text-primary"
              } ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 transition-all duration-[var(--duration-fast)] ${
                isHome && !scrolled ? "bg-white" : "bg-text-primary"
              } ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-4 transition-all duration-[var(--duration-fast)] ${
                isHome && !scrolled ? "bg-white" : "bg-text-primary"
              } ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Scroll progress bar */}
      <div className="scroll-progress" />

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-nav-bg-mobile backdrop-blur-[24px] transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-x-8 top-[var(--height-nav)] h-px bg-rule"
          aria-hidden="true"
        />

        <nav ref={menuNavRef} aria-label="Menú móvil">
          <ul className="m-0 flex list-none flex-col items-center gap-0 p-0">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`w-full transition-[opacity,transform] duration-[var(--duration-normal)] ease-[var(--ease-decelerate)] ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Link
                  href={link.href}
                  className={`group flex flex-col items-center gap-1 px-8 py-4 text-center no-underline transition-colors duration-[var(--duration-fast)] ${
                    isActive(link.href)
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="font-display text-[length:var(--text-xl)] leading-none">
                    {link.label}
                  </span>
                  <span className="text-[0.6875rem] tracking-[0.04em] text-text-tertiary">
                    {link.sublabel}
                  </span>
                </Link>

                {i < navLinks.length - 1 && (
                  <div className="mx-auto h-px w-12 bg-rule" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
