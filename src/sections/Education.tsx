import { GraduationCap, Award } from 'lucide-react'
import { Section } from '../components/Section'
import { education, certifications } from '../data/education'

export function Education() {
  return (
    <Section id="education" label="Education and certifications" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-fg">Education</h2>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-fg">
                {education.degree}
              </h3>
              <p className="text-accent font-medium mt-1">{education.field}</p>
              <p className="text-sm text-muted mt-2">{education.institution}</p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <span className="text-sm font-mono text-muted">{education.dateRange}</span>
                <span className="text-sm text-muted">·</span>
                <span className="text-sm font-medium text-fg">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-fg">Certifications</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-surface border border-border rounded-2xl p-6"
                >
                  <h3 className="text-base font-semibold text-fg">{cert.name}</h3>
                  <time className="text-sm text-muted font-mono mt-2 block">{cert.date}</time>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
