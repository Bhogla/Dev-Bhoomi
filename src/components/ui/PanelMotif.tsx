import { cn } from "../../lib/utils";

/**
 * The logo's curved panel array — the one reusable graphic device.
 * Budgeted to three appearances sitewide: Process (cells filling on scroll),
 * Leadership (low-opacity outline behind the director portrait), and the
 * Footer (low-opacity outline). Do not use as background texture, bullet
 * icon, or section divider.
 */
export function PanelMotif({
  className,
  filled = 0,
  outline = false,
}: {
  className?: string;
  /** 0–1, share of cells filled. */
  filled?: number;
  outline?: boolean;
}) {
  const cols = 6;
  const rows = 3;
  const total = cols * rows;
  const fillCount = Math.round(filled * total);

  return (
    <svg
      viewBox="0 0 240 108"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      {/* Curved array: each column tilts progressively, echoing the logo arc. */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const i = r * cols + c;
          const arc = Math.sin((c / (cols - 1)) * Math.PI) * 6;
          return (
            <rect
              key={i}
              x={c * 40 + 3}
              y={r * 36 + 3 - arc}
              width={34}
              height={30}
              rx={4}
              className={cn(
                "transition-all duration-500",
                outline
                  ? "fill-none stroke-white/20"
                  : i < fillCount
                    ? "fill-panel-blue stroke-panel-blue-deep"
                    : "fill-transparent stroke-panel-blue/25",
              )}
              strokeWidth={1}
              style={{ transitionDelay: `${i * 25}ms` }}
            />
          );
        }),
      )}
    </svg>
  );
}
