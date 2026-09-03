export type WidgetRow = { label: string; value: string }
export type FooterSegment = { text: string; link?: boolean }

export type SummaryWidget = {
  kind: 'summary'
  title: string
  rows: WidgetRow[]
  footer: FooterSegment[]
  cta: string
}

export type PromoWidget = {
  kind: 'promo'
  badge: string
  title: string
  body: string
  price: string
  priceSuffix?: string
  priceStrikethrough?: boolean
  banner?: string
  note?: string
  footer: FooterSegment[]
  cta: string
}

export type WidgetSpec = SummaryWidget | PromoWidget

export type Turn =
  | { from: 'user'; text: string }
  | { from: 'maxwell'; text: string }
  | { from: 'widget'; spec: WidgetSpec; echoText: string }

export type MaxwellConversationConfig = {
  script: Turn[]
}

export const maxwellConversations = {
  'tc-mla': {
    script: [
      { from: 'user', text: 'Quiero una tarjeta de crédito' },
      {
        from: 'maxwell',
        text: '¡Hola, Guido! Tenés una tarjeta esperándote con $ 1.000.000 de límite y beneficios exclusivos:\n\n• 100% gratis: no pagás mantenimiento, renovación ni envío\n\n• Hasta 12 cuotas sin interés en Mercado Libre\n\n¿Avanzamos con el pedido de la tarjeta?',
      },
      { from: 'user', text: 'Sí, dale' },
      {
        from: 'maxwell',
        text: '¡Bien! La dirección donde enviaremos la tarjeta física es Zeballos 2453, Beccar, Prov. de Buenos Aires.\n\n¿Te parece bien?',
      },
      { from: 'user', text: 'Sí, está bien' },
      {
        from: 'widget',
        echoText: 'Pedir tarjeta gratis',
        spec: {
          kind: 'summary',
          title: 'Vas a pedir la tarjeta de crédito',
          rows: [
            { label: 'Límite', value: '$ 1.000.000' },
            { label: 'Mantenimiento', value: 'Gratis, sin costos ocultos' },
            { label: 'Vencimiento', value: 'Día 12 de cada mes' },
            { label: 'Enviar tarjeta a', value: 'Zeballos 2435, Beccar' },
          ],
          footer: [
            { text: 'Al pedir la tarjeta, estás aceptando sus ' },
            { text: 'Términos y condiciones.', link: true },
          ],
          cta: 'Pedir tarjeta gratis',
        },
      },
      {
        from: 'maxwell',
        text: '¡Excelente! Tu Tarjeta de crédito está lista. 🎉\n\n• El plástico llegará pronto pero ya podés comprar online con {{tu tarjeta virtual}}.\n• Conocé tus nuevos {{beneficios exclusivos}}.\n\n¿Necesitás algo más?',
      },
    ],
  },
  'microtarjeta-mx': {
    script: [
      { from: 'user', text: 'Quiero una tarjeta de crédito' },
      {
        from: 'maxwell',
        text: '¡Hola, Lucia! Tienes una tarjeta esperándote con anualidad gratis y $ 400 de límite.\n\nEste monto puede aumentar mes a mes si:\n\n• Gastas un mínimo de $200 por mes.\n\n• Pagas a tiempo el total del estado de cuenta.\n\n¿Avanzamos con el pedido de la tarjeta?',
      },
      { from: 'user', text: 'Dale' },
      {
        from: 'maxwell',
        text: '¡Bien! La dirección donde enviaremos la tarjeta física es Poniente 146 No. 730, Col. Industrial Vallejo, Alcaldía Azcapotzalco, Ciudad de México.\n\n¿Te parece bien?',
      },
      { from: 'user', text: 'Sí, me parece bien' },
      {
        from: 'widget',
        echoText: 'Pedir tarjeta gratis',
        spec: {
          kind: 'summary',
          title: 'Vas a pedir la tarjeta de crédito',
          rows: [
            { label: 'Límite', value: '$ 400' },
            { label: 'Anualidad', value: 'Gratis' },
            { label: 'Cashback', value: 'Hasta 3% en tus compras' },
            { label: 'Vencimiento', value: 'Día 5 de cada mes' },
            {
              label: 'Enviar tarjeta a',
              value: 'Poniente 146 No. 730, Col. Industrial Vallejo, Alcaldía Azcapotzalco, Ciudad de México',
            },
          ],
          footer: [
            { text: 'Al confirmar, acepto los ' },
            { text: 'Términos y Condiciones', link: true },
            { text: ' y la ' },
            { text: 'Carátula.', link: true },
          ],
          cta: 'Pedir tarjeta gratis',
        },
      },
      {
        from: 'maxwell',
        text: '¡Excelente! Tu tarjeta de crédito está lista. 🎉\n\n• Tu tarjeta física llegará pronto pero ya puedes comprar online con {{tu tarjeta digital}}.\n• Conoce tus nuevos {{beneficios exclusivos}}.\n\n¿Necesitas algo más?',
      },
    ],
  },
  'tc-free-trial': {
    script: [
      { from: 'user', text: 'Hola, puedo pedir una tarjeta de crédito' },
      {
        from: 'maxwell',
        text: '¡Hola, Lucia! Tienes una tarjeta esperándote con $ 2,000 de límite y beneficios exclusivos:\n\n• Anualidad gratis\n\n• Hasta 24 MSI en Mercado Libre\n\n¿Avanzamos con el pedido de la tarjeta?',
      },
      { from: 'user', text: 'Sí, por favor' },
      {
        from: 'maxwell',
        text: '¡Bien! La dirección donde enviaremos la tarjeta física es Poniente 146 No. 730, Col. Industrial Vallejo, Alcaldía Azcapotzalco, Ciudad de México.\n\n¿Te parece bien?',
      },
      { from: 'user', text: 'Sí, está ok' },
      {
        from: 'widget',
        echoText: 'Agregar Meli+ gratis',
        spec: {
          kind: 'promo',
          badge: 'meli+',
          title: 'Agrega Meli+ a la tarjeta y aprovéchala al máximo',
          body: 'Gana hasta 5% de cashback en tus compras y envíos gratis en Mercado Libre.',
          price: '$ 9,99',
          priceSuffix: '/mes',
          priceStrikethrough: true,
          banner: '3 meses gratis',
          note: 'Cancela cuando quieras.',
          footer: [
            { text: 'Al agregar, aceptas los ' },
            { text: 'Términos y condiciones del cashback Meli+.', link: true },
          ],
          cta: 'Agregar Meli+ gratis',
        },
      },
      {
        from: 'widget',
        echoText: 'Pedir tarjeta gratis',
        spec: {
          kind: 'summary',
          title: 'Vas a pedir la tarjeta de crédito',
          rows: [
            { label: 'Límite', value: '$ 2,000' },
            { label: 'Anualidad', value: 'Gratis' },
            { label: 'Cashback', value: 'Hasta 5% en tus compras' },
            { label: 'Vencimiento', value: 'Día 5 de cada mes' },
            {
              label: 'Enviar tarjeta a',
              value: 'Poniente 146 No. 730, Col. Industrial Vallejo, Alcaldía Azcapotzalco, Ciudad de México',
            },
          ],
          footer: [
            { text: 'Al confirmar, acepto los ' },
            { text: 'Términos y Condiciones', link: true },
            { text: ' y la ' },
            { text: 'Carátula.', link: true },
          ],
          cta: 'Pedir tarjeta gratis',
        },
      },
      {
        from: 'maxwell',
        text: '¡Excelente! Tu tarjeta de crédito está lista. 🎉\n\n• Tu tarjeta física llegará pronto pero ya puedes comprar online con {{tu tarjeta digital}}.\n• Conoce tus nuevos {{beneficios exclusivos}}.\n\n¿Necesitas algo más?',
      },
    ],
  },
} satisfies Record<string, MaxwellConversationConfig>

export type MaxwellConversationId = keyof typeof maxwellConversations
