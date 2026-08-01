import { Hero } from "../components/Hero";
import { MarqueeScroller } from "../components/MarqueeScroller";
import { TrustStrip } from "../components/sections/TrustStrip";
import { PathSplit } from "../components/sections/PathSplit";
import { SolutionsCondensed } from "../components/sections/SolutionsCondensed";
import { Calculator } from "../components/sections/Calculator";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * Home. Deliberately incomplete — its job is to route people correctly,
 * not to say everything. The floating pill navbar lives inside Hero and
 * appears on this page only.
 */
export function Home() {
  usePageMeta(
    "",
    "Dev Bhoomi Enterprises installs rooftop and ground-mounted solar across Uttarakhand and supplies multi-brand solar components to installers and contractors.",
  );

  return (
    <>
      {/*
        Top padding is tighter than the bottom: the sticky TopBar already
        separates the hero from the top of the window, and at 1280x720 a
        larger top pad pushed the 600px container past the fold. Keep the top
        thin — if the bar grows again, take it out of this padding, never the
        hero's height.
        Bottom padding matches the section scale (space.section), so the gap
        from the marquee to the first section is the same even rhythm that runs
        between every section below. Container height and radius are untouched.
      */}
      <header className="w-full px-4 pt-5 pb-20 md:pt-6 md:pb-28">
        <Hero />
        <MarqueeScroller />
      </header>
      <main>
        <TrustStrip />
        <PathSplit />
        {/*
          Belongs to the install branch, so it sits below the fork rather than
          above it. Compact variant: its job here is to pull people into
          /install, not to answer everything.
        */}
        <Calculator variant="compact" />
        <SolutionsCondensed />
      </main>
    </>
  );
}
