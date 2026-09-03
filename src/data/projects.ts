import type { MaxwellConversationId } from './maxwellConversations'

export type BeforeAfter = {
  title: string
  beforeLabel?: string
  afterLabel?: string
  beforeImage?: string
  afterImage?: string
  body?: string
  items?: string[]
  notes?: { title: string; body: string }[]
}

export type ExplorationVideo = {
  src: string
  orientation?: 'horizontal' | 'vertical'
}

export type ExplorationSubsection = {
  title: string
  body?: string
  video?: ExplorationVideo
  items?: string[]
}

export type ContentExplorationStage = {
  title: string
  body?: string
  image?: string
  images?: { src: string; caption?: string }[]
  video?: ExplorationVideo
  subsections?: ExplorationSubsection[]
  boxed?: boolean
}

export type Challenge = {
  intro: string[]
  content?: string[]
  solution?: string
}

export type Benchmark = {
  intro?: string
  image?: string
  images?: { src: string; caption?: string }[]
  resultsTitle?: string
  findings?: string[]
  recommendationsIntro?: string
  recommendations?: string[]
}

export type WorkProcess = {
  intro: string
}

export type Research = {
  title?: string
  intro: string
  findings: string[]
  image?: string
}

export type FirstSteps = {
  title: string
  intro: string
  bullets: string[]
  problem: string
  decisionTitle: string
  decisionBody: string
}

export type CustomSection = {
  title: string
  body?: string
  items?: string[]
  video?: ExplorationVideo
  image?: string
  images?: { src: string; caption?: string }[]
  note?: string
}

export type ObjectivesKpis = {
  negocio: string
  experiencia?: string
  kpis: string[]
}

export type MapReveal = {
  image: string
}

export type BulletGroup = {
  title: string
  items: string[]
}

export type Opportunities = {
  intro: string
  groups: BulletGroup[]
}

export type Prototype = {
  title: string
  description?: string
  video?: ExplorationVideo
  image?: string
  interactive?: MaxwellConversationId
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle?: string
  product: string
  countries: string
  period: string
  tools: string[]
  accent: 'pink' | 'indigo' | 'yellow'
  coverImage?: string
  coverComponent?: 'minicard-feedback' | 'hand-card'
  coverCaption?: string
  team?: { role: string; name: string }[]
  challenge?: Challenge
  objectivesKpis?: ObjectivesKpis
  firstSteps?: FirstSteps
  workProcess?: WorkProcess
  research?: Research
  opportunities?: Opportunities
  scope?: Opportunities
  mapReveal?: MapReveal
  customSections?: CustomSection[]
  benchmark?: Benchmark
  contentExploration: ContentExplorationStage[]
  contentExplorationTitle?: string
  beforeAfter: BeforeAfter[]
  beforeAfterTitle?: string
  prototypes?: Prototype[]
  outcome?: string
  outcomeVideo?: ExplorationVideo
  outcomeGroups?: { title: string; images: { src: string; caption?: string }[] }[]
  matrixScan?: boolean
  movementScan?: boolean
  movementsExplorer?: boolean
  sheetLink?: string
  handoffLink?: string
}

export const accentClasses: Record<CaseStudy['accent'], { bg: string; text: string }> = {
  pink: { bg: 'bg-rose-200', text: 'text-rose-900' },
  indigo: { bg: 'bg-indigo-200', text: 'text-indigo-900' },
  yellow: { bg: 'bg-amber-200', text: 'text-amber-900' },
}

const PLACEHOLDER = '[Completar con tu contenido]'

