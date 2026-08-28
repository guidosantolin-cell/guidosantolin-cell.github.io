import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-6 overflow-x-auto px-6 py-4 text-sm font-medium text-neutral-500">
        <Link to="/" className="shrink-0 text-neutral-900">
          Inicio
        </Link>
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/proyecto/${p.slug}`}
            className="shrink-0 whitespace-nowrap hover:text-neutral-900"
          >
            {p.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}
