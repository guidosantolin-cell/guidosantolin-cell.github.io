import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <section className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-900">
            Guido Santolin
          </h1>
          <p className="mt-2 text-xl text-neutral-500">UX Designer</p>
          <div className="mt-6 flex items-start gap-4">
            <p className="max-w-md text-neutral-600">
              Resumen de los principales proyectos realizados durante estos últimos meses
            </p>
            <div className="relative h-28 w-20 shrink-0 animate-card-float overflow-hidden rounded-xl shadow-lg">
              <img
                src="/home/hero-card.png"
                alt="Tarjeta de Crédito Mercado Pago"
                className="h-full w-full object-cover"
                style={{ objectPosition: '50% 32%' }}
              />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-y-8 left-0 w-6 animate-shine-sweep bg-white/40 blur-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex aspect-square items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-amber-100" />
          <img
            src="/profile/guido.jpeg"
            alt="Guido Santolin"
            className="relative aspect-square w-[85%] rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}
