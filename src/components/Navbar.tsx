import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppleLogo } from "./AppleLogo";
import { URLS } from "../data/assets";

interface SubLink { label: string; href: string; highlight?: boolean; }
interface NavCategory { label: string; href: string; heading: string; links: SubLink[]; }

const NAV: NavCategory[] = [
  { label: "Store", href: URLS.store, heading: "Shop", links: [
    { label: "Shop the Latest", href: URLS.store, highlight: true },
    { label: "Mac", href: URLS.mac }, { label: "iPad", href: URLS.ipad },
    { label: "iPhone", href: URLS.iphone }, { label: "Apple Watch", href: URLS.watch },
    { label: "Accessories", href: URLS.accessories },
  ]},
  { label: "Mac", href: URLS.mac, heading: "Explore Mac", links: [
    { label: "MacBook Pro", href: URLS.macbookPro, highlight: true },
    { label: "MacBook Air", href: "https://www.apple.com/macbook-air/" },
    { label: "iMac", href: "https://www.apple.com/imac/" },
    { label: "Mac mini", href: "https://www.apple.com/mac-mini/" },
    { label: "Mac Studio", href: "https://www.apple.com/mac-studio/" },
    { label: "Compare Mac", href: "https://www.apple.com/mac/compare/" },
  ]},
  { label: "iPad", href: URLS.ipad, heading: "Explore iPad", links: [
    { label: "iPad Pro", href: URLS.ipadPro, highlight: true },
    { label: "iPad Air", href: "https://www.apple.com/ipad-air/" },
    { label: "iPad", href: URLS.ipad },
    { label: "iPad mini", href: "https://www.apple.com/ipad-mini/" },
    { label: "Apple Pencil", href: "https://www.apple.com/apple-pencil/" },
    { label: "Compare iPad", href: "https://www.apple.com/ipad/compare/" },
  ]},
  { label: "iPhone", href: URLS.iphone, heading: "Explore iPhone", links: [
    { label: "iPhone 16 Pro", href: URLS.iphone16Pro, highlight: true },
    { label: "iPhone 16", href: "https://www.apple.com/iphone-16/" },
    { label: "iPhone 15", href: "https://www.apple.com/iphone-15/" },
    { label: "Compare iPhone", href: "https://www.apple.com/iphone/compare/" },
    { label: "AirPods", href: URLS.airpods }, { label: "AppleCare+", href: URLS.appleCare },
  ]},
  { label: "Watch", href: URLS.watch, heading: "Explore Apple Watch", links: [
    { label: "Apple Watch Series 10", href: URLS.watch, highlight: true },
    { label: "Apple Watch Ultra 2", href: "https://www.apple.com/apple-watch-ultra-2/" },
    { label: "Apple Watch SE", href: "https://www.apple.com/apple-watch-se/" },
    { label: "Apple Watch Nike", href: "https://www.apple.com/apple-watch-nike/" },
    { label: "Bands", href: "https://www.apple.com/shop/watch/bands" },
    { label: "AppleCare+", href: URLS.appleCare },
  ]},
  { label: "Vision", href: URLS.vision, heading: "Explore Vision", links: [
    { label: "Apple Vision Pro", href: URLS.vision, highlight: true },
    { label: "Apple Immersive Video", href: URLS.vision },
    { label: "Shop Apple Vision Pro", href: URLS.vision },
  ]},
  { label: "AirPods", href: URLS.airpods, heading: "Explore AirPods", links: [
    { label: "AirPods Pro 2", href: URLS.airpods, highlight: true },
    { label: "AirPods 4", href: URLS.airpods },
    { label: "AirPods Max", href: URLS.airpods },
    { label: "Compare AirPods", href: "https://www.apple.com/airpods/compare/" },
  ]},
  { label: "TV & Home", href: URLS.tvHome, heading: "Explore TV & Home", links: [
    { label: "Apple TV 4K", href: URLS.appletv, highlight: true },
    { label: "HomePod", href: "https://www.apple.com/homepod/" },
    { label: "HomePod mini", href: "https://www.apple.com/homepod-mini/" },
    { label: "AirTag", href: "https://www.apple.com/airtag/" },
  ]},
  { label: "Entertainment", href: URLS.entertainment, heading: "Entertainment", links: [
    { label: "Apple TV+", href: URLS.appleTvPlus, highlight: true },
    { label: "Apple Music", href: URLS.appleMusic },
    { label: "Apple Arcade", href: URLS.appleArcade },
    { label: "Apple Fitness+", href: URLS.appleFitness },
    { label: "Apple News+", href: URLS.appleNews },
    { label: "Apple Podcasts", href: URLS.podcasts },
  ]},
  { label: "Accessories", href: URLS.accessories, heading: "Accessories", links: [
    { label: "Mac", href: URLS.accessories, highlight: true },
    { label: "iPad", href: URLS.accessories },
    { label: "iPhone", href: URLS.accessories },
    { label: "Apple Watch", href: URLS.accessories },
    { label: "AirPods", href: URLS.accessories },
  ]},
  { label: "Support", href: URLS.support, heading: "Support", links: [
    { label: "iPhone Support", href: URLS.support, highlight: true },
    { label: "Mac Support", href: URLS.support },
    { label: "iPad Support", href: URLS.support },
    { label: "Apple Account", href: URLS.account },
    { label: "Contact Apple", href: URLS.support },
  ]},
];

