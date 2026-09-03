import { useEffect, useRef, useState } from 'react'

export function MinicardFeedbackCover() {
  const [pressed, setPressed] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    let cancelled = false
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = window.setTimeout(resolve, ms)
        timers.current.push(t)
      })

    ;(async () => {
      while (!cancelled) {
        setShowFeedback(false)
        setPressed(false)
        await wait(1800)
        if (cancelled) return
        setPressed(true)
        await wait(350)
        if (cancelled) return
        setShowFeedback(true)
        await wait(3200)
        if (cancelled) return
      }
    })()

    return () => {
      cancelled = true
      timers.current.forEach((t) => clearTimeout(t))
      timers.current = []
    }
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-100 p-6">
      <div className="relative h-[300px] w-[220px] overflow-hidden rounded-[1.75rem] border-4 border-neutral-900 bg-white shadow-xl">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 p-3 transition-transform duration-500 ease-in-out"
            style={{ transform: showFeedback ? 'translateX(-100%)' : 'translateX(0)' }}
          >
            <p className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
              Tarjeta de crédito
              <span className="inline-flex h-3.5 w-5">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
                <span className="-ml-1.5 h-3.5 w-3.5 rounded-full bg-amber-400 opacity-80" />
              </span>
            </p>
            <div className="mt-2 rounded-xl bg-gradient-to-br from-neutral-900 to-indigo-950 p-3">
              <p className="text-[11px] leading-snug text-white">
                Gratis y con <span className="font-bold">$ {'{10.000.000}'}</span> de límite
              </p>
              <p className="mt-2 flex items-center gap-1 text-[10px] text-neutral-300">
                <span className="text-xs">▦</span> 3 cuotas sin interés en Mercado Libre
              </p>
              <button
                className={`mt-2.5 w-full rounded-full bg-white py-1.5 text-[11px] font-medium text-indigo-700 transition-transform ${
                  pressed ? 'scale-95 bg-neutral-200' : 'scale-100'
                }`}
              >
                Pedir tarjeta
              </button>
            </div>
          </div>

          <div
            className="absolute inset-0 flex flex-col p-3 transition-transform duration-500 ease-in-out"
            style={{ transform: showFeedback ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="flex justify-end">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-50 text-[10px] text-indigo-600">
                ✕
              </span>
            </div>
            <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600">
              <span className="h-0.5 w-3.5 rounded-full bg-white" />
            </div>
            <p className="mt-2.5 text-[13px] font-semibold leading-snug text-neutral-900">
              No puedes pedir la tarjeta de crédito
            </p>
            <p className="mt-1.5 text-[10px] leading-snug text-neutral-500">
              Tenías una tarjeta vinculada a otra cuenta que está a tu nombre pero ya fue
              cancelada.
            </p>
            <button className="mt-auto w-full rounded-full bg-indigo-600 py-1.5 text-[11px] font-medium text-white">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
