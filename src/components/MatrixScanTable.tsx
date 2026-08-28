import { matrixSample } from '../data/matrixSample'

export type ScanColumn = {
  key: string
  label: string
  width?: number
}

export type ScanRow = {
  id: string
  label: string
  values: Record<string, string>
}

const ROW_HEIGHT = 32
const LABEL_COL_WIDTH = 200
const ROW_NUM_WIDTH = 28

const defaultColumns: ScanColumn[] = [
  { key: 'mlb', label: 'MLB', width: 90 },
  { key: 'mlm', label: 'MLM', width: 90 },
  { key: 'mla', label: 'MLA', width: 90 },
]

const defaultRows: ScanRow[] = matrixSample.map((row) => ({
  id: row.faq,
  label: row.faq,
  values: { mlb: row.mlb, mlm: row.mlm, mla: row.mla },
}))

const COLUMN_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

type Props = {
  labelHeader?: string
  columns?: ScanColumn[]
  rows?: ScanRow[]
}

export function MatrixScanTable({
  labelHeader = 'FAQ',
  columns = defaultColumns,
  rows = defaultRows,
}: Props) {
  const sweepDistance = (rows.length - 1) * ROW_HEIGHT
  const gridTemplate = `${ROW_NUM_WIDTH}px ${LABEL_COL_WIDTH}px ${columns
    .map((c) => `${c.width ?? 90}px`)
    .join(' ')}`

  return (
    <div className="overflow-x-auto rounded-md border border-neutral-300 bg-white font-mono text-[11px] shadow-sm">
      {/* Spreadsheet column letters */}
      <div className="grid border-b border-neutral-300 bg-neutral-100" style={{ gridTemplateColumns: gridTemplate }}>
        <div className="border-r border-neutral-300 bg-neutral-200" />
        {[labelHeader, ...columns.map((c) => c.label)].map((_, i) => (
          <div
            key={i}
            className="border-r border-neutral-300 px-2 py-1 text-center font-medium text-neutral-400"
          >
            {COLUMN_LETTERS[i] ?? i}
          </div>
        ))}
      </div>

      {/* Header row (field names) */}
      <div
        className="grid border-b-2 border-neutral-300 bg-neutral-100 font-semibold text-neutral-700"
        style={{ gridTemplateColumns: gridTemplate }}
      >
        <div className="border-r border-neutral-300 bg-neutral-200" />
        <div className="border-r border-neutral-300 px-2 py-1.5">{labelHeader}</div>
        {columns.map((col) => (
          <div key={col.key} className="border-r border-neutral-300 px-2 py-1.5 text-center">
            {col.label}
          </div>
        ))}
      </div>

      <div className="relative">
        <div
          className="animate-scan-sweep pointer-events-none absolute inset-x-0 z-10 border-y-2 border-blue-500 bg-blue-100/50"
          style={
            {
              height: ROW_HEIGHT,
              '--scan-distance': `${sweepDistance}px`,
            } as React.CSSProperties
          }
        />
        {rows.map((row, rowIndex) => (
          <div
            key={row.id}
            className="grid border-b border-neutral-200 text-neutral-700"
            style={{ height: ROW_HEIGHT, gridTemplateColumns: gridTemplate }}
          >
            <div className="flex items-center justify-center border-r border-neutral-300 bg-neutral-100 text-neutral-400">
              {rowIndex + 1}
            </div>
            <div className="truncate border-r border-neutral-200 px-2">{row.label}</div>
            {columns.map((col) => (
              <div
                key={col.key}
                className="truncate border-r border-neutral-200 px-2 text-center"
                title={row.values[col.key]}
              >
                {row.values[col.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
