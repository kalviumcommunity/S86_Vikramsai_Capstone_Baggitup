/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moonlight: "#E1E2E1",
        midnight: "#34495E",
        ocean: "#1B3B6F",
        noir: "#0D1B2A",
        accent: "#F9A825", // vibrant yellow for highlights
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
