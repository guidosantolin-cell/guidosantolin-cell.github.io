export type MatrixRow = {
  faq: string
  mlb: string
  mlm: string
  mla: string
}

export const matrixSample: MatrixRow[] = [
  { faq: 'El valor de la compra está errado', mlb: '17251', mlm: '17251', mla: '17251' },
  {
    faq: 'Tuve un problema con el producto o servicio',
    mlb: '17252',
    mlm: '17252',
    mla: '17252',
  },
  { faq: 'Este pago está duplicado', mlb: '17263', mlm: '17263', mla: '17263' },
  { faq: 'Yo no hice este pago', mlb: '35178', mlm: '35178', mla: '35178' },
  {
    faq: 'Me cobraron mal el costo de esta extracción',
    mlb: '18529',
    mlm: 'No tiene retiro',
    mla: 'No tiene retiro',
  },
  {
    faq: 'Ya desconocí este pago. ¿Qué pasará después?',
    mlb: '41160',
    mlm: '41160',
    mla: '41160',
  },
  {
    faq: '¿Qué significa que mi contracargo está en proceso?',
    mlb: '17295',
    mlm: '17295',
    mla: '17295',
  },
]
