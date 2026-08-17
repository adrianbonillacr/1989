import type { Dictionary, DisciplineEntry } from "./es";

/**
 * ENGLISH dictionary — mirrors the structure of es.ts exactly.
 */

const disciplines: DisciplineEntry[] = [
  {
    slug: "seleccion-de-activos",
    name: "Asset selection",
    tagline: "The best investment starts with the right property.",
    description:
      "We evaluate real estate opportunities before buying: location, context, development potential and risks, so the investment starts with the right property.",
    stage: "asesoria",
    newOnly: true,
    detail: {
      text: [
        "When the client has not yet acquired a property, this discipline evaluates opportunities aligned with the project's goals, budget and vision.",
        "Our aim is to bring judgment and analysis to support the decision before investing.",
      ],
      blocks: [
        {
          label: "Objectives",
          items: [
            "Understand the investment profile.",
            "Identify opportunities aligned with the project.",
            "Assess the overall potential of the assets.",
            "Identify risks and opportunities.",
            "Guide decision-making.",
          ],
        },
        {
          label: "We assess",
          items: [
            "Location and context.",
            "Development potential.",
            "General condition of the asset.",
            "Opportunities and limitations.",
            "Fit with the project's goals.",
          ],
        },
        {
          label: "Includes",
          items: [
            "Initial strategy meeting.",
            "Definition of the investment profile.",
            "Evaluation of selected opportunities.",
            "General analysis of the asset's potential.",
            "Strategic recommendations.",
            "Meeting to present the results.",
          ],
        },
        {
          label: "Deliverables",
          items: [
            "Executive report.",
            "Evaluation of the opportunities analyzed.",
            "Strategic recommendations for decision-making.",
          ],
        },
      ],
      considerations: [
        "If the project's development continues with 19.89 Arquitectura, these fees may be credited partially or fully within the integral contract, subject to the agreed terms.",
      ],
      cost: "Detailed in the proposal, according to scope.",
    },
  },
  {
    slug: "diagnostico-estrategico",
    name: "Strategic diagnosis",
    tagline: "We measure first. We invest after.",
    description:
      "We analyze the current state of an existing project to identify opportunities, priorities and a clear development route before investing.",
    stage: "asesoria",
    newOnly: false,
    detail: {
      text: [
        "When the property already exists or the project is already running, the starting point is to understand it. Before investing, remodeling or adding new disciplines it is essential to grasp how it works, what its strengths are and where the greatest opportunities lie.",
        "The result makes clear where to invest first and which actions can create the greatest impact.",
      ],
      blocks: [
        {
          label: "What we look for during the consultancy",
          items: [
            "Understand how the project works as a whole.",
            "Identify strengths and opportunities for improvement.",
            "Detect aspects affecting the user or guest experience.",
            "Set intervention priorities.",
            "Guide future investments through a clear strategy.",
          ],
        },
        {
          label: "Deliverables",
          items: [
            "19.89 Value Index with the five dimensions measured.",
            "Roadmap with intervention priorities.",
            "Staged recommendations by urgency, impact and budget.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Clarity on where to invest first.",
            "Investment ordered by priority.",
            "Lower risk of low-impact interventions.",
          ],
        },
      ],
      considerations: [
        "The recommended disciplines can be contracted as a whole or in stages, according to the priorities and goals defined.",
      ],
      cost: "Detailed in the proposal, according to the project's scope.",
    },
  },
  {
    slug: "analisis-financiero",
    name: "Strategic financial analysis",
    tagline: "Investing better starts with understanding the project's potential.",
    description:
      "We guide investment with financial criteria: where the greatest value potential lies, how to prioritize resources and how to sustain the project's profitability.",
    stage: "desarrollo",
    newOnly: true,
    detail: {
      text: [
        "This discipline directs investments, sets priorities and evaluates where the greatest opportunities to generate value exist.",
      ],
      blocks: [
        {
          label: "Includes",
          items: ["General evaluation of the project's potential (profitability)."],
        },
        {
          label: "Benefits",
          items: [
            "Greater clarity to invest.",
            "Prioritization of resources.",
            "Better decision-making.",
          ],
        },
      ],
      considerations: [
        "A consultative analysis focused on finding the project's profitability.",
      ],
      cost: "Included within the schematic design service.",
    },
  },
  {
    slug: "arquitectura",
    name: "Architecture",
    tagline: "Design with purpose.",
    description:
      "Design with strategic grounding: schematic design, development, remodeling and supervision, where every spatial decision is also an investment decision.",
    stage: "desarrollo",
    newOnly: true,
    detail: {
      text: [
        "Architecture defines how a space works, how it is experienced and how it responds to the project's needs.",
        "Every architectural proposal is developed from the prior strategic analysis, seeking to improve functionality, strengthen the user experience and contribute to the project's overall value.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Preliminary studies.",
            "Architectural schematic design.",
            "Remodeling and space optimization.",
            "3D modeling.",
            "Drawings and technical specifications.",
            "Architectural supervision (optional).",
            "Construction through strategic partners (optional).",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Better use of space.",
            "Greater functionality.",
            "Better user experience.",
            "Increased perceived value.",
          ],
        },
      ],
      considerations: [
        "The scope depends on the needs and opportunities identified during the diagnosis.",
        "Construction, materials, contractors, permits and paperwork are quoted separately.",
      ],
      cost: "According to the project's scope; quoted separately.",
    },
  },
  {
    slug: "diseno-de-iluminacion",
    name: "Lighting design",
    tagline: "Light designs the experience too.",
    description:
      "We define atmospheres and lighting criteria that transform the experience of space and bring the architecture to life.",
    stage: "desarrollo",
    newOnly: false,
    detail: {
      text: [
        "Lighting directly influences the perception, functionality and atmosphere of a space.",
        "Every lighting proposal is developed strategically to complement the architecture, strengthen the user experience and improve the perceived quality of the project.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Lighting strategy and concept.",
            "Design of atmospheres and ambiances.",
            "Definition of lighting criteria.",
            "Selection of fixtures and complementary solutions.",
            "Recommendations for the project's implementation.",
            "Strategic support during execution (optional).",
          ],
        },
        {
          label: "Benefits",
          items: [
            "More attractive spaces.",
            "Greater visual comfort.",
            "Increased perceived value.",
            "Energy optimization.",
            "Better user experience.",
          ],
        },
      ],
      considerations: [
        "The purchase, supply and installation of fixtures are not included and are quoted separately.",
      ],
      cost: "According to the scope and complexity of the project.",
    },
  },
  {
    slug: "diseno-de-interiores",
    name: "Interior design",
    tagline: "Spaces speak before people do.",
    description:
      "We build the project's spatial narrative: materials, finishes and curation that give each space character and coherence.",
    stage: "desarrollo",
    newOnly: false,
    detail: {
      text: [
        "Interior design turns functional spaces into experiences coherent with the project's identity and goals.",
        "Every decision seeks to strengthen the user experience, improve perceived quality and contribute to the property's overall value.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Concept and narrative of the project.",
            "Interior design and spatial layout.",
            "Moodboards and style development.",
            "3D modeling and renders.",
            "Selection of materials, finishes and colors.",
            "Curation of furniture, decoration and accessories.",
            "Support during the implementation of the concept.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Greater coherence between identity, design and experience.",
            "Spaces with a character of their own.",
            "Better experience for users and guests.",
            "Increased perceived value.",
            "Greater competitive differentiation.",
            "More appeal for sale, rental or commercialization.",
          ],
        },
      ],
      considerations: [
        "The purchase of materials, finishes, furniture, accessories and decorative elements is quoted separately.",
      ],
      cost: "According to the scope and complexity of the project.",
    },
  },
  {
    slug: "equipamiento-y-ambientacion",
    name: "Furnishing & styling",
    tagline: "Spaces are remembered for the experience they create.",
    description:
      "Curation of furniture, pieces and styling that complete the experience and reinforce the project's identity.",
    stage: "desarrollo",
    newOnly: false,
    detail: {
      text: [
        "Furnishing and styling are the final step that turns a project into a complete space, functional and coherent with its identity.",
        "We develop an integral proposal covering the selection of furniture, decoration, textiles, accessories and styling elements, aligned with the architectural concept and the user's needs.",
        "As part of this discipline we bring in Budaya, our brand specialized in furnishing and styling for residential, commercial and hospitality projects under a single design philosophy.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Integral selection of furniture and decoration.",
            "Furnishing for residential, commercial and hospitality projects.",
            "Styling of interior and exterior spaces.",
            "Selection of textiles, bed linen, towels and accessories.",
            "Integration of Budaya products.",
            "Support during procurement and implementation.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Spaces coherent with the project's identity.",
            "Greater comfort and functionality for the user.",
            "Increased perceived value of the development.",
            "Better experience for residents, guests or clients.",
            "Budget optimization through a strategic selection of furnishing.",
          ],
        },
      ],
      considerations: [
        "Furniture, decoration, textiles, transport and installation are quoted independently according to the project's scope.",
        "Delivery times depend on the availability, manufacturing or import of each product.",
      ],
      cost: "According to the scope, level of furnishing and complexity of the project.",
    },
  },
  {
    slug: "proteccion-de-identidad",
    name: "Brand protection",
    tagline: "A valuable brand must also be protected.",
    description:
      "We protect and organize the project's brand: visual identity, registration and positioning so the asset grows with backing.",
    stage: "identidad",
    newOnly: false,
    detail: {
      text: [
        "A project's identity is not only built: it must also be safeguarded.",
        "This discipline legally protects the elements that make up the brand identity, strengthening its legal security and preserving its value as a strategic asset.",
        "Proper protection reduces risks, reinforces exclusivity and gives stronger backing to the brand's future growth.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Protection and exclusive right to use the brand.",
            "Protection against third parties.",
            "Positioning.",
            "Visual identity.",
            "Brand communication.",
            "The brand as a strategic asset.",
            "International projection of the brand.",
          ],
        },
        {
          label: "Includes",
          items: [
            "Initial meeting.",
            "Preliminary analysis.",
            "Application and filing.",
            "Nice classification.",
            "Publication of the edict.",
            "Support throughout the process.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Greater differentiation.",
            "More consistent communication.",
            "Greater perceived value.",
            "A stronger connection with the audience.",
            "Clear foundations for future positioning actions.",
          ],
        },
      ],
      considerations: [
        "The scope does not include legal proceedings should oppositions to the registration application arise.",
      ],
      cost: "According to the scope and complexity of the project.",
    },
  },
  {
    slug: "fotografia-profesional",
    name: "Professional photography",
    tagline: "The first impression happens before the first visit.",
    description:
      "Architectural and hospitality photography with visual direction, so the project looks like what it is and communicates its value.",
    stage: "identidad",
    newOnly: false,
    detail: {
      text: [
        "In most cases people get to know a project through an image long before experiencing it physically.",
        "That is why professional photography does not merely document spaces: its goal is to communicate experiences, highlight attributes and convey the project's value. We do not photograph spaces; we photograph the experience of being there.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Architectural photography.",
            "Interior photography.",
            "Hospitality and tourism photography.",
            "Photographic direction and production.",
            "Professional image editing.",
          ],
        },
        {
          label: "Packages",
          items: [
            "Essential — for compact studios: 15 images.",
            "Atmosphere — for houses and amenities: 25 images.",
            "Vision — for villas, vacation rentals and high-end architecture: 40 images.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Greater perceived value.",
            "Better presentation of the project.",
            "Professional visual material.",
            "Coherence between project, identity and communication.",
          ],
        },
      ],
      considerations: [
        "Travel within the GAM is included. For projects outside this area, travel costs are quoted separately.",
        "The photo shoot takes place once the project's physical work is finished, so the images reflect its best version.",
      ],
      cost: "The investment for each package is detailed in the proposal.",
    },
  },
  {
    slug: "marketing-digital",
    name: "Digital marketing",
    tagline: "A great project needs a strategy capable of making it visible.",
    description:
      "Communication strategy, content and campaigns to make the project visible and connect it with its market.",
    stage: "identidad",
    newOnly: false,
    detail: {
      text: [
        "Creating an excellent space is not enough: the market needs to know about it.",
        "Digital marketing communicates the project's value, strengthens its positioning and connects it with the right audience. More than producing posts, we build communication coherent with the identity and the experience the project represents.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Digital communication strategy.",
            "Content planning.",
            "Brand positioning.",
            "Social media management.",
            "Digital communication campaigns.",
            "Analysis and strategic optimization.",
          ],
        },
        {
          label: "Packages",
          items: [
            "Start — for projects beginning their digital presence.",
            "Growth — for projects seeking to consolidate their presence.",
            "Signature — the integral communication solution.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Greater visibility.",
            "More coherent communication.",
            "A stronger brand.",
            "Greater trust and recognition.",
            "Better digital positioning.",
          ],
        },
      ],
      considerations: [
        "Travel within the GAM is included. For projects outside this area, travel costs are quoted separately.",
      ],
      cost: "The investment for each package is detailed in the proposal.",
    },
  },
  {
    slug: "automatizacion-y-movilidad",
    name: "Automation & Mobility",
    tagline: "Technology that improves today's experience and prepares projects for the future.",
    description:
      "Technology that simplifies operations and improves experience: automation, smart control and electric mobility that add value to the project.",
    stage: "tecnologia",
    newOnly: false,
    detail: {
      text: [
        "The best technological solutions are the ones that go unnoticed: they do not add complexity, they make every space work more efficiently, comfortably and intuitively.",
        "Automation and electric mobility create spaces ready for new ways of living, working and moving, always according to the characteristics and goals of each development.",
      ],
      blocks: [
        {
          label: "Possible scope",
          items: [
            "Automation systems for lighting, climate control and other services.",
            "Integration of smart home and smart building solutions.",
            "Infrastructure for electric vehicle charging.",
            "Energy efficiency assessment applied to the technological systems.",
            "Recommendations to optimize the project's operation and maintenance.",
            "Advice on technology selection.",
          ],
        },
        {
          label: "Benefits",
          items: [
            "Greater comfort and functionality.",
            "Optimization of the project's operation.",
            "Increased energy efficiency.",
            "A project prepared for new technologies.",
            "Greater perceived value and competitiveness.",
            "A stronger long-term asset value.",
          ],
        },
      ],
      considerations: [
        "The recommended solutions depend on the characteristics, scope and specific needs of each project.",
        "The purchase of equipment, systems, licenses, infrastructure, specialized installation and commissioning are quoted independently.",
      ],
      cost: "According to the scope and complexity of the project.",
    },
  },
];

