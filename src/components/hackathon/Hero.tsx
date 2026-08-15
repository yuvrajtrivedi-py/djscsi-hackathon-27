import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-overworld.jpg";
import { EVENT, STATS } from "@/lib/hackathon-data";
import { useIsMobile } from "@/hooks/use-mobile";
import { PixelButton } from "./primitives";


const TARGET = new Date("2027-03-13T09:00:00+05:30").getTime();

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(TARGET - Date.now(), 0));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export function Hero() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 160]);
  const contentY = useTransform(scrollY, [0, 600], [0, isMobile ? 0 : 80]);
  const fade = useTransform(scrollY, [0, 520], [1, isMobile ? 0.6 : 0]);
  const countdown = useCountdown();

  return (
    <section id="top" className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-24">
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }} aria-hidden>
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-[115%] w-full object-cover object-center"
        />
      </motion.div>
      {/* Contrast layers: stronger on small screens where text overlaps the art. */}
      <div className="absolute inset-0 -z-10 bg-background/45 sm:bg-background/25" aria-hidden />
      <div className="scrim absolute inset-0 -z-10" aria-hidden />
      <div className="grid-blocks absolute inset-0 -z-10 opacity-70" aria-hidden />


      {/* Floating blocks */}
      <span
        className="animate-float-block block-frame absolute top-28 right-[8%] hidden size-14 bg-diamond/80 md:block"
        aria-hidden
      />
      <span
        className="animate-float-block block-frame absolute bottom-40 left-[6%] hidden size-10 bg-gold/80 md:block"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="block-frame mb-7 inline-flex items-center gap-3 bg-background/70 px-4 py-2 backdrop-blur-sm"
          >
            <span className="size-2.5 animate-ore-pulse bg-grass" aria-hidden />
            <span className="font-pixel text-lg tracking-[0.2em] uppercase">
              DJCSI presents · 24-hour hackathon
            </span>
          </motion.div>

          <h1 className="text-pixel-shadow text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            {EVENT.name.split("").map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              className="text-grass"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            >
              {EVENT.edition}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="font-pixel mt-6 text-2xl tracking-wide text-gold sm:text-3xl"
          >
            {EVENT.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.15, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 text-pretty sm:text-lg"
          >
            {EVENT.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <PixelButton href={EVENT.registerUrl} className="py-5">
              Register your squad
            </PixelButton>
            <PixelButton href="#about" variant="stone" className="py-5">
              Explore the world
            </PixelButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-pixel text-xl text-foreground/70"
          >
            <span>{EVENT.dates}</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-grass" aria-hidden />
              {EVENT.venue}
            </span>
          </motion.div>
        </div>

        {/* Hotbar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-3xl"
        >
          {STATS.map((s) => (
            <div key={s.label} className="block-frame block-face bg-background/75 p-4 backdrop-blur-sm">
              <div className="font-display text-base text-grass sm:text-lg">{s.value}</div>
              <div className="font-pixel mt-2 text-lg uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {countdown ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
            className="mt-8 flex items-center gap-3 font-pixel text-xl text-foreground/70"
            aria-live="off"
          >
            <span className="uppercase tracking-widest">Spawn in</span>
            <span className="text-diamond">
              {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
            </span>
          </motion.div>
        ) : null}
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2.8 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-grass"
      >
        <ArrowDown className="size-6" />
      </motion.a>
    </section>
  );
}
