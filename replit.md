# Alex's Design — Couture sur mesure

A React + Vite multi-page website for a sewing salon based in Cotonou, Bénin. All content is in French.

## Tech Stack

- **Frontend**: React 18 + Vite 6 (JSX, no TypeScript)
- **Routing**: React Router v6
- **Styling**: Plain CSS — one global.css + per-component CSS files (no Tailwind, no CSS Modules)
- **Fonts**: Google Fonts — "Climate Crisis" (headings/logo) + "DM Sans" (body)
- **Port**: 5000

## Color Palette

```css
--bg-deep:        #0D1117   /* near-black background */
--bg-card:        #161B27   /* card/panel surfaces */
--bg-card-hover:  #1E2535   /* card hover state */
--border:         #2A3147   /* subtle borders */
--accent-purple:  #7C5CFC   /* primary purple accent */
--accent-teal:    #22C7A9   /* teal/green accent */
--accent-pink:    #C45CF5   /* violet/pink glow */
--text-primary:   #EAEEF6   /* main text */
--text-muted:     #7A849A   /* muted/secondary text */
```

## Project Structure

```
/
├── index.html                  # Entry HTML + Google Fonts link
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Router + layout wrapper
│   ├── styles/
│   │   └── global.css          # :root variables, reset, base, animations
│   ├── components/
│   │   ├── Header.jsx + .css   # Sticky nav, hamburger menu
│   │   └── Footer.jsx + .css   # Logo, links, social icons
│   └── pages/
│       ├── Home.jsx + .css     # Hero, savoir-faire cards, stats, CTA band
│       ├── Services.jsx + .css # 4 service cards with colored top borders
│       ├── Gallery.jsx + .css  # CSS masonry grid with picsum photos
│       ├── About.jsx + .css    # Story, values, founder card
│       └── Contact.jsx + .css  # Form, info panel, Google Maps iframe
└── vite.config.ts              # host: 0.0.0.0, port: 5000, allowedHosts: true
```

## Routes

| Path        | Page         |
|-------------|--------------|
| `/`         | Accueil      |
| `/services` | Services     |
| `/galerie`  | Galerie      |
| `/a-propos` | À propos     |
| `/contact`  | Contact      |

## Features

- Fullscreen hero with floating gradient blobs (CSS `@keyframes float`)
- Hero title fades in + slides up on mount (`@keyframes heroFadeUp`)
- Cards fade in on scroll via `IntersectionObserver`
- Sticky header with `backdrop-filter: blur(16px)`
- Mobile hamburger menu (slide-in drawer)
- Contact form with success state
- Google Maps iframe (Cotonou, inverted dark theme)
- CSS masonry gallery (3 columns → 2 → 1 responsive)

## Deployment

Configured as a static site — `npm run build` → `dist/`.
