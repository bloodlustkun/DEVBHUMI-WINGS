import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Syndixk Framework Configuration
// Metasyndikate Company © 2025
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  define: {
    __FRAMEWORK_NAME__: JSON.stringify("Syndixk Framework"),
    __COMPANY__: JSON.stringify("Metasyndikate Company"),
  },
})
