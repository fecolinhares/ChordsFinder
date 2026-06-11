# Phase 1.1 — Hybrid Chord Detection Pipeline

## Goal
Replace the broken essentia.js TonalExtractor (which returns `{}` for ALL vector outputs due to a WASM marshalling bug) with a hybrid approach: essentia KeyExtractor for key + manual FFT/chroma analysis for chord detection.

## Why
essentia.js 0.1.3 (only published version) has a systematic bug: `std::vector` outputs (float, string, 2D) all return as empty `{}` via WASM. This affects Windowing, Spectrum, HPCP, FrameGenerator, ChordsDetection, and chords_progression. Only scalar/string outputs work (KeyExtractor, float properties).

## Pipeline

```
Input audio (Float32Array)
  │
  ├─→ essentia.KeyExtractor() → key, scale, strength     ✅ works
  │
  └─→ Manual frame-based chroma analysis:
        Frame audio (4096 pts, hop 2048)
        → Hann window each frame
        → FFT (radix-2, 4096 bins)
        → Magnitude spectrum
        → Map bins to 12 pitch classes (MIDI note mapping)
        → Normalize chroma vector
        → Template matching (24 templates: 12 major + 12 minor)
        → Sliding window smoothing (3 frames)
        → Best chord per frame → progression
```

## Tasks

### T1 — FFT + Chroma Core
- [ ] Inline radix-2 FFT (4096-point, ~40 lines)
- [ ] Hann window function
- [ ] Magnitude spectrum from complex FFT
- [ ] Pitch class mapping (bin → MIDI → chroma bin 0-11)

### T2 — Chord Detection
- [ ] 24 chord templates (all roots × major/minor)
- [ ] Correlation scoring (dot product)
- [ ] Sliding window temporal smoothing (3 frames)
- [ ] Best match selection with confidence

### T3 — Integration
- [ ] Rewrite `runEssentiaChordAnalysis()` to use hybrid pipeline
- [ ] Keep KeyExtractor for key data
- [ ] Remove TonalExtractor call
- [ ] Return same result format `{key, scale, strength, chords, mainChord}`
- [ ] Remove debug panel

### T4 — Testing
- [ ] Test with c_major_chord.wav → expect C major
- [ ] Test with a_minor_chord.wav → expect A minor  
- [ ] Test with progression.wav → expect C, G, Am
- [ ] Test with user's real audio (via tunnel)

### T5 — Cleanup
- [ ] Remove redundant essentia.js CDN scripts if not needed
- [ ] Remove debug panel DOM elements
- [ ] Update STATE.md and decision log

## Verification Criteria
1. C major test WAV → shows "C major" key, "C" chord, confidence >50%
2. A minor test WAV → shows "A minor" key, "Am" chord
3. Progression WAV → shows progression with multiple chords
4. All 4 input modes still work (File, YouTube, Capture, Mic)
5. No `[object Object]` or `{}` in output
6. Key display matches KeyExtractor result
