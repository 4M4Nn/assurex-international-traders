import type Lenis from "lenis";

/** Module-level handle so overlays (e.g. the mobile menu) can pause smooth scrolling. */
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}
