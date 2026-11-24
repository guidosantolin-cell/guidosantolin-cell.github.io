import type { MaxwellConversationConfig } from './maxwellConversations'

// Figma pAiJw2UULraXm0nXdhwbRg, flow 4389:14668.
// Offer 4389:14733; address 4389:14745; review 4389:14752;
// success 4389:14738. Main path for users who do not need KYC6.
export const platinumUpgradeBau: MaxwellConversationConfig = {
  language: 'pt-BR',
  assistantName: 'MAGO',
  script: [
    {
      from: 'maxwell',
      text: 'Mais uma coisa: você **já pode fazer o upgrade grátis do seu cartão de crédito para Platinum**.\n\nEssa é uma versão ainda melhor do seu cartão de crédito. Você mantém os benefícios atuais e também **passa a contar com benefícios de viagem Visa Platinum**:\n\n• **Seguro para emergências internacionais**\n\n• **Atendimento médico virtual**\n\n• **Assistência pessoal 24 horas por dia**\n\nO cartão virtual fica disponível na hora para você começar a usar.\n\nVamos fazer o upgrade grátis?',
    },
    { from: 'user', text: 'Sim, vamos fazer o upgrade' },
    {
      from: 'maxwell',
      text: 'Ótimo! O endereço para envio do cartão físico é **{address}**.\n\nEstá certo?',
    },
    { from: 'user', text: 'Sim, está certo' },
    {
      from: 'widget',
      echoText: 'Fazer upgrade grátis',
      spec: {
        kind: 'summary',
        title: 'Você vai fazer o upgrade do seu cartão de crédito.',
        iconSrc: '/case-studies/mago-platinum/free-trial-assets/card.svg',
        rows: [
          { label: 'Anuidade', value: 'Grátis' },
          { label: 'Vencimento', value: 'Dia {day} de cada mês' },
          { label: 'Envio do cartão', value: '{address}' },
        ],
        footer: [],
        cta: 'Fazer upgrade grátis',
      },
    },
    {
      from: 'maxwell',
      text: 'Excelente! Seu cartão de crédito **agora é Platinum**. 🎉\n\n• Aproveite agora os benefícios Platinum com seu {{cartão virtual}}.\n\n• Seu cartão físico atual continua funcionando com os benefícios de antes. Ele será substituído quando você ativar o novo cartão físico com benefícios Platinum.\n\nPrecisa de mais alguma coisa?',
    },
  ],
}
