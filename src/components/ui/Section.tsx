import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { type as t, space } from "../../lib/design";
import { Reveal } from "./Reveal";

/**
 * One spacing and type rhythm for every section below the hero.
 * Sections differ in content, not in their frame.
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
  headerAside,
  tone = "surface",
  density = "normal",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
  children: ReactNode;
  className?: string;
  headerAside?: ReactNode;
  tone?: "surface" | "raised" | "ink";
  density?: "normal" | "compact";
}) {
  const dark = tone === "ink";

  return (
    <section
      id={id}
      className={cn(
        "w-full scroll-mt-24",
        tone === "raised" && "bg-surface-raised",
        dark && "bg-ink text-white",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1400px]",
          space.gutter,
          density === "compact" ? space.sectionCompact : space.section,
        )}
      >
        {(eyebrow || title || lede) && (
          <Reveal className={space.headerGap}>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[860px]">
                {eyebrow && (
                  <p className={cn(t.eyebrow, "mb-4")}>{eyebrow}</p>
                )}
                {title && (
                  <h2 className={cn(t.sectionTitle, dark && "text-white")}>{title}</h2>
                )}
                {lede && (
                  <p className={cn(t.lede, "mt-4", dark && "text-slate-300")}>{lede}</p>
                )}
              </div>
              {headerAside && <div className="shrink-0">{headerAside}</div>}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
