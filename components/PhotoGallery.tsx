"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { GalleryImage } from "@/lib/images";

/** Foto con su texto alternativo ya resuelto en el servidor. */
export type GalleryPhoto = GalleryImage & { alt: string };

type Labels = {
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  /**
   * Plantilla del contador, con {current} y {total}: "{current} de 34" se
   * arma acá porque a un componente de cliente no se le pueden pasar
   * funciones del diccionario.
   */
  counterTemplate: string;
};

/**
 * Galería en mampostería: cada foto conserva su proporción original —el
 * material de Budaya mezcla verticales y horizontales, y recortarlas todas a
 * un mismo formato cortaba las horizontales por la mitad— y las columnas se
 * rellenan por altura, sin huecos.
 *
 * Al tocar una foto se abre a pantalla completa, con flechas y teclado para
 * recorrer la galería. El visor se monta en <body> con un portal porque los
 * contenedores animados (`Reveal`) usan `transform` y un `position: fixed`
 * dentro de ellos se posicionaría respecto del contenedor, no de la ventana.
 */
export default function PhotoGallery({
  images,
  labels,
}: {
  images: readonly GalleryPhoto[];
  labels: Labels;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setOpenIndex((i) => {
      if (i !== null) triggersRef.current[i]?.focus();
      return null;
    });
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [openIndex, close, step]);

  // Se resuelven juntos para que TypeScript sepa que, si hay foto abierta,
  // también hay índice.
  const open = openIndex === null ? null : { index: openIndex, image: images[openIndex] };

  const counter = (current: number) =>
    labels.counterTemplate
      .replace("{current}", String(current))
      .replace("{total}", String(images.length));

  return (
    <>
      {/* Mampostería con columnas CSS: reparte por altura y respeta la
          proporción de cada foto sin recortar. */}
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            ref={(el) => {
              triggersRef.current[i] = el;
            }}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-haspopup="dialog"
            aria-label={`${labels.openLabel} — ${image.alt}`}
            className="group mb-4 block w-full overflow-hidden sm:mb-6"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              quality={82}
              className="h-auto w-full transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {open && mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.image.alt}
            className="fixed inset-0 z-50 flex flex-col bg-ink/95"
            onClick={close}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-stone">
                {counter(open.index + 1)}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="border border-stone/50 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-mist transition-colors duration-300 hover:border-earth hover:text-white"
              >
                {labels.closeLabel}
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-5 pb-6 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={open.image.src}
                src={open.image.src}
                alt={open.image.alt}
                width={open.image.width}
                height={open.image.height}
                sizes="(min-width: 1024px) 80vw, 100vw"
                quality={88}
                priority
                className="max-h-full w-auto max-w-full object-contain"
              />
            </div>

            <div
              className="flex items-center justify-center gap-3 px-5 pb-8 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={labels.previousLabel}
                className="border border-stone/50 px-5 py-2 text-mist transition-colors duration-300 hover:border-earth hover:text-white"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={labels.nextLabel}
                className="border border-stone/50 px-5 py-2 text-mist transition-colors duration-300 hover:border-earth hover:text-white"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
