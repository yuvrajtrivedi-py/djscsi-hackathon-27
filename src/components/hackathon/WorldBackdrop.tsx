/**
 * Fixed, purely decorative page atmosphere: layered voxel sky gradient,
 * pixel starfield, block grid and vignette. Sits behind all content and is
 * hidden from assistive tech. Cheap to render on mobile (no images, no JS).
 */
export function WorldBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" aria-hidden>
      <div className="world-backdrop absolute inset-0" />
      <div className="starfield absolute inset-0 opacity-40 sm:opacity-60" />
      <div className="grid-blocks absolute inset-0 opacity-60" />
      {/* Blocky horizon silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dirt-deep/40 to-transparent sm:h-56" />
      <div className="vignette absolute inset-0" />
    </div>
  );
}
