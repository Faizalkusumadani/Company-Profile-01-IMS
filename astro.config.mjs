import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  site: "https://intisukses-ms.com/",
  trailingSlash: "never",
  redirects: {
    "/": "/id/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  // PERBAIKAN BAGIAN INI
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        format: ["webp", "avif"],
        quality: 60,
      },
    },
  },

  // Kemudian baru array integrations
  integrations: [
    react(),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: "id",
        locales: {
          id: "id-ID",
          en: "en-US",
        },
      },
    }),
    AstroPWA({
      mode: isDev ? "development" : "production",
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      includeAssets: [
        "favicon-ims.svg",
        "robots.txt",
        "pwa-192x192.png",
        "pwa-512x512.png",
        "ims-touch-icon.png",
      ],
      manifest: {
        name: "Intisukses Mitra Sejati",
        short_name: "Intisukses",
        description: "Solusi Terpercaya untuk kebutuhan proyek anda",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        scope: "/",
        lang: "id",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*.{js,css,html,ico,woff,woff2,txt}"],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /\/_astro\/.*\.(png|jpg|jpeg|webp)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "product-images",
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\/_astro\/.*\.svg$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "svg-assets",
              expiration: {
                maxEntries: 40,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\/(?!_astro).*\.(png|jpg|jpeg|webp|svg)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "public-images",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 14,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.html$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "html-pages",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
              networkTimeoutSeconds: 5,
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: isDev,
        type: "module",
      },
    }),
  ],
  output: "static",
});
