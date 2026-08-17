"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type TeamMember = {
  slug: string;
  name: string;
  /** Cargo. Vacío mientras el cliente no lo defina: entonces no se rotula. */
  role: string;
  /** Biografía en párrafos. Vacía hasta que llegue el texto real. */
  bio: readonly string[];
  /** Texto alternativo del retrato, ya resuelto en el servidor. */
  alt: string;
};

type Labels = {
  openLabel: string;
  modalLabel: string;
  closeLabel: string;
  bioPending: string;
};

/**
 * Retratos del equipo. Cada uno abre una ventana emergente con la biografía
 * de la persona; mientras el texto no exista, la ventana muestra el espacio
 * reservado (`bioPending`).
 *
 * La ventana se cierra con Escape, con el botón de cierre o tocando fuera;
 * al cerrarse devuelve el foco al retrato que la abrió, y mientras está
 * abierta se bloquea el desplazamiento del fondo.
 */
export default function TeamGallery({
  members,
  labels,
}: {
  members: readonly TeamMember[];
  labels: Labels;
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  // La galería vive dentro de un <Reveal>, que anima con `transform`: eso
  // convierte al contenedor en bloque de referencia y un `position: fixed`
  // adentro se posicionaría respecto de él, no de la ventana. Por eso la
  // ventana emergente se monta en <body> con un portal.
  const [mounted, setMounted] = useState(false);
  const triggersRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => setMounted(true), []);

  const active = members.find((m) => m.slug === openSlug) ?? null;

  const close = useCallback(() => {
    setOpenSlug((slug) => {
      if (slug) triggersRef.current[slug]?.focus();
      return null;
    });
  }, []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [active, close]);

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {members.map((member) => (
          <li key={member.slug}>
            <button
              ref={(el) => {
                triggersRef.current[member.slug] = el;
              }}
              type="button"
              onClick={() => setOpenSlug(member.slug)}
              aria-haspopup="dialog"
              className="group block w-full text-left"
            >
              <span className="relative block aspect-[3/4] w-full overflow-hidden bg-stone">
                <Image
                  src={`/images/equipo/${member.slug}.jpg`}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.035]"
                />
              </span>
              <span className="mt-4 block text-[0.95rem] font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-earth">
                {member.name}
              </span>
              {member.role ? (
                <span className="mt-1 block text-[0.8rem] font-light leading-snug text-charcoal">
                  {member.role}
                </span>
              ) : null}
              <span className="mt-2 flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-earth">
                {labels.openLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && mounted &&
        createPortal(
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 sm:items-center sm:p-6"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${labels.modalLabel} — ${active.name}`}
            onClick={(e) => e.stopPropagation()}
            className="accordion-panel max-h-[92svh] w-full max-w-3xl overflow-y-auto bg-white"
          >
            <div className="grid sm:grid-cols-[minmax(0,15rem)_1fr]">
              <div className="relative aspect-[3/4] w-full max-sm:max-h-[38svh]">
                <Image
                  src={`/images/equipo/${active.slug}.jpg`}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 640px) 15rem, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone">
                      {labels.modalLabel}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink">
                      {active.name}
                    </h3>
                    {active.role ? (
                      <p className="mt-2 font-light leading-[1.6] text-earth">
                        {active.role}
                      </p>
                    ) : null}
                  </div>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    className="shrink-0 border border-stone/50 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-charcoal transition-colors duration-300 hover:border-earth hover:text-earth"
                  >
                    {labels.closeLabel}
                  </button>
                </div>

                <div className="mt-6 space-y-4 border-t border-stone/40 pt-6">
                  {active.bio.length > 0 ? (
                    active.bio.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-light leading-[1.75] text-charcoal"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="font-light italic leading-[1.75] text-stone">
                      {labels.bioPending}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
