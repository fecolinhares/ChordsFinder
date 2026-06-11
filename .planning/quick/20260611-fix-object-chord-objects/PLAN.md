---
slug: fix-object-chord-objects
status: complete
---

# Fix TonalExtractor returning chord objects instead of strings

## Problem
TonalExtractor WASM returns `chords_progression` as an array of objects 
`[{name: "C", strength: 0.9}, {name: "Am", strength: 0.7}]` instead of 
array of strings `["C", "Am"]`. String(object) → "[object Object]".

## Fix
Detect array of objects by checking `typeof rawChords[0] === 'object'`.
When true, extract `.name` for chord string and `.strength` for strength.

## Files Changed
- `index.html`

