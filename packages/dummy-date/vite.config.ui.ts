import { defineConfig } from "vite";
import path from "node:path";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import richSvg from "vite-plugin-react-rich-svg";
import postcssUrl from "postcss-url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), richSvg(), viteSingleFile()],
  root: path.resolve("src/ui"),
  build: {
    minify: mode === "production",
    cssMinify: mode === "production",
    sourcemap: mode !== "production" ? "inline" : false,
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    rollupOptions: {
      input: path.resolve("src/ui/index.html"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer, postcssUrl({ url: "inline" })],
    },
  },
  resolve: {
    alias: {
      "@won-dummy-date": path.resolve("src"),
      "@won-dummy-date-common": path.resolve("src/common"),
      "@won-dummy-date-ui": path.resolve("src/ui"),
    },
  },
}));
