import { useEffect, useRef, useState } from 'react'

type Turn =
  | { from: 'user'; text: string }
  | { from: 'maxwell'; text: string }
  | { from: 'widget' }

const script: Turn[] = [
  { from: 'user', text: 'Quiero una tarjeta de crédito' },
  {
    from: 'maxwell',
    text: '¡Hola, {nombre user}! Tenés una tarjeta esperándote con $ {limit_amount} de límite y beneficios exclusivos:\n\n• 100% gratis: no pagás mantenimiento, renovación ni envío\n• Hasta {n} cuotas sin interés en Mercado Libre\n\n¿Avanzamos con el pedido de la tarjeta?',
  },
  { from: 'user', text: 'Sí, dale' },
  {
    from: 'maxwell',
    text: '¡Bien! La dirección donde enviaremos la tarjeta física es {address}.\n\n¿Te parece bien?',
  },
  { from: 'user', text: 'No, está bien' },
  { from: 'widget' },
]

const finalReply =
  '¡Excelente! Tu Tarjeta de crédito está lista. 🎉\n\n• El plástico llegará pronto pero ya podés comprar online con tu tarjeta virtual.\n• Conocé tus nuevos beneficios exclusivos.\n\n¿Necesitás algo más?'

const widgetEcho = 'Pedir tarjeta gratis'

export function MaxwellConversation() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [widgetDone, setWidgetDone] = useState(false)
  const [showEcho, setShowEcho] = useState(false)
  const [showFinal, setShowFinal] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
  }

  const play = () => {
    clearTimers()
    setVisibleCount(0)
    setTyping(false)
    setWidgetDone(false)
    setShowEcho(false)
    setShowFinal(false)

    let delay = 400
    script.forEach((turn, i) => {
      if (turn.from === 'maxwell') {
        timers.current.push(
          window.setTimeout(() => setTyping(true), delay),
        )
        delay += 900
      }
      timers.current.push(
        window.setTimeout(() => {
          setTyping(false)
          setVisibleCount(i + 1)
        }, delay),
      )
      delay += turn.from === 'user' ? 900 : 1400
    })
  }

  useEffect(() => {
    play()
    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [visibleCount, typing, widgetDone, showEcho, showFinal])

  const handleWidgetClick = () => {
    setWidgetDone(true)
    setShowEcho(true)
    window.setTimeout(() => setTyping(true), 700)
    window.setTimeout(() => {
      setTyping(false)
      setShowFinal(true)
    }, 1900)
  }

  const visible = script.slice(0, visibleCount)

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
        {visible.map((turn, i) =>
          turn.from === 'widget' ? (
            <div key={i} />
          ) : (
            <div
              key={i}
              className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm ${
                turn.from === 'user'
                  ? 'self-end rounded-br-sm bg-indigo-600 text-white'
                  : 'self-start rounded-bl-sm border border-neutral-200 bg-white text-neutral-800'
              }`}
            >
              {turn.text}
            </div>
          ),
        )}

        {showEcho && (
          <div className="max-w-[80%] animate-[fadeIn_0.3s_ease] self-end whitespace-pre-line rounded-2xl rounded-br-sm bg-indigo-600 px-3.5 py-2.5 text-sm text-white">
            {widgetEcho}
          </div>
        )}

        {showFinal && (
          <div className="max-w-[80%] animate-[fadeIn_0.3s_ease] self-start whitespace-pre-line rounded-2xl rounded-bl-sm border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-800">
            {finalReply}
          </div>
        )}

        {typing && (
          <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-neutral-200 bg-white px-3.5 py-2.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:300ms]" />
          </div>
        )}

        {visible.some((t) => t.from === 'widget') && !widgetDone && (
          <div className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200">
              <span className="text-xs">💳</span>
            </div>
            <p className="mt-3 text-base font-semibold text-neutral-900">
              Vas a pedir la tarjeta de crédito
            </p>
            <dl className="mt-3 divide-y divide-neutral-100 text-sm">
              <div className="flex items-center justify-between py-2">
                <dt className="text-neutral-500">Límite</dt>
                <dd className="font-medium text-neutral-900">$ {'{limit_amount}'}</dd>
              </div>
              <div className="flex items-center justify-between py-2">
                <dt className="text-neutral-500">Mantenimiento</dt>
                <dd className="font-medium text-neutral-900">Gratis, sin costos ocultos</dd>
              </div>
              <div className="flex items-center justify-between py-2">
                <dt className="text-neutral-500">Vencimiento</dt>
                <dd className="font-medium text-neutral-900">Día {'{day}'} de cada mes</dd>
              </div>
              <div className="flex items-center justify-between py-2">
                <dt className="text-neutral-500">Enviar tarjeta a</dt>
                <dd className="font-medium text-neutral-900">{'{address}'}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-neutral-500">
              Al pedir la tarjeta, estás aceptando sus{' '}
              <span className="text-indigo-600 underline">Términos y condiciones.</span>
            </p>
            <button
              onClick={handleWidgetClick}
              className="mt-4 w-full rounded-full bg-indigo-600 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              {widgetEcho}
            </button>
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
