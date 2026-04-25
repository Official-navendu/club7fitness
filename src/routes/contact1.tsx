import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Club 7 Fitness" },
      {
        name: "description",
        content:
          "Get in touch with Club 7 Fitness — book a tour, ask about memberships, or claim your free 7-day trial.",
      },
      { property: "og:title", content: "Contact — Club 7 Fitness" },
      {
        property: "og:description",
        content: "Book a tour or claim your free 7-day trial.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's start your
            <br />
            <span className="text-primary">fitness journey</span>
          </>
        }
        subtitle="Reach out for memberships, training, or to book a free tour of the facility."
      />

      {/* ================= CONTACT FORM ================= */}
      <ContactForm />
    </>
  );
}
