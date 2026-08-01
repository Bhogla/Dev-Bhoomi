import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { navItems } from "../data/nav";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found", "That page does not exist.");

  return (
    <>
      <PageHero
        title="That page doesn't exist"
        subtitle="The link may be out of date, or the page may have moved. Everything below still works."
      />

      <main>
        <Section id="not-found">
          <Reveal>
            <ul className="grid gap-px overflow-hidden rounded-[24px] border border-slate-200/60 bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-5">
              {navItems.map((item) => (
                <li key={item.to} className="bg-surface-raised">
                  <Link
                    to={item.to}
                    className="group flex items-center justify-between gap-3 p-6 transition-colors hover:bg-surface"
                  >
                    <span className="font-display text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-ink">
                      {item.label}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[13px] font-semibold text-white transition-colors hover:bg-panel-blue-deep"
            >
              Back to the home page
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </Section>
      </main>
    </>
  );
}
