import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Ore = "grass" | "gold" | "diamond" | "redstone" | "ender" | "lava" | "dirt" | "stone";

export const oreText: Record<Ore, string> = {
  grass: "text-grass",
  gold: "text-gold",
  diamond: "text-diamond",
  redstone: "text-redstone",
  ender: "text-ender",
  lava: "text-lava",
  dirt: "text-dirt",
  stone: "text-stone",
};

export const oreBg: Record<Ore, string> = {
  grass: "bg-grass",
  gold: "bg-gold",
  diamond: "bg-diamond",
  redstone: "bg-redstone",
  ender: "bg-ender",
  lava: "bg-lava",
  dirt: "bg-dirt",
  stone: "bg-stone",
};

/** Scroll-triggered "chunk load" reveal. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Blocky heading with an ore-colored eyebrow label. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  ore = "grass",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  ore?: Ore;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div className="mb-5 flex items-center gap-3" style={align === "center" ? { justifyContent: "center" } : undefined}>
          <span className={cn("size-3", oreBg[ore])} aria-hidden />
          <span className="font-pixel text-lg tracking-[0.35em] text-muted-foreground uppercase">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-pixel-shadow text-2xl leading-snug text-balance sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Chunky block-styled panel used across the page. */
export function BlockPanel({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "block-frame block-face relative bg-card p-6 transition-transform duration-200",
        hover && "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_oklch(0.1_0.01_264)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Minecraft GUI-style button. */
export function PixelButton({
  children,
  href,
  variant = "primary",
  className,
  ...rest
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "stone" | "ghost";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles = {
    primary: "bg-grass text-primary-foreground hover:bg-grass-deep hover:text-foreground",
    stone: "bg-secondary text-secondary-foreground hover:bg-stone-deep",
    ghost: "bg-transparent text-foreground hover:bg-secondary",
  }[variant];

  return (
    <a
      href={href}
      className={cn(
        "block-frame block-face font-display inline-flex items-center justify-center gap-2 px-6 py-4 text-[10px] uppercase tracking-wider transition-all duration-150 sm:text-xs",
        "hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_oklch(0.1_0.01_264)] active:translate-y-1 active:shadow-none",
        styles,
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
