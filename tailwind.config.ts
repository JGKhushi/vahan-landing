import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: "#1c3f94",     // deep government blue (headers, primary buttons)
          blue: "#2557a7",     // secondary blue
          saffron: "#ff9933",  // Indian flag saffron (accents)
          green: "#138808",    // Indian flag green (accents)
          sky: "#eef4fb",      // very light blue page background
        },
      },
      fontFamily: {
        // "app" font is driven by CSS variables we set per-language (dynamic fonts)
        app: ["var(--font-app)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
