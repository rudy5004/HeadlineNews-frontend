import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/headline_news_frontend/", // Adjusted for GitHub Pages
});
