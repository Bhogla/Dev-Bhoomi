import { Check } from "lucide-react";
import { amcCoverage, amcTerms, amcIntro } from "../../data/amc";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ConfirmBadge, ConfirmNotice } from "../ui/ConfirmBadge";
import { type as t } from "../../lib/design";

/**
 * Section 9. Recurring revenue line, given its own section.
 * Coverage comes from process.ts step 6 — the only place the work is described.
 * Terms are absent from the profile and stay visibly unconfirmed.
 */
export function AmcService() {
  return (
    <Section
      id="amc"
      eyebrow="After commissioning"
      title="AMC & service"
      lede={amcIntro}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h3 className={t.eyebrow}>
              What's covered
            </h3>
            <ul className="mt-6 flex flex-col">
              {amcCoverage.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex gap-4 py-5 ${i !== 0 ? "border-t border-[var(--hairline)]" : ""}`}
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-panel-blue" aria-hidden="true" />
                  <div>
                    <p className="font-sans text-[14px] font-semibold text-ink">{item.label}</p>
                    <p className="mt-1 font-sans text-[14px] leading-relaxed text-ink-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
            <h3 className={t.eyebrow}>
              Contract terms
            </h3>

            <dl className="mt-6 flex flex-col">
              {amcTerms.map((t, i) => (
                <div
                  key={t.label}
                  className={`flex flex-wrap items-center justify-between gap-3 py-4 ${
                    i !== 0 ? "border-t border-[var(--hairline)]" : ""
                  }`}
                >
                  <dt className="font-sans text-[14px] font-medium text-ink">{t.label}</dt>
                  <dd className="flex items-center gap-2">
                    <span className="font-sans text-[13px] text-ink-muted">{t.detail}</span>
                    {!t.confirmed && <ConfirmBadge />}
                  </dd>
                </div>
              ))}
            </dl>

            <ConfirmNotice className="mt-6">
              Response times, contract length and warranty terms appear nowhere in the client
              profile. These are brief open items 9 and 10 — nothing is stated here until the
              client supplies it.
            </ConfirmNotice>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
