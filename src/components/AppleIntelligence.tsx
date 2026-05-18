import { motion } from "framer-motion";
import { URLS } from "../data/assets";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Feature {
  title: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  { title: "Writing Tools", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4l4 4-9 9H7v-4z" /><path d="M13.5 6.5l4 4" /></svg>) },
  { title: "Image Playground", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-9 9" /></svg>) },
  { title: "Genmoji", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="9" cy="10" r="0.8" fill="currentColor" /><circle cx="15" cy="10" r="0.8" fill="currentColor" /><path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" /></svg>) },
  { title: "Smart Reply", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-12.4 6.7L4 20l1.3-4.6A8 8 0 1 1 21 12z" /></svg>) },
  { title: "Siri, Redesigned", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 16c1.2 1.2 2.5 1.8 4 1.8s2.8-.6 4-1.8" /></svg>) },
  { title: "Private Cloud Compute", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 0 1-.8-7.9 6 6 0 0 1 11.7-.6A4.5 4.5 0 0 1 17 18z" /><path d="M12 11v6" /><path d="M9.5 13.5L12 11l2.5 2.5" /></svg>) },
];

export function AppleIntelligence() {
  return (
    <section
      className="relative bg-black text-[#f5f5f7] overflow-hidden dark-section"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
      aria-labelledby="ai-title"
    >
      <div className="ai-orb" aria-hidden="true" />
      <div className="apple-container relative z-10 text-center">
        <motion.h2
          id="ai-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="text-section"
          style={{ letterSpacing: "-0.005em" }}
        >
          Apple Intelligence.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mt-4 max-w-[640px] mx-auto text-[#a1a1a6]"
          style={{
            fontSize: "clamp(1.1rem, 0.5vw + 1rem, 1.5rem)",
            lineHeight: 1.35,
            letterSpacing: "-0.011em",
          }}
        >
          Personal intelligence that works for you. Built into your iPhone
          with groundbreaking privacy at every step.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            hidden: {},
          }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 max-w-[760px] mx-auto"
        >
          {features.map((f) => (
            <motion.li
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-col items-center gap-3"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                <span className="w-6 h-6 block">{f.icon}</span>
              </span>
              <span className="text-[15px] font-medium text-[#f5f5f7] tracking-tight">
                {f.title}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href={URLS.ai}
            className="apple-link"
            style={{ color: "#2997ff", fontSize: 19 }}
          >
            Learn more about Apple Intelligence{" "}
            <span className="arrow" aria-hidden="true">›</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
