import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage:{
      primary: '#da3f3f'
    },
    colors: {
      primary: '#da3f3f',
      segundary: '#2E2E2E'
    }
  },
  plugins: [],
};
export default config;
