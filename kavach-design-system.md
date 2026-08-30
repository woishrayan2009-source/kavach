# Kavach Design System

Canonical design tokens and components shared across the whole Kavach
family — Extingo, Rakshak, Sanjeevani, and this hub site. Any new
Kavach-family page should build from this file, not approximate it.

Source of truth: Extingo's production `style.css`. Every value below is
copied verbatim from there; nothing here is invented independently.

---

## Colors

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0a0c0e` | Page background |
| `--surface` | `#14181b` | Card / panel background |
| `--surface-2` | `#1b2124` | Nested surface (inputs, previews) |
| `--surface-3` | `#21282c` | Active/hover surface (nav pill, tile icon bg) |
| `--border` | `#262d32` | Default border |
| `--border-soft` | `#1c2226` | Divider inside a panel |
| `--text` | `#e9edf0` | Primary text |
| `--text-dim` | `#8d969e` | Secondary text |
| `--text-faint` | `#565f65` | Eyebrows, captions, meta labels |
| `--amber` | `#ff9d2e` | Brand accent, primary buttons, active nav |
| `--amber-dim` | `#7a4f1c` | Amber-tinted borders (warning states) |
| `--red` | `#ff4757` | Emergency / alert accent |
| `--red-dim` | `#6e232b` | Red-tinted borders (idle alert states) |
| `--teal` | `#35e0c4` | Normal/OK status, Built badge |
| `--teal-dim` | `#1c5a4e` | Teal-tinted borders |
| `--yellow` | `#ffcc4d` | Legacy demo-mode badge default |
| `--violet` | `#a390d4` | **Concept-status badge only** — reserved, not reused elsewhere |
| `--violet-dim` | `#453a63` | Violet-tinted borders (concept card outline) |

## Type

| Token | Stack | Role |
|---|---|---|
| `--font-display` | `'Rajdhani', 'Oswald', 'Arial Narrow', sans-serif` | Headings, brand name, buttons, stat values |
| `--font-body` | `'IBM Plex Sans', 'Segoe UI', system-ui, -apple-system, sans-serif` | Paragraph copy |
| `--font-mono` | `'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace` | Labels, tags, eyebrows, badges, nav |

Self-hosted via local `@font-face` (see `/fonts/README.md`) — no CDN
call at runtime. Falls back cleanly to system fonts if the woff2 files
aren't present.

## Layout rhythm

- Max content width: `1180px`, centered, `padding: 28px 24px 64px`
- Card radius: `--radius: 6px`
- Card shadow: `--shadow-panel: 0 1px 0 rgba(255,255,255,0.02) inset, 0 8px 24px rgba(0,0,0,0.35)`
- Grid gaps: `14–18px` between cards, `4px` inside pill groups

## Components

### Pill nav (`.site-nav` / `.site-nav-link`)
Rounded pill container (`border-radius: 20px`), mono 12px links,
active link gets `--surface-3` background + `--amber` text. A
`.site-nav-divider` (1px, `--border`) separates internal page links
from external family-site links (`.site-nav-link--external`, hover
color `--teal`, trailing `↗` icon, `target="_blank"`).

### Hazard rule (`.hazard-rule`)
The signature divider: a 6px diagonal amber/black repeating stripe,
`opacity: 0.85`. Runs full-width directly under the header on every page.

### Demo-mode badge (`.demo-mode-badge`)
Small pill: colored dot (`.demo-mode-dot`) + mono text, translucent
tinted background, matching border. Status modifiers:
- `.demo-mode-badge--built` → teal
- `.demo-mode-badge--demo` → amber
- `.demo-mode-badge--concept` → violet

### Card (`.module-card`, `.doc-card`, `.sensor-tile` pattern)
`--surface` background, `--border` outline, `--radius`, `--shadow-panel`.
Status-tinted border modifiers: `--built` (teal-dim), `--demo`
(amber-dim), `--concept` (**dashed**, violet-dim — must always be
visually distinct from a solid-border built/demo card, reinforced with
an explicit `.module-status-note` line, never color alone).

### Primary button (`.btn-primary`, `.submit-btn`, `.doc-download`)
Amber gradient (`linear-gradient(135deg, var(--amber), #ff7a2e)`), dark
text (`#0a0c0e`), `font-family: var(--font-display)`, `border-radius: 5px`.

### Accordion (`.accordion-toggle` / `.accordion-panel`)
Chevron rotates 90° on expand, `max-height` transition, mono 12px
trigger text. Reused from the `.log-toggle` pattern.

### Alert motif (red-pulsing)
Emergency/alert states pulse red via `box-shadow`/`filter` glow, `~1.4–2.2s`
ease-in-out loop (see `.status-emergency`, `.ext-alert-icon`,
`.arch-cascade-box`). This is the single visual language for "an alert
is escalating" — reused anywhere the alert cascade is represented.

---

## Rules for extending this system

1. Never introduce a new hue without adding it here first.
2. `--violet` is reserved for Concept status. Don't reuse it for
   anything else, so it never gets confused with a warning state.
3. New components should reuse `--radius`, `--shadow-panel`, and the
   existing border/surface tokens rather than inventing new values.
4. Any new Kavach-family site should link this file from its own repo
   README and flag any deliberate deviation explicitly.
