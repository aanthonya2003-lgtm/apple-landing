import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSETS } from "../data/assets";

interface Feature { index: string; title: string; desc: string; image: string; imageAlt: string; }

const FEATURES: Feature[] = [
  { index: "01", title: "A18 Pro chip.", desc: "The fastest 6-core CPU in a smartphone, designed for Apple Intelligence and built on second-generation 3-nanometer technology.", image: ASSETS.iphone.hero, imageAlt: "iPhone 16 Pro front view in black titanium" },
  { index: "02", title: "Camera Control.", desc: "A new way to capture. Light press to lock focus, slide to adjust zoom and depth — all without leaving the shot.", image: ASSETS.iphone.cameraSystem, imageAlt: "Close-up of the new camera system on iPhone 16 Pro" },
  { index: "03", title: "48MP Fusion camera.", desc: "Zero shutter lag for 48MP ProRAW. 4K120 fps Dolby Vision — the highest resolution and frame-rate ever on iPhone.", image: ASSETS.iphone.macroPhoto, imageAlt: "Macro flower photo shot on iPhone 16 Pro 48MP Ultra Wide camera" },
  { index: "04", title: "Titanium design.", desc: "Strong, lightweight, and built to last. Larger Super Retina XDR displays with the thinnest borders on any Apple product.", image: ASSETS.iphone.finishLineup, imageAlt: "iPhone 16 Pro in four titanium finishes — black, natural, white, desert" },
];

export function FeatureSpotlight() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const imgs = imagesRef.current.filter(Boolean) as HTMLImageElement[];
    if (imgs.length < 2) return;

    const ctx = gsap.context(() => {
      imgs.forEach((img, i) => { gsap.set(img, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.94 }); });
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom bottom", scrub: 1 } });
        for (let i = 0; i < imgs.length - 1; i++) {
          tl.to(imgs[i], { opacity: 0, scale: 0.94, ease: "none" }, i)
            .to(imgs[i + 1], { opacity: 1, scale: 1, ease: "none" }, i);
        }
      });

      mm.add("(max-width: 767px)", () => {
        const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".feature-card") ?? [];
        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card, start: "top 70%", end: "bottom 30%",
            onEnter: () => { imgs.forEach((img, idx) => gsap.to(img, { opacity: idx === i ? 1 : 0, duration: 0.4, ease: "power2.out" })); },
            onEnterBack: () => { imgs.forEach((img, idx) => gsap.to(img, { opacity: idx === i ? 1 : 0, duration: 0.4, ease: "power2.out" })); },
          });
        });
      });

      const cards = sectionRef.current!.querySelectorAll(".feature-card");
      cards.forEach((card) => {
        gsap.from(card, { opacity: 0, y: 20, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-apple-bg" style={{ minHeight: "400vh" }} aria-labelledby="spotlight-title">
      <h2 id="spotlight-title" className="sr-only">iPhone 16 Pro features.</h2>
      <div className="apple-container-wide grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center md:py-0 py-16">
          <div className="relative w-full max-w-[480px] aspect-[3/4]">
            {FEATURES.map((f, i) => (
              <img key={f.index} ref={(el) => { imagesRef.current[i] = el; }} src={f.image} alt={f.imageAlt} width="800" height="1000" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-contain will-change-[opacity,transform] pointer-events-none select-none" style={{ opacity: i === 0 ? 1 : 0 }} draggable={false} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          {FEATURES.map((f, i) => (
            <div key={f.index} className={`feature-card flex flex-col justify-center ${i === 0 ? "min-h-[90vh] md:min-h-screen" : "min-h-screen"} ${i === FEATURES.length - 1 ? "pb-24 md:pb-0" : ""}`}>
              <p className="text-apple-muted font-medium mb-3" style={{ fontSize: 14, letterSpacing: "0.04em" }}>{f.index}</p>
              <h3 className="text-card text-apple-text mb-3">{f.title}</h3>
              <p className="text-apple-muted max-w-[440px]" style={{ fontSize: 19, lineHeight: 1.42, letterSpacing: "-0.011em" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
