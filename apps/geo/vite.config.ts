import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api/v1": {
        rewrite: (path: string) => path.slice(4),
        target: "http://localhost:8080",
      },
    },
  },
});
