# ChordsFinder

## What This Is

A minimal static web page where users drop an audio file (MP3, WAV, FLAC, OGG), paste a YouTube link, or capture live audio to detect chords and musical key entirely client-side via essentia.js WASM. Zero backend, zero API calls.

## Core Value

Users can discover the chords and key of any song instantly, privately, and without uploading files to any server. Perfect for musicians learning songs by ear, producers analyzing progressions, and DJs planning harmonic sets.

## Milestones

### v1 — Core Detection + Visual Foundation (Current)

**Goal:** Working chord and key detection with Rhythmcore design language.

**Target features:**
- **CHORD-01** to **CHORD-05**: Chord detection, key detection, chord progression, confidence, timing
- **INPUT-01** to **INPUT-04**: File upload, YouTube URL, Mic capture, Tab capture (same 4 modes as BPMFinder)
- **UI-01** to **UI-07**: Rhythmcore design, theme toggle, responsive, typography, animations
- **DEP-01** to **DEP-04**: Self-contained, single HTML, GitHub Pages, offline SW

### v2 — Polish + SEO (Planned)

**Goal:** Production-ready static site with SEO optimization.

**Target features:**
- Dark/light theme with localStorage persistence
- Service Worker (offline WASM caching)
- GitHub Actions deploy workflow
- Keyboard reference modal
- Meta tags, Open Graph, JSON-LD

### v3 — Advanced Features (Planned)

**Target features:**
- Chroma visualization (HPCP heatmap)
- Export chord progression as text/MIDI
- Chord quality breakdown (major/minor/dim/aug)
- History of recent analyses (localStorage)

## Requirements

### Core Detection
- **REQ-01**: Chord detection from audio files via essentia.js WASM (TonalExtractor + KeyExtractor)
- **REQ-02**: Key detection (major/minor) with strength/confidence
- **REQ-03**: Chord progression display with timestamps
- **REQ-04**: Chord quality indication (maj, min, dim, aug, 7th)

### Input Modes
- **REQ-05**: Audio file upload (MP3, WAV, FLAC, OGG) with drag-and-drop
- **REQ-06**: YouTube URL input via Piped API
- **REQ-07**: Microphone capture via getUserMedia
- **REQ-08**: Tab audio capture via getDisplayMedia

### UX & Privacy
- **REQ-09**: 100% client-side — no server uploads, no API keys needed
- **REQ-10**: Dark/light theme with localStorage persistence
- **REQ-11**: Offline support via Service Worker (file upload mode)
- **REQ-12**: Responsive mobile layout, keyboard accessible, reduced-motion support

### AI & Discoverability
- **REQ-13**: llms.txt for AI agent discovery
- **REQ-14**: WebMCP Declarative API annotations on input elements

## Context

- Pure frontend: HTML + CSS + JavaScript (no frameworks)
- Chord detection via [essentia.js](https://github.com/MTG/essentia.js) — WebAssembly port of Essentia (UPF) — TonalExtractor + KeyExtractor algorithms
- YouTube metadata via [Piped API](https://github.com/TeamPiped/Piped) (public, no API key needed)
- Tab audio capture via `navigator.mediaDevices.getDisplayMedia()`
- Works offline after first load (Service Worker) — YouTube/Piped features require internet
- Deploy target: GitHub Pages
- DESIGN.md at project root = Rhythmcore Interface design contract (source of truth for visual decisions)

## Constraints

- **[No Backend]**: 100% static. No server-side code. Piped API is a public third-party service, not our backend.
- **[File Size]**: Audio decoding in memory — files >200 MB rejected.
- **[Browser API]**: Relies on Web Audio API + AudioContext — requires modern browser. Tab capture requires `getDisplayMedia` support (Chrome 74+, Firefox 76+, Safari 17+).
- **[Piped API]**: Depends on public Piped instance availability. Falls back to tab capture if unavailable.
- **[License]**: MIT — use freely, credit required.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| essentia.js for chord/key detection | Most robust client-side MIR lib; TonalExtractor does everything in one shot | ✅ Good |
| Auto-analyze on file select | Remove unnecessary click; instant feedback | ✅ Good |
| Vanilla HTML/CSS/JS | Zero build tooling, deploy anywhere, no framework lock-in | ✅ Good |
| MIT License | Permissive — use freely with credit | ✅ Good |
| Rhythmcore Interface design | Consistent with BPMfinder; proven design language | ✅ Good |
| Piped API for YouTube metadata | Public API, no key needed, CORS-enabled | ✅ Good |
| getDisplayMedia for tab capture | Browser-native screen/audio capture, zero dependencies | ✅ Good |

---
*Last updated: 2026-06-10*
