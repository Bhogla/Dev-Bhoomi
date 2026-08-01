import { Camera } from "lucide-react";
import { projects, projectsAwaitingClientAssets } from "../../data/projects";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ConfirmNotice } from "../ui/ConfirmBadge";
import { type as t } from "../../lib/design";

/**
 * Section 8. Renders from the real (empty) array. No invented entries.
 * The empty state is designed to read as "not yet supplied", not "broken".
 */
export function Projects() {
  const empty = projects.length === 0;

  return (
    <Section
      id="projects"
      eyebrow="Installed work"
      title="Projects"
      lede="Completed installations across Uttarakhand, with capacity and location for each."
    >
      {empty ? (
        <Reveal>
          <div className="rounded-[32px] border border-dashed border-slate-300/70 bg-surface-raised px-6 py-16 text-center md:py-20">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--hairline)] bg-surface">
              <Camera className="h-5 w-5 text-ink-muted" aria-hidden="true" />
            </span>

            <h3 className="mt-6 font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight text-ink">
              Project photography is being collected
            </h3>

            <p className="mx-auto mt-3 max-w-[52ch] font-sans text-[14px] leading-relaxed text-ink-muted">
              This section will carry real installations with their capacity in kW and
              location. Rather than fill it with stock imagery of somebody else's panels,
              it stays empty until Dev Bhoomi's own site photographs are supplied.
            </p>

            {projectsAwaitingClientAssets && (
              <ConfirmNotice className="mx-auto mt-8 max-w-[60ch] text-left">
                Blocked on brief open item 4 — six to ten project photographs with kW and
                location. The grid is built against <code className="font-mono">projects.ts</code>{" "}
                and will render as soon as entries land there.
              </ConfirmNotice>
            )}
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 0.05, 0.3)}>
              <article className="overflow-hidden rounded-[24px] border border-slate-200/60 bg-surface-raised shadow-[0_12px_32px_-16px_rgba(10,27,51,0.05)]">
                <img src={p.image} alt={p.title} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <p className={t.eyebrow}>
                    {p.type} · {p.segment}
                  </p>
                  <h3 className="mt-2 font-display text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="tnum mt-1 font-sans text-[13px] text-ink-muted">
                    {p.capacityKw} kW · {p.location}
                    {p.year ? ` · ${p.year}` : ""}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
