/**
 * Íconos de línea para el roadmap "Del análisis a la acción" y los tres
 * puntos de partida. Trazo fino y geometría recta, en línea con el lenguaje
 * editorial del sitio (sin relleno, heredan color con currentColor).
 */

export type RoadmapIconName =
  | "scope"
  | "proposal"
  | "plan"
  | "start"
  | "search"
  | "property"
  | "built";

const paths: Record<RoadmapIconName, React.ReactNode> = {
  // Definimos el alcance — marcas de encuadre con el punto de foco al centro
  scope: (
    <>
      <path d="M3 8V3h5" />
      <path d="M16 3h5v5" />
      <path d="M21 16v5h-5" />
      <path d="M8 21H3v-5" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  // Elaboramos la propuesta — documento con esquina doblada
  proposal: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 12.5h7" />
      <path d="M8.5 16h7" />
    </>
  ),
  // Planificamos la implementación — etapas sobre una línea de tiempo
  plan: (
    <>
      <path d="M3 4v16" />
      <path d="M6 7h9" />
      <path d="M6 12h13" />
      <path d="M6 17h6" />
      <circle cx="15" cy="7" r="1.4" />
      <circle cx="19" cy="12" r="1.4" />
      <circle cx="12" cy="17" r="1.4" />
    </>
  ),
  // Iniciamos el desarrollo — el proyecto arranca y avanza
  start: (
    <>
      <path d="M4 4v16" />
      <path d="M8 12h11" />
      <path d="M15 8l4 4-4 4" />
    </>
  ),
  // Aún no existe una propiedad — búsqueda del activo
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M15.8 15.8L21 21" />
      <path d="M8.5 12.5l2 2 4-4.5" />
    </>
  ),
  // Ya existe una propiedad — terreno delimitado con su punto
  property: (
    <>
      <path d="M3 7.5L12 4l9 3.5v9L12 20l-9-3.5z" />
      <circle cx="12" cy="11.5" r="2" />
      <path d="M12 13.5V17" />
    </>
  ),
  // Proyecto construido — edificación en operación
  built: (
    <>
      <path d="M4 21V9l7-5 7 5v12" />
      <path d="M2.5 21h19" />
      <path d="M8.5 21v-5h5v5" />
      <path d="M8.5 11.5h2M13 11.5h2" />
    </>
  ),
};

export default function RoadmapIcon({
  name,
  className = "h-6 w-6",
}: {
  name: RoadmapIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
