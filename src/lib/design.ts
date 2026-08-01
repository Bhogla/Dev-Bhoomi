/**
 * Design system — the single source for type, surface and spacing recipes.
 *
 * Everything here is derived from the protected components in
 * docs/REFERENCE-SPEC.md (hero container, floating pill, marquee card).
 * Those are literal and untouched; this file is how the rest of the site
 * is made to belong to them.
 *
 * The hero's surface character is: very large radius, near-invisible border,
 * and an enormous soft shadow at almost no opacity —
 *   rounded-[48px] · border-slate-200/50 · shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]
 * i.e. a surface that floats without announcing it. Radius steps down as
 * surfaces get smaller; the shadow keeps that character at every tier.
 *
 * NOTE ON ORDER: `leading-*` must come AFTER `text-[size]` in every string.
 * tailwind-merge treats them as conflicting (Tailwind's `text-lg/7` shorthand),
 * so a leading-* placed first is silently dropped by cn().
 */

/* ------------------------------------------------------------------ *
 * Type scale
 *
 * Ten roles, each at least 1.2x from its neighbour. The previous build had
 * twenty display sizes, including 19/20/21 and 26/27/28 — differences no
 * reader can perceive and no hierarchy can use.
 * ------------------------------------------------------------------ */
export const type = {
  /**
   * Section label. ONE treatment sitewide.
   * This is the only place blue is used as a text colour anywhere on the
   * site — that exclusivity is what makes it read as a system rather than
   * an accent. Deliberately unadorned: no rule, no dot, no marker. The
   * brief rejects the panel motif as a bullet icon, and a hairline rule
   * before a label is the broadsheet default. Tracking does the work.
   */
  eyebrow:
    "font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-panel-blue",

  /**
   * Label above a number rather than a section — trust strip, calculator
   * result, at-a-glance. Same metrics as `eyebrow`, muted instead of blue:
   * a figure label sits directly against its value (often amber), and blue
   * there would compete. Section labels are blue; data labels are muted.
   */
  figureLabel:
    "font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted",

  /** Interior page title (PageHero). */
  pageTitle:
    "font-display text-[32px] md:text-[44px] font-medium leading-[1.1] tracking-tight text-ink",

  /** Section heading (h2). */
  sectionTitle:
    "font-display text-[28px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-ink",

  /** Major subhead — path cards, segment lede, empty states. */
  subhead:
    "font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight text-ink",

  /** Card heading (h3) — products, projects, process steps, tiles. */
  cardTitle:
    "font-display text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-ink",

  /** Standfirst under a section title. */
  lede: "font-sans text-[14px] md:text-[15px] leading-relaxed text-ink-muted",

  /** Default body copy. */
  body: "font-sans text-[14px] leading-relaxed text-ink-muted",

  /** Dense body — list details, card blurbs. */
  bodySm: "font-sans text-[13px] leading-relaxed text-ink-muted",

  /** Captions, table keys, chips. */
  meta: "font-sans text-[12px] leading-normal text-ink-muted",

  /** Inline label sitting against body copy. */
  label: "font-sans text-[13px] font-semibold text-ink",

  /** Trust-strip and at-a-glance figures. Always tabular. */
  figure:
    "tnum font-display text-[34px] md:text-[44px] font-medium leading-none tracking-tight text-ink",

  /** The calculator result — the largest type on the site after the hero. */
  figureLead:
    "tnum font-display text-[52px] md:text-[68px] font-medium leading-none tracking-tight",
} as const;

/* ------------------------------------------------------------------ *
 * Surfaces
 *
 * Two container tiers plus an inset. Border is slate-200/60, matching the
 * marquee card and the pill's trailing button exactly — the protected
 * components already settled that value, so the rest of the site adopts it
 * rather than inventing a third.
 *
 * `var(--hairline)` is retained for INTERNAL rules (dividers between rows).
 * Container edge and internal rule are different jobs and keep different
 * values; that distinction is intentional.
 * ------------------------------------------------------------------ */
export const surface = {
  /** Large card — calculator panel, About cards, AMC, path cards. */
  panel:
    "rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)]",

  /** Grid item — product, project, tile. */
  card: "rounded-[24px] border border-slate-200/60 bg-surface-raised shadow-[0_12px_32px_-16px_rgba(10,27,51,0.05)]",

  /** Interactive grid item: same as card, plus the hover the pill uses. */
  cardInteractive:
    "rounded-[24px] border border-slate-200/60 bg-surface-raised shadow-[0_12px_32px_-16px_rgba(10,27,51,0.05)] transition-all hover:border-slate-300",

  /** Nested block inside a card — inputs, notes, chips. */
  inset: "rounded-2xl border border-[var(--hairline)] bg-surface",

  /** Internal divider. */
  rule: "border-[var(--hairline)]",
} as const;

/* ------------------------------------------------------------------ *
 * Vertical rhythm
 *
 * One section cadence sitewide so the page reads as a single document.
 * The trust strip is deliberately compact — it is a strip, not a section —
 * but sits on the same 4px grid.
 * ------------------------------------------------------------------ */
export const space = {
  section: "py-20 md:py-28",
  sectionCompact: "py-12 md:py-16",
  gutter: "px-5 md:px-10",
  /** Section header to first content block. */
  headerGap: "mb-12 md:mb-16",
  /** Standard grid gap. */
  grid: "gap-5 md:gap-6",
  /** Two-column split with a wide gap. */
  split: "gap-10 lg:gap-16",
} as const;
