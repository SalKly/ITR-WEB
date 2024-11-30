/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2271ec",
        primaryShade: "#1f66d4",
        primaryTint: "#387fee",
        textWhite: "#F0F3FF",
        textDark: "#3A3619",
        textGray: "#A7A7A7",
      },

      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        CoconNext: ["CoconNext", ...defaultTheme.fontFamily.sans],
        InterVariable: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        "2xs": "0.6875rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.375rem",
        "2xl": "1.5rem",
        "3xl": "2.25rem",
        "4xl": "5rem",
      },
      backgroundImage: () => ({
        "gradient-blue": "linear-gradient(0deg , #00A1E2  0%, #2420D9 100%)",
        "gradient-green": "linear-gradient(0deg , #00C738  0%, #9AEABA 100%)",
        "gradient-red": "linear-gradient(0deg , #D92020  0%, #FC77D7 100%)",
        "gradient-orange": "linear-gradient(0deg , #FCC471   0%, #FF8327 100%)",
        "gradient-teal": "linear-gradient(0deg , #A2FEE8  0%, #1894A5 100%)",
      }),
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/line-clamp")],
};
