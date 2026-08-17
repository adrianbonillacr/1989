import type { Metadata } from "next";
import BrandImage from "@/components/BrandImage";
import CtaBanner from "@/components/CtaBanner";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { teamPortraits } from "@/lib/images";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.about.metaTitle, description: t.about.metaDescription };
}

export default async function QuienesSomosPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);
  const a = t.about;

  return (
    <>
      <InteriorHero eyebrow={a.heroEyebrow} title={a.heroTitle} subtitle={a.heroSubtitle} />

      {/* LA FIRMA */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={a.introEyebrow}
              title={a.introTitle}
              titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-6">
              {a.introParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[58ch] font-light leading-[1.75] text-charcoal">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-12 max-w-[62ch] border-l border-earth pl-6 text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.6] text-ink">
              {a.introHighlight}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALISTAS EN HOSPITALITY */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <div className="grid gap-10">
            <Reveal>
              <SectionHeader
                eyebrow={a.hospitalityEyebrow}
                titleSizeClassName="text-[clamp(1.9rem,3.6vw,2.9rem)]"
              />
              <p className="mt-8 max-w-[30ch] text-[clamp(1.15rem,2.2vw,1.45rem)] font-light leading-[1.55] text-earth">
                {a.hospitalityTitle}
              </p>
            </Reveal>
            <Reveal delay={120} className="space-y-6">
              {a.hospitalityParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[58ch] font-light leading-[1.75] text-charcoal">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* DISEÑAMOS CON PROPÓSITO */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid gap-10">
            <Reveal>
              <SectionHeader
                eyebrow={a.purposeEyebrow}
                titleSizeClassName="text-[clamp(1.9rem,3.6vw,2.9rem)]"
              />
              <p className="mt-8 max-w-[30ch] text-[clamp(1.15rem,2.2vw,1.45rem)] font-light leading-[1.55] text-earth">
                {a.purposeTitle}
              </p>
            </Reveal>
            <Reveal delay={120} className="space-y-6">
              {a.purposeParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[58ch] font-light leading-[1.75] text-charcoal">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA. LUZ. HOSPITALIDAD. */}
      <section className="section-pad bg-ink text-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span aria-hidden="true" className="h-px w-16 bg-stone/40" />
              <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-stone" />
              <span aria-hidden="true" className="h-px w-16 bg-stone/40" />
            </div>
            <p className="mt-10 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.15]">
              {a.claimTitle}
            </p>
            <p className="mx-auto mt-8 max-w-[52ch] text-[clamp(1.05rem,2vw,1.35rem)] font-light leading-[1.6] text-mist">
              {a.claimText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONOCÉ EL EQUIPO — 4 espacios de foto (3:4) */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={a.teamEyebrow}
              title={a.teamTitle}
              titleSizeClassName="text-[clamp(2.1rem,4.4vw,3.4rem)]"
            />
            <p className="mt-8 max-w-[62ch] font-light leading-[1.75] text-charcoal">
              {a.teamText}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {teamPortraits.map((src, i) => (
              <Reveal key={src} delay={i * 90}>
                <BrandImage
                  src={src}
                  alt={a.teamPhotoAlt(i + 1)}
                  tone={i % 2 === 0 ? "earth" : "stone"}
                  label={a.teamPhotoLabel}
                  className="aspect-[3/4] w-full"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            {t.common.claim.part1}{" "}
            <span className="text-stone">{t.common.claim.part2}</span>{" "}
            {t.common.claim.part3}
          </>
        }
        buttonLabel={t.common.scheduleMeeting}
        buttonHref={`/${lang}/contacto`}
      />
    </>
  );
}
