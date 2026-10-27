import { motion, useReducedMotion } from "motion/react";
import { director, directorFact } from "../../data/leadership";
import { Section } from "../ui/Section";
import { PanelMotif } from "../ui/PanelMotif";
import { type as t } from "../../lib/design";
import { cn } from "../../lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Director profile. Signature move: the cut-out stands on the bottom edge of a
 * dark portrait stage and his head breaks out past the panel's top edge.
 * Two columns on wide desktop (xl+); stacked below that. The two-column
 * breakout engages at xl rather than lg because the full bio makes the text
 * column too tall at 1024 for the head to break the panel top cleanly — the
 * stacked layout keeps the signature breakout at those widths. Copy lives in
 * data/leadership.ts; the turnover figure derives from company.ts.
 */
export function DirectorProfile() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <Section id="leadership" eyebrow="Leadership">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative grid overflow-visible rounded-[48px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]"
      >
        {/* PORTRAIT STAGE — dark, with a panel-blue glow and the cropped motif. */}
        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-[400px] px-3 pt-14 xl:mx-0 xl:max-w-none xl:px-0 xl:pt-0"
        >
          <div className="relative h-[280px] sm:h-[320px] xl:h-full xl:min-h-[540px]">
            <div className="absolute inset-0 overflow-hidden rounded-[36px] bg-ink xl:rounded-[48px] xl:rounded-r-none">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(58% 48% at 50% 60%, rgba(46,134,171,0.32), rgba(46,134,171,0) 72%)",
                }}
              />
              <PanelMotif
                outline
                className="absolute left-1/2 top-[56%] w-[150%] -translate-x-1/2 -translate-y-1/2 opacity-[0.6]"
              />
            </div>

            {/* Cut-out: stands on the bottom edge, head breaks out of the top. */}
            <img
              src={director.image.src}
              srcSet={`${director.image.srcSmall} 480w, ${director.image.src} 800w`}
              sizes="(min-width:1280px) 520px, 90vw"
              width={800}
              height={917}
              alt={director.image.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="absolute bottom-0 left-1/2 z-10 h-[320px] w-auto max-w-full -translate-x-1/2 object-contain object-bottom sm:h-[364px] xl:h-[calc(100%+40px)]"
            />
          </div>
        </motion.div>

        {/* TEXT COLUMN — raised white surface. */}
        <motion.div
          variants={container}
          className="flex flex-col gap-6 px-7 py-9 md:px-10 xl:px-12 xl:py-12"
        >
          <motion.div variants={item}>
            <h3 className="font-display text-[36px] md:text-[48px] font-medium leading-[1.05] tracking-tight text-ink">
              {director.honorific} {director.name}
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-solar-amber" aria-hidden="true" />
              <p className="font-sans text-[13px] text-ink-muted">
                {director.role} · {director.company}
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex max-w-[60ch] flex-col gap-4">
            {director.bio.map((paragraph, i) => (
              <p key={i} className={cn(t.body, "leading-relaxed")}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.dl variants={item} className="flex flex-col">
            <div className="flex gap-4 border-t border-[var(--hairline)] py-4">
              <dt className={cn(t.figureLabel, "w-[120px] shrink-0 pt-0.5")}>Remit</dt>
              <dd className="font-sans text-[14px] leading-relaxed text-ink">{director.remit}</dd>
            </div>
            <div className="flex gap-4 border-t border-[var(--hairline)] py-4">
              <dt className={cn(t.figureLabel, "w-[120px] shrink-0 pt-1.5")}>Drives</dt>
              <dd className="flex flex-wrap gap-2">
                {director.drives.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-[var(--hairline)] bg-surface px-3 py-1 text-[12px] font-medium text-ink"
                  >
                    {d}
                  </span>
                ))}
              </dd>
            </div>
          </motion.dl>

          <motion.p
            variants={item}
            className="tnum border-t border-[var(--hairline)] pt-5 font-sans text-[13px] text-ink-muted"
          >
            {directorFact}
          </motion.p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
