# Dev Bhoomi Enterprises — Website Build Brief

**Client:** Dev Bhoomi Enterprises (Proprietorship)
**Sector:** Solar EPC + multi-brand solar component trading
**Location:** Mauza Kuanwala, near Patanjali Factory, Dehradun, Uttarakhand – 248001
**GSTIN:** 05AZOPN3520D1ZM
**Coverage:** All Uttarakhand
**Established:** ~10 years in solar

---

## 1. Business summary

Dev Bhoomi Enterprises runs two distinct lines of business that must be treated as two separate paths on the site:

**A. Installation / EPC**
Rooftop and ground-mounted solar power plants across Uttarakhand. Residential, commercial, industrial. Includes AMC and maintenance contracts.

**B. Trading & Supply**
Multi-brand supplier of solar components sourced directly from manufacturers. One-stop procurement for installers and contractors.

These serve different buyers. A homeowner wants subsidy + payback. A contractor wants stock, brands, and price. Do not blend their journeys.

### Verified credentials
- 10 years operating in solar
- Turnover FY2024–25: ₹25 Cr
- Turnover FY2025–26: ₹31 Cr (24% YoY growth)
- GST registered

### Product & service catalogue

**Installation services**
- Rooftop solar installation (residential & commercial)
- Ground-mounted solar power plants
- AMC & maintenance services

**Trading portfolio**
- Solar PV modules — monocrystalline, polycrystalline, bifacial, TOPCon
- Solar inverters — on-grid, off-grid, hybrid
- Solar water heaters — FPC and ETC systems
- Solar street lights — integrated (all-in-one) and semi-integrated
- Solar water pumps — DC and AC, irrigation and drinking water
- Solar thermal
- Solar fencing
- Installation accessories — structure material, DC/AC cables, earthing kits, lightning arrestors, distribution boxes (AJB/DCDB/ACDB)

### Contact
- Email: devbhoomi.solarproduct@gmail.com
- Phone: **NEEDS CONFIRMATION** — profile lists 7818806374 / 8392866888 on page 1 and 9664471744 / 7830144244 on page 2. Use a single number sitewide.

---

## 2. Open items — confirm with client before launch

Blocking or high-impact gaps. Track status here.

| # | Item | Why it matters | Status |
|---|------|----------------|--------|
| 1 | Correct primary phone number | Two conflicting sets in source doc | ☐ |
| 2 | Total installed capacity (MW/kW) | Strongest EPC credibility metric | ☐ |
| 3 | Number of completed sites | Trust strip content | ☐ |
| 4 | 6–10 project photos with kW + location | Projects section is empty without these | ☐ |
| 5 | Brand names they are authorized to trade | Trading division credibility engine | ☐ |
| 6 | Actual MSME / ISO certification status | Source doc says "if any" — placeholder | ☐ |
| 7 | Authorized dealer status — yes/no, for whom | Source doc says "if applicable" | ☐ |
| 8 | PM Surya Ghar registered vendor? | Highest-intent residential search traffic | ☐ |
| 9 | Warranty terms offered | Comparison-shopper decision factor | ☐ |
| 10 | Typical install turnaround time | Objection handler | ☐ |
| 11 | Financing / EMI partners | Conversion lever on residential | ☐ |
| 12 | Trading arm: online sales or quote-only? | Determines catalogue build | ☐ |

**Rule while these are open:** do not invent numbers, awards, testimonials, or client names. Build the sections with clearly marked placeholder data in `src/data/` so real values drop in cleanly.

---

## 3. Design system

The client-supplied reference spec (see `docs/REFERENCE-SPEC.md`) defines the visual language. That spec wins on layout, motion, and component styling. This section defines only the brand-substitution layer.

### Palette

Derived from the logo. Blue is structural, amber is for action only.

| Token | Hex | Use |
|-------|-----|-----|
| `--solar-amber` | `#F5A81C` | CTAs, highlights, active states. Sparingly. |
| `--solar-amber-deep` | `#D98E0B` | Amber hover / pressed |
| `--panel-blue` | `#2E86AB` | Primary structural blue, links, icons |
| `--panel-blue-deep` | `#1B5A78` | Headings on light, dark UI surfaces |
| `--ink` | `#0A1B33` | Body text, dark buttons |
| `--ink-muted` | `#64748B` | Subheads, captions |
| `--surface` | `#FDFBF7` | Page background — warm off-white, keeps amber from glaring |
| `--surface-raised` | `#FFFFFF` | Cards, navbar, marquee tiles |
| `--hairline` | `rgba(148,163,184,0.25)` | Borders |

