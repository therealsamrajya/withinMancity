/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#6CABDD",
        secondary:"#193F6E",
        tertiary:"#FFFFFF",
        highlight:"#AB0C2E",
      },
    },
  },
  plugins: [],
}