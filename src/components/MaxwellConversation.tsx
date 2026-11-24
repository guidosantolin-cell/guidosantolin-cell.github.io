import { useEffect, useRef, useState } from 'react'
import type { MaxwellConversationConfig, WidgetSpec } from '../data/maxwellConversations'

type WidgetChoice = 'accept' | 'decline'

function renderRich(text: string) {
  return text.split(/(\{\{.+?\}\}|\*\*.+?\*\*)/g).map((part, i) => {
    if (part.startsWith('{{') && part.endsWith('}}')) {
      return <span key={i} className="cursor-pointer text-indigo-600 underline underline-offset-2">{part.slice(2, -2)}</span>
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function Footer({ segments }: { segments: { text: string; link?: boolean }[] }) {
  return (
    <>
      {segments.map((segment, i) =>
        segment.link ? (
          <span key={i} className="mago-approval-link">
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
  onDecline,
  declineCta,
}: {
  spec: WidgetSpec
  disabled: boolean
  onClick: () => void
  onDecline?: () => void
  declineCta?: string
}) {
  const [accepted, setAccepted] = useState(false)
  const footer = spec.footer.length === 0 ? null : spec.requiresConsent ? (
    <label className="mago-approval-legal mago-approval-consent">
      <input
        type="checkbox"
        checked={accepted}
        disabled={disabled}
        onChange={(event) => setAccepted(event.target.checked)}
        className="mago-approval-checkbox"
      />
      <span><Footer segments={spec.footer} /></span>
    </label>
  ) : (
    <p className="mago-approval-legal"><Footer segments={spec.footer} /></p>
  )

  if (spec.kind === 'promo') {
    return (
      <>
        <div className="mago-approval mago-approval-promo" data-widget-kind="promo">
          <div className="mago-approval-header">
            <span className="mago-approval-thumbnail">
              <img src={spec.badgeImage ?? '/case-studies/mago-platinum/free-trial-assets/meli-plus.svg'} alt={spec.badge} />
            </span>
            <h4 className="mago-approval-title">{spec.title}</h4>
          </div>
          <div className="mago-approval-content mago-approval-offer">
            {spec.body && <p className="text-sm leading-[18px] text-[var(--mago-text-secondary)]">{spec.body}</p>}
            {spec.features && (
              <ul className="space-y-3 text-sm leading-[18px]">
                {spec.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    {feature.icon ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center"><img src={feature.icon} alt="" /></span>
                    ) : <span className="w-5 shrink-0" aria-hidden />}
                    <div>
                      <p className="font-semibold">{feature.title}</p>
                      {feature.description && <p className="mt-0.5">{feature.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p
                className={`text-base font-semibold text-neutral-900 ${
                  spec.priceStrikethrough ? 'text-neutral-500 line-through decoration-neutral-600 decoration-2' : ''
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
            {spec.note && <p className="text-sm leading-[18px] text-[var(--mago-text-secondary)]">{spec.note}</p>}
          </div>
          <div className="mago-approval-actions">
            {footer}
            <button
              type="button"
              onClick={onClick}
              disabled={disabled || (spec.requiresConsent && !accepted)}
              className="mago-approval-button"
            >
              {spec.cta}
            </button>
          </div>
        </div>
        {onDecline && (
          <button
            type="button"
            onClick={onDecline}
            disabled={disabled}
            className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-900 disabled:opacity-60"
          >
            {spec.declineIcon && <img src={spec.declineIcon} alt="" />}
            {declineCta}
          </button>
        )}
      </>
    )
  }

  return (
    <div className="mago-approval" data-widget-kind="summary">
      <div className="mago-approval-header">
        <span className="mago-approval-thumbnail">
          <img src={spec.iconSrc ?? '/case-studies/mago-platinum/free-trial-assets/card.svg'} alt="" />
        </span>
        <h4 className="mago-approval-title">{spec.title}</h4>
      </div>
      <dl className="mago-approval-content mago-approval-details">
        {spec.rows.map((row) => (
          <div key={row.label} className="mago-approval-row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mago-approval-actions">
        {footer}
        <button
          type="button"
          onClick={onClick}
          disabled={disabled || (spec.requiresConsent && !accepted)}
          className="mago-approval-button"
        >
          {spec.cta}
        </button>
      </div>
    </div>
  )
}

export function MaxwellConversation({ config }: { config: MaxwellConversationConfig }) {
  const { script } = config
  const [activeScript, setActiveScript] = useState(script)
  const [revealedCount, setRevealedCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [resolvedWidgets, setResolvedWidgets] = useState<Record<number, WidgetChoice>>({})
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<number[]>([])
  const runId = useRef(0)
  const resolveClick = useRef<((choice: WidgetChoice) => void) | null>(null)

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
    setActiveScript(script)

    ;(async () => {
      let playbackScript = script
      await wait(400)
      for (let i = 0; i < playbackScript.length; i++) {
        if (runId.current !== id) return
        const turn = playbackScript[i]

        if (turn.from === 'maxwell') {
          setTyping(true)
          await wait(900)
          if (runId.current !== id) return
          setTyping(false)
        }

        setRevealedCount(i + 1)

        if (turn.from === 'widget') {
          const choice = await new Promise<WidgetChoice>((resolve) => {
            resolveClick.current = resolve
          })
          if (runId.current !== id) return
          if (choice === 'decline' && turn.decline) {
            playbackScript = [...playbackScript.slice(0, i + 1), ...turn.decline.continuation]
            setActiveScript(playbackScript)
          }
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

  const handleWidgetClick = (index: number, choice: WidgetChoice = 'accept') => {
    if (resolvedWidgets[index] || !resolveClick.current) return
    setResolvedWidgets((prev) => ({ ...prev, [index]: choice }))
    const resolve = resolveClick.current
    resolveClick.current = null
    resolve(choice)
  }

  const visible = activeScript.slice(0, revealedCount)

  return (
    <div lang={config.language ?? 'es'} className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
            M
          </div>
          <p className="text-sm font-medium text-neutral-900">{config.assistantName ?? 'Maxwell'}</p>
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
                  onDecline={turn.decline ? () => handleWidgetClick(i, 'decline') : undefined}
                  declineCta={turn.decline?.cta}
                />
                {done && (
                  <div className="max-w-[80%] animate-[fadeIn_0.3s_ease] self-end whitespace-pre-line rounded-2xl rounded-br-sm bg-indigo-600 px-3.5 py-2.5 text-sm text-white">
                    {resolvedWidgets[i] === 'decline' ? turn.decline?.echoText : turn.echoText}
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
              {turn.from === 'maxwell' ? renderRich(turn.text) : turn.text}
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
          <span className="flex-1">{config.language === 'pt-BR' ? 'Pergunte ao assistente' : 'Preguntale al asistente'}</span>
        </div>
      </div>
    </div>
  )
}
