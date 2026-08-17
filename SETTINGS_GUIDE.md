# EDRIS Settings & Mobile Guide — Version 1.2

This version makes the complete **More → Settings** area functional and persistent on mobile and desktop.

## What each setting does

### Language
Open **More → Language** and choose:
- **BM** — Bahasa Melayu
- **EN** — English
- **BM + EN** — bilingual educational content

The selected language is saved on the device and remains after refresh/reopening the app.

### Text Size
Open **More → Text size** and choose:
- **A−** — small
- **A** — normal
- **A+** — large

A preview card shows the selected reading scale. The size is saved locally.

### Dark Mode
Open **More → Dark mode** and tap the switch.
- OFF = light mode
- ON = dark mode

The theme changes immediately and is remembered after refresh.

### Reset Reading Progress
Use this when you want to remove completed-lesson history.

It clears:
- completed lesson status
- Continue Learning / last lesson

It DOES NOT clear:
- Saved lessons
- Language
- Text size
- Theme

A confirmation window appears before anything is deleted.

### Clear Saved Lessons
This removes all lesson bookmarks from **Saved**.

It DOES NOT clear:
- completed lesson progress
- reading preferences

A confirmation window appears first.

### Restore Reading Preferences
This restores:
- Language → BM + EN
- Text size → Normal
- Theme → Light

It DOES NOT delete:
- Saved lessons
- completed lesson progress

### Install EDRIS on Mobile
Android / Chrome:
1. Open the live EDRIS site.
2. Go to **More → Install EDRIS**.
3. Tap **Install** when available.
4. EDRIS appears on the Home Screen like an app.

iPhone / Safari:
1. Open EDRIS in Safari.
2. Go to **More → Install EDRIS**.
3. Follow the guide.
4. Tap Safari's **Share** button.
5. Choose **Add to Home Screen**.

## Test checklist

After publishing, test these in order:

1. More → Language → EN
2. Refresh the browser — EN should remain selected.
3. More → Text Size → A+
4. Refresh — large text should remain.
5. Turn Dark Mode ON.
6. Refresh — dark mode should remain.
7. Save one lesson.
8. Open Saved — the lesson should be there.
9. More → Clear Saved → confirm.
10. Saved should become empty.
11. Mark one lesson Complete.
12. More → Reset Reading Progress → confirm.
13. Completion progress should return to zero.
14. Restore Reading Preferences → confirm.
15. Language returns to BM + EN, text to normal and light mode.

## Mobile support

The UI is responsive for:
- iPhone
- Android phones
- tablets
- desktop browsers

It includes safe-area spacing, 44px+ touch targets, bottom navigation, mobile dialogs and PWA installation support.

## Important browser note

Settings use browser local storage. Clearing the browser/site data will also clear saved lessons and local reading preferences.
