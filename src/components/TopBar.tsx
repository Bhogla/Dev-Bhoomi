import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { House, Wrench, Package, Building2, Mail, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navCta } from "../data/nav";
import { company } from "../data/company";
import { cn } from "../lib/utils";
import { button } from "../lib/design";

/**
 * Sticky site header.
 *
 * Navigation is a single dark pill: the item for the current route expands to
 * show its icon + label on a lighter inner pill, every other item is icon-only.
 * The highlight slides between items (shared layoutId) and the label opens/closes
 * on width, so switching pages animates rather than jumps.
 *
 * The logo sits left of the pill and the primary CTA right of it — neither lives
 * inside the dark pill. At the very top the bar is transparent; once scrolled it
 * fades in a translucent surface + shadow so it stays legible over any content.
 */

type NavPill = { label: string; to: string; Icon: LucideIcon; end?: boolean };

const NAV: NavPill[] = [
  { label: "Home", to: "/", Icon: House, end: true },
  { label: "Install", to: "/install", Icon: Wrench },
  { label: "Products", to: "/products", Icon: Package },
  { label: "About", to: "/about", Icon: Building2 },
  { label: "Contact", to: "/contact", Icon: Mail },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  // Solid surface appears once the user leaves the very top of the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const move = reduce ? { duration: 0 } : { duration: 0.26, ease: EASE };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-slate-200/40 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "site-header-grid mx-auto w-full max-w-[1400px] px-4 py-2.5 md:px-10 md:py-0",
          "transition-[height] duration-300",
          scrolled ? "md:h-20" : "md:h-24",
        )}
      >
        {/* Logo — full lockup, large enough that the wordmark reads. Shrinks on
            scroll so the bar tightens, full size at the very top. */}
        <Link to="/" className="site-header-logo flex shrink-0 items-center" aria-label={`${company.name} — home`}>
          <img
            src="/assets/logo/devbhoomi-logo.png"
            alt=""
            width={560}
            height={316}
            className={cn(
              "w-auto shrink-0 transition-[height] duration-300",
              scrolled ? "h-11 md:h-14" : "h-14 md:h-[72px]",
            )}
          />
        </Link>

        {/* Expanding-pill navigation. Reduced size on mobile to share row with full logo. */}
        <nav aria-label="Primary" className="site-header-pill flex w-fit max-w-full items-center gap-0.5 rounded-full bg-ink p-1 md:p-1.5">
          {NAV.map(({ label, to, Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              aria-label={label}
              className="group relative flex h-9 min-w-8 md:h-11 md:min-w-11 items-center justify-center rounded-full px-1.5 sm:px-3 outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden="true"
                      transition={move}
                      className="absolute inset-0 rounded-full bg-white/15"
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    <Icon
                      strokeWidth={2}
                      aria-hidden="true"
                      className={cn(
                        "h-[16px] w-[16px] md:h-[18px] md:w-[18px] shrink-0 transition-colors",
                        isActive ? "text-white" : "text-white/55 group-hover:text-white",
                      )}
                    />
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          key="label"
                          initial={reduce ? false : { width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { width: 0, opacity: 0 }}
                          transition={move}
                          className="overflow-hidden"
                        >
                          <span className="whitespace-nowrap pl-1.5 pr-0.5 md:pl-2 text-[12px] md:text-[13px] font-semibold text-white">
                            {label}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Primary CTA — a separate button, never inside the pill. Hidden on
            mobile, where the header row is just logo + pill; booking stays
            reachable via the hero button and the floating call button. */}
        <Link
          to={navCta.to}
          className={cn(button.base, button.md, button.primary, "site-header-cta hidden whitespace-nowrap md:inline-flex")}
        >
          {navCta.label}
        </Link>
      </div>
    </header>
  );
}
