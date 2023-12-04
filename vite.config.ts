import { defineConfig } from 'vite';
import VitePluginSSR from "vite-plugin-ssr/plugin";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  plugins: [
    VitePluginSSR({
      prerender: true,
    })
  ],
});