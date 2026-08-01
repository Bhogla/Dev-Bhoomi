// Single source of truth for company facts.
// CONFIRM flag = not yet verified by client. Do not ship a `true` value as fact.

export const company = {
  name: "Dev Bhoomi Enterprises",
  proprietor: "Nirmala Negi",
  gstin: "05AZOPN3520D1ZM",
  email: "devbhoomi.solarproduct@gmail.com",
  phonePrimary: "+91 7818806374",
  phoneSecondary: "+91 8392866888",
  phoneNeedsConfirmation: false,
  address: {
    line1: "Mauza Kuanwala",
    landmark: "near Patanjali Factory",
    city: "Dehradun",
    state: "Uttarakhand",
    pin: "248001",
  },
  yearsOperating: 10,
  coverage: "All Uttarakhand",
} as const;

export const turnover = [
  { fy: "2024–25", crore: 25 },
  { fy: "2025–26", crore: 31 },
] as const;

// Installed capacity was removed rather than shipped empty: no figure for it
// exists anywhere in the client profile, and a blank stat reads worse than
// one fewer stat. If the client supplies a MW total, add it back here.
export const trustStrip = [
  { label: "Years in solar", value: "10", confirmed: true },
  { label: "FY25–26 turnover", value: "₹31 Cr", confirmed: true },
  // Profile states "all across Uttarakhand" — no district count, and none needed.
  { label: "Coverage", value: company.coverage, confirmed: true },
] as const;

// Section 6 "Key Strengths" of docs/client-profile.pdf, verbatim.
// Client's own positioning claims — not third-party credentials.
export const capabilities = [
  "High-quality products with latest technology",
  "Experienced and skilled team",
  "Affordable pricing with customized solutions",
  "Excellent after-sales service",
] as const;

// Section 3 "Vision & Mission" of docs/client-profile.pdf, verbatim.
export const positioning = {
  vision:
    "To be a leading provider of renewable energy solutions, contributing to a greener and sustainable future.",
  mission:
    "To deliver reliable, affordable, and eco-friendly solar products with exceptional service and long-term value.",
} as const;

// Deliberately absent: certifications.
// Profile section 7 lists "MSME / ISO Certifications (if any)" and
// "Authorized Dealer / Manufacturer (if applicable)" — unfilled template
// placeholders, not claims. GSTIN above is the only verified registration.
