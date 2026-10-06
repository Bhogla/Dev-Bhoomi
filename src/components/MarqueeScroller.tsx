import { marqueeLogos } from "../data/marqueeLogos";
import { type as t, space } from "../lib/design";
import { cn } from "../lib/utils";

// Edge fade. Duplicated into the -webkit- property for Safari.
const EDGE_MASK =
  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)";

// The track scrolls by exactly -50%, so it must hold two identical halves, and
// each half must be wider than the widest viewport (1400px container) or a gap
// slides into view before the loop restarts. Each card is a 176px slot (w-44)
// plus a 16px right margin (mr-4) = 192px, so five cards = 960px per set. Each
// half carries two sets (1,920px) — four sets in total, and 1,920 > 1,400.
const SETS_PER_HALF = 2;

export function MarqueeScroller() {
  const half = Array.from({ length: SETS_PER_HALF }, () => marqueeLogos).flat();
  const track = [...half, ...half];

  return (
    <div className="mt-10 w-full max-w-[1400px] mx-auto">
      <p className={cn(t.figureLabel, space.gutter, "mb-4")}>Brands we supply</p>

      {/* Quiet logo band: a single hairline rule top and bottom, no card
          chrome. Logos sit directly on the page in even, fixed-width slots. */}
      <div className="border-y border-[var(--hairline)] py-6">
        <div
          className="marquee-viewport w-full overflow-hidden"
          style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
          aria-label="Brands we supply"
          role="region"
        >
          {/* Spacing lives on each card (mr-4), not as a flex `gap`: a gap puts
              one fewer gap inside each half than between halves, so
              translateX(-50%) lands half a gap short and the loop visibly jumps. */}
          <div className="marquee-track flex items-center w-max">
            {track.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                // Screen readers hear each brand once; the repeats are decorative.
                aria-hidden={i >= marqueeLogos.length}
                className="group h-16 w-44 shrink-0 flex items-center justify-center overflow-hidden mr-4"
              >
                {/* Muted greyscale at rest so five different brand palettes don't
                    compete with the hero; full colour on hover. */}
                <img
                  src={logo.src}
                  alt={i < marqueeLogos.length ? logo.name : ""}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{ width: logo.width, height: logo.height }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
