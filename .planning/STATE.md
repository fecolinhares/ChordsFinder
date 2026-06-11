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
- None yet

## Decisions Log
- TonalExtractor for chord+key detection (single call, returns progression + key + strength)
- Same 4 input modes as BPMFinder
- Pulse animation accent on detected chord

---

## Quick Tasks Completed
| Date | Task | Description |
|------|------|-------------|
| 2026-06-11 | Fix EssentiaJS double-vector | Separate vectors for KeyExtractor/TonalExtractor, safeDelete() guard, graceful fallback |
