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
        "dark-red": "var(--dark-red)",
        cream: "var(--cream)",
        green: "var(--green)",
        dark: "var(--dark)",
        light: "var(--light)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in-0.3": "fadeIn 0.3s ease-out",
        "fade-out-0.3": "fadeOut 0.3s ease-out",
      },
      fontFamily: {
        tan: ["TAN Meringue", "sans-serif"],
        thasadithBold: ["Thasadith-bold", "sans-serif"],
        thasadithBoldItalic: ["Thasadith-bold-italic", "sans-serif"],
        thasadithItalic: ["Thasadith-italic", "sans-serif"],
        thasadith: ["Thasadith", "sans-serif"],
        coralThin: ["coralThin", "sans-serif"],
        coralLight: ["coralLight", "sans-serif"],
        coralRegular: ["coralRegular", "sans-serif"],
        archivoBlack: ["archivoBlack", "sans-serif"],
        aristotelicaPro: ["aristotelicaPro", "sans-serif"],
        ballpoint: ["ballpoint", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
