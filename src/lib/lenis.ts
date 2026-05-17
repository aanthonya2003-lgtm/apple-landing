import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SmoothScrollHandle {
  lenis: Lenis;
  destroy: () => void;
}

export function initSmoothScroll(): SmoothScrollHandle {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lenis = new Lenis({
    duration: 1.0,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
    smoothWheel: true,
  });

  let destroyed = false;
  const onScroll = () => ScrollTrigger.update();
  const onTick = (time: number) => {
    if (destroyed) return;
    lenis.raf(time * 1000);
  };

  lenis.on("scroll", onScroll);
  gsap.ticker.add(onTick);
  gsap.ticker.lagSmoothing(0);

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    gsap.ticker.remove(onTick);
    try { lenis.off("scroll", onScroll); } catch {}
    lenis.destroy();
  };

  if (reducedMotion) destroy();
  return { lenis, destroy };
}
