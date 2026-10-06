import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { segments } from "../../data/segments";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { type as t, surface, button } from "../../lib/design";
import { cn } from "../../lib/utils";

/**
 * Home-page condensation of section 4. Same data as the full tabbed Segments
 * component on /install — this one names the four concerns and gets out of the
 * way. The home page's job is to route, not to explain.
 */
export function SolutionsCondensed() {
  return (
    <Section
      id="solutions"
      // Gallery and this section share the "surface" tone, so their py-28
      // paddings would otherwise stack into a large empty gap. Pull this one up
      // to leave ~130px (desktop) between the gallery dots and the heading.
      className="-mt-16 md:-mt-24"
      eyebrow="Who we work for"
      title="Four buyers, four different problems"
      lede="A homeowner asks about subsidy. A factory asks about uptime. Each is answered in its own place."
      headerAside={
        <Link to="/install" className={cn(button.base, button.sm, button.secondary)}>
          See all solutions
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {segments.map((s, i) => (
          <Reveal key={s.id} delay={Math.min(i * 0.06, 0.24)}>
            <Link
              to={s.href}
              className={cn(surface.cardInteractive, "group flex h-full flex-col p-6")}
            >
              <p className={t.cardTitle}>{s.name}</p>
              <p className={cn(t.eyebrow, "mt-2")}>{s.concern}</p>
              <p className={cn(t.meta, "tnum mt-4")}>{s.typicalRange}</p>
              <ArrowRight
                className="mt-6 h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
