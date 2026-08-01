// Section 9 — AMC & service.
//
// The client profile lists "AMC & Maintenance Services" as a line item and
// nothing more. Scope below is drawn from process.ts step 6, which is the only
// place the actual work is described. Response times, contract lengths and
// warranty terms appear NOWHERE in the profile — they are brief open items
// 9 and 10 and stay confirmed: false until the client supplies them.

export interface AmcItem {
  label: string;
  detail: string;
  confirmed: boolean;
}

/** Supported by process.ts step 6. */
export const amcCoverage: AmcItem[] = [
  { label: "Scheduled cleaning", detail: "Module washing on a fixed cycle. Soiling is the largest recoverable loss in Uttarakhand.", confirmed: true },
  { label: "Inspection", detail: "Structure, cabling, earthing, and protection devices checked for wear and corrosion.", confirmed: true },
  { label: "Performance checks", detail: "Measured output compared against the design estimate to catch underperformance.", confirmed: true },
];

/** Not in the profile. Every value here is a placeholder. */
export const amcTerms: AmcItem[] = [
  { label: "Response time", detail: "Not yet specified by the client.", confirmed: false },
  { label: "Contract length", detail: "Not yet specified by the client.", confirmed: false },
  { label: "Warranty terms", detail: "Not yet specified by the client.", confirmed: false },
  { label: "Visits per year", detail: "Not yet specified by the client.", confirmed: false },
];

export const amcIntro =
  "A solar plant is a twenty-five year asset with moving commercial value and no moving parts. What degrades it is dirt, corrosion and unnoticed underperformance — all three are maintenance problems, not equipment problems.";
