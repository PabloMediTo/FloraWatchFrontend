# 🌿 FloraWatch

A mobile-first plant identification app built with React. Point your camera at a plant (or upload a photo) and get an instant ID with care tips, fun facts, and toxicity warnings.

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![PWA](https://img.shields.io/badge/PWA-ready-green)

## Features

- **Camera scanning** — live viewfinder with frame freeze on capture
- **Photo upload** — pick from gallery as an alternative to the camera
- **Plant identification** — identifies 25 common houseplant species
- **Care tips** — watering, frequency, and sunlight recommendations
- **Toxicity warnings** — pet safety badges (toxic / mildly toxic / safe)
- **Fun facts** — random "Did you know?" tidbits for each species
- **Scan history** — recent scans stored in localStorage with plant thumbnails from Wikipedia
- **Internationalization** — English, German, and Spanish (UI, care tips, facts, common names)
- **PWA** — installable with offline support via service worker
- **Haptic feedback** — vibration patterns for scan, success, and error states
- **Torch / flashlight** — toggle the device flashlight for low-light scanning
- **Swipe to dismiss** — drag the result card down to dismiss

## Tech Stack

- **React 19** + **Vite 6**
- **Motion for React** (animations, drag gestures)
- **Wikipedia REST API** (plant thumbnail images)
- **Custom SVG icons** (no icon library dependencies)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Backend

The app connects to a backend hosted on Render at `https://florawatch-uwjf.onrender.com`. The backend exposes:

- `GET /warmup` — wake up the server (free tier spins down after inactivity)
- `POST /predict` — send a `FormData` with a `file` field (JPEG/PNG) and receive plant predictions

To test without the backend, set `USE_MOCK = true` in `src/services/api.js`.

## Project Structure

```
src/
├── components/       # React components (CameraScanner, ResultCard, etc.)
├── data/             # Plant care data and fun facts (multilingual)
├── hooks/            # Custom hooks (usePlantImage, useSvgReady)
├── i18n/             # Internationalization (en, de, es translations + context)
├── services/         # API client and localStorage history
└── App.jsx           # Main app component
public/
├── manifest.json     # PWA manifest
├── sw.js             # Service worker
└── icon.svg          # App icon
```
