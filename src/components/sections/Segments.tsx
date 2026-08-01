import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { segments } from "../../data/segments";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";
import { type as t, button } from "../../lib/design";

/**
 * Section 4. Deliberately not four identical cards with swapped icons —
 * a selector plus one detail panel, so the differing substance is the content
 * the reader actually sees rather than a label on a tile.
 */
export function Segments() {
  const [active, setActive] = useState(segments[0].id);
  const reduce = useReducedMotion();
  const current = segments.find((s) => s.id === active) ?? segments[0];

  return (
    <Section
      id="segments"
      eyebrow="Solutions by segment"
      title="Four buyers, four different problems"
      lede="A homeowner asks about subsidy. A factory asks about uptime. A farm asks whether it works without a grid connection at all."
    >
      <Reveal>
        <div
          role="tablist"
          aria-label="Customer segments"
          className="flex flex-wrap gap-2 border-b border-[var(--hairline)] pb-5"
        >
          {segments.map((s) => {
            const on = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`segment-panel-${s.id}`}
                id={`segment-tab-${s.id}`}
                onClick={() => setActive(s.id)}
                className={cn(
                  "rounded-full px-4 py-2 font-sans text-[13px] font-semibold transition-all md:px-5",
                  on
                    ? "bg-solar-amber text-ink"
                    : "border border-[var(--hairline)] bg-surface-raised text-ink-muted hover:border-panel-blue/40 hover:text-ink",
                )}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div
        key={current.id}
        id={`segment-panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`segment-tab-${current.id}`}
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16"
      >
        <div>
          <p className={t.eyebrow}>
            {current.concern}
          </p>
          <p className="mt-4 font-display text-[22px] md:text-[26px] font-medium leading-[1.25] tracking-tight text-ink">
            {current.lede}
          </p>
          <p className="tnum mt-6 inline-flex rounded-full border border-[var(--hairline)] bg-surface-raised px-4 py-2 font-sans text-[12px] font-medium text-ink-muted">
            Typical: {current.typicalRange}
          </p>
        </div>

        <div>
          <dl className="flex flex-col">
            {current.points.map((p, i) => (
              <div
                key={p.label}
                className={cn(
                  "grid gap-1 py-5 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6",
                  i !== 0 && "border-t border-[var(--hairline)]",
                )}
              >
                <dt className="font-sans text-[13px] font-semibold text-ink">{p.label}</dt>
                <dd className="font-sans text-[14px] leading-relaxed text-ink-muted">{p.detail}</dd>
              </div>
            ))}
          </dl>

          <Link to={current.href} className={cn(button.base, button.md, button.primary, "mt-6")}>
            {current.cta}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
