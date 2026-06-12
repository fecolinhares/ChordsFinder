# GSD Quick — Fix Carousel Scrolling Through All Micro-Regions

## Description
The carousel renders ALL 517 chordRegions as pills, so during playback it scrolls through every micro-region even when the chord name doesn't change (e.g., "C" → "C" → "C" → "G" → "G"). NowPlaying only changes when the chord NAME changes, creating a visual mismatch. The carousel should merge consecutive same-named regions.

## Root Cause
`renderProgressionCarousel()` creates a pill per raw chord region. Consecutive same-named regions (from frame-level analysis) produce multiple identical pills. `centerProgPill()` advances through ALL of them, making the carousel scroll rapidly while NowPlaying stays stable.

## Fix
1. Create a `getUniqueProgression(regions)` that merges consecutive same-named regions
2. Store result in `progressionData` 
3. Use `progressionData` for carousel rendering and highlighting
4. Find index by time range instead of raw region index
