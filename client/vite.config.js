import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(() => {
  const viteBase = process.env.GITHUB_ACTIONS
    ? process.env.VITE_BASE
    : "/Developer_Portfolio/";
  const base =
    viteBase?.startsWith("/") && viteBase.endsWith("/") ? viteBase : "/";

  return {
    plugins: [react(), tailwindcss()],
    base,
  };
});
