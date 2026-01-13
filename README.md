# Love Me - Landingpage

Production-ready Landingpage für Nicole Angelika Panzer (Love Me).

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** für Styling
- **Framer Motion** für subtile Animationen
- **Lucide Icons** (SF Symbols Look)
- **shadcn/ui** inspirierte Komponenten

## Design System

- **Farben**: Warmes Off-White (#F6F3EA), Deep Green (#2F5B45), Sun Gold (#C9A24A)
- **Typografie**: Playfair Display (Headings), Inter (Body)
- **Layout**: Max-width 1200px, großzügige Abstände
- **Radius**: 20-28px auf Karten
- **Shadows**: Sehr soft, premium Look

## Projektstruktur

```
Website_Panzer/
├── app/
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
├── components/
│   ├── sections/           # Alle Page Sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── SegmentSelector.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── MethodSection.tsx
│   │   ├── OfferSection.tsx
│   │   ├── BurnoutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/                 # UI Komponenten
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── icon.tsx
├── lib/
│   ├── constants.ts        # Alle Content-Daten
│   └── utils.ts            # Utility Functions
└── public/
    └── self-love-sunrise.jpeg  # Hero Bild
```

## Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build
npm start
```

Die Seite läuft auf: **http://localhost:3000**

## Features

✅ Responsive Design (Mobile, Tablet, Desktop)
✅ Smooth Scroll Navigation
✅ Sticky Header mit aktiver Nav-Highlight
✅ Alle Sections implementiert
✅ FAQ Accordion
✅ Contact Form (Placeholder für Calendly)
✅ Accessibility Features
✅ Performance optimiert (Next.js Image)

## Nächste Schritte

1. **Portrait Bild**: Ersetze den Platzhalter in `AboutSection.tsx` mit einem echten Portrait
2. **Calendly Integration**: Ersetze den Placeholder in `ContactSection.tsx` mit echter Calendly-Integration
3. **Testimonials**: Ersetze Platzhalter-Texte mit echten Testimonials
4. **Form Backend**: Implementiere Form-Submission für das Kontaktformular
5. **SEO**: Füge Meta-Tags und Open Graph Tags hinzu

## Content Anpassungen

Alle Texte und Inhalte sind in `/lib/constants.ts` zentralisiert und können dort angepasst werden.