function SearchIcon() {
  return (<svg width="14" height="44" viewBox="0 0 14 44" fill="currentColor" aria-hidden="true"><path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" /></svg>);
}
function BagIcon() {
  return (<svg width="14" height="44" viewBox="0 0 14 44" fill="currentColor" aria-hidden="true"><path d="M11.3535,16.0283H10.0205a3.0271,3.0271,0,0,0-3.0205-2.9648A3.0271,3.0271,0,0,0,3.9795,16.0283H2.6465A1.6473,1.6473,0,0,0,1,17.6748V28.3252A1.6473,1.6473,0,0,0,2.6465,29.9717h8.707A1.6473,1.6473,0,0,0,13,28.3252V17.6748A1.6473,1.6473,0,0,0,11.3535,16.0283ZM7,14.0635a1.9658,1.9658,0,0,1,1.9648,1.9648H5.0352A1.9658,1.9658,0,0,1,7,14.0635ZM11.9395,28.3252a.5867.5867,0,0,1-.586.5859H2.6465a.5867.5867,0,0,1-.586-.5859V17.6748a.5867.5867,0,0,1,.586-.5859h8.707a.5867.5867,0,0,1,.586.5859Z" /></svg>);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) or (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenIndex(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!isTouch || openIndex === null) return;
    const onTap = (e: MouseEvent) => {
      const t = e.target as Element;
      if (!t.closest("[data-nav-root]")) setOpenIndex(null);
    };
    document.addEventListener("click", onTap);
    return () => document.removeEventListener("click", onTap);
  }, [isTouch, openIndex]);

  const clearTimer = () => {
    if (closeTimerRef.current) { window.clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  };
  const openAt = (i: number) => { clearTimer(); setOpenIndex(i); };
  const closeWithDelay = () => {
    clearTimer();
    closeTimerRef.current = window.setTimeout(() => setOpenIndex(null), 150);
  };

  return (
    <header data-nav-root
      className={`nav-blur fixed top-0 left-0 right-0 z-50 border-b border-transparent ${scrolled || openIndex !== null ? "scrolled" : ""}`}
      style={{ height: 44 }}
      onMouseLeave={() => !isTouch && closeWithDelay()}>
      <nav className="apple-container-wide h-full flex items-center justify-between text-[#1d1d1f]" aria-label="Global">
        <a href={URLS.home} aria-label="Apple" className="flex items-center px-2 -ml-2 opacity-80 hover:opacity-100 transition-opacity">
          <AppleLogo size={18} />
        </a>
        <ul className="hidden md:flex items-center gap-2 lg:gap-1 overflow-x-auto no-scrollbar flex-1 justify-center px-4" role="menubar">
          {NAV.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={cat.label} role="none" onMouseEnter={() => !isTouch && openAt(i)}>
                <a href={cat.href} role="menuitem"
                  className="nav-dropdown-trigger block px-3 py-1.5 text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors whitespace-nowrap tracking-tight"
                  aria-haspopup="true" aria-expanded={isOpen}
                  onClick={(e) => { if (isTouch) { e.preventDefault(); setOpenIndex(isOpen ? null : i); } }}>
                  {cat.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="md:hidden flex items-center gap-3 overflow-x-auto no-scrollbar flex-1 px-4">
          {NAV.slice(1, 7).map((cat) => (
            <li key={cat.label}>
              <a href={cat.href} className="block py-1.5 text-[12px] text-[#1d1d1f]/80 whitespace-nowrap">{cat.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 -mr-2">
          <a href={URLS.search} aria-label="Search apple.com" className="px-3 py-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"><SearchIcon /></a>
          <a href={URLS.bag} aria-label="Shopping Bag" className="px-3 py-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"><BagIcon /></a>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {openIndex !== null && !isTouch && (
          <motion.div key={openIndex}
            className="nav-dropdown-panel hidden md:block absolute left-0 right-0 top-[44px] overflow-hidden"
            initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={() => clearTimer()} onMouseLeave={() => closeWithDelay()}
            role="region" aria-label={`${NAV[openIndex].label} menu`}>
            <div className="apple-container py-10">
              <p className="text-apple-muted mb-3 font-normal" style={{ fontSize: 12, letterSpacing: "0.01em" }}>{NAV[openIndex].heading}</p>
              <motion.ul initial="hidden" animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.03 } }, hidden: {} }}
                className="flex flex-col gap-1">
                {NAV[openIndex].links.map((link) => (
                  <motion.li key={link.label}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.22, ease: "easeOut" }}>
                    <a href={link.href}
                      className={`block py-1.5 transition-colors hover:text-apple-blue ${link.highlight ? "text-apple-text" : "text-[#1d1d1f]/85"}`}
                      style={{ fontSize: 22, fontWeight: link.highlight ? 600 : 400, letterSpacing: "-0.005em", lineHeight: 1.18 }}>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {openIndex !== null && isTouch && (
          <motion.div key={`m-${openIndex}`}
            className="nav-dropdown-panel md:hidden absolute left-0 right-0 top-[44px]"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            role="region" aria-label={`${NAV[openIndex].label} menu`}>
            <div className="apple-container py-6">
              <ul className="flex flex-col gap-1">
                {NAV[openIndex].links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="block py-2 text-apple-text" style={{ fontSize: 18, fontWeight: link.highlight ? 600 : 400 }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
