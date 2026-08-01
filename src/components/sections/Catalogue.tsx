import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { products, productCta, divisions } from "../../data/products";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";
import { type as t } from "../../lib/design";

const ALL = "All";

/**
 * Section 6. Filterable spec-lite grid. Quote-only: no prices, no cart.
 * Brand logos are blocked on client confirmation — the slot is structured
 * but deliberately left empty rather than filled with invented brands.
 */
export function Catalogue() {
  const [filter, setFilter] = useState<string>(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(products.filter((p) => p.division === "trading").map((p) => p.category)))],
    [],
  );

  const trading = useMemo(() => products.filter((p) => p.division === "trading"), []);
  const shown = filter === ALL ? trading : trading.filter((p) => p.category === filter);

  return (
    <Section
      id="catalogue"
      eyebrow="Trading & supply"
      title="Product catalogue"
      lede={`Multi-brand supply sourced direct from manufacturers. ${divisions.trading.mode === "quote-only" ? "Everything here is quoted to your requirement — there are no list prices." : ""}`}
    >
      <Reveal>
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((c) => {
            const on = c === filter;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={on}
                className={cn(
                  "rounded-full px-4 py-2 font-sans text-[12px] font-semibold transition-all",
                  on
                    ? "bg-solar-amber text-ink"
                    : "border border-[var(--hairline)] bg-surface-raised text-ink-muted hover:border-panel-blue/40 hover:text-ink",
                )}
              >
                {c}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.24)}>
            <article className="flex h-full flex-col rounded-[24px] border border-slate-200/60 bg-surface-raised shadow-[0_12px_32px_-16px_rgba(10,27,51,0.05)] p-6 transition-colors hover:border-panel-blue/40">
              <p className={t.eyebrow}>
                {p.category}
              </p>

              <h3 className="mt-3 font-display text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-ink">
                <Link to={`/products/${p.slug}`} className="transition-colors hover:text-panel-blue-deep">
                  {p.name}
                </Link>
              </h3>

              <p className="mt-2 font-sans text-[13px] leading-relaxed text-ink-muted">{p.blurb}</p>

              {p.variants.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.variants.map((v) => (
                    <li
                      key={v}
                      className="rounded-md border border-[var(--hairline)] bg-surface px-2 py-1 font-sans text-[11px] text-ink-muted"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              )}

              {/*
                Brand logo slot — BLOCKED on open item 5 (brands Dev Bhoomi is
                authorized to trade). Structured and reserved, intentionally
                empty. Do not fill with invented brands.
              */}
              <div
                data-slot="brand-logos"
                data-blocked="awaiting-client-confirmation"
                aria-hidden="true"
                className="mt-4 hidden"
              />

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                <Link
                  to={`/products/${p.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-surface px-4 py-2 font-sans text-[12px] font-semibold text-ink transition-all hover:border-panel-blue/50"
                >
                  {productCta(p)}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
