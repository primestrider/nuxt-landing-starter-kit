// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/a11y",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "nuxt-security",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  // language config
  i18n: {
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
    url: "https://example.com",
    name: "Nuxt Landing Starter Kit",
  },

  sitemap: {
    autoLastmod: true,
  },

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
