import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#00000",
        violet: "#B892FF",
        torquoise: "#84E6F8",
        lightPink: "#F7CACD",
        cream: "#EFC88B",
        rose: "#ßEA638C",
      },
    },
  },
  plugins: [],
} satisfies Config;
