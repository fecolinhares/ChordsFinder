# ChordsFinder — Project Context

## Description
Free online chord and key detector. Upload audio files, paste YouTube links, or capture audio from microphone or browser tab — detect chords, key, and chord progression entirely client-side.

## Architecture
- **Hybrid pipeline**: essentia.js WASM for key extraction (works) + manual FFT/chroma/template-matching for chords (circumvents essentia.js WASM vector bug)
- **Input modes**: File upload, YouTube URL (via Piped API), Tab Capture (getDisplayMedia), Microphone (getUserMedia)
- **Storage**: 100% client-side, no servers
- **Runtime**: Single HTML file (~116KB), Service Worker for offline, static hosting

## Design System
- **Name**: Rhythmcore
- **Theme**: Dark-first, OKLCH tokens, Inter + JetBrains Mono
- **Primary**: cyan #06B6D4 (oklch 0.53 0.14 195)
- **Accent**: amber #F97316 (oklch 0.70 0.18 51)
- **Key reference**: BPMfinder visual identity

## Milestones

### Milestone 1: Core Chord Detection Pipeline ✅
- Hybrid pipeline: essentia KeyExtractor + FFT 8192pt + chroma (12 bins, 5-harmonic summation, DC removal) + template matching (24 chords) + margin-over-mean scoring + sliding window smoothing
- 4 input modes (file, YouTube, mic, tab)
- Single chord/key result display with progression pills
- Dark/light themes, responsive, SEO, a11y

### Milestone 2: Timeline Player & Full-Song Analysis ✅
- Full-song analysis (remove 180-frame cap, process entire duration)
- Audio playback with decoded AudioBuffer (play/pause/seek/speed/volume)
- Waveform canvas visualization with chord region overlays
- Real-time playhead + current chord sync
- Main progression highlighted + player controls
- Impeccable visual refinement
- Configurable capture duration (5/10/15/30s) for mic and tab

## Known Issues
- essentia.js WASM v0.1.3 has a marshalling bug where all `std::vector` outputs return `{}`. KeyExtractor (scalar only) works fine. Circumvented via manual FFT pipeline.
- FFT is CPU-bound for long audio (>5 min songs may take 5-8s to process on mobile)
