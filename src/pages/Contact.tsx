import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactPage() {
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
