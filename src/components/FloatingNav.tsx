import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { heroActions } from "../data/hero";

/**
 * Hero action row.
 *
 * This was the reference spec's floating navbar. Sitewide navigation now lives
 * in TopBar, so this no longer carries routes it can't hold — it states the
 * home page's primary job, the two path-split branches, and nothing else.
 *
 * Every class string from REFERENCE-SPEC section 4 is preserved exactly:
 * the wrapper positioning, the pill surface, the w-9/h-9 mark, the text-button
 * styling, and the trailing button. Only the contents changed.
 *
 * Labels collapse to their short form below `sm` so the pill never wraps.
 */
export function FloatingNav() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
      <motion.nav
        aria-label="Hero actions"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
      >
        <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-[#0a1b33] text-[13px] shrink-0">
          ✦
        </div>

        {heroActions.paths.map((path) => (
          <Link
            key={path.to}
            to={path.to}
            className="whitespace-nowrap px-2.5 sm:px-4 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
          >
            <span className="hidden sm:inline">{path.label}</span>
            <span className="sm:hidden">{path.short}</span>
          </Link>
        ))}

        <MotionLink
          to={heroActions.cta.to}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="flex items-center gap-1 whitespace-nowrap bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
        >
          <span className="hidden sm:inline">{heroActions.cta.label}</span>
          <span className="sm:hidden">Contact</span>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        </MotionLink>
      </motion.nav>
    </div>
  );
}

const MotionLink = motion.create(Link);
