import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#1C1C1F",
        "primLig": "#EBEEF1",
        "nav": "#E84057",
        "navHover": "rgb(185,52,70)",
        "pink": "#85417C",
        "lol_light": "rgb(83 131 232 / 50%)",
        "secondary": "#282830",
        "text_light":"rgb(57 57 64)",
      }
    },
  },
  plugins: [],
};
export default config;
