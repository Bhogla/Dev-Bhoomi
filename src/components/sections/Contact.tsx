import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company";
import { contactCopy, contactFields, mapEmbedSrc, mapLinkHref } from "../../data/contact";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ConfirmNotice } from "../ui/ConfirmBadge";
import { button } from "../../lib/design";
import { cn } from "../../lib/utils";

type Status = "idle" | "submitting" | "done";

const inputBase =
  "w-full rounded-2xl border border-[var(--hairline)] bg-surface px-4 py-3 font-sans text-[14px] text-ink placeholder:text-ink-muted/70 transition-colors hover:border-slate-300";

/**
 * Section 10. Button verb matches outcome: "Book a site survey" -> "Survey booked."
 * NOTE: no backend is wired. Submit resolves locally; nothing is transmitted.
 */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // No endpoint yet — see ConfirmNotice below.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("done");
  }

  return (
    <Section
      id="contact"
      eyebrow="Get started"
      title={contactCopy.heading}
      lede={contactCopy.lede}
      tone="raised"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          {status === "done" ? (
            <div className="flex h-full flex-col items-start justify-center rounded-[32px] border border-panel-blue/25 bg-panel-blue/[0.06] p-8 shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] md:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-panel-blue text-white">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight text-ink">
                {contactCopy.successHeading}
              </h3>
              <p className="mt-3 max-w-[46ch] font-sans text-[14px] leading-relaxed text-ink-muted">
                {contactCopy.successBody}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className={cn(button.base, button.md, button.secondary, "mt-6")}
              >
                {contactCopy.successReset}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {contactFields.map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <label htmlFor={f.name} className="font-sans text-[13px] font-semibold text-ink">
                    {f.label}
                    {!f.required && <span className="ml-1.5 font-normal text-ink-muted">(optional)</span>}
                  </label>

                  {f.type === "select" ? (
                    <select id={f.name} name={f.name} required={f.required} defaultValue="" className={inputBase}>
                      <option value="" disabled>
                        Choose one
                      </option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      id={f.name}
                      name={f.name}
                      rows={3}
                      required={f.required}
                      placeholder={f.placeholder}
                      className={`${inputBase} resize-y`}
                    />
                  ) : (
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      autoComplete={f.autoComplete}
                      className={inputBase}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(button.base, button.md, button.primary, "mt-1 w-fit")}
              >
                {status === "submitting" ? contactCopy.submittingLabel : contactCopy.submitLabel}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <ConfirmNotice>
                No form endpoint is connected yet. Submitting shows the confirmation state but
                does not deliver the enquiry anywhere — wire a handler before launch.
              </ConfirmNotice>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-panel-blue" aria-hidden="true" />
                <a href={`tel:${company.phonePrimary.replace(/\s/g, "")}`} className="tnum font-sans text-[14px] font-medium text-ink hover:text-panel-blue-deep">
                  {company.phonePrimary}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-panel-blue" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all font-sans text-[14px] text-ink hover:text-panel-blue-deep">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-panel-blue" aria-hidden="true" />
                <span className="font-sans text-[14px] leading-relaxed text-ink-muted">
                  {company.address.line1}, <strong className="font-semibold text-ink">{company.address.landmark}</strong>,{" "}
                  {company.address.city}, {company.address.state} – {company.address.pin}
                </span>
              </li>
            </ul>

            <div className="overflow-hidden rounded-[24px] border border-slate-200/60">
              <iframe
                src={mapEmbedSrc}
                title={`Map — ${company.address.landmark}, ${company.address.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0"
              />
            </div>

            <a
              href={mapLinkHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-fit items-center gap-2 font-sans text-[13px] font-semibold text-panel-blue-deep hover:underline"
            >
              Open in Google Maps
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
