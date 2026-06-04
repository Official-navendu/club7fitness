import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Equipment — Club 7 Fitness" },
      {
        name: "description",
        content:
          "Explore Club 7 Fitness equipment and training programs — weight training, cardio, personal training, fat loss, and muscle gain.",
      },
      { property: "og:title", content: "Services & Equipment — Club 7 Fitness" },
      {
        property: "og:description",
        content: "Premium equipment and expert programs designed around your goals.",
      },
    ],
  }),
  component: ServicesPage,
});

