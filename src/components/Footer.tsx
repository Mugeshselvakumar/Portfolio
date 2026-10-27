import { ExternalLink, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-fg">{profile.name}</p>
            <p className="text-sm text-muted mt-1">{profile.heroEyebrow}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-muted hover:text-accent transition-colors rounded-lg"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
            {profile.linkedIn.visible && (
              <a
                href={profile.linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent transition-colors rounded-lg"
                aria-label="LinkedIn profile"
              >
                              <ExternalLink size={20} aria-hidden="true" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 text-muted hover:text-accent transition-colors rounded-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {profile.name}. Built with React and TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}
