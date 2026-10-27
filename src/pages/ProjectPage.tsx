import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { projects } from '../data/projects'
import { ProjectPreview } from '../components/ProjectPreview'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="pt-24 lg:pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent">
              <Tag size={12} />
              {project.category}
            </span>
            <span className="text-xs text-muted">·</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={12} />
              {project.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fg tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">{project.shortDescription}</p>
        </header>

        {/* Preview */}
        <div className="mb-16">
          <ProjectPreview project={project} />
          {/* <p className="text-[10px] text-muted mt-2 italic">{project.previewLabel}</p> */}
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4 font-mono">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium text-fg bg-surface-alt border border-border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-12 divide-y divide-border">
          {/* Overview */}
          <div>
            <h2 className="text-xl font-bold text-fg mb-4">Overview</h2>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem */}
          <div className="pt-12">
            <h2 className="text-xl font-bold text-fg mb-4">Problem</h2>
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </div>

          {/* Features */}
          <div className="pt-12">
            <h2 className="text-xl font-bold text-fg mb-4">Implemented Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Notes */}
          <div className="pt-12">
            <h2 className="text-xl font-bold text-fg mb-4">Engineering Considerations</h2>
            <ul className="space-y-3">
              {project.engineeringNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-border mt-2 shrink-0" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="pt-12">
              <h2 className="text-xl font-bold text-fg mb-4">Results</h2>
              <ul className="space-y-3">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" aria-hidden="true" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Limitations */}
          {project.limitations && project.limitations.length > 0 && (
            <div className="pt-12">
              <h2 className="text-xl font-bold text-fg mb-4">Notes & Limitations</h2>
              <ul className="space-y-3">
                {project.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" aria-hidden="true" />
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Back link bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </div>
    </article>
  )
}
