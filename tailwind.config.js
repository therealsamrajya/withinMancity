/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}",],
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
    keyframes: {
      fadePulse: {
        '0%, 100%': { opacity: '0' },
        '50%': { opacity: '1' },
      },
    },
    animation: {
      fadePulse: 'fadePulse 1s ease-in-out infinite', 
    },
  },
  plugins: [],
}