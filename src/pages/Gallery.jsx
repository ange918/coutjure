import { useEffect, useRef } from 'react'
import './Gallery.css'

const images = [
  { id: 10,  w: 400, h: 500 },
  { id: 20,  w: 400, h: 400 },
  { id: 30,  w: 400, h: 600 },
  { id: 40,  w: 400, h: 400 },
  { id: 50,  w: 400, h: 550 },
  { id: 60,  w: 400, h: 400 },
  { id: 70,  w: 400, h: 480 },
  { id: 80,  w: 400, h: 420 },
  { id: 90,  w: 400, h: 600 },
  { id: 100, w: 400, h: 440 },
  { id: 110, w: 400, h: 500 },
  { id: 120, w: 400, h: 380 },
]

export default function Gallery() {
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

  return (
    <div className="page-wrapper gallery-page">
      <div className="container">
        <div className="page-header fade-in" ref={addRef}>
          <h1 className="section-title">Nos Créations</h1>
          <p className="section-subtitle">
            Chaque pièce raconte une histoire — voici quelques-unes des nôtres.
          </p>
        </div>

        <div className="gallery__masonry">
          {images.map((img, i) => (
            <div
              key={img.id}
              className="gallery__item fade-in"
              ref={addRef}
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <img
                src={`https://picsum.photos/id/${img.id}/${img.w}/${img.h}`}
                alt={`Création Alex's Design ${i + 1}`}
                loading="lazy"
              />
              <div className="gallery__overlay" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
