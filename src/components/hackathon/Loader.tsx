import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { EVENT } from "@/lib/hackathon-data";

/** Themed "generating world" loading screen, mirroring a game world-load. */
export function WorldLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6;
        if (next >= 100) {
          window.clearInterval(id);
          window.setTimeout(() => setDone(true), 420);
          return 100;
        }
        return next;
      });
    }, 160);
    return () => window.clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background px-6"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-label="Loading"
        >
          <div className="grid-blocks absolute inset-0 opacity-60" aria-hidden />
          <div className="relative flex flex-col items-center gap-8">
            <div className="flex gap-2" aria-hidden>
              {["bg-grass", "bg-dirt", "bg-stone", "bg-diamond", "bg-gold"].map((c, i) => (
                <motion.span
                  key={c}
                  className={`size-5 ${c}`}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
            <p className="font-display text-center text-sm sm:text-lg">
              {EVENT.name}
              <span className="text-grass">{EVENT.edition}</span>
            </p>
            <div className="w-64 max-w-[80vw]">
              <div className="block-frame h-6 bg-secondary p-1">
                <div
                  className="h-full bg-grass transition-[width] duration-200"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <p className="font-pixel mt-3 text-center text-lg text-muted-foreground">
                Generating world… {Math.floor(Math.min(progress, 100))}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
