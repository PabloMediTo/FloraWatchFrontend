# 🌿 FloraWatch

A mobile-first plant identification app built with React. Point your camera at a plant (or upload a photo) and get an instant ID with care tips, fun facts, and toxicity warnings.

🔗 **Live Demo:** [pablomedito.github.io/FloraWatchFrontend](https://pablomedito.github.io/FloraWatchFrontend/)

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![PWA](https://img.shields.io/badge/PWA-ready-green)

## Features

- **Camera scanning** — live viewfinder with frame freeze on capture
- **Photo upload** — pick from gallery as an alternative to the camera
- **Plant identification** — identifies 23 common houseplant species
- **Top-3 selection** — after each scan, choose from the 3 most likely matches before confirming
- **Plant encyclopedia** — swipable left-side drawer listing all supported species with thumbnails
- **Plant detail view** — tap any plant for care info, toxicity badge, image, and fun facts
- **Care tips** — watering, frequency, and sunlight recommendations with custom SVG icons
- **Toxicity warnings** — pet safety badges (toxic / mildly toxic / safe)
- **Fun facts** — "Did you know?" section with 4 facts per species and a refresh button that cycles without repeats
- **Scan history** — recent scans stored in localStorage with plant thumbnails from Wikipedia
- **Internationalization** — English, German, and Spanish (UI, care tips, facts, common names)
- **PWA** — installable with offline support via service worker
- **Haptic feedback** — vibration patterns for scan, success, and error states
- **Torch / flashlight** — toggle the device flashlight for low-light scanning
- **Swipe gestures** — drag result card, swipe drawer to dismiss, swipe detail panel to go back

## Tech Stack

- **React 19** + **Vite 6**
- **Motion for React** (animations, drag gestures)
- **Wikipedia REST API** (plant thumbnail images)
- **Custom SVG icons** (no icon library dependencies)

## Performance

The app is optimized for mobile devices:

- **Code splitting** — `ResultCard` and `ScanHistory` are lazy-loaded
- **Chunk splitting** — `react` and `motion` are split into separate cacheable bundles
- **CSS animations** — vine sway uses GPU-accelerated CSS keyframes instead of JS-driven animation loops
- **Reduced motion** — respects `prefers-reduced-motion` and disables expensive effects on small screens
- **Adaptive camera** — lower resolution (640×480) on mobile to reduce GPU/memory pressure
- **Optimized assets** — SVGs compressed with SVGO; expensive `drop-shadow` and `backdrop-filter` disabled on mobile
- **Font loading** — Google Font loaded via `<link>` with `preconnect` to avoid render-blocking

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
├── components/       # React components (CameraScanner, ResultCard, PlantListModal, etc.)
├── data/             # Plant care data and fun facts (23 species, multilingual)
├── hooks/            # Custom hooks (usePlantImage)
├── i18n/             # Internationalization (en, de, es translations + context)
├── services/         # API client and localStorage history
└── App.jsx           # Main app component
public/
├── manifest.json     # PWA manifest
├── sw.js             # Service worker
└── icon.svg          # App icon
```
