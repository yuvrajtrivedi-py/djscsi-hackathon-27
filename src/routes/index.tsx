import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/hackathon/Nav";
import { Hero } from "@/components/hackathon/Hero";
import { WorldLoader } from "@/components/hackathon/Loader";
import { WorldBackdrop } from "@/components/hackathon/WorldBackdrop";

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
      { title: "BLOCKSTORM '27 — 24-Hour Minecraft-Themed Hackathon | DJCSI" },
      {
        name: "description",
        content:
          "BLOCKSTORM '27 is DJCSI's 24-hour Minecraft-themed hackathon in Mumbai. ₹1.5L prize pool, 4 tracks, 400 builders. 13-14 March 2027. Register free.",
      },
      { property: "og:title", content: "BLOCKSTORM '27 — 24-Hour Minecraft-Themed Hackathon" },
      {
        property: "og:description",
        content:
          "24 hours, 4 biome tracks and a ₹1.5L prize pool. Craft. Break. Build. Repeat. 13-14 March 2027 at DJ Sanghvi, Mumbai.",
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
      <WorldBackdrop />
      <Nav />
      <main>
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