export const en: Dictionary = {
  meta: {
    homeTitle: "1989 Arquitectura | Architecture and investment with value — Costa Rica",
    homeDescription:
      "A firm specialized in the strategic development of real estate projects in Costa Rica. We analyze, plan, design and position projects to turn properties into assets with long-term value.",
  },

  common: {
    skipToContent: "Skip to content",
    claim: {
      part1: "We uncover the potential.",
      part2: "We design the strategy.",
      part3: "We create value.",
    },
    scheduleMeeting: "Schedule a strategy meeting",
    discover: "Discover",
  },

  nav: {
    home: "Home",
    newProject: "New Project",
    builtProject: "Built Project",
    strategy: "19.89 Strategy",
    services: "Services",
    budaya: "Budaya",
    portfolio: "Portfolio",
    about: "About Us",
    contact: "Contact",
    cta: "Book a meeting",
    logoAria: "19.89 Arquitectura — Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    servicesMenu: {
      label: "Starting points",
      noProperty: "There is no property yet",
      hasProperty: "The property already exists",
      running: "Project already operating",
      allServices: "All Our Services",
      open: "Open services menu",
    },
    menuLabel: "Navigation menu",
    mainNavLabel: "Main",
    langSwitchLabel: "Language",
  },

  footer: {
    descriptor: "Architecture Studio — Costa Rica",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    tagline: "Architecture and investment with value",
    servicesLabel: "Services",
    studioLabel: "Studio",
  },

  categories: {
    arquitectura: "Architecture",
    iluminacion: "Lighting",
  },

  home: {
    heroEyebrow: "Architecture studio — Costa Rica",
    heroTitle: "Architecture, Light and Hospitality.",
    heroSubtitle:
      "The most memorable spaces are not remembered for their architecture alone. They are remembered for how they made people feel.",
    pathsEyebrow: "Two paths to create value",
    pathsTitle:
      "Every project is at a different moment. That is why we work along two clear paths.",
    path1Tag: "PATH 01",
    path1Title: "New Project",
    path1Tagline: "The best investment starts with the right property.",
    path1Description:
      "For those who want to start a real estate project with clarity from the very first decisions: asset selection, strategy, design, development, identity and positioning.",
    path1Link: "See the process",
    path2Tag: "PATH 02",
    path2Title: "Built Project",
    path2Tagline: "We measure first. We invest after.",
    path2Description:
      "For those who already own a property or an operating project and want to identify improvement opportunities, prioritize investments and increase its value.",
    path2Link: "See the diagnosis",
    strategyEyebrow: "19.89 Strategy",
    strategyTitle: "A way of working that leads to better decisions.",
    strategyText:
      "The 19.89 Strategy was developed to accompany residential, commercial and hospitality projects from their earliest stages through consolidation. Its goal is to help owners and investors make better decisions, set priorities and develop projects capable of standing out and generating long-term value.",

    // Why start with a strategy? (PDF p4)
    whyEyebrow: "Why start with a strategy?",
    whyTitle:
      "The most important decisions of a project are usually made before the first drawing.",
    whyText1:
      "Choosing a property, allocating the investment, defining the concept or deciding how the project will reach the market are decisions that determine much of its success.",
    whyText2:
      "Without a clear strategy, low-impact investments, missed opportunities and projects that never reach their full potential can arise.",
    whyText3:
      "The 19.89 Strategy exists to guide those decisions from the start and turn each investment into an opportunity to create greater value.",

    // How we work (PDF p5)
    processEyebrow: "How we work",
    processTitle: "A process that accompanies from the first decision to consolidation.",
    processIntro:
      "Our process accompanies the client from the first decision to the consolidation of the project, integrating analysis, design, experience and positioning under a single strategic vision.",

    // What we analyze (PDF p6)
    analyzeEyebrow: "What we analyze",
    analyzeTitle: "Every project is different.",
    analyzeText:
      "That is why we evaluate only those aspects capable of generating value and contributing to the project's goals. Among them:",
    analyzeNote:
      "Rather than evaluating disciplines independently, we seek to understand how they work together to strengthen the project and maximize its potential from the start.",

    // The Value of 19.89 (PDF p7)
    valueEyebrow: "The Value of 19.89",
    valueTitle: "At 19.89 we believe the best projects begin long before design.",
    valueText1:
      "They begin by understanding the potential of the investment, defining a clear strategy and directing every decision toward creating value.",
    valueText2:
      "That is why we accompany our clients from the earliest stages of the project through its consolidation, integrating analysis, design, experience and positioning under a single strategic vision.",
    valueText3:
      "Our commitment is to bring judgment, direction and an integral vision to develop projects with identity, differentiation and long-term value.",

    // Roadmap · From analysis to action (PDF p25-26)
    roadmapEyebrow: "From analysis to action",
    roadmapTitle: "The next step is turning strategy into results.",
    roadmapIntro:
      "Now that we know the project's goals and have defined a strategy for its development, the next step is to plan its implementation in an orderly way, aligned with the priorities that were set.",
    roadmapNote:
      "Every project is different. That is why scope, disciplines, schedule and investment are structured in a personalized way, ensuring every decision contributes to generating the greatest possible value.",
    scenariosEyebrow: "Where each project begins",
    scenariosTitle:
      "The starting point defines the route. These are the three possible situations.",
    scenarioStartLabel: "Starting point",
    scenarioFirstStepLabel: "First step",
    scenarioRouteLabel: "Route",
    scenarioLink: "See service",
    considerationsLabel: "Considerations",
    considerationsIntro:
      "Proposals developed by 19.89 are structured in a personalized way to respond to the characteristics and goals of each project. For this reason:",
    disciplinesEyebrow: "Services",
    disciplinesTitle: "Each project activates only the ones it needs, under a single vision.",
    disciplinesNote:
      "They do not operate in isolation: they are tools that integrate into the strategy according to the needs of each project.",
    disciplinesLink: "See all services",
    portfolioEyebrow: "Featured portfolio",
    architectureLabel: "Architecture",
    lightingLabel: "Lighting",
    seeFullPortfolio: "See full portfolio",
  },

  // 19.89 Strategy process (PDF v2, p5 · How we work)
  processSteps: [
    { number: "01", title: "We discover", description: "We understand the project's goals and identify its potential." },
    { number: "02", title: "We evaluate", description: "We analyze strengths, opportunities and priorities to guide decision-making." },
    { number: "03", title: "We plan", description: "We develop a strategic roadmap that defines the path for the project's evolution." },
    { number: "04", title: "We develop", description: "We implement the disciplines needed to turn the strategy into results." },
    { number: "05", title: "We position", description: "We build a solid identity and a commercial presence aligned with the project's value." },
    { number: "06", title: "We evolve", description: "We accompany the project's growth with a long-term vision and new opportunities for improvement." },
  ],

  // Aspects evaluated within the strategy (PDF v2, p6 · What we analyze)
  analyzeItems: [
    "Asset selection (when there is no property yet).",
    "Strategic financial analysis.",
    "Architecture.",
    "Lighting design.",
    "Interior design.",
    "Furnishing and styling.",
    "Brand protection.",
    "Professional photography.",
    "Digital marketing.",
    "Automation and electric mobility.",
  ],

  // Implementation roadmap (PDF v2, p26 · From analysis to action).
  // `icon` maps to the icon set in components/RoadmapIcon.tsx
  roadmapSteps: [
    { number: "01", icon: "scope", title: "We define the scope", description: "We select the disciplines and services that best respond to the needs and goals of the project." },
    { number: "02", icon: "proposal", title: "We prepare the proposal", description: "We put together a technical and financial proposal with scope, deliverables, fees and work schedule." },
    { number: "03", icon: "plan", title: "We plan the implementation", description: "We organize the project's development in stages, setting priorities and a clear roadmap for execution." },
    { number: "04", icon: "start", title: "We begin development", description: "Once the proposal is approved, we implement the selected disciplines and accompany the project throughout its evolution." },
  ],

  // The three possible starting points (PDF v2, p9 · Option A / Option B).
  scenarios: [
    {
      icon: "search",
      tag: "New Project",
      title: "There is no property yet",
      start: "There is intent to invest, but the asset has not been purchased yet.",
      firstStep: "Asset selection",
      firstStepText:
        "We evaluate opportunities aligned with the project's goals, budget and vision: location, context, development potential and risks.",
      route: [
        "Asset selection",
        "Project development",
        "Identity and positioning",
        "Automation and mobility",
      ],
      serviceSlug: "seleccion-de-activos",
    },
    {
      icon: "property",
      tag: "New Project",
      title: "The property already exists",
      start: "The asset has been acquired and the project is yet to be defined.",
      firstStep: "Project development",
      firstStepText:
        "With the asset already defined we move straight into development: architecture, lighting, interiors and furnishing under a single vision.",
      route: [
        "Project development",
        "Identity and positioning",
        "Automation and mobility",
      ],
      serviceSlug: "analisis-financiero",
    },
    {
      icon: "built",
      tag: "Built Project",
      title: "The project is already operating",
      start: "The property is running and the goal is to increase its value and differentiation.",
      firstStep: "Strategic diagnosis",
      firstStepText:
        "We analyze the starting point and move straight into project development with a defined roadmap.",
      route: [
        "Strategic diagnosis",
        "Project development",
        "Roadmap of priorities",
        "Evolution",
      ],
      serviceSlug: "diagnostico-estrategico",
    },
  ],

  // Proposal conditions (PDF v2, p26 · Considerations)
  considerations: [
    "Services can be contracted as a whole or in stages.",
    "Scope, schedules and investment are defined according to the specific needs of each project.",
    "Costs related to construction, materials, furniture, equipment, permits, contractors and specialized installations are not part of the professional fees, unless expressly stated in the proposal.",
  ],

  homeDisciplines: [
    { name: "Investment advisory", description: "Asset selection and strategic diagnosis of the starting point." },
    { name: "Strategic financial analysis", description: "Directs investment toward the greatest potential for value." },
    { name: "Architecture", description: "Design, schematic design, remodeling and supervision." },
    { name: "Lighting design", description: "Atmospheres, lighting criteria and fixture selection." },
    { name: "Interior design", description: "Spatial narrative, materials, finishes and curation." },
    { name: "Furnishing & styling", description: "Curated pieces, styling and ambiance." },
    { name: "Brand protection", description: "Trademark protection, visual identity and positioning." },
    { name: "Professional photography", description: "Architectural and hospitality photography, visual direction." },
    { name: "Digital marketing", description: "Communication strategy, content and campaigns." },
    { name: "Automation & Mobility", description: "Automation, efficiency and user experience." },
  ],

  stageLabels: {
    asesoria: "Stage 1 · Investment advisory",
    desarrollo: "Stage 2 · Project development",
    identidad: "Stage 3 · Identity and positioning",
    tecnologia: "Stage 4 · Automation & Mobility",
  },

  pathTags: {
    both: "New Project · Built Project",
    newOnly: "New Project only",
  },
  // Fichas completas de cada disciplina (ver DisciplineEntry en es.ts).
  disciplines,

  fromZero: {
    metaTitle: "New Project — The best investment starts with the right property",
    metaDescription:
      "A strategic path to start real estate projects with clarity, criteria and a long-term vision: investment advisory, development, identity, automation and mobility.",
    heroEyebrow: "New Project",
    heroTitle: "The best investment starts with the right property.",
    heroSubtitle:
      "A strategic path to start real estate projects with clarity, criteria and a long-term vision.",
    introEyebrow: "The starting point",
    introText:
      "The most important decisions of a project are usually made before the first drawing: choosing a property, defining the concept, ordering the investment and understanding how the project will reach the market. Without a clear strategy, low-impact investments, missed opportunities and projects that never reach their true potential can arise.",
    stage1Eyebrow: "Stage 1 · Investment advisory",
    stage1Title: "Before designing, we evaluate the starting point.",
    stage1Text:
      "This stage helps understand whether the client already owns a property or needs support selecting the right asset.",
    assetSelection: {
      option: "There is no property yet",
      title: "Asset selection",
      description:
        "We evaluate opportunities aligned with the project's goals, budget and vision to support decision-making before investing.",
      includesLabel: "What it includes",
      bullets: [
        "Understanding the investment profile.",
        "Identifying opportunities aligned with the project.",
        "Evaluating location, context and development potential.",
        "Identifying risks, limitations and opportunities.",
        "Presenting strategic recommendations.",
      ],
      deliverablesLabel: "Deliverables",
      deliverables: [
        "Executive report.",
        "Evaluation of the opportunities analyzed.",
        "Recommendations for decision-making.",
      ],
      feeLabel: "Fees",
      feeNote:
        "Detailed in the proposal according to scope. If the project's development continues with 19.89 Arquitectura, they may be credited partially or in full within the comprehensive contract, under agreed conditions.",
    },
    // Unused since 14/08/2026: the "Option B · Strategic diagnosis" card was
    // removed from Stage 1. Kept in case it comes back.
    diagnosis: {
      option: "Option B · A property already exists",
      title: "Strategic diagnosis",
      description:
        "When the client already owns a property, we move to the strategic analysis of the project to identify opportunities, priorities and a development route.",
      link: "See the strategic diagnosis",
    },
    stage2Eyebrow: "Stage 2 · Project development",
    stage2Title: "The strategy becomes a project.",
    stage2Text:
      "With a defined strategy and a clear roadmap, the development stage begins. Each discipline is implemented according to the project's needs and the opportunities identified during the analysis.",
    benefitsLabel: "Benefits",
    developmentCards: [
      {
        label: "Strategic financial analysis",
        title: "Investing better starts with understanding the project's potential.",
        description:
          "It directs investments, sets priorities and evaluates where the greatest opportunities to generate value exist.",
        benefits: [
          "Greater clarity to invest.",
          "Prioritization of resources.",
          "Better decision-making.",
        ],
        note: "Consultative analysis focused on finding the project's profitability. Included within the schematic design service.",
      },
      {
        label: "Architecture",
        title: "Every spatial decision is also an investment decision.",
        description:
          "We develop the project from schematic design through construction: concept, drawings, technical documentation and supervision, coordinating the other disciplines along the way.",
        benefits: [
          "Functional spaces, coherent with the project.",
          "Design decisions made with investment criteria.",
          "Construction faithful to the design.",
        ],
        note: "Includes schematic design, development, remodeling and construction supervision, according to the scope defined in the proposal.",
      },
      {
        label: "Lighting design",
        title: "Light defines how a space is perceived and how it is remembered.",
        description:
          "We define the lighting concept of each space — fixtures, color temperatures, intensities and scenes — integrated with the architecture and the interiors from the start of the design.",
        benefits: [
          "Atmospheres that elevate the experience.",
          "Architecture that reads well at any hour.",
          "Control and energy efficiency criteria.",
        ],
        note: "Includes lighting concept, technical specification and support during installation and final adjustment.",
      },
      {
        label: "Interior design",
        title: "The project's narrative is built from the inside.",
        description:
          "We define materials, finishes, color, layout and bespoke furniture so each space has its own character and stays coherent with the project's identity.",
        benefits: [
          "Spaces with a character of their own.",
          "Coherence across every space.",
          "Materials chosen for use and durability.",
        ],
        note: "Includes concept, material palette, layout and detailing of built-in furniture, coordinated with lighting and construction.",
      },
      {
        label: "Furnishing & styling",
        title: "The pieces that finally give the project its character.",
        description:
          "Curation of furniture, textiles, decoration, decorative lighting and art, with the final installation of each space so the project is handed over complete.",
        benefits: [
          "A project ready to be lived in and photographed.",
          "Identity reinforced down to the last detail.",
          "Suppliers, schedules and deliveries coordinated.",
        ],
        note: "Service delivered by Budaya, 19.89's Furnishing & Styling brand.",
      },
    ],
    stage3Eyebrow: "Stage 3 · Identity and positioning",
    stage3Title: "A great project deserves an identity capable of communicating its value.",
    stage3Text:
      "Once the strategy is defined and the physical interventions are developed, a new stage begins: building the project's identity, narrative and presence. In the 19.89 Strategy, brand protection, photography and digital marketing are not understood as independent actions. They are tools that communicate, position and strengthen everything that has already been built.",
    scopeLabel: "Scope",
    identityCards: [
      {
        label: "Brand protection",
        title: "A valuable brand must also be protected.",
        description:
          "A project's identity is not only built, it must also be safeguarded. We legally protect the elements that make up the brand identity to strengthen its legal security, reduce risk and preserve its value as a strategic asset.",
        scope: [
          "Protection and exclusive right to use the brand.",
          "Protection against third parties.",
          "Positioning.",
          "Visual identity.",
          "Brand communication.",
          "The brand as a strategic asset.",
          "International projection of the brand.",
        ],
        benefits: [
          "Greater differentiation.",
          "More consistent communication.",
          "Higher perceived value.",
          "A stronger connection with the audience.",
          "Clear ground for future positioning work.",
        ],
        note: "Includes the initial meeting, preliminary analysis, filing and submission, Nice classification, publication of the edict and support throughout the process. Legal proceedings are not covered if oppositions to the application are filed.",
      },
      {
        label: "Professional photography",
        title: "The first impression happens before the first visit.",
        description:
          "In most cases people discover a project through an image long before they experience it physically. Photography is therefore not only about documenting spaces: it communicates experiences, highlights attributes and conveys the project's value. We do not photograph spaces, we photograph the experience of being there.",
        scope: [
          "Architectural photography.",
          "Interior photography.",
          "Hospitality and travel photography.",
          "Photographic direction and production.",
          "Professional image editing.",
        ],
        benefits: [
          "Higher perceived value.",
          "A better presentation of the project.",
          "Professional visual material.",
          "Coherence between project, identity and communication.",
        ],
        note: "Production takes place once the physical interventions are finished, so the images reflect the project at its best. The package is defined by project type and detailed in the proposal.",
      },
      {
        label: "Digital marketing",
        title: "A great project needs a strategy capable of making it visible.",
        description:
          "Creating an excellent space is not enough: the market needs to know it. Digital marketing communicates the project's value, strengthens its positioning and connects it with the right audience. More than publishing posts, we build communication that is coherent with the identity and the experience the project represents.",
        scope: [
          "Digital communication strategy.",
          "Content planning.",
          "Brand positioning.",
          "Social media management.",
          "Digital communication campaigns.",
          "Analysis and strategic optimization.",
        ],
        benefits: [
          "Greater visibility.",
          "More coherent communication.",
          "Stronger brand.",
          "More trust and recognition.",
          "Better digital positioning.",
        ],
        note: "The work is organised into ongoing support packages, detailed below.",
      },
    ],
    marketing: {
      label: "Digital marketing",
      intro:
        "A great project needs a strategy capable of making it visible. Creating an excellent space is not enough; the market needs to know it.",
      scopeLabel: "Scope",
      scope: [
        "Digital communication strategy.",
        "Content planning.",
        "Brand positioning.",
        "Social media management.",
        "Digital communication campaigns.",
        "Analysis and strategic optimization.",
      ],
      packageLabel: "Package",
      includesLabel: "Includes",
      pricingNote:
        "The investment for each package is detailed in the proposal, according to the project's needs and stage.",
      travelNote:
        "Travel within the Greater Metropolitan Area (GAM) is included. For projects outside this area, travel costs are quoted separately.",
    },
    packages: [
      {
        name: "Start",
        positioning: "Designed for projects starting their digital presence.",
        includes: [
          "Initial creative meeting.",
          "Basic content strategy.",
          "1 professional photography session.",
          "2 edited reels.",
          "Bank of edited images.",
          "Content ready to publish.",
        ],
        featured: false,
      },
      {
        name: "Growth",
        positioning: "Designed for projects seeking to consolidate their presence.",
        includes: [
          "Basic content strategy.",
          "Creative direction.",
          "1 professional photography session.",
          "5 edited reels.",
          "Bank of professional photographs.",
          "Visual communication guide.",
          "Content ready to publish.",
        ],
        featured: true,
      },
      {
        name: "Signature",
        positioning: "The comprehensive communication solution.",
        includes: [
          "Brand strategy.",
          "Comprehensive creative direction.",
          "Premium audiovisual production.",
          "Professional photography.",
          "Corporate or promotional video.",
          "Reels for campaigns.",
          "Aerial drone footage.",
          "Complete library of images and videos for 1 to 3 months.",
        ],
        featured: false,
      },
    ],
    stage4Eyebrow: "Stage 4 · Automation & Mobility",
    stage4Title:
      "Innovation that improves the experience, simplifies operations and adds value to the project.",
    stage4Text:
      "The best technological solutions are the ones that go unnoticed. They do not seek to add complexity, but to make each space work more efficiently, comfortably and intuitively for the people who use it.",
    stage4EvaluationLabel: "What we evaluate",
    stage4Evaluation: [
      "Automation and smart control.",
      "Electric mobility.",
      "Technologies focused on comfort and efficiency.",
      "Solutions to optimize the project's operation.",
      "Opportunities for innovation and differentiation.",
    ],
    stage4BenefitsLabel: "Benefits",
    stage4Benefits: [
      "Greater comfort for users.",
      "More efficient operation.",
      "Better user experience.",
      "Increased perceived value.",
      "Projects prepared for the needs of the future.",
    ],
    stage4Result:
      "Technology stops being an accessory and becomes a tool that simplifies daily life, improves people's experience and strengthens the project's long-term value.",
    closingEyebrow: "From analysis to action",
    closingText:
      "Each recommendation seeks to direct resources toward the actions with the greatest potential for impact and value creation. Engagement can be comprehensive or by stages, according to the priorities and goals defined.",
    ctaTitle: "The best investment starts with the right property.",
    ctaButton: "I want to develop a new project",
  },

  built: {
    metaTitle: "Built Project — Strategic Project Diagnosis",
    metaDescription:
      "A strategic consultancy to understand the current state of a property, identify improvement opportunities and guide future investment decisions.",
    heroEyebrow: "Built Project",
    heroTitle: "We measure first. We invest after.",
    heroSubtitle:
      "A strategic consultancy to understand the current state of a property, identify improvement opportunities and guide future investment decisions.",
    introEyebrow: "Strategic Project Diagnosis",
    introText:
      "The Strategic Project Diagnosis is designed to understand how an existing property works, detect improvement opportunities and establish a clear strategy to increase its experience, differentiation and long-term value.",
    whyEyebrow: "Stage 1 · Strategic diagnosis",
    whyTitle: "The best decisions are made when there is clarity.",
    whyText:
      "Before investing, remodeling or implementing new disciplines, it is essential to understand how the project works, what its strengths are and where the greatest improvement opportunities lie.",
    goalsLabel: "What we look for during the consultancy",
    goals: [
      "Understanding the overall operation of the project.",
      "Identifying strengths and improvement opportunities.",
      "Detecting aspects that affect the user or guest experience.",
      "Establishing intervention priorities.",
      "Guiding future investments through a clear strategy.",
    ],
    indexEyebrow: "Stage 2 · 19.89 Value Index",
    indexTitle: "Five dimensions to understand where to invest first.",
    indexText:
      "The result of the diagnosis shows where to invest first and which actions can generate the greatest impact.",
    indexNote:
      "Visual example — the real measurement is built during each project's diagnosis",
    roadmapEyebrow: "Stage 3 · Project Roadmap",
    roadmapTitle: "Clear priorities, ordered investment.",
    roadmapText:
      "After the diagnosis, a roadmap with clear priorities is defined. This roadmap allows the disciplines to be engaged comprehensively or by stages according to urgency, impact and budget.",
    roadmapStagesLabel: "Recommended next stages",
    roadmapStages: [
      { number: "01", title: "Project development", description: "We implement the recommended disciplines according to their priority and impact on value." },
      { number: "02", title: "Identity and positioning", description: "We strengthen the project's brand, photography and communication." },
      { number: "03", title: "Automation & Mobility", description: "We incorporate technology that improves operations and the user experience." },
      { number: "04", title: "Evolution", description: "We accompany the project's growth with a long-term vision." },
    ],
    closingText:
      "Each recommendation seeks to direct resources toward the actions with the greatest potential for impact and value creation. Engagement can be comprehensive or by stages, according to the priorities and goals defined.",
    ctaTitlePart1: "We measure first.",
    ctaTitlePart2: "We invest after.",
    ctaButton: "I want to diagnose my project",
  },

  valueDims: [
    { label: "Functionality", demoFill: 72 },
    { label: "Experience", demoFill: 58 },
    { label: "Identity", demoFill: 45 },
    { label: "Differentiation", demoFill: 61 },
    { label: "Commercial potential", demoFill: 80 },
  ],

  strategyPage: {
    metaTitle:
      "19.89 Strategy — We uncover the potential. We design the strategy. We create value",
    metaDescription:
      "The 19.89 Strategy accompanies residential, commercial and hospitality projects from their earliest stages through consolidation.",
    heroEyebrow: "19.89 Strategy",
    heroText:
      "The 19.89 Strategy was developed to accompany residential, commercial and hospitality projects from their earliest stages through consolidation.",
    principlesEyebrow: "The principles",
    principlesTitle: "Six principles order every decision.",
    howEyebrow: "How it is applied",
    howTitle: "The strategy unfolds along one of two paths.",
    path1Label: "Path 01",
    path1Title: "New Project",
    path1Text:
      "From asset selection to positioning: clarity before every investment decision.",
    path1Link: "See the process",
    path2Label: "Path 02",
    path2Title: "Built Project",
    path2Text:
      "Strategic Diagnosis, 19.89 Value Index and a roadmap that orders investment priorities.",
    path2Link: "See the diagnosis",
  },

  principles: [
    { number: "01", title: "Understand before acting", description: "No project is designed without first understanding its context, its market and its goals." },
    { number: "02", title: "Prioritize before investing", description: "Resources are directed toward the actions with the greatest potential for impact and value creation." },
    { number: "03", title: "Design with purpose", description: "Design responds to strategy: every aesthetic decision is also an investment decision." },
    { number: "04", title: "Integrate disciplines", description: "Architecture, finance, identity and technology work under a single vision, not as isolated services." },
    { number: "05", title: "Communicate correctly", description: "A project is worth more when its identity and narrative communicate what has already been built." },
    { number: "06", title: "Think long term", description: "Today's decisions are measured by the value they sustain tomorrow." },
  ],

  disciplinesPage: {
    metaTitle: "All our services — The disciplines of the 19.89 Strategy",
    metaDescription:
      "Asset selection, diagnosis, financial analysis, architecture, lighting, interiors, identity, photography, marketing, automation and mobility: modules of the 19.89 Strategy.",
    heroEyebrow: "All our services",
    heroTitle: "Tools that integrate into every project.",
    heroSubtitle:
      "Specialized tools that integrate according to the needs of each project. None operates in isolation: they all respond to the 19.89 Strategy.",
    integrateLink: "Learn about it",
    modalLabel: "Discipline detail",
    modalClose: "Close",
    modalPillar: "Integrates into",
    considerationsLabel: "Considerations",
    costLabel: "Investment",
    moreLabel: "+ info",
  },

  team: {
    metaTitle: "The team as an advantage",
    metaDescription:
      "The strategic advantage of 1989 Arquitectura lies in integrating architecture, investment, lighting, interiors, identity, communication and technology under a single vision.",
    heroEyebrow: "Studio",
    heroTitle: "The team as an advantage.",
    heroText:
      "The strategic advantage of 19.89 lies in integrating architecture, investment, lighting, interiors, identity, communication and technology under a single vision. Each discipline contributes criteria so that design decisions also respond to value decisions.",
    specialtiesEyebrow: "Specialties",
  },

  about: {
    metaTitle: "About us — Architecture, Light and Hospitality",
    metaDescription:
      "19.89 is an architecture and lighting design firm specialized in hospitality projects. We design experiences that create value, inspire connections and endure over time.",
    heroEyebrow: "About us",
    heroTitle: "Architecture, Light and Hospitality.",
    heroSubtitle:
      "The most memorable spaces are not remembered for their architecture alone. They are remembered for how they made people feel.",
    introEyebrow: "The firm",
    introTitle: "We design experiences, not just spaces.",
    introParagraphs: [
      "At 19.89 we are an architecture and lighting design firm specialized in hospitality projects. We develop solutions that combine strategy, design and functionality to create memorable spaces, strengthen the identity of each project and increase its perceived value.",
      "We understand that the success of a project goes far beyond good architecture. The way a space is lived, lit and experienced directly shapes the perception of those who inhabit it, visit it and remember it.",
      "That is why we approach every project from an integral vision, where architecture and lighting design work in harmony to create functional, authentic spaces that connect emotionally with people.",
      "Our expertise is complemented by services such as interior design, furnishing & styling (Budaya), identity protection, photography and digital marketing, and automation — allowing us to develop projects with a solid identity and a coherent vision from conception to positioning.",
    ],
    introHighlight:
      "At 19.89 we do not only design spaces; we design experiences that create value, inspire connections and endure over time.",
    hospitalityEyebrow: "Hospitality specialists",
    hospitalityTitle:
      "A hospitality project must offer far more than a well-designed space.",
    hospitalityParagraphs: [
      "We believe a hospitality project must generate experiences capable of connecting with people, strengthening the identity of the place and standing out in an increasingly competitive market.",
      "Our specialty is developing projects where architecture and lighting design become strategic tools to create functional, memorable and emotionally meaningful environments.",
      "Whether it is a boutique hotel, lodge, eco-lodge, villas or even residential, commercial and industrial projects, we understand that every design decision directly influences the user experience and the success of the project.",
    ],
    purposeEyebrow: "We design with purpose",
    purposeTitle: "The best architecture does not only answer a functional need.",
    purposeParagraphs: [
      "We believe it also has the ability to move, connect and transform the way people experience a space.",
      "Each project is an opportunity to integrate architecture, light and hospitality into a single vision, where every design decision adds value, strengthens the identity of the place and enriches the user experience.",
      "We aim to develop projects that transcend trends and remain relevant over time, creating authentic, functional and memorable spaces with a positive impact both for those who inhabit them and for those who visit them.",
    ],
    claimTitle: "Architecture. Light. Hospitality.",
    claimText:
      "Three disciplines. One vision. Designing spaces that go beyond aesthetics to become memorable experiences.",
    teamEyebrow: "Meet the team",
    teamTitle: "Behind every project there is a team with a shared vision.",
    teamText:
      "Architecture, lighting, interior design and communication working together from the first decision to the positioning of the project. Each discipline contributes criteria so that design also responds to experience and value.",
    teamPhotoAlt: (i: number) => `19.89 Arquitectura team — portrait ${i}`,
    teamPhotoLabel: "19.89 Team",
  },

  budaya: {
    metaTitle: "Budaya — Furnishing & Styling by 19.89",
    metaDescription:
      "Budaya is the Furnishing & Styling brand of 19.89, specialized in hospitality projects: furniture, textiles, decor, tableware, decorative lighting and art.",
    heroEyebrow: "Budaya",
    heroTitle: "The Furnishing & Styling brand of 19.89.",
    heroSubtitle:
      "A great project does not end when the architecture is finished. It is the furnishing, the choice of materials, the textiles, the decor and the details that turn a space into an experience.",
    introEyebrow: "The brand",
    introTitle: "Coherent environments with an identity of their own.",
    introParagraphs: [
      "Budaya is the Furnishing & Styling brand of 19.89, specialized in hospitality projects. We design, select and integrate solutions that combine design, functionality and identity to create memorable spaces, strengthen the user experience and increase the perceived value of every project.",
      "Each proposal is born from an integral vision, where every element responds to the architectural concept and to the objectives of the project. More than selecting products, we develop coherent environments that convey their own identity and enrich the way people live each space.",
    ],
    scopeEyebrow: "What we do",
    scopeTitle: "Integral furnishing and styling solutions.",
    scopeText:
      "We develop integral furnishing and styling solutions for hospitality, commercial and residential projects, carefully selecting each element to guarantee a coherent, functional proposal aligned with the identity of the project.",
    scopeLabel: "Our scope includes",
    scopeItems: [
      "Indoor and outdoor furniture.",
      "Textiles and bed linen.",
      "Towels and accessories for bathroom and pool.",
      "Decor and decorative objects.",
      "Tableware, glassware and table accessories.",
      "Decorative lighting.",
      "Art and styling elements.",
    ],
    processEyebrow: "Our process",
    processTitle: "Every element has a purpose within the project's story.",
    processParagraphs: [
      "Every project begins by understanding the identity of the space and the experience it aims to convey.",
      "From that analysis, we develop an integral proposal where each piece is strategically selected to complement the architecture, reinforce the concept and guarantee a coherent experience for the user.",
    ],
    processHighlight:
      "We do not seek to fill spaces with objects. We seek for every element to have a purpose and contribute to the story the project wants to tell.",
    hospitalityEyebrow: "Hospitality as a starting point",
    hospitalityTitle: "Every detail shapes the perception of the space.",
    hospitalityParagraphs: [
      "Hospitality projects are our specialty because we understand that the user experience depends on much more than good architectural design.",
      "In boutique hotels, lodges, eco-lodges, villas or even residential, commercial and industrial projects, every detail shapes the perception of the space. From the texture of a bed sheet to the choice of a lamp or the presentation of a table, everything communicates the identity of the project.",
      "That is why at Budaya we understand furnishing and styling as a strategic investment capable of elevating the experience, strengthening the brand and increasing the perceived value of the project.",
    ],
    galleryEyebrow: "Environments",
    galleryTitle: "Pieces, textures and details that complete the experience.",
    galleryAlt: (i: number) => `Budaya — furnishing and styling (image ${i})`,
    galleryLabel: "Budaya",
    closingTitle: "We design environments. We create experiences.",
    closingText:
      "At Budaya we believe details are not a complement to design; they are what turn a well-designed space into an unforgettable place.",
    ctaTitle: "Let's talk about the furnishing of your project.",
    ctaButton: "I want to furnish and style my project",
  },

  contactPage: {
    metaTitle: "Contact — Let's talk about your project",
    metaDescription:
      "Tell us what stage your real estate project is at. Reach us by WhatsApp, email or Instagram — 1989 Arquitectura, Costa Rica.",
    heroEyebrow: "Contact",
    heroTitle: "Let's talk about your project.",
    heroText:
      "Whether you are starting an investment or looking to raise the value of an existing property, we can help you define the next step with clarity.",
    routeNew: "I want to develop a new project",
    routeBuilt: "I want to diagnose a built property",
    directTitle: "Direct contact",
    emailLabel: "Email",
    instagramLabel: "Instagram",
    locationLabel: "Location",
    location: "Costa Rica",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      stage: "What stage is your project at?",
      stagePlaceholder: "Select…",
      stageNew: "I want to start a new project",
      stageBuilt: "I already have a built project",
      message: "Tell us about your project",
      submit: "Send message",
      subject: "New inquiry — 19.89 Arquitectura website",
      sentTitle: "Message sent",
      sentText: "Message sent. We will contact you soon.",
    },
  },

  portfolio: {
    metaTitle: "Portfolio — Architecture and lighting projects",
    metaDescription:
      "Projects with strategy behind them: architecture and lighting in Costa Rica. Kahwi, Tree Lodge, Cafetal, Diciembre Seis and Amarea.",
    heroEyebrow: "Portfolio",
    heroTitle: "Projects with strategy behind them.",
    filterAll: "All",
    filterArchitecture: "Architecture",
    filterLighting: "Lighting",
    filterGroupLabel: "Filter projects",
    previous: "Previous",
    next: "Next",
    otherProjectsLabel: "Other projects",
    projectAlt: (name: string) => `${name} project — 19.89 Arquitectura`,
    galleryAlt: (name: string, i: number) =>
      `${name} project — 19.89 Arquitectura (image ${i})`,
    metaProjectTitle: (name: string) => `${name} — Portfolio`,
    metaProjectDescription: (name: string, category: string) =>
      `${name}: a ${category.toLowerCase()} project developed by 1989 Arquitectura in Costa Rica.`,
  },

  projectExcerpts: {
    "tree-lodge":
      "Architecture in dialogue with the tropical landscape: clean lines, honest materials and a layout that prioritizes openness and calm.",
    cafetal:
      "A residence of pure volumes and dark accents, where courtyards and vegetation order the experience of living.",
    "diciembre-seis":
      "A residential ensemble of horizontal lines and floating roofs: formal clarity, privacy and long-term value.",
    kahwi:
      "A boutique hotel among the trees in Tamarindo: light pavilions, natural materials and an atmosphere that makes the landscape part of the experience.",
    amarea:
      "Villas with a tropical spirit: white volumes, light wood and a pool that organizes the landscape and outdoor life.",
    edica:
      "Exterior lighting design: lighting criteria that balance safety, visual comfort and atmosphere along the paths.",
    "flex-center":
      "Lighting criteria for a commercial complex: efficiency, visual hierarchy and a clear reading of the nighttime architecture.",
  } as Record<string, string>,

  notFound: {
    eyebrow: "Error 404",
    title: "This page does not exist.",
    text: "But your project does. Go back home and discover how we work.",
    button: "Back to home",
  },
};
