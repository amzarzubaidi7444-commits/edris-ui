# EDRIS Health Education

Fresh reset of the EDRIS web prototype focused only on health education.

## What this version contains

- EDRIS brand identity (`#1469E2`, `#262B6A`, black, white)
- Oxygen UI typography
- Education-only home experience
- Six education categories from the supplied PDF
- All 23 supplied education screens preserved as exact rendered pages
- Topic reader with previous/next navigation
- Saved topics using browser local storage
- Search
- Full-page zoom
- Mobile swipe navigation
- GitHub Pages compatible

## Education sections

1. Kerohanian / Spiritual - PDF pages 2-6
2. Merokok / Smoking - PDF pages 7-8
3. Aktiviti Fizikal & Senaman - PDF pages 9-14
4. Penyakit Buah Pinggang Kronik - PDF pages 15-17
5. Rawatan Dialisis - PDF pages 18-20
6. Tips Pemakanan Pesakit Dialisis - PDF pages 21-23

## Run locally

Open `index.html`, or use:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

This is a static website and works with the GitHub Pages workflow already used in your repository.

## Brand identity

This update applies the supplied EDRIS identity consistently across the education app shell:

- Primary: `#1469E2`
- Secondary: `#262B6A`
- Black: `#000000`
- White: `#FFFFFF`
- Typography: Oxygen
- Logo and app icon derived from the supplied EDRIS brand board

The 23 education-page images remain unchanged so the educational layouts and information stay faithful to the supplied PDF.
