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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
          "3xl": "6rem",
        },
        screens: {
          sm: "700",
          lg: "800px",
          xl: "1200px",
          "2xl": "1400px",
          "3xl": "1512px",
        },
      },
    },
    screens: {
      "3xl": "1512px",
      "2xl": "1400px",
      xl: "1200px",
      lg: "800px",
      sm: "393px",
    },
  },
  plugins: [],
} satisfies Config;