**Ratio discipline:** roughly 70% neutral, 22% blue, 8% amber. Amber appears on: primary CTA, one hero accent, active nav state, and the savings-calculator result. Nowhere else.

### Typography

| Role | Face | Notes |
|------|------|-------|
| Display | Outfit (400/500/600) | Headlines, section titles. Medium weight, tight tracking. |
| Body | Inter (400/500/600/700) | All body, UI, labels |
| Numerals | Inter, tabular-nums | Turnover, kW, ₹ figures. Always tabular. |

Single Google Fonts import:
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap');
```

Tailwind theme: `--font-sans: Inter`, `--font-display: Outfit`.

### Signature motif

The logo's curved panel array is the one reusable graphic device. Use it in **at most three** places across the whole site:
1. Hero — as an SVG clip-path mask over the background media
2. Process section — the six steps rendered as panel cells that fill on scroll
3. Footer — a low-opacity outline

Do not use it as a background texture, a bullet icon, a divider on every section, or a loading state. One motif, three appearances.

### Motion

Motion (framer-motion successor) only. Page-load stagger on hero, scroll reveal on section entry, hover micro-interactions on cards and buttons. No parallax, no scroll-jacking, no counters that tick up on every stat. `prefers-reduced-motion` respected globally.

### Anti-patterns — reject these

The default Indian solar site look. Do not build:
- Full-bleed gradient hero over a stock photo of a panel field
- A row of four teal icon boxes with generic feature copy
- Blue-to-green gradient buttons
- Rotating testimonial carousel
- Animated counters on every statistic
- Sun-ray or leaf-swoosh decoration
- Stock imagery of white-collar people pointing at panels

---

## 4. Site structure

Ten sections, in order.

**1. Hero**
Credential-led, not slogan-led. The reference spec's hero container, video background, and floating bottom navbar apply here directly. Headline should lead with the real numbers, not a value proposition. Working direction: "Ten years. ₹31 crore. Uttarakhand's solar, installed and supplied." Primary CTA: book a free site survey. Secondary: view product catalogue.

**2. Trust strip**
Immediately below hero. Four figures: years operating, latest turnover, districts covered, GST-registered. Tabular numerals. No animation on the numbers.

**3. Path split**
Two large cards. "Get solar installed" → EPC funnel. "Buy solar products" → catalogue. Everything downstream forks from this choice. This is the most important structural decision on the page.

**4. Solutions by segment**
Residential · Commercial · Industrial · Agricultural. Each addresses its own concern: subsidy and payback / ROI and load / capacity and uptime / irrigation and fencing. Not four identical cards with swapped icons.

**5. PM Surya Ghar calculator**
Interactive. kW input → estimated monthly generation, subsidy eligibility, payback period, 25-year savings. This is the highest-converting element on any Indian residential solar site. Result figure is one of the amber moments. Gate the lead capture *after* showing the result, never before.

**6. Product catalogue**
Filterable grid by category. Brand logos where authorized (see open item 5). Spec-lite cards with a per-item quote request. If the trading arm is quote-only (open item 12), no cart, no prices.

**7. Process**
Survey → Design → Approval & net metering → Installation → Commissioning → AMC. Six steps. This is a genuine sequence, so numbering is earned here — this is the one place numbered markers are justified. Panel-cell motif appearance #2.

**8. Projects**
Photo grid with kW and location per entry. Blocked on open item 4. Build the component against placeholder data in `src/data/projects.ts`.

**9. AMC & service**
Recurring revenue line, deserves its own section rather than a bullet in a service list. What's covered, response time, contract terms.

**10. Contact**
Form, WhatsApp float, map pin anchored on "near Patanjali Factory" (strong local landmark), single consistent phone number, GSTIN in footer.

---

## 5. Content rules

- Never state a figure the client hasn't confirmed.
- Placeholder copy must be visibly marked `[CONFIRM]` so it can't ship by accident.
- Write from the customer's side: "book a site survey," not "submit enquiry."
- Button verb matches its outcome: "Book survey" → confirmation reads "Survey booked."
- No superlatives the client can't substantiate. "Trusted name in the solar industry" is source-document boilerplate — replace it with the turnover figure, which is verifiable and more persuasive.

---

## 6. Technical baseline

- React + TypeScript + Vite
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- Motion for animation
- lucide-react for icons
- clsx + tailwind-merge, exposed as a `cn()` helper in `src/lib/utils.ts`
- All content in `src/data/` as typed exports — never hardcoded in JSX
- Responsive to 360px minimum
- Visible keyboard focus on every interactive element
- Lighthouse performance ≥ 90; hero video must not block LCP
