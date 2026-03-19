import { useEffect, useRef, useState } from 'react'
import './LandingPage.css'

/* ─── DATA ──────────────────────────────────── */
const services = [
  { icon: 'bx bx-diamond',      title: 'Robe de mariée',      price: 'Sur devis',                desc: "Chaque robe est une œuvre unique, taillée avec précision pour le plus beau jour de votre vie.",  accent: 'purple', num: '01' },
  { icon: 'bx bx-user',         title: 'Costume sur mesure',  price: 'Dès 120 000 FCFA',         desc: "Taillé pour vous — une coupe impeccable qui épouse parfaitement votre silhouette.",              accent: 'teal',   num: '02' },
  { icon: 'bx bx-scissors',     title: 'Retouche express',    price: 'Dès 5 000 FCFA',           desc: "Rapide et impeccable — vos ajustements réalisés dans les meilleurs délais.",                     accent: 'teal',   num: '03' },
  { icon: 'bx bx-crown',        title: 'Tenue de cérémonie',  price: 'Dès 60 000 FCFA',          desc: "Élégance pour chaque occasion — des créations qui subliment vos moments festifs.",                accent: 'purple', num: '04' },
]

const whyUs = [
  { icon: 'bx bx-scissors',   title: 'Expertise artisanale', desc: "Plus de 10 ans de maîtrise dans l'art de la coupe et de la couture haute qualité." },
  { icon: 'bx bx-crown',      title: 'Qualité premium',      desc: "Uniquement des tissus sélectionnés avec soin pour un résultat à la hauteur de vos attentes." },
  { icon: 'bx bx-time-five',  title: 'Délais respectés',     desc: "Votre temps est précieux. Nous tenons nos engagements et livrons dans les délais convenus." },
  { icon: 'bx bx-user-check', title: 'Sur mesure total',     desc: "Chaque création est pensée pour vous, de la prise de mesures jusqu'à l'essayage final." },
  { icon: 'bx bx-heart',      title: 'Passion & Dévouement', desc: "Nous mettons tout notre cœur dans chaque pièce pour que vous vous sentiez unique et confiant(e)." },
  { icon: 'bx bx-medal',      title: 'Satisfaction garantie', desc: "Votre satisfaction est notre priorité absolue. Nous retravaillons jusqu'à la perfection." },
]

const galleryImages = [
  { id: 10, w: 400, h: 500 }, { id: 20, w: 400, h: 400 },
  { id: 30, w: 400, h: 500 }, { id: 40, w: 400, h: 450 },
  { id: 50, w: 400, h: 500 }, { id: 60, w: 400, h: 420 },
  { id: 70, w: 400, h: 480 }, { id: 80, w: 400, h: 440 },
]

const testimonials = [
  { name: 'Aminata Sow',       role: 'Mariée 2024',           avatar: 'AS', stars: 5, text: "Alex a réalisé ma robe de mariée et c'était absolument parfait. Chaque détail soigné, chaque couture impeccable. Je me suis sentie une vraie reine !" },
  { name: 'Fatoumata Diallo',  role: 'Cliente fidèle',        avatar: 'FD', stars: 5, text: "Cela fait 3 ans que je confie mes créations à Alex's Design. La qualité est irréprochable et le service toujours personnalisé." },
  { name: 'Roseline Kpénou',   role: 'Cérémonie de famille',  avatar: 'RK', stars: 5, text: "Nous avons commandé des tenues pour toute la famille. Le résultat était époustouflant, les délais parfaitement respectés. Merci !" },
  { name: 'Claire Azonhouevo', role: 'Costume professionnel', avatar: 'CA', stars: 5, text: "Mon costume sur mesure est d'une coupe parfaite. Alex a su comprendre exactement ce que je voulais dès le premier rendez-vous." },
]

const stats = [
  { value: '10+', label: "ans d'expérience" },
  { value: '500+', label: 'clientes satisfaites' },
  { value: '100%', label: 'sur mesure' },
]

/* ─── FADE HOOK ──────────────────────────────── */
function useFade() {
  const refs = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const add = el => { if (el && !refs.current.includes(el)) refs.current.push(el) }
  return add
}

