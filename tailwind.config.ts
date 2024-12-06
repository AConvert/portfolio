import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        matter: ["var(--matter)", "sans-serif"],
      },
      colors: {
        white: "#f9f8f6",
        black: "#000000",
        purple: "#5c54f9",
      },
    },
  },
  plugins: [],
} satisfies Config;
