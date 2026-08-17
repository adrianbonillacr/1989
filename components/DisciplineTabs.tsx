"use client";

import { useId, useRef, useState } from "react";

type Package = {
  name: string;
  positioning: string;
  includes: readonly string[];
  featured: boolean;
};

type Card = {
  label: string;
  title: string;
  description: string;
  /** Alcances de la disciplina: opcional, no todas las etapas los detallan. */
  scope?: readonly string[];
  benefits: readonly string[];
  note: string;
  /**
   * Paquetes de esta disciplina. Van dentro de su propia ficha —no en un
   * bloque suelto al final de la etapa— porque los de fotografía y los de
   * marketing no son intercambiables.
   */
  packages?: readonly Package[];
  /** Notas al pie propias del bloque de paquetes. */
  packageNotes?: readonly string[];
};

type PackageLabels = {
  packageLabel: string;
  includesLabel: string;
};

/** La fila de pestañas se reparte según cuántas disciplinas tenga la etapa. */
const TABLIST_COLUMNS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
  6: "sm:grid-cols-2 lg:grid-cols-3",
};

/** Lista rotulada con el punto cuadrado de marca. */
function BulletList({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
        {label}
      </p>
      <ul className="space-y-3" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-baseline gap-3">
            <span
              aria-hidden="true"
              className="h-[0.32rem] w-[0.32rem] shrink-0 translate-y-[-0.1rem] bg-earth"
            />
            <span className="font-light leading-[1.65] text-charcoal">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Disciplinas de una etapa como pestañas: la fila de nombres selecciona
 * cuál ficha se muestra debajo, conservando el diseño de ficha ya usado
 * en la página (rótulo, titular, descripción, beneficios y nota al pie).
 *
 * Al entrar se muestra la primera. La fila se navega con flechas además
 * del clic, como manda el patrón de pestañas.
 */
export default function DisciplineTabs({
  cards,
  benefitsLabel,
  scopeLabel,
  packageLabels,
  ariaLabel,
}: {
  cards: readonly Card[];
  benefitsLabel: string;
  /** Rótulo de la lista de alcances, cuando las fichas los traen. */
  scopeLabel?: string;
  /** Rótulos del bloque de paquetes, cuando alguna ficha los trae. */
  packageLabels?: PackageLabels;
  /** Nombre de la etapa, para que el lector de pantalla ubique la fila. */
  ariaLabel: string;
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const next = (index + cards.length) % cards.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(cards.length - 1);
    }
  };

  const card = cards[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className={`grid gap-px border border-stone/40 bg-stone/40 ${
          TABLIST_COLUMNS[cards.length] ?? "sm:grid-cols-2 lg:grid-cols-5"
        }`}
      >
        {cards.map((c, i) => {
          const selected = i === active;
          return (
            <button
              key={c.label}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`group relative p-6 text-left transition-colors duration-300 ${
                selected ? "bg-white" : "bg-mist hover:bg-white/60"
              }`}
            >
              {/* Filete superior: marca la pestaña activa */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-earth transition-transform duration-300 ${
                  selected ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <span
                className={`text-[0.9rem] font-medium leading-snug transition-colors duration-300 ${
                  selected ? "text-earth" : "text-ink group-hover:text-earth"
                }`}
              >
                {c.label}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="accordion-panel mt-12 border border-stone/40 bg-white p-8 lg:p-12"
      >
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-stone">
          {card.label}
        </p>
        <h3 className="mt-4 max-w-[28ch] text-2xl font-semibold leading-snug text-ink">
          {card.title}
        </h3>
        <div className="mt-6 grid gap-8">
          <p className="max-w-[52ch] font-light leading-[1.7] text-charcoal">
            {card.description}
          </p>
          {card.scope && scopeLabel && (
            <BulletList label={scopeLabel} items={card.scope} />
          )}
          <BulletList label={benefitsLabel} items={card.benefits} />
        </div>

        {/* Paquetes de esta disciplina, dentro de su propia ficha */}
        {card.packages && packageLabels && (
          <div className="mt-10 border-t border-stone/40 pt-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {card.packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`relative flex h-full flex-col border p-6 ${
                    pkg.featured ? "border-earth" : "border-stone/40"
                  }`}
                >
                  {pkg.featured && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 bg-earth"
                    />
                  )}
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.26em] text-stone">
                    {packageLabels.packageLabel}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold uppercase tracking-[0.08em] text-ink">
                    {pkg.name}
                  </h4>
                  <p className="mt-3 text-[0.9rem] font-light leading-[1.6] text-charcoal">
                    {pkg.positioning}
                  </p>
                  <div className="mt-5 border-t border-stone/40 pt-5">
                    <p className="mb-3 text-[0.62rem] font-medium uppercase tracking-[0.26em] text-earth">
                      {packageLabels.includesLabel}
                    </p>
                    <ul className="space-y-2" role="list">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-baseline gap-3">
                          <span
                            aria-hidden="true"
                            className="h-[0.32rem] w-[0.32rem] shrink-0 bg-earth"
                          />
                          <span className="text-[0.85rem] font-light leading-[1.6] text-charcoal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            {card.packageNotes?.map((note) => (
              <p
                key={note}
                className="mt-6 max-w-[68ch] text-[0.82rem] font-light leading-[1.7] text-charcoal"
              >
                {note}
              </p>
            ))}
          </div>
        )}

        <p className="mt-8 border-t border-stone/40 pt-5 text-[0.82rem] font-light leading-[1.7] text-charcoal">
          {card.note}
        </p>
      </div>
    </div>
  );
}
