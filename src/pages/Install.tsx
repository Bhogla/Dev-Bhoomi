import { PageHero } from "../components/PageHero";
import { Segments } from "../components/sections/Segments";
import { Process } from "../components/sections/Process";
import { Calculator } from "../components/sections/Calculator";
import { AmcService } from "../components/sections/AmcService";
import { usePageMeta } from "../hooks/usePageMeta";

export function Install() {
  usePageMeta(
    "Get solar installed",
    "Rooftop and ground-mounted solar installation across Uttarakhand — survey, design, DISCOM approval, net metering, commissioning and AMC.",
  );

  return (
    <>
      <PageHero
        title="Get solar installed"
        subtitle="Survey to commissioning, handled end to end — including the DISCOM paperwork most people underestimate."
      />
      <main>
        <Segments />
        <Process />
        <Calculator />
        <AmcService />
      </main>
    </>
  );
}
