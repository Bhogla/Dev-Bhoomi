import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type PanInfo,
} from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCopy, galleryImages, galleryAutoplayMs } from "../../data/gallery";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { surface } from "../../lib/design";
import { cn } from "../../lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const SWIPE = 60; // px of horizontal drag that commits a slide change
const N = galleryImages.length;

/**
 * Team photo carousel. One photo at a time with a direction-aware slide,
 * arrows, dots, keyboard, swipe and paused-when-unwatched autoplay. All copy
 * and images come from data/gallery.ts.
 */
export function Gallery() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { margin: "200px" });

  // [index, direction]: direction drives which way the slide enters/exits.
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const [hovered, setHovered] = useState(false);
  const [kbFocus, setKbFocus] = useState(false); // keyboard focus inside the carousel
  const [tabHidden, setTabHidden] = useState(false);

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + N) % N, dir]);
  }, []);

  const goTo = useCallback((target: number) => {
    setState(([i]) => [target, target === i ? 0 : target > i ? 1 : -1]);
  }, []);

  // Pause autoplay when the tab is hidden.
  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Autoplay. Re-armed whenever `index` changes, so any manual change resets
  // the timer. Never runs under reduced motion, off-screen, hidden tab, hover,
  // or keyboard focus inside the carousel.
  const paused = reduce || !inView || tabHidden || hovered || kbFocus;
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      setState(([i]) => [(i + 1) % N, 1]);
    }, galleryAutoplayMs);
    return () => window.clearTimeout(id);
  }, [paused, index]);

  // Preload the neighbouring images once in view — never on page load — so a
  // slide never animates in blank.
  useEffect(() => {
    if (!inView) return;
    [(index + 1) % N, (index - 1 + N) % N].forEach((i) => {
      const img = new Image();
      img.src = galleryImages[i].src;
    });
  }, [inView, index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
  };

  // Pause on KEYBOARD focus only (:focus-visible), so clicking an arrow — which
  // focuses a button — doesn't leave autoplay paused forever.
  const onFocus = (e: React.FocusEvent) => {
    if (e.target.matches?.(":focus-visible")) setKbFocus(true);
  };
  const onBlur = (e: React.FocusEvent) => {
    if (!wrapRef.current?.contains(e.relatedTarget as Node | null)) setKbFocus(false);
  };

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x <= -SWIPE) paginate(1);
    else if (info.offset.x >= SWIPE) paginate(-1);
  };

  const current = galleryImages[index];

  const slide = {
    enter: (dir: number) => ({ x: reduce ? 0 : dir >= 0 ? "100%" : "-100%", opacity: reduce ? 0 : 1 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: reduce ? 0 : dir >= 0 ? "-100%" : "100%", opacity: reduce ? 0 : 1 }),
  };

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white/90 text-ink shadow-[0_8px_24px_rgba(10,27,51,0.12)] backdrop-blur-xl transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-panel-blue";

  return (
    <Section id="gallery" eyebrow={galleryCopy.eyebrow} title={galleryCopy.title} lede={galleryCopy.lede}>
      <Reveal>
        <div
          ref={wrapRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Team photo gallery"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cn(
            surface.panel,
            "relative aspect-[4/3] overflow-hidden outline-none sm:aspect-video",
            "focus-visible:ring-2 focus-visible:ring-panel-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          )}
        >
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.img
              key={current.id}
              src={current.src}
              srcSet={`${current.srcSmall} 720w, ${current.src} 1280w`}
              sizes="(min-width: 1400px) 1300px, 100vw"
              width={1280}
              height={720}
              alt={current.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduce ? 0.25 : 0.6, ease: EASE }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={onDragEnd}
              className="absolute inset-0 h-full w-full cursor-grab object-cover active:cursor-grabbing"
            />
          </AnimatePresence>

          {/* Prev/next — inside the photo, bottom-right, hero-pill surface. */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            <button type="button" aria-label="Previous photo" onClick={() => paginate(-1)} className={btn}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next photo" onClick={() => paginate(1)} className={btn}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Dots. Active = panel-blue pill; never amber. */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {galleryImages.map((img, i) => {
            const active = i === index;
            return (
              <button
                key={img.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show photo ${i + 1} of ${N}`}
                aria-current={active ? "true" : undefined}
                className="flex h-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-panel-blue"
              >
                <span
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    active ? "w-8 bg-panel-blue" : "w-2 bg-slate-300",
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Screen-reader announcement of the current slide. */}
        <p className="sr-only" aria-live="polite">
          Photo {index + 1} of {N}
        </p>
      </Reveal>
    </Section>
  );
}
