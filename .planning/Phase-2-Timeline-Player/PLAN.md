# Phase 2 — Timeline Player & Full-Song Analysis

## Goal
Transform the current single-result display into an interactive audio player with waveform timeline, real-time chord tracking, and full-song analysis.

## Scope
- Remove the 180-frame analysis cap → process full audio duration
- Store decoded AudioBuffer for playback
- Return chord regions with start/end times
- Canvas-based waveform renderer with chord overlays
- Audio player: play/pause, seekable timeline, speed control (0.5x/1x/2x), volume slider
- Real-time playhead sync + current chord display
- Key display above player, main progression below

## Verification Criteria
1. Audio file upload → player loads with waveform + chord regions visible
2. Click play → audio plays, playhead moves, current chord updates in real time
3. Click on timeline → audio seeks to that position
4. Speed buttons change playback speed
5. Volume slider changes volume
6. Multiple progresses render as color-coded bars on timeline
7. Key displayed above player
8. Responsive on mobile (320px+)
9. Dark/light theme consistent

## Tasks

### 1. Full-Song Analysis Engine
- Increase `maxFrames` from 180 to `Math.floor((channelData.length - FRAME_SIZE) / HOP_SIZE)`
- Add performance guard: if frames > 2000, process in chunks yielding to event loop
- Return chord regions with `{ name, root, quality, startTime, endTime, confidence }`
- Store `window.__audioBuffer` for playback
- Return `duration` in seconds

### 2. Chord Region Detection with Timing
- Modify `detectChordsFromChroma` to return timing info
- Each merged segment gets: `startTime = firstFrameIndex * hopSize / sampleRate`
- Track endTime of each segment
- Filter out regions with confidence < 0.05

### 3. HTML Layout
```
- #keyDisplay (keep, move above player)
- #playerSection (new):
  - .timeline-container: canvas + chord labels
  - .player-controls: play/pause, time, speed, volume
  - .current-chord: name + time range
- #progressionDisplay (keep, below player)
```

### 4. Canvas Waveform Renderer
- Draw audio waveform (min/max peaks per pixel column)
- Draw chord regions as semi-transparent colored bars above waveform
- Draw chord name labels
- Draw playhead as vertical bright line with glow

### 5. Audio Playback System
- `startPlayback()`: create AudioBufferSourceNode → connect gain → destination
- `stopPlayback()`: stop source, clean up
- `seekTo(time)`: stop current, create new source at time
- `setSpeed(factor)`: playbackRate.value
- `setVolume(val)`: gainNode.gain.value
- `requestAnimationFrame` loop: update playhead + current chord

### 6. Current Chord Sync
- On each animation frame, find chord region containing currentTime
- Update chord display + highlight on progression pills
- Emit transition animation on chord change

### 7. Impeccable Polish & Animations
- card-enter / stagger animations on player reveal
- Ripple effect on play button
- Smooth playhead motion
- Chord label transitions (slide up on change)
- Responsive: waveform height adjusts for mobile

## Files to Modify
- `index.html` — main application (all changes in one file)
