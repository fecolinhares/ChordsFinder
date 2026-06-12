# ChordsFinder — Agent Context

## Project Overview
Free online chord and key detector. Single HTML file, fully client-side, no servers. Detects chords from audio files, YouTube links, microphone, or tab capture.

## Architecture
- **Pipeline**: Hybrid — essentia.js WASM KeyExtractor (key/scale) + manual FFT 8192pt → chroma (12 bins, 5-harmonic summation, DC removal) → template matching (24 chords) → margin-over-mean scoring → sliding window smoothing → chord regions with timing
- **Note**: essentia.js WASM v0.1.3 has a bug where all `std::vector` outputs return `{}`. KeyExtractor (scalar only) works. Manual FFT pipeline circumvents this.
- **Player**: AudioBufferSourceNode + GainNode, play/pause/seek/speed/volume
- **Timeline**: Canvas-based waveform + HSL-color-coded chord regions + playhead

## Design System
- **Name**: Rhythmcore
- **Theme**: Dark-first, OKLCH tokens
- **Primary**: cyan oklch(0.53 0.14 195)
- **Accent**: amber oklch(0.70 0.18 51)
- **Fonts**: Inter + JetBrains Mono

## Key Files
- `index.html` — full application (~116KB, all in one file)
- `DESIGN.md` — design tokens
- `.planning/` — GSD workflow (standardized: phases/ with numeric prefix, REQUIREMENTS.md, SUMMARY.md per phase)

## Milestones
1. ✅ Core Chord Detection Pipeline — hybrid pipeline working
2. ✅ Timeline Player & Full-Song Analysis — waveform, player, chord sync
3. 🔲 Chroma visualization, export, MIDI

## Commit Style
- English, imperative mood (`feat:`, `fix:`, `docs:`)
- Atomic commits per change
