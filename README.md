# Dev Bhoomi Enterprises — Website

Solar EPC + component trading. Dehradun, Uttarakhand.

## Start here

1. `docs/PROJECT-BRIEF.md` — business context, design system, site structure, open items
2. `docs/REFERENCE-SPEC.md` — client-supplied hero/marquee spec (authoritative on structure)
3. `docs/CLAUDE-CODE-PROMPT.md` — paste into Claude Code to begin

## Stack

React · TypeScript · Vite · Tailwind CSS v4 · Motion · lucide-react

## Structure

```
docs/                    briefs + original client profile PDF
public/assets/logo/      brand logo
public/assets/projects/  project photos (awaiting client)
public/assets/brands/    manufacturer logos (awaiting client)
src/data/                all content as typed exports — never hardcode in JSX
src/lib/utils.ts         cn() helper
src/styles/tokens.css    brand token layer
src/components/sections/ page sections
src/components/ui/       shared primitives
```

## Rules

- Every figure on the site traces to `src/data/`. Nothing invented.
- Unconfirmed values carry `confirmed: false` and render as `[CONFIRM]`. They must not ship.
- Amber is for action only — CTAs, one hero accent, active nav, calculator result. Nowhere else.
- Panel-grid motif appears at most three times sitewide.

## Blocked on client

See the open-items table in `docs/PROJECT-BRIEF.md`. Twelve items; project photos and authorized brand names are the two that leave visible holes in the build.
