import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products, productCta, divisions } from "../data/products";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { ConfirmNotice } from "../components/ui/ConfirmBadge";
import { usePageMeta } from "../hooks/usePageMeta";
import { NotFound } from "./NotFound";
import { type as t } from "../lib/design";

export function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  // Hooks can't be conditional, so on an unknown slug this sets exactly what
  // NotFound sets — whichever effect lands last, the result is identical.
  usePageMeta(
    product ? product.name : "Page not found",
    product ? product.blurb : "That page does not exist.",
  );

  // Unknown slug is a genuine 404, not an empty product page.
  if (!product) return <NotFound />;

  const related = products.filter((p) => p.division === product.division && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero title={product.name} subtitle={product.blurb} />

      <main>
        <Section id="product" eyebrow={product.category}>
          <Reveal>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All products
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-display text-[28px] md:text-[40px] font-medium leading-[1.1] tracking-tight text-ink">
                  {product.name}
                </h2>
                <p className="mt-4 max-w-[56ch] font-sans text-[15px] leading-relaxed text-ink-muted">
                  {product.blurb}
                </p>

                {product.variants.length > 0 && (
                  <div className="mt-8">
                    <h3 className={t.eyebrow}>
                      Variants available
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {product.variants.map((v) => (
                        <li
                          key={v}
                          className="rounded-xl border border-[var(--hairline)] bg-surface px-3 py-1.5 font-sans text-[13px] text-ink"
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/*
                  Brand slot — BLOCKED on open item 5. Structured, empty.
                */}
                <div data-slot="brand-logos" data-blocked="awaiting-client-confirmation" className="hidden" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="rounded-[32px] border border-slate-200/60 bg-surface-raised shadow-[0_24px_60px_-24px_rgba(10,27,51,0.06)] p-7 md:p-8">
                <dl className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-sans text-[13px] text-ink-muted">Division</dt>
                    <dd className="font-sans text-[13px] font-semibold text-ink">
                      {divisions[product.division].label}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-[var(--hairline)] pt-4">
                    <dt className="font-sans text-[13px] text-ink-muted">Category</dt>
                    <dd className="font-sans text-[13px] font-semibold text-ink">{product.category}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-[var(--hairline)] pt-4">
                    <dt className="font-sans text-[13px] text-ink-muted">Supply</dt>
                    <dd className="font-sans text-[13px] font-semibold text-ink">Quote only</dd>
                  </div>
                </dl>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-solar-amber px-6 py-3 font-sans text-[13px] font-semibold text-ink transition-colors hover:bg-solar-amber-deep"
                >
                  {productCta(product)}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>

                <ConfirmNotice className="mt-6">
                  Specifications, brands and warranty terms are not yet supplied by the client.
                  This page carries no manufacturer claims.
                </ConfirmNotice>
              </aside>
            </Reveal>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-[var(--hairline)] pt-10">
              <h3 className={t.eyebrow}>
                Also in {divisions[product.division].label}
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="group rounded-[24px] border border-slate-200/60 bg-surface-raised p-5 shadow-[0_12px_32px_-16px_rgba(10,27,51,0.05)] transition-all hover:border-slate-300"
                  >
                    <p className={t.eyebrow}>
                      {p.category}
                    </p>
                    <p className="mt-2 font-display text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-ink">{p.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Section>
      </main>
    </>
  );
}
