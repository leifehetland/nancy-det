import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Davis Executive Training palette.
        // `ink` is the deep navy used for heroes, the utility bar and the footer.
        ink: {
          DEFAULT: "#0f1a2e",
          deep: "#0b1424",
          soft: "#16233c",
          line: "#26344f",
        },
        // `brand` is the DET red from the logo.
        //
        // CONTRAST RULES (all measured against WCAG AA, 4.5:1 for body text):
        //   bg-brand          fills only. White text on it is 4.72:1. OK.
        //   text-brand-dark   red TEXT on light surfaces. 6.03:1 on white.
        //                     Plain `text-brand` on white is 4.48:1 and FAILS.
        //   text-brand-light  red TEXT on navy. 5.76:1 on #0f1a2e.
        //                     Plain `text-brand` on navy is 3.7:1 and FAILS.
        brand: {
          DEFAULT: "#e31e24",
          dark: "#c4161c",
          light: "#f4666a",
          tint: "#fee6e7",
          wash: "#fef4f4",
        },
        mist: {
          DEFAULT: "#f1f5f9",
          light: "#f8fafc",
          line: "#e2e8f0",
        },
        slate: {
          body: "#475569",
          // Was #94a3b8, which is only 2.56:1 on white and failed AA badly.
          // #64748b is 4.76:1.
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 26, 46, 0.04), 0 8px 24px rgba(15, 26, 46, 0.06)",
        lift: "0 18px 40px rgba(15, 26, 46, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
