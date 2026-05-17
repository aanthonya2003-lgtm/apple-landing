import { URLS } from "../data/assets";

interface Col { heading: string; items: Array<{ label: string; href: string }>; }

const COLUMNS: Col[] = [
  { heading: "Shop and Learn", items: [
    { label: "Store", href: URLS.store },
    { label: "Mac", href: URLS.mac },
    { label: "iPad", href: URLS.ipad },
    { label: "iPhone", href: URLS.iphone },
    { label: "Watch", href: URLS.watch },
    { label: "AirPods", href: URLS.airpods },
    { label: "TV & Home", href: URLS.tvHome },
    { label: "Accessories", href: URLS.accessories },
  ] },
  { heading: "Apple Wallet", items: [
    { label: "Wallet", href: URLS.appleWallet },
    { label: "Apple Card", href: URLS.appleCard },
    { label: "Apple Pay", href: URLS.applePay },
  ] },
  { heading: "Account", items: [
    { label: "Manage Your Apple Account", href: URLS.account },
    { label: "iCloud.com", href: URLS.icloudWeb },
  ] },
  { heading: "Entertainment", items: [
    { label: "Apple One", href: URLS.appleOne },
    { label: "Apple TV+", href: URLS.appleTvPlus },
    { label: "Apple Music", href: URLS.appleMusic },
    { label: "Apple Arcade", href: URLS.appleArcade },
    { label: "Apple Fitness+", href: URLS.appleFitness },
    { label: "Apple News+", href: URLS.appleNews },
    { label: "Apple Podcasts", href: URLS.podcasts },
    { label: "Apple Books", href: URLS.books },
    { label: "App Store", href: URLS.appStore },
  ] },
];

export function Footer() {
  return (
    <footer className="bg-apple-surface text-[#6e6e73]" role="contentinfo" aria-label="Apple">
      <div className="apple-container-wide py-8 md:py-12">
        <p className="text-small max-w-[820px] leading-snug mb-6" style={{ fontSize: 12, lineHeight: 1.33, color: "#6e6e73" }}>
          More ways to shop:{" "}
          <a className="text-apple-blue-accessible underline underline-offset-2 hover:text-apple-blue-hover" href={URLS.retail}>Find an Apple Store</a>{" "}
          or{" "}
          <a className="text-apple-blue-accessible underline underline-offset-2 hover:text-apple-blue-hover" href={URLS.retail}>other retailer</a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
        <hr className="border-t border-apple-stroke mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-apple-text font-semibold mb-3" style={{ fontSize: 12 }}>{col.heading}</h3>
              <ul className="space-y-2">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="text-[12px] text-apple-muted hover:text-apple-text hover:underline transition-colors">{it.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-t border-apple-stroke mt-8 mb-5" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p style={{ fontSize: 12 }} className="text-apple-muted">Copyright © 2025 Apple Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li><a href={URLS.privacyPolicy} className="text-[12px] text-apple-muted hover:text-apple-text hover:underline">Privacy Policy</a></li>
            <li><a href={URLS.terms} className="text-[12px] text-apple-muted hover:text-apple-text hover:underline">Terms of Use</a></li>
            <li><a href={URLS.salesRefunds} className="text-[12px] text-apple-muted hover:text-apple-text hover:underline">Sales and Refunds</a></li>
            <li><a href={URLS.legal} className="text-[12px] text-apple-muted hover:text-apple-text hover:underline">Legal</a></li>
            <li><a href={URLS.siteMap} className="text-[12px] text-apple-muted hover:text-apple-text hover:underline">Site Map</a></li>
            <li><span className="text-[12px] text-apple-muted">United States</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
