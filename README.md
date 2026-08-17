# EDRIS Health Education

A mobile-first health education web app / PWA based on the supplied EDRIS education UI/UX PDF and EDRIS brand identity.

## What changed

This is a full reset of the previous monitoring/dialysis prototype. The product is now focused on health education.

- Real HTML content instead of opening PDF pages as images.
- Six education topics and 20 structured lessons.
- Bahasa Melayu, English, or bilingual reading modes.
- Search across educational content.
- Saved lessons using local storage.
- Reading completion tracking.
- Light / dark mode and text-size preferences.
- Responsive mobile, tablet, and desktop layouts.
- Installable PWA shell with offline caching.
- EDRIS brand colors: #1469E2 and #262B6A.
- Oxygen typography with Noto Sans Arabic for Arabic content.

## Run locally

You can open `index.html` directly for a quick preview. For full PWA/service-worker behavior, serve the folder using a local web server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## GitHub Pages

The app is static and works with the existing GitHub Pages workflow already in your repository.

## Store publishing

This repository is the production-style frontend/PWA. Google Play and Apple App Store distribution still requires packaging it as a native application (for example with Capacitor) or rebuilding the UI in Flutter/React Native. The web UI itself is not an APK, AAB, or IPA.

## Important

The content is educational and is not intended to replace medical advice, diagnosis, or treatment by a healthcare professional.


## Functional mobile update (v1.1)

Version 1.1 adds:

- Fully working Home / Learn / Saved / More navigation
- Search, clear search and result navigation
- Topic and lesson navigation
- Save / unsave lessons
- Complete / uncomplete lessons
- Previous and next lesson controls
- Native mobile sharing with copy-link fallback
- Bahasa Melayu / English / bilingual controls
- Text-size controls
- Light / dark mode
- Install-to-device flow for supported Android browsers and iOS Add to Home Screen guidance
- Reset reading progress and clear saved lessons
- Back-to-top control
- Online / offline feedback
- Responsive mobile safe-area layout and touch feedback
- PWA/offline support through the service worker

This remains a web/PWA build, optimized for phone use and installable to a home screen.
