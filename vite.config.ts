import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: "esnext",
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ["gsap"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
