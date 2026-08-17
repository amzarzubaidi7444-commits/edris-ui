# Publishing notes

The EDRIS education project is implemented as a responsive Progressive Web App (PWA).

## Web / PWA

It can be hosted directly on GitHub Pages, Netlify, Cloudflare Pages or another HTTPS host. On supported devices users can add it to the home screen.

## Google Play / Apple App Store

GitHub Pages cannot produce an Android App Bundle (AAB) or iOS IPA by itself.

For store release, use one of these next steps:

1. Wrap this web app with a native container such as Capacitor, then add Android/iOS projects.
2. Reimplement the approved UI component system in Flutter if deeper native integrations are required.

Before a production healthcare release, also complete content review, privacy/legal review, accessibility QA, device testing, analytics/privacy configuration, store screenshots/metadata and security testing.
