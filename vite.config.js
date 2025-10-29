import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// If you use Tailwind plugin (optional) keep it; otherwise remove that line
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    // remove this line if you don't use the Tailwind vite plugin:
   tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "vite.svg"],
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        description: "My Awesome React Application",
        theme_color: "#ffffff",
        background_color: "#333333",
        display: "standalone",
        start_url: "/index.html",
        icons: [
          { src: "/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon" },
          { src: "/logo192.png", type: "image/png", sizes: "192x192" },
          { src: "/logo512.png", type: "image/png", sizes: "512x512" },
          { src: "/maskable-512.png", type: "image/png", sizes: "512x512", purpose: "maskable" }
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            // caches documents, scripts, styles, images, fonts
            urlPattern: ({ request }) =>
              request.destination === "document" ||
              request.destination === "script" ||
              request.destination === "style" ||
              request.destination === "image" ||
              request.destination === "font",
            handler: "NetworkFirst",
            options: {
              cacheName: "offline-cache",
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
            },
          },
        ],
      },
      devOptions: {
        enabled: true // useful for testing service worker in dev
      }
    }),
  ],
});
