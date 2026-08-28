import { useMemo, useState } from 'react'
import { movimientosFull, type MovementDetail } from '../data/movimientosFull'

const SITES = ['MLA', 'MLB', 'MLM'] as const

function firstLine(text: string) {
  return text.split('\n')[0]
}

function primaryCategory(detail: MovementDetail) {
  const entry = Object.values(detail.catAdapt)[0]
  return entry ? firstLine(entry) : detail.catNeutro || '—'
}

function DetailBlock({ title, detail }: { title: string; detail: MovementDetail }) {
  const countries = Object.keys(detail.catAdapt)
  if (countries.length === 0 && !detail.catNeutro) return null

  return (
    <div>
      <p className="text-sm font-medium text-neutral-900">{title}</p>
      {detail.catNeutro && (
        <p className="mt-1 text-sm text-neutral-600">
          <span className="font-medium text-neutral-900">Neutro:</span> {detail.catNeutro}
        </p>
      )}
      {countries.map((flag) => (
        <p key={flag} className="mt-1 whitespace-pre-line text-sm text-neutral-600">
          <span className="font-medium text-neutral-900">{flag}:</span> {detail.catAdapt[flag]}
        </p>
      ))}
    </div>
  )
}

export function MovementsExplorer() {
  const [query, setQuery] = useState('')
  const [site, setSite] = useState<typeof SITES[number] | 'ALL'>('ALL')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return movimientosFull.filter((row) => {
      const matchesQuery = row.type.toLowerCase().includes(query.toLowerCase())
      const matchesSite = site === 'ALL' || row.sites[site]
      return matchesQuery && matchesSite
    })
  }, [query, site])

  return (
    <div className="rounded-xl border border-neutral-200 bg-white">
      <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 p-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar tipo de movimiento…"
          className="min-w-0 flex-1 rounded-md border border-neutral-200 px-3 py-1.5 text-sm outline-none focus:border-neutral-400"
        />
        <div className="flex gap-1">
          {(['ALL', ...SITES] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSite(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                site === s
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {s === 'ALL' ? 'Todos' : s}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[420px] overflow-y-auto">
        {filtered.length === 0 && (
          <p className="p-4 text-sm text-neutral-400">Sin resultados.</p>
        )}
        {filtered.map((row) => {
          const isOpen = expanded === row.type
          return (
            <div key={row.type} className="border-b border-neutral-100 last:border-b-0">
              <button
                onClick={() => setExpanded(isOpen ? null : row.type)}
                className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-neutral-50"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-xs text-neutral-800">{row.type}</p>
                  <p className="mt-0.5 truncate text-xs text-neutral-500">
                    {primaryCategory(row.rowActivity)}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  {SITES.map((s) => (
                    <span
                      key={s}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                        row.sites[s]
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-neutral-100 text-neutral-300'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span
                  className={`shrink-0 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  ⌄
                </span>
              </button>
              {isOpen && (
                <div className="grid gap-4 border-t border-neutral-100 bg-neutral-50 p-4 sm:grid-cols-2">
                  <DetailBlock title="Row Activity" detail={row.rowActivity} />
                  <DetailBlock title="Activity" detail={row.activity} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <p className="border-t border-neutral-200 p-2 text-center text-xs text-neutral-400">
        {filtered.length} de {movimientosFull.length} movimientos
      </p>
    </div>
  )
}
