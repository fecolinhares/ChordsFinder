---
slug: fix-chords-map-typecheck
status: complete
---

# Fix "rawChords.map is not a function"

## Problem
TonalExtractor WASM can return `chords_progression` as a string (single chord) 
instead of an array, or use property name `chords` instead of `chords_progression`.
`rawChords.map(...)` fails when rawChords is not an array.

## Fix
1. Check both `chords_progression` and `chords` property names
2. `Array.isArray()` guard before `.map()` — convert single value to [value]
3. Same guard on `rawStrengths`

## Files Changed
- `index.html` — type-safe chord/strength extraction
