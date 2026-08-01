import { PageHero } from "../components/PageHero";
import { Catalogue } from "../components/sections/Catalogue";
import { usePageMeta } from "../hooks/usePageMeta";

export function Products() {
  usePageMeta(
    "Solar products",
    "Multi-brand solar components sourced direct from manufacturers — modules, inverters, pumps, water heaters, street lights and balance of system. Quote-based supply.",
  );

  return (
    <>
      <PageHero
        title="Solar products"
        subtitle="Multi-brand supply for installers and contractors. Everything is quoted to your requirement — there are no list prices."
      />
      <main>
        <Catalogue />
      </main>
    </>
  );
}
