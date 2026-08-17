# EDRIS UI Prototype

Modern glassmorphism + gradient patient dashboard prototype for the EDRIS dialysis care app.

## Included

- Responsive mobile patient home dashboard
- EDRIS blue/navy visual identity
- Glassmorphism cards and navigation
- Gradient dialysis hero
- Blood pressure and weight summary cards
- Interactive fluid tracker
- Quick actions
- Iman / Morning Zikr card
- Health education card
- Light glass mode toggle

## Run locally

This is a static HTML/CSS/JavaScript project.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Run a local server

With Python:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Project structure

```text
edris-ui/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── .gitignore
└── README.md
```

## Recommended next screens

- Monitoring dashboard
- Dialysis details
- Medication adherence
- Health education library
- Iman / Zikr experience
- Caregiver dashboard
- Clinician overview

## Design notes

Primary EDRIS colors:

- Blue: `#1469E2`
- Navy: `#262B6A`

The prototype uses Oxygen for the Latin UI and can be extended with Noto Sans Arabic for Arabic content.


## Publish on GitHub Pages

This repository already includes `.github/workflows/pages.yml`.

1. Create a new GitHub repository.
2. Push this repository to GitHub using the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Push to `main` or manually run the Pages workflow.
6. GitHub will display the public site URL after the deployment succeeds.

Example push commands:

```bash
git remote add origin https://github.com/YOUR-USERNAME/edris-ui.git
git push -u origin main
```

> This prototype contains demo/sample patient information only. Do not publish real patient or clinical data in a public static site.
