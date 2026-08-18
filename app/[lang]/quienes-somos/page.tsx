import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import InteriorHero from "@/components/InteriorHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TeamGallery from "@/components/TeamGallery";
import { getDict, isLang, type Lang } from "@/lib/i18n";

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

          {/* El ancho de columna se define una sola vez, en el contenedor: si
              cada párrafo lleva su propio `max-w` en `ch`, el destacado —que
              va en cuerpo mayor— arma una columna más ancha y los bordes
              derechos se desalinean al cambiar el tamaño de letra. */}
          <Reveal className="mt-12 max-w-[58ch]">
            <div className="grid gap-6">
              {a.introParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-light leading-[1.75] text-charcoal">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-12 border-l border-earth pl-6 text-lead font-light leading-[1.6] text-ink">
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
              <p className="mt-8 max-w-[30ch] text-lead font-light leading-[1.55] text-earth">
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
              <p className="mt-8 max-w-[30ch] text-lead font-light leading-[1.55] text-earth">
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

      {/* CONOCÉ EL EQUIPO — cada retrato abre su biografía en una ventana */}
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

          <Reveal className="mt-14">
            {/* El alt se resuelve acá: a un componente de cliente no se le
                pueden pasar funciones del diccionario. */}
            <TeamGallery
              members={a.teamMembers.map((member) => ({
                ...member,
                alt: a.teamPhotoAlt(member.name),
              }))}
              labels={{
                openLabel: a.teamOpenLabel,
                modalLabel: a.teamModalLabel,
                closeLabel: a.teamModalClose,
                bioPending: a.teamBioPending,
              }}
            />
          </Reveal>
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
