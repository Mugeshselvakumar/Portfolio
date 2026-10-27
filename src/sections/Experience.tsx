import { Briefcase, GraduationCap } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'

const typeConfig = {
  training: { label: 'Training', icon: GraduationCap, color: 'text-blue-600' },
  internship: { label: 'Internship', icon: Briefcase, color: 'text-emerald-600' },
  employment: { label: 'Employment', icon: Briefcase, color: 'text-fg' },
}

export function Experience() {
  return (
    <Section id="experience" label="Experience and training" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Training & Experience"
          description="Professional training and internship experience in software development."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {experience.map((entry) => {
              const config = typeConfig[entry.type]
              const Icon = config.icon

              return (
                <article
                  key={entry.id}
                  className="relative pl-12 lg:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 lg:left-4 top-1 w-4 h-4 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className={config.color} aria-hidden="true" />
                        <span className={`text-xs font-medium uppercase tracking-wide ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-fg">{entry.title}</h3>
                      <p className="text-sm text-accent font-medium">{entry.organization}</p>
                    </div>
                    <time className="text-sm text-muted font-mono whitespace-nowrap">
                      {entry.dateRange}
                    </time>
                  </div>

                  {entry.description && (
                    <p className="text-muted leading-relaxed mb-4">{entry.description}</p>
                  )}

                  <ul className="space-y-2">
                    {entry.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full bg-border mt-2 shrink-0" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
