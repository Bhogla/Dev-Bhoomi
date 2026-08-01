import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { navItems, navCta } from "../data/nav";
import { company } from "../data/company";
import { cn } from "../lib/utils";

/**
 * Persistent interior navigation.
 *
 * Borrows the floating pill's surface language deliberately — bg-white/90,
 * backdrop-blur-2xl, slate-200/40 border, the same soft shadow — so the two
 * treatments read as one system rather than two designs. The pill itself is
 * untouched and stays exclusive to the home hero.
 *
 * Amber appears on the active route and nowhere else in this header; the
 * trailing CTA uses the pill's "Get in touch" styling, not an amber fill.
 */
export function TopBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative px-3 py-2 font-sans text-[13px] font-semibold transition-colors",
      isActive ? "text-solar-amber-deep" : "text-slate-500 hover:text-[#0a1b33]",
    );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/40 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between gap-4 px-4 md:h-20 md:px-10">
        {/*
          Full lockup. The bar is sized around it rather than the reverse —
          72/80px gives the logo 44/52px, which puts each of the two wordmark
          lines near 13-16px and keeps them readable. The company name is NOT
          repeated as text alongside: the lockup already contains the wordmark.
        */}
        <Link to="/" className="flex shrink-0 items-center" aria-label={`${company.name} — home`}>
          <img
            src="/assets/logo/devbhoomi-logo.png"
            alt=""
            width={560}
            height={316}
            className="h-11 w-auto shrink-0 md:h-13"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-solar-amber" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={navCta.to}
            className="hidden whitespace-nowrap rounded-full border border-slate-200/60 bg-white px-5 py-2 font-sans text-[12px] font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300 sm:inline-flex"
          >
            {navCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white text-[#0a1b33] shadow-sm transition-all hover:border-slate-300 md:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main mobile"
          className="border-t border-slate-200/40 bg-white/95 px-4 pb-5 pt-2 backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-between border-b border-slate-200/40 py-3.5 font-sans text-[15px] font-semibold transition-colors",
                      isActive ? "text-solar-amber-deep" : "text-[#0a1b33]",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-solar-amber" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to={navCta.to}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-slate-200/60 bg-white px-5 py-3 font-sans text-[13px] font-semibold text-[#0a1b33] shadow-sm"
          >
            {navCta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
