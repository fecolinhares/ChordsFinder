---
slug: fix-essentia-double-vector
status: complete
---

# Fix "EssentiaJS instance already deleted" error

## Problem
`runEssentiaChordAnalysis` creates a single `audioVector` via `essentia.arrayToVector()` 
and passes it to both `KeyExtractor` AND `TonalExtractor`. The WASM Vector is consumed/freed 
by the first algorithm call, so the second call accesses freed memory → "EssentiaJS instance already deleted".

## Fix
1. Create SEPARATE vectors (`keyVec` + `tonalVec`) for each algorithm call
2. Add `safeDelete()` with a `deleted` flag to prevent double-free
3. Graceful fallback: if TonalExtractor returns no chords, use KeyExtractor data as single-chord display instead of throwing

## Files Changed
- `index.html` — `runEssentiaChordAnalysis()` function

## Verification
- JS syntax: ✅ valid
- Tunnel: ✅ 200 OK
