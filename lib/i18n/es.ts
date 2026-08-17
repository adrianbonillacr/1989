/**
 * Diccionario ESPAÑOL — fuente de verdad de todo el contenido del sitio.
 * El diccionario inglés (en.ts) replica exactamente esta estructura.
 */

/**
 * Ficha de una disciplina. `detail` alimenta la landing de Servicios y sale
 * del dossier «Proyecto nuevo · 19°89 Arquitectura» (Insumos - Assets):
 * intro, bloques con etiqueta propia (Alcances posibles, Beneficios,
 * Incluye, Entregables…), consideraciones e inversión.
 *
 * Los honorarios concretos del dossier no se publican: como en el resto del
 * sitio, la inversión se remite a la propuesta.
 */
export type DisciplineEntry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stage: string;
  newOnly: boolean;
  detail: {
    text: string[];
    blocks: { label: string; items: string[] }[];
    considerations: string[];
    cost: string;
  };
};

const disciplines: DisciplineEntry[] = [
  {
    slug: "seleccion-de-activos",
    name: "Selección de activos",
    tagline: "La mejor inversión comienza con la propiedad correcta.",
    description:
      "Evaluamos oportunidades inmobiliarias antes de comprar: ubicación, contexto, potencial de desarrollo y riesgos, para que la inversión comience con la propiedad correcta.",
    stage: "asesoria",
    newOnly: true,
    detail: {
      text: [
        "Cuando el cliente aún no ha adquirido una propiedad, esta disciplina permite evaluar oportunidades alineadas con los objetivos, el presupuesto y la visión del proyecto.",
        "Nuestro objetivo es aportar criterio y análisis para facilitar la toma de decisiones antes de invertir.",
      ],
      blocks: [
        {
          label: "Objetivos",
          items: [
            "Comprender el perfil de inversión.",
            "Identificar oportunidades alineadas con el proyecto.",
            "Evaluar el potencial general de los activos.",
            "Identificar riesgos y oportunidades.",
            "Orientar la toma de decisiones.",
          ],
        },
        {
          label: "Evaluamos",
          items: [
            "Ubicación y contexto.",
            "Potencial de desarrollo.",
            "Condiciones generales del activo.",
            "Oportunidades y limitaciones.",
            "Compatibilidad con los objetivos del proyecto.",
          ],
        },
        {
          label: "Incluye",
          items: [
            "Reunión estratégica inicial.",
            "Definición del perfil de inversión.",
            "Evaluación de oportunidades seleccionadas.",
            "Análisis general del potencial del activo.",
            "Recomendaciones estratégicas.",
            "Reunión de presentación de resultados.",
          ],
        },
        {
          label: "Entregables",
          items: [
            "Informe ejecutivo.",
            "Evaluación de las oportunidades analizadas.",
            "Recomendaciones estratégicas para la toma de decisiones.",
          ],
        },
      ],
      considerations: [
        "En caso de continuar el desarrollo del proyecto con 19.89 Arquitectura, los honorarios podrán reconocerse parcial o totalmente dentro del contrato integral, según las condiciones acordadas.",
      ],
      cost: "Se detalla en la propuesta, según el alcance.",
    },
  },
  {
    slug: "diagnostico-estrategico",
    name: "Diagnóstico estratégico",
    tagline: "Medimos primero. Invertimos después.",
    description:
      "Analizamos el estado actual de un proyecto existente para identificar oportunidades, prioridades y una ruta clara de desarrollo antes de invertir.",
    stage: "asesoria",
    newOnly: false,
    detail: {
      text: [
        "Cuando la propiedad ya existe o el proyecto ya opera, el punto de partida es entenderlo. Antes de invertir, remodelar o implementar nuevas disciplinas es fundamental comprender cómo funciona, cuáles son sus fortalezas y dónde están las mayores oportunidades de mejora.",
        "El resultado permite entender dónde invertir primero y qué acciones pueden generar mayor impacto.",
      ],
      blocks: [
        {
          label: "Qué buscamos durante la consultoría",
          items: [
            "Comprender el funcionamiento general del proyecto.",
            "Identificar fortalezas y oportunidades de mejora.",
            "Detectar aspectos que afectan la experiencia del usuario o huésped.",
            "Establecer prioridades de intervención.",
            "Orientar futuras inversiones mediante una estrategia clara.",
          ],
        },
        {
          label: "Entregables",
          items: [
            "Índice de Valor 19.89 con las cinco dimensiones medidas.",
            "Hoja de ruta con prioridades de intervención.",
            "Recomendaciones por etapas, según urgencia, impacto y presupuesto.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Claridad sobre dónde invertir primero.",
            "Inversión ordenada por prioridades.",
            "Menor riesgo de intervenciones de bajo impacto.",
          ],
        },
      ],
      considerations: [
        "La contratación de las disciplinas recomendadas puede realizarse de forma integral o por etapas, según las prioridades y objetivos definidos.",
      ],
      cost: "Se detalla en la propuesta, según el alcance del proyecto.",
    },
  },
  {
    slug: "analisis-financiero",
    name: "Análisis financiero estratégico",
    tagline: "Invertir mejor comienza por comprender el potencial del proyecto.",
    description:
      "Orientamos la inversión con criterio financiero: dónde existe mayor potencial de valor, cómo priorizar recursos y cómo sostener la rentabilidad del proyecto.",
    stage: "desarrollo",
    newOnly: true,
    detail: {
      text: [
        "Esta disciplina permite orientar las inversiones, establecer prioridades y evaluar dónde existen mayores oportunidades para generar valor.",
      ],
      blocks: [
        {
          label: "Incluye",
          items: ["Evaluación general del potencial del proyecto (rentabilidad)."],
        },
        {
          label: "Beneficios",
          items: [
            "Mayor claridad para invertir.",
            "Priorización de recursos.",
            "Mejor toma de decisiones.",
          ],
        },
      ],
      considerations: [
        "Análisis de carácter consultivo, orientado a encontrar la rentabilidad del proyecto.",
      ],
      cost: "Incluido dentro del servicio de anteproyecto.",
    },
  },
  {
    slug: "arquitectura",
    name: "Arquitectura",
    tagline: "Diseñar con propósito.",
    description:
      "Diseño con fundamento estratégico: anteproyecto, desarrollo, remodelaciones y supervisión, donde cada decisión espacial responde también a una decisión de inversión.",
    stage: "desarrollo",
    newOnly: true,
    detail: {
      text: [
        "La arquitectura define cómo funciona un espacio, cómo se experimenta y cómo responde a las necesidades del proyecto.",
        "Cada propuesta arquitectónica se desarrolla a partir del análisis estratégico previo, buscando mejorar la funcionalidad, fortalecer la experiencia del usuario y contribuir al valor general del proyecto.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Estudios preliminares.",
            "Anteproyecto arquitectónico.",
            "Remodelaciones y optimización de espacios.",
            "Modelado 3D.",
            "Planos y especificaciones técnicas.",
            "Supervisión arquitectónica (opcional).",
            "Construcción mediante aliados estratégicos (opcional).",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Mejor aprovechamiento del espacio.",
            "Mayor funcionalidad.",
            "Mejor experiencia del usuario.",
            "Incremento del valor percibido.",
          ],
        },
      ],
      considerations: [
        "El alcance dependerá de las necesidades y oportunidades identificadas durante el diagnóstico.",
        "La construcción, los materiales, los contratistas, los permisos y los trámites se cotizan por separado.",
      ],
      cost: "Según el alcance del proyecto; se cotiza por separado.",
    },
  },
  {
    slug: "diseno-de-iluminacion",
    name: "Diseño de iluminación",
    tagline: "La luz también diseña la experiencia.",
    description:
      "Definimos atmósferas y criterios lumínicos que transforman la experiencia del espacio y ponen en valor la arquitectura.",
    stage: "desarrollo",
    newOnly: false,
    detail: {
      text: [
        "La iluminación influye directamente en la percepción, la funcionalidad y la atmósfera de un espacio.",
        "Cada propuesta lumínica se desarrolla de forma estratégica para complementar la arquitectura, fortalecer la experiencia del usuario y mejorar la percepción de calidad del proyecto.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Estrategia y conceptualización lumínica.",
            "Diseño de ambientes y atmósferas.",
            "Definición de criterios de iluminación.",
            "Selección de luminarias y soluciones complementarias.",
            "Recomendaciones para la implementación del proyecto.",
            "Acompañamiento estratégico durante la ejecución (opcional).",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Ambientes más atractivos.",
            "Mayor confort visual.",
            "Incremento del valor percibido.",
            "Optimización energética.",
            "Mejor experiencia del usuario.",
          ],
        },
      ],
      considerations: [
        "La compra, el suministro y la instalación de luminarias no están incluidos y se cotizan por separado.",
      ],
      cost: "Según el alcance y la complejidad del proyecto.",
    },
  },
  {
    slug: "diseno-de-interiores",
    name: "Diseño de interiores",
    tagline: "Los espacios hablan antes que las personas.",
    description:
      "Construimos la narrativa espacial del proyecto: materiales, acabados y curaduría que dan carácter y coherencia a cada ambiente.",
    stage: "desarrollo",
    newOnly: false,
    detail: {
      text: [
        "El diseño de interiores transforma espacios funcionales en experiencias coherentes con la identidad y los objetivos del proyecto.",
        "Cada decisión busca fortalecer la experiencia del usuario, mejorar la percepción de calidad y contribuir al valor general del inmueble.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Conceptualización y narrativa del proyecto.",
            "Diseño de interiores y distribución espacial.",
            "Moodboards y desarrollo de estilo.",
            "Modelado 3D y renders.",
            "Selección de materiales, acabados y colores.",
            "Curaduría de mobiliario, decoración y accesorios.",
            "Acompañamiento durante la implementación del concepto.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Mayor coherencia entre identidad, diseño y experiencia.",
            "Espacios con personalidad propia.",
            "Mejor experiencia para usuarios y huéspedes.",
            "Incremento del valor percibido.",
            "Mayor diferenciación competitiva.",
            "Mayor atractivo para venta, renta o comercialización.",
          ],
        },
      ],
      considerations: [
        "La compra de materiales, acabados, mobiliario, accesorios y elementos decorativos se cotiza por separado.",
      ],
      cost: "Según el alcance y la complejidad del proyecto.",
    },
  },
  {
    slug: "equipamiento-y-ambientacion",
    name: "Equipamiento y ambientación",
    tagline: "Los espacios se recuerdan por la experiencia que generan.",
    description:
      "Curaduría de mobiliario, piezas y styling que completan la experiencia y refuerzan la identidad del proyecto.",
    stage: "desarrollo",
    newOnly: false,
    detail: {
      text: [
        "El equipamiento y la ambientación son el paso final para transformar un proyecto en un espacio completo, funcional y coherente con su identidad.",
        "Desarrollamos una propuesta integral que contempla la selección de mobiliario, decoración, textiles, accesorios y elementos de ambientación, alineada con el concepto arquitectónico y las necesidades del usuario.",
        "Como parte de esta disciplina incorporamos Budaya, nuestra marca especializada en equipamiento y ambientación, para proyectos residenciales, comerciales y de hospitalidad bajo una misma filosofía de diseño.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Selección integral de mobiliario y decoración.",
            "Equipamiento para proyectos residenciales, comerciales y hoteleros.",
            "Ambientación de espacios interiores y exteriores.",
            "Selección de textiles, ropa de cama, paños y accesorios.",
            "Integración de productos de Budaya.",
            "Acompañamiento durante la adquisición y la implementación.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Espacios coherentes con la identidad del proyecto.",
            "Mayor confort y funcionalidad para el usuario.",
            "Incremento del valor percibido del desarrollo.",
            "Mejor experiencia para residentes, huéspedes o clientes.",
            "Optimización del presupuesto mediante una selección estratégica de equipamiento.",
          ],
        },
      ],
      considerations: [
        "El mobiliario, la decoración, los textiles, el transporte y la instalación se cotizan de forma independiente según el alcance del proyecto.",
        "Los tiempos de entrega dependerán de la disponibilidad, la fabricación o la importación de cada producto.",
      ],
      cost: "Según el alcance, el nivel de equipamiento y la complejidad del proyecto.",
    },
  },
  {
    slug: "proteccion-de-identidad",
    name: "Protección de identidad",
    tagline: "Una marca valiosa también debe estar protegida.",
    description:
      "Protegemos y ordenamos la marca del proyecto: identidad visual, registro y posicionamiento para que el activo crezca con respaldo.",
    stage: "identidad",
    newOnly: false,
    detail: {
      text: [
        "La identidad de un proyecto no solo se construye: también debe resguardarse.",
        "Esta disciplina protege legalmente los elementos que conforman la identidad de marca, fortaleciendo su seguridad jurídica y preservando su valor como activo estratégico.",
        "Una protección adecuada reduce riesgos, refuerza la exclusividad y da mayor respaldo al crecimiento futuro de la marca.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Protección y derecho exclusivo de uso de la marca.",
            "Protección frente a terceros.",
            "Posicionamiento.",
            "Identidad visual.",
            "Comunicación de marca.",
            "La marca como activo estratégico.",
            "Proyección internacional de la marca.",
          ],
        },
        {
          label: "Incluye",
          items: [
            "Reunión inicial.",
            "Análisis preliminar.",
            "Solicitud y presentación.",
            "Clasificación de Niza.",
            "Publicación del edicto.",
            "Acompañamiento durante todo el proceso.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Mayor diferenciación.",
            "Comunicación más consistente.",
            "Mayor valor percibido.",
            "Conexión más sólida con la audiencia.",
            "Bases claras para futuras acciones de posicionamiento.",
          ],
        },
      ],
      considerations: [
        "El alcance no incluye el trámite legal en caso de que se presenten oposiciones a la solicitud de inscripción.",
      ],
      cost: "Según el alcance y la complejidad del proyecto.",
    },
  },
  {
    slug: "fotografia-profesional",
    name: "Fotografía profesional",
    tagline: "La primera impresión ocurre antes de la primera visita.",
    description:
      "Fotografía arquitectónica y hotelera con dirección visual, para que el proyecto se vea como lo que es y comunique su valor.",
    stage: "identidad",
    newOnly: false,
    detail: {
      text: [
        "En la mayoría de los casos las personas conocen un proyecto a través de una imagen mucho antes de experimentarlo físicamente.",
        "Por eso la fotografía profesional no busca únicamente documentar espacios: su objetivo es comunicar experiencias, destacar atributos y transmitir el valor del proyecto. No fotografiamos espacios; fotografiamos la experiencia de estar allí.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Fotografía arquitectónica.",
            "Fotografía de interiores.",
            "Fotografía hotelera y turística.",
            "Dirección y producción fotográfica.",
            "Edición profesional de imágenes.",
          ],
        },
        {
          label: "Paquetes",
          items: [
            "Esencial — para estudios compactos: 15 imágenes.",
            "Atmósfera — para casas y amenidades: 25 imágenes.",
            "Visión — para villas, alquiler vacacional y alta arquitectura: 40 imágenes.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Mayor valor percibido.",
            "Mejor presentación del proyecto.",
            "Material visual profesional.",
            "Coherencia entre proyecto, identidad y comunicación.",
          ],
        },
      ],
      considerations: [
        "Los traslados dentro de la GAM están incluidos. Para proyectos fuera de esta zona, los costos de desplazamiento se cotizan por separado.",
        "La producción fotográfica se realiza una vez finalizadas las intervenciones físicas del proyecto, para que las imágenes reflejen su mejor versión.",
      ],
      cost: "La inversión de cada paquete se detalla en la propuesta.",
    },
  },
  {
    slug: "marketing-digital",
    name: "Marketing digital",
    tagline: "Un gran proyecto necesita una estrategia capaz de hacerlo visible.",
    description:
      "Estrategia de comunicación, contenido y campañas para hacer visible el proyecto y conectarlo con su mercado.",
    stage: "identidad",
    newOnly: false,
    detail: {
      text: [
        "No basta con crear un excelente espacio: el mercado necesita conocerlo.",
        "El marketing digital comunica el valor del proyecto, fortalece su posicionamiento y lo conecta con la audiencia adecuada. Más que generar publicaciones, construimos una comunicación coherente con la identidad y la experiencia que el proyecto representa.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Estrategia de comunicación digital.",
            "Planificación de contenido.",
            "Posicionamiento de marca.",
            "Gestión de redes sociales.",
            "Campañas de comunicación digital.",
            "Análisis y optimización estratégica.",
          ],
        },
        {
          label: "Paquetes",
          items: [
            "Start — para proyectos que inician su presencia digital.",
            "Growth — para proyectos que buscan consolidar su presencia.",
            "Signature — la solución integral de comunicación.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Mayor visibilidad.",
            "Comunicación más coherente.",
            "Fortalecimiento de marca.",
            "Mayor confianza y reconocimiento.",
            "Mejor posicionamiento digital.",
          ],
        },
      ],
      considerations: [
        "Los traslados dentro de la GAM están incluidos. Para proyectos fuera de esta zona, los costos de desplazamiento se cotizan por separado.",
      ],
      cost: "La inversión de cada paquete se detalla en la propuesta.",
    },
  },
  {
    slug: "automatizacion-y-movilidad",
    name: "Automatización y Movilidad",
    tagline: "Tecnología que mejora la experiencia de hoy y prepara los proyectos para el futuro.",
    description:
      "Tecnología que simplifica la operación y mejora la experiencia: automatización, control inteligente y movilidad eléctrica que suman valor al proyecto.",
    stage: "tecnologia",
    newOnly: false,
    detail: {
      text: [
        "Las mejores soluciones tecnológicas son las que pasan desapercibidas: no añaden complejidad, hacen que cada espacio funcione de forma más eficiente, cómoda e intuitiva.",
        "La automatización y la movilidad eléctrica permiten crear espacios preparados para las nuevas formas de habitar, trabajar y desplazarse, siempre de acuerdo con las características y los objetivos de cada desarrollo.",
      ],
      blocks: [
        {
          label: "Alcances posibles",
          items: [
            "Sistemas de automatización para iluminación, climatización y otros servicios.",
            "Integración de soluciones para hogares y edificios inteligentes.",
            "Infraestructura para carga de vehículos eléctricos.",
            "Evaluación de eficiencia energética aplicada a los sistemas tecnológicos.",
            "Recomendaciones para optimizar la operación y el mantenimiento del proyecto.",
            "Asesoría en la selección de tecnologías.",
          ],
        },
        {
          label: "Beneficios",
          items: [
            "Mayor confort y funcionalidad.",
            "Optimización de la operación del proyecto.",
            "Incremento de la eficiencia energética.",
            "Preparación del proyecto para nuevas tecnologías.",
            "Mayor valor percibido y competitividad.",
            "Fortalecimiento del valor del activo a largo plazo.",
          ],
        },
      ],
      considerations: [
        "Las soluciones recomendadas dependerán de las características, el alcance y las necesidades específicas de cada proyecto.",
        "La adquisición de equipos, sistemas, licencias, infraestructura, instalación especializada y puesta en marcha se cotizan de forma independiente.",
      ],
      cost: "Según el alcance y la complejidad del proyecto.",
    },
  },
];

