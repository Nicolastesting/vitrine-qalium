import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubPagesBase = process.env.VITE_BASE_PATH ?? "/vitrine-qalium/";

export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
});
