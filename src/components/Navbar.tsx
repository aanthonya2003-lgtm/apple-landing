import { useEffect, useState } from "react";
import { AppleLogo } from "./AppleLogo";
import { URLS } from "../data/assets";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Store", href: URLS.store },
  { label: "Mac", href: URLS.mac },
  { label: "iPad", href: URLS.ipad },
  { label: "iPhone", href: URLS.iphone },
  { label: "Watch", href: URLS.watch },
  { label: "Vision", href: URLS.vision },
  { label: "AirPods", href: URLS.airpods },
  { label: "TV & Home", href: URLS.tvHome },
  { label: "Entertainment", href: URLS.entertainment },
  { label: "Accessories", href: URLS.accessories },
  { label: "Support", href: URLS.support },
];

function SearchIcon() {
  return (<svg width="14" height="44" viewBox="0 0 14 44" fill="currentColor" aria-hidden="true"><path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" /></svg>);
}
function BagIcon() {
  return (<svg width="14" height="44" viewBox="0 0 14 44" fill="currentColor" aria-hidden="true"><path d="M11.3535,16.0283H10.0205a3.0271,3.0271,0,0,0-3.0205-2.9648A3.0271,3.0271,0,0,0,3.9795,16.0283H2.6465A1.6473,1.6473,0,0,0,1,17.6748V28.3252A1.6473,1.6473,0,0,0,2.6465,29.9717h8.707A1.6473,1.6473,0,0,0,13,28.3252V17.6748A1.6473,1.6473,0,0,0,11.3535,16.0283ZM7,14.0635a1.9658,1.9658,0,0,1,1.9648,1.9648H5.0352A1.9658,1.9658,0,0,1,7,14.0635ZM11.9395,28.3252a.5867.5867,0,0,1-.586.5859H2.6465a.5867.5867,0,0,1-.586-.5859V17.6748a.5867.5867,0,0,1,.586-.5859h8.707a.5867.5867,0,0,1,.586.5859Z" /></svg>);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-blur fixed top-0 left-0 right-0 z-50 border-b border-transparent ${scrolled ? "scrolled" : ""}`} style={{ height: 44 }}>
      <nav className="apple-container-wide h-full flex items-center justify-between text-[#1d1d1f]" aria-label="Global">
        <a href={URLS.home} aria-label="Apple" className="flex items-center px-2 -ml-2 opacity-80 hover:opacity-100 transition-opacity">
          <AppleLogo size={18} />
        </a>
        <ul className="hidden md:flex items-center gap-2 lg:gap-1 overflow-x-auto no-scrollbar flex-1 justify-center px-4" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} role="none">
              <a href={item.href} role="menuitem" className="block px-3 py-1.5 text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors whitespace-nowrap tracking-tight">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="md:hidden flex items-center gap-3 overflow-x-auto no-scrollbar flex-1 px-4">
          {NAV_ITEMS.slice(1, 7).map((item) => (
            <li key={item.label}>
              <a href={item.href} className="block py-1.5 text-[12px] text-[#1d1d1f]/80 whitespace-nowrap">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 -mr-2">
          <a href={URLS.search} aria-label="Search apple.com" className="px-3 py-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"><SearchIcon /></a>
          <a href={URLS.bag} aria-label="Shopping Bag" className="px-3 py-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"><BagIcon /></a>
        </div>
      </nav>
    </header>
  );
}
