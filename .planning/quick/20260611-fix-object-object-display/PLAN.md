---
slug: fix-object-object-display
status: complete
---

# Fix "[object Object]" chord display

## Problem
TonalExtractor WASM can return non-string values for key/scale/chord fields.
When these objects get coerced to string, they show as "[object Object]"
in the chord display.

## Fix
1. `parseChordQuality()` — `String()` coercion + safe `.match()` call
2. key/scale — wrapped in `String()` 
3. strength — wrapped in `Number()`
4. displayResult — `String(mainChord.root || '—')` defensivo

## Files Changed
- `index.html`

