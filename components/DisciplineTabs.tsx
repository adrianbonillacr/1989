"use client";

import { useId, useRef, useState } from "react";

type Card = {
  label: string;
  title: string;
  description: string;
  benefits: readonly string[];
  note: string;
};

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
  ariaLabel,
}: {
  cards: readonly Card[];
  benefitsLabel: string;
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
        className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2 lg:grid-cols-5"
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
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <p className="max-w-[52ch] font-light leading-[1.7] text-charcoal">
            {card.description}
          </p>
          <div>
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
              {benefitsLabel}
            </p>
            <ul className="space-y-3" role="list">
              {card.benefits.map((item) => (
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
        </div>
        <p className="mt-8 border-t border-stone/40 pt-5 text-[0.82rem] font-light leading-[1.7] text-charcoal">
          {card.note}
        </p>
      </div>
    </div>
  );
}
