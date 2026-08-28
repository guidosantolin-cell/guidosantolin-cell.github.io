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
          <p className="mt-6 max-w-md text-neutral-600">
            Portafolio de proyectos de experiencia de usuario en Mercado Pago,
            enfocados en adquisición de productos financieros.
          </p>
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
