// PM Surya Ghar calculator inputs.
//
// EVERY value here is confirmed: false. None has been checked against the
// national portal. Verify all of it before launch, then flip `confirmed`.
// Sources noted per entry. Do not move any of these into component logic.
//
// Portal: https://pmsuryaghar.gov.in

export interface Assumption<T> {
  value: T;
  unit: string;
  source: string;
  confirmed: boolean;
}

/** Central subsidy slabs. Structure is per-kW up to a cap. */
export const subsidySlabs = {
  // Widely published structure: ₹30,000/kW for the first 2 kW,
  // ₹18,000/kW for the 3rd kW, hard cap at 3 kW equivalent.
  perKwUpTo2: { value: 30000, unit: "₹/kW", source: "PM Surya Ghar scheme structure", confirmed: false },
  perKwThirdKw: { value: 18000, unit: "₹/kW", source: "PM Surya Ghar scheme structure", confirmed: false },
  maxSubsidy: { value: 78000, unit: "₹", source: "PM Surya Ghar cap for 3 kW and above", confirmed: false },
  eligibleUpToKw: { value: 10, unit: "kW", source: "Residential rooftop eligibility ceiling", confirmed: false },
} as const;

export const generation: Record<string, Assumption<number>> = {
  // Uttarakhand sits roughly 4.0–4.5 kWh/kW/day depending on district and tilt.
  dailyYieldPerKw: { value: 4.2, unit: "kWh/kW/day", source: "Uttarakhand irradiance range — district average not yet sourced", confirmed: false },
  performanceRatio: { value: 0.78, unit: "ratio", source: "Typical rooftop PR, not measured on Dev Bhoomi installs", confirmed: false },
};

export const financials: Record<string, Assumption<number>> = {
  installedCostPerKw: { value: 60000, unit: "₹/kW", source: "Indicative rooftop benchmark — NOT a Dev Bhoomi quote", confirmed: false },
  tariffPerUnit: { value: 6.5, unit: "₹/kWh", source: "UPCL domestic slab — needs current tariff order", confirmed: false },
  annualTariffEscalation: { value: 0.03, unit: "fraction/yr", source: "Assumed escalation, not from a tariff order", confirmed: false },
  annualDegradation: { value: 0.006, unit: "fraction/yr", source: "Typical module degradation, manufacturer-dependent", confirmed: false },
  horizonYears: { value: 25, unit: "years", source: "Standard module performance warranty horizon", confirmed: false },
};

export const inputRange = { minKw: 1, maxKw: 10, stepKw: 0.5, defaultKw: 3 } as const;

/** True while any constant above is unverified — drives the on-page marker. */
export const calculatorNeedsConfirmation = true;

export interface CalculatorResult {
  kw: number;
  monthlyUnits: number;
  annualUnits: number;
  subsidy: number;
  grossCost: number;
  netCost: number;
  firstYearSaving: number;
  paybackYears: number;
  lifetimeSaving: number;
  aboveSubsidyCeiling: boolean;
}

export function computeSubsidy(kw: number): number {
  const capped = Math.min(kw, 3);
  const firstTwo = Math.min(capped, 2) * subsidySlabs.perKwUpTo2.value;
  const third = Math.max(0, capped - 2) * subsidySlabs.perKwThirdKw.value;
  return Math.min(firstTwo + third, subsidySlabs.maxSubsidy.value);
}

export function calculate(kw: number): CalculatorResult {
  const daily = kw * generation.dailyYieldPerKw.value * generation.performanceRatio.value;
  const annualUnits = daily * 365;
  const subsidy = computeSubsidy(kw);
  const grossCost = kw * financials.installedCostPerKw.value;
  const netCost = Math.max(0, grossCost - subsidy);
  const firstYearSaving = annualUnits * financials.tariffPerUnit.value;

  let cumulative = 0;
  let payback = 0;
  let lifetime = 0;
  for (let year = 0; year < financials.horizonYears.value; year++) {
    const units = annualUnits * Math.pow(1 - financials.annualDegradation.value, year);
    const tariff = financials.tariffPerUnit.value * Math.pow(1 + financials.annualTariffEscalation.value, year);
    const saving = units * tariff;
    lifetime += saving;
    if (payback === 0) {
      cumulative += saving;
      if (cumulative >= netCost) payback = year + 1 - (cumulative - netCost) / saving;
    }
  }

  return {
    kw,
    monthlyUnits: annualUnits / 12,
    annualUnits,
    subsidy,
    grossCost,
    netCost,
    firstYearSaving,
    paybackYears: payback,
    lifetimeSaving: lifetime,
    aboveSubsidyCeiling: kw > 3,
  };
}
