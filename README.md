# Lov Me - Landingpage

Production-ready Landingpage für Nicole Angelika Panzer (Lov Me).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtile Animationen)
- **Lucide Icons**
- **shadcn/ui** Komponenten

## Features

- ✅ Vollständig responsive (Mobile, Tablet, Desktop)
- ✅ Optimierte Bilder (WebP Format)
- ✅ SEO-optimiert
- ✅ Accessibility (WCAG-konform)
- ✅ Performance-optimiert
- ✅ Vercel-ready

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start
```

Die Website läuft dann auf [http://localhost:3000](http://localhost:3000)

## Vercel Deployment

Das Projekt ist bereits für Vercel konfiguriert:

1. **Automatisches Deployment:**
   - Verbinde das GitHub Repository mit Vercel
   - Vercel erkennt automatisch Next.js und konfiguriert das Projekt
   - Jeder Push zu `main` triggert automatisch ein neues Deployment

2. **Manuelles Deployment:**
   ```bash
   # Vercel CLI installieren (falls nicht vorhanden)
   npm i -g vercel
   
   # Deployment
   vercel
   ```

3. **Umgebungsvariablen:**
   - Aktuell keine Umgebungsvariablen erforderlich
   - Bei Bedarf können diese in der Vercel Dashboard konfiguriert werden

## Projektstruktur

```
Website_Panzer/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   ├── impressum/         # Impressum Seite
│   └── datenschutz/       # Datenschutz Seite
├── components/
│   ├── sections/          # Page Sections
│   └── ui/                # UI Komponenten
├── lib/
│   ├── constants.ts       # Content & Daten
│   └── utils.ts           # Utility Funktionen
├── public/                # Statische Assets (WebP)
└── tailwind.config.ts     # Tailwind Konfiguration
```

## Bilder

Alle Bilder sind im WebP-Format für optimale Performance. Die Originaldateien bleiben im Repository für Referenzzwecke.

## License

Private Projekt für Nicole Angelika Panzer.
