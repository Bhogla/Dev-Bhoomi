import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { paths } from "../../data/paths";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";
import { type as t } from "../../lib/design";

const MotionLink = motion.create(Link);

/**
 * Section 3. The fork. Two audiences, two journeys, deliberately not blended:
 * the EPC card leads to survey/calculator, the trading card to the catalogue.
 */
export function PathSplit() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="paths"
      eyebrow="Two ways to work with us"
      title="Installing, or buying?"
      lede="These are different jobs with different questions. Pick the one that describes you and the rest of the page follows from it."
    >
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {paths.map((path, i) => {
          const isEpc = path.id === "installation";
          return (
            <Reveal key={path.id} delay={i * 0.08}>
              <MotionLink
                to={path.href}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "group flex h-full flex-col rounded-[32px] border p-7 md:p-9",
                  "transition-colors duration-300",
                  isEpc
                    ? "border-transparent bg-ink text-white shadow-[0_24px_60px_-24px_rgba(10,27,51,0.35)]"
                    : "border-slate-200/60 bg-surface-raised text-ink shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] hover:border-slate-300",
                )}
              >
                <p className={t.eyebrow}>{path.audience}</p>

                <h3
                  className={cn(
                    "mt-4 font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight",
                    isEpc ? "text-white" : "text-ink",
                  )}
                >
                  {path.title}
                </h3>

                <p
                  className={cn(
                    "mt-3 max-w-[46ch] font-sans text-[14px] leading-relaxed",
                    isEpc ? "text-slate-300" : "text-ink-muted",
                  )}
                >
                  {path.blurb}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {path.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-[13px] leading-snug">
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-panel-blue"
                        aria-hidden="true"
                      />
                      <span className={isEpc ? "text-slate-200" : "text-ink"}>{b}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className={cn(
                    "mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5",
                    "font-sans text-[13px] font-semibold transition-all",
                    isEpc
                      ? "bg-solar-amber text-ink group-hover:bg-solar-amber-deep"
                      : "border border-[var(--hairline)] bg-surface text-ink group-hover:border-panel-blue/50",
                  )}
                >
                  {path.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </MotionLink>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
