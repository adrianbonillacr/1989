"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

type Discipline = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stage: string;
  newOnly: boolean;
  detail: {
    text: readonly string[];
    blocks: readonly { label: string; items: readonly string[] }[];
    considerations: readonly string[];
    cost: string;
  };
};

type Labels = {
  stageLabels: Record<string, string>;
  pathTags: { both: string; newOnly: string };
  considerationsLabel: string;
  costLabel: string;
  moreLabel: string;
};

/**
 * Lista de disciplinas tipo acordeón: al tocar un ítem se despliega una
 * pestaña debajo con el detalle (empujando el resto para ajustar el espacio);
 * al volver a tocarlo se cierra. Solo uno abierto a la vez.
 *
 * Dos modos:
 * · corto (inicio) — resumen + enlace "+ info" hacia la landing de Servicios,
 *   que abre ese mismo ítem ampliado;
 * · ampliado (`expanded`, landing de Servicios) — añade el detalle, qué
 *   incluye y qué se logra, y responde al hash de la URL para abrirse solo.
 *
 * El detalle se monta/desmonta al abrir/cerrar (la lista refluye y ajusta el
 * espacio) con una animación de entrada. Funciona en fondo claro y oscuro.
 */
export default function DisciplineAccordion({
  items,
  labels,
  dark,
  expanded,
  moreHrefBase,
}: {
  items: readonly Discipline[];
  labels: Labels;
  dark?: boolean;
  expanded?: boolean;
  /** Ruta de la landing de Servicios; el ancla del ítem se añade aquí. */
  moreHrefBase?: string;
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const baseId = useId();

  // En la landing, un enlace "+ info" (/disciplinas#arquitectura) abre
  // directamente ese servicio; el navegador se encarga del desplazamiento.
  useEffect(() => {
    if (!expanded) return;

    const openFromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (slug && items.some((d) => d.slug === slug)) setOpenSlug(slug);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [expanded, items]);

  const line = dark ? "border-stone/25" : "border-stone/40";
  const name = dark ? "text-white" : "text-ink";
  const desc = dark ? "text-mist" : "text-charcoal";
  const indicator = dark ? "text-stone" : "text-earth";
  const pillar = dark
    ? "border-stone/40 text-mist"
    : "border-stone/40 text-charcoal";
  const label = dark ? "text-stone" : "text-stone";

  return (
    <ul role="list" className={`border-t ${line}`}>
      {items.map((d) => {
        const open = openSlug === d.slug;
        const panelId = `${baseId}-${d.slug}`;
        return (
          <li
            key={d.slug}
            id={expanded ? d.slug : undefined}
            className={`border-b scroll-mt-24 ${line}`}
          >
            <button
              type="button"
              onClick={() => setOpenSlug(open ? null : d.slug)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group flex w-full items-center gap-6 py-6 text-left"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[0.6rem] font-medium uppercase tracking-[0.24em] text-stone">
                  {labels.stageLabels[d.stage]}
                </span>
                <span
                  className={`mt-2 block text-[clamp(1.25rem,2.4vw,1.7rem)] font-medium leading-snug transition-colors duration-300 group-hover:text-earth ${open ? "text-earth" : name}`}
                >
                  {d.name}
                </span>
              </span>
              {/* Indicador +/− */}
              <span
                aria-hidden="true"
                className={`relative h-5 w-5 shrink-0 ${indicator}`}
              >
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                <span
                  className={`absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-500 ${open ? "rotate-90 scale-0" : "rotate-0"}`}
                />
              </span>
            </button>

            {open && (
              <div id={panelId} role="region" className="accordion-panel max-w-[62ch] pb-8">
                <p className="font-normal italic text-earth">{d.tagline}</p>
                <p className={`mt-4 font-light leading-[1.75] ${desc}`}>
                  {d.description}
                </p>

                {expanded && (
                  <>
                    {d.detail.text.map((paragraph) => (
                      <p key={paragraph} className={`mt-4 font-light leading-[1.75] ${desc}`}>
                        {paragraph}
                      </p>
                    ))}

                    {d.detail.blocks.map((block) => (
                      <div key={block.label}>
                        <p
                          className={`mt-8 text-[0.62rem] font-medium uppercase tracking-[0.28em] ${label}`}
                        >
                          {block.label}
                        </p>
                        <ul role="list" className="mt-4 space-y-2.5">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className={`flex items-start gap-3 text-[0.95rem] font-light leading-[1.6] ${desc}`}
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-[0.3rem] w-[0.3rem] shrink-0 rounded-full bg-earth"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <p
                      className={`mt-8 text-[0.62rem] font-medium uppercase tracking-[0.28em] ${label}`}
                    >
                      {labels.considerationsLabel}
                    </p>
                    {d.detail.considerations.map((item) => (
                      <p
                        key={item}
                        className={`mt-3 text-[0.9rem] font-light leading-[1.7] ${desc}`}
                      >
                        {item}
                      </p>
                    ))}

                    <p
                      className={`mt-8 text-[0.62rem] font-medium uppercase tracking-[0.28em] ${label}`}
                    >
                      {labels.costLabel}
                    </p>
                    <p
                      className={`mt-3 border-l border-earth pl-5 font-light leading-[1.75] ${dark ? "text-white" : "text-ink"}`}
                    >
                      {d.detail.cost}
                    </p>
                  </>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <p
                    className={`w-fit border px-2.5 py-1 text-[0.6rem] font-normal uppercase tracking-[0.18em] ${pillar}`}
                  >
                    {d.newOnly ? labels.pathTags.newOnly : labels.pathTags.both}
                  </p>

                  {/* "+ info": lleva a la landing de Servicios con este ítem abierto */}
                  {!expanded && moreHrefBase && (
                    <Link
                      href={`${moreHrefBase}#${d.slug}`}
                      className="inline-flex items-center gap-2 border border-earth px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-earth transition-colors duration-300 hover:bg-earth hover:text-white"
                    >
                      {labels.moreLabel}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
