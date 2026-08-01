import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import {
  calculate,
  inputRange,
  subsidySlabs,
  generation,
  financials,
  calculatorNeedsConfirmation,
} from "../../data/calculator";
import { rupees, rupeesCompact, units, years } from "../../lib/format";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ConfirmBadge, ConfirmNotice } from "../ui/ConfirmBadge";
import { type as t } from "../../lib/design";

export type CalculatorVariant = "full" | "compact";

/**
 * Section 5. Result is shown immediately from the slider — lead capture is
 * offered after the number, never as a gate in front of it.
 * Every constant lives in data/calculator.ts.
 *
 * Two variants, one component:
 *  - "full"    (/install) slider + headline + four-stat grid, CTA to contact.
 *  - "compact" (home)     slider + headline + one supporting line, CTA into
 *                         the install branch. No stat grid.
 *
 * The estimate disclaimer renders in full in BOTH variants. It is never
 * trimmed for space — the figures behind it are unverified.
 */
export function Calculator({ variant = "full" }: { variant?: CalculatorVariant }) {
  const [kw, setKw] = useState<number>(inputRange.defaultKw);
  const r = useMemo(() => calculate(kw), [kw]);
  const compact = variant === "compact";

  const secondary = [
    { label: "Monthly generation", value: `${units(r.monthlyUnits)} kWh` },
    { label: "Central subsidy", value: rupees(r.subsidy) },
    { label: "Net cost after subsidy", value: rupees(r.netCost) },
    { label: "Payback period", value: years(r.paybackYears) },
  ];

  const cta = compact
    ? { label: "See the full breakdown", to: "/install" }
    : { label: "Book a site survey", to: "/contact" };

  return (
    <Section
      id="calculator"
      eyebrow="PM Surya Ghar"
      title={compact ? "What would solar save you?" : "What would it save you?"}
      lede={
        compact
          ? "Move the slider to your system size. The estimate appears straight away — no details needed."
          : "Move the slider to your system size. The estimate appears straight away — you do not have to give us anything to see it."
      }
      tone="raised"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <div className="rounded-[32px] border border-slate-200/60 bg-surface p-7 shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] md:p-8">
            <label htmlFor="kw" className="font-sans text-[13px] font-semibold text-ink">
              System size
            </label>

            <p className="tnum mt-3 font-display text-[44px] font-medium leading-none tracking-tight text-ink">
              {kw} <span className="text-[20px] text-ink-muted">kW</span>
            </p>

            <input
              id="kw"
              type="range"
              min={inputRange.minKw}
              max={inputRange.maxKw}
              step={inputRange.stepKw}
              value={kw}
              onChange={(e) => setKw(Number(e.target.value))}
              aria-describedby="kw-help"
              className="mt-6 w-full accent-[var(--color-solar-amber)]"
            />

            <div className="tnum mt-2 flex justify-between font-sans text-[11px] text-ink-muted">
              <span>{inputRange.minKw} kW</span>
              <span>{inputRange.maxKw} kW</span>
            </div>

            <p id="kw-help" className="mt-5 font-sans text-[12px] leading-relaxed text-ink-muted">
              Most homes land between 1 and 5 kW. Subsidy is capped at 3 kW —
              above that the system still pays, just without extra subsidy.
            </p>

            {r.aboveSubsidyCeiling && (
              <p className="mt-4 rounded-xl border border-panel-blue/30 bg-panel-blue/10 px-4 py-3 font-sans text-[12px] leading-relaxed text-panel-blue-deep">
                Above 3 kW the central subsidy stays fixed at {rupees(subsidySlabs.maxSubsidy.value)}.
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            {/* The one amber moment in this section: the headline result. */}
            <p className={t.figureLabel}>
              Estimated savings over {financials.horizonYears.value} years
            </p>
            <p className="tnum mt-3 font-display text-[52px] font-medium leading-none tracking-tight text-solar-amber-deep md:text-[68px]">
              {rupeesCompact(r.lifetimeSaving)}
            </p>
            <p className="tnum mt-3 font-sans text-[13px] text-ink-muted">
              First-year saving about {rupees(r.firstYearSaving)} · {units(r.annualUnits)} kWh a year
            </p>

            {!compact && (
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--hairline)] pt-8">
                {secondary.map((s) => (
                  <div key={s.label}>
                    <dt className="font-sans text-[12px] text-ink-muted">{s.label}</dt>
                    <dd className="tnum mt-1 font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight text-ink">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <Link
              to={cta.to}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-solar-amber px-6 py-3 font-sans text-[13px] font-semibold text-ink transition-colors hover:bg-solar-amber-deep"
            >
              {cta.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            {calculatorNeedsConfirmation && (
              <ConfirmNotice className="mt-8">
                <strong className="font-bold">Every figure above is an estimate built on unverified
                assumptions.</strong>{" "}
                Generation {generation.dailyYieldPerKw.value} kWh/kW/day, tariff ₹
                {financials.tariffPerUnit.value}/kWh, installed cost {rupees(financials.installedCostPerKw.value)}/kW,
                and the subsidy slabs are all <ConfirmBadge className="mx-0.5" /> pending
                verification against pmsuryaghar.gov.in. Not a quotation.
              </ConfirmNotice>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
