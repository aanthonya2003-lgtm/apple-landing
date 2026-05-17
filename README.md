# Apple — iPhone 16 Pro Landing

Pixel-honest single-page Apple.com–grade landing for iPhone 16 Pro, shipped to the WEBLOVE × HYLIOX standard.

Live build: deployed to Vercel via auto-detected Vite preset.

## Stack
- React 19 + Vite 6 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme`)
- GSAP 3.13 + ScrollTrigger
- Framer Motion 11
- Lenis smooth-scroll

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production bundle → /dist
npm run preview   # serve the production bundle
```

## Sections
- Navbar — frosted glass, scroll-state border, inline Apple glyph SVG
- Hero — full-bleed iPhone 16 Pro press shot, GSAP entrance + scrub zoom
- Promo Bento — 12-col asymmetric grid (MacBook Pro / iPad Pro / Apple Watch)
- Apple Intelligence — black canvas with animated gradient orb
- Feature Spotlight — 400vh sticky-left + scrolling-right with GSAP crossfade
- Services Strip — horizontal snap-scroll cards
- Privacy — "Privacy. That's Apple." dark section
- Shop Apple — 6-col icon grid
- Footer — Apple mega-footer with verified URLs

## Pre-shipped Lighthouse (local)
| Form factor | Perf | A11y | BP | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| Mobile  | 92 | 100 | 100 | 100 | 2.9 s | 0 |
| Desktop | 99 | 100 | 100 | 100 | 0.8 s | 0 |

## Notes
This is a concept built for editorial demonstration. All Apple trademarks,
product names, and imagery are property of Apple Inc. All product images are
sourced from Apple's public Newsroom press kits, served from Apple's CDN.
