import { ArrowRight, Check, House, Package } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { paths } from "../../data/paths";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";
import { type as t, surface, button } from "../../lib/design";

const MotionLink = motion.create(Link);

/**
 * Section 3. The fork. Two audiences, two journeys, deliberately not blended:
 * the install card leads to survey/calculator, the buy card to the catalogue.
 *
 * The two cards are structurally identical and equally weighted — same
 * surface, same icon slot, aligned bullets, identical primary CTA. Only the
 * accent (icon colour + the top icon) differs, to signal which path is which.
 */

const accent = {
  installation: { Icon: House, tint: "bg-panel-blue/10 text-panel-blue" },
  trading: { Icon: Package, tint: "bg-solar-amber/15 text-solar-amber-deep" },
} as const;

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
          const { Icon, tint } = accent[path.id];
          return (
            <Reveal key={path.id} delay={i * 0.08}>
              <MotionLink
                to={path.href}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  surface.panel,
                  "group flex h-full flex-col p-7 transition-all duration-300 hover:border-slate-300 md:p-9",
                )}
              >
                <span
                  className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", tint)}
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" />
                </span>

                <p className={cn(t.eyebrow, "mt-6")}>{path.audience}</p>

                <h3 className={cn(t.subhead, "mt-3")}>{path.title}</h3>

                <p className="mt-3 max-w-[46ch] font-sans text-[14px] leading-relaxed text-ink-muted">
                  {path.blurb}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {path.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-[13px] leading-snug text-ink">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-panel-blue" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className={cn(
                    button.base,
                    button.md,
                    button.primary,
                    "mt-8 w-full group-hover:bg-panel-blue-deep",
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
