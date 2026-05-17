import { motion } from "framer-motion";
import { ASSETS, URLS } from "../data/assets";

const cardEase = [0.25, 0.46, 0.45, 0.94] as const;
type Tone = "light" | "dark";

interface CardProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  tone: Tone;
  image: string;
  imageAlt: string;
  buyHref: string;
  learnHref: string;
  className?: string;
  imageWrapClass?: string;
}

function BentoCard({ eyebrow, title, subtitle, tone, image, imageAlt, buyHref, learnHref, className = "", imageWrapClass = "" }: CardProps) {
  const isDark = tone === "dark";
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: cardEase }}
      className={`group relative overflow-hidden ${isDark ? "bg-black text-[#f5f5f7]" : "bg-[#f5f5f7] text-[#1d1d1f]"} ${className}`} style={{ borderRadius: 18 }}>
      <div className="relative z-10 px-8 pt-10 md:px-12 md:pt-14 text-center">
        {eyebrow ? <p className={`text-[14px] font-medium mb-2 ${isDark ? "text-[#86868b]" : "text-[#6e6e73]"}`}>{eyebrow}</p> : null}
        <h3 className="text-card mb-2">{title}</h3>
        <p className={`text-[19px] md:text-[21px] font-normal leading-tight ${isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`} style={{ letterSpacing: "-0.01em" }}>{subtitle}</p>
        <div className="mt-5 mb-2 flex items-center justify-center gap-5">
          <a href={buyHref} className="apple-btn apple-btn-primary">Buy</a>
          <a href={learnHref} className="apple-link" style={isDark ? { color: "#2997ff" } : undefined}>Learn more <span className="arrow" aria-hidden="true">›</span></a>
        </div>
      </div>
      <div className={`relative flex-1 flex items-end justify-center pb-0 ${imageWrapClass}`}>
        <motion.img src={image} alt={imageAlt} width="1200" height="800" loading="lazy" decoding="async" className="w-full h-auto object-contain pointer-events-none select-none transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.015]" draggable={false} />
      </div>
    </motion.article>
  );
}

export function PromoBento() {
  return (
    <section className="bg-apple-bg py-3 md:py-5" aria-labelledby="bento-title">
      <h2 id="bento-title" className="sr-only">Get the latest.</h2>
      <div className="apple-container-wide grid grid-cols-12 gap-3 md:gap-5">
        <BentoCard tone="dark" eyebrow="New" title="MacBook Pro" subtitle="Mind-blowingly fast. Made for Apple Intelligence." image={ASSETS.macbook.hero} imageAlt="MacBook Pro with M4 family of chips, closed and glowing with a colorful gradient" buyHref={URLS.macbookPro} learnHref={URLS.macbookPro} className="col-span-12 min-h-[520px] md:min-h-[640px] flex flex-col" imageWrapClass="mt-6 px-4" />
        <BentoCard tone="light" title="iPad Pro" subtitle="Impossibly thin. Outrageously powerful." image={ASSETS.ipad.hero} imageAlt="The new iPad Pro with M4 chip in silver and space black finishes" buyHref={URLS.ipadPro} learnHref={URLS.ipadPro} className="col-span-12 md:col-span-7 min-h-[480px] md:min-h-[580px] flex flex-col" imageWrapClass="mt-4 px-6" />
        <BentoCard tone="light" title="Apple Watch Series 10" subtitle="Thinner. Bigger display. Even more you." image={ASSETS.watch.hero} imageAlt="Apple Watch Series 10 in jet black and titanium finishes" buyHref={URLS.watch} learnHref={URLS.watch} className="col-span-12 md:col-span-5 min-h-[480px] md:min-h-[580px] flex flex-col" imageWrapClass="mt-4 px-6" />
      </div>
    </section>
  );
}
