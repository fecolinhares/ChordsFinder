---
phase: 01-hybrid-pipeline
plan: 01
type: summary
---

# Phase 01 Summary — Hybrid Chord Detection Pipeline

**Status**: ✅ Complete
**Shipped**: 2026-06-10 (initial), refined through 2026-06-10

## What Was Built

Replaced the broken essentia.js TonalExtractor (WASM vector bug) with a hybrid approach:
- essentia.js KeyExtractor for key/scale (scalar outputs work correctly)
- Manual FFT 8192pt + chroma (12 bins, 5-harmonic summation, DC removal) + template matching (24 chords) + margin-over-mean scoring + temporal smoothing
- 4 input modes: File upload, YouTube, Tab Capture, Microphone
- Dark/light themes, responsive, SEO, a11y

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Hybrid pipeline | essentia.js WASM v0.1.3 returns `{}` for all `std::vector` outputs | ✅ Correct — KeyExtractor works, manual FFT circumvents bug |
| FFT 8192pt Hann | ~5.86Hz bin resolution at 48kHz, enough for semitone distinction | ✅ |
| Score by margin over mean | Better confidence metric than absolute correlation | ✅ |

## Stats
- Pipeline tested with 3 synthetic WAVs + real user MP3
- 0 JS errors in production
- Impeccable design audit pass
