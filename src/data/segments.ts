// Section 4 — four segments, four genuinely different concerns.
// Not one template with a swapped icon and label.

export interface Segment {
  id: string;
  name: string;
  concern: string;
  lede: string;
  points: { label: string; detail: string }[];
  typicalRange: string;
  cta: string;
  href: string;
}

export const segments: Segment[] = [
  {
    id: "residential",
    name: "Residential",
    concern: "Subsidy and payback",
    lede: "The question is almost always the same: what does it cost after subsidy, and when does it pay for itself?",
    points: [
      { label: "PM Surya Ghar", detail: "Central subsidy on rooftop systems up to 3 kW, paid to the homeowner after commissioning." },
      { label: "Net metering", detail: "Export surplus back to UPCL and offset it against your monthly bill." },
      { label: "Payback", detail: "Estimate yours with the calculator below before speaking to anyone." },
    ],
    typicalRange: "1–5 kW rooftop",
    cta: "Book a site survey",
    href: "/install",
  },
  {
    id: "commercial",
    name: "Commercial",
    concern: "ROI and load",
    lede: "Shops, hotels, schools and offices buy on return, not sentiment — the system is sized against your sanctioned load and tariff slab.",
    points: [
      { label: "Tariff offset", detail: "Commercial slabs are billed higher than domestic, so each unit generated offsets more." },
      { label: "Sanctioned load", detail: "System sized against your connected load and daytime consumption curve." },
      { label: "Depreciation", detail: "Accelerated depreciation may apply — confirm treatment with your accountant." },
    ],
    typicalRange: "10–100 kW rooftop",
    cta: "Book a site survey",
    href: "/install",
  },
  {
    id: "industrial",
    name: "Industrial",
    concern: "Capacity and uptime",
    lede: "At industrial scale the constraint stops being cost per kW and becomes generation reliability and maintained output.",
    points: [
      { label: "Ground-mount", detail: "Where roof area runs out, ground-mounted arrays carry the capacity." },
      { label: "Uptime", detail: "Scheduled AMC keeps output at spec — soiling and shading losses compound fast." },
      { label: "Phased build", detail: "Capacity can be staged across the plant rather than commissioned in one block." },
    ],
    typicalRange: "100 kW and above",
    cta: "Book a site survey",
    href: "/install",
  },
  {
    id: "agricultural",
    name: "Agricultural",
    concern: "Irrigation and fencing",
    lede: "Farms need solar for two unrelated jobs — moving water, and keeping animals out. Both run where the grid does not reach.",
    points: [
      { label: "Solar pumps", detail: "DC and AC pumping for irrigation and drinking water, independent of grid supply." },
      { label: "Solar fencing", detail: "Perimeter protection for farmland against crop damage by animals." },
      { label: "Off-grid", detail: "Systems run standalone where no reliable connection exists." },
    ],
    typicalRange: "Pump sets and perimeter runs",
    cta: "Request a quote",
    href: "/install",
  },
];
