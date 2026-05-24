import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    base: "/",
  },

  tanstackStart: {
    server: { entry: "server" },
    spa: {
      prerender: {
        outputPath: "/index",
      },
    },
  },
});