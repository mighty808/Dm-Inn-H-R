/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "text": "#fafafa",
      "background": "#acacac",
      "primary": "#d69e3d",
      "secondary":"#fbfbfe"
    },
  },
  plugins: [],
}