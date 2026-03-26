"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { Wordmark } from "@/components/ui/Wordmark";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuNavRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const [navMounted, setNavMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Measure active link for sliding underline
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeLink = navLinks.find((link) =>
        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
      );
      if (activeLink && navListRef.current) {
        const linkEl = linkRefs.current.get(activeLink.href);
        if (linkEl) {
          const navRect = navListRef.current.getBoundingClientRect();
          const linkRect = linkEl.getBoundingClientRect();
          setUnderline({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
          });
          setNavMounted(true);
        }
      } else {
        setUnderline({ left: 0, width: 0 });
      }
    }, 50);
    return () => clearTimeout(timer);
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
        // Focus trap: keep Tab within the mobile menu
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
            ? "border-b border-border/50 bg-nav-bg shadow-sm backdrop-blur-[16px] backdrop-saturate-[1.3]"
            : isHome
              ? "border-b border-white/8 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[4px]"
              : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-full max-w-[var(--width-content)] items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center no-underline"
            aria-label="Inicio — Javier Milei"
          >
            <Wordmark className="text-xl tracking-[0.1em]" light={isHome && !scrolled} />
          </Link>

          {/* Desktop links */}
          <ul
            ref={navListRef}
            className="relative m-0 hidden list-none items-center gap-1 p-0 md:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  ref={(el) => {
                    if (el) linkRefs.current.set(link.href, el);
                  }}
                  href={link.href}
                  className={`nav-link-cinematic group relative px-3.5 py-2 font-accent text-sm font-bold uppercase tracking-[0.12em] no-underline transition-colors duration-[var(--duration-fast)] ${
                    isActive(link.href)
                      ? "text-gold"
                      : isHome && !scrolled
                        ? "text-white hover:text-gold"
                        : "text-text-secondary hover:text-text-primary"
                  }`}
                  {...(isActive(link.href) ? { "aria-current": "page" as const } : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Sliding underline */}
            {underline.width > 0 && (
              <div
                className="pointer-events-none absolute bottom-0 h-0.5 bg-gold"
                style={{
                  left: `${underline.left}px`,
                  width: `${underline.width}px`,
                  transition: navMounted
                    ? "left 300ms var(--ease-out-expo), width 300ms var(--ease-out-expo)"
                    : "none",
                }}
              />
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className={`flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-[var(--duration-fast)] md:hidden ${
              isHome && !scrolled
                ? "border border-white/30 bg-black/40 backdrop-blur-md hover:bg-black/55"
                : "border border-border bg-surface-1 backdrop-blur-sm hover:bg-surface-2"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 transition-all duration-[var(--duration-fast)] ${
                isHome && !scrolled ? "bg-white" : "bg-text-primary"
              } ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-[var(--duration-fast)] ${
                isHome && !scrolled ? "bg-white" : "bg-text-primary"
              } ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-[var(--duration-fast)] ${
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
        {/* Decorative gold top line */}
        <div
          className="absolute inset-x-8 top-[var(--height-nav)] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
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
                  className={`group flex flex-col items-center gap-0.5 px-8 py-4 text-center no-underline transition-colors duration-[var(--duration-fast)] ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-text-primary hover:text-gold"
                  }`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="font-accent text-[length:var(--text-2xl)] font-bold uppercase tracking-[0.2em] leading-none">
                    {link.label}
                  </span>
                  <span
                    className={`font-body text-xs tracking-[0.08em] transition-colors duration-[var(--duration-fast)] ${
                      isActive(link.href)
                        ? "text-gold/60"
                        : "text-text-secondary group-hover:text-gold/50"
                    }`}
                  >
                    {link.sublabel}
                  </span>
                </Link>

                {/* Separator between items */}
                {i < navLinks.length - 1 && (
                  <div className="mx-auto h-px w-16 bg-border/50" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom decorative line */}
        <div
          className="absolute bottom-[5rem] inset-x-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
