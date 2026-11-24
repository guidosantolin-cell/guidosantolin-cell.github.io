import type { MaxwellConversationConfig, SummaryWidget, Turn } from './maxwellConversations'
import { platinumUpgradeBau } from './platinumUpgradeBau'

const assets = '/case-studies/mago-platinum/free-trial-assets'
const addressConfirmation = platinumUpgradeBau.script.slice(1, 4)
const success = platinumUpgradeBau.script.slice(-1)

function summary(withCashback: boolean): SummaryWidget {
  return {
    kind: 'summary',
    title: 'Você vai fazer o upgrade do seu cartão de crédito.',
    iconSrc: `${assets}/card.svg`,
    rows: [
      { label: 'Anuidade', value: 'Grátis' },
      ...(withCashback ? [{ label: 'Cashback', value: 'Até {n}% em suas compras' }] : []),
      { label: 'Vencimento', value: 'Dia {day} de cada mês' },
      { label: 'Envio do cartão', value: '{address}' },
    ],
    footer: [],
    cta: 'Fazer upgrade grátis',
  }
}

function confirmation(withCashback: boolean): Turn[] {
  return [
    {
      from: 'maxwell',
      text: 'Ótimo! Já estamos quase terminando. Vamos fazer uma última revisão para confirmar que está tudo certo.\n\nVocê acha que está bom?',
    },
    { from: 'user', text: 'Sim, está tudo certo' },
    { from: 'widget', echoText: 'Fazer upgrade grátis', spec: summary(withCashback) },
    ...success,
  ]
}

// Figma 4398:30928: offer 4398:30996, address 4398:31008,
// Meli+ 4398:31027, review 4405:41193, summary 4398:31015,
// success 4398:31001. Main path without KYC6.
export const platinumUpgradeFreeTrial: MaxwellConversationConfig = {
  language: 'pt-BR',
  assistantName: 'MAGO',
  script: [
    {
      from: 'maxwell',
      text: 'Mais uma coisa: você **já pode fazer o upgrade grátis do seu cartão de crédito para Platinum**.\n\nEssa é uma versão ainda melhor do seu cartão de crédito. Você mantém os benefícios atuais e também **passa a contar com benefícios de viagem Visa Platinum**.\n\nAlém disso, você **pode ganhar até {n}% de cashback no Mercado Livre e até {n}% em qualquer loja física ou online** se você adicionar Meli+.\n\nVamos fazer o upgrade grátis?',
    },
    ...addressConfirmation,
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
          { title: 'Frete grátis no Mercado Livre', icon: '/case-studies/mago-platinum/upgrade-assets/shipping.svg' },
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

// Figma 4400:9519: offer 4400:9584, address 4400:9596,
// summary 4400:9603, success 4400:9589. Main path without KYC6.
export const platinumUpgradeMeliPlus: MaxwellConversationConfig = {
  language: 'pt-BR',
  assistantName: 'MAGO',
  script: [
    {
      from: 'maxwell',
      text: 'Mais uma coisa: você **já pode fazer o upgrade grátis do seu cartão de crédito para Platinum**.\n\nEssa é uma versão ainda melhor do seu cartão de crédito. Você mantém os benefícios atuais e também **passa a contar com**:\n\n• **Até {n}% de cashback no Mercado Livre e até {n}% em qualquer loja física ou online**\n\n• **{n}% do CDI em Cofrinhos**\n\n• **Benefícios de viagem Visa Platinum**\n\nVamos fazer o upgrade grátis?',
    },
    ...addressConfirmation,
    { from: 'widget', echoText: 'Fazer upgrade grátis', spec: summary(true) },
    ...success,
  ],
}
