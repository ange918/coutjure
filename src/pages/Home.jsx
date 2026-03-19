import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const whyUs = [
  { icon: 'bx bx-scissors',    title: 'Expertise artisanale',    desc: 'Plus de 10 ans de maîtrise dans l\'art de la coupe et de la couture haute qualité.' },
  { icon: 'bx bx-crown',       title: 'Qualité premium',         desc: 'Uniquement des tissus sélectionnés avec soin pour garantir un résultat à la hauteur de vos attentes.' },
  { icon: 'bx bx-time-five',   title: 'Délais respectés',        desc: 'Votre temps est précieux. Nous tenons nos engagements et livrons dans les délais convenus.' },
  { icon: 'bx bx-user-check',  title: 'Sur mesure total',        desc: 'Chaque création est pensée pour vous, de la prise de mesures jusqu\'à l\'essayage final.' },
  { icon: 'bx bx-heart',       title: 'Passion & Dévouement',    desc: 'Nous mettons tout notre cœur dans chaque pièce pour que vous vous sentiez unique et confident(e).' },
  { icon: 'bx bx-medal',       title: 'Satisfaction garantie',   desc: 'Votre satisfaction est notre priorité absolue. Nous retravaillons jusqu\'à la perfection.' },
]

const galleryImages = [
  { id: 10,  w: 400, h: 500 },
  { id: 20,  w: 400, h: 400 },
  { id: 30,  w: 400, h: 500 },
  { id: 40,  w: 400, h: 450 },
  { id: 50,  w: 400, h: 500 },
  { id: 60,  w: 400, h: 420 },
  { id: 70,  w: 400, h: 480 },
  { id: 80,  w: 400, h: 440 },
]

