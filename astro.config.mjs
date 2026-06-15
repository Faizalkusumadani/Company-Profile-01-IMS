import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  site: "https://intisukses-ms.com/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    icon(),
    sitemap(),
    AstroPWA({
      // Mode otomatis ikut environment (dev/production)
      mode: isDev ? "development" : "production",

      // Auto update SW saat ada versi baru
      registerType: "autoUpdate",

      // Asset statis kecil yang di-precache langsung
      includeAssets: [
        "favicon-ims.svg",
        "robots.txt",
        "pwa-192x192.png",
        "pwa-512x512.png",
        "ims-touch-icon.png",
      ],

      manifest: {
        name: "Inti Sukses Mitra Sejati",
        short_name: "IntiSukses",
        description: "Solusi sukses untuk kebutuhan Anda",
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
            // Maskable icon: pisah dari "any" sesuai spec terbaru
            // Idealnya file berbeda dengan safe zone padding
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        // Hanya precache asset kecil: JS, CSS, HTML, font
        // Gambar besar ditangani runtimeCaching di bawah
        globPatterns: ["**/*.{js,css,html,ico,woff,woff2,txt}"],

        // Naikkan sedikit dari default 2MB untuk handle font/svg kecil
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, // 3 MB

        // Strategi cache runtime untuk gambar & asset besar
        runtimeCaching: [
          {
            // Gambar produk & hero (PNG, JPG, WebP) — CacheFirst: load dari cache dulu
            urlPattern: /\/_astro\/.*\.(png|jpg|jpeg|webp)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "product-images",
              expiration: {
                maxEntries: 80, // Maksimal 80 gambar tersimpan
                maxAgeSeconds: 60 * 60 * 24 * 30, // Expired setelah 30 hari
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // SVG besar (diagram produk, ilustrasi) — CacheFirst
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
            // Gambar di folder public/ selain _astro (misal: Founders/M.png)
            urlPattern: /\/(?!_astro).*\.(png|jpg|jpeg|webp|svg)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "public-images",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 14, // 14 hari
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Halaman HTML — NetworkFirst: selalu coba ambil fresh dari server
            urlPattern: /\.html$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "html-pages",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 hari
              },
              networkTimeoutSeconds: 5, // Fallback ke cache kalau server > 5 detik
            },
          },
          {
            // Google Fonts stylesheet
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
            },
          },
          {
            // Google Fonts file
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 tahun
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },

      devOptions: {
        // Aktif di dev agar bisa test manifest & SW
        enabled: isDev,
        type: "module",
      },
    }),
  ],
  output: "static",
});
