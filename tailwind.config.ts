import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow':'#FED700',
        'tti-primary': '#7C3AED',
        'tti-secondary': '#8B5CF6',
        'tti-accent': '#A78BFA',
        'tti-dark': '#2D3748',
        'tti-light': '#F7FAFC',
        'tti-footer': '#1A202C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },  
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#7C3AED",
          "secondary": "#8B5CF6",
          "accent": "#A78BFA",
          "neutral": "#2D3748",
          "base-100": "#FFFFFF",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
    ],
  },
};
export default config;
