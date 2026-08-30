# Kavach — Unified Safety Command Grid

The front-door hub site for Project Kavach: one hero thesis, an 8-module
problem/solution grid, a shared architecture diagram, and a documents
page — all sharing one design system with Extingo, Rakshak, and
Sanjeevani.

## Structure

```
kavach/
├── index.html                  Hero + 8-module filterable grid
├── architecture.html           Modules → hub → alert-cascade diagram
├── documents.html               Write-up / synopsis / docs / logbook / presentation / video
├── netlify.toml                 Deploy config + security headers
├── kavach-design-system.md      Canonical design tokens (source of truth)
├── css/
│   └── style.css               Shared stylesheet, all three pages
├── js/
│   └── module-grid.js          Filter bar + concept-card accordion logic
├── fonts/
│   ├── README.md               What font files to add, and where to get them
│   └── (your .woff2 files go here)
└── assets/
    └── docs/                   Drop your PDFs/MP4 here (see below)
```

## Before you deploy

1. **Fonts** — add the `.woff2` files listed in `fonts/README.md`. The
   site works fully offline without them (falls back to system fonts),
   but won't match Extingo pixel-for-pixel until they're in place.
2. **Live URLs** — replace the three placeholder hrefs with your real
   Netlify URLs once each site is deployed:
   - `#extingo` → Extingo's live URL (in `index.html`'s cards and all
     three pages' nav)
   - `#rakshak` → Rakshak's live URL
   - `#sanjeevani` → Sanjeevani's live URL
3. **Documents** — drop these into `assets/docs/` with matching
   filenames (already wired up in `documents.html`):
   - `Kavach_Writeup_national_2026.pdf`
   - `Kavach_Synopsis_2026.pdf`
   - `Kavach_System_Documentation.pdf`
   - `Kavach_Logbook_2026.pdf`
   - `Kavach_Presentation_2026.pdf`
   - `Kavach_Demo_Video_2026.mp4`

## Design system

All colors, type, spacing, and component rules are documented in
`kavach-design-system.md`. Extend from there — don't invent new tokens
inline in `style.css`.

## Status legend

- 🟢 **Built** (teal) — hardware + software shipped (Extingo)
- 🟡 **Software Demo** (amber) — live in-browser demo, no hardware (Rakshak, Sanjeevani)
- 🔵 **Concept** (violet, dashed border) — reasoned proposal, not yet built
  (Electrical Fault, Women's Safety, Flood, School Safety, Unified Dashboard)
