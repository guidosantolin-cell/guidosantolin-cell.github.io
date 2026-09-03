import { useEffect, useRef, useState } from 'react'
import type { MaxwellConversationConfig, WidgetSpec } from '../data/maxwellConversations'

function renderRich(text: string, highlightPhrases: string[]) {
  if (highlightPhrases.length === 0) return text
  const pattern = new RegExp(`(${highlightPhrases.join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    highlightPhrases.includes(part) ? (
      <span key={i} className="cursor-pointer text-indigo-600 underline underline-offset-2">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

function Footer({ segments }: { segments: { text: string; link?: boolean }[] }) {
  return (
    <>
      {segments.map((segment, i) =>
        segment.link ? (
          <span key={i} className="text-indigo-600 underline">
            {segment.text}
          </span>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </>
  )
}

function WidgetCard({
  spec,
  disabled,
  onClick,
}: {
  spec: WidgetSpec
  disabled: boolean
  onClick: () => void
}) {
  if (spec.kind === 'promo') {
    return (
      <div className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
        <span className="inline-block rounded-full bg-rose-500 px-2.5 py-1 text-xs font-semibold text-white">
          {spec.badge}
        </span>
        <p className="mt-3 text-base font-semibold text-neutral-900">{spec.title}</p>
        <p className="mt-2 text-sm text-neutral-600">{spec.body}</p>
        <div className="mt-3 flex items-center justify-between">
          <p
            className={`text-base font-semibold text-neutral-900 ${
              spec.priceStrikethrough ? 'text-neutral-400 line-through decoration-neutral-400' : ''
            }`}
          >
            {spec.price}
            {spec.priceSuffix && (
              <span className="text-sm font-normal text-neutral-500">{spec.priceSuffix}</span>
            )}
          </p>
          {spec.banner && (
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              {spec.banner}
            </span>
          )}
        </div>
        {spec.note && <p className="mt-1 text-sm text-neutral-500">{spec.note}</p>}
        <p className="mt-3 text-xs text-neutral-500">
          <Footer segments={spec.footer} />
        </p>
        <button
          onClick={onClick}
          disabled={disabled}
          className="mt-4 w-full rounded-full bg-indigo-600 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-default disabled:opacity-60"
        >
          {spec.cta}
        </button>
      </div>
    )
  }

  return (
    <div className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200">
        <span className="text-xs">💳</span>
      </div>
      <p className="mt-3 text-base font-semibold text-neutral-900">{spec.title}</p>
      <dl className="mt-3 divide-y divide-neutral-100 text-sm">
        {spec.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2">
            <dt className="text-neutral-500">{row.label}</dt>
            <dd className="font-medium text-neutral-900">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-neutral-500">
        <Footer segments={spec.footer} />
      </p>
      <button
        onClick={onClick}
        disabled={disabled}
        className="mt-4 w-full rounded-full bg-indigo-600 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-default disabled:opacity-60"
      >
        {spec.cta}
      </button>
    </div>
  )
}

export function MaxwellConversation({ config }: { config: MaxwellConversationConfig }) {
  const { script, highlightPhrases } = config
  const [revealedCount, setRevealedCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [resolvedWidgets, setResolvedWidgets] = useState<Record<number, boolean>>({})
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<number[]>([])
  const runId = useRef(0)
  const resolveClick = useRef<(() => void) | null>(null)

  const wait = (ms: number) =>
    new Promise<void>((resolve) => {
      const t = window.setTimeout(resolve, ms)
      timers.current.push(t)
    })

  const play = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
    resolveClick.current = null
    const id = ++runId.current
    setRevealedCount(0)
    setTyping(false)
    setResolvedWidgets({})

    ;(async () => {
      await wait(400)
      for (let i = 0; i < script.length; i++) {
        if (runId.current !== id) return
        const turn = script[i]

        if (turn.from === 'maxwell') {
          setTyping(true)
          await wait(900)
          if (runId.current !== id) return
          setTyping(false)
        }

        setRevealedCount(i + 1)

        if (turn.from === 'widget') {
          await new Promise<void>((resolve) => {
            resolveClick.current = resolve
          })
          if (runId.current !== id) return
          setTyping(true)
          await wait(900)
          if (runId.current !== id) return
          setTyping(false)
          continue
        }

        await wait(turn.from === 'user' ? 900 : 1400)
      }
    })()
  }

  useEffect(() => {
    play()
    return () => {
      runId.current++
      timers.current.forEach((t) => clearTimeout(t))
      timers.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [revealedCount, typing, resolvedWidgets])

  const handleWidgetClick = (index: number) => {
    if (resolvedWidgets[index] || !resolveClick.current) return
    setResolvedWidgets((prev) => ({ ...prev, [index]: true }))
    const resolve = resolveClick.current
    resolveClick.current = null
    resolve()
  }

  const visible = script.slice(0, revealedCount)

  return (
    <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
            M
          </div>
          <p className="text-sm font-medium text-neutral-900">Maxwell</p>
        </div>
        <button
          onClick={play}
          className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
        >
          Reiniciar
        </button>
      </div>

      <div
        ref={scrollRef}
        className="relative flex h-[520px] flex-col gap-3 overflow-y-auto bg-neutral-50 p-4"
      >
        {visible.map((turn, i) => {
          if (turn.from === 'widget') {
            const done = !!resolvedWidgets[i]
            return (
              <div key={i} className="flex flex-col gap-3">
                <WidgetCard
                  spec={turn.spec}
                  disabled={done}
                  onClick={() => handleWidgetClick(i)}
                />
                {done && (
                  <div className="max-w-[80%] animate-[fadeIn_0.3s_ease] self-end whitespace-pre-line rounded-2xl rounded-br-sm bg-indigo-600 px-3.5 py-2.5 text-sm text-white">
                    {turn.echoText}
                  </div>
                )}
              </div>
            )
          }

          return (
            <div
              key={i}
              className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm ${
                turn.from === 'user'
                  ? 'self-end rounded-br-sm bg-indigo-600 text-white'
                  : 'self-start rounded-bl-sm border border-neutral-200 bg-white text-neutral-800'
              }`}
            >
              {turn.from === 'maxwell' ? renderRich(turn.text, highlightPhrases) : turn.text}
            </div>
          )
        })}

        {typing && (
          <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-neutral-200 bg-white px-3.5 py-2.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:300ms]" />
          </div>
        )}
      </div>

      <div className="border-t border-neutral-100 p-3">
        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-400">
          <span>+</span>
          <span className="flex-1">Preguntale al asistente</span>
        </div>
      </div>
    </div>
  )
}
