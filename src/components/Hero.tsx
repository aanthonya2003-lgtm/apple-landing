import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSETS, URLS } from "../data/assets";

/**
 * ScrollTrigger is registered globally in src/lib/lenis.ts.
 *
 * HERO TEXT BUG FIX (committed in this revision):
 * The previous build animated [title, sub, cta] to opacity:0 via a scrub
 * ScrollTrigger. Under fast scroll-back or scrub smoothing, elements got
 * stranded mid-fade and never returned to opacity:1. Now: text uses an
 * entrance-only animation (no scrollTrigger), so it persists forever
 * once the page loads. Only the phone retains its scrub cinema.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const phoneRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ENTRANCE — fires once on page load. No scrollTrigger. Persists.
      // power3.out is GSAP's smoothest deceleration — matches Apple's
      // cubic-bezier(0.25, 0.46, 0.45, 0.94) preferred entrance curve.
      gsap.from(".hero-phone", {
        opacity: 0,
        scale: 0.92,
        y: 24,
        duration: 1.2,
        delay: 0.05,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1.0,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.from(".hero-cta > *", {
        opacity: 0,
        y: 14,
        stagger: 0.06,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      // SCROLL CINEMA — phone-only. Text is intentionally untouched.
      // scrub:1 reverses cleanly on scroll-back because no opacity is
      // involved (only transform), so there's no stranded-state risk.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        animation: gsap
          .timeline()
          .to(phoneRef.current, { scale: 1.06, y: -20, ease: "none" }, 0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-apple-bg pt-[44px] overflow-hidden"
      style={{
        // BUG 4: 100dvh respects iOS mobile Safari's dynamic viewport
        // (accounts for the URL bar shrinking on scroll).
        minHeight: "min(900px, 100dvh)",
      }}
      aria-labelledby="hero-title"
    >
      <div className="apple-container relative flex flex-col items-center text-center pt-12 md:pt-20 pb-8">
        <h1 id="hero-title" className="hero-title text-hero text-apple-text">
          iPhone 16 Pro.
        </h1>
        <p
          className="hero-subtitle mt-3 text-apple-text font-normal"
          style={{
            fontSize: "clamp(1.25rem, 1vw + 1rem, 1.75rem)",
            lineHeight: 1.21,
            letterSpacing: "-0.011em",
          }}
        >
          Hello, Apple Intelligence.
        </p>
        <div className="hero-cta mt-6 flex items-center justify-center gap-6">
          <a href={URLS.buyIphone16Pro} className="apple-btn apple-btn-primary">
            Buy
          </a>
          <a href={URLS.iphone16Pro} className="apple-link">
            Learn more <span className="arrow" aria-hidden="true">›</span>
          </a>
        </div>

        <div className="relative w-full mt-2 md:mt-4 flex justify-center">
          <img
            ref={phoneRef}
            src={ASSETS.iphone.hero}
            srcSet={`${ASSETS.iphone.hero.replace(".large.jpg", ".small.jpg")} 416w, ${ASSETS.iphone.hero.replace(".large.jpg", ".medium.jpg")} 576w, ${ASSETS.iphone.hero} 653w`}
            sizes="(max-width: 768px) 100vw, 820px"
            alt="iPhone 16 Pro in black titanium showing the new design and camera system"
            width={1200}
            height={1680}
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            className="hero-phone w-full max-w-[820px] h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
