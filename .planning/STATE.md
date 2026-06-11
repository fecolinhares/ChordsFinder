# ChordsFinder — Project State

## v1 — Core Detection + Visual Foundation (Phase 1)

**Status:** 🟢 In Progress
**Started:** 2026-06-10

### Key Files
- `index.html` — Main application (single HTML, all-in-one)
- `DESIGN.md` — Rhythmcore Interface design contract
- `sw.js` — Service Worker for offline support
- `robots.txt` — SEO
- `sitemap.xml` — SEO
- `llms.txt` — AI agent discovery

### Current Focus
- Phase 1: Core detection + full Rhythmcore UI + all 4 input modes

### Next
- Phase 2: Polish + SEO + deploy

## Known Issues
- Essentia.js 0.1.3 WASM has a systematic bug: ALL std::vector outputs (float, string, 2D) return as empty `{}` via emscripten val::set(). Only scalar/string outputs work.

## Decisions Log
- ~~TonalExtractor for chord+key detection~~ → **BROKEN** in essentia.js 0.1.3 WASM (std::vector returns `{}`)
- **Hybrid pipeline** (Phase 1.1): essentia KeyExtractor (key/scale) + manual FFT/chroma + template matching (24 chord types)
- Same 4 input modes as BPMFinder
- Pulse animation accent on detected chord

---

## Phases Completed
| Phase | Description | Date |
|-------|-------------|------|
| 1 | Initial implementation | 2026-06-10 |
| 1.1 | Hybrid pipeline (replace broken TonalExtractor) | 2026-06-11 |

## Quick Tasks Completed
| Date | Task | Description |
||------|------|-------------|
|| 2026-06-11 | Fix EssentiaJS double-vector | Separate vectors for KeyExtractor/TonalExtractor, safeDelete() guard, graceful fallback |
|| 2026-06-11 | [object Object] fixes | Array/object type guards, String() coercion, .name extraction |
