import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const viteBase = env.VITE_BASE;
  const base =
    viteBase?.startsWith("/") && viteBase.endsWith("/") ? viteBase : "/";

  return {
    plugins: [react(), tailwindcss()],
    base,
  };
});
