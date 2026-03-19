import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/',         label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/galerie',  label: 'Galerie' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact',  label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          Alex's Design
        </NavLink>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                'header__link' + (isActive ? ' header__link--active' : '')
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`header__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
