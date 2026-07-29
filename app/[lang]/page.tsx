import type { Metadata } from "next";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import DisciplineAccordion from "@/components/DisciplineAccordion";
import Logo from "@/components/Logo";
import Preloader from "@/components/Preloader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import RoadmapIcon, { type RoadmapIconName } from "@/components/RoadmapIcon";
import SectionHeader from "@/components/SectionHeader";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { getProject, kahwiFeaturedCover, type Project } from "@/lib/projects";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return {
    title: { absolute: t.meta.homeTitle },
    description: t.meta.homeDescription,
  };
}

function categoryText(project: Project, t: ReturnType<typeof getDict>): string {
  return project.categories.map((c) => t.categories[c]).join(" · ");
}

// Portafolio destacado del inicio (mismo orden que la página de portafolio)
const featuredProjects = ["kahwi", "tree-lodge", "cafetal", "diciembre-seis", "amarea"];

export default async function HomePage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const t = getDict(lang);

  const paths = [
    {
      tag: t.home.path1Tag,
      title: t.home.path1Title,
      tagline: t.home.path1Tagline,
      description: t.home.path1Description,
      linkLabel: t.home.path1Link,
      href: `/${lang}/proyecto-desde-cero`,
      number: "01",
      // Colores sólidos de marca (sin fotografías)
      bg: "bg-earth",
    },
    {
      tag: t.home.path2Tag,
      title: t.home.path2Title,
      tagline: t.home.path2Tagline,
      description: t.home.path2Description,
      linkLabel: t.home.path2Link,
      href: `/${lang}/proyecto-ya-construido`,
      number: "02",
      bg: "bg-charcoal",
    },
  ];

  return (
    <>
      {/* Pre-pantalla de 2s: fondo sólido con el logo */}
      <Preloader />

      {/* HERO — negro sólido, logo grande a la izquierda, información mínima */}
      <section className="relative flex min-h-svh items-center bg-ink text-white">
        <div className="container-site grid items-center gap-14 py-32 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="lg:border-r lg:border-stone/25 lg:pr-16">
            <Logo
              variant="mark"
              color="white"
              iconClassName="h-[clamp(13rem,26vw,19rem)] w-auto"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-[0.4rem] w-[0.4rem] rounded-full bg-mist" />
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-mist">
                {t.home.heroEyebrow}
              </p>
            </div>
            <h1 className="mt-8 max-w-[16ch] text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.1]">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-[46ch] text-base font-light leading-[1.7] text-mist md:text-lg">
              {t.home.heroSubtitle}
            </p>
          </div>
        </div>
        <a
          href="#dos-caminos"
          className="absolute bottom-10 left-6 flex items-center gap-4 text-[0.65rem] font-normal uppercase tracking-[0.3em] text-mist transition-colors duration-300 hover:text-white md:left-10"
        >
          {t.common.discover}
          <span aria-hidden="true" className="h-px w-16 bg-mist/60" />
        </a>
        {/* Marcador editorial vertical */}
        <span
          aria-hidden="true"
          className="absolute bottom-10 right-6 hidden text-[0.7rem] font-light tracking-[0.4em] text-mist/50 md:block md:right-10"
          style={{ writingMode: "vertical-rl" }}
        >
          20 26.
        </span>
      </section>

      {/* DOS CAMINOS */}
      <section id="dos-caminos" className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={t.home.pathsEyebrow}
              title={t.home.pathsTitle}
              titleClassName="max-w-[30ch]"
            />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
            {paths.map((path, i) => (
              <Reveal key={path.href} delay={i * 120}>
                {/* Toda la card (bloque de color + texto) es el área clicable */}
                <Link href={path.href} className="group block">
                  <article>
                    {/* Bloque de color sólido de marca (sin fotografía) */}
                    <div className={`relative aspect-[4/3] overflow-hidden ${path.bg}`}>
                      <div aria-hidden="true" className="texture-grain absolute inset-0" />
                      <span className="absolute left-5 top-5 border border-white/60 px-3 py-1.5 text-[0.62rem] font-normal uppercase tracking-[0.28em] text-white">
                        {path.tag}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-4 right-6 text-[clamp(4.5rem,9vw,7rem)] font-semibold leading-none text-white/15 transition-colors duration-500 group-hover:text-white/25"
                      >
                        {path.number}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-earth">
                      {path.title}
                    </h3>
                    <p className="mt-3 font-normal italic text-earth">{path.tagline}</p>
                    <p className="mt-4 max-w-[54ch] font-light leading-[1.7] text-charcoal">
                      {path.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-3 text-[0.8rem] font-normal uppercase tracking-[0.14em] text-earth">
                      {path.linkLabel}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATEGIA 19.89 — qué es y por qué comenzar con una estrategia */}
      <section id="estrategia" className="scroll-mt-20 bg-charcoal text-white">
        <div className="container-site section-pad">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow={t.home.strategyEyebrow}
              title={t.home.strategyTitle}
              dark
              align="center"
            />
            <p className="mx-auto mt-8 max-w-[62ch] font-light leading-[1.7] text-mist">
              {t.home.strategyText}
            </p>
          </Reveal>

          {/* ¿Por qué comenzar con una estrategia? */}
          <Reveal className="mt-24 border-t border-white/15 pt-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
              <SectionHeader
                eyebrow={t.home.whyEyebrow}
                title={t.home.whyTitle}
                dark
                titleClassName="max-w-[18ch]"
              />
              <div className="space-y-5 lg:pt-2">
                <p className="max-w-[58ch] font-light leading-[1.7] text-mist">
                  {t.home.whyText1}
                </p>
                <p className="max-w-[58ch] font-light leading-[1.7] text-mist">
                  {t.home.whyText2}
                </p>
                <p className="max-w-[58ch] border-l border-earth pl-5 font-light leading-[1.7] text-white">
                  {t.home.whyText3}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ¿CÓMO TRABAJAMOS? — las seis etapas del proceso */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={t.home.processEyebrow} title={t.home.processTitle} />
            <p className="mt-6 max-w-[64ch] font-light leading-[1.7] text-charcoal">
              {t.home.processIntro}
            </p>
          </Reveal>
          <div className="mt-16">
            {t.processSteps.map((step, i) => (
              <Reveal key={step.number} delay={(i % 4) * 60}>
                <div className="grid items-baseline gap-2 border-t border-stone/40 py-7 md:grid-cols-[7rem_16rem_1fr] md:gap-8">
                  <span className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none text-earth">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-medium text-ink">{step.title}</h3>
                  <p className="max-w-[52ch] font-light leading-[1.7] text-charcoal">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-stone/40" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ¿QUÉ ANALIZAMOS? */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <SectionHeader eyebrow={t.home.analyzeEyebrow} title={t.home.analyzeTitle} />
              <p className="mt-6 max-w-[52ch] font-light leading-[1.7] text-charcoal">
                {t.home.analyzeText}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2" role="list">
                {t.analyzeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-stone/40 py-3.5 text-[0.95rem] font-light leading-[1.6] text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-[0.3rem] w-[0.3rem] shrink-0 rounded-full bg-earth"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mt-14">
            <p className="max-w-[70ch] border-l border-earth pl-5 font-light leading-[1.7] text-charcoal">
              {t.home.analyzeNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* EL VALOR DE 19.89 */}
      <section className="section-pad bg-ink text-white">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow={t.home.valueEyebrow}
              title={t.home.valueTitle}
              dark
              align="center"
              titleClassName="max-w-[20ch]"
            />
          </Reveal>
          <Reveal className="mt-14 grid gap-8 md:grid-cols-3">
            {[t.home.valueText1, t.home.valueText2, t.home.valueText3].map((text, i) => (
              <p
                key={i}
                className="border-t border-white/20 pt-6 font-light leading-[1.7] text-mist"
              >
                {text}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ROADMAP · DEL ANÁLISIS A LA ACCIÓN */}
      <section id="roadmap" className="section-pad scroll-mt-20 bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={t.home.roadmapEyebrow} title={t.home.roadmapTitle} />
            <p className="mt-6 max-w-[64ch] font-light leading-[1.7] text-charcoal">
              {t.home.roadmapIntro}
            </p>
          </Reveal>

          {/* Roadmap lineal: 4 pasos conectados por una línea continua */}
          <Reveal className="mt-20">
            <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8" role="list">
              {/* Línea de recorrido (solo desktop) */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-7 hidden h-px bg-stone/50 md:block"
              />
              {t.roadmapSteps.map((step) => (
                <li key={step.number} className="relative">
                  <div className="flex items-center gap-4 md:block">
                    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-stone/60 bg-white text-earth">
                      <RoadmapIcon name={step.icon as RoadmapIconName} />
                    </span>
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-stone md:mt-6 md:block">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium leading-snug text-ink md:mt-3">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[0.95rem] font-light leading-[1.7] text-charcoal">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-16">
            <p className="max-w-[70ch] border-l border-earth pl-5 font-light leading-[1.7] text-charcoal">
              {t.home.roadmapNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRES PUNTOS DE PARTIDA */}
      <section className="section-pad bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={t.home.scenariosEyebrow}
              title={t.home.scenariosTitle}
              titleClassName="max-w-[22ch]"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {t.scenarios.map((scenario, i) => (
              <Reveal key={scenario.title} delay={i * 100}>
                <article className="flex h-full flex-col border border-stone/50 bg-white p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-earth">
                      <RoadmapIcon name={scenario.icon as RoadmapIconName} className="h-5 w-5" />
                    </span>
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-earth">
                      {scenario.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[1.35rem] font-semibold leading-snug text-ink">
                    {scenario.title}
                  </h3>

                  <p className="mt-4 text-[0.95rem] font-light leading-[1.7] text-charcoal">
                    {scenario.start}
                  </p>

                  <div className="mt-7 border-t border-stone/40 pt-6">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone">
                      {t.home.scenarioFirstStepLabel}
                    </p>
                    <p className="mt-3 font-medium text-ink">{scenario.firstStep}</p>
                    <p className="mt-2 text-[0.95rem] font-light leading-[1.7] text-charcoal">
                      {scenario.firstStepText}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-stone/40 pt-6">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone">
                      {t.home.scenarioRouteLabel}
                    </p>
                    <ol className="mt-4 space-y-2.5" role="list">
                      {scenario.route.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[0.9rem] font-light leading-[1.5] text-ink"
                        >
                          <span className="mt-px w-4 shrink-0 text-[0.7rem] font-medium text-earth">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-8 pt-2">
                    <ArrowLink href={`/${lang}${scenario.href}`}>
                      {scenario.linkLabel}
                    </ArrowLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Consideraciones */}
          <Reveal className="mt-20 border-t border-stone/40 pt-12">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-earth">
              {t.home.considerationsLabel}
            </p>
            <p className="mt-6 max-w-[70ch] font-light leading-[1.7] text-charcoal">
              {t.home.considerationsIntro}
            </p>
            <ul className="mt-6 max-w-[78ch] space-y-3" role="list">
              {t.considerations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.95rem] font-light leading-[1.7] text-charcoal"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-[0.3rem] w-[0.3rem] shrink-0 rounded-full bg-stone"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* DISCIPLINAS BAJO UNA MISMA VISIÓN */}
      <section id="disciplinas" className="section-pad bg-ink">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow={t.home.disciplinesEyebrow}
              title={t.home.disciplinesTitle}
              dark
            />
            <p className="mt-6 max-w-[58ch] font-light leading-[1.7] text-mist">
              {t.home.disciplinesNote}
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <DisciplineAccordion
              items={t.disciplines}
              labels={{ stageLabels: t.stageLabels, pathTags: t.pathTags }}
              dark
            />
          </Reveal>
          <Reveal className="mt-10">
            <ArrowLink href={`/${lang}/disciplinas`}>{t.home.disciplinesLink}</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* PORTAFOLIO DESTACADO — Kahwi en primer lugar con su portada especial */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader eyebrow={t.home.portfolioEyebrow} />
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((slug, i) => {
                const project = getProject(slug);
                if (!project) return null;
                const wide = i === 0; // Kahwi abre el portafolio destacado
                return (
                  <div key={slug} className={wide ? "md:col-span-2" : undefined}>
                    <ProjectCard
                      project={project}
                      lang={lang}
                      categoryText={categoryText(project, t)}
                      alt={t.portfolio.projectAlt(project.name)}
                      tone={(["earth", "charcoal", "stone", "ink", "earth"] as const)[i]}
                      aspect={wide ? "aspect-[16/9]" : "aspect-[4/3]"}
                      sizes={wide ? "(min-width: 1184px) 1104px, 100vw" : undefined}
                      coverSrc={wide ? kahwiFeaturedCover : undefined}
                    />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-16 text-center">
            <Button href={`/${lang}/portafolio`} variant="outline-dark">
              {t.home.seeFullPortfolio}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
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
