import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/projects'
import { accentClasses } from '../data/projects'
import { MinicardFeedbackCover } from './MinicardFeedbackCover'

export function ProjectCard({ project }: { project: CaseStudy }) {
  const accent = accentClasses[project.accent]
  return (
    <Link
      to={`/proyecto/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-100 transition hover:shadow-lg"
    >
      <div className={`aspect-[4/3] overflow-hidden ${accent.bg}`}>
        {project.coverComponent === 'minicard-feedback' ? (
          <MinicardFeedbackCover />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover object-left transition duration-300 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{project.product}</p>
        <p className="mt-1 text-sm text-neutral-400">{project.countries}</p>
      </div>
    </Link>
  )
}
