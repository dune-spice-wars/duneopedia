# Duneopedia

An unofficial wiki for *Dune: Spice Wars*, updated for the End of Life patch.

## Tech

- **Astro v5** — static site generator; pages are `.astro` files
- **TypeScript** — all data and logic is typed
- **Node.js v22+**, **Sharp** for image optimization
- **CSS** — pre-compiled SASS from the HTML5UP Editorial template (do not edit directly)
- **Hosting** — GitHub Pages via GitHub Actions

```bash
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project Structure

### `src/data/types.ts` — single source of truth for all types
All interfaces and types live here. Key types:
- `FactionId` — union of all 7 faction id strings
- `Cost` — optional resource fields used for building/unit costs and upkeep
- `Unit`, `Building`, `Development`, `Councilor`, `FactionData` — main game entity shapes
- `VillageTrait`, `Resource`, `SpecialRegion` — Arrakis page data
- `CommunityPatch`, `UnitPatch`, `BuildingPatch`, `DevelopmentPatch` — patch delta types

### `src/data/` — game data as typed TS constants
Each file exports typed arrays consumed directly by pages:
| File | Exports |
|---|---|
| `arrakis.ts` | `villageTraits`, `resources`, `specialRegions` |
| `buildings.ts` | `buildings` |
| `councilors.ts` | `councilors` |
| `developments.ts` | `developments` |
| `factions.ts` | `factions` |
| `units.ts` | `units` |
| `patches/` | community patch delta objects (planned — not yet built) |

### `src/pages/` — one `.astro` file per route
- `index.astro` — home/landing page
- `arrakis.astro` — villages, resources, special regions, sietches
- `[faction].astro` — dynamic faction pages (uses `FactionId`)
- `buildings.astro`, `units.astro`, `developments.astro`, `councilors.astro`, `factions.astro`, `gameplay.astro`

### `src/components/` — reusable Astro components
`BuildingCard`, `UnitCard`, `DevelopmentCard`, `CouncilorCard`, `DevTree`, `FactionLinks`, `CostDisplay`, `BackToTop`

### `src/layouts/`
- `Layout.astro` — master shell: nav sidebar, HTML head, slot for page content

### `src/assets/`
- `banners/` — page header images (`.png`)
- `councilors/` — councilor portrait images
- `devtrees/` — development tree images per faction

## Conventions

### Naming
- Data files: `camelCase.ts`
- Page files: `kebab-case.astro`
- Component files: `PascalCase.astro`
- Image assets: `camelCase` (e.g. `villagesBanner.png`)

### Data
- Entity `id` fields are always kebab-case (e.g. `'desert-miners'`)
- `effects`, `info`, and `abilities` fields are always `string[]`, even for a single item
- Effect strings use `+`/`−` prefixes for buffs/debuffs (e.g. `'+3 Solari per Economy building'`)
- All new types/interfaces go in `src/data/types.ts` only — never declared inline in data files

### Resource name casing
In-game resource names are always capitalized in strings: Solari, Plascrete, Authority, Manpower, Intel, Spice, Water, Influence, Knowledge, Hegemony, Command Points, Landsraad Standing, Fuel Cells

### Community patch system (planned)
`types.ts` defines `CommunityPatch`, `UnitPatch`, `BuildingPatch`, and `DevelopmentPatch` for a planned toggle feature. The intent is that `patches/` files will contain partial delta objects, which get merged over base data to reflect ongoing community balance changes. Base data always reflects the official End of Life patch.

### Page structure
- Section headers use `id` attributes for anchor linking (e.g. `<h2 id="villages">`)
- Internal links within pages reference resource/entity `id` values directly (e.g. `href="#solari"`). Changing an `id` in a data file will break any anchor links pointing to it.
