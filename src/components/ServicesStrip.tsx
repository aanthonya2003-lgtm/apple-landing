import { motion } from "framer-motion";
import { URLS } from "../data/assets";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
interface Service { name: string; tagline: string; price: string; bg: string; href: string; logo: React.ReactNode; }

const SERVICES: Service[] = [
  { name: "iCloud+", tagline: "Storage and premium features.", price: "From $0.99/mo", bg: "linear-gradient(135deg, #0a84ff 0%, #5856d6 100%)", href: URLS.icloud,
    logo: (<svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M19 10a5.5 5.5 0 0 0-10.6-1.3A4 4 0 0 0 7 17h12a3.5 3.5 0 0 0 0-7z" /></svg>) },
  { name: "Apple Music", tagline: "Over 100M songs, ad-free.", price: "From $10.99/mo", bg: "linear-gradient(135deg, #fa233b 0%, #fb5c74 100%)", href: URLS.appleMusic,
    logo: (<svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M9 17.5V8l9-2v9.2a3 3 0 11-2-2.83V8.4l-5 1.1v7.3a3 3 0 11-2-2.83V17.5z" /></svg>) },
  { name: "Apple TV+", tagline: "All Apple Originals.", price: "$9.99/mo", bg: "linear-gradient(135deg, #000000 0%, #2c2c2e 100%)", href: URLS.appleTvPlus,
    logo: (<svg viewBox="0 0 28 18" fill="white" aria-hidden="true"><path d="M4 4h6v2H8v8H6V6H4V4zm9 0c2.2 0 4 1.6 4 4s-1.8 4-4 4h-2v2h-2V4h4zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2h-2v4h2zm10 0v4h-2v-4h-3V8h3V5h2v3h3v2h-3z" /></svg>) },
  { name: "Apple Arcade", tagline: "200+ games. No ads.", price: "$6.99/mo", bg: "linear-gradient(135deg, #5e5ce6 0%, #bf5af2 100%)", href: URLS.appleArcade,
    logo: (<svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><rect x="3" y="7" width="18" height="11" rx="3" /><circle cx="8" cy="12.5" r="1.5" fill="#5e5ce6" /><circle cx="16" cy="12.5" r="1.5" fill="#5e5ce6" /></svg>) },
  { name: "Apple Pay", tagline: "Pay private. Pay simple.", price: "Free to use", bg: "linear-gradient(135deg, #1d1d1f 0%, #515154 100%)", href: URLS.applePay,
    logo: (<svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 9h20" stroke="#1d1d1f" strokeWidth="1.4" /></svg>) },
  { name: "AppleCare+", tagline: "Service and support.", price: "From $9.99/mo", bg: "linear-gradient(135deg, #30d158 0%, #34c759 100%)", href: URLS.appleCare,
    logo: (<svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 2l9 4v6c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V6l9-4z" /><path d="M9 12l2 2 4-4" stroke="#30d158" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
];

export function ServicesStrip() {
  return (
    <section className="bg-apple-bg py-24 md:py-32" aria-labelledby="services-title">
      <div className="apple-container-wide">
        <motion.h2 id="services-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }} className="text-section text-apple-text mb-10">
          Apple Services.
        </motion.h2>
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:-mx-0 md:px-0" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
          {SERVICES.map((s, i) => (
            <motion.a key={s.name} href={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="group relative flex-shrink-0 overflow-hidden text-white p-6" style={{ width: 280, height: 220, borderRadius: 18, background: s.bg, scrollSnapAlign: "start" }}>
              <div className="absolute top-5 left-5 w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl ring-1 ring-white/15">
                <span className="w-5 h-5 block">{s.logo}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[20px] font-semibold leading-tight tracking-tight">{s.name}</p>
                  <p className="text-[13px] text-white/75 mt-1 leading-tight">{s.tagline}</p>
                </div>
                <p className="text-[11px] text-white/85 whitespace-nowrap">{s.price}</p>
              </div>
              <span aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)" }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
