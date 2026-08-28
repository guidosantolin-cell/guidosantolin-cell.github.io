type Step = {
  emoji: string
  title: string
  body: string
}

const steps: Step[] = [
  { emoji: '🔍', title: 'Relevar y analizar', body: 'las matrices productivas.' },
  {
    emoji: '🎯',
    title: 'Identificar oportunidades de mejora',
    body: 'a partir de la propuesta existente en MLB.',
  },
  {
    emoji: '🔁',
    title: 'Iterar el contenido e incorporar mejoras',
    body: 'aplicables a todos los sites donde la TC esté productiva.',
  },
  {
    emoji: '💡',
    title: 'Diseñar una única matriz',
    body: 'escalable a todos los sites.',
  },
]

export function WorkProcessSteps() {
  return (
    <div className="relative mt-6">
      <div className="absolute top-4 right-6 left-6 hidden h-px bg-neutral-200 sm:block" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-500">
              {i + 1}
            </div>
            <div className="mt-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
              <span className="text-xl">{step.emoji}</span>
              <p className="mt-2 text-sm font-medium text-neutral-900">{step.title}</p>
              <p className="mt-1 text-sm text-neutral-600">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