export const projects: CaseStudy[] = [
  {
    slug: 'flujo-adqui-tc-en-maxwell',
    title: 'Flujo conversacional MAGO',
    product: 'Tarjeta de Crédito Mercado Pago',
    countries: '🇧🇷 Brasil | 🇲🇽 México | 🇦🇷 Argentina | 🇨🇱 Chile',
    period: PLACEHOLDER,
    tools: ['Figma'],
    accent: 'indigo',
    coverImage: '/case-studies/maxwell/mago-cover.svg',
    challenge: {
      intro: [
        'Recientemente se puso en funcionamiento MAGO, un nuevo agente de AI que responde las dudas que tienen las personas sobre diferentes productos.',
        'Integramos los flujos de solicitud para que la persona usuaria adquiera la Tarjeta de Crédito Mercado Pago directamente desde MAGO, en simples pasos.',
      ],
    },
    contentExplorationTitle: 'Exploraciones',
    benchmark: {
      intro:
        'Relevamos referencias de bots conversacionales (bancos y agencias de viaje) y de bots con widgets UI para definir cómo presentar la oferta de la tarjeta dentro del chat de Maxwell, además de un benchmark visual de cards, modales y microinteracciones.',
      images: [
        { src: '/case-studies/maxwell/benchmark2.png', caption: 'Benchmarking BOTs (conversacional): Banco Macro, BBVA, Streebo, Despegar' },
        { src: '/case-studies/maxwell/benchmark1.png', caption: 'Benchmarking BOTs (UI widgets): decolar (SofIA), Layla, mindtrip' },
        { src: '/case-studies/maxwell/benchmark3.png', caption: 'Benchmarking visual: cards, modales, onboarding y microinteracciones' },
      ],
    },
    contentExploration: [
      {
        title: '',
        body: 'Teniendo en cuenta el benchmark realizado, analizamos diferentes formas en la manera de contar la historia de la adquisición de la tarjeta.',
        boxed: true,
        subsections: [
          {
            title: 'Exploraciones Estructura básica',
          },
          {
            title: 'Exploraciones de widget',
            video: {
              src: '/case-studies/maxwell/exploraciones-widget.png',
              orientation: 'vertical',
            },
          },
          {
            title: 'Exploraciones modo conversacional',
            video: {
              src: '/case-studies/maxwell/exploraciones-conversacional.png',
              orientation: 'horizontal',
            },
          },
        ],
      },
    ],
    beforeAfter: [],
    prototypes: [
      {
        title: 'Adqui Pre Scored BAU',
        interactive: 'tc-mla',
      },
      {
        title: 'Adqui Microtarjeta Meli+',
        interactive: 'microtarjeta-mx',
      },
      {
        title: 'Adqui TC Free Trial',
        interactive: 'tc-free-trial',
      },
    ],
    handoffLink:
      'https://www.figma.com/design/pAiJw2UULraXm0nXdhwbRg/%F0%9F%8C%8E-Maxwell-Conversacional--Handoff-?node-id=1-8&p=f&t=WFuIZbU58Zmz4sEh-0',
  },
  {
    slug: 'usuarios-con-tc-en-otra-cuenta',
    title: 'Usuarios con TC en otra cuenta',
    product: 'Tarjeta de Crédito Mercado Pago',
    countries: '🇦🇷 Argentina | 🇧🇷 Brasil | 🇲🇽 México',
    period: PLACEHOLDER,
    tools: ['Figma'],
    accent: 'yellow',
    coverComponent: 'minicard-feedback',
    challenge: {
      intro: [
        'Muchos usuarios que tienen más de una cuenta de Mercado Pago querían acceder a diferentes funcionalidades de su tarjeta de crédito desde la cuenta equivocada. En el flujo previo, a pesar de que existen las capability técnicas, se daba visibilidad de esta situación recién al final de la experiencia que el user estaba experimentando. Se definió redefinir el feedback a dar y adelantarlo para que el user no tenga que experimentar toda la experiencia hasta enterarse que no puede avanzar.',
      ],
    },
    mapReveal: {
      image: '/case-studies/users-tc-otra-cuenta/mapa-entendimiento.png',
    },
    customSections: [
      {
        title: 'Exploramos propuestas',
        images: [
          { src: '/case-studies/users-tc-otra-cuenta/abordajes-claude.png', caption: 'Abordajes con Claude' },
          { src: '/case-studies/users-tc-otra-cuenta/refinamiento-aleph.png', caption: 'Refinamiento con Aleph' },
          { src: '/case-studies/users-tc-otra-cuenta/propuestas.png', caption: 'Propuestas post weekly' },
        ],
      },
    ],
    contentExploration: [],
    beforeAfter: [],
    outcome:
      'Definimos el flujograma final para los 3 casos de uso (TC cancelada, TC vigente, oferta vigente), con sus pantallas de freno para Android e iOS, consistentes entre MLB, MLM y MLA, más el comportamiento del CTA.',
    outcomeGroups: [
      {
        title: 'TC Precancelada',
        images: [
          { src: '/case-studies/users-tc-otra-cuenta/tc-precancelada-con-mail.png', caption: 'Propuesta con mail del user' },
          { src: '/case-studies/users-tc-otra-cuenta/tc-precancelada-sin-mail.png', caption: 'Propuesta sin mail del user' },
        ],
      },
      {
        title: 'TC Vigente',
        images: [
          { src: '/case-studies/users-tc-otra-cuenta/tc-vigente-con-mail.png', caption: 'Propuesta con mail del user' },
          { src: '/case-studies/users-tc-otra-cuenta/tc-vigente-sin-mail.png', caption: 'Propuesta sin mail del user' },
        ],
      },
      {
        title: 'Oferta vigente',
        images: [
          { src: '/case-studies/users-tc-otra-cuenta/oferta-vigente-con-mail.png', caption: 'Propuesta con mail' },
          { src: '/case-studies/users-tc-otra-cuenta/oferta-vigente-sin-mail.png', caption: 'Propuesta sin mail' },
        ],
      },
    ],
    handoffLink:
      'https://www.figma.com/design/MK22lfxMxNb03N0Bcc7Lqx/%F0%9F%87%A6%F0%9F%87%B7%F0%9F%87%A7%F0%9F%87%B7%F0%9F%87%B2%F0%9F%87%BD-Usuarios-con-TC-en-otra-cuenta?node-id=288-51539&m=dev',
  },
  {
    slug: 'tarjeta-prepago-mla',
    title: 'Adquisición Tarjeta Prepaga MLA',
    product: 'Tarjeta Prepaga Mercado Pago',
    countries: '🇦🇷 Argentina',
    period: PLACEHOLDER,
    tools: ['Figma'],
    accent: 'yellow',
    coverComponent: 'hand-card',
    challenge: {
      intro: [
        'Se decidió rediseñar la experiencia de adquisición de la Tarjeta Prepaga física para convertirla en un flujo alineado con la experiencia WOW.',
      ],
    },
    benchmark: {
      image: '/case-studies/benchmark/referencia-grafica.png',
      resultsTitle: 'Resultados Benchmark',
      findings: [
        '5 de 7 players analizados te dan una tarjeta virtual al momento de abrir una cuenta. Luego, el usuario puede pedir una tarjeta física o no.',
        'En todos los players sucede que cuando el usuario pide la tarjeta física, únicamente se le pide completar la dirección de entrega.',
        'Las value props se presentan al principio durante el proceso de apertura de la cuenta o bien, la primera vez que ingresó al sector de su Tarjeta de Débito.',
        'Entre la VP se destacan: Gratuidad, Facilidad (Simple de usar / Comprar es fácil), TV para compras online y TF para compras presenciales.',
        'Durante el proceso de solicitud de la física ningún player presenta value props.',
        '6 de 7 players presentan a la tarjeta virtual y física como parte de único producto que es la tarjeta de débito o prepaga.',
        'A pesar de presentarlas como parte de un mismo producto, 6 de 7 players, también las diferencian entre física y virtual.',
      ],
    },
    contentExplorationTitle: 'Exploraciones',
    contentExploration: [
      {
        title: 'Content Prototype: definimos la historia a contar',
        image: '/case-studies/exploracion/1-arco-narrativo.png',
        video: { src: '/case-studies/exploracion/3-content-prototype.png', orientation: 'vertical' },
      },
      {
        title: '4. Seguimos explorando caminos',
        body: 'Una vez identificadas las ideas principales y complementarias, seguimos explorando opciones sobre el orden en el que presentaríamos dichas ideas teniendo en cuenta las VP a destacar por producto y negocio y las características de cada caso de uso. Se trabajaron 3 caminos:',
        images: [
          { src: '/case-studies/exploracion/4-caso-tp-unificada.png', caption: 'Caso TP unificada' },
          { src: '/case-studies/exploracion/caso-tp-separada.png', caption: 'Caso TP separada' },
          {
            src: '/case-studies/exploracion/caso-tp-fisica.png',
            caption: 'Caso TP física únicamente',
          },
        ],
      },
      {
        title: '5. Exploramos en diseño',
        video: { src: '/case-studies/exploracion/5-diseno.png', orientation: 'horizontal' },
      },
    ],
    beforeAfterTitle: 'Resultado',
    beforeAfter: [
      {
        title: 'Acceso',
        body: 'Realizamos un cambio en el banner donde incorporamos como un concepto relevante que la tarjeta se pide de forma gratuita.',
        beforeImage: '/case-studies/accesos/antes.png',
        afterImage: '/case-studies/accesos/despues.png',
      },
      {
        title: 'Onboarding',
        beforeImage: '/case-studies/onboarding/antes.png',
        afterImage: '/case-studies/onboarding/despues.png',
        notes: [
          {
            title: 'Animación y reducción de pantallas',
            body: 'Reemplazamos las 4 pantallas fijas del onboarding original por un flujo más corto con una animación de alto impacto emocional.',
          },
          {
            title: 'Título', // TODO: este título quedó como placeholder en Figma ("título") — pendiente de definir
            body: 'Usamos este espacio para destacar un aspecto más aspiracional de la tarjeta, en línea con la animación.',
          },
          {
            title: 'Sin botón',
            body: 'Quitamos el botón porque la animación avanza sola a la siguiente pantalla.',
          },
        ],
      },
      {
        title: 'RyC',
        beforeImage: '/case-studies/ryc/antes.png',
        afterImage: '/case-studies/ryc/despues.png',
        notes: [
          {
            title: 'Menos pasos',
            body: 'Redujimos la cantidad de pantallas para un flujo más directo al pedir la tarjeta prepaga.',
          },
          {
            title: 'Título', // TODO: este título también quedó como placeholder en Figma ("título") — pendiente de definir
            body: 'Unificamos diferentes aspectos de la tarjeta bajo un título genérico que aplica a todas las rows.',
          },
          {
            title: 'Row "Alcance internacional"',
            body: 'Destaca que la tarjeta es aceptada en todo el mundo.',
          },
          {
            title: 'Row "Asociada a tu cuenta"',
            body: 'Destaca que la tarjeta funciona con dinero disponible, el aspecto sobre el que más consultan los usuarios.',
          },
          {
            title: 'Row "Emisión y mantenimiento"',
            body: 'Refuerza que la tarjeta no tiene costo asociado, algo que la mayoría de los players destacan de productos similares.',
          },
          {
            title: 'Botón "Modificar"',
            body: 'Visibilizamos la opción de modificar, que antes estaba escondida en los tres puntitos.',
          },
          {
            title: 'Mensaje KYC',
            body: 'Anticipamos el caso KYC (menos del 2% de los pedidos) para reducir la cantidad de pantallas del flujo.',
          },
          {
            title: 'Botón',
            body: 'Unificamos dos pasos en un solo botón para pedir la tarjeta, resaltando nuevamente que es gratis.',
          },
        ],
      },
      {
        title: 'Congrats',
        beforeImage: '/case-studies/congrats/antes.png',
        afterImage: '/case-studies/congrats/despues.png',
        notes: [
          {
            title: 'Congrats (usuario ya tiene virtual)',
            body: 'Incorporamos animación y reducimos el contenido a lo esencial, recordando que para compras online debe usar la tarjeta virtual.',
          },
          {
            title: 'Congrats (usuario no tiene virtual)',
            body: 'Incorporamos animación y reducimos el contenido a lo esencial, promoviendo que el usuario genere su tarjeta virtual gratis.',
          },
        ],
      },
    ],
  },
  {
    slug: 'matriz-chargeback',
    title: 'Matriz Chargeback',
    product: 'Tarjeta de Crédito Mercado Pago',
    countries: '🇦🇷 Argentina | 🇲🇽 México | 🇧🇷 Brasil',
    period: PLACEHOLDER,
    tools: ['Figma'],
    accent: 'indigo',
    coverImage: '/case-studies/matriz-chargeback/cover.svg',
    challenge: {
      intro: [
        'El proyecto buscaba avanzar con el diseño de la matriz de Chargeback para MLA. Sin embargo, durante el mapeo realizado para conocer el panorama actual, nos dimos cuenta de que (rompiendo las buenas prácticas) no existía una matriz única de chargeback en Mario aplicable a todos los sites. Por ese motivo, rediseñando el objetivo original del proyecto, buscamos generar una solución transversal a todos los sites.',
      ],
      content: [
        'Actualizar el contenido existente incorporando mejoras propuestas por CX y Producto.',
        'Generar nuevas FAQs para abarcar casos de uso no contemplados al inicio del poroto.',
        'Diseñar la estructura en sheet de la nueva matriz sobre Chargeback transversal a todos los sites.',
      ],
      solution:
        'Diseñar una única matriz de Chargeback aplicable a todos los sites donde la TC se encuentre productiva.',
    },
    workProcess: {
      intro: 'El proceso de trabajo consistió de 4 etapas:',
    },
    research: {
      intro:
        'Esta etapa consistió en repasar las matrices existentes en los sites donde la TC estaba productiva y analizar cómo se abordaban las diferentes preguntas y sus respuestas. Así, identificamos 4 conclusiones principales:',
      findings: [
        '**2 matrices productivas totalmente independientes** (una para MLM y otro para MLB): Este aspecto contradice las buenas prácticas. Se recomienda la creación de una misma matriz que contemple todos los casos de uso posibles para ambos sites y encienda los casos según corresponda a cada site.',
        '**Diferentes respuestas para el mismo caso de uso**: Recientemente se habían incorporado mejoras en las respuestas de MLB que aún no se habían trasladado a MLM, afectando la calidad de las respuestas allí brindadas.',
        '**FAQs con calidad baja o crítica**: A pesar de estar identificadas las FAQs con calidad baja o crítica, no se habían realizado los ajustes necesarios para mejorarlas.',
        '**Matrices con casos de uso en desuso**: Ambas matrices tenían casos de uso con variables que IT no podía identificar.',
      ],
    },
    opportunities: {
      intro:
        'A partir del análisis anterior, identificamos oportunidades de mejora tanto en la estructura de la matriz como en las FAQs integrantes.',
      groups: [
        {
          title: 'FAQs',
          items: [
            'Recomendaciones de CX: Las FAQs productivas no tenían incorporados los inputs destacados por CX.',
            'Guideline de FAQs: Se detectaron oportunidades para mejorar el entendimiento y la consistencia del contenido.',
            'Salidas de las FAQs: Posibilidad para evitar la utilización de CTAs, privilegiando el uso de deep links (tal como recomienda la guideline).',
            'Nuevos casos de uso: Desarrollo de contenido para nuevos casos de uso o bien, para casos ya contemplados pero sin contenido desarrollado.',
          ],
        },
        {
          title: 'Matriz Chargeback',
          items: [
            'Matriz única de chargeback: posibilidad de desarrollar una única matriz que aglutine todos los casos de uso de todos los sites (productivos y futuros).',
            'Variables entendibles: generamos un apartado donde explicamos en qué consiste cada variable para que toda persona que utilice la matriz pueda entenderlas.',
          ],
        },
      ],
    },
    contentExploration: [],
    beforeAfter: [
      {
        title: 'Incorporación de mejoras',
        body: 'La iteración del contenido de las FAQs consistió de:',
        items: [
          '5 mesas de trabajo con Producto y CX para dar visibilidad de los avances e incorporar mejoras al contenido de las FAQs.',
          '2 espacios de trabajo con el equipo responsable de desarrollar el contenido del árbol de ayuda de MLM para mantener la consistencia con dicho site.',
          '1 espacio de content review con CM de TC para incorporar mejoras a las propuestas realizadas.',
        ],
      },
    ],
    outcome:
      'El resultado fue una única matriz de Chargeback, transversal a MLB, MLM y MLA: cada caso de uso queda identificado con el mismo ID productivo entre sites (cuando aplica), y las respuestas quedan asociadas a placeholders y deep links reutilizables (como ${ayudasAsistidas} o ${creditCardCancelReissue}), en vez de texto suelto por site.',
    matrixScan: true,
    sheetLink:
      'https://docs.google.com/spreadsheets/d/1NpurK17r2klURmx4CpbjBW3mYgDT1BCGrXXzv7C4IXI/edit?pli=1&gid=2004723040#gid=2004723040',
  },
  {
    slug: 'recategorizacion-de-movimientos',
    title: 'Recategorización de movimientos',
    product: 'Tarjeta de Crédito Mercado Pago',
    countries: '🇦🇷 Argentina | 🇲🇽 México | 🇧🇷 Brasil',
    period: PLACEHOLDER,
    tools: ['Figma'],
    accent: 'pink',
    coverImage: '/case-studies/recategorizacion/inconsistencias.png',
    challenge: {
      intro: [
        'Para el lanzamiento de Monza, Front y Back realizaron una recategorización de los movimientos existentes, sumaron nuevos movimientos para MLA y deprecaron otros.',
        'Estos cambios generaron inconsistencias técnicas y de historia relacionadas a cómo contamos los movimientos y sus categorías; lo que puede concluir en confusiones para los usuarios ya que no pueden reconocer un movimiento a través de su journey completo.',
      ],
      content: [
        'Mapear todos los movimientos existentes en MLM, MLB y MLA.',
        'Entender al detalle qué significa cada uno.',
        'Promover, en caso de ser necesarios, cambios en la categorización de los movimientos.',
      ],
      solution:
        'Redefinir el nombre de todos los tipos de movimientos que existen para la tarjeta de crédito identificados por IT para MLA. Los mismos los abarcaremos en tres etapas: F&F, MVP y Endgame.',
    },
    firstSteps: {
      title: 'Conociendo los movimientos',
      intro:
        'Relevamos los movimientos que formarán parte del lanzamiento F&F MLA. Reuniones con Producto y IT para comprender al detalle qué significaba cada movimiento.',
      bullets: [],
      problem:
        'No existía un único criterio cross IT para definir de qué hablamos cuando hablamos de "Categoría".',
      decisionTitle: 'Generar un nuevo concepto, denominado "Categoría UX"',
      decisionBody:
        'Este nuevo concepto aplica únicamente a UX y se refiere a un paragüas aglutinador de más de un movimiento. Así, los tipos de movimientos que hacen los usuarios están compuestos por un nombre ("Nombre de movimiento") que integra una Categoría UX.',
    },
    customSections: [
      {
        title: '¿A qué nos referimos cuando hablamos de movimiento?',
        body: 'El Nombre de movimiento y la Categoría UX aparecen en distintos componentes según el site: statements, pre-detalle, PDF y back office.',
        video: {
          src: '/case-studies/recategorizacion/movimiento-componentes.png',
          orientation: 'horizontal',
        },
      },
    ],
    research: {
      title: 'Inconsistencias productivas relevadas',
      intro:
        'Una vez acordado lo que íbamos a relevar, identificamos diferente tipo de inconsistencias. Entre ellas:',
      findings: [
        '**Diferentes keys y categorías neutras para un mismo movimiento**',
        'Diferente key neutra.',
        'Misma key neutra pero escrita de diferente forma.',
        'Poca claridad sobre la key aplicable a cada tipo de movimiento.',
      ],
      image: '/case-studies/recategorizacion/inconsistencias.png',
    },
    contentExploration: [],
    beforeAfter: [],
    outcome:
      'El resultado fue una matriz única ("Keys alineadas a Activity") con el Nombre del movimiento y la Categoría UX (neutro y adaptado por país) para cada tipo de movimiento, consistente en Row Activity y Activity para MLA, MLB y MLM.',
    movementScan: true,
    movementsExplorer: true,
    sheetLink:
      'https://docs.google.com/spreadsheets/d/1NZFSBjhqE0y5HCFvLCHIFGETMczFufOoLE7MDhp8S48/edit?pli=1&gid=825420724#gid=825420724',
  },
]
