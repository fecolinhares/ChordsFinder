# ChordsFinder

> Free online chord and key detector — 100% private, no servers, no sign-ups.

Detect chords, key, and chord progression from audio files, YouTube links, microphone capture, or browser tab audio. All processing happens in your browser via a hybrid pipeline (essentia.js WASM KeyExtractor + Web Audio API FFT with manual chroma and template matching) — nothing leaves your machine.

## Features

- 🎯 **Chord Detection** — Identifies chords (C, Dm, G7, Am, etc.) with confidence
- 🎹 **Key Detection** — Detects musical key (C major, A minor, etc.) with strength
- 📋 **Chord Progression** — Shows the sequence of chords in the track
- 📁 **File Upload** — MP3, WAV, FLAC, OGG — drag-and-drop
- 🔗 **YouTube Links** — Paste any YouTube URL for analysis
- 🎤 **Microphone Capture** — Record configurable 5–30s from your mic
- 🖥️ **Tab Capture** — Capture audio from any browser tab
- 🔒 **100% Private** — All client-side, no uploads to servers
- 🌙 **Dark/Light Theme** — Persistent toggle
- 📱 **Responsive** — Works on mobile, tablet, desktop

## Getting Started

Open **https://fecolinhares.github.io/ChordsFinder/** in Chrome, Firefox, Safari, or Edge.

### Input modes
1. **File**: Drag & drop an audio file, or click to browse. Auto-analyzes on drop.
2. **YouTube**: Paste a YouTube URL (youtube.com/watch?v= or youtu.be/) and click Analyze.
3. **Capture**: Choose Microphone or Tab Audio to record configurable duration (5–30s) for analysis.

### Results
- **Detected Key**: Shows the musical key (e.g., C major, A minor) with confidence
- **Current Chord**: The most prominent chord detected, synced with playback position
- **Progression**: The sequence of chords found in the audio
- **Timeline Player**: Waveform with chord region overlays, play/pause, seek, speed (0.5x/1x/2x), volume control

## Stack

- **Audio Analysis**: Hybrid pipeline — essentia.js WASM KeyExtractor + Web Audio API FFT (manual chroma + template matching)
- **YouTube Audio**: Piped API (public, no API key required)
- **Browser APIs**: Web Audio API, getUserMedia, getDisplayMedia
- **Design**: Rhythmcore Interface (Inter, JetBrains Mono, OKLCH tokens)
- **Offline**: Service Worker for file upload mode
- **Deploy**: GitHub Pages

## License

MIT — use freely, credit appreciated.

---

*Built with [essentia.js](https://github.com/MTG/essentia.js) by MTG/UPF*
