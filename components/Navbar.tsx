"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { locales, switchLangPath, type Lang, type Dictionary } from "@/lib/i18n";

type NavDict = Dictionary["nav"];

// Rutas (sin prefijo de idioma) cuyo hero es oscuro: navbar transparente.
const darkHeroRoutes = [
  "/",
  "/proyecto-desde-cero",
  "/proyecto-ya-construido",
  "/budaya",
  "/portafolio",
  "/quienes-somos",
];

function isActive(pathname: string, href: string): boolean {
  const base = href.split("#")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

type NavItem = {
  href: string;
  label: string;
  /** Si existe, la entrada no navega: abre un submenú con estos destinos. */
  children?: { href: string; label: string }[];
};

/** Flecha del submenú (gira al abrir). */
function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""} ${className}`}
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

export default function Navbar({ lang, t }: { lang: Lang; t: NavDict }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Los tres puntos de partida del submenú son los mismos escenarios de la
  // portada: dos arrancan en el proceso desde cero y el tercero en el
  // diagnóstico del proyecto que ya opera.
  const navItems: NavItem[] = [
    { href: `/${lang}/quienes-somos`, label: t.about },
    { href: `/${lang}`, label: t.home },
    {
      href: `/${lang}/disciplinas`,
      label: t.services,
      children: [
        { href: `/${lang}/proyecto-desde-cero`, label: t.servicesMenu.noProperty },
        { href: `/${lang}/proyecto-desde-cero#etapa-1`, label: t.servicesMenu.hasProperty },
        { href: `/${lang}/proyecto-ya-construido`, label: t.servicesMenu.running },
        { href: `/${lang}/disciplinas`, label: t.servicesMenu.allServices },
      ],
    },
    { href: `/${lang}/budaya`, label: t.budaya },
    { href: `/${lang}/portafolio`, label: t.portfolio },
    { href: `/${lang}/contacto`, label: t.contact },
  ];

  const itemActive = (item: NavItem): boolean => {
    if (item.children) {
      return (
        isActive(pathname, item.href) ||
        item.children.some((child) => isActive(pathname, child.href))
      );
    }
    return item.href === `/${lang}`
      ? pathname === `/${lang}`
      : isActive(pathname, item.href);
  };

  // Ruta sin el prefijo de idioma, para decidir el estilo del hero
  const bare = "/" + pathname.split("/").slice(2).join("/");
  const hasDarkHero =
    darkHeroRoutes.includes(bare) || bare.startsWith("/portafolio/");
  const solid = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al navegar
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Submenú de escritorio: se cierra al pulsar fuera o con Escape
  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    burgerRef.current?.focus();
  }, []);

  // Menú mobile: bloquear scroll, foco inicial, focus trap y cierre con Escape
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";

    const menu = menuRef.current;
    const focusables = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ??
          [],
      );
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const textColor = solid ? "text-ink" : "text-white";

  // Si el link apunta a la página actual, Next no navega: subimos al tope.
  const scrollTopIfSameRoute =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0 });
      }
    };

  const LangSwitch = ({ className }: { className?: string }) => (
    <div
      aria-label={t.langSwitchLabel}
      className={`flex items-center gap-2 text-[0.66rem] font-normal uppercase tracking-[0.15em] ${className ?? ""}`}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <Link
            href={switchLangPath(pathname, locale)}
            aria-current={locale === lang ? "true" : undefined}
            className={`transition-opacity duration-300 ${
              locale === lang ? "underline underline-offset-4 decoration-earth" : "opacity-60 hover:opacity-100"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/10 bg-white/92 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className={`container-site flex h-20 items-center justify-between ${textColor}`}>
        <Link
          href={`/${lang}`}
          onClick={scrollTopIfSameRoute(`/${lang}`)}
          className="transition-opacity duration-300 hover:opacity-70"
          aria-label={t.logoAria}
        >
          <Logo variant="mark" color={solid ? "ink" : "white"} iconClassName="h-9 w-auto" />
        </Link>

        {/* Navegación de escritorio */}
        {/* gap-5 y un tracking corto dejan aire entre logo, nav y CTA. */}
        <nav
          aria-label={t.mainNavLabel}
          className="hidden items-center gap-4 min-[1200px]:flex min-[1320px]:gap-5"
        >
          {navItems.map((item) => {
            const active = itemActive(item);

            if (item.children) {
              return (
                <div key={item.label} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((open) => !open)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-controls="services-menu"
                    className="group relative flex items-center gap-1.5 whitespace-nowrap py-1 text-[0.66rem] font-normal uppercase tracking-[0.11em]"
                  >
                    {item.label}
                    <Chevron open={servicesOpen} className="h-[0.3rem] w-[0.5rem]" />
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-earth transition-transform duration-300 ${
                        active || servicesOpen
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div
                      id="services-menu"
                      aria-label={item.label}
                      className="absolute left-1/2 top-full z-50 mt-4 w-[19rem] -translate-x-1/2 border border-ink/10 bg-white py-2 text-ink shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)]"
                    >
                      <p className="px-5 pb-2 pt-1 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-stone">
                        {t.servicesMenu.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          aria-current={isActive(pathname, child.href) ? "page" : undefined}
                          className="block px-5 py-3 text-[0.9rem] font-light leading-snug text-charcoal transition-colors duration-300 hover:bg-mist hover:text-ink aria-[current=page]:text-earth"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={scrollTopIfSameRoute(item.href)}
                aria-current={active ? "page" : undefined}
                className="group relative whitespace-nowrap py-1 text-[0.66rem] font-normal uppercase tracking-[0.11em]"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-earth transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 min-[1200px]:flex">
          <LangSwitch />
          <Link
            href={`/${lang}/contacto`}
            className="inline-block whitespace-nowrap bg-earth px-4 py-2.5 text-[0.72rem] font-normal uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-earth-dark"
          >
            {t.cta}
          </Link>
        </div>

        {/* Hamburguesa mobile */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={t.openMenu}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[1200px]:hidden"
        >
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
          <span aria-hidden="true" className="block h-px w-6 bg-current" />
        </button>
      </div>

      {/* Menú mobile fullscreen */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.menuLabel}
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-ink text-white"
        >
          <div className="container-site flex h-20 items-center justify-between">
            <Logo variant="mark" color="white" iconClassName="h-9 w-auto" />
            <button
              type="button"
              onClick={closeMenu}
              aria-label={t.closeMenu}
              className="flex h-10 w-10 items-center justify-center text-2xl font-light"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {/* Con las entradas + submenú + idioma + CTA el menú queda justo en
              pantallas bajas: se centra cuando hay altura y se vuelve
              scrolleable cuando no. */}
          <nav
            aria-label={t.mainNavLabel}
            className="container-site flex flex-1 flex-col justify-center gap-5 overflow-y-auto py-6 [@media(max-height:640px)]:justify-start"
          >
            {navItems.map((item) => {
              const active = itemActive(item);

              if (item.children) {
                return (
                  <div key={item.label} className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      className={`flex w-fit items-center gap-3 text-[1.2rem] font-light uppercase tracking-[0.2em] transition-colors duration-300 ${
                        active ? "text-earth" : "text-white hover:text-stone"
                      }`}
                    >
                      {item.label}
                      <Chevron open={mobileServicesOpen} className="h-2 w-3" />
                    </button>

                    {mobileServicesOpen && (
                      <div
                        id="mobile-services-menu"
                        className="flex flex-col gap-4 border-l border-stone/40 pl-5"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            aria-current={
                              isActive(pathname, child.href) ? "page" : undefined
                            }
                            className={`text-[0.95rem] font-light leading-snug transition-colors duration-300 ${
                              isActive(pathname, child.href)
                                ? "text-earth"
                                : "text-mist hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    setMenuOpen(false);
                    scrollTopIfSameRoute(item.href)(e);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`text-[1.2rem] font-light uppercase tracking-[0.2em] transition-colors duration-300 ${
                    active ? "text-earth" : "text-white hover:text-stone"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <LangSwitch className="mt-4" />
            <Link
              href={`/${lang}/contacto`}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block w-fit bg-earth px-8 py-4 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-earth-dark"
            >
              {t.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
