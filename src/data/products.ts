export type Division = "installation" | "trading";

export interface Product {
  slug: string;
  name: string;
  division: Division;
  category: string;
  variants: string[];
  blurb: string;
  // No `price` field, by design. The trading division is quote-only:
  // no cart, no prices anywhere. Adding one here is the change to reject.
}

export const divisions = {
  trading: {
    label: "Trading & Supply",
    mode: "quote-only",
    cta: "Request a quote",
  },
  installation: {
    label: "Installation & EPC",
    mode: "quote-only",
    cta: "Book a site survey",
  },
} as const;

/** Card action for a product. Never hardcode the label in JSX. */
export const productCta = (p: Product): string => divisions[p.division].cta;

export const products: Product[] = [
  { slug: "pv-modules", name: "Solar PV modules", division: "trading", category: "Generation",
    variants: ["Monocrystalline", "Polycrystalline", "Bifacial", "TOPCon"],
    blurb: "High-efficiency panels sourced directly from manufacturers." },
  { slug: "inverters", name: "Solar inverters", division: "trading", category: "Power conditioning",
    variants: ["On-grid", "Off-grid", "Hybrid"],
    blurb: "Grid-tied, standalone, and hybrid power conditioning units." },
  { slug: "water-heaters", name: "Solar water heaters", division: "trading", category: "Thermal",
    variants: ["FPC", "ETC"],
    blurb: "Domestic and commercial hot water systems." },
  { slug: "street-lights", name: "Solar street lights", division: "trading", category: "Lighting",
    variants: ["Integrated (all-in-one)", "Semi-integrated"],
    blurb: "Outdoor lighting for roads, campuses, and housing societies." },
  { slug: "water-pumps", name: "Solar water pumps", division: "trading", category: "Agricultural",
    variants: ["DC", "AC"],
    blurb: "Irrigation and drinking water pumping systems." },
  { slug: "thermal", name: "Solar thermal", division: "trading", category: "Thermal",
    variants: [],
    blurb: "Process and space heating applications." },
  { slug: "fencing", name: "Solar fencing", division: "trading", category: "Agricultural",
    variants: [],
    blurb: "Perimeter protection for farmland and property." },
  { slug: "accessories", name: "Installation accessories", division: "trading", category: "Balance of system",
    variants: ["Structure material", "DC/AC cables", "Earthing kits", "Lightning arrestors", "AJB/DCDB/ACDB"],
    blurb: "Everything needed to complete an installation." },
  { slug: "rooftop-epc", name: "Rooftop solar installation", division: "installation", category: "EPC",
    variants: ["Residential", "Commercial"],
    blurb: "End-to-end rooftop plants, survey through commissioning." },
  { slug: "ground-mount-epc", name: "Ground-mounted plants", division: "installation", category: "EPC",
    variants: [],
    blurb: "Utility and industrial scale ground-mount installations." },
  { slug: "amc", name: "AMC & maintenance", division: "installation", category: "Service",
    variants: [],
    blurb: "Annual maintenance contracts and on-call service." },
];
