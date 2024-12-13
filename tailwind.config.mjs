/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    // overwrite indstillinger her
    extend: {
      // extend indstillinger her
      /* Tilføj din egen farvepalette nedenfor */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          50: "#F0F9FF",
          100: "#DFF2FF",
          200: "#CAEDFF",
          300: "#79D4FF",
          400: "#32C0FE",
          500: "#07A8F0",
          600: "#0087CD",
          700: "#006BA6",
          800: "#035A89",
          900: "#094B71",
          950: "#062F4B",
        },
        pink: {
          50: "#FEF2F5",
          100: "#FCE7EB",
          200: "#F9D2DD",
          300: "#F4ADC2",
          400: "#EB7096",
          500: "#E25182",
          600: "#CD316D",
          700: "#AD235C",
          800: "#912052",
          900: "#7C1F4B",
          950: "#450C25",
        },
        yellow: {
          50: "#FDFAE9",
          100: "#FBF0B2",
          200: "#FAE68E",
          300: "#F7D14D",
          400: "#F2B91D",
          500: "#E2A110",
          600: "#C37C0B",
          700: "#9C580C",
          800: "#814612",
          900: "#6E3915",
          950: "#401C08",
        },
        trustpilot: {
          trustpilot: "#00B67A",
        },
      },

      /* Tilføj din egen spacing nedenfor */
      spacing: {
        // desktop
        "d-xxs": "8px",
        "d-xs": "16px",
        "d-s": "24px",
        "d-sm": "32px",
        "d-m": "40px",
        "d-ml": "48px",
        "d-lg": "64px",
        "d-xl": "80px",
        "d-2xl": "96px",
        "d-3xl": "104px",
        "d-4xl": "112px",
        "d-5xl": "128px",

        // mobil
        "m-xxs": "4px",
        "m-xs": "8px",
        "m-s": "16px",
        "m-sm": "24px",
        "m-m": "32px",
        "m-ml": "40px",
        "m-lg": "48px",
        "m-xl": "64px",
        "m-2xl": "80px",
        "m-3xl": "96px",
        "m-4xl": "104px",
        "m-5xl": "112px",
      },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dynapuff: ["DynaPuff", "serif"] /* eksempel på ekstra font */,
      },

      /* Tilføj dit typografiske hierarki herunder */
      fontSize: {
        "d-h1": ["4rem", { lineHeight: "2.5rem" }],
        "d-h2": ["3rem", { lineHeight: "1.8rem" }],
        "d-h3": ["2.7rem", { lineHeight: "1.3rem" }],
        "d-h4": ["1rem", { lineHeight: "1.6rem" }],
        "d-body": ["1rem", { lineHeight: "1.6rem" }],
        "d-body-sm": ["0.6rem", { lineHeight: "1.6rem" }],

        "m-h1": ["2.5rem", { lineHeight: "2.5rem" }],
        "m-h2": ["2.1rem", { lineHeight: "1.8rem" }],
        "m-h3": ["1.8rem", { lineHeight: "1.9rem" }],
        "m-h4": ["0.9rem", { lineHeight: "1.6rem" }],
        "m-body": ["0.9rem", { lineHeight: "1.6rem" }],
        "m-body-sm": ["0.6rem", { lineHeight: "1.6rem" }],
      },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },

      /* Borders - borderstørrelser herunder */
      borderWidth: {
        DEFAULT: "0px",
        0: "0px",
      },

      /* Border radius størrelser herunder */
      borderRadius: {
        default: "1.9rem",
        knapper: "1.6rem",
        none: "0px",
      },

      /* Box shadows herunder */
      boxShadow: {
        drop10: "0px 10px 25px 0 rgb(6 47 75 / 0.10)" /* x y blur spread farve / opacity */,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
