# GSD Quick — Fix Carousel Index Mismatch

## Root Cause
After the previous fix, `centerProgPill(regionIdx)` was passing the `chordRegions` index (0-517) to highlight pills that were created from `progressionData` (0-50). Since `progressionData` has FEWER entries (merged same-name chords), the index was out of bounds — pill[regionIdx] was often undefined, and the carousel silently failed to highlight.

## Also: Initial display mismatch
`updateCurrentChord(mainChord)` uses `chords[0]` (from merged data, no confidence filter), while `progressionData[0]` comes from `chordRegions` (filtered by confidence >= 0.05). If the first chord region has low confidence, `progressionData[0]` shows a different chord than `mainChord`.

## Fix
1. Use `findProgressionIndex(time)` for the carousel (time-based lookup into progressionData), NOT `regionIdx`
2. Make the initial carousel highlight match the initial NowPlaying chord by centering on the progressionData entry with the same name as mainChord
