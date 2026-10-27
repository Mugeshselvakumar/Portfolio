import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'

export function About() {
  return (
    <Section id="about" label="About and technical skills" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-20">
          {/* About text */}
          <div>
            <SectionHeading
              eyebrow="About"
              title="Developer profile"
            />
            <div className="space-y-5">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i} className="text-muted leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-accent mb-8 font-mono">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h4 className={`text-sm font-semibold mb-3 ${group.isPrimary ? 'text-fg' : 'text-muted'}`}>
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                          group.isPrimary
                            ? 'bg-accent/5 border-accent/15 text-fg'
                            : 'bg-surface-alt border-border text-muted'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
