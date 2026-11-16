# Geoguessr Meta

Ein Next.js-Projekt für eine deutsche Lernseite rund um Geoguessr.

## Features

- **Countries**: Länder-Guides im Stil von Plonkit – alle Hinweise (Auto, Kennzeichen, Schilder, Bollards, Sprache, Vorwahl, Marken) pro Land, automatisch aus den Daten in `app/lib` zusammengestellt (`app/lib/country-clues.ts`)
- **Training**: Themen-Referenz mit Volltextsuche
- **Quiz**: über 300 Fragen in 10 Kategorien, Tastatursteuerung, Fehler-Rückblick, Bestwert pro Gerät
- Mobile-first mit Tab-Leiste, Dark Mode
- Bereit für Vercel-Deployment

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Deployment

Das Projekt ist vorbereitet für Vercel und nutzt `next` als Framework.
