import { Link } from 'react-router-dom'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('work')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-[90vh] flex items-center pt-20 lg:pt-0" aria-label="Introduction">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6 font-mono">
              {profile.heroEyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg tracking-tight leading-[1.1]">
              {profile.heroHeadline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              {profile.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/#work"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg rounded-lg font-medium text-sm hover:bg-fg/90 transition-colors"
              >
                {profile.primaryCTA}
                <ArrowDown size={16} />
              </a>
              {profile.resumeAvailable && (
                <a
                  href={profile.resumePath}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-fg rounded-lg font-medium text-sm hover:border-fg/30 transition-colors"
                >
                  {profile.secondaryCTA}
                </a>
              )}
              {profile.linkedIn.visible && (
                <a
                  href={profile.linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted hover:text-accent transition-colors rounded-lg"
                  aria-label="LinkedIn profile"
                >
                                  <ExternalLink size={20} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Decorative code-inspired composition */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="w-72 h-80 relative">
              {/* Code block composition */}
              <div className="absolute inset-0 bg-fg rounded-2xl p-6 text-sm font-mono leading-relaxed overflow-hidden">
                <div className="space-y-2">
                  <span className="text-green-400">{'// mugesh.config'}</span>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-300">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-green-300">"Mugesh S"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">stack</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-yellow-300">[</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-green-300">"Java"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-green-300">".NET"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-green-300">"React"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-green-300">"MySQL"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-yellow-300">]</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">focus</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-green-300">"Cybersecurity"</span>
                  </div>
                  <div>
                    <span className="text-yellow-300">{'}'}</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
                {/* Cursor blink */}
                <div className="mt-4 flex items-center gap-1">
                  <span className="text-muted">{'>'}</span>
                  <span className="w-2 h-4 bg-accent animate-pulse" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-accent/20 rounded-xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-accent/5 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 lg:mt-24 pb-8">
          <p className="text-xs text-muted tracking-wide">
            Based in {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}
