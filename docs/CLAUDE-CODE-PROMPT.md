# Claude Code — Build Prompt

Paste everything below the line into Claude Code from the project root.

---

Build the Dev Bhoomi Enterprises website. Read `docs/PROJECT-BRIEF.md` and `docs/REFERENCE-SPEC.md` in full before writing any code, and read the existing files in `src/data/`, `src/lib/`, and `src/styles/` — the content layer and brand tokens are already scaffolded and you should build against them rather than replacing them.

**Client:** Dev Bhoomi Enterprises, a 10-year-old solar business in Dehradun, Uttarakhand. Two divisions: rooftop/ground-mount EPC installation, and multi-brand trading of solar components. ₹31 Cr turnover FY25–26, up from ₹25 Cr. The turnover figure is the strongest trust signal available and most competitors don't publish it — lead with it.

## Stack

React + TypeScript + Vite. Tailwind CSS v4 with CSS-first config (no `tailwind.config.js`). Motion for animation. lucide-react for icons. clsx + tailwind-merge via the existing `cn()` helper.

Scaffold the Vite app in place. Import `src/styles/tokens.css` from `index.css` after the Tailwind import and the Google Fonts import.

## Order of work

**Phase 1 — Hero and marquee.** Implement `docs/REFERENCE-SPEC.md` exactly. Every class string, size, weight, shadow, radius, and the video URL are literal and must be reproduced character-for-character. Only two things change from that spec, both documented in it: the body background becomes `--color-surface` `#FDFBF7`, and the copy is substituted for Dev Bhoomi content per the spec's own "Copy substitution" section. The marquee's eight placeholder SaaS logos stay until the client confirms which manufacturer brands they're authorized to trade — keep them, and leave a `// PLACEHOLDER` comment on the array.

Get this phase visually correct and reviewed before moving on. It sets the visual language for everything after it.

**Phase 2 — Sections 2 through 10.** Build in the order given in the brief's site structure. The path split at section 3 is the most important structural decision on the page — a homeowner and a contractor are different buyers and their journeys fork there. Don't blend them.

**Phase 3 — Calculator.** The PM Surya Ghar section is the highest-converting element on an Indian residential solar site. kW input, then estimated monthly generation, subsidy eligibility, payback period, 25-year savings. Show the result *before* asking for contact details, never the reverse. The headline result figure is one of the small number of amber moments on the page.

## Non-negotiables

**Data.** Every figure rendered anywhere traces to `src/data/`. Nothing hardcoded in JSX, nothing invented. Entries carrying `confirmed: false` render a visible `[CONFIRM]` marker so unverified content cannot ship silently. Twelve items are still open with the client — the table is in the brief.

**Colour discipline.** Roughly 70% neutral, 22% blue, 8% amber. Amber appears on the primary CTA, one hero accent, the active nav state, and the calculator result. Nowhere else. Blue is structural.

**The motif.** The logo's curved panel array is the one reusable graphic device, used at most three times sitewide: a clip-path mask on the hero background, the six process steps as cells that fill on scroll, and a low-opacity footer outline. Not a background texture, not a bullet icon, not a divider on every section.

**Numbering.** The process section is a real sequence, so numbered markers carry information there and are justified. Don't number anything else.

**Copy.** Write from the customer's side of the screen. "Book a site survey," not "Submit enquiry." An action keeps its name through the whole flow — a button reading "Book survey" produces a confirmation reading "Survey booked." Replace the source document's "trusted name in the solar industry" boilerplate with the turnover figure, which is both verifiable and more persuasive.

## Reject these

This project should not look like the default Indian solar website. Do not build a full-bleed gradient hero over a stock panel field, a row of four teal icon boxes, blue-to-green gradient buttons, a rotating testimonial carousel, animated counters on every statistic, sun-ray or leaf-swoosh decoration, or stock photography of people in hard hats pointing at panels.

Also avoid the current AI-design defaults, none of which suit this brief: a warm cream background with high-contrast serif and terracotta accent; near-black with a single acid-green accent; broadsheet layout with hairline rules and zero border-radius. The reference spec already pins the direction — soft large radii, white raised surfaces, restrained shadows. Follow it.

## Quality floor

Responsive to 360px. Visible keyboard focus on every interactive element (already handled globally in `tokens.css` — don't override it). `prefers-reduced-motion` respected. Hero video must not block LCP; poster frame and lazy strategy required. Lighthouse performance ≥ 90.

## Working method

Before writing code for each phase, state your plan briefly — the components you'll create and where content comes from. After each phase, screenshot and critique your own output against the brief before continuing. If a section can't be built truthfully because a client fact is missing, build the component against the typed shape in `src/data/` and leave the array empty rather than inventing entries — `src/data/projects.ts` already does this and is the pattern to follow.
