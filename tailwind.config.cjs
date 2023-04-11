/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'kfblue': '#004D81',
        'kfyellow': '#FFBC00',
        'kfwhite': '#FFFDFD',
        transparent: 'transparent',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
