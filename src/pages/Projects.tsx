import { PageHero } from "../components/PageHero";
import { Projects as ProjectsSection } from "../components/sections/Projects";
import { usePageMeta } from "../hooks/usePageMeta";

export function ProjectsPage() {
  usePageMeta(
    "Projects",
    "Completed solar installations across Uttarakhand. Project photography is being collected from the client.",
  );

  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Completed installations across Uttarakhand, with capacity and location for each."
      />
      <main>
        <ProjectsSection />
      </main>
    </>
  );
}
