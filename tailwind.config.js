/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        bodoni: ["Libre Bodoni", "serif"],
        playfair: ["Playfair Display", "serif"],
      },

      screens: {
        xs: "500px",   // ✅ custom breakpoint
      },

    },
  },
};