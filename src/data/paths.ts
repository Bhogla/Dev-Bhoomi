// Section 3 — the fork. A homeowner and a contractor are different buyers.
// Everything downstream branches from this choice; keep the journeys separate.

import type { Division } from "./products";

export interface PathCard {
  id: Division;
  title: string;
  audience: string;
  blurb: string;
  bullets: string[];
  cta: string;
  href: string;
}

export const paths: PathCard[] = [
  {
    id: "installation",
    title: "Get solar installed",
    audience: "Homeowners, businesses, farms",
    blurb:
      "We survey the site, size the system, handle DISCOM approval and subsidy paperwork, and commission the plant.",
    bullets: [
      "Free site survey before any commitment",
      "PM Surya Ghar subsidy paperwork handled",
      "Net metering and DISCOM liaison",
      "AMC after handover",
    ],
    cta: "Get solar installed",
    href: "/install",
  },
  {
    id: "trading",
    title: "Buy solar products",
    audience: "Installers, contractors, resellers",
    blurb:
      "Multi-brand supply sourced directly from manufacturers — modules, inverters, balance of system, in one procurement line.",
    bullets: [
      "One-stop procurement for a full install",
      "Sourced direct from manufacturers",
      "Modules, inverters, pumps, accessories",
      "Quote-based supply, no minimum listed",
    ],
    cta: "Browse products",
    href: "/products",
  },
];
