import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/utils";
import { type as t, space } from "../../lib/design";

export function AboutUs() {
  const stats = [
    { label: "years in solar", value: "10+" },
    { label: "FY25–26 turnover", value: "₹31 Cr" },
    { label: "coverage", value: "All Uttarakhand" },
    { label: "installations completed", value: "5000+" },
  ];

  return (
    <section id="about" className="w-full scroll-mt-24">
      <div className={cn("mx-auto w-full max-w-[1400px]", space.gutter, space.sectionCompact)}>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Left column — heading + paragraph */}
            <div className="flex flex-col space-y-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-ink tracking-tight">
                About Us
              </h2>
              <p className={cn(t.body, "text-ink/80 md:text-[15px] leading-relaxed max-w-xl")}>
                Dev Bhoomi Enterprises is a trusted name in the solar industry, delivering high-quality solar solutions for residential, commercial, and industrial needs. For over 10 years we've specialized in installing rooftop and ground-mounted solar power plants across Uttarakhand — and as a multi-brand supplier, we source modules, inverters, and balance-of-system directly from leading manufacturers for genuine quality and competitive pricing. Our commitment: clean energy that's reliable, affordable, and accessible for all.
              </p>
            </div>

            {/* Right column — 2×2 grid of four stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <dd
                    className={cn(
                      "font-display font-medium leading-none tracking-tight text-ink",
                      /\d/.test(stat.value)
                        ? "tnum text-[34px] md:text-[44px]"
                        : "text-[26px] md:text-[32px]"
                    )}
                  >
                    {stat.value}
                  </dd>
                  <dt className={t.figureLabel}>
                    {stat.label}
                  </dt>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
