import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/hackathon/Nav";
import { Hero } from "@/components/hackathon/Hero";
import { WorldLoader } from "@/components/hackathon/Loader";
import {
  About,
  FinalCta,
  Footer,
  Judges,
  Prizes,
  RulesAndFaq,
  Sponsors,
  Timeline,
  Tracks,
} from "@/components/hackathon/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLOCKSTORM '26 — 24-Hour Minecraft-Themed Hackathon | DJCSI" },
      {
        name: "description",
        content:
          "BLOCKSTORM '26 is DJCSI's 24-hour Minecraft-themed hackathon in Mumbai. ₹1.5L prize pool, 4 tracks, 400 builders. 14-15 March 2026. Register free.",
      },
      { property: "og:title", content: "BLOCKSTORM '26 — 24-Hour Minecraft-Themed Hackathon" },
      {
        property: "og:description",
        content:
          "24 hours, 4 biome tracks and a ₹1.5L prize pool. Craft. Break. Build. Repeat. 14-15 March 2026 at DJ Sanghvi, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <WorldLoader />
      <Nav />
      <main>
        <h1 className="sr-only">BLOCKSTORM '26 — 24-hour Minecraft-themed hackathon by DJCSI</h1>
        <Hero />
        <About />
        <Tracks />
        <Prizes />
        <Timeline />
        <Judges />
        <Sponsors />
        <RulesAndFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
