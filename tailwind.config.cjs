/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  colors: {
    primary: this.colors.kfblue,
    'kfblue': '#004D81',
    'kfyellow': '#FFBC00',
    'kfwhite': '#FFFDFD',
    transparent: 'transparent',
  },
  plugins: [require("@tailwindcss/typography")],
};
