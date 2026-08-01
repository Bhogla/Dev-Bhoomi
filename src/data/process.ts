// Genuine sequence -> numbered markers are justified here, and only here.

export const processSteps = [
  { n: 1, title: "Site survey",        detail: "Free visit. Roof area, shading, sanctioned load, consumption history." },
  { n: 2, title: "System design",      detail: "Sizing, layout, generation estimate, and a written quote." },
  { n: 3, title: "Approval & net metering", detail: "DISCOM application, subsidy paperwork, net meter sanction." },
  { n: 4, title: "Installation",       detail: "Structure, modules, inverter, cabling, earthing, protection." },
  { n: 5, title: "Commissioning",      detail: "Testing, meter installation, handover, monitoring setup." },
  { n: 6, title: "AMC & service",      detail: "Scheduled cleaning, inspection, and performance checks." },
] as const;
