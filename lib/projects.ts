export type ProjectCategory = "arquitectura" | "iluminacion" | "equipamiento";

export type Project = {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  featured?: boolean;
  /** TODO: año del proyecto (se muestra en la card cuando exista). */
  year?: string;
  /**
   * Destino alternativo de la card, relativo al idioma (p. ej. "budaya").
   * Lo usan las entradas que ya tienen su propia página y por lo tanto no
   * llevan ficha propia dentro de /portafolio.
   */
  href?: string;
};

// Los textos por idioma (descripciones) viven en lib/i18n (projectExcerpts).
// El orden es el mismo del portafolio destacado del inicio: Kahwi primero.
export const projects: Project[] = [
  { slug: "kahwi", name: "Kahwi", categories: ["arquitectura", "iluminacion"], featured: true },
  { slug: "tree-lodge", name: "Tree Lodge", categories: ["arquitectura"] },
  { slug: "cafetal", name: "Cafetal", categories: ["arquitectura"] },
  { slug: "diciembre-seis", name: "Diciembre Seis", categories: ["arquitectura"] },
  { slug: "amarea", name: "Amarea", categories: ["arquitectura"] },
  { slug: "budaya", name: "Budaya", categories: ["equipamiento"], href: "budaya" },
];

/**
 * Proyectos con ficha propia dentro de /portafolio. Budaya queda fuera: su
 * card lleva a la página de la marca, que ya cuenta el trabajo completo.
 */
export const caseStudies: Project[] = projects.filter((p) => !p.href);

/** Portada especial de Kahwi (la misma del portafolio destacado del inicio). */
export const kahwiFeaturedCover = "/images/proyectos/kahwi/cover-destacado.jpg";

/** Portada de Budaya en el portafolio: una de las fotos de la galería. */
export const budayaCover = "/images/budaya/09.jpg";

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
