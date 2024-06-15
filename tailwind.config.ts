import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        GrayMain: "#70706E",
        Gray: "#E7E7E3",
        WhiteMain: "#FAFAFA",
        DarkGray: "#232321",
        Blue: "#4A69E2",
        Yellow: "#FFA52F",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
