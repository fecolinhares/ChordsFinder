# GSD Quick — Fix Progression Carousel Sync

## Description
The progression carousel is advancing through chords that don't match the "Now Playing" display. These should be in sync — the current highlighted pill in the carousel must match the chord shown in current-chord-display.

## Investigation Needed
- Find how chordRegions are built and how current time maps to both displays
- Find the updateCurrentChord() and updateProgressionCarousel() functions
- Identify the mismatch root cause

## Fix
- Ensure both use the same chord region lookup logic
- Same index, same chord name
