import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          VB
          <span className="logo-bracket">/&gt;</span>
        </NavLink>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[
            { to: '/', label: t('nav.home') },
            { to: '/about', label: t('nav.about') },
            { to: '/projects', label: t('nav.projects') },
            { to: '/contact', label: t('nav.contact') },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LanguageToggle />
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
