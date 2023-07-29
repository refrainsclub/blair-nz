// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  app: {
    head: {
      title: "Blair",
      meta: [
        {
          name: "description",
          content: "James Blair is a software developer from New Zealand",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
