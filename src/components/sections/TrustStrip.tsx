import { trustStrip } from "../../data/company";
import { ConfirmBadge } from "../ui/ConfirmBadge";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";
import { type as t } from "../../lib/design";

/**
 * Section 2. Three figures, tabular numerals, no animated counters.
 *
 * "Coverage" is a phrase rather than a numeral, so it is set smaller and
 * without tabular figures — rendering it at full display size would make it
 * the loudest thing in the row and unbalance the two real numbers.
 */
export function TrustStrip() {
  return (
    <section id="trust" className="w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <Reveal>
          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 border-y border-[var(--hairline)] py-10 sm:grid-cols-3">
            {trustStrip.map((item) => {
              const isFigure = /\d/.test(item.value);
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  <dd
                    className={cn(
                      // Fixed box, bottom-aligned, so the smaller phrase sits on
                      // the same baseline as the figures and does not pull its
                      // label above the rest of the row. min-h rather than
                      // leading-*: twMerge strips leading-* as conflicting with
                      // text-[size] (the text-lg/7 shorthand).
                      "flex min-h-[51px] items-end md:min-h-[66px]",
                      "font-display font-medium leading-none tracking-tight text-ink",
                      isFigure
                        ? "tnum text-[34px] md:text-[44px]"
                        : "text-[26px] md:text-[32px]",
                    )}
                  >
                    {item.value}
                  </dd>
                  <dt className={t.figureLabel}>
                    {item.label}
                  </dt>
                  {!item.confirmed && <ConfirmBadge className="self-start" />}
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
