/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM Sans': ["DM Sans", "sans-serif"],
        'Inter': ["Inter", "sans-serif"]
      },
      colors: {
        'primary': '#ffffff',
        'secondary': '#edf2f7',
        'secondary-two': '#E2E8F0',
        'tertiary': '#322659',
        'text-color': '#718096'
      }
    },
  },
  plugins: [],
}