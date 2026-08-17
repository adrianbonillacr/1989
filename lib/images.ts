/**
 * Mapa de imágenes del sitio.
 *
 * Las fotos provienen de la carpeta "Insumos - Assets" (selección optimizada
 * a JPG ≤2560px). Para reemplazar cualquier imagen basta con sobrescribir el
 * archivo en /public respetando el nombre. Si un archivo no existe, el sitio
 * muestra un placeholder de color sólido de marca.
 *
 * Los encabezados (heros) y banners no llevan fotografía: son colores sólidos.
 */

export type ImageTone = "earth" | "stone" | "mist" | "charcoal" | "ink";

export const siteImages = {
  // Imágenes de las dos cards principales del home ("Dos caminos")
  hero: {
    desdeCero: "/images/hero/proyecto-desde-cero.jpg", // Amarea — piscina y patio
    yaConstruido: "/images/hero/proyecto-ya-construido.jpg", // Kahwi — pabellón social (foto real)
  },
  logo: {
    white: "/images/logo/icono-white.png",
    ink: "/images/logo/icono-ink.png",
  },
};

/**
 * Retrato del equipo (Quiénes Somos) — 3:4 vertical, 1200×1600.
 * El `slug` es el de cada ficha en `about.teamMembers` del diccionario.
 */
export const teamPortrait = (slug: string) => `/images/equipo/${slug}.jpg`;

/**
 * Galería de Budaya (equipamiento y ambientación): fotos entregadas por el
 * cliente en "Insumos - Assets/Assets - Budaya", optimizadas a JPG ≤2000px.
 */
export const budayaGallery = Array.from(
  { length: 34 },
  (_, i) => `/images/budaya/${String(i + 1).padStart(2, "0")}.jpg`,
);

/** Cantidad de imágenes reales disponibles por galería de proyecto. */
const projectGalleryCounts: Record<string, number> = {
  "tree-lodge": 8,
  cafetal: 9,
  "diciembre-seis": 9,
  kahwi: 10,
  amarea: 10,
  edica: 2,
  "flex-center": 2,
};

export function projectImages(slug: string) {
  const count = projectGalleryCounts[slug] ?? 5;
  return {
    cover: `/images/proyectos/${slug}/cover.jpg`,
    gallery: Array.from(
      { length: count },
      (_, i) => `/images/proyectos/${slug}/${String(i + 1).padStart(2, "0")}.jpg`,
    ),
  };
}
