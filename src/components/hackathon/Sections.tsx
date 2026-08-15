import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import caveImage from "@/assets/cave-band.jpg";
import nightImage from "@/assets/night-sky.jpg";
import {
  EVENT,
  FAQS,
  JUDGES,
  MENTORS,
  PRIZES,
  RULES,
  SPONSORS,
  TIMELINE,
  TRACKS,
} from "@/lib/hackathon-data";
import { BlockPanel, PixelButton, Reveal, SectionHeading, oreBg, oreText } from "./primitives";
import { Clock, Gem, MapPin, ShieldCheck, Trophy, Users } from "lucide-react";

/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="relative border-t-3 border-t-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Chapter 01 · Discover"
            title="One night. One world. Everything you build stays on the map."
            lead="BLOCKSTORM is DJCSI's 24-hour build marathon, themed end to end around the game that taught a generation that anything can be made out of small parts. You arrive with an idea and an empty inventory. You leave with something that runs."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Clock, label: EVENT.duration, sub: EVENT.dates },
              { icon: MapPin, label: "On campus", sub: EVENT.venue },
              { icon: Trophy, label: `${EVENT.prizePool} prize pool`, sub: "Across 4 tracks + bounties" },
              { icon: Users, label: EVENT.seats, sub: "Teams of 2 to 4" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.07}>
                <div className="block-frame flex items-start gap-4 bg-card p-5">
                  <span className="block-face grid size-10 shrink-0 place-items-center bg-secondary">
                    <item.icon className="size-5 text-grass" aria-hidden />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="font-pixel text-lg text-muted-foreground">{item.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="block-frame relative overflow-hidden bg-card">
            <img
              src={caveImage}
              alt="Blocky voxel cave lit by torches, glowing ore and lava"
              loading="lazy"
              width={1920}
              height={1088}
              className="h-72 w-full object-cover sm:h-full sm:max-h-[520px]"
            />
            <div className="absolute inset-0 bg-background/25" aria-hidden />
          </div>
          <div className="block-frame block-face absolute -bottom-6 -left-4 bg-gold p-5 text-accent-foreground sm:-left-8">
            <div className="font-pixel text-lg uppercase tracking-widest">Theme</div>
            <div className="font-display mt-2 text-sm">MINECRAFT</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Tracks ---------------- */

export function Tracks() {
  return (
    <section id="tracks" className="relative border-t-3 border-t-border py-24 sm:py-32">
      <div className="grid-blocks absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ender/10 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Chapter 02 · Understand"
          title="Pick your biome"
          lead="Four tracks, four very different terrains. Choose the one that matches how you like to build — each has its own mentors, judging lens and bounty."
          ore="diamond"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TRACKS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <BlockPanel className="h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`font-pixel text-xl uppercase tracking-widest ${oreText[t.ore]}`}>
                      {t.subtitle}
                    </div>
                    <h3 className="mt-2 text-lg sm:text-xl">{t.name}</h3>
                  </div>
                  <span className={`block-face size-12 shrink-0 ${oreBg[t.ore]}`} aria-hidden />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.description}
                </p>
              </BlockPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Prizes ---------------- */

export function Prizes() {
  return (
    <section id="prizes" className="relative overflow-hidden border-t-3 border-t-border py-24 sm:py-32">
      <img
        src={nightImage}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-20 sm:opacity-30"
      />
      <div className="absolute inset-0 bg-background/80 sm:bg-background/70" aria-hidden />
      <div className="vignette absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Chapter 03 · Get excited"
          title={`${EVENT.prizePool} in loot, plus what you actually came for`}
          lead="Cash, credits and hardware for the top builds — and interview fast-tracks with our partner engineering teams for everyone who impresses the panel."
          ore="gold"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRIZES.map((p, i) => (
            <Reveal key={p.rank} delay={i * 0.08}>
              <BlockPanel className="h-full text-center">
                <span
                  className={`block-face mx-auto grid size-14 place-items-center ${oreBg[p.ore]}`}
                  aria-hidden
                >
                  <Gem className="size-6 text-background" />
                </span>
                <div className="font-pixel mt-5 text-xl uppercase tracking-widest text-muted-foreground">
                  {p.rank}
                </div>
                <div className={`font-display mt-3 text-lg ${oreText[p.ore]}`}>{p.amount}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
              </BlockPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="relative border-t-3 border-t-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Chapter 04 · The run"
          title="24 hours, block by block"
          lead="From world spawn to the final beacon. Every checkpoint is timed so you always know how much daylight is left."
          ore="lava"
        />

        <div ref={ref} className="relative mt-14 pl-10 sm:pl-14">
          <div className="absolute top-2 bottom-2 left-3 w-1 bg-border sm:left-5" aria-hidden />
          <motion.div
            className="absolute top-2 left-3 w-1 bg-grass sm:left-5"
            style={{ height }}
            aria-hidden
          />
          <ol className="space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.05} className="relative">
                <span
                  className={`block-frame absolute top-4 -left-[2.05rem] size-5 sm:-left-[2.55rem] ${oreBg[t.ore]}`}
                  aria-hidden
                />
                <BlockPanel className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-base sm:text-lg">{t.title}</h3>
                    <div className="font-pixel text-lg tracking-widest text-muted-foreground uppercase">
                      {t.day} · <span className={oreText[t.ore]}>{t.time}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{t.detail}</p>
                </BlockPanel>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Judges & mentors ---------------- */

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Judges() {
  return (
    <section id="judges" className="relative border-t-3 border-t-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Chapter 05 · The panel"
          title="Judges who ship, mentors who debug"
          lead="Engineers, founders and designers from teams you already use. They judge at the end and help all the way through the night."
          ore="ender"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {JUDGES.map((j, i) => (
            <Reveal key={j.name} delay={i * 0.07}>
              <BlockPanel className="h-full">
                <div
                  className="block-frame font-display grid size-16 place-items-center bg-secondary text-sm text-grass"
                  aria-hidden
                >
                  {initials(j.name)}
                </div>
                <h3 className="mt-5 text-sm sm:text-base">{j.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{j.role}</p>
                <span className="font-pixel mt-4 inline-block bg-secondary px-2 py-1 text-lg uppercase tracking-widest text-diamond">
                  {j.tag}
                </span>
              </BlockPanel>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="block-frame mt-8 bg-card p-7">
            <h3 className="font-pixel text-xl uppercase tracking-widest text-muted-foreground">
              Mentors on the floor
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MENTORS.map((m) => (
                <li key={m.name} className="flex items-center gap-3">
                  <span className="block-face size-8 shrink-0 bg-dirt" aria-hidden />
                  <div>
                    <div className="text-sm font-semibold">{m.name}</div>
                    <div className="font-pixel text-lg text-muted-foreground">{m.role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Sponsors ---------------- */

function SponsorTier({ tier, names, ore }: { tier: string; names: string[]; ore: "diamond" | "gold" | "stone" }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className={`size-3 ${oreBg[ore]}`} aria-hidden />
        <span className="font-pixel text-lg uppercase tracking-[0.3em] text-muted-foreground">
          {tier} tier
        </span>
      </div>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {names.map((n, i) => (
          <Reveal as="li" key={n} delay={i * 0.04}>
            <div
              className={`block-frame font-display grid h-20 place-items-center bg-card px-3 text-center text-[10px] ${oreText[ore]}`}
            >
              {n}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function Sponsors() {
  return (
    <section id="sponsors" className="relative border-t-3 border-t-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Backed by"
          title="Sponsors funding the build"
          ore="diamond"
        />
        <div className="mt-14 space-y-12">
          <SponsorTier tier="Diamond" names={SPONSORS.diamond} ore="diamond" />
          <SponsorTier tier="Gold" names={SPONSORS.gold} ore="gold" />
          <SponsorTier tier="Iron" names={SPONSORS.iron} ore="stone" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Rules + FAQ ---------------- */

export function RulesAndFaq() {
  return (
    <section id="faq" className="relative border-t-3 border-t-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Server rules" title="Eligibility & rules" ore="redstone" />
          <ul className="mt-10 space-y-4">
            {RULES.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 0.05}>
                <div className="block-frame flex items-start gap-4 bg-card p-5">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-grass" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{r}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Crafting guide" title="Frequently asked" ore="gold" />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="block-frame border-0 bg-card px-5"
                >
                  <AccordionTrigger className="py-5 text-left text-sm hover:no-underline sm:text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA + footer ---------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t-3 border-t-border py-28">
      <img
        src={nightImage}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-20 sm:opacity-35"
      />
      <div className="absolute inset-0 bg-background/80 sm:bg-background/70" aria-hidden />
      <div className="vignette absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-pixel text-xl uppercase tracking-[0.3em] text-grass">
            Chapter 06 · Register
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-pixel-shadow mt-6 text-2xl leading-snug text-balance sm:text-4xl">
            The server opens in March. Claim your slot.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-base text-muted-foreground text-pretty sm:text-lg">
            Registration is free and takes two minutes. {EVENT.seats} get in — the rest watch the
            stream.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PixelButton href={EVENT.registerUrl} className="py-5">
              Register now
            </PixelButton>
            <PixelButton href="#tracks" variant="stone" className="py-5">
              Review the tracks
            </PixelButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-3 border-t-border bg-card/40 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <div className="font-display text-sm">
            {EVENT.name}
            <span className="text-grass">{EVENT.edition}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A DJCSI student-run hackathon. Minecraft-inspired visual identity built for this event —
            not affiliated with Mojang or Microsoft.
          </p>
        </div>
        <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-pixel text-lg uppercase tracking-widest text-muted-foreground">
              Event
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Tracks", href: "#tracks" },
                { label: "Timeline", href: "#timeline" },
                { label: "Prizes", href: "#prizes" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-grass">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-pixel text-lg uppercase tracking-widest text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Discord", "Instagram", "GitHub", "Contact"].map((l) => (
                <li key={l}>
                  <a href={EVENT.registerUrl} className="text-muted-foreground hover:text-grass">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-border px-5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-pixel text-lg text-muted-foreground">
          © 2027 {EVENT.name}{EVENT.edition} · All blocks reserved
        </p>
        <p className="font-pixel text-lg text-muted-foreground">Mumbai · {EVENT.dates}</p>
      </div>
    </footer>
  );
}
