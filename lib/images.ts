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
 *
 * Se guardan las medidas reales de cada archivo porque la galería las muestra
 * con su proporción original —recortarlas todas a un mismo formato mutilaba
 * las horizontales— y porque así el navegador reserva el alto correcto y la
 * página no salta mientras cargan.
 */
export type GalleryImage = { src: string; width: number; height: number };

export const budayaGallery: GalleryImage[] = [
  { src: "/images/budaya/01.jpg", width: 960, height: 1280 },
  { src: "/images/budaya/02.jpg", width: 960, height: 1280 },
  { src: "/images/budaya/03.jpg", width: 960, height: 1280 },
  { src: "/images/budaya/04.jpg", width: 853, height: 1280 },
  { src: "/images/budaya/05.jpg", width: 820, height: 1280 },
  { src: "/images/budaya/06.jpg", width: 960, height: 1280 },
  { src: "/images/budaya/07.jpg", width: 1086, height: 1448 },
  { src: "/images/budaya/08.jpg", width: 1024, height: 1280 },
  { src: "/images/budaya/09.jpg", width: 1280, height: 960 },
  { src: "/images/budaya/10.jpg", width: 1280, height: 851 },
  { src: "/images/budaya/11.jpg", width: 1280, height: 960 },
  { src: "/images/budaya/12.jpg", width: 960, height: 1280 },
  { src: "/images/budaya/13.jpg", width: 921, height: 1280 },
  { src: "/images/budaya/14.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/15.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/16.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/17.jpg", width: 907, height: 1280 },
  { src: "/images/budaya/18.jpg", width: 1280, height: 853 },
  { src: "/images/budaya/19.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/20.jpg", width: 692, height: 1280 },
  { src: "/images/budaya/21.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/22.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/23.jpg", width: 904, height: 1280 },
  { src: "/images/budaya/24.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/25.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/26.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/27.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/28.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/29.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/30.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/31.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/32.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/33.jpg", width: 851, height: 1280 },
  { src: "/images/budaya/34.jpg", width: 851, height: 1280 },
];

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
