import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { company, positioning, capabilities, turnover, trustStrip } from "../data/company";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { ConfirmNotice } from "../components/ui/ConfirmBadge";
import { usePageMeta } from "../hooks/usePageMeta";
import { type as t, button } from "../lib/design";
import { cn } from "../lib/utils";

export function About() {
  usePageMeta(
    "About",
    `${company.name} — ${company.yearsOperating} years in solar across Uttarakhand, GST registered, proprietor ${company.proprietor}.`,
  );

  return (
    <>
      <PageHero
        title="About Dev Bhoomi Enterprises"
        subtitle={`${company.yearsOperating} years in solar, operating across ${company.coverage.replace("All ", "")} from Dehradun.`}
      />

      <main>
        <Section
          id="profile"
          eyebrow="Who we are"
          title="A solar business with two halves"
          lede="Dev Bhoomi Enterprises installs solar plants and supplies solar components. The two lines serve different customers and are run as separate paths."
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className={t.eyebrow}>
                    Vision
                  </h3>
                  <p className={cn(t.subhead, "mt-3")}>
                    {positioning.vision}
                  </p>
                </div>

                <div className="border-t border-[var(--hairline)] pt-8">
                  <h3 className={t.eyebrow}>
                    Mission
                  </h3>
                  <p className={cn(t.subhead, "mt-3")}>
                    {positioning.mission}
                  </p>
                </div>

                <div className="border-t border-[var(--hairline)] pt-8">
                  <h3 className={t.eyebrow}>
                    Key strengths
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 font-sans text-[14px] leading-relaxed text-ink">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-panel-blue" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex flex-col gap-6">
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7">
                  <h3 className={t.eyebrow}>
                    Annual turnover
                  </h3>
                  <dl className="mt-5 flex flex-col">
                    {turnover.map((row, i) => (
                      <div
                        key={row.fy}
                        className={`flex items-baseline justify-between gap-4 py-3 ${
                          i !== 0 ? "border-t border-[var(--hairline)]" : ""
                        }`}
                      >
                        <dt className="tnum font-sans text-[13px] text-ink-muted">FY {row.fy}</dt>
                        <dd className="tnum font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight text-ink">
                          ₹{row.crore} Cr
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7">
                  <h3 className={t.eyebrow}>
                    At a glance
                  </h3>
                  <dl className="mt-5 flex flex-col">
                    {trustStrip.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex items-center justify-between gap-4 py-3 ${
                          i !== 0 ? "border-t border-[var(--hairline)]" : ""
                        }`}
                      >
                        <dt className="font-sans text-[13px] text-ink-muted">{row.label}</dt>
                        <dd className="flex items-center gap-2">
                          <span className="tnum font-sans text-[14px] font-semibold text-ink">{row.value}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7">
                  <h3 className={t.eyebrow}>
                    Registration
                  </h3>
                  <dl className="mt-5 flex flex-col gap-3 font-sans text-[13px]">
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-muted">Proprietor</dt>
                      <dd className="font-semibold text-ink">{company.proprietor}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-muted">GSTIN</dt>
                      <dd className="tnum font-semibold text-ink">{company.gstin}</dd>
                    </div>
                    {/* Coverage lives in the At a glance card above — not repeated here. */}
                  </dl>

                  <ConfirmNotice className="mt-6">
                    GSTIN is the only registration on file. The client profile lists MSME/ISO and
                    authorised-dealer status as unfilled template lines, so no certification is
                    claimed here.
                  </ConfirmNotice>
                </div>

                <Link to="/contact" className={cn(button.base, button.md, button.primary, "w-fit")}>
                  Book a site survey
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
    </>
  );
}
