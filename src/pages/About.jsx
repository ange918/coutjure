import { useEffect, useRef } from 'react'
import './About.css'

const values = [
  {
    icon: '❤️',
    title: 'Passion',
    desc: 'Chaque point de couture est posé avec amour. La mode est pour nous bien plus qu\'un métier — c\'est une vocation qui nous anime chaque jour.',
  },
  {
    icon: '🎯',
    title: 'Précision',
    desc: 'Du patron à la finition, nous apportons une attention méticuleuse à chaque détail, parce que c\'est dans les détails que naît la perfection.',
  },
  {
    icon: '✨',
    title: 'Personnalisation',
    desc: 'Votre unicité est notre inspiration. Chaque pièce est conçue autour de vous — votre morphologie, vos goûts, votre personnalité.',
  },
]

export default function About() {
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
    <div className="page-wrapper about-page">
      <div className="container">
        {/* Story */}
        <div className="about__story fade-in" ref={addRef}>
          <div className="about__story-text">
            <h1 className="section-title">Notre Histoire</h1>
            <p>
              Tout a commencé dans un petit atelier de Cotonou, avec une machine à coudre héritée de grand-mère
              et une passion sans bornes pour la couture. Alex a grandi entre les tissus, les patrons et les rires
              de femmes qui venaient chercher bien plus qu\'une robe — elles venaient chercher une version sublimée
              d\'elles-mêmes.
            </p>
            <p>
              Après des années de formation en stylisme, d\'apprentissage auprès des meilleurs artisans du Bénin
              et de voyages d\'inspiration entre Abidjan, Dakar et Paris, Alex a ouvert les portes de son propre salon
              en 2014. Depuis lors, <strong style={{ color: 'var(--text-primary)' }}>Alex's Design</strong> est
              devenu une référence incontournable de la couture sur mesure à Cotonou.
            </p>
            <p>
              Notre promesse est simple : vous offrir une expérience de couture unique, où votre confort et votre
              satisfaction passent avant tout. Parce que vous méritez des vêtements qui vous ressemblent vraiment.
            </p>
          </div>
          <div className="about__story-image">
            <img
              src="https://picsum.photos/id/338/500/600"
              alt="Atelier Alex's Design"
            />
          </div>
        </div>

        {/* Values */}
        <section className="about__values">
          <h2 className="section-title fade-in" ref={addRef} style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            Nos valeurs
          </h2>
          <p className="section-subtitle fade-in" ref={addRef} style={{ textAlign: 'center' }}>
            Les piliers qui guident chacune de nos créations
          </p>
          <div className="values__grid">
            {values.map((v, i) => (
              <div
                key={i}
                className="card value-card fade-in"
                ref={addRef}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="about__founder fade-in" ref={addRef}>
          <div className="founder-card card">
            <img
              src="https://picsum.photos/id/64/100/100"
              alt="Alex - Fondatrice"
              className="founder-card__avatar"
            />
            <div>
              <h3 className="founder-card__name">Alex</h3>
              <span className="founder-card__role">Fondatrice &amp; Styliste</span>
              <p className="founder-card__bio">
                « Je crois que la mode doit être accessible à toutes les femmes, quelle que soit leur taille ou leur
                budget. Mon atelier est un espace de création et de confiance, où chaque cliente repart avec le sourire
                et une pièce unique à son image. »
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
