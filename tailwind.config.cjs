/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // brown: "#3F2305",
        // green: "#004225",
        // skin: "#F2ECBE",
        // white: "#FFFAF4",
        dark: "#332941",
        light: "#FFF8E3",
        purple: "#864AF9",
      },
    },
  },
  plugins: [],
};
