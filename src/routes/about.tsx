import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Club 7 Fitness" },
      {
        name: "description",
        content:
          "Discover Club 7 Fitness — our mission, vision, and the elite coaches behind your transformation journey.",
      },
      { property: "og:title", content: "About — Club 7 Fitness" },
      {
        property: "og:description",
        content:
          "Elite coaching, premium equipment, and a community built for results.",
      },
    ],
  }),
  component: AboutPage,
});