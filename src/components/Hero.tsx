import { motion, useReducedMotion } from "motion/react";
import { heroCopy } from "../data/hero";
import { FloatingNav } from "./FloatingNav";

const HERO_VIDEO = "/assets/hero.MP4";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-surface-raised border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row md:h-[600px]">
      {/* Text panel — its own clean territory, so no scrim and no collision with
          the imagery. Left column on desktop, top block on mobile. */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 flex flex-col items-start justify-center md:w-[44%] md:shrink-0 px-8 md:px-12 lg:px-16 pt-12 pb-14 md:py-0"
      >
        <h1 className="font-display font-medium tracking-tight text-balance text-[38px] md:text-[44px] lg:text-[52px] leading-[1.07] text-ink">
          {heroCopy.headlineLines[0]}
          <br />
          {heroCopy.headlineLines[1]}
        </h1>

        <p className="mt-5 max-w-[440px] font-sans text-[14px] md:text-[15px] leading-relaxed text-ink-muted">
          {heroCopy.subheadline}
        </p>

        <motion.button
          type="button"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="mt-8 bg-ink text-white rounded-full px-6 py-3 text-[13px] font-semibold"
        >
          {heroCopy.primaryCta}
        </motion.button>
      </motion.div>

      {/* Media panel — the solar-neighbourhood video, shown crisp and un-cropped
          of its subject. object-cover on a portrait-ish panel keeps the hero
          house prominent without the extreme wide-crop zoom of a full-bleed strip. */}
      <div className="relative md:flex-1 h-[260px] sm:h-[320px] md:h-auto overflow-hidden select-none bg-slate-100">
        <video
          src={HERO_VIDEO}
          autoPlay={!reduce}
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ objectPosition: "80% 42%" }}
        />
        {/* Soft seam: blends the media into the surface panel so the split reads
            as one composition rather than two boxes. Desktop feathers the left
            edge; mobile feathers the top edge. */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, var(--color-surface-raised) 0%, rgba(255,255,255,0) 14%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-raised) 0%, rgba(255,255,255,0) 12%)",
          }}
        />
      </div>

      <FloatingNav />
    </section>
  );
}
