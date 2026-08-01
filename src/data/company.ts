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

export const aboutText = [
  "Dev Bhoomi Enterprises is a trusted name in the solar industry, dedicated to providing high-quality solar solutions for residential, commercial, and industrial needs. With a strong commitment to innovation and sustainability, we aim to make clean energy accessible and affordable for all.",
  "Dev Bhoomi Enterprises has been actively working in the solar energy sector for the past 10 years. Strongly committed to supporting renewable energy, we specialize in installing rooftop and ground-mounted solar power plants all across Uttarakhand."
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

export const services = [
  "Solar Panels (bifacial & topcon)",
  "Solar Inverters",
  "Solar Water Heaters",
  "Solar Street Lights",
  "Solar Pump",
  "Solar Thermal",
  "Solar Fencing",
  "Rooftop Solar Installation (Residential & Commercial)",
  "AMC & Maintenance Services"
] as const;

export const tradingPortfolio = [
  {
    title: "Solar PV Modules",
    description: "High-efficiency Monocrystalline and Polycrystalline panels."
  },
  {
    title: "Solar Inverters",
    description: "Grid-tied (On-Grid), Off-Grid, and Hybrid power conditioning units."
  },
  {
    title: "Solar Water Heaters",
    description: "High-durability FPC and ETC systems for domestic and commercial use."
  },
  {
    title: "Solar Street Lights",
    description: "Integrated (All-in-One) and semi-integrated outdoor lighting solutions."
  },
  {
    title: "Solar Water Pumps",
    description: "High-performance DC and AC solar pumping systems for irrigation and drinking water."
  },
  {
    title: "Installation Accessories",
    description: "Structure material, DC/AC cables, earthing kits, lightning arrestors, and distribution boxes (AJB/DCDB/ACDB)"
  }
] as const;