const testimonials = [
  {
    name: 'Aminata Sow',
    role: 'Mariée 2024',
    text: 'Alex a réalisé ma robe de mariée et c\'était absolument parfait. Chaque détail était soigné, chaque couture impeccable. Je me suis sentie une vraie reine le grand jour !',
    stars: 5,
    avatar: 'AS',
  },
  {
    name: 'Fatoumata Diallo',
    role: 'Cliente fidèle',
    text: "Cela fait 3 ans que je confie mes créations à Alex's Design. La qualité est irréprochable et le service est toujours personnalisé. Je ne vais nulle part ailleurs !",
    stars: 5,
    avatar: 'FD',
  },
  {
    name: 'Roseline Kpénou',
    role: 'Cérémonie de famille',
    text: 'Nous avons commandé des tenues de cérémonie pour toute la famille. Le résultat était époustouflant, les délais parfaitement respectés. Merci infiniment !',
    stars: 5,
    avatar: 'RK',
  },
  {
    name: 'Claire Azonhouevo',
    role: 'Costume professionnel',
    text: 'Mon costume sur mesure est d\'une coupe parfaite. Alex a su comprendre exactement ce que je voulais dès le premier rendez-vous. Un vrai talent !',
    stars: 5,
    avatar: 'CA',
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
      { threshold: 0.12 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  const allImages = [...galleryImages, ...galleryImages]

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__content container">
          <h1 className="hero__title">Alex's Design</h1>
          <p className="hero__subtitle">
            Couture sur mesure · Élégance &amp; Précision · Cotonou, Bénin
          </p>
          <div className="hero__ctas">
            <Link to="/services" className="btn-primary">
              <i className="bx bx-palette" /> Voir nos services
            </Link>
            <Link to="/contact" className="btn-outline">
              <i className="bx bx-calendar-check" /> Prendre RDV
            </Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <i className="bx bx-chevrons-down" />
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section className="section apropos">
        <div className="container apropos__inner">
          <div className="apropos__image fade-in" ref={addRef}>
            <img src="https://picsum.photos/id/338/560/640" alt="Atelier Alex's Design" />
            <div className="apropos__badge">
              <span className="apropos__badge-num">10+</span>
              <span className="apropos__badge-label">ans d'expérience</span>
            </div>
          </div>
          <div className="apropos__text">
            <p className="apropos__eyebrow fade-in" ref={addRef}>
              <i className="bx bx-diamond" /> Notre histoire
            </p>
            <h2 className="section-title fade-in" ref={addRef}>
              L'art de la couture<br />au service de votre élégance
            </h2>
            <p className="fade-in" ref={addRef} style={{ marginBottom: '1rem' }}>
              Fondé en 2014 par Alex, notre atelier est né d'une passion profonde pour la mode et la couture
              artisanale. Installé au cœur de Cotonou, Alex's Design est devenu la référence béninoise
              pour toutes celles et ceux qui veulent des vêtements qui leur ressemblent vraiment.
            </p>
            <p className="fade-in" ref={addRef} style={{ marginBottom: '2rem' }}>
              Chaque pièce est pensée autour de vous — votre morphologie, votre style, vos désirs.
              Nous croyons que les vêtements sur mesure ne sont pas un luxe, mais une façon de s'affirmer
              et de se sentir pleinement soi-même.
            </p>
            <div className="apropos__stats fade-in" ref={addRef}>
              {stats.map((s, i) => (
                <div key={i} className="apropos__stat">
                  <span className="apropos__stat-val">{s.value}</span>
                  <span className="apropos__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <Link to="/a-propos" className="btn-primary fade-in" ref={addRef}
              style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="bx bx-user-circle" /> En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS CHOISIR ── */}
      <section className="section why-us">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <p className="apropos__eyebrow fade-in" ref={addRef} style={{ justifyContent: 'center' }}>
              <i className="bx bx-star" /> Nos atouts
            </p>
            <h2 className="section-title fade-in" ref={addRef}>Pourquoi nous choisir</h2>
            <p className="section-subtitle fade-in" ref={addRef}>
              Ce qui nous distingue, c'est notre engagement envers l'excellence à chaque étape
            </p>
          </div>
          <div className="why-us__grid">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="card why-card fade-in"
                ref={addRef}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="why-card__icon-wrap">
                  <i className={item.icon} />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIE EN BANDE ROULANTE ── */}
      <section className="section gallery-band">
        <div className="container" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p className="apropos__eyebrow fade-in" ref={addRef} style={{ justifyContent: 'center' }}>
            <i className="bx bx-images" /> Nos créations
          </p>
          <h2 className="section-title fade-in" ref={addRef}>Un aperçu de notre travail</h2>
          <p className="section-subtitle fade-in" ref={addRef} style={{ marginBottom: 0 }}>
            Chaque pièce est unique, conçue avec soin et passion
          </p>
        </div>
        <div className="band-track__wrapper">
          <div className="band-track">
            {allImages.map((img, i) => (
              <div key={i} className="band-track__item">
                <img
                  src={`https://picsum.photos/id/${img.id}/${img.w}/${img.h}`}
                  alt={`Création ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/galerie" className="btn-outline fade-in" ref={addRef}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="bx bx-grid-alt" /> Voir toute la galerie
          </Link>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="section testimonials">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <p className="apropos__eyebrow fade-in" ref={addRef} style={{ justifyContent: 'center' }}>
              <i className="bx bx-comment-dots" /> Témoignages
            </p>
            <h2 className="section-title fade-in" ref={addRef}>Ce que disent nos clientes</h2>
            <p className="section-subtitle fade-in" ref={addRef}>
              La confiance de nos clientes est notre plus belle récompense
            </p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card testimonial-card fade-in"
                ref={addRef}
                style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
              >
                <i className="bx bxs-quote-alt-left testimonial-card__quote" />
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <i key={si} className="bx bxs-star" />
                  ))}
                </div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <strong className="testimonial-card__name">{t.name}</strong>
                    <span className="testimonial-card__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="section cta-band">
        <div className="container cta-band__inner fade-in" ref={addRef}>
          <div>
            <h2 className="section-title">Prête à vous sublimer ?</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Prenez rendez-vous dès aujourd'hui et laissez-nous créer votre pièce unique.
            </p>
          </div>
          <Link to="/contact" className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
            <i className="bx bx-envelope" /> Contactez-nous
          </Link>
        </div>
      </section>

    </div>
  )
}
