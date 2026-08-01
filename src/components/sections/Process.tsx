import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";
import { processSteps } from "../../data/process";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PanelMotif } from "../ui/PanelMotif";
import { cn } from "../../lib/utils";
import { type as t } from "../../lib/design";

/**
 * Section 7. The only section with numbered markers — this is a real sequence,
 * so the numbering is earned. Panel-cell motif appearance #2 of 3: cells fill
 * as the section scrolls through.
 */
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [filled, setFilled] = useState(reduce ? 1 : 0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!reduce) setFilled(Math.min(1, Math.max(0, v)));
  });

  const activeCount = Math.round(filled * processSteps.length);

  return (
    <Section
      id="process"
      eyebrow="How it runs"
      title="Survey to service, in six steps"
      lede="A rooftop plant is a permitting exercise as much as an engineering one. This is the actual order things happen in."
      tone="raised"
    >
      <div ref={ref} className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          {/*
            Motif appearance 2 of 3 (footer is the third; the hero's is
            unavailable since that component is protected). Given the budget
            is underspent, it fills its column here rather than sitting as a
            320px thumbnail — this is the one place it is meant to carry the
            section, and the cells filling on scroll are the whole point.
          */}
          <div className="rounded-[32px] border border-slate-200/60 bg-surface p-8 shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] md:p-10">
            <PanelMotif filled={filled} className="w-full" />
            <p className={cn(t.figureLabel, "tnum mt-8")}>
              {activeCount} of {processSteps.length} steps
            </p>
          </div>
        </Reveal>

        <ol className="flex flex-col">
          {processSteps.map((step, i) => {
            const on = i < activeCount;
            return (
              <li
                key={step.n}
                className={cn(
                  "grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-6",
                  i !== 0 && "border-t border-[var(--hairline)]",
                )}
              >
                <span
                  className={cn(
                    "tnum mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                    "font-sans text-[13px] font-semibold transition-colors duration-500",
                    on
                      ? "bg-panel-blue text-white"
                      : "border border-[var(--hairline)] bg-surface text-ink-muted",
                  )}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[14px] leading-relaxed text-ink-muted">
                    {step.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
