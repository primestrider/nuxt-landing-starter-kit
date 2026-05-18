// https://nuxt.com/docs/api/configuration/nuxt-config

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "https://example.com";
const siteName =
  process.env.NUXT_PUBLIC_SITE_NAME || "Nuxt Landing Starter Kit";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: [
    "motion-v/nuxt",
    "@nuxt/a11y",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "nuxt-security",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  app: {
    head: {
      titleTemplate: `${siteName} | %s`,
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
    },
  },

  i18n: {
    baseUrl: siteUrl,
    defaultLocale: "id",
    strategy: "prefix_except_default",
    langDir: "locales/",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "id",
        language: "id-ID",
        file: "id/index.ts",
      },
      {
        code: "en",
        language: "en-US",
        file: "en/index.ts",
      },
    ],
  },

  site: {
    url: siteUrl,
    name: siteName,
  },

  image: {
    format: ["webp", "avif"],
  },

  sitemap: {
    autoLastmod: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  routeRules: {
    "/**": { prerender: true },
  },

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
