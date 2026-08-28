import type { ScanRow } from '../components/MatrixScanTable'

export const movimientosSample: ScanRow[] = [
  {
    id: 'payment',
    label: 'payment',
    values: { nombre: 'Resumen de tu tarjeta', categoria: 'Pago de resumen' },
  },
  {
    id: 'chargeback',
    label: 'chargeback',
    values: { nombre: 'Pedido de reembolso', categoria: 'Contracargo en proceso' },
  },
  {
    id: 'late_penalty_refund',
    label: 'late_penalty_refund',
    values: { nombre: 'Comisión por pago tardío', categoria: 'Devolución de dinero' },
  },
  {
    id: 'credit_voucher',
    label: 'credit_voucher',
    values: { nombre: '—', categoria: 'Crédito otorgado' },
  },
  {
    id: 'account_fund_transaction',
    label: 'account_fund_transaction',
    values: { nombre: '—', categoria: 'Transferencia enviada' },
  },
  {
    id: 'single_installment_consumption_reversed',
    label: 'single_installment_consumption_reversed',
    values: { nombre: '—', categoria: 'Devolución de dinero' },
  },
  {
    id: 'financial_interest',
    label: 'financial_interest',
    values: { nombre: '—', categoria: 'Cargos' },
  },
]
