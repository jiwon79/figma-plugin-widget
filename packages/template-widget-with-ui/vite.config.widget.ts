import { defineConfig } from "vite";
import path from "node:path";
import generateFile from "vite-plugin-generate-file";
import { viteSingleFile } from "vite-plugin-singlefile";
import figmaManifest from "./figma.manifest";

export default defineConfig(({ mode }) => ({
  plugins: [
    viteSingleFile(),
    generateFile({
      type: "json",
      output: "./manifest.json",
      data: figmaManifest,
    }),
  ],
  root: path.resolve("src/widget"),
  build: {
    minify: mode === "production",
    cssMinify: mode === "production",
    sourcemap: mode !== "production" ? "inline" : false,
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    rollupOptions: {
      input: path.resolve("src/widget/code.tsx"),
      output: {
        entryFileNames: "code.js",
      },
    },
  },
  resolve: {
    alias: {
      "@won-types": path.resolve("../@types/build-alias.ts"),
      "@won-template-widget-with-ui": path.resolve("src"),
    },
  },
}));
