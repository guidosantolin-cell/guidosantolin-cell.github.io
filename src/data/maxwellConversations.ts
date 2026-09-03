export type Turn =
  | { from: 'user'; text: string }
  | { from: 'maxwell'; text: string }
  | { from: 'widget' }

export type WidgetRow = { label: string; value: string }
export type FooterSegment = { text: string; link?: boolean }

export type MaxwellConversationConfig = {
  script: Turn[]
  widget: {
    title: string
    rows: WidgetRow[]
    footer: FooterSegment[]
    cta: string
  }
  finalReply: string
  highlightPhrases: string[]
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
      { from: 'widget' },
    ],
    widget: {
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
    finalReply:
      '¡Excelente! Tu Tarjeta de crédito está lista. 🎉\n\n• El plástico llegará pronto pero ya podés comprar online con tu tarjeta virtual.\n• Conocé tus nuevos beneficios exclusivos.\n\n¿Necesitás algo más?',
    highlightPhrases: ['tu tarjeta virtual', 'beneficios exclusivos'],
  },
  'microtarjeta-mx': {
    script: [
      { from: 'user', text: 'Quiero una tarjeta de crédito' },
      {
        from: 'maxwell',
        text: '¡Hola, {nombre user}! Tienes una tarjeta esperándote con anualidad gratis y $ {limit_amount} de límite.\n\nEste monto puede aumentar mes a mes si:\n\n• Gastas un mínimo de $ {n} por mes.\n\n• Pagas a tiempo el total del estado de cuenta.\n\n¿Avanzamos con el pedido de la tarjeta?',
      },
      { from: 'user', text: 'Dale' },
      {
        from: 'maxwell',
        text: '¡Bien! La dirección donde enviaremos la tarjeta física es {address}.\n\n¿Te parece bien?',
      },
      { from: 'user', text: 'Sí, me parece bien' },
      { from: 'widget' },
    ],
    widget: {
      title: 'Vas a pedir la tarjeta de crédito',
      rows: [
        { label: 'Límite', value: '$ {limit_amount}' },
        { label: 'Anualidad', value: 'Gratis' },
        { label: 'Cashback', value: 'Hasta {n}% en tus compras' },
        { label: 'Vencimiento', value: 'Día {day} de cada mes' },
        { label: 'Enviar tarjeta a', value: '{address}' },
      ],
      footer: [
        { text: 'Al confirmar, acepto los ' },
        { text: 'Términos y Condiciones', link: true },
        { text: ' y la ' },
        { text: 'Carátula.', link: true },
      ],
      cta: 'Pedir tarjeta gratis',
    },
    finalReply:
      '¡Excelente! Tu tarjeta de crédito está lista. 🎉\n\n• Tu tarjeta física llegará pronto pero ya puedes comprar online con tu tarjeta digital.\n• Conoce tus nuevos beneficios exclusivos.\n\n¿Necesitas algo más?',
    highlightPhrases: ['tu tarjeta digital', 'beneficios exclusivos'],
  },
} satisfies Record<string, MaxwellConversationConfig>

export type MaxwellConversationId = keyof typeof maxwellConversations
