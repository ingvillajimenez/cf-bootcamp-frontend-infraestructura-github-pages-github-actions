import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cf-bootcamp-frontend-infraestructura-github-pages-github-actions/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
