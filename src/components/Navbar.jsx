import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolioData'

export default function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const sectionIds = navLinks.map(({ to }) => to.slice(1))
    const updateActiveSection = () => {
      const current = sectionIds.reduce((active, id) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= 120 ? `#${id}` : active
      }, '#home')
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const themeButton = (
    <button
      type="button"
      onClick={onThemeToggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  )

  const linkClassName = (to) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      activeSection === to
        ? 'bg-white/10 text-white ring-1 ring-white/10'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  return (
    <nav className="site-nav fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3 text-white" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white transition group-hover:border-sky-400/30 group-hover:bg-white/10">
            SR
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-wide text-white">Sasangi Ranasingha</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={linkClassName(link.to)}
            >
              {link.label}
            </a>
          ))}
          <span className="ml-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Open for internships
          </span>
          {themeButton}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {themeButton}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div className={`site-nav-menu border-t border-white/10 bg-[#050816]/95 lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`${linkClassName(link.to)} rounded-xl px-4 py-3`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
