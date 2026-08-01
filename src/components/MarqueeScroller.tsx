import { marqueeLogos } from "../data/marqueeLogos";

// Edge fade. Duplicated into the -webkit- property for Safari.
const EDGE_MASK =
  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)";

export function MarqueeScroller() {
  // Rendered twice inline so translateX(-50%) lands on an identical frame.
  const track = [...marqueeLogos, ...marqueeLogos];

  return (
    <div
      className="marquee-viewport mt-10 w-full max-w-[1400px] mx-auto overflow-hidden"
      style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
    >
      {/* Spacing lives on each card (mr-4), not as a flex `gap`: a gap puts 7
          gaps inside each copy but 8 between copies, so translateX(-50%) lands
          half a gap short and the loop visibly jumps. */}
      <div className="marquee-track flex items-center w-max">
        {track.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            aria-hidden={i >= marqueeLogos.length}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden mr-4"
          >
            <div
              className="absolute inset-0 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, ${logo.gradient.from}, ${logo.gradient.to})`,
              }}
            />
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="relative z-10 h-7 w-auto max-w-[96px] object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
