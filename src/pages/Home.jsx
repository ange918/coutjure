import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const savoirFaire = [
  {
    icon: '✂️',
    title: 'Robes de soirée',
    desc: 'Des silhouettes sculptées avec soin, pensées pour magnifier chaque morphologie et captiver tous les regards.',
  },
  {
    icon: '👗',
    title: 'Retouches express',
    desc: 'Besoin d\'un ajustement rapide ? Nos retouches express vous garantissent un rendu impeccable en un temps record.',
  },
  {
    icon: '🧵',
    title: 'Créations sur mesure',
    desc: 'De l\'esquisse à l\'essayage final, chaque création est un dialogue entre votre vision et notre savoir-faire.',
  },
]

const stats = [
  { value: '10+', label: 'ans d\'expérience' },
  { value: '500+', label: 'clientes satisfaites' },
  { value: '100%', label: 'sur mesure' },
]

export default function Home() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__content container">
          <h1 className="hero__title">Alex's Design</h1>
          <p className="hero__subtitle">
            Couture sur mesure · Élégance &amp; Précision · Cotonou, Bénin
          </p>
          <div className="hero__ctas">
            <Link to="/services" className="btn-primary">Voir nos services</Link>
            <Link to="/contact" className="btn-outline">Prendre RDV</Link>
          </div>
        </div>
        <div className="hero__scroll-hint">↓</div>
      </section>

      {/* Savoir-faire */}
      <section className="section savoir-faire">
        <div className="container">
          <div className="section-header" ref={addRef} style={{ textAlign: 'center' }}>
            <h2 className="section-title fade-in" ref={addRef}>Notre savoir-faire</h2>
            <p className="section-subtitle fade-in" ref={addRef}>
              Une expertise artisanale au service de votre élégance
            </p>
          </div>
          <div className="savoir-faire__grid">
            {savoirFaire.map((item, i) => (
              <div
                key={i}
                className="card savoir-faire__card fade-in"
                ref={addRef}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className="savoir-faire__icon">{item.icon}</span>
                <h3 className="savoir-faire__title">{item.title}</h3>
                <p className="savoir-faire__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <div
                key={i}
                className="stats__item fade-in"
                ref={addRef}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <span className="stats__value">{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section cta-band">
        <div className="container cta-band__inner fade-in" ref={addRef}>
          <div>
            <h2 className="section-title">Prête à vous sublimer ?</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Prenez rendez-vous dès aujourd'hui et laissez-nous créer votre pièce unique.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">Contactez-nous</Link>
        </div>
      </section>
    </div>
  )
}
