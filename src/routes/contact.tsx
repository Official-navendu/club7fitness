import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/Contact";

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

