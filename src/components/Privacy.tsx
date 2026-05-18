import { motion } from "framer-motion";
import { URLS } from "../data/assets";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function PrivacyShield() {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shield-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2997ff" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#2997ff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="shield-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="100%" stopColor="#2997ff" />
        </linearGradient>
      </defs>
      <path
        d="M140 30 L40 70 V160 c0 70 50 110 100 130 50-20 100-60 100-130 V70 Z"
        fill="url(#shield-fill)"
        stroke="url(#shield-stroke)"
        strokeWidth={1.5}
      />
      <circle cx="140" cy="155" r="22" stroke="#f5f5f7" strokeWidth="1.4" />
      <rect
        x="125"
        y="170"
        width="30"
        height="38"
        rx="6"
        stroke="#f5f5f7"
        strokeWidth="1.4"
      />
      <path
        d="M132 170v-12a8 8 0 0116 0v12"
        stroke="#f5f5f7"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function Privacy() {
  return (
    <section
      className="relative bg-black text-[#f5f5f7] overflow-hidden dark-section"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
      aria-labelledby="privacy-title"
    >
      <div className="privacy-mesh" aria-hidden="true" />
      <div className="apple-container-wide relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <motion.h2
            id="privacy-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="text-section"
            style={{ letterSpacing: "-0.005em" }}
          >
            Privacy.
            <br />
            That’s Apple.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="mt-5 text-[#a1a1a6] max-w-[480px]"
            style={{
              fontSize: 19,
              lineHeight: 1.42,
              letterSpacing: "-0.011em",
            }}
          >
            Privacy is a fundamental human right. It’s also one of our core
            values. Which is why we design our products and services to
            protect it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href={URLS.privacy}
              className="apple-link"
              style={{ color: "#2997ff", fontSize: 19 }}
            >
              Learn more about Apple and Privacy{" "}
              <span className="arrow" aria-hidden="true">›</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[420px] text-[#f5f5f7]"
        >
          <PrivacyShield />
        </motion.div>
      </div>
    </section>
  );
}
