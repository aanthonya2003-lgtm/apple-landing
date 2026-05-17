import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSETS, URLS } from "../data/assets";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const phoneRef = useRef<HTMLImageElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power2.out" } });
      tl.from(phoneRef.current, { scale: 0.92, opacity: 0, y: 24, duration: 1.2 })
        .from(titleRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.7")
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(ctaRef.current?.children ?? [], { y: 14, opacity: 0, stagger: 0.06, duration: 0.5 }, "-=0.3");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        animation: gsap.timeline()
          .to(phoneRef.current, { scale: 1.06, y: -20, ease: "none" }, 0)
          .to([titleRef.current, subRef.current, ctaRef.current], { opacity: 0, y: -24, ease: "none" }, 0),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-apple-bg pt-[44px] overflow-hidden" style={{ minHeight: "min(900px, 100vh)" }} aria-labelledby="hero-title">
      <div className="apple-container relative flex flex-col items-center text-center pt-12 md:pt-20 pb-8">
        <h1 ref={titleRef} id="hero-title" className="text-hero text-apple-text">iPhone 16 Pro.</h1>
        <p ref={subRef} className="mt-3 text-apple-text font-normal" style={{ fontSize: "clamp(1.25rem, 1vw + 1rem, 1.75rem)", lineHeight: 1.21, letterSpacing: "-0.011em" }}>
          Hello, Apple Intelligence.
        </p>
        <div ref={ctaRef} className="mt-6 flex items-center justify-center gap-6">
          <a href={URLS.buyIphone16Pro} className="apple-btn apple-btn-primary">Buy</a>
          <a href={URLS.iphone16Pro} className="apple-link">Learn more <span className="arrow" aria-hidden="true">›</span></a>
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
            className="w-full max-w-[820px] h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
