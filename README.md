# ChordsFinder 🎹

> Free online chord and key detector — 100% private, no servers, no sign-ups.

[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://fecolinhares.github.io/ChordsFinder/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**ChordsFinder** detects chords and musical key from audio files, YouTube links, microphone input, or browser tab capture. Everything runs client-side via [essentia.js](https://github.com/MTG/essentia.js) WASM — zero backend, zero data uploads.

**Live demo:** https://fecolinhares.github.io/ChordsFinder/

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 Chord Detection | Identifies chords (C, Dm, G7, Am) with confidence scoring |
| 🎹 Key Detection | Detects musical key (C major, A minor) with strength |
| 📋 Chord Progression | Shows the harmonic progression across the track |
| 📁 File Upload | Drag-and-drop MP3, WAV, FLAC, OGG — auto-analyzes |
| 🔗 YouTube Links | Paste any YouTube URL — fetches audio via Piped API |
| 🎤 Microphone Capture | 10-second recording via getUserMedia |
| 🖥️ Tab Capture | Capture audio from any browser tab via getDisplayMedia |
| 🔒 100% Private | All processing client-side — audio never leaves your device |
| 🌙 Dark/Light Theme | Persistent theme toggle with localStorage |
| 📱 Fully Responsive | Works on mobile, tablet, and desktop |
| 🚀 Offline Ready | Service Worker caches core assets |

## 🚀 Usage

1. Open https://fecolinhares.github.io/ChordsFinder/
2. Choose an input mode (File, YouTube, or Capture)
3. Wait for analysis — results appear instantly
4. See your detected **key**, **current chord**, and **progression**

### Input modes

| Mode | How it works | Requirements |
|------|-------------|-------------|
| **File** | Drag-and-drop or browse | MP3, WAV, FLAC, OGG (≤200 MB) |
| **YouTube** | Paste a YouTube URL | Internet connection |
| **Microphone** | Click "Microphone" | Mic permission (HTTPS/localhost) |
| **Tab Audio** | Click "Tab Audio" — select a tab | getDisplayMedia support |

## 🧠 How It Works

ChordsFinder uses two essentia.js algorithms:

1. **TonalExtractor** — Extracts chord progression (chords_progression), HPCP chroma features, and key information from audio
2. **KeyExtractor** — Refines key detection with Key algorithm

The audio pipeline:
```
Audio File/Stream → AudioContext.decodeAudioData → essentia.js WASM
  → TonalExtractor → chord progression + key
  → KeyExtractor → refined key + confidence
  → Display: Key card + Current chord + Progression
```

## 🎨 Design

Built with the **Rhythmcore Interface** design system (same as [BPMfinder](https://github.com/fecolinhares/BPMfinder)):

- **Fonts**: Inter (sans), JetBrains Mono (mono)
- **Colors**: Primary cyan `#06B6D4`, accent amber `#F97316`, OKLCH tokens
- **Motion**: Masked reveals, staggered entrance, hover lift, ambient pulse
- **Accessibility**: WCAG AA contrast, keyboard navigation, reduced-motion support

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Audio Analysis | [essentia.js](https://github.com/MTG/essentia.js) WASM (TonalExtractor, KeyExtractor) |
| YouTube Audio | [Piped API](https://github.com/TeamPiped/Piped) (public, no API key) |
| Audio Capture | Web Audio API, `getUserMedia`, `getDisplayMedia` |
| Frontend | Vanilla HTML/CSS/JS (zero frameworks) |
| Design System | Rhythmcore Interface (OKLCH tokens, Inter, JetBrains Mono) |
| Offline | Service Worker (SW) |
| Deployment | GitHub Pages |

## 📦 Project Structure

```
ChordsFinder/
├── index.html        # Main application (single HTML)
├── DESIGN.md         # Rhythmcore design contract
├── sw.js             # Service Worker
├── robots.txt        # SEO
├── sitemap.xml       # SEO
├── llms.txt          # AI agent discovery
├── index.html.md     # LLM-friendly description
├── LICENSE           # MIT
├── README.md         # This file
└── .planning/        # GSD project planning
```

## 🔒 Privacy

ChordsFinder is **100% private**:
- ❌ No backend servers
- ❌ No audio uploads
- ❌ No API keys
- ❌ No analytics
- ❌ No cookies
- ✅ All processing in-browser via WASM
- ✅ Audio stays on your device

## 🧪 Future Plans

- [ ] Chroma visualization (HPCP heatmap)
- [ ] Export chord progression as text
- [ ] Chord quality breakdown (major/minor/dim/aug/7th)
- [ ] History of recent analyses (localStorage)
- [ ] MIDI export

## 📄 License

MIT — use freely, credit appreciated.

## 🙏 Credits

- [essentia.js](https://github.com/MTG/essentia.js) — WebAssembly port of Essentia by MTG/UPF
- [Piped API](https://github.com/TeamPiped/Piped) — Privacy-friendly YouTube proxy
- [Rhythmcore Interface](https://design.neuform.com/) — Design system by Meng To
- [Impeccable](https://impeccable.style/) — Design audit by Paul Bakaus

---

*Built with ❤️ by [Feco Linhares](https://github.com/fecolinhares)*
