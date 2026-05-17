import { motion } from "framer-motion";
import { URLS } from "../data/assets";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
interface Category { name: string; href: string; icon: React.ReactNode; }

const CATEGORIES: Category[] = [
  { name: "iPhone", href: URLS.iphone, icon: (<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><rect x="20" y="6" width="20" height="48" rx="4" /><rect x="26" y="11" width="8" height="1.4" rx="0.7" fill="currentColor" stroke="none" /><circle cx="30" cy="49" r="1.2" fill="currentColor" stroke="none" /></svg>) },
  { name: "Mac", href: URLS.mac, icon: (<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><rect x="10" y="14" width="40" height="26" rx="2.5" /><path d="M6 44h48l-2 4H8z" /></svg>) },
  { name: "iPad", href: URLS.ipad, icon: (<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><rect x="14" y="8" width="32" height="44" rx="3.5" /><circle cx="30" cy="48" r="0.9" fill="currentColor" stroke="none" /></svg>) },
  { name: "Apple Watch", href: URLS.watch, icon: (<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><rect x="20" y="18" width="20" height="24" rx="4.5" /><path d="M24 18l1.5-7h9L36 18M24 42l1.5 7h9L36 42" /></svg>) },
  { name: "AirPods", href: URLS.airpods, icon: (<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><path d="M22 18a6 6 0 016 6v6a4 4 0 01-8 0v-6a6 6 0 012-6z" /><path d="M38 18a6 6 0 00-6 6v6a4 4 0 008 0v-6a6 6 0 00-2-6z" /><path d="M20 38v6M40 38v6" /></svg>) },
  { name: "Apple TV", href: URLS.appletv, icon: (<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><rect x="10" y="14" width="40" height="28" rx="3" /><path d="M22 48h16M30 42v6" /></svg>) },
];

export function ShopCategory() {
  return (
    <section className="bg-apple-bg py-24 md:py-32 border-t border-apple-stroke/40" aria-labelledby="shop-title">
      <div className="apple-container-wide text-center">
        <motion.h2 id="shop-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }} className="text-section text-apple-text mb-14">
          Shop Apple.
        </motion.h2>
        <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 max-w-[920px] mx-auto">
          {CATEGORIES.map((c) => (
            <motion.li key={c.name} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease }} className="text-center">
              <a href={c.href} className="group inline-flex flex-col items-center gap-3 transition-transform duration-300">
                <span className="block w-[60px] h-[60px] text-apple-text group-hover:-translate-y-1 transition-transform duration-300">{c.icon}</span>
                <span className="text-[14px] font-medium text-apple-text">{c.name}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
