import type { Metadata } from "next";
import BrandImage from "@/components/BrandImage";
import CtaBanner from "@/components/CtaBanner";
import InteriorHero from "@/components/InteriorHero";
import PhotoGallery from "@/components/PhotoGallery";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { budayaGallery } from "@/lib/images";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.budaya.metaTitle, description: t.budaya.metaDescription };
}

export default async function BudayaPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const b = t.budaya;

  return (
    <>
      <InteriorHero eyebrow={b.heroEyebrow} title={b.heroTitle} subtitle={b.heroSubtitle} />

      {/* LA MARCA */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={b.introEyebrow}
              title={b.introTitle}
              titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-6">
              {b.introParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[58ch] font-light leading-[1.75] text-charcoal">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ¿QUÉ HACEMOS? — primeras 3 fotos */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <div className="grid gap-10">
            <Reveal>
              <SectionHeader
                eyebrow={b.scopeEyebrow}
                titleSizeClassName="text-[clamp(1.9rem,3.6vw,2.9rem)]"
              />
              <p className="mt-8 max-w-[30ch] text-lead font-light leading-[1.55] text-earth">
                {b.scopeTitle}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="max-w-[58ch] font-light leading-[1.75] text-charcoal">
                {b.scopeText}
              </p>
              <p className="mb-4 mt-10 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-earth">
                {b.scopeLabel}
              </p>
              <ul className="grid gap-px border border-stone/40 bg-stone/40 sm:grid-cols-2" role="list">
                {b.scopeItems.map((item) => (
                  <li key={item} className="bg-mist p-5">
                    <span className="text-[0.9rem] font-light leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Tres fotos de apertura; el resto vive en la galería de más abajo */}
          <div className="mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
            {budayaGallery.slice(0, 3).map((image, i) => (
              <Reveal key={image.src} delay={i * 90}>
                <BrandImage
                  src={image.src}
                  alt={b.galleryAlt(i + 1)}
                  tone={i === 1 ? "earth" : "stone"}
                  label={b.galleryLabel}
                  className="aspect-[4/5] w-full"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO PROCESO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid gap-10">
            <Reveal>
              <SectionHeader
                eyebrow={b.processEyebrow}
                titleSizeClassName="text-[clamp(1.9rem,3.6vw,2.9rem)]"
              />
              <p className="mt-8 max-w-[30ch] text-lead font-light leading-[1.55] text-earth">
                {b.processTitle}
              </p>
            </Reveal>
            {/* El ancho de columna se define una sola vez, en el contenedor,
                para que el destacado corte a la misma altura que los párrafos. */}
            <Reveal delay={120} className="max-w-[58ch]">
              <div className="space-y-6">
                {b.processParagraphs.map((paragraph) => (
                  <p key={paragraph} className="font-light leading-[1.75] text-charcoal">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-10 border-l border-earth pl-6 font-light leading-[1.75] text-ink">
                {b.processHighlight}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOSPITALITY COMO PUNTO DE PARTIDA */}
      <section className="section-pad bg-ink text-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={b.hospitalityEyebrow}
              title={b.hospitalityTitle}
              titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
              dark
            />
          </Reveal>
          <Reveal className="mt-12">
            <div className="grid gap-6">
              {b.hospitalityParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[58ch] font-light leading-[1.75] text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMBIENTES — espacios de foto 04–06 */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={b.galleryEyebrow}
              title={b.galleryTitle}
              titleSizeClassName="text-[clamp(1.9rem,3.6vw,2.9rem)]"
            />
          </Reveal>

          {/* Galería completa entregada por el cliente: cada foto conserva su
              proporción —el material mezcla verticales y horizontales— y se
              amplía al tocarla. */}
          <Reveal className="mt-12">
            {/* Los alt se resuelven acá: a un componente de cliente no se le
                pueden pasar funciones del diccionario. */}
            <PhotoGallery
              images={budayaGallery.slice(3).map((image, i) => ({
                ...image,
                alt: b.galleryAlt(i + 4),
                caption: b.galleryCaptions[i + 3],
              }))}
              labels={{
                openLabel: b.galleryOpenLabel,
                closeLabel: b.galleryCloseLabel,
                previousLabel: t.portfolio.previous,
                nextLabel: t.portfolio.next,
                counterTemplate: b.galleryCounterTemplate,
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span aria-hidden="true" className="h-px w-16 bg-stone/40" />
              <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-earth" />
              <span aria-hidden="true" className="h-px w-16 bg-stone/40" />
            </div>
            <p className="mt-10 text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-[1.18] text-ink">
              {b.closingTitle}
            </p>
            <p className="mx-auto mt-8 max-w-[54ch] text-lead font-light leading-[1.6] text-charcoal">
              {b.closingText}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title={b.ctaTitle}
        buttonLabel={b.ctaButton}
        buttonHref={`/${lang}/contacto`}
      />
    </>
  );
}
