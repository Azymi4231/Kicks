import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        GrayMain: "#70706E",
        Gray: "#E7E7E3",
        WhiteMain: "#FAFAFA",
        DarkGray: "#232321",
        Blue: "#4A69E2",
        LightBlue: "#EAF0FF",
        Yellow: "#FFA52F",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
