import { useParams, Link } from 'react-router-dom'
import { projects, accentClasses } from '../data/projects'
import { RichText } from '../components/RichText'
import { MatrixScanTable } from '../components/MatrixScanTable'
import { WorkProcessSteps } from '../components/WorkProcessSteps'
import { Filmstrip } from '../components/Filmstrip'
import { movimientosSample } from '../data/movimientosSample'
import { MovementsExplorer } from '../components/MovementsExplorer'
import { MapDrawReveal } from '../components/MapDrawReveal'
import { MaxwellConversation } from '../components/MaxwellConversation'
import { maxwellConversations } from '../data/maxwellConversations'
import { MinicardFeedbackCover } from '../components/MinicardFeedbackCover'
import { HandCardCover } from '../components/HandCardCover'

export function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p>Proyecto no encontrado.</p>
        <Link to="/" className="mt-4 inline-block text-indigo-600">
          Volver al inicio
        </Link>
      </main>
    )
  }

  const accent = accentClasses[project.accent]

  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <div>
        <p className="text-sm text-neutral-400">{project.period}</p>
        <h1 className="mt-2 text-4xl font-semibold text-neutral-900">{project.title}</h1>
        {project.subtitle && <p className="mt-2 text-lg text-neutral-500">{project.subtitle}</p>}
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-neutral-500">
          <span className={`rounded-full px-3 py-1 ${accent.bg} ${accent.text}`}>
            {project.product}
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1">{project.countries}</span>
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full bg-neutral-100 px-3 py-1">
              {tool}
            </span>
          ))}
        </div>
        {project.team && (
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-500">
            {project.team.map((member) => (
              <p key={member.role}>
                <span className="font-medium text-neutral-700">{member.role}:</span>{' '}
                {member.name}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10">
        {project.coverComponent === 'minicard-feedback' ? (
          <div className="overflow-hidden rounded-xl border border-neutral-100">
            <MinicardFeedbackCover />
          </div>
        ) : project.coverComponent === 'hand-card' ? (
          <div className="mx-auto aspect-[9/16] max-w-xs overflow-hidden rounded-xl border border-neutral-100">
            <HandCardCover />
          </div>
        ) : (
          project.coverImage && (
            <img
              src={project.coverImage}
              alt={`Vista general de ${project.title}`}
              className="w-full rounded-xl border border-neutral-100"
            />
          )
        )}
        {project.coverCaption && (
          <p className="mt-2 text-xs text-neutral-400">{project.coverCaption}</p>
        )}
      </div>

      {project.challenge && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Contexto</h2>
          {project.challenge.intro.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-neutral-600">
              {paragraph}
            </p>
          ))}

          {project.challenge.content && (
            <>
              <p className="mt-6 font-medium text-neutral-900">Challenge</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
                {project.challenge.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {project.challenge.solution && (
            <>
              <p className="mt-6 font-medium text-neutral-900">Solución</p>
              <p className="mt-1 text-neutral-600">{project.challenge.solution}</p>
            </>
          )}
        </div>
      )}

      {project.objectivesKpis && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Objetivos y KPIs</h2>
          <p className="mt-3 font-medium text-neutral-900">Negocio</p>
          <p className="mt-1 text-neutral-600">{project.objectivesKpis.negocio}</p>
          {project.objectivesKpis.experiencia && (
            <>
              <p className="mt-4 font-medium text-neutral-900">Experiencia</p>
              <p className="mt-1 text-neutral-600">{project.objectivesKpis.experiencia}</p>
            </>
          )}
          <p className="mt-4 font-medium text-neutral-900">KPIs</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
            {project.objectivesKpis.kpis.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {project.scope && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Alcance e impactos</h2>
          <p className="mt-3 text-neutral-600">{project.scope.intro}</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {project.scope.groups.map((group) => (
              <div key={group.title}>
                <p className="font-medium text-neutral-900">{group.title}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.mapReveal && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Entendimiento</h2>
          <p className="mt-3 text-neutral-600">
            Mapeamos el flujo actual y las alternativas de solución para entender todos los
            puntos de contacto involucrados.
          </p>
          <div className="mt-4">
            <MapDrawReveal src={project.mapReveal.image} alt="Mapa de entendimiento del flujo" />
          </div>
        </div>
      )}

      {project.workProcess && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Proceso de trabajo</h2>
          <p className="mt-3 text-neutral-600">{project.workProcess.intro}</p>
          <WorkProcessSteps />
        </div>
      )}

      {project.firstSteps && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Primeros pasos</h2>
          <p className="mt-4 font-medium text-neutral-900">{project.firstSteps.title}</p>
          <p className="mt-1 text-neutral-600">{project.firstSteps.intro}</p>
          {project.firstSteps.bullets.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
              {project.firstSteps.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <div className="mt-6 border-l-2 border-neutral-100 pl-4">
            <p className="text-sm font-medium text-neutral-900">Surgió un primer problema a resolver</p>
            <p className="mt-1 text-neutral-600">{project.firstSteps.problem}</p>
          </div>

          <div className="mt-4 border-l-2 border-neutral-100 pl-4">
            <p className="text-sm font-medium text-neutral-900">Decidimos</p>
            <p className="mt-1 font-medium text-neutral-900">{project.firstSteps.decisionTitle}</p>
            <p className="mt-1 text-neutral-600">{project.firstSteps.decisionBody}</p>
          </div>
        </div>
      )}

      {project.customSections && (
        <>
          {project.customSections.map((section) => (
            <div key={section.title} className="mt-16">
              <h2 className="text-2xl font-semibold text-neutral-900">{section.title}</h2>
              {section.body && <p className="mt-3 text-neutral-600">{section.body}</p>}
              {section.items && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.video && (
                <div className="mt-3">
                  <Filmstrip
                    src={section.video.src}
                    alt={section.title}
                    orientation={section.video.orientation}
                  />
                </div>
              )}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="mt-3 w-full rounded-xl border border-neutral-100"
                />
              )}
              {section.images && (
                <div className="mt-3 grid gap-4 sm:grid-cols-3">
                  {section.images.map((img) => (
                    <div key={img.src}>
                      <div className="h-56 overflow-hidden rounded-xl border border-neutral-100">
                        <img
                          src={img.src}
                          alt={img.caption ?? section.title}
                          className="w-full object-cover object-top"
                        />
                      </div>
                      {img.caption && (
                        <p className="mt-1.5 text-center text-xs text-neutral-500">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.note && <p className="mt-3 text-xs text-neutral-400">{section.note}</p>}
            </div>
          ))}
        </>
      )}

      {project.research && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">
            {project.research.title ?? 'Relevamiento y análisis'}
          </h2>
          <p className="mt-3 text-neutral-600">{project.research.intro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-600">
            {project.research.findings.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
          {project.research.image && (
            <img
              src={project.research.image}
              alt={project.research.title ?? 'Relevamiento y análisis'}
              className="mt-4 w-full rounded-xl border border-neutral-100"
            />
          )}
        </div>
      )}

      {project.opportunities && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Identificación de oportunidad de mejora
          </h2>
          <p className="mt-3 text-neutral-600">{project.opportunities.intro}</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {project.opportunities.groups.map((group) => (
              <div key={group.title}>
                <p className="font-medium text-neutral-900">{group.title}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.benchmark && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Benchmark</h2>
          <p className="mt-3 text-neutral-600">{project.benchmark.intro}</p>

          {project.benchmark.image && (
            <img
              src={project.benchmark.image}
              alt="Referencia gráfica del benchmark"
              className="mt-4 w-full rounded-xl border border-neutral-100"
            />
          )}

          {project.benchmark.images && (
            <div className="mt-4 space-y-4">
              {project.benchmark.images.map((img) => (
                <div key={img.src}>
                  <img
                    src={img.src}
                    alt={img.caption ?? 'Referencia gráfica del benchmark'}
                    className="w-full rounded-xl border border-neutral-100"
                  />
                  {img.caption && (
                    <p className="mt-1.5 text-center text-xs text-neutral-500">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {project.benchmark.findings && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-600">
              {project.benchmark.findings.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          )}

          {project.benchmark.recommendationsIntro && (
            <p className="mt-6 font-medium text-neutral-900">
              {project.benchmark.recommendationsIntro}
            </p>
          )}
          {project.benchmark.recommendations && (
            <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-600">
              {project.benchmark.recommendations.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {project.contentExploration.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">
            {project.contentExplorationTitle ?? 'Exploraciones de contenido'}
          </h2>
          <div className="mt-6 space-y-10">
            {project.contentExploration.map((stage) => (
              <div key={stage.title}>
                {stage.title && (
                  <p className="font-medium text-neutral-900">{stage.title}</p>
                )}
                <p className="mt-1 text-neutral-600">{stage.body}</p>

                {stage.video && (
                  <div className="mt-3">
                    <Filmstrip
                      src={stage.video.src}
                      alt={stage.title}
                      orientation={stage.video.orientation}
                    />
                  </div>
                )}

                {stage.image && (
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="mt-3 w-full rounded-xl border border-neutral-100"
                  />
                )}

                {stage.images && (
                  <div className="mt-3 grid gap-4 sm:grid-cols-3">
                    {stage.images.map((img) => (
                      <div key={img.src}>
                        <div className="h-56 overflow-hidden rounded-xl border border-neutral-100">
                          <img
                            src={img.src}
                            alt={img.caption ?? stage.title}
                            className="w-full object-cover object-top"
                          />
                        </div>
                        {img.caption && (
                          <p className="mt-1.5 text-center text-xs text-neutral-500">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {stage.subsections && (
                  <div
                    className={
                      stage.boxed
                        ? 'mt-4 rounded-2xl bg-neutral-50 p-6 sm:p-8'
                        : 'mt-4 space-y-6'
                    }
                  >
                    <div className={stage.boxed ? 'grid gap-8 sm:grid-cols-3' : 'space-y-6'}>
                      {stage.subsections.map((sub) => (
                        <div key={sub.title}>
                          <p className="text-sm font-medium text-neutral-900">{sub.title}</p>
                          {sub.body && (
                            <p className="mt-1 whitespace-pre-line text-sm text-neutral-600">
                              {sub.body}
                            </p>
                          )}
                          {sub.video && (
                            <div className="mt-2">
                              <Filmstrip
                                src={sub.video.src}
                                alt={sub.title}
                                orientation={sub.video.orientation}
                                size={220}
                              />
                            </div>
                          )}
                          {sub.items && (
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600">
                              {sub.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {project.beforeAfter.map((ba) => (
        <div key={ba.title} className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">{ba.title}</h2>
          {ba.body && <p className="mt-3 text-neutral-600">{ba.body}</p>}
          {ba.items && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-600">
              {ba.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {(ba.beforeImage || ba.afterImage) && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                {ba.beforeImage ? (
                  <img
                    src={ba.beforeImage}
                    alt={`${ba.title} — ${ba.beforeLabel ?? 'Antes'}`}
                    className="w-full rounded-xl border border-neutral-100"
                  />
                ) : (
                  <div className="rounded-xl border border-dashed border-neutral-200 p-6 text-center text-sm text-neutral-400">
                    {ba.beforeLabel ?? 'Antes'}
                  </div>
                )}
                <p className="mt-2 text-center text-xs font-medium text-neutral-400">
                  {ba.beforeLabel ?? 'Antes'}
                </p>
              </div>
              <div>
                {ba.afterImage ? (
                  <img
                    src={ba.afterImage}
                    alt={`${ba.title} — ${ba.afterLabel ?? 'Después'}`}
                    className="w-full rounded-xl border border-neutral-100"
                  />
                ) : (
                  <div className="rounded-xl border border-dashed border-neutral-200 p-6 text-center text-sm text-neutral-400">
                    {ba.afterLabel ?? 'Después'}
                  </div>
                )}
                <p className="mt-2 text-center text-xs font-medium text-neutral-400">
                  {ba.afterLabel ?? 'Después'}
                </p>
              </div>
            </div>
          )}

          {ba.notes && (
            <div className="mt-6 space-y-4 border-l-2 border-neutral-100 pl-4">
              {ba.notes.map((note) => (
                <div key={note.title}>
                  <p className="text-sm font-medium text-neutral-900">{note.title}</p>
                  <p className="mt-1 text-sm text-neutral-600">{note.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {project.prototypes && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Prototipos</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {project.prototypes.map((proto) => {
              const naturalHeight = proto.interactive ? 624 : 280
              const scale = 0.46
              return (
                <div key={proto.title} className="group relative">
                  <p className="font-medium text-neutral-900">{proto.title}</p>
                  {proto.description && (
                    <p className="mt-1 text-sm text-neutral-600">{proto.description}</p>
                  )}
                  <div className="relative mt-3" style={{ height: naturalHeight * scale }}>
                    <div className="proto-preview absolute left-0 top-0 w-[360px] origin-top-left group-hover:z-30 group-hover:shadow-2xl">
                      {proto.video && (
                        <Filmstrip
                          src={proto.video.src}
                          alt={proto.title}
                          orientation={proto.video.orientation}
                        />
                      )}
                      {proto.image && (
                        <img
                          src={proto.image}
                          alt={proto.title}
                          className="w-full rounded-xl border border-neutral-100"
                        />
                      )}
                      {proto.interactive && (
                        <MaxwellConversation config={maxwellConversations[proto.interactive]} />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {project.outcome && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Resultado</h2>
          <p className="mt-3 text-neutral-600">{project.outcome}</p>
          {project.outcomeVideo && (
            <div className="mt-4">
              <Filmstrip
                src={project.outcomeVideo.src}
                alt="Resultado final"
                orientation={project.outcomeVideo.orientation}
              />
            </div>
          )}
          {project.matrixScan && (
            <div className="mt-4">
              <MatrixScanTable />
              <p className="mt-2 text-xs text-neutral-400">
                Muestra representativa de la matriz — no refleja el total de casos.
              </p>
            </div>
          )}
          {project.movementScan && (
            <div className="mt-4">
              <MatrixScanTable
                labelHeader="Type (movimiento)"
                columns={[
                  { key: 'nombre', label: 'Row Activity — Nombre', width: 160 },
                  { key: 'categoria', label: 'Row Activity — Categoría UX', width: 160 },
                ]}
                rows={movimientosSample}
              />
              <p className="mt-2 text-xs text-neutral-400">
                Muestra representativa de la matriz (pestaña "Keys alineadas a Activity") — no
                refleja el total de casos.
              </p>
            </div>
          )}

          {project.movementsExplorer && (
            <div className="mt-8">
              <p className="mb-3 font-medium text-neutral-900">
                Explorá la matriz completa
              </p>
              <MovementsExplorer />
            </div>
          )}

          {project.sheetLink && (
            <a
              href={project.sheetLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Ver la matriz completa
              <span aria-hidden>↗</span>
            </a>
          )}

          {project.handoffLink && (
            <a
              href={project.handoffLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Ir al Handoff
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      )}

      {!project.outcome && project.handoffLink && (
        <div className="mt-16">
          <a
            href={project.handoffLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Ir al Handoff
            <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </main>
  )
}