/* ─── COMPONENT ──────────────────────────────── */
export default function LandingPage() {
  const ref = useFade()
  const allImages = [...galleryImages, ...galleryImages]
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true); setForm({ nom: '', email: '', telephone: '', message: '' }) }

  const scrollTo = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <div className="lp">

      {/* ════════════════ HERO ════════════════ */}
      <section id="accueil" className="lp-hero">
        <div className="lp-hero__blob lp-hero__blob--1" />
        <div className="lp-hero__blob lp-hero__blob--2" />
        <div className="lp-hero__blob lp-hero__blob--3" />
        <div className="lp-hero__content container">
          <p className="lp-eyebrow"><i className="bx bx-diamond" /> Atelier de couture · Cotonou, Bénin</p>
          <h1 className="lp-hero__title">Alex's Design</h1>
          <p className="lp-hero__sub">
            Couture sur mesure, élégance &amp; précision.<br />
            Des créations qui vous ressemblent vraiment.
          </p>
          <div className="lp-hero__ctas">
            <a href="#services" className="btn-primary" onClick={e => scrollTo(e, 'services')}>
              <i className="bx bx-palette" /> Découvrir nos services
            </a>
            <a href="#contact" className="btn-outline" onClick={e => scrollTo(e, 'contact')}>
              <i className="bx bx-calendar-check" /> Prendre RDV
            </a>
          </div>
          <div className="lp-hero__stats">
            {stats.map((s, i) => (
              <div key={i} className="lp-hero__stat">
                <span className="lp-hero__stat-val">{s.value}</span>
                <span className="lp-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <a href="#a-propos" className="lp-hero__scroll" onClick={e => scrollTo(e, 'a-propos')}>
          <i className="bx bx-chevrons-down" />
        </a>
      </section>

      {/* ════════════════ À PROPOS ════════════════ */}
      <section id="a-propos" className="lp-section lp-about">
        <div className="container lp-about__inner">
          <div className="lp-about__img fade-in" ref={ref}>
            <img src="https://picsum.photos/id/338/560/640" alt="Atelier Alex's Design" />
            <div className="lp-about__badge">
              <span className="lp-about__badge-num">10+</span>
              <span className="lp-about__badge-label">ans d'expérience</span>
            </div>
          </div>
          <div className="lp-about__text">
            <p className="lp-eyebrow fade-in" ref={ref}><i className="bx bx-store" /> Notre histoire</p>
            <h2 className="section-title fade-in" ref={ref}>L'art de la couture<br />au service de votre élégance</h2>
            <p className="fade-in" ref={ref} style={{ marginBottom: '1rem' }}>
              Fondé en 2014 par Alex, notre atelier est né d'une passion profonde pour la mode et la couture artisanale.
              Installé au cœur de Cotonou, Alex's Design est devenu la référence béninoise pour ceux qui veulent des vêtements qui leur ressemblent vraiment.
            </p>
            <p className="fade-in" ref={ref} style={{ marginBottom: '2rem' }}>
              Chaque pièce est pensée autour de vous — votre morphologie, votre style, vos désirs.
              Nous croyons que les vêtements sur mesure ne sont pas un luxe, mais une façon de s'affirmer et de se sentir pleinement soi-même.
            </p>
            <div className="lp-about__vals fade-in" ref={ref}>
              {[['bx bx-heart', 'Passion'], ['bx bx-bullseye', 'Précision'], ['bx bx-user-pin', 'Personnalisation']].map(([ic, label]) => (
                <div key={label} className="lp-about__val">
                  <i className={ic} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SERVICES ════════════════ */}
      <section id="services" className="lp-section lp-services">
        <div className="container">
          <div className="lp-section__head fade-in" ref={ref}>
            <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><i className="bx bx-briefcase" /> Ce que nous faisons</p>
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">De la conception à la finition, nous donnons vie à vos idées les plus élégantes.</p>
          </div>
          <div className="lp-services__grid">
            {services.map((s, i) => (
              <div key={i} className={`lp-service-card lp-service-card--${s.accent} fade-in`} ref={ref} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="lp-service-card__header">
                  <span className="lp-service-card__num">{s.num}</span>
                  <div className="lp-service-card__icon-wrap">
                    <i className={s.icon} />
                  </div>
                </div>
                <div className="lp-service-card__body">
                  <h3 className="lp-service-card__title">{s.title}</h3>
                  <p className="lp-service-card__desc">{s.desc}</p>
                  <span className={`lp-service-card__price`}>{s.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="lp-services__note fade-in" ref={ref}>
            Tarifs indicatifs, variables selon complexité et matières.&nbsp;
            <a href="#contact" onClick={e => scrollTo(e, 'contact')} style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>
              Demandez un devis gratuit →
            </a>
          </p>
        </div>
      </section>

      {/* ════════════════ GALERIE ════════════════ */}
      <section id="galerie" className="lp-section lp-gallery">
        <div className="container">
          <div className="lp-section__head fade-in" ref={ref}>
            <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><i className="bx bx-images" /> Nos créations</p>
            <h2 className="section-title">Un aperçu de notre travail</h2>
            <p className="section-subtitle">Chaque pièce est unique, conçue avec soin et passion</p>
          </div>
        </div>
        <div className="lp-band-wrap">
          <div className="lp-band">
            {allImages.map((img, i) => (
              <div key={i} className="lp-band__item">
                <img src={`https://picsum.photos/id/${img.id}/${img.w}/${img.h}`} alt={`Création ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ POURQUOI ════════════════ */}
      <section id="pourquoi" className="lp-section lp-why">
        <div className="container">
          <div className="lp-section__head fade-in" ref={ref}>
            <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><i className="bx bx-shield-quarter" /> Nos atouts</p>
            <h2 className="section-title">Pourquoi nous choisir</h2>
            <p className="section-subtitle">Ce qui nous distingue, c'est notre engagement envers l'excellence à chaque étape</p>
          </div>
          <div className="lp-why__grid">
            {whyUs.map((item, i) => (
              <div key={i} className="card lp-why-card fade-in" ref={ref} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="lp-why-card__icon">
                  <i className={item.icon} />
                </div>
                <h3 className="lp-why-card__title">{item.title}</h3>
                <p className="lp-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ TÉMOIGNAGES ════════════════ */}
      <section id="temoignages" className="lp-section lp-testi">
        <div className="container">
          <div className="lp-section__head fade-in" ref={ref}>
            <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><i className="bx bx-comment-dots" /> Témoignages</p>
            <h2 className="section-title">Ce que disent nos clientes</h2>
            <p className="section-subtitle">La confiance de nos clientes est notre plus belle récompense</p>
          </div>
          <div className="lp-testi__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="card lp-testi-card fade-in" ref={ref} style={{ transitionDelay: `${(i % 2) * 0.12}s` }}>
                <i className="bx bxs-quote-alt-left lp-testi-card__quote" />
                <p className="lp-testi-card__text">{t.text}</p>
                <div className="lp-testi-card__stars">
                  {Array.from({ length: t.stars }).map((_, si) => <i key={si} className="bx bxs-star" />)}
                </div>
                <div className="lp-testi-card__author">
                  <div className="lp-testi-card__avatar">{t.avatar}</div>
                  <div>
                    <strong className="lp-testi-card__name">{t.name}</strong>
                    <span className="lp-testi-card__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CONTACT ════════════════ */}
      <section id="contact" className="lp-section lp-contact">
        <div className="container">
          <div className="lp-section__head fade-in" ref={ref}>
            <p className="lp-eyebrow" style={{ justifyContent: 'center' }}><i className="bx bx-envelope" /> Parlons de votre projet</p>
            <h2 className="section-title">Contactez-nous</h2>
            <p className="section-subtitle">Une question ? Une commande ? Nous vous répondons rapidement.</p>
          </div>
          <div className="lp-contact__layout">

            {/* Form */}
            <div className="lp-contact__form-wrap fade-in" ref={ref}>
              {sent ? (
                <div className="lp-contact__success">
                  <i className="bx bx-check-circle" />
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Nous vous recontacterons très bientôt.</p>
                  <button className="btn-primary" onClick={() => setSent(false)}>Nouveau message</button>
                </div>
              ) : (
                <form className="lp-contact__form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nom"><i className="bx bx-user" /> Nom complet</label>
                    <input id="nom" name="nom" type="text" placeholder="Votre nom" value={form.nom} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><i className="bx bx-envelope" /> Adresse e-mail</label>
                    <input id="email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telephone"><i className="bx bx-phone" /> Téléphone</label>
                    <input id="telephone" name="telephone" type="tel" placeholder="+229 XX XX XX XX" value={form.telephone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message"><i className="bx bx-message-detail" /> Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Décrivez votre projet..." value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn-primary lp-contact__submit">
                    <i className="bx bx-send" /> Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lp-contact__info fade-in" ref={ref}>
              <h3 className="lp-contact__info-title">Nos coordonnées</h3>
              <div className="lp-contact__info-list">
                {[
                  ['bx bx-map',        'Adresse',   'Cotonou, Bénin — Quartier Cadjèhoun'],
                  ['bx bx-phone',      'Téléphone', '+229 97 XX XX XX'],
                  ['bx bxl-whatsapp',  'WhatsApp',  'Disponible 7j/7 de 8h à 20h'],
                  ['bx bxl-instagram', 'Instagram', '@alexsdesign'],
                ].map(([ic, label, val]) => (
                  <div key={label} className="lp-contact__info-item">
                    <div className="lp-contact__info-icon"><i className={ic} /></div>
                    <div>
                      <strong>{label}</strong>
                      <p>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lp-contact__hours">
                <h4><i className="bx bx-time" /> Horaires d'ouverture</h4>
                <div className="lp-hours-grid">
                  <span>Lundi – Vendredi</span><span>8h00 – 18h00</span>
                  <span>Samedi</span><span>9h00 – 16h00</span>
                  <span>Dimanche</span><span style={{ fontStyle: 'italic' }}>Sur rendez-vous</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lp-contact__map fade-in" ref={ref}>
            <div className="lp-map-wrap">
              <iframe
                title="Localisation Cotonou, Bénin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127059.1434743684!2d2.3158817!3d6.3678578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023552acff8b1ab%3A0xc37f0bfe72e2e52a!2sCotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
