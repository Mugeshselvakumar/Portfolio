import { ExternalLink, BookOpen } from 'lucide-react'
import { Section } from '../components/Section'
import { publication } from '../data/publication'

export function Research() {
  return (
    <Section id="research" label="Research publication" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3 font-mono">
            Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-fg tracking-tight mb-8">
            Publication
          </h2>

          <article className="bg-bg border border-border rounded-2xl p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/5 rounded-xl shrink-0" aria-hidden="true">
                <BookOpen size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-xs font-mono text-accent tracking-wide uppercase">
                  {publication.publisher} · {publication.year}
                </span>
                <h3 className="text-xl font-bold text-fg mt-2 leading-snug">
                  {publication.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                  Authors
                </h4>
                <p className="text-sm text-fg">
                  {publication.authors.join(', ')}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                  Venue
                </h4>
                <p className="text-sm text-fg">{publication.venue}</p>
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                  About
                </h4>
                <p className="text-sm text-muted leading-relaxed">{publication.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                  DOI
                </h4>
                <p className="text-sm font-mono text-muted">{publication.doi}</p>
              </div>
            </div>

            <a
              href={publication.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent-hover transition-colors"
            >
              View Publication
              <ExternalLink size={16} />
            </a>

            <p className="mt-4 text-xs text-muted italic">
              {publication.contributionNote}
            </p>
          </article>
        </div>
      </div>
    </Section>
  )
}
