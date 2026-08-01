import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { company, positioning, capabilities, turnover, trustStrip, services, tradingPortfolio, aboutText } from "../data/company";
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
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                <h3 className={t.eyebrow}>
                  Company Introduction
                </h3>
                <div className="mt-5 flex flex-col gap-4 font-sans text-[15px] leading-relaxed text-ink/80">
                  {aboutText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column */}
            <Reveal>
              <div className="flex flex-col gap-6">
                
                {/* Vision & Mission Card */}
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8 flex flex-col gap-8">
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
                </div>

                {/* Key Strengths Card */}
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                  <h3 className={t.eyebrow}>
                    Key strengths
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 font-sans text-[14px] leading-relaxed text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-panel-blue" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information Card */}
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                  <h3 className={t.eyebrow}>
                    Contact Information
                  </h3>
                  <dl className="mt-5 flex flex-col gap-4 font-sans text-[13px]">
                    <div className="flex flex-col gap-1">
                      <dt className="text-ink-muted">Address</dt>
                      <dd className="font-medium text-ink leading-relaxed">
                        {company.address.line1}, {company.address.landmark}, {company.address.city}, {company.address.state} – {company.address.pin}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 pt-3 border-t border-[var(--hairline)]">
                      <dt className="text-ink-muted">Mobile</dt>
                      <dd className="tnum font-medium text-ink">{company.phonePrimary}, {company.phoneSecondary}</dd>
                    </div>
                    <div className="flex flex-col gap-1 pt-3 border-t border-[var(--hairline)]">
                      <dt className="text-ink-muted">Email</dt>
                      <dd className="font-medium text-ink">
                        <a href={`mailto:${company.email}`} className="hover:text-panel-blue transition-colors">
                          {company.email}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

              </div>
            </Reveal>

            {/* Right Column */}
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-6">
                
                {/* Annual Turnover Card */}
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                  <h3 className={t.eyebrow}>
                    Annual turnover
                  </h3>
                  <dl className="mt-6 flex flex-col">
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

                {/* At a Glance Card */}
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                  <h3 className={t.eyebrow}>
                    At a glance
                  </h3>
                  <dl className="mt-6 flex flex-col">
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

                {/* Registration Card */}
                <div className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                  <h3 className={t.eyebrow}>
                    Registration
                  </h3>
                  <dl className="mt-6 flex flex-col gap-4 font-sans text-[13px]">
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-muted">Proprietor</dt>
                      <dd className="font-semibold text-ink">{company.proprietor}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-muted">GSTIN</dt>
                      <dd className="tnum font-semibold text-ink">{company.gstin}</dd>
                    </div>
                  </dl>

                  <ConfirmNotice className="mt-6">
                    GSTIN is the only registration on file. The client profile lists MSME/ISO and
                    authorised-dealer status as unfilled template lines, so no certification is
                    claimed here.
                  </ConfirmNotice>
                </div>

                {/* Call to Action */}
                <Link to="/contact" className={cn(button.base, button.md, button.primary, "w-full sm:w-fit mt-2")}>
                  Book a site survey
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>

              </div>
            </Reveal>
          </div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Our Products & Services"
          title="Comprehensive solar solutions"
          tone="surface"
        >
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 p-5 rounded-2xl border border-slate-200/60 bg-surface shadow-sm transition-colors hover:border-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-panel-blue" aria-hidden="true" />
                  <span className="font-sans text-[14.5px] font-medium text-ink">{service}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section
          id="trading"
          eyebrow="Product Trading & Supply Division"
          title="High-quality solar components"
          lede="Beyond our core engineering and installation services, Dev Bhoomi Enterprises is a trusted trader and multi-brand supplier of high-quality solar components. We provide a comprehensive, one-stop procurement solution, sourcing directly from leading manufacturers."
          tone="raised"
        >
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tradingPortfolio.map((item, i) => (
                <div key={item.title} className="p-7 rounded-[24px] border border-slate-200/60 bg-surface shadow-sm flex flex-col gap-3 transition-colors hover:border-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-ink font-semibold text-[13px]">
                      {i + 1}
                    </span>
                    <h3 className={t.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={t.body}>{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      </main>
    </>
  );
}