export const es = {
  meta: {
    homeTitle: "1989 Arquitectura | Arquitectura e inversión con valor — Costa Rica",
    homeDescription:
      "Firma especializada en el desarrollo estratégico de proyectos inmobiliarios en Costa Rica. Analizamos, planificamos, diseñamos y posicionamos proyectos para convertir propiedades en activos con valor a largo plazo.",
  },

  common: {
    skipToContent: "Saltar al contenido",
    claim: {
      part1: "Descubrimos el potencial.",
      part2: "Diseñamos la estrategia.",
      part3: "Creamos valor.",
    },
    scheduleMeeting: "Agendar una reunión estratégica",
    discover: "Descubrir",
  },

  nav: {
    home: "Inicio",
    newProject: "Proyecto Nuevo",
    builtProject: "Proyecto Construido",
    strategy: "Estrategia 19.89",
    services: "Servicios",
    budaya: "Budaya",
    portfolio: "Portafolio",
    about: "Quiénes Somos",
    contact: "Contacto",
    cta: "Agendar reunión",
    logoAria: "19.89 Arquitectura — Inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    // Submenú de Servicios: los tres puntos de partida de `scenarios`,
    // que es de donde salen también sus destinos.
    servicesMenu: {
      label: "Puntos de partida",
      noProperty: "Aún no existe una propiedad",
      hasProperty: "Ya existe una propiedad",
      running: "Proyecto en funcionamiento",
      allServices: "Todos Nuestros Servicios",
      open: "Desplegar servicios",
    },
    menuLabel: "Menú de navegación",
    mainNavLabel: "Principal",
    langSwitchLabel: "Idioma",
  },

  footer: {
    descriptor: "Estudio de Arquitectura — Costa Rica",
    services: "Servicios",
    studio: "Estudio",
    contact: "Contacto",
    tagline: "Arquitectura e inversión con valor",
    servicesLabel: "Servicios",
    studioLabel: "Estudio",
  },

  categories: {
    arquitectura: "Arquitectura",
    iluminacion: "Iluminación",
  },

  home: {
    heroEyebrow: "Estudio de arquitectura — Costa Rica",
    heroTitle: "Arquitectura, Luz y Hospitalidad.",
    heroSubtitle:
      "Los espacios más memorables no se recuerdan únicamente por su arquitectura. Se recuerdan por cómo hicieron sentir a las personas.",
    // Sin uso desde 05/08/2026: se retiraron del inicio las secciones
    // "Dos caminos", "Estrategia 19.89" (con "¿Por qué comenzar…?") y
    // "El Valor de 19.89". Los textos se conservan por si vuelven.
    pathsEyebrow: "Dos caminos para crear valor",
    pathsTitle:
      "Cada proyecto está en un momento distinto. Por eso trabajamos en dos rutas claras.",
    path1Tag: "CAMINO 01",
    path1Title: "Proyecto Nuevo",
    path1Tagline: "La mejor inversión comienza con la propiedad correcta.",
    path1Description:
      "Para quienes quieren iniciar un proyecto inmobiliario con claridad desde las primeras decisiones: selección del activo, estrategia, diseño, desarrollo, identidad y posicionamiento.",
    path1Link: "Ver proceso",
    path2Tag: "CAMINO 02",
    path2Title: "Proyecto Construido",
    path2Tagline: "Medimos primero. Invertimos después.",
    path2Description:
      "Para quienes ya tienen una propiedad o proyecto en funcionamiento y quieren identificar oportunidades de mejora, priorizar inversiones y aumentar su valor.",
    path2Link: "Ver diagnóstico",
    strategyEyebrow: "Estrategia 19.89",
    strategyTitle: "Una forma de trabajar para tomar mejores decisiones.",
    strategyText:
      "La Estrategia 19.89 fue desarrollada para acompañar proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación. Su objetivo es ayudar a propietarios e inversionistas a tomar mejores decisiones, establecer prioridades y desarrollar proyectos capaces de diferenciarse y generar valor a largo plazo.",
    // ¿Por qué comenzar con una estrategia? (PDF p4)
    whyEyebrow: "¿Por qué comenzar con una estrategia?",
    whyTitle:
      "Las decisiones más importantes de un proyecto suelen tomarse antes del primer plano.",
    whyText1:
      "La elección de una propiedad, la distribución de la inversión, la definición del concepto o la forma en que el proyecto llegará al mercado son decisiones que determinan gran parte de su éxito.",
    whyText2:
      "Sin una estrategia clara pueden surgir inversiones de bajo impacto, oportunidades desaprovechadas y proyectos que no logran desarrollar todo su potencial.",
    whyText3:
      "La Estrategia 19.89 nace para orientar esas decisiones desde el inicio y transformar cada inversión en una oportunidad para generar mayor valor.",

    // — fin del bloque sin uso —

    // ¿Cómo trabajamos? (PDF p5)
    processEyebrow: "¿Cómo trabajamos?",
    processTitle:
      "Un proceso que acompaña de la primera decisión a la consolidación.",
    processIntro:
      "Nuestro proceso acompaña al cliente desde la primera decisión hasta la consolidación del proyecto, integrando análisis, diseño, experiencia y posicionamiento bajo una misma visión estratégica.",

    // ¿Qué analizamos? (PDF p6)
    analyzeEyebrow: "¿Qué analizamos?",
    analyzeTitle: "Cada proyecto es diferente.",
    analyzeText:
      "Por eso evaluamos únicamente aquellos aspectos capaces de generar valor y contribuir al cumplimiento de sus objetivos. Entre ellos:",
    analyzeNote:
      "Más que evaluar disciplinas de forma independiente, buscamos comprender cómo trabajan en conjunto para fortalecer el proyecto y maximizar su potencial desde el inicio.",

    // El Valor de 19.89 (PDF p7) — sin uso desde 05/08/2026 (sección retirada)
    valueEyebrow: "El Valor de 19.89",
    valueTitle:
      "En 19.89 creemos que los mejores proyectos comienzan mucho antes del diseño.",
    valueText1:
      "Comienzan comprendiendo el potencial de la inversión, definiendo una estrategia clara y orientando cada decisión hacia la generación de valor.",
    valueText2:
      "Por eso acompañamos a nuestros clientes desde las primeras etapas del proyecto hasta su consolidación, integrando análisis, diseño, experiencia y posicionamiento bajo una misma visión estratégica.",
    valueText3:
      "Nuestro compromiso es aportar criterio, dirección y una visión integral para desarrollar proyectos con identidad, diferenciación y valor a largo plazo.",

    // Roadmap · Del análisis a la acción (PDF p25-26)
    roadmapEyebrow: "Del análisis a la acción",
    roadmapTitle: "El siguiente paso es convertir la estrategia en resultados.",
    roadmapIntro:
      "Ahora que conocemos los objetivos del proyecto y hemos definido una estrategia para su desarrollo, el siguiente paso consiste en planificar su implementación de forma ordenada y alineada con las prioridades establecidas.",
    roadmapNote:
      "Cada proyecto es diferente. Por ello, el alcance, las disciplinas, el cronograma y la inversión se estructuran de manera personalizada, asegurando que cada decisión contribuya a generar el mayor valor posible.",
    scenariosEyebrow: "Dónde empieza cada proyecto",
    scenariosTitle:
      "El punto de partida define el recorrido. Estas son las tres situaciones posibles.",
    scenarioStartLabel: "Punto de partida",
    scenarioFirstStepLabel: "Primer paso",
    scenarioRouteLabel: "Recorrido",
    /** Pie de cada tarjeta: lleva al servicio con el que arranca el escenario. */
    scenarioLink: "Ver servicio",
    considerationsLabel: "Consideraciones",
    considerationsIntro:
      "Las propuestas desarrolladas por 19.89 se estructuran de forma personalizada para responder a las características y objetivos de cada proyecto. Por esta razón:",
    disciplinesEyebrow: "Servicios",
    disciplinesTitle: "Cada proyecto activa solo los que necesita, bajo una misma visión.",
    disciplinesNote:
      "No operan de forma aislada: son herramientas que se integran dentro de la estrategia según las necesidades de cada proyecto.",
    disciplinesLink: "Ver todos los servicios",
    portfolioEyebrow: "Portafolio destacado",
    architectureLabel: "Arquitectura",
    lightingLabel: "Iluminación",
    seeFullPortfolio: "Ver portafolio completo",
  },

  // Proceso de la Estrategia 19.89 (PDF v2, p5 · ¿Cómo trabajamos?)
  processSteps: [
    { number: "01", title: "Descubrimos", description: "Comprendemos los objetivos del proyecto e identificamos su potencial." },
    { number: "02", title: "Evaluamos", description: "Analizamos fortalezas, oportunidades y prioridades para orientar la toma de decisiones." },
    { number: "03", title: "Planificamos", description: "Desarrollamos una hoja de ruta estratégica que define el camino para la evolución del proyecto." },
    { number: "04", title: "Desarrollamos", description: "Implementamos las disciplinas necesarias para transformar la estrategia en resultados." },
    { number: "05", title: "Posicionamos", description: "Construimos una identidad sólida y una presencia comercial alineada con el valor del proyecto." },
    { number: "06", title: "Evolucionamos", description: "Acompañamos el crecimiento del proyecto con una visión de largo plazo y nuevas oportunidades de mejora." },
  ],

  // Aspectos que se evalúan en la estrategia (PDF v2, p6 · ¿Qué analizamos?)
  analyzeItems: [
    "Selección de activos (cuando aún no existe una propiedad).",
    "Análisis financiero estratégico.",
    "Arquitectura.",
    "Diseño de iluminación.",
    "Diseño de interiores.",
    "Equipamiento y ambientación.",
    "Protección de identidad.",
    "Fotografía profesional.",
    "Marketing digital.",
    "Automatización y movilidad eléctrica.",
  ],

  // Roadmap de implementación (PDF v2, p26 · Del análisis a la acción).
  // `icon` referencia el set de íconos de components/RoadmapIcon.tsx
  roadmapSteps: [
    { number: "01", icon: "scope", title: "Definimos el alcance", description: "Seleccionamos las disciplinas y servicios que mejor responden a las necesidades y objetivos del proyecto." },
    { number: "02", icon: "proposal", title: "Elaboramos la propuesta", description: "Preparamos una propuesta técnica y económica con los alcances, entregables, honorarios y cronograma de trabajo." },
    { number: "03", icon: "plan", title: "Planificamos la implementación", description: "Organizamos el desarrollo del proyecto por etapas, estableciendo prioridades y una hoja de ruta clara para su ejecución." },
    { number: "04", icon: "start", title: "Iniciamos el desarrollo", description: "Una vez aprobada la propuesta, comenzamos la implementación de las disciplinas seleccionadas y acompañamos el proyecto durante su evolución." },
  ],

  // Los tres puntos de partida posibles (PDF v2, p9 · Opción A / Opción B).
  // Cada tarjeta lleva al servicio con el que arranca ese escenario, dentro
  // de la landing de Servicios (/disciplinas#<serviceSlug>).
  scenarios: [
    {
      icon: "search",
      tag: "Proyecto Nuevo",
      title: "Aún no existe una propiedad",
      start: "Hay intención de invertir, pero todavía no se ha comprado el activo.",
      firstStep: "Selección de activos",
      firstStepText:
        "Evaluamos oportunidades alineadas con los objetivos, presupuesto y visión del proyecto: ubicación, contexto, potencial de desarrollo y riesgos.",
      route: [
        "Selección de activos",
        "Desarrollo del proyecto",
        "Identidad y posicionamiento",
        "Automatización y movilidad",
      ],
      serviceSlug: "seleccion-de-activos",
    },
    {
      icon: "property",
      tag: "Proyecto Nuevo",
      title: "Ya existe una propiedad",
      start: "El activo ya fue adquirido y el proyecto está por definirse.",
      firstStep: "Desarrollo del proyecto",
      firstStepText:
        "Con el activo ya definido entramos directo al desarrollo: arquitectura, iluminación, interiores y equipamiento bajo una misma visión.",
      route: [
        "Desarrollo del proyecto",
        "Identidad y posicionamiento",
        "Automatización y movilidad",
      ],
      serviceSlug: "analisis-financiero",
    },
    {
      icon: "built",
      tag: "Proyecto Construido",
      title: "El proyecto ya está en funcionamiento",
      start: "La propiedad opera y se busca aumentar su valor y diferenciación.",
      firstStep: "Diagnóstico estratégico",
      firstStepText:
        "Analizamos el punto de partida y pasamos directo al desarrollo del proyecto con una hoja de ruta definida.",
      route: [
        "Diagnóstico estratégico",
        "Desarrollo del proyecto",
        "Roadmap de prioridades",
        "Evolución",
      ],
      serviceSlug: "diagnostico-estrategico",
    },
  ],

  // Condiciones de las propuestas (PDF v2, p26 · Consideraciones)
  considerations: [
    "Los servicios pueden contratarse de forma integral o por etapas.",
    "Los alcances, cronogramas e inversión se definirán según las necesidades específicas del proyecto.",
    "Los costos asociados a construcción, materiales, mobiliario, equipamiento, permisos, contratistas e instalaciones especializadas no forman parte de los honorarios profesionales, salvo que se indique expresamente en la propuesta.",
  ],

  homeDisciplines: [
    { name: "Asesoría de inversión", description: "Selección de activos y diagnóstico estratégico del punto de partida." },
    { name: "Análisis financiero estratégico", description: "Orienta la inversión hacia donde existe mayor potencial de valor." },
    { name: "Arquitectura", description: "Diseño, anteproyecto, remodelaciones y supervisión." },
    { name: "Diseño de iluminación", description: "Atmósferas, criterios lumínicos y selección de luminarias." },
    { name: "Diseño de interiores", description: "Narrativa espacial, materiales, acabados y curaduría." },
    { name: "Equipamiento y ambientación", description: "Curaduría de piezas, styling y ambientación." },
    { name: "Protección de identidad", description: "Protección de marca, identidad visual y posicionamiento." },
    { name: "Fotografía profesional", description: "Fotografía arquitectónica, hotelera y dirección visual." },
    { name: "Marketing digital", description: "Estrategia de comunicación, contenido y campañas." },
    { name: "Automatización y Movilidad", description: "Automatización, eficiencia y experiencia de uso." },
  ],

  stageLabels: {
    asesoria: "Etapa 1 · Asesoría de inversión",
    desarrollo: "Etapa 2 · Desarrollo del proyecto",
    identidad: "Etapa 3 · Identidad y posicionamiento",
    tecnologia: "Etapa 4 · Automatización y Movilidad",
  },

  // Disciplinas estratégicas. Selección de activos, Análisis financiero y
  // Arquitectura pertenecen únicamente al Proyecto Nuevo; el resto es
  // compartido por ambos caminos.
  pathTags: {
    both: "Proyecto Nuevo · Proyecto Construido",
    newOnly: "Solo Proyecto Nuevo",
  },
  // Fichas completas de cada disciplina (ver DisciplineEntry arriba).
  disciplines,

  fromZero: {
    metaTitle: "Proyecto Nuevo — La mejor inversión comienza con la propiedad correcta",
    metaDescription:
      "Un camino estratégico para iniciar proyectos inmobiliarios con claridad, criterio y visión de largo plazo: asesoría de inversión, desarrollo, identidad, automatización y movilidad.",
    heroEyebrow: "Proyecto Nuevo",
    heroTitle: "La mejor inversión comienza con la propiedad correcta.",
    heroSubtitle:
      "Un camino estratégico para iniciar proyectos inmobiliarios con claridad, criterio y visión de largo plazo.",
    introEyebrow: "El punto de partida",
    introText:
      "Las decisiones más importantes de un proyecto suelen tomarse antes del primer plano: elegir una propiedad, definir el concepto, ordenar la inversión y entender cómo el proyecto llegará al mercado. Sin una estrategia clara, pueden surgir inversiones de bajo impacto, oportunidades desaprovechadas y proyectos que no alcanzan su verdadero potencial.",
    stage1Eyebrow: "Etapa 1 · Asesoría de inversión",
    stage1Title: "Antes de diseñar, evaluamos el punto de partida.",
    stage1Text:
      "Esta etapa permite entender si el cliente ya cuenta con una propiedad o si necesita apoyo para seleccionar el activo correcto.",
    assetSelection: {
      option: "Aún no existe una propiedad",
      title: "Selección de activos",
      description:
        "Evaluamos oportunidades alineadas con los objetivos, presupuesto y visión del proyecto para facilitar la toma de decisiones antes de invertir.",
      includesLabel: "Qué incluye",
      bullets: [
        "Comprender el perfil de inversión.",
        "Identificar oportunidades alineadas con el proyecto.",
        "Evaluar ubicación, contexto y potencial de desarrollo.",
        "Identificar riesgos, limitaciones y oportunidades.",
        "Presentar recomendaciones estratégicas.",
      ],
      deliverablesLabel: "Entregables",
      deliverables: [
        "Informe ejecutivo.",
        "Evaluación de oportunidades analizadas.",
        "Recomendaciones para la toma de decisiones.",
      ],
      feeLabel: "Honorarios",
      feeNote:
        "Se detallan en la propuesta según el alcance. En caso de continuar el desarrollo del proyecto con 19.89 Arquitectura, podrán reconocerse parcial o totalmente dentro del contrato integral, según condiciones acordadas.",
    },
    // Sin uso desde 14/08/2026: se retiró de la Etapa 1 la tarjeta "Opción B ·
    // Diagnóstico estratégico". El texto se conserva por si vuelve.
    diagnosis: {
      option: "Opción B · Ya existe una propiedad",
      title: "Diagnóstico estratégico",
      description:
        "Cuando el cliente ya cuenta con una propiedad, pasamos al análisis estratégico del proyecto para identificar oportunidades, prioridades y ruta de desarrollo.",
      link: "Ver diagnóstico estratégico",
    },
    stage2Eyebrow: "Etapa 2 · Desarrollo del proyecto",
    stage2Title: "La estrategia se convierte en proyecto.",
    stage2Text:
      "Con una estrategia definida y una hoja de ruta clara, comienza la etapa de desarrollo. Cada disciplina se implementa según las necesidades del proyecto y las oportunidades identificadas durante el análisis.",
    // Las cinco disciplinas de la etapa funcionan como pestañas: al pulsar
    // una se muestra su ficha debajo. La primera es la que se ve al entrar.
    benefitsLabel: "Beneficios",
    developmentCards: [
      {
        label: "Análisis financiero estratégico",
        title: "Invertir mejor comienza por comprender el potencial del proyecto.",
        description:
          "Permite orientar las inversiones, establecer prioridades y evaluar dónde existen mayores oportunidades para generar valor.",
        benefits: [
          "Mayor claridad para invertir.",
          "Priorización de recursos.",
          "Mejor toma de decisiones.",
        ],
        note: "Análisis consultivo orientado a encontrar la rentabilidad del proyecto. Incluido dentro del servicio de anteproyecto.",
      },
      {
        label: "Arquitectura",
        title: "Cada decisión espacial es también una decisión de inversión.",
        description:
          "Desarrollamos el proyecto desde el anteproyecto hasta la obra: concepto, planos, documentación técnica y supervisión, coordinando en el camino a las demás disciplinas.",
        benefits: [
          "Espacios funcionales y coherentes con el proyecto.",
          "Decisiones de diseño con criterio de inversión.",
          "Ejecución fiel a lo diseñado.",
        ],
        note: "Incluye anteproyecto, desarrollo, remodelaciones y supervisión de obra, según el alcance definido en la propuesta.",
      },
      {
        label: "Diseño de iluminación",
        title: "La luz define cómo se percibe y cómo se recuerda un espacio.",
        description:
          "Definimos el concepto lumínico de cada ambiente —luminarias, temperaturas, intensidades y escenas— integrado con la arquitectura y el interiorismo desde el inicio del diseño.",
        benefits: [
          "Atmósferas que elevan la experiencia.",
          "Arquitectura que se lee bien a cualquier hora.",
          "Criterios de control y eficiencia energética.",
        ],
        note: "Incluye concepto lumínico, especificación técnica y acompañamiento durante la instalación y el ajuste final.",
      },
      {
        label: "Diseño de interiores",
        title: "La narrativa del proyecto se construye por dentro.",
        description:
          "Definimos materiales, acabados, color, distribución y mobiliario a medida para que cada ambiente tenga carácter propio y coherencia con la identidad del proyecto.",
        benefits: [
          "Ambientes con identidad propia.",
          "Coherencia entre todos los espacios.",
          "Materiales elegidos con criterio de uso y durabilidad.",
        ],
        note: "Incluye concepto, paleta de materiales, distribución y detalle de mobiliario fijo, coordinado con iluminación y obra.",
      },
      {
        label: "Equipamiento y ambientación",
        title: "Las piezas que terminan de dar carácter al proyecto.",
        description:
          "Curaduría de mobiliario, textiles, decoración, iluminación decorativa y arte, con el montaje final de cada espacio para que el proyecto se entregue completo.",
        benefits: [
          "Un proyecto listo para vivirse y fotografiarse.",
          "Identidad reforzada hasta en el último detalle.",
          "Proveedores, tiempos y entregas coordinados.",
        ],
        note: "Servicio desarrollado por Budaya, la marca de Equipamiento & Ambientación de 19.89.",
      },
    ],
    stage3Eyebrow: "Etapa 3 · Identidad y posicionamiento",
    stage3Title: "Un gran proyecto merece una identidad capaz de comunicar su valor.",
    stage3Text:
      "Una vez definida la estrategia y desarrolladas las intervenciones físicas, comienza una nueva etapa: construir la identidad, la narrativa y la presencia del proyecto. En la Estrategia 19.89, la protección de identidad, la fotografía y el marketing digital no se entienden como acciones independientes. Son herramientas que permiten comunicar, posicionar y fortalecer todo aquello que ya ha sido construido.",
    // Las tres disciplinas de la etapa funcionan como pestañas, igual que en
    // la etapa 2: al pulsar una se muestra su ficha debajo.
    scopeLabel: "Alcances",
    identityCards: [
      {
        label: "Protección de identidad",
        title: "Una marca valiosa también debe estar protegida.",
        description:
          "La identidad de un proyecto no solo se construye, también debe resguardarse. Protegemos legalmente los elementos que conforman la identidad de marca para fortalecer su seguridad jurídica, reducir riesgos y preservar su valor como activo estratégico.",
        scope: [
          "Protección y derecho exclusivo de uso de la marca.",
          "Protección frente a terceros.",
          "Posicionamiento.",
          "Identidad visual.",
          "Comunicación de marca.",
          "La marca como activo estratégico.",
          "Proyección internacional de la marca.",
        ],
        benefits: [
          "Mayor diferenciación.",
          "Comunicación más consistente.",
          "Mayor valor percibido.",
          "Conexión más sólida con la audiencia.",
          "Bases claras para futuras acciones de posicionamiento.",
        ],
        note: "Incluye reunión inicial, análisis preliminar, solicitud y presentación, clasificación Niza, publicación de edicto y acompañamiento durante todo el proceso. No cubre el trámite legal si se presentan oposiciones a la solicitud de inscripción.",
      },
      {
        label: "Fotografía profesional",
        title: "La primera impresión ocurre antes de la primera visita.",
        description:
          "En la mayoría de los casos las personas conocen un proyecto a través de una imagen mucho antes de experimentarlo físicamente. Por eso la fotografía no busca únicamente documentar espacios: comunica experiencias, destaca atributos y transmite el valor del proyecto. No fotografiamos espacios, fotografiamos la experiencia de estar allí.",
        scope: [
          "Fotografía arquitectónica.",
          "Fotografía de interiores.",
          "Fotografía hotelera y turística.",
          "Dirección y producción fotográfica.",
          "Edición profesional de imágenes.",
        ],
        benefits: [
          "Mayor valor percibido.",
          "Mejor presentación del proyecto.",
          "Material visual profesional.",
          "Coherencia entre proyecto, identidad y comunicación.",
        ],
        note: "La producción se realiza una vez finalizadas las intervenciones físicas, para que las imágenes reflejen la mejor versión del proyecto. El paquete se define según el tipo de proyecto y se detalla en la propuesta.",
      },
      {
        label: "Marketing digital",
        title: "Un gran proyecto necesita una estrategia capaz de hacerlo visible.",
        description:
          "No basta con crear un excelente espacio: el mercado necesita conocerlo. El marketing digital comunica el valor del proyecto, fortalece su posicionamiento y lo conecta con la audiencia adecuada. Más que generar publicaciones, construimos una comunicación coherente con la identidad y la experiencia que el proyecto representa.",
        scope: [
          "Estrategia de comunicación digital.",
          "Planificación de contenido.",
          "Posicionamiento de marca.",
          "Gestión de redes sociales.",
          "Campañas de comunicación digital.",
          "Análisis y optimización estratégica.",
        ],
        benefits: [
          "Mayor visibilidad.",
          "Comunicación más coherente.",
          "Fortalecimiento de marca.",
          "Mayor confianza y reconocimiento.",
          "Mejor posicionamiento digital.",
        ],
        note: "El trabajo se organiza en paquetes de acompañamiento continuo, detallados más abajo.",
      },
    ],
    marketing: {
      label: "Marketing digital",
      intro:
        "Un gran proyecto necesita una estrategia capaz de hacerlo visible. No basta con crear un excelente espacio; el mercado necesita conocerlo.",
      scopeLabel: "Alcances",
      scope: [
        "Estrategia de comunicación digital.",
        "Planificación de contenido.",
        "Posicionamiento de marca.",
        "Gestión de redes sociales.",
        "Campañas de comunicación digital.",
        "Análisis y optimización estratégica.",
      ],
      packageLabel: "Paquete",
      includesLabel: "Incluye",
      pricingNote:
        "La inversión de cada paquete se detalla en la propuesta, según las necesidades y la etapa del proyecto.",
      travelNote:
        "Los traslados dentro de la GAM están incluidos. Para proyectos fuera de esta zona, los costos de desplazamiento se cotizarán por separado.",
    },
    packages: [
      {
        name: "Start",
        positioning: "Pensado para proyectos que inician su presencia digital.",
        includes: [
          "Reunión creativa inicial.",
          "Estrategia básica de contenido.",
          "1 sesión de fotografía profesional.",
          "2 reels editados.",
          "Banco de imágenes editadas.",
          "Contenido listo para publicar.",
        ],
        featured: false,
      },
      {
        name: "Growth",
        positioning: "Diseñado para proyectos que buscan consolidar su presencia.",
        includes: [
          "Estrategia básica de contenido.",
          "Dirección creativa.",
          "1 sesión de fotografía profesional.",
          "5 reels editados.",
          "Banco de fotografías profesionales.",
          "Guía de comunicación visual.",
          "Contenido listo para publicar.",
        ],
        featured: true,
      },
      {
        name: "Signature",
        positioning: "La solución integral de comunicación.",
        includes: [
          "Estrategia de marca.",
          "Dirección creativa integral.",
          "Producción audiovisual premium.",
          "Fotografía profesional.",
          "Video corporativo o promocional.",
          "Reels para campañas.",
          "Toma aérea con drone.",
          "Biblioteca completa de imágenes y videos para 1 a 3 meses.",
        ],
        featured: false,
      },
    ],
    stage4Eyebrow: "Etapa 4 · Automatización y Movilidad",
    stage4Title:
      "Innovación que mejora la experiencia, simplifica la operación y aporta valor al proyecto.",
    stage4Text:
      "Las mejores soluciones tecnológicas son aquellas que pasan desapercibidas. No buscan añadir complejidad, sino hacer que cada espacio funcione de forma más eficiente, cómoda e intuitiva para quienes lo utilizan.",
    stage4EvaluationLabel: "Qué evaluamos",
    stage4Evaluation: [
      "Automatización y control inteligente.",
      "Movilidad eléctrica.",
      "Tecnologías orientadas al confort y la eficiencia.",
      "Soluciones para optimizar la operación del proyecto.",
      "Oportunidades de innovación y diferenciación.",
    ],
    stage4BenefitsLabel: "Beneficios",
    stage4Benefits: [
      "Mayor comodidad para los usuarios.",
      "Operación más eficiente.",
      "Mejor experiencia de uso.",
      "Incremento del valor percibido.",
      "Proyectos preparados para las necesidades del futuro.",
    ],
    stage4Result:
      "La tecnología deja de ser un complemento para convertirse en una herramienta que simplifica el día a día, mejora la experiencia de las personas y fortalece el valor del proyecto a largo plazo.",
    closingEyebrow: "Del análisis a la acción",
    closingText:
      "Cada recomendación busca orientar los recursos hacia aquellas acciones con mayor potencial de impacto y generación de valor. La contratación puede realizarse de forma integral o por etapas, según las prioridades y objetivos definidos.",
    ctaTitle: "La mejor inversión comienza con la propiedad correcta.",
    ctaButton: "Quiero desarrollar un proyecto nuevo",
  },

  built: {
    metaTitle: "Proyecto Construido — Diagnóstico Estratégico del Proyecto",
    metaDescription:
      "Consultoría estratégica para comprender el estado actual de una propiedad, identificar oportunidades de mejora y orientar futuras decisiones de inversión.",
    heroEyebrow: "Proyecto Construido",
    heroTitle: "Medimos primero. Invertimos después.",
    heroSubtitle:
      "Una consultoría estratégica para comprender el estado actual de una propiedad, identificar oportunidades de mejora y orientar futuras decisiones de inversión.",
    introEyebrow: "Diagnóstico Estratégico del Proyecto",
    introText:
      "El Diagnóstico Estratégico del Proyecto está diseñado para comprender cómo funciona una propiedad existente, detectar oportunidades de mejora y establecer una estrategia clara para aumentar su experiencia, diferenciación y valor a largo plazo.",
    whyEyebrow: "Etapa 1 · Diagnóstico Estratégico",
    whyTitle: "Las mejores decisiones se toman cuando existe claridad.",
    whyText:
      "Antes de invertir, remodelar o implementar nuevas disciplinas, es fundamental comprender cómo funciona el proyecto, cuáles son sus fortalezas y dónde se encuentran las mayores oportunidades de mejora.",
    goalsLabel: "Qué buscamos durante la consultoría",
    goals: [
      "Comprender el funcionamiento general del proyecto.",
      "Identificar fortalezas y oportunidades de mejora.",
      "Detectar aspectos que afectan la experiencia del usuario o huésped.",
      "Establecer prioridades de intervención.",
      "Orientar futuras inversiones mediante una estrategia clara.",
    ],
    indexEyebrow: "Etapa 2 · Índice de Valor 19.89",
    indexTitle: "Cinco dimensiones para entender dónde invertir primero.",
    indexText:
      "El resultado del diagnóstico permite entender dónde invertir primero y qué acciones pueden generar mayor impacto.",
    indexNote:
      "Ejemplo visual — la medición real se construye durante el diagnóstico de cada proyecto",
    roadmapEyebrow: "Etapa 3 · Proyecto Roadmap",
    roadmapTitle: "Prioridades claras, inversión ordenada.",
    roadmapText:
      "Después del diagnóstico, se define una hoja de ruta con prioridades claras. Esta hoja de ruta permite contratar las disciplinas de forma integral o por etapas según el nivel de urgencia, impacto y presupuesto.",
    roadmapStagesLabel: "Etapas posteriores recomendadas",
    roadmapStages: [
      { number: "01", title: "Desarrollo del proyecto", description: "Implementamos las disciplinas recomendadas según su prioridad e impacto en el valor." },
      { number: "02", title: "Identidad y posicionamiento", description: "Fortalecemos la marca, la fotografía y la comunicación del proyecto." },
      { number: "03", title: "Automatización y Movilidad", description: "Incorporamos tecnología que mejora la operación y la experiencia del usuario." },
      { number: "04", title: "Evolución", description: "Acompañamos el crecimiento del proyecto con una visión de largo plazo." },
    ],
    closingText:
      "Cada recomendación busca orientar los recursos hacia aquellas acciones con mayor potencial de impacto y generación de valor. La contratación puede realizarse de forma integral o por etapas, según las prioridades y objetivos definidos.",
    ctaTitlePart1: "Medimos primero.",
    ctaTitlePart2: "Invertimos después.",
    ctaButton: "Quiero diagnosticar mi proyecto",
  },

  valueDims: [
    { label: "Funcionalidad", demoFill: 72 },
    { label: "Experiencia", demoFill: 58 },
    { label: "Identidad", demoFill: 45 },
    { label: "Diferenciación", demoFill: 61 },
    { label: "Potencial comercial", demoFill: 80 },
  ],

  strategyPage: {
    metaTitle:
      "Estrategia 19.89 — Descubrimos el potencial. Diseñamos la estrategia. Creamos valor",
    metaDescription:
      "La Estrategia 19.89 acompaña proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación.",
    heroEyebrow: "Estrategia 19.89",
    heroText:
      "La Estrategia 19.89 fue desarrollada para acompañar proyectos residenciales, comerciales y hoteleros desde sus primeras etapas hasta su consolidación.",
    principlesEyebrow: "Los principios",
    principlesTitle: "Seis principios ordenan cada decisión.",
    howEyebrow: "Cómo se aplica",
    howTitle: "La estrategia se recorre por uno de dos caminos.",
    path1Label: "Camino 01",
    path1Title: "Proyecto Nuevo",
    path1Text:
      "Desde la selección del activo hasta el posicionamiento: claridad antes de cada decisión de inversión.",
    path1Link: "Ver proceso",
    path2Label: "Camino 02",
    path2Title: "Proyecto Construido",
    path2Text:
      "Diagnóstico Estratégico, Índice de Valor 19.89 y una hoja de ruta que ordena las prioridades de inversión.",
    path2Link: "Ver diagnóstico",
  },

  principles: [
    { number: "01", title: "Comprender antes de actuar", description: "Ningún proyecto se diseña sin entender primero su contexto, su mercado y sus objetivos." },
    { number: "02", title: "Priorizar antes de invertir", description: "Los recursos se orientan hacia las acciones con mayor potencial de impacto y generación de valor." },
    { number: "03", title: "Diseñar con propósito", description: "El diseño responde a la estrategia: cada decisión estética es también una decisión de inversión." },
    { number: "04", title: "Integrar disciplinas", description: "Arquitectura, finanzas, identidad y tecnología trabajan bajo una sola visión, no como servicios aislados." },
    { number: "05", title: "Comunicar correctamente", description: "Un proyecto vale más cuando su identidad y su narrativa comunican lo que ya ha sido construido." },
    { number: "06", title: "Pensar en el largo plazo", description: "Las decisiones de hoy se evalúan por el valor que sostienen mañana." },
  ],

  disciplinesPage: {
    metaTitle: "Todos nuestros servicios — Las disciplinas de la Estrategia 19.89",
    metaDescription:
      "Selección de activos, diagnóstico, análisis financiero, arquitectura, iluminación, interiores, identidad, fotografía, marketing, automatización y movilidad: módulos de la Estrategia 19.89.",
    heroEyebrow: "Todos nuestros servicios",
    heroTitle: "Herramientas que se integran a cada proyecto.",
    heroSubtitle:
      "Herramientas especializadas que se integran según las necesidades de cada proyecto. Ninguna opera de forma aislada: todas responden a la Estrategia 19.89.",
    integrateLink: "Conocer disciplina",
    modalLabel: "Detalle de la disciplina",
    modalClose: "Cerrar",
    modalPillar: "Se integra en",
    considerationsLabel: "Consideraciones",
    costLabel: "Inversión",
    /** Enlace del acordeón del inicio hacia el detalle de este servicio. */
    moreLabel: "+ info",
  },

  team: {
    metaTitle: "El equipo como ventaja",
    metaDescription:
      "La ventaja estratégica de 1989 Arquitectura está en integrar arquitectura, inversión, iluminación, interiores, identidad, comunicación y tecnología bajo una sola visión.",
    heroEyebrow: "Estudio",
    heroTitle: "El equipo como ventaja.",
    heroText:
      "La ventaja estratégica de 19.89 está en integrar arquitectura, inversión, iluminación, interiores, identidad, comunicación y tecnología bajo una sola visión. Cada disciplina aporta criterio para que las decisiones de diseño también respondan a decisiones de valor.",
    specialtiesEyebrow: "Especialidades",
  },

  // Quiénes Somos — texto entregado por el cliente (30/07/2026)
  about: {
    metaTitle: "Quiénes somos — Arquitectura, Luz y Hospitalidad",
    metaDescription:
      "19.89 es una firma de arquitectura y diseño de iluminación especializada en proyectos de hospitality. Diseñamos experiencias que generan valor, inspiran conexiones y trascienden en el tiempo.",
    heroEyebrow: "Quiénes somos",
    heroTitle: "Arquitectura, Luz y Hospitalidad.",
    heroSubtitle:
      "Los espacios más memorables no se recuerdan únicamente por su arquitectura. Se recuerdan por cómo hicieron sentir a las personas.",
    introEyebrow: "La firma",
    introTitle: "Diseñamos experiencias, no solo espacios.",
    introParagraphs: [
      "En 19.89 somos una firma de arquitectura y diseño de iluminación especializada en proyectos de hospitality. Desarrollamos soluciones que combinan estrategia, diseño y funcionalidad para crear espacios memorables, fortalecer la identidad de cada proyecto y aumentar su valor percibido.",
      "Entendemos que el éxito de un proyecto va mucho más allá de una buena arquitectura. La forma en que un espacio se vive, se ilumina y se experimenta influye directamente en la percepción de quienes lo habitan, lo visitan y lo recuerdan.",
      "Por eso abordamos cada proyecto desde una visión integral, donde la arquitectura y el diseño de iluminación trabajan en armonía para crear espacios funcionales, auténticos y emocionalmente conectados con las personas.",
      "Nuestra experiencia se complementa con servicios como interiorismo, equipamiento & ambientación (Budaya), protección de identidad, fotografía y marketing digital, automatización, permitiéndonos desarrollar proyectos con una identidad sólida y una visión coherente desde su concepción hasta su posicionamiento.",
    ],
    introHighlight:
      "En 19.89 no solo diseñamos espacios; diseñamos experiencias que generan valor, inspiran conexiones y trascienden en el tiempo.",
    hospitalityEyebrow: "Especialistas en Hospitality",
    hospitalityTitle:
      "Un proyecto de hospitality debe ofrecer mucho más que un espacio bien diseñado.",
    hospitalityParagraphs: [
      "Creemos que un proyecto de hospitality debe generar experiencias capaces de conectar con las personas, fortalecer la identidad del lugar y diferenciarse dentro de un mercado cada vez más competitivo.",
      "Nuestra especialidad es desarrollar proyectos donde la arquitectura y el diseño de iluminación se convierten en herramientas estratégicas para crear ambientes funcionales, memorables y emocionalmente significativos.",
      "Ya sea un hotel boutique, lodge, eco-lodge, villas o incluso proyectos residenciales, comerciales e industriales, entendemos que cada decisión de diseño influye directamente en la experiencia del usuario y en el éxito del proyecto.",
    ],
    purposeEyebrow: "Diseñamos con Propósito",
    purposeTitle:
      "La mejor arquitectura no solo responde a una necesidad funcional.",
    purposeParagraphs: [
      "Creemos que también tiene la capacidad de emocionar, conectar y transformar la manera en que las personas viven un espacio.",
      "Cada proyecto representa una oportunidad para integrar arquitectura, luz y hospitalidad en una misma visión, donde cada decisión de diseño aporta valor, fortalece la identidad del lugar y enriquece la experiencia del usuario.",
      "Aspiramos a desarrollar proyectos que trasciendan las tendencias y permanezcan vigentes con el paso del tiempo, creando espacios auténticos, funcionales y memorables que generen un impacto positivo tanto para quienes los habitan como para quienes los visitan.",
    ],
    claimTitle: "Arquitectura. Luz. Hospitalidad.",
    claimText:
      "Tres disciplinas. Una misma visión. Diseñar espacios que trasciendan la estética para convertirse en experiencias memorables.",
    teamEyebrow: "Conocé el equipo",
    teamTitle: "Detrás de cada proyecto hay un equipo con una misma visión.",
    teamText:
      "Arquitectura, iluminación, interiorismo y comunicación trabajando juntos desde la primera decisión hasta el posicionamiento del proyecto. Cada disciplina aporta criterio para que el diseño responda también a la experiencia y al valor.",
    teamPhotoAlt: (i: number) => `Equipo 19.89 Arquitectura — retrato ${i}`,
    teamPhotoLabel: "Equipo 19.89",
  },

  // Budaya — Equipamiento & Ambientación (texto entregado por el cliente)
  budaya: {
    metaTitle: "Budaya — Equipamiento & Ambientación de 19.89",
    metaDescription:
      "Budaya es la marca de Equipamiento & Ambientación de 19.89, especializada en proyectos de hospitality: mobiliario, textiles, decoración, vajilla, iluminación decorativa y arte.",
    heroEyebrow: "Budaya",
    heroTitle: "La marca de Equipamiento & Ambientación de 19.89.",
    heroSubtitle:
      "Un gran proyecto no termina cuando finaliza la arquitectura. Es el equipamiento, la selección de materiales, los textiles, la decoración y los detalles los que transforman un espacio en una experiencia.",
    introEyebrow: "La marca",
    introTitle: "Ambientes coherentes con una identidad propia.",
    introParagraphs: [
      "Budaya es la marca de Equipamiento & Ambientación de 19.89, especializada en proyectos de hospitality. Diseñamos, seleccionamos e integramos soluciones que combinan diseño, funcionalidad e identidad para crear espacios memorables, fortalecer la experiencia del usuario e incrementar el valor percibido de cada proyecto.",
      "Cada propuesta nace de una visión integral, donde cada elemento responde al concepto arquitectónico y a los objetivos del proyecto. Más que seleccionar productos, desarrollamos ambientes coherentes que transmiten una identidad propia y enriquecen la forma en que las personas viven cada espacio.",
    ],
    scopeEyebrow: "¿Qué hacemos?",
    scopeTitle:
      "Soluciones integrales de equipamiento y ambientación.",
    scopeText:
      "Desarrollamos soluciones integrales de equipamiento y ambientación para proyectos de hospitality, comerciales y residenciales, seleccionando cuidadosamente cada elemento para garantizar una propuesta coherente, funcional y alineada con la identidad del proyecto.",
    scopeLabel: "Nuestro alcance incluye",
    scopeItems: [
      "Mobiliario interior y exterior.",
      "Textiles y ropa de cama.",
      "Paños y accesorios para baño y piscina.",
      "Decoración y objetos decorativos.",
      "Vajilla, cristalería y accesorios de mesa.",
      "Iluminación decorativa.",
      "Arte y elementos de ambientación.",
    ],
    processEyebrow: "Nuestro Proceso",
    processTitle:
      "Cada elemento tiene un propósito dentro de la historia del proyecto.",
    processParagraphs: [
      "Cada proyecto comienza comprendiendo la identidad del espacio y la experiencia que se desea transmitir.",
      "A partir de ese análisis, desarrollamos una propuesta integral donde cada pieza se selecciona estratégicamente para complementar la arquitectura, reforzar el concepto y garantizar una experiencia coherente para el usuario.",
    ],
    processHighlight:
      "No buscamos llenar espacios de objetos. Buscamos que cada elemento tenga un propósito y contribuya a la historia que el proyecto quiere contar.",
    hospitalityEyebrow: "Hospitality como punto de partida",
    hospitalityTitle: "Cada detalle influye en la percepción del espacio.",
    hospitalityParagraphs: [
      "Nuestra especialidad son los proyectos de hospitality porque entendemos que la experiencia del usuario depende de mucho más que un buen diseño arquitectónico.",
      "En hoteles boutique, lodge, eco-lodge, villas o incluso proyectos residenciales, comerciales e industriales, cada detalle influye en la percepción del espacio. Desde la textura de una sábana hasta la selección de una lámpara o la presentación de una mesa, todo comunica la identidad del proyecto.",
      "Por eso, en Budaya concebimos el equipamiento y la ambientación como una inversión estratégica capaz de elevar la experiencia, fortalecer la marca y aumentar el valor percibido del proyecto.",
    ],
    galleryEyebrow: "Ambientes",
    galleryTitle: "Piezas, texturas y detalles que completan la experiencia.",
    galleryAlt: (i: number) => `Budaya — equipamiento y ambientación (imagen ${i})`,
    galleryLabel: "Budaya",
    closingTitle: "Diseñamos ambientes. Creamos experiencias.",
    closingText:
      "En Budaya creemos que los detalles no son un complemento del diseño; son los que convierten un espacio bien diseñado en un lugar inolvidable.",
    ctaTitle: "Conversemos sobre el equipamiento de tu proyecto.",
    ctaButton: "Quiero equipar y ambientar mi proyecto",
  },

  contactPage: {
    metaTitle: "Contacto — Conversemos sobre tu proyecto",
    metaDescription:
      "Contanos en qué etapa está tu proyecto inmobiliario. Escribinos por WhatsApp, correo o Instagram — 1989 Arquitectura, Costa Rica.",
    heroEyebrow: "Contacto",
    heroTitle: "Conversemos sobre tu proyecto.",
    heroText:
      "Ya sea que estés iniciando una inversión o buscando elevar el valor de una propiedad existente, podemos ayudarte a definir el siguiente paso con claridad.",
    routeNew: "Quiero desarrollar un proyecto nuevo",
    routeBuilt: "Quiero diagnosticar una propiedad construida",
    directTitle: "Contacto directo",
    emailLabel: "Correo",
    instagramLabel: "Instagram",
    locationLabel: "Ubicación",
    location: "Costa Rica",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      stage: "¿En qué etapa está tu proyecto?",
      stagePlaceholder: "Seleccionar…",
      stageNew: "Quiero iniciar un proyecto nuevo",
      stageBuilt: "Ya tengo un proyecto construido",
      message: "Contanos sobre tu proyecto",
      submit: "Enviar mensaje",
      subject: "Nueva consulta — sitio 19.89 Arquitectura",
      sentTitle: "Mensaje enviado",
      sentText: "Mensaje enviado. Te contactamos pronto.",
    },
  },

  portfolio: {
    metaTitle: "Portafolio — Proyectos de arquitectura e iluminación",
    metaDescription:
      "Proyectos con estrategia detrás: arquitectura e iluminación en Costa Rica. Kahwi, Tree Lodge, Cafetal, Diciembre Seis y Amarea.",
    heroEyebrow: "Portafolio",
    heroTitle: "Proyectos con estrategia detrás.",
    filterAll: "Todos",
    filterArchitecture: "Arquitectura",
    filterLighting: "Iluminación",
    filterGroupLabel: "Filtrar proyectos",
    previous: "Anterior",
    next: "Siguiente",
    otherProjectsLabel: "Otros proyectos",
    projectAlt: (name: string) => `Proyecto ${name} — 19.89 Arquitectura`,
    galleryAlt: (name: string, i: number) =>
      `Proyecto ${name} — 19.89 Arquitectura (imagen ${i})`,
    metaProjectTitle: (name: string) => `${name} — Portafolio`,
    metaProjectDescription: (name: string, category: string) =>
      `${name}: proyecto de ${category.toLowerCase()} desarrollado por 1989 Arquitectura en Costa Rica.`,
  },

  projectExcerpts: {
    "tree-lodge":
      "Arquitectura en diálogo con el paisaje tropical: líneas limpias, materiales honestos y una distribución que prioriza la apertura y la calma.",
    cafetal:
      "Residencia de volúmenes puros y acentos oscuros, donde los patios y la vegetación ordenan la experiencia del habitar.",
    "diciembre-seis":
      "Conjunto residencial de líneas horizontales y cubiertas flotantes: claridad formal, privacidad y valor de largo plazo.",
    kahwi:
      "Hotel boutique entre árboles en Tamarindo: pabellones ligeros, materiales naturales y una atmósfera que convierte el paisaje en parte de la experiencia.",
    amarea:
      "Villas de espíritu tropical: volúmenes blancos, madera clara y una piscina que organiza el paisaje y la vida al exterior.",
    edica:
      "Diseño de iluminación exterior: criterios lumínicos que equilibran seguridad, confort visual y atmósfera en los recorridos.",
    "flex-center":
      "Criterios de iluminación para un conjunto comercial: eficiencia, jerarquía visual y una lectura clara de la arquitectura nocturna.",
  } as Record<string, string>,

  notFound: {
    eyebrow: "Error 404",
    title: "Esta página no existe.",
    text: "Pero tu proyecto sí. Volvé al inicio y descubrí cómo trabajamos.",
    button: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
