/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        congo: {
          green: '#009543',
          greenDark: '#006B30',
          yellow: '#FBDE4A',
          red: '#DC241F',
        },
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Ciblage spécifique écrans TV / Full HD & 4K
      },
    },
  },
}