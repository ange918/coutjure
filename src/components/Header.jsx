import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { id: 'accueil',      label: 'Accueil' },
  { id: 'a-propos',     label: 'À propos' },
  { id: 'services',     label: 'Services' },
  { id: 'galerie',      label: 'Galerie' },
  { id: 'temoignages',  label: 'Avis' },
  { id: 'contact',      label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActive]    = useState('accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#accueil" className="header__logo" onClick={e => scrollTo(e, 'accueil')}>
          Alex's Design
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`header__link${activeSection === link.id ? ' header__link--active' : ''}`}
              onClick={e => scrollTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="header__cta-btn"
            onClick={e => scrollTo(e, 'contact')}
          >
            Prendre RDV
          </a>
        </nav>

        <button
          className={`header__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
