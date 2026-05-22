import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

const viteBase = process.env.VITE_BASE;
const base =
  viteBase?.startsWith("/") && viteBase.endsWith("/") ? viteBase : "/";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
});
