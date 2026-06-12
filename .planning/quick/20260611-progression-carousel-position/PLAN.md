# GSD Quick: Move progression carousel below Now Playing, above waveform

## Problem
The chord progression carousel was rendered below the player controls, at the bottom of the player section. User wants it immediately below "Now Playing" and above the waveform timeline, creating a natural information flow: what's playing → what comes next → visual waveform → controls.

## Solution
1. Move `.progression` HTML block from below `.player-controls` to between `.current-chord-display` and `.timeline-container`
2. Refine CSS with Impeccable principles:
   - Smooth `scroll-behavior: smooth` with 300ms ease-out-quart feel
   - Pill transitions: 200ms for state changes (past→current)
   - Gradient fade edges for "infinite scroll" illusion
   - Responsive: 44px pills on mobile, 60px on desktop
   - Consistent with Rhythmcore tokens (--accent for current, --bg-surface for pills)

## Verification
- Player loads with carousel visible below Now Playing
- During playback, carousel auto-scrolls to center current chord
- 3 past chords visible to left, 3 future to right
- Responsive layout at 320px+ breakpoint
