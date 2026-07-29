/**
 * Firma visual del sitio: punto relleno + línea horizontal de 1px, seguidos
 * del título de sección y su bajada. Usar en todas las secciones.
 *
 * Jerarquía: `eyebrow` es el TÍTULO grande de la sección y `title` es la
 * bajada pequeña que lo acompaña. Los nombres de las props se conservan para
 * no tocar las llamadas existentes; `titleClassName` y `titleSizeClassName`
 * siguen aplicando al texto grande.
 */

type SectionHeaderProps = {
  /** Título grande de la sección. */
  eyebrow: string;
  /** Bajada pequeña bajo el título. */
  title?: string;
  /** Sobre fondos oscuros: título en blanco, bajada en mist. */
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
  /** Clases extra para el título grande (ej. max-w). */
  titleClassName?: string;
  /** Reemplaza el tamaño de fuente por defecto del título (ej. etapas). */
  titleSizeClassName?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  dark,
  align = "left",
  className,
  titleClassName,
  titleSizeClassName = "text-[clamp(1.75rem,3.4vw,2.7rem)]",
}: SectionHeaderProps) {
  const dotColor = dark ? "bg-stone" : "bg-earth";
  const titleColor = dark ? "text-white" : "text-ink";
  const subtitleColor = dark ? "text-mist" : "text-charcoal";
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : ""} ${className ?? ""}`}>
      <div className="flex items-center gap-4">
        {centered && <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />}
        <span
          aria-hidden="true"
          className={`h-[0.4rem] w-[0.4rem] shrink-0 rounded-full ${dotColor}`}
        />
        <span className="h-px flex-1 bg-stone/40" aria-hidden="true" />
      </div>
      <h2
        className={`mt-7 max-w-[24ch] ${titleSizeClassName} font-semibold leading-[1.15] ${titleColor} ${
          centered ? "mx-auto" : ""
        } ${titleClassName ?? ""}`}
      >
        {eyebrow}
      </h2>
      {title && (
        <p
          className={`mt-5 max-w-[52ch] text-[0.95rem] font-light leading-[1.7] ${subtitleColor} ${
            centered ? "mx-auto" : ""
          } md:text-base`}
        >
          {title}
        </p>
      )}
    </div>
  );
}
