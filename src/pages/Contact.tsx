import { PageHero } from "../components/PageHero";
import { Contact as ContactSection } from "../components/sections/Contact";
import { usePageMeta } from "../hooks/usePageMeta";

export function ContactPage() {
  usePageMeta(
    "Contact",
    "Book a free solar site survey in Uttarakhand. Dev Bhoomi Enterprises, Mauza Kuanwala, near Patanjali Factory, Dehradun.",
  );

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Book a free site survey, or ask about supply. We cover all of Uttarakhand."
      />
      <main>
        <ContactSection />
      </main>
    </>
  );
}
