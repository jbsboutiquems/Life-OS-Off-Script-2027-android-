# Life OS Off Script 2027

Life OS Off Script 2027 is a React/TypeScript planner and journal app with an offline-friendly PWA experience, AI diagnostic integrations, and a native Android wrapper generated with Capacitor.

## Run locally

```bash
npm install
npm run dev
```

The browser app is served by the Express development server on port 3000. Add `GEMINI_API_KEY` to `.env` to enable the server-side Gemini features; the core journal, goals, and PDF export remain usable without it.

## PDF export

Use the **PDF** button in the app header to download the current daily flight log. The generated A4 PDF includes the selected date's launch notes, priorities, midday check-in, evening field notes, chaos score, optional Mei diagnostic, and current commitments.

## Android APK

The repository includes the native Capacitor project in `android/`.

```bash
npm install
npm run android:sync
cd android
./gradlew assembleDebug
```

The debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`. Android Studio can open the project with `npm run android:open`.

The Android wrapper packages the built web app locally, so the journal and PDF export work offline. Server-backed Gemini features require the deployed backend to be reachable from the device.

## Validation

```bash
npm run lint
npm run build
```
