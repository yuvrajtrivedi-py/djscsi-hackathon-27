import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EVENT } from "@/lib/hackathon-data";
import { PixelButton } from "./primitives";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Prizes", href: "#prizes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Judges", href: "#judges" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "border-b-3 border-b-border bg-background/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="block-frame block-face grid size-9 shrink-0 place-items-center bg-grass" aria-hidden>
            <span className="size-3 bg-dirt-deep" />
          </span>
          <span className="font-display text-xs sm:text-sm">
            {EVENT.name}
            <span className="text-grass">{EVENT.edition}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-pixel text-lg tracking-wide text-muted-foreground uppercase transition-colors hover:text-grass"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <PixelButton href={EVENT.registerUrl} className="hidden sm:inline-flex px-4 py-3">
            Register
          </PixelButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="block-frame grid size-11 place-items-center bg-secondary text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-3 border-t-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-border/60 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-pixel block py-3 text-xl uppercase text-muted-foreground hover:text-grass"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <PixelButton href={EVENT.registerUrl} className="w-full">
                Register now
              </PixelButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
