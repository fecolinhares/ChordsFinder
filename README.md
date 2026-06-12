# ChordsFinder 🎹

> Free online chord and key detector — 100% private, no servers, no sign-ups.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**ChordsFinder** detects chords and musical key from audio files, YouTube links, microphone input, or browser tab capture. Everything runs client-side via a hybrid pipeline (essentia.js WASM + Web Audio API FFT) — zero backend, zero data uploads.

**Live demo:** https://fecolinhares.github.io/ChordsFinder/

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 Chord Detection | Identifies 24 chord types (C, Dm, G7, Am, etc.) with confidence scoring |
| 🎹 Key Detection | Detects musical key + scale (C major, A minor) with strength % |
| 📋 Full Chord Progression | Shows 8-chord harmonic progression with timing |
| ▶️ Audio Player | Play/pause audio with synchronized timeline, waveform, and current chord |
| 🎨 Waveform Timeline | Canvas waveform with color-coded chord region bars + playhead |
| ⏱️ Real-time Sync | Current chord updates live as playback progresses |
| ⏩ Speed Control | 0.5x / 1x / 2x playback speed |
| 🔊 Volume Control | Adjustable gain slider |
| 📁 File Upload | Drag-and-drop MP3, WAV, FLAC, OGG — auto-analyzes |
| 🔗 YouTube Links | Paste any YouTube URL — fetches audio via Piped API |
| 🎤 Microphone Capture | 10-second recording via getUserMedia |
| 🖥️ Tab Capture | Capture audio from any browser tab via getDisplayMedia |
| 🔒 100% Private | All processing client-side — audio never leaves your device |
| 🌙 Dark/Light Theme | Persistent theme toggle with localStorage |
| 📱 Fully Responsive | Works on mobile (320px+), tablet, and desktop |
| 🚀 Offline Ready | Service Worker caches core assets |

---

## 🚀 Usage

1. Open https://fecolinhares.github.io/ChordsFinder/
2. Choose an input mode (File, YouTube, or Capture)
3. Wait for analysis — the player loads with waveform + chord regions
4. Click ▶️ play — hear audio, watch chords change in real time
5. Click anywhere on the timeline to seek, adjust speed/volume

### Input modes

| Mode | How it works | Requirements |
|------|-------------|-------------|
| **File** | Drag-and-drop or browse | MP3, WAV, FLAC, OGG (≤200 MB) |
| **YouTube** | Paste a YouTube URL | Internet connection |
| **Microphone** | Click "Microphone" | Mic permission (HTTPS/localhost) |
| **Tab Audio** | Click "Tab Audio" — select a tab | getDisplayMedia support |

---

## 🧠 How It Works

ChordsFinder uses a **hybrid pipeline** that combines two approaches:

1. **essentia.js KeyExtractor** — WASM-based key/scale detection (works correctly)
2. **Manual FFT + Chroma + Template Matching** — circumvents the essentia.js WASM vector bug where `std::vector` outputs return empty `{}`

The audio pipeline:
```
Audio File/Stream → AudioContext.decodeAudioData → essentia KeyExtractor (key/scale)
  + Manual Frame Loop (FFT 8192pt → Harmonic Summation → 12-bin Chroma → 24-chord Template Matching)
  → Sliding Window Smoothing → Merge Identical Consecutive Chords → Chord Regions with Timing
  → Display: Key card + Waveform Timeline + Player + Progressions
```

### Chord Detection Details
- **FFT**: Radix-2 Cooley-Tukey, 8192-point Hann window, 4096-hop
- **Chroma**: 12 bins (65–5000Hz), 5-harmonic summation with decay weights, DC removal
- **Scoring**: Margin over mean of 24 templates (12 major + 12 minor), threshold < 5% falls back to key-only
- **Smoothing**: ±3 frame sliding window, merge identical consecutives
- **Timeline**: 517 regions detected from a 3-minute song (real test)

---

## 🎨 Design

Built with the **Rhythmcore Interface** design system (same as [BPMfinder](https://github.com/fecolinhares/BPMfinder)):

- **Fonts**: Inter (sans), JetBrains Mono (mono)
- **Colors**: Primary cyan `#06B6D4` (oklch 0.53 0.14 195), accent amber `#F97316` (oklch 0.70 0.18 51)
- **Motion**: Card reveal, chord pop animation, staggered entrance, hover lift
- **Accessibility**: WCAG AA contrast, 44px touch targets, keyboard navigation, `prefers-reduced-motion`
- **Impeccable Audit**: 18/20 (Excellent)

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Audio Analysis | essentia.js WASM (KeyExtractor) + Web Audio API FFT (manual chroma) |
| YouTube Audio | Piped API (public, no API key required) |
| Audio Capture | Web Audio API, getUserMedia, getDisplayMedia |
| Canvas Rendering | OffscreenCanvas-compatible, requestAnimationFrame |
| Frontend | Vanilla HTML/CSS/JS (zero frameworks, zero dependencies) |
| Design System | Rhythmcore Interface (OKLCH tokens, Inter, JetBrains Mono) |
| Offline | Service Worker |
| Deployment | GitHub Pages |

---

## 📦 Project Structure

```
ChordsFinder/
├── index.html        # Main application (single HTML, ~115KB)
├── DESIGN.md         # Rhythmcore design contract
├── sw.js             # Service Worker
├── robots.txt        # SEO
├── sitemap.xml       # SEO
├── llms.txt          # AI agent discovery
├── AGENTS.md         # AI agent context
├── LICENSE           # MIT
├── README.md         # This file
└── .planning/        # GSD project planning
    ├── config.json
    ├── PROJECT.md
    ├── ROADMAP.md
    ├── STATE.md
    ├── Phase-1-1-Manual-Pipeline/
    │   └── PLAN.md
    └── Phase-2-Timeline-Player/
        └── PLAN.md
```

---

## 🔒 Privacy

ChordsFinder is **100% private**:
- ❌ No backend servers
- ❌ No audio uploads
- ❌ No API keys
- ❌ No analytics
- ❌ No cookies
- ✅ All processing in-browser via WASM + Web Audio API
- ✅ Audio stays on your device

---

## 🧪 Roadmap

- ✅ Milestone 1: Core chord detection pipeline
- ✅ Milestone 2: Timeline player + full-song analysis
- 🔲 Chroma visualization (HPCP heatmap)
- 🔲 Chord quality breakdown (dim/aug/7th/sus)
- 🔲 Export chord progression as text/MIDI
- 🔲 History of recent analyses (localStorage)

---

## 📄 License

MIT — use freely, credit appreciated.

## 🙏 Credits

- [essentia.js](https://github.com/MTG/essentia.js) — WebAssembly port of Essentia by MTG/UPF
- [Piped API](https://github.com/TeamPiped/Piped) — Privacy-friendly YouTube proxy
- [Rhythmcore Interface](https://design.neuform.com/) — Design system by Meng To
- [Impeccable](https://impeccable.style/) — Design audit by Paul Bakaus

---

*Built with ❤️ by [Feco Linhares](https://github.com/fecolinhares)*
