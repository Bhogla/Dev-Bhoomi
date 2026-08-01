// Hero copy. Numbers derive from company.ts so no figure is restated by hand.
import { company, turnover } from "./company";

const latest = turnover[turnover.length - 1];

export const heroCopy = {
  // Credential-led, two lines, <br /> split preserved per REFERENCE-SPEC copy substitution.
  headlineLines: [
    `${company.yearsOperating} years. ₹${latest.crore} crore.`,
    `${company.coverage.replace("All ", "")}'s solar, installed and supplied.`,
  ],
  subheadline:
    "Rooftop and ground-mounted solar plants installed across Uttarakhand, plus multi-brand panels, inverters and balance-of-system supplied direct to installers and contractors.",
  primaryCta: "Book a site survey",
} as const;

// The hero action row (the floating pill) is no longer navigation — it states
// the home page's primary job: the two path-split routes. Short labels are for
// small screens, where the full ones would wrap the pill to two lines.
export const heroActions = {
  paths: [
    { label: "Get solar installed", short: "Install", to: "/install" },
    { label: "Buy solar products", short: "Products", to: "/products" },
  ],
  cta: { label: "Get in touch", to: "/contact" },
} as const;
