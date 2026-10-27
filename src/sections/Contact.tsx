import { useState, useCallback } from 'react'
import { Mail, ExternalLink, Copy, Check } from 'lucide-react'
import { Section } from '../components/Section'
import { profile } from '../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select a temporary textarea
      const textarea = document.createElement('textarea')
      textarea.value = profile.email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        // If even fallback fails, open mailto
        window.location.href = `mailto:${profile.email}`
      }
      document.body.removeChild(textarea)
    }
  }, [])

  return (
    <Section id="contact" label="Contact" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3 font-mono">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-fg tracking-tight">
            Let's build something useful.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Interested in working together? Feel free to reach out.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email link */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg rounded-lg font-medium text-sm hover:bg-fg/90 transition-colors"
            >
              <Mail size={16} />
              Send Email
            </a>

            {/* Copy email */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-fg rounded-lg font-medium text-sm hover:border-fg/30 transition-colors"
              aria-label={copied ? 'Email address copied' : 'Copy email address'}
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* LinkedIn */}
            {profile.linkedIn.visible && (
              <a
                href={profile.linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-fg rounded-lg font-medium text-sm hover:border-fg/30 transition-colors"
              >
                              <ExternalLink size={20} aria-hidden="true" />
                LinkedIn
              </a>
            )}
          </div>

          {/* Resume download */}
          {profile.resumeAvailable && (
            <div className="mt-8">
              <a
                href={profile.resumePath}
                download
                className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
              >
                Download Resume (PDF)
              </a>
            </div>
          )}

          <p className="mt-8 text-sm text-muted">{profile.email}</p>

          {profile.phoneVisible && (
            <p className="mt-2 text-sm text-muted">{profile.phone}</p>
          )}
        </div>
      </div>
    </Section>
  )
}
