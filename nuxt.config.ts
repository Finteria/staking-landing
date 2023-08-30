export default defineNuxtConfig({
  css: [
    "normalize.css",
    "@/assets/style/vars.css",
    "@/assets/style/font.css",
    "@/assets/style/main.css",
    "@/assets/style/calc/main.scss",
  ],

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      PLATFORM_URL: process.env.PLATFORM_URL,
      SENTRY_ENV: process.env.SENTRY_ENV,
      recaptcha: {
        v2SiteKey: process.env.RECAPTCHA_KEY,
      },
    },
  },

  modules: ["vue-recaptcha/nuxt"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/calc/include.scss" as *;',
        },
      },
    },
  },
});
