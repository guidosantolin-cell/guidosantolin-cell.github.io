import type { MaxwellConversationConfig, SummaryWidget, Turn } from './maxwellConversations'

const assets = '/case-studies/mago-platinum/free-trial-assets'

function summary(withMeliPlus: boolean): SummaryWidget {
  return {
    kind: 'summary',
    title: 'Você vai pedir o cartão Platinum',
    iconSrc: `${assets}/card.svg`,
    rows: [
      { label: 'Limite', value: 'R$ {limit_amount}' },
      { label: 'Anuidade', value: 'Grátis' },
      ...(withMeliPlus ? [{ label: 'Cashback', value: 'Até {n}% em suas compras' }] : []),
      { label: 'Vencimento', value: 'Dia {day} de cada mês' },
      { label: 'Envio do cartão', value: '{address}' },
    ],
    footer: [
      { text: 'Autorizo a consulta ao SCR, solicito o cartão de crédito e aceito os ' },
      { text: 'Termos e condições.', link: true },
    ],
    cta: 'Pedir cartão grátis',
    requiresConsent: true,
  }
}

function confirmation(withMeliPlus: boolean): Turn[] {
  return [
    {
      from: 'maxwell',
      text: 'Ótimo! Já estamos quase terminando. Vamos fazer uma última revisão para confirmar que está tudo certo.\n\nVocê acha que está bom?',
    },
    { from: 'user', text: 'Sim, está tudo certo' },
    { from: 'widget', spec: summary(withMeliPlus), echoText: 'Pedir cartão grátis' },
    {
      from: 'maxwell',
      text: withMeliPlus
        ? 'Perfeito! Seu cartão de crédito Platinum está pronto. 🎉\n\n• Comece a ganhar cashback comprando online com os dados do seu {{cartão virtual}}.\n\n• Conheça os {{benefícios exclusivos}}.\n\nPrecisa de mais alguma coisa?'
        : 'Perfeito! Seu cartão de crédito Platinum está pronto. 🎉\n\n• O plástico chegará em breve, mas você já pode comprar online com seu {{cartão virtual}}.\n\n• Conheça os {{benefícios exclusivos}}.\n\nPrecisa de mais alguma coisa?',
    },
  ]
}

// Source: Figma pAiJw2UULraXm0nXdhwbRg, section 4253:50994.
// Offer 4253:51065; benefit 4253:51097; review 4405:41466;
// summary 4253:51083; success 4253:51069. Main path without KYC6.
export const platinumFreeTrial: MaxwellConversationConfig = {
  language: 'pt-BR',
  assistantName: 'MAGO',
  script: [
    { from: 'user', text: 'Quero pedir um cartão de crédito' },
    {
      from: 'maxwell',
      text: 'Olá, {nombre user}! Você tem um **cartão de crédito Platinum** à sua espera, com estes benefícios exclusivos:\n\n• **Limite de R$ {limit_amount}**\n\n• **Sem anuidade**\n\n• **Até {n} parcelas sem juros no Mercado Livre**\n\n• **Até 4% de cashback nas suas compras se você adicionar o Meli+**\n\nAlém disso, você também tem **benefícios de viagem Visa Platinum**:\n\n• **Seguro para emergências internacionais**\n\n• **Atendimento médico virtual**\n\n• **Assistência pessoal 24 horas por dia**\n\nO cartão virtual fica disponível na hora pra você começar a usar.\n\nVamos seguir com a solicitação?',
    },
    { from: 'user', text: 'Sim, vamos seguir' },
    {
      from: 'maxwell',
      text: 'Ótimo! O endereço para envio do cartão físico é **{address}**.\n\nEstá certo?',
    },
    { from: 'user', text: 'Sim, está certo' },
    {
      from: 'widget',
      echoText: 'Adicionar Meli+ grátis',
      spec: {
        kind: 'promo',
        badge: 'meli+',
        badgeImage: `${assets}/meli-plus.svg`,
        title: 'Adicione o Meli+ ao cartão e aproveite ao máximo',
        body: '',
        features: [
          {
            title: 'Cashback em suas compras',
            description: 'Até {n}% no Mercado Livre e até {n}% em qualquer loja física ou online.',
            icon: `${assets}/cashback.svg`,
          },
          { title: '{n}% do CDI em Cofrinhos', icon: `${assets}/pots.svg` },
          { title: 'Frete grátis no Mercado Livre', icon: `${assets}/shipping.svg` },
        ],
        price: '$ {meli_price}',
        priceSuffix: '/mês',
        priceStrikethrough: true,
        banner: '{n} meses grátis',
        note: 'Cancele cuando quiser.',
        footer: [
          { text: 'Ao adicionar, aceito os ' },
          { text: 'Termos y condiciones de Meli+.', link: true },
        ],
        cta: 'Adicionar Meli+ grátis',
        requiresConsent: true,
        declineIcon: `${assets}/dismiss.svg`,
      },
      decline: {
        cta: 'Não quero este benefício',
        echoText: 'Não quero este benefício',
        continuation: confirmation(false),
      },
    },
    ...confirmation(true),
  ],
}
