import { useEffect, useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const [sent, setSent] = useState(false)
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ nom: '', email: '', telephone: '', message: '' })
  }

  return (
    <div className="page-wrapper contact-page">
      <div className="container">
        <div className="page-header fade-in" ref={addRef}>
          <h1 className="section-title">Contactez-nous</h1>
          <p className="section-subtitle">
            Une question ? Une commande ? Nous vous répondons rapidement.
          </p>
        </div>

        <div className="contact__layout">
          {/* Form */}
          <div className="contact__form-wrap fade-in" ref={addRef}>
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✅</span>
                <h3>Message envoyé !</h3>
                <p>Merci pour votre message. Nous vous recontacterons très bientôt.</p>
                <button className="btn-primary" onClick={() => setSent(false)}>
                  Nouveau message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nom">Nom complet</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+229 XX XX XX XX"
                    value={form.telephone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet ou posez votre question..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact__info fade-in" ref={addRef}>
            <h2 className="contact__info-title">Nos coordonnées</h2>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <strong>Adresse</strong>
                  <p>Cotonou, Bénin<br />Quartier Cadjèhoun</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div>
                  <strong>Téléphone</strong>
                  <p>+229 97 XX XX XX</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>Disponible 7j/7 de 8h à 20h</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📸</span>
                <div>
                  <strong>Instagram</strong>
                  <p>@alexsdesign</p>
                </div>
              </div>
            </div>

            <div className="contact__hours">
              <h3>Horaires d'ouverture</h3>
              <div className="hours-grid">
                <span>Lundi – Vendredi</span>
                <span>8h00 – 18h00</span>
                <span>Samedi</span>
                <span>9h00 – 16h00</span>
                <span>Dimanche</span>
                <span className="closed">Sur rendez-vous</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="contact__map fade-in" ref={addRef}>
          <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>Nous trouver</h2>
          <div className="map-wrap">
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
    </div>
  )
}
