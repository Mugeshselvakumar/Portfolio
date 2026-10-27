import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/navigation'
import { profile } from '../data/profile'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('/#') && location.pathname === '/') {
        e.preventDefault()
        const id = href.replace('/#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setMenuOpen(false)
      }
    },
    [location.pathname]
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16 lg:h-20"
        aria-label="Primary navigation"
      >
        <Link
          to="/"
          className="text-fg font-semibold text-lg tracking-tight hover:text-accent transition-colors"
          aria-label={`${profile.name} — Home`}
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {profile.resumeAvailable && (
            <li>
              <a
                href={profile.resumePath}
                download
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Resume
              </a>
            </li>
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-fg hover:text-accent transition-colors rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-bg/98 backdrop-blur-lg z-40"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-medium text-fg hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {profile.resumeAvailable && (
              <a
                href={profile.resumePath}
                download
                className="text-2xl font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Resume
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
