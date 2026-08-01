import { motion, useReducedMotion } from "motion/react";

/**
 * Compact interior hero. Same container treatment as the home hero —
 * rounded-[48px], same border, same shadow — but no video and no floating
 * navbar. Built once; every interior page uses it.
 */
export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="w-full px-4 pt-6 md:pt-8">
      <section className="relative mx-auto flex h-[240px] w-full max-w-[1400px] flex-col justify-center overflow-hidden rounded-[48px] border border-slate-200/50 bg-white px-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] md:px-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[32px] font-medium leading-[1.1] tracking-tight text-[#0a1b33] md:text-[44px]">
            {title}
          </h1>
          <p className="mt-3 max-w-[60ch] font-sans text-[14px] leading-relaxed text-[#64748b] md:text-[15px]">
            {subtitle}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
