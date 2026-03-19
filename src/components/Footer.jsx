import './Footer.css'

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#accueil" className="footer__logo" onClick={e => scrollTo(e, 'accueil')}>
            Alex's Design
          </a>
          <p className="footer__tagline">
            Couture sur mesure · Élégance &amp; Précision<br />Cotonou, Bénin
          </p>
        </div>

        <nav className="footer__nav">
          {[
            ['accueil',     'Accueil'],
            ['a-propos',    'À propos'],
            ['services',    'Services'],
            ['galerie',     'Galerie'],
            ['temoignages', 'Avis clients'],
            ['contact',     'Contact'],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={e => scrollTo(e, id)}>{label}</a>
          ))}
        </nav>

        <div className="footer__social">
          <a href="https://instagram.com/alexsdesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://wa.me/22900000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bx bxl-whatsapp" />
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2025 Alex's Design — Cotonou, Bénin. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
