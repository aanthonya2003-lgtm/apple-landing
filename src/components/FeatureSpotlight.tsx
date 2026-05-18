import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSETS } from "../data/assets";

interface Feature {
  index: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
}

const FEATURES: Feature[] = [
  {
    index: "01",
    title: "A18 Pro chip.",
    desc:
      "The fastest 6-core CPU in a smartphone, designed for Apple Intelligence and built on second-generation 3-nanometer technology.",
    image: ASSETS.iphone.hero,
    imageAlt: "iPhone 16 Pro front view in black titanium",
  },
  {
    index: "02",
    title: "Camera Control.",
    desc:
      "A new way to capture. Light press to lock focus, slide to adjust zoom and depth — all without leaving the shot.",
    image: ASSETS.iphone.cameraSystem,
    imageAlt: "Close-up of the new camera system on iPhone 16 Pro",
  },
  {
    index: "03",
    title: "48MP Fusion camera.",
    desc:
      "Zero shutter lag for 48MP ProRAW. 4K120 fps Dolby Vision — the highest resolution and frame-rate ever on iPhone.",
    image: ASSETS.iphone.macroPhoto,
    imageAlt:
      "Macro flower photo shot on iPhone 16 Pro 48MP Ultra Wide camera",
  },
  {
    index: "04",
    title: "Titanium design.",
    desc:
      "Strong, lightweight, and built to last. Larger Super Retina XDR displays with the thinnest borders on any Apple product.",
    image: ASSETS.iphone.finishLineup,
    imageAlt:
      "iPhone 16 Pro in four titanium finishes — black, natural, white, desert",
  },
];

/**
 * FEATURE SPOTLIGHT — REWRITTEN FOR BIDIRECTIONAL ACCURACY
 * -----------------------------------------------------------
 * Old behaviour: a single scrub timeline crossfaded 4 images over
 * 400vh. By the time card 04 (Titanium) was actually in viewport,
 * the timeline progress was only ~0.95 → image #3 (macro flower)
 * was still painted on screen and image #4 (titanium lineup) had
 * not finished its 0→1 opacity fade. Result: user reads
 * "Titanium design." next to the wrong photo.
 *
 * New approach:
 *   • Each feature card owns its own ScrollTrigger.
 *   • When a card enters the active band (top 65% → bottom 35%) the
 *     image column smoothly crossfades to THAT card's image.
 *   • Works in both directions — onEnter & onEnterBack swap to the
 *     correct image whether the user is scrolling down or up.
 *   • Text reveals use gsap.fromTo + toggleActions
 *     "play none none reverse" — visible while reading, reverses
 *     only when scrolled back above the card.
 *   • CSS default .feature-* { opacity:1 } keeps text readable even
 *     if JS fails to load.
 */
export function FeatureSpotlight() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const imgs = imagesRef.current.filter(Boolean) as HTMLImageElement[];
    const cards =
      sectionRef.current.querySelectorAll<HTMLElement>(".feature-card");
    if (imgs.length === 0 || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // -------- DEFAULT IMAGE STATE --------
      gsap.set(imgs[0], { opacity: 1, scale: 1 });
      gsap.set(imgs.slice(1), { opacity: 0, scale: 0.96 });

      // -------- IMAGE CROSSFADE (per card) --------
      cards.forEach((card, i) => {
        const swapTo = (targetIndex: number) => {
          imgs.forEach((img, idx) => {
            gsap.to(img, {
              opacity: idx === targetIndex ? 1 : 0,
              scale: idx === targetIndex ? 1 : 0.96,
              duration: 0.7,
              ease: "power3.out",
              overwrite: "auto",
            });
          });
        };

        ScrollTrigger.create({
          trigger: card,
          start: "top 65%",
          end: "bottom 35%",
          onEnter: () => swapTo(i),
          onEnterBack: () => swapTo(i),
        });
      });

      // -------- TEXT REVEAL (per card, bidirectional) --------
      cards.forEach((card) => {
        const heading = card.querySelector(".feature-title");
        const desc = card.querySelector(".feature-desc");
        const number = card.querySelector(".feature-number");
        const targets = [number, heading, desc].filter(Boolean) as Element[];

        gsap.fromTo(
          targets,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top -5%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-apple-bg"
      aria-labelledby="spotlight-title"
    >
      <h2 id="spotlight-title" className="sr-only">
        iPhone 16 Pro features.
      </h2>
      <div className="apple-container-wide grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* IMAGE COLUMN — sticky on desktop, scrolls inline on mobile */}
        <div
          className="md:sticky md:top-0 flex items-center justify-center md:py-0 py-12"
          style={{ height: "auto" }}
        >
          <div className="relative w-full max-w-[480px] aspect-[3/4] md:h-[100dvh] md:max-h-[760px]">
            {FEATURES.map((f, i) => (
              <img
                key={f.index}
                ref={(el) => {
                  imagesRef.current[i] = el;
                }}
                src={f.image}
                alt={f.imageAlt}
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain will-change-[opacity,transform] pointer-events-none select-none"
                style={{ opacity: i === 0 ? 1 : 0 }}
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* TEXT COLUMN — one full-viewport card per feature */}
        <div className="flex flex-col">
          {FEATURES.map((f, i) => (
            <div
              key={f.index}
              className={`feature-card flex flex-col justify-center ${
                i === 0
                  ? "min-h-[90dvh] md:min-h-[100dvh]"
                  : "min-h-[100dvh]"
              } ${i === FEATURES.length - 1 ? "pb-20 md:pb-0" : ""}`}
            >
              <p
                className="feature-number text-apple-muted font-medium mb-3"
                style={{ fontSize: 14, letterSpacing: "0.04em" }}
              >
                {f.index}
              </p>
              <h3 className="feature-title text-card text-apple-text mb-3">
                {f.title}
              </h3>
              <p
                className="feature-desc text-apple-muted max-w-[440px]"
                style={{
                  fontSize: 19,
                  lineHeight: 1.42,
                  letterSpacing: "-0.011em",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
