/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#161616",
        light: "#FEFCF3",
        orange: "#fd6532",
        pink: "#FF4B91",
        // bg-gradient-to-r from-[#fd6532] to-[#FF4B91]
        // bg-[#100F0F] hover:bg-[#191919]
      },
    },
  },
  plugins: [],
};
