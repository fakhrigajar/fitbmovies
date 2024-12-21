/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primary: {
          45: "#E50000",
          50: "#FF0000",
          55: "#FF1919",
          60: "#FF3333",
          80: "#FF9999",
          90: "#FFCCCC",
          95: "#FFE5E5",
          99: "#FFFAFA",
        },
        dark: {
          "06": "#0F0F0F",
          "08": "#141414",
          10: "#1A1A1A",
          12: "#1F1F1F",
          15: "#262626",
          20: "#333333",
          25: "#404040",
          30: "#4C4C4C",
        },
        gray: {
          60: "#999999",
          65: "#A6A6A6",
          70: "#B3B3B3",
          75: "#BFBFBF",
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
      },
      screens: {
        sm: "640px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
