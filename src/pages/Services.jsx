import { useEffect, useRef } from 'react'
import './Services.css'

const services = [
  {
    icon: '💍',
    title: 'Robe de mariée',
    price: 'Sur devis',
    desc: 'Chaque robe est une œuvre unique, taillée avec précision pour le plus beau jour de votre vie.',
    accent: 'purple',
  },
  {
    icon: '👔',
    title: 'Costume sur mesure',
    price: 'À partir de 120 000 FCFA',
    desc: 'Taillé pour vous — une coupe impeccable qui épouse parfaitement votre silhouette.',
    accent: 'teal',
  },
  {
    icon: '✂️',
    title: 'Retouche express',
    price: 'À partir de 5 000 FCFA',
    desc: 'Rapide et impeccable — vos ajustements réalisés dans les meilleurs délais.',
    accent: 'purple',
  },
  {
    icon: '🎀',
    title: 'Tenue de cérémonie',
    price: 'À partir de 60 000 FCFA',
    desc: 'Élégance pour chaque occasion — des créations qui subliment vos moments festifs.',
    accent: 'teal',
  },
]

export default function Services() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  return (
    <div className="page-wrapper services-page">
      <div className="container">
        <div className="page-header fade-in" ref={addRef}>
          <h1 className="section-title">Nos Services</h1>
          <p className="section-subtitle">
            De la conception à la finition, nous donnons vie à vos idées les plus élégantes.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`card service-card service-card--${s.accent} fade-in`}
              ref={addRef}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <span className="service-card__price">{s.price}</span>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services__note fade-in" ref={addRef}>
          <p>
            Tous nos tarifs sont indicatifs et peuvent varier selon la complexité du modèle et les matières choisies.
            <br />
            <strong style={{ color: 'var(--text-primary)' }}>Contactez-nous</strong> pour un devis personnalisé.
          </p>
        </div>
      </div>
    </div>
  )
}
