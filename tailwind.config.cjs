/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'kfblue': '#004D81',
      'kfyellow': '#FFBC00',
      'kfwhite': '#FFFDFD',
      transparent: 'transparent',
      primary: colors.kfblue,
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  },
  plugins: [require("@tailwindcss/typography")],
};
