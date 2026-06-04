import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club 7 Fitness — Premium Gym & Personal Training" },
      {
        name: "description",
        content:
          "Train smart, live strong. Club 7 Fitness delivers world-class equipment, expert coaches, and proven programs.",
      },
      { property: "og:title", content: "Club 7 Fitness — Premium Gym & Personal Training" },
      {
        property: "og:description",
        content: "Premium gym, expert trainers, and programs built to deliver real results.",
      },
    ],
  }),
  component: HomePage,
});

